import Image from "next/image";
import { blogPosts } from "@/data/home";

export default function BlogSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#ff3434]">Our recent posts</p>
          <h2 className="mt-2 text-[32px] font-black uppercase tracking-tight text-[#111]">Latest Blogs</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="relative h-55 overflow-hidden">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-3 text-[12px] text-[#999]">{post.date}</p>
              <h3 className="mt-2 text-[16px] font-bold uppercase text-[#111]">{post.title}</h3>
              <button className="mt-4 rounded-sm bg-[#111] px-5 py-2 text-[12px] font-bold uppercase text-white transition-colors duration-300 hover:bg-[#ff3434]">Read More</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
