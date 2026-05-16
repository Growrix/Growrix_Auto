"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { vehicleFilters } from "@/data/home";

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialValues = useMemo(
    () => ({
      make: searchParams.get("make") ?? "",
      model: searchParams.get("model") ?? "",
      year: searchParams.get("year") ?? "",
      q: searchParams.get("q") ?? "",
    }),
    [searchParams],
  );

  const [values, setValues] = useState(initialValues);

  const updateValue = (key: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (values.q) params.set("q", values.q);
    if (values.make) params.set("make", values.make);
    if (values.model) params.set("model", values.model);
    if (values.year) params.set("year", values.year);

    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="mt-8 grid gap-3 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
      <input
        value={values.q}
        onChange={(event) => updateValue("q", event.target.value)}
        placeholder="Search products"
        className="h-12 rounded-sm border border-[#ddd] px-4 text-[14px] text-[#444]"
      />

      <select
        value={values.make}
        onChange={(event) => updateValue("make", event.target.value)}
        className="h-12 rounded-sm border border-[#ddd] px-4 text-[14px] text-[#444]"
      >
        <option value="">Select Make</option>
        {vehicleFilters.make.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={values.model}
        onChange={(event) => updateValue("model", event.target.value)}
        className="h-12 rounded-sm border border-[#ddd] px-4 text-[14px] text-[#444]"
      >
        <option value="">Select Model</option>
        {vehicleFilters.model.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={values.year}
        onChange={(event) => updateValue("year", event.target.value)}
        className="h-12 rounded-sm border border-[#ddd] px-4 text-[14px] text-[#444]"
      >
        <option value="">Select Year</option>
        {vehicleFilters.year.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={handleSearch}
        className="h-12 rounded-sm bg-[#ff3434] px-6 text-[13px] font-bold uppercase tracking-wide text-white"
      >
        Search
      </button>
    </div>
  );
}
