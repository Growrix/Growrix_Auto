"use client";

import Link from "next/link";
import { dailyDealTabs } from "@/data/home";
import { getProductsByCategory } from "@/data/catalog";
import { categoryPath, routeConfig } from "@/data/routes";
import ProductCard from "@/components/shop/ProductCard";
import { useUtility } from "@/state/UtilityContext";
import { useEffect, useMemo, useState } from "react";

const dealCountdownSeedSeconds: Record<string, number> = {
  "brake-and-service-kits": 3 * 24 * 60 * 60 + 6 * 60 * 60 + 18 * 60 + 40,
  "engine-care-fluids": 2 * 24 * 60 * 60 + 11 * 60 * 60 + 42 * 60 + 15,
  "smart-driving-accessories": 1 * 24 * 60 * 60 + 9 * 60 * 60 + 17 * 60 + 55,
};

function toCountdownValues(totalSeconds: number) {
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const mins = Math.floor((totalSeconds % (60 * 60)) / 60);
  const secs = totalSeconds % 60;

  return [days, hours, mins, secs];
}

export default function DailyDealsPage() {
  const { t } = useUtility();
  const [activeTabSlug, setActiveTabSlug] = useState(dailyDealTabs[0]?.slug ?? "");
  const activeTab = useMemo(
    () => dailyDealTabs.find((tab) => tab.slug === activeTabSlug) ?? dailyDealTabs[0],
    [activeTabSlug],
  );
  const [secondsRemaining, setSecondsRemaining] = useState(
    dealCountdownSeedSeconds[activeTab?.slug ?? ""] ?? 0,
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSecondsRemaining((value) => (value > 0 ? value - 1 : 0));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeProducts = useMemo(
    () => (activeTab ? getProductsByCategory(activeTab.categorySlug).slice(0, 4) : []),
    [activeTab],
  );
  const activeCategoryHref = activeTab ? categoryPath(activeTab.categorySlug) : routeConfig.shop;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 text-[14px] text-[#777] sm:px-6 lg:px-10">
        <Link href="/" className="hover:text-[#ff3434]">{t("common.home")}</Link> <span className="px-2">›</span> <span>{t("common.dailyDeals")}</span>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">{t("dailyDeals.title")}</h1>
        <div className="mt-6 flex flex-wrap gap-0 border-b border-[#ddd]">
          {dailyDealTabs.map((tab) => (
            <button
              key={tab.slug}
              type="button"
              onClick={() => {
                setActiveTabSlug(tab.slug);
                setSecondsRemaining(dealCountdownSeedSeconds[tab.slug] ?? 0);
              }}
              className={`border px-5 py-4 text-[14px] ${activeTabSlug === tab.slug ? "border-b-white bg-white text-[#222]" : "bg-[#f5f5f5] text-[#666]"}`}
            >
              {t(tab.labelKey) || tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-4">
          {activeProducts.map((product, productIndex) => (
            <div key={product.slug}>
              <ProductCard product={product} />
              <div className="mt-3 grid grid-cols-4 gap-1 text-center text-[#222]">
                {toCountdownValues(Math.max(secondsRemaining - productIndex * 113, 0)).map((value, valueIndex) => {
                  const labels = [
                    t("dailyDeals.days"),
                    t("dailyDeals.hours"),
                    t("dailyDeals.mins"),
                    t("dailyDeals.secs"),
                  ];

                  return (
                    <div key={`${product.slug}-${labels[valueIndex]}`} className="border border-[#ddd] bg-white px-2 py-3">
                      <div className="text-[16px] font-black">{String(value).padStart(2, "0")}</div>
                      <div className="text-[11px] uppercase text-[#888]">{labels[valueIndex]}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={activeCategoryHref} className="bg-[#ff3434] px-7 py-3 text-[13px] font-bold uppercase text-white">{t("common.loadMore")}</Link>
        </div>
      </section>
    </div>
  );
}
