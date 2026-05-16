"use client";

import { useState } from "react";
import { useCart } from "@/state/CartContext";

type AddToCartButtonProps = {
  productSlug: string;
};

export default function AddToCartButton({ productSlug }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(productSlug, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="rounded-sm bg-[#ff3434] px-6 py-3 text-[13px] font-bold uppercase text-white transition-colors hover:bg-[#d92424]"
    >
      {added ? "Added" : "Add To Cart"}
    </button>
  );
}
