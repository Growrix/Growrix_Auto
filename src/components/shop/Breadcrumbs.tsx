import Link from "next/link";

type BreadcrumbsProps = {
  items: string[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-5 text-[14px] text-[#777] sm:px-6 lg:px-10">
      <Link href="/" className="hover:text-[#ff3434]">
        {items[0]}
      </Link>
      {items.slice(1).map((item) => (
        <span key={item}>
          <span className="px-2">›</span>
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
}
