"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

const languages = ["ENGLISH", "FRANCAIS", "ESPANOL"];
const currencies = ["USD", "EUR", "GBP"];

type UtilityContextValue = {
  languages: string[];
  currencies: string[];
  selectedLanguage: string;
  selectedCurrency: string;
  setLanguage: (language: string) => void;
  setCurrency: (currency: string) => void;
};

const UtilityContext = createContext<UtilityContextValue | null>(null);

export function UtilityProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const value = useMemo(
    () => ({
      languages,
      currencies,
      selectedLanguage,
      selectedCurrency,
      setLanguage: setSelectedLanguage,
      setCurrency: setSelectedCurrency,
    }),
    [selectedLanguage, selectedCurrency],
  );

  return <UtilityContext.Provider value={value}>{children}</UtilityContext.Provider>;
}

export function useUtility() {
  const context = useContext(UtilityContext);

  if (!context) {
    throw new Error("useUtility must be used within a UtilityProvider");
  }

  return context;
}
