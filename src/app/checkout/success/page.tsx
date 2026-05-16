import Link from "next/link";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { routeConfig } from "@/data/routes";

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-white">
      <Breadcrumbs items={["Home", "Checkout", "Success"]} />

      <section className="mx-auto max-w-3xl px-4 pb-16 pt-4 text-center sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">ORDER CONFIRMED</h1>
        <p className="mt-4 text-[15px] leading-7 text-[#666]">
          Your order has been placed successfully. You can continue browsing the catalog or review your account for the latest order status.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={routeConfig.shop} className="rounded-sm bg-[#ff3434] px-5 py-2 text-[12px] font-bold uppercase text-white">
            Continue Shopping
          </Link>
          <Link href={routeConfig.account} className="rounded-sm border border-[#ddd] px-5 py-2 text-[12px] font-bold uppercase text-[#333] hover:border-[#ff3434] hover:text-[#ff3434]">
            View Account
          </Link>
        </div>
      </section>
    </div>
  );
}
