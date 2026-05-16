import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppProviders from "@/state/AppProviders";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoStore | Automotive Shop",
  description: "Reference Style 5 storefront replication built in Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-white text-[#1b1b1b] antialiased">
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
