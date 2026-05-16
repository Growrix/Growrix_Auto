import Image from "next/image";
import { productLists } from "@/data/home";

export default function ProductListsSection() {
  return (
    <section id="new-arrivals" className="bg-white py-14 scroll-mt-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-10">
        {productLists.map((column) => (
          <div key={column.title}>
            <h2 className="mb-5 text-[24px] font-black uppercase tracking-tight text-[#111]">{column.title}</h2>
            <div className="space-y-5">
              {column.items.map((item) => (
                <div key={item.title} className="group flex gap-4 border-b border-[#ececec] pb-4 transition-colors duration-300 last:border-0 hover:border-[#ffb3b3]">
                  <div className="relative h-16 w-16 shrink-0">
                    <Image src={item.image} alt={item.title} fill sizes="64px" className="object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium uppercase leading-5 text-[#222] transition-colors duration-300 group-hover:text-[#ff3434]">{item.title}</p>
                    <div className="mt-1 text-[15px] font-bold text-[#ff3434]">
                      {item.price}{" "}
                      {item.oldPrice ? <span className="ml-2 text-[#999] line-through">{item.oldPrice}</span> : null}
                    </div>
                    <div className="mt-1 text-[#ffb400]">★★★★★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
