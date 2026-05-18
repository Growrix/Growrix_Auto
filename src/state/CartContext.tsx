"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getProductBySlug } from "@/data/catalog";
import { preferenceKeys } from "@/lib/localization";

export type CartItem = {
  productSlug: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (productSlug: string, quantity?: number) => void;
  updateQuantity: (productSlug: string, quantity: number) => void;
  removeFromCart: (productSlug: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function getInitialCartItems() {
  if (typeof window === "undefined") {
    return [] as CartItem[];
  }

  const raw = window.localStorage.getItem(preferenceKeys.cart);
  if (!raw) {
    return [] as CartItem[];
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [] as CartItem[];
    }

    return parsed
      .filter((entry): entry is CartItem => {
        return (
          typeof entry === "object"
          && entry !== null
          && typeof entry.productSlug === "string"
          && typeof entry.quantity === "number"
          && Number.isFinite(entry.quantity)
          && entry.quantity > 0
          && Boolean(getProductBySlug(entry.productSlug))
        );
      })
      .map((entry) => ({
        productSlug: entry.productSlug,
        quantity: Math.max(1, Math.floor(entry.quantity)),
      }));
  } catch {
    return [] as CartItem[];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => getInitialCartItems());

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(preferenceKeys.cart, JSON.stringify(items));
  }, [items]);

  const addToCart = (productSlug: string, quantity = 1) => {
    const safeQuantity = Math.max(1, Math.floor(quantity));

    setItems((current) => {
      const existing = current.find((item) => item.productSlug === productSlug);

      if (existing) {
        return current.map((item) =>
          item.productSlug === productSlug
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item,
        );
      }

      return [...current, { productSlug, quantity: safeQuantity }];
    });
  };

  const updateQuantity = (productSlug: string, quantity: number) => {
    const safeQuantity = Number.isFinite(quantity) ? Math.floor(quantity) : 0;

    setItems((current) =>
      current
        .map((item) =>
          item.productSlug === productSlug
            ? { ...item, quantity: Math.max(0, safeQuantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productSlug: string) => {
    setItems((current) => current.filter((item) => item.productSlug !== productSlug));
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = items.reduce((acc, item) => {
    const product = getProductBySlug(item.productSlug);

    if (!product) return acc;

    return acc + product.price * item.quantity;
  }, 0);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
    }),
    [items, itemCount, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
