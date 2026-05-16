"use client";

import { useState } from "react";

export default function NewsletterModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 py-10 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-sm bg-white shadow-2xl">
        <button
          aria-label="Close newsletter modal"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-white"
        >
          ×
        </button>
        <div className="grid gap-8 px-6 py-10 md:grid-cols-2 md:px-10 md:py-12">
          <div className="pt-4">
            <h2 className="text-[40px] font-black uppercase leading-none text-[#111]">Newsletter Subscribe</h2>
            <p className="mt-8 max-w-xl text-[16px] leading-8 text-[#555]">
              Subscribe to the mailing list to receive updates on new arrivals, special offers and other discount information.
            </p>
            <div className="mt-10 flex max-w-xl overflow-hidden rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <input placeholder="Your email address" className="h-14 flex-1 px-4 text-[#1f1f1f] outline-none" />
              <button className="h-14 bg-[#ff3434] px-6 text-[15px] font-bold text-white">SUBSCRIBE</button>
            </div>
            <label className="mt-6 flex items-center gap-3 text-[15px] text-[#333]">
              <input type="checkbox" className="h-4 w-4" />
              Don&apos;t show this popup again
            </label>
            <div className="mt-8 flex gap-3 text-[#1c1c1c]">
              {["f", "t", "G+", "in", "p", "▶"].map((item) => (
                <span key={item} className="flex h-10 w-10 items-center justify-center border border-[#ddd] bg-white text-[15px] font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-full max-w-120">
              <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80')] bg-cover bg-center shadow-xl" />
              <div className="absolute right-8 top-6 h-64 w-64 rounded-full bg-[url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80')] bg-cover bg-center shadow-xl" />
              <div className="absolute bottom-0 left-8 h-32 w-32 rounded-full bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center shadow-xl" />
              <div className="absolute bottom-2 right-4 h-44 w-44 rounded-full bg-[url('https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=700&q=80')] bg-cover bg-center shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
