"use client";

import { bestSellerProducts, bestSellerTabs } from "@/data/home";
import Link from "next/link";
import ProductCard from "@/components/shop/ProductCard";
import { categoryPath, routeConfig } from "@/data/routes";
import { useUtility } from "@/state/UtilityContext";
import { useMemo, useState } from "react";

export default function BestSellersSection() {
  const { t } = useUtility();
  const [activeCategorySlug, setActiveCategorySlug] = useState(bestSellerTabs[0]?.categorySlug ?? "");

  const filteredProducts = useMemo(() => {
    if (!activeCategorySlug) return bestSellerProducts.slice(0, 8);
    return bestSellerProducts
      .filter((product) => product.categorySlug === activeCategorySlug)
      .slice(0, 8);
  }, [activeCategorySlug]);

  const activeCategoryHref = activeCategorySlug ? categoryPath(activeCategorySlug) : routeConfig.shop;

  return (
    <section id="under-100" className="bg-white py-14 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#ff3434]">{t("home.topSelection")}</p>
          <h2 className="mt-2 text-[32px] font-black uppercase tracking-tight text-[#111]">{t("home.bestSellers")}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {bestSellerTabs.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveCategorySlug(item.categorySlug)}
                className={`rounded-full border px-4 py-2 text-[12px] font-bold uppercase transition-all duration-300 ${activeCategorySlug === item.categorySlug ? "border-[#ff3434] bg-[#ff3434] text-white" : "border-[#ddd] bg-white text-[#555] hover:border-[#ff3434] hover:text-[#ff3434]"}`}
              >
                {t(item.labelKey) || item.label}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <Link href={activeCategoryHref} className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ff3434] hover:text-[#d92424]">
              {t("home.shopByCategory")}
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>

        <div className="mt-8 text-center">
          <Link href={activeCategoryHref} className="rounded-full bg-[#ff3434] px-7 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#d92424]">
            {t("common.loadMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
