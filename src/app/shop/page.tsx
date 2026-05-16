import Link from "next/link";
import { Suspense } from "react";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import ProductCard from "@/components/shop/ProductCard";
import SearchFilters from "@/components/shop/SearchFilters";
import { categories, products } from "@/data/catalog";
import { shopPage } from "@/data/pages";
import { categoryPath } from "@/data/routes";

export default function ShopPage() {
  return (
    <div className="bg-white">
      <Breadcrumbs items={shopPage.breadcrumb} />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">{shopPage.title}</h1>
        <p className="mt-3 max-w-4xl text-[15px] leading-7 text-[#666]">{shopPage.subtitle}</p>

        <Suspense fallback={<div className="mt-8 h-46 animate-pulse bg-[#f5f5f5]" />}>
          <SearchFilters />
        </Suspense>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={categoryPath(category.slug)}
              className="rounded-full border border-[#ddd] px-4 py-2 text-[12px] font-bold uppercase text-[#555] transition-colors hover:border-[#ff3434] hover:text-[#ff3434]"
            >
              {category.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
