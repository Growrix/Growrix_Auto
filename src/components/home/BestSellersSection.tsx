import Image from "next/image";
import { bestSellerProducts, bestSellerTabs } from "@/data/home";

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex justify-center gap-1 text-[#ffb400]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>{index < value ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function BestSellersSection() {
  return (
    <section id="under-100" className="bg-white py-14 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#ff3434]">Top selection this week</p>
          <h2 className="mt-2 text-[32px] font-black uppercase tracking-tight text-[#111]">Best Sellers</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {bestSellerTabs.map((item, index) => (
              <button
                key={item}
                className={`rounded-full border px-4 py-2 text-[12px] font-bold uppercase transition-all duration-300 ${index === 0 ? "border-[#ff3434] bg-[#ff3434] text-white" : "border-[#ddd] bg-white text-[#555] hover:border-[#ff3434] hover:text-[#ff3434]"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {bestSellerProducts.map((product) => (
            <article key={product.title} className="group relative border border-[#e6e6e6] bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute left-0 top-0 z-10 bg-[#ff3434] px-3 py-1 text-[12px] font-bold text-white">{product.discount}</div>
              {product.badge ? <div className="absolute right-0 top-0 z-10 bg-[#2d7bf4] px-3 py-1 text-[12px] font-bold text-white">{product.badge}</div> : null}
              <div className="relative mx-auto h-52 w-full overflow-hidden">
                <Image src={product.image} alt={product.title} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-3 min-h-10 text-center text-[13px] font-medium uppercase leading-5 text-[#222]">{product.title}</h3>
              <StarRating value={product.rating} />
              <div className="mt-3 flex items-center justify-center gap-3 text-[15px] font-bold">
                <span className="text-[#ff3434]">{product.price}</span>
                <span className="text-[#999] line-through">{product.oldPrice}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="rounded-full bg-[#ff3434] px-7 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#d92424]">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
