import Image from "next/image";
import { heroSlides } from "@/data/home";

export default function HeroSection() {
  const hero = heroSlides[0];

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] text-white">
      <div className="relative min-h-135 lg:min-h-155">
        <Image src={hero.backgroundImage} alt="Automotive hero" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/45 to-black/65" />
        <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)] lg:block" />

        <button className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#222] shadow-lg lg:left-6">‹</button>
        <button className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#222] shadow-lg lg:right-6">›</button>

        <div className="relative mx-auto flex min-h-135 max-w-7xl items-center justify-center px-4 text-center sm:px-6 lg:min-h-155 lg:px-10">
          <div className="max-w-4xl animate-fade-in-up">
            <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.35em] text-white/90">{hero.eyebrow}</p>
            <p className="mb-3 text-[28px] font-black italic text-[#ff4949] sm:text-[34px]">{hero.titleTop}</p>
            <h1 className="text-[42px] font-black uppercase leading-[0.95] tracking-tight sm:text-[58px] lg:text-[76px]">
              {hero.titleBottom}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-white/80 sm:text-[16px]">{hero.description}</p>
            <button className="mt-8 rounded-full bg-white px-8 py-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#111] transition-colors duration-300 hover:bg-[#ff3434] hover:text-white">
              {hero.ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
