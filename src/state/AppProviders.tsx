"use client";

import { type ReactNode } from "react";
import { CartProvider } from "@/state/CartContext";
import { UtilityProvider } from "@/state/UtilityContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <UtilityProvider>
      <CartProvider>{children}</CartProvider>
    </UtilityProvider>
  );
}
