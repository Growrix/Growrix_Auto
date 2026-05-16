import Image from "next/image";
import Link from "next/link";
import { dealsPage } from "@/data/pages";
import { bestSellerProducts } from "@/data/home";

export default function DailyDealsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 text-[14px] text-[#777] sm:px-6 lg:px-10">
        <Link href="/" className="hover:text-[#ff3434]">Home</Link> <span className="px-2">›</span> <span>{dealsPage.breadcrumb[1]}</span>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">{dealsPage.title}</h1>
        <div className="mt-6 flex flex-wrap gap-0 border-b border-[#ddd]">
          {dealsPage.tabs.map((tab, index) => (
            <button key={tab} className={`border px-5 py-4 text-[14px] ${index === 0 ? "border-b-white bg-white text-[#222]" : "bg-[#f5f5f5] text-[#666]"}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-4">
          {bestSellerProducts.slice(0, 4).map((product) => (
            <article key={product.title} className="relative border border-[#e4e4e4] bg-white p-4">
              <div className="absolute left-0 top-0 bg-[#ff3434] px-3 py-1 text-[12px] font-bold text-white">{product.discount}</div>
              <div className="relative mx-auto h-60 w-full">
                <Image src={product.image} alt={product.title} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-contain" />
              </div>
              <h2 className="mt-3 min-h-12 text-center text-[14px] font-medium uppercase leading-5 text-[#222]">{product.title}</h2>
              <div className="mt-2 text-center text-[#ffb400]">★★★★★</div>
              <div className="mt-2 flex items-center justify-center gap-3 text-[17px] font-bold">
                <span className="text-[#ff3434]">{product.price}</span>
                <span className="text-[#999] line-through">{product.oldPrice}</span>
              </div>
              <div className="mt-6 grid grid-cols-4 gap-1 text-center text-[#222]">
                {dealsPage.timers.map((timer) => (
                  <div key={timer} className="border border-[#ddd] bg-white px-2 py-3">
                    <div className="text-[16px] font-black">{timer.split(" ")[0]}</div>
                    <div className="text-[11px] uppercase text-[#888]">{timer.split(" ")[1]}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-[#ff3434] px-7 py-3 text-[13px] font-bold uppercase text-white">Load More</button>
        </div>
      </section>
    </div>
  );
}
