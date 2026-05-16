"use client";

import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { accountPage } from "@/data/pages";
import { useUtility } from "@/state/UtilityContext";

export default function AccountPage() {
  const { selectedLanguage, selectedCurrency } = useUtility();

  return (
    <div className="bg-white">
      <Breadcrumbs items={accountPage.breadcrumb} />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">{accountPage.title}</h1>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="border border-[#eee] bg-[#fafafa] p-6">
            <h2 className="text-[20px] font-black uppercase text-[#222]">Profile Overview</h2>
            <p className="mt-3 text-[14px] leading-7 text-[#666]">
              Keep account preferences updated so language, currency, and checkout defaults remain consistent across sessions.
            </p>
          </article>

          <article className="border border-[#eee] bg-[#fafafa] p-6">
            <h2 className="text-[20px] font-black uppercase text-[#222]">Current Preferences</h2>
            <div className="mt-3 space-y-2 text-[14px] text-[#444]">
              <p><span className="font-bold">Language:</span> {selectedLanguage}</p>
              <p><span className="font-bold">Currency:</span> {selectedCurrency}</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
