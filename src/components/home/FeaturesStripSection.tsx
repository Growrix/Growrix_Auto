import { featureStrip } from "@/data/home";

export default function FeaturesStripSection() {
  return (
    <section className="bg-white py-4">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {featureStrip.map((item) => (
          <div key={item.title} className="flex items-center gap-4 rounded-sm border border-[#ececec] bg-[#fafafa] px-5 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#ff3434] text-[#ff3434]">★</div>
            <div>
              <h3 className="text-[13px] font-bold uppercase text-[#111]">{item.title}</h3>
              <p className="text-[12px] text-[#777]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
