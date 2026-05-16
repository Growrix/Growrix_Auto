import Breadcrumbs from "@/components/shop/Breadcrumbs";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/catalog";
import { searchPage } from "@/data/pages";

type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function toSingle(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = toSingle(params.q).trim().toLowerCase();
  const make = toSingle(params.make);
  const model = toSingle(params.model);
  const year = toSingle(params.year);

  const results = products.filter((product) => {
    if (!query) return true;
    return `${product.title} ${product.excerpt} ${product.tags.join(" ")}`.toLowerCase().includes(query);
  });

  return (
    <div className="bg-white">
      <Breadcrumbs items={searchPage.breadcrumb} />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">{searchPage.title}</h1>

        <div className="mt-3 flex flex-wrap gap-2 text-[12px] uppercase text-[#666]">
          {query ? <span className="rounded-full bg-[#f2f2f2] px-3 py-1">Query: {query}</span> : null}
          {make ? <span className="rounded-full bg-[#f2f2f2] px-3 py-1">Make: {make}</span> : null}
          {model ? <span className="rounded-full bg-[#f2f2f2] px-3 py-1">Model: {model}</span> : null}
          {year ? <span className="rounded-full bg-[#f2f2f2] px-3 py-1">Year: {year}</span> : null}
        </div>

        {results.length === 0 ? (
          <div className="mt-8 border border-[#eee] bg-[#fafafa] px-6 py-10 text-[14px] text-[#666]">
            No products matched your search. Try another keyword or adjust your filters.
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
