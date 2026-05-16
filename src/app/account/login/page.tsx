"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { routeConfig } from "@/data/routes";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setPassword("");
  };

  return (
    <div className="bg-white">
      <Breadcrumbs items={["Home", "Account", "Login"]} />

      <section className="mx-auto max-w-xl px-4 pb-16 sm:px-6 lg:px-10">
        <h1 className="text-[34px] font-black uppercase text-[#222]">LOGIN</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="h-12 w-full border border-[#ddd] px-4"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="h-12 w-full border border-[#ddd] px-4"
          />
          <button type="submit" className="h-12 w-full bg-[#ff3434] text-[13px] font-bold uppercase text-white">
            Sign In
          </button>
          {submitted ? <p className="text-[14px] font-medium text-[#1d7a34]">Signed in successfully for this demo session.</p> : null}
        </form>

        <p className="mt-5 text-[14px] text-[#666]">
          Don&apos;t have an account?{" "}
          <Link href={routeConfig.register} className="font-bold text-[#ff3434] hover:underline">
            Register
          </Link>
        </p>
      </section>
    </div>
  );
}
