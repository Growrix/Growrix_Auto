import { blogPosts } from "@/data/blog";
import { brandConfig } from "@/data/brand";
import {
  categories,
  dealTabs,
  productListSections,
  products,
  promoTiles,
  vehicleFilterOptions,
} from "@/data/catalog";

export const heroSlides = [
  {
    eyebrow: `Welcome to ${brandConfig.siteName}`,
    titleTop: "THE BEST",
    titleBottom: "AUTOMOTIVE SHOP",
    description: "The most complete automotive storefront experience, crafted as a clean, high-contrast, conversion-focused shopping layout.",
    ctaLabel: "EXPLORE NOW",
    ctaHref: "/shop",
    backgroundImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
  },
];

export const homeCategories = categories;

export const vehicleFilters = vehicleFilterOptions;

export const bestSellerTabs = [
  { label: "WHEELS & TIRES", categorySlug: "wheels-tires" },
  { label: "OILS & FLUIDS", categorySlug: "oils-fluids" },
  { label: "CAR LIGHTS", categorySlug: "lights-lighting" },
  { label: "SMART DEVICES", categorySlug: "smart-devices" },
  { label: "HEADLIGHTS", categorySlug: "lights-lighting" },
];

export const bestSellerProducts = products;

export const promoCards = promoTiles;

export const productLists = productListSections;

export const dailyDealTabs = dealTabs;

export const brandLogos = ["FATTRESE", "XLLE", "palco", "LOGO BRAND", "LETHROV", "LENTBEY"];

export { blogPosts };

export const featureStrip = [
  { title: "FREE SHIPPING", text: "On orders over $99.00" },
  { title: "MONEY GUARANTEE", text: "30 days money back guarantee" },
  { title: "SAFE SHOPPING", text: "Safe shopping guarantee" },
  { title: "ONLINE SUPPORT", text: "We support 24/7 on day" },
];
