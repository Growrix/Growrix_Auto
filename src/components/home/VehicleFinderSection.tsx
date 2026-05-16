import { Suspense } from "react";
import SearchFilters from "@/components/shop/SearchFilters";

export default function VehicleFinderSection() {
  return (
    <section className="bg-white pb-14 pt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
          <div className="bg-black/70 px-6 py-12 sm:px-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[30px] font-black uppercase tracking-tight text-white sm:text-[42px]">Select Your Vehicle</h2>
              <p className="mt-2 text-[14px] font-semibold uppercase tracking-[0.25em] text-white/70">Over 120,000 automotive and truck parts</p>
            </div>
            <Suspense fallback={<div className="mt-8 h-46 animate-pulse bg-white/10" />}>
              <SearchFilters tone="dark" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
