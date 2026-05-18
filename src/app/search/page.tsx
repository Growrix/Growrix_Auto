import Breadcrumbs from "@/components/shop/Breadcrumbs";
import ProductCard from "@/components/shop/ProductCard";
import {
  getProductCompatibility,
  getProductExcerpt,
  getProductTitle,
  products,
} from "@/data/catalog";
import { getServerPreferences } from "@/lib/serverPreferences";

type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function toSingle(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { t, language } = await getServerPreferences();
  const params = await searchParams;
  const queryInput = toSingle(params.q).trim();
  const query = queryInput.toLowerCase();
  const make = toSingle(params.make).trim();
  const model = toSingle(params.model).trim();
  const year = toSingle(params.year).trim();

  const results = products.filter((product) => {
    const compatibility = getProductCompatibility(product);
    const title = getProductTitle(product, language);
    const excerpt = getProductExcerpt(product, language);
    const matchesQuery = !query
      || `${title} ${excerpt} ${product.tags.join(" ")}`.toLowerCase().includes(query);
    const matchesMake = !make || compatibility.makes.some((entry) => entry.toLowerCase() === make.toLowerCase());
    const matchesModel = !model || compatibility.models.some((entry) => entry.toLowerCase() === model.toLowerCase());
    const matchesYear = !year || compatibility.years.some((entry) => entry === year);

    return matchesQuery && matchesMake && matchesModel && matchesYear;
  });

  return (
    <div className="bg-white">
      <Breadcrumbs items={["Home", "Search"]} />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">{t("search.results")}</h1>

        <div className="mt-3 flex flex-wrap gap-2 text-[12px] uppercase text-[#666]">
          {query ? <span className="rounded-full bg-[#f2f2f2] px-3 py-1">{t("search.query")}: {queryInput}</span> : null}
          {make ? <span className="rounded-full bg-[#f2f2f2] px-3 py-1">{t("search.make")}: {make}</span> : null}
          {model ? <span className="rounded-full bg-[#f2f2f2] px-3 py-1">{t("search.model")}: {model}</span> : null}
          {year ? <span className="rounded-full bg-[#f2f2f2] px-3 py-1">{t("search.year")}: {year}</span> : null}
        </div>

        {results.length === 0 ? (
          <div className="mt-8 border border-[#eee] bg-[#fafafa] px-6 py-10 text-[14px] text-[#666]">
            {t("search.noResults")}
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {results.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
