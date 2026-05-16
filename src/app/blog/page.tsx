import Image from "next/image";
import Link from "next/link";
import { blogPage } from "@/data/pages";
import { blogPosts } from "@/data/home";

export default function BlogPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 text-[14px] text-[#777] sm:px-6 lg:px-10">
        <Link href="/" className="hover:text-[#ff3434]">Home</Link> <span className="px-2">›</span> <span>{blogPage.breadcrumb[1]}</span>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">{blogPage.title}</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title}>
              <div className="relative h-60 overflow-hidden">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <p className="mt-3 text-[12px] text-[#999]">{post.date}</p>
              <h2 className="mt-2 text-[16px] font-bold uppercase text-[#222]">{post.title}</h2>
              <button className="mt-4 bg-[#111] px-5 py-2 text-[12px] font-bold uppercase text-white">Read More</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
