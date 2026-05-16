import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { getSupportLinkBySlug, supportLinks } from "@/data/support";

type SupportPageProps = {
  params: Promise<{ supportSlug: string }>;
};

export function generateStaticParams() {
  return supportLinks.map((item) => ({ supportSlug: item.slug }));
}

export default async function SupportPage({ params }: SupportPageProps) {
  const { supportSlug } = await params;
  const supportPage = getSupportLinkBySlug(supportSlug);

  if (!supportPage) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Breadcrumbs items={["Home", supportPage.label]} />

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">{supportPage.label}</h1>
        <p className="mt-3 text-[15px] leading-7 text-[#666]">{supportPage.description}</p>

        <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#555]">
          {supportPage.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
