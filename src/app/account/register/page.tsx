"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { routeConfig } from "@/data/routes";

type RegisterForm = {
  fullName: string;
  email: string;
  password: string;
};

const initialState: RegisterForm = {
  fullName: "",
  email: "",
  password: "",
};

export default function RegisterPage() {
  const [formState, setFormState] = useState<RegisterForm>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState(initialState);
  };

  return (
    <div className="bg-white">
      <Breadcrumbs items={["Home", "Account", "Register"]} />

      <section className="mx-auto max-w-xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">REGISTER</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            required
            value={formState.fullName}
            onChange={(event) => setFormState((prev) => ({ ...prev, fullName: event.target.value }))}
            placeholder="Full Name"
            className="h-12 w-full border border-[#ddd] px-4"
          />
          <input
            type="email"
            required
            value={formState.email}
            onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="Email"
            className="h-12 w-full border border-[#ddd] px-4"
          />
          <input
            type="password"
            required
            value={formState.password}
            onChange={(event) => setFormState((prev) => ({ ...prev, password: event.target.value }))}
            placeholder="Password"
            className="h-12 w-full border border-[#ddd] px-4"
          />
          <button type="submit" className="h-12 w-full bg-[#ff3434] text-[13px] font-bold uppercase text-white">
            Create Account
          </button>
          {submitted ? <p className="text-[14px] font-medium text-[#1d7a34]">Registration completed for this demo session.</p> : null}
        </form>

        <p className="mt-5 text-[14px] text-[#666]">
          Already have an account?{" "}
          <Link href={routeConfig.login} className="font-bold text-[#ff3434] hover:underline">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
}
