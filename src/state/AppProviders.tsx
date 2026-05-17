"use client";

import { type ReactNode } from "react";
import { CartProvider } from "@/state/CartContext";
import { AuthProvider } from "@/state/AuthContext";
import { UtilityProvider } from "@/state/UtilityContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <UtilityProvider>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </UtilityProvider>
  );
}
