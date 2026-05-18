import { brandConfig } from "@/data/brand";

export const siteConfig = {
  name: brandConfig.siteName,
  hotline: "888-943-446-000",
  loginLabel: "Login / Register",
  cartLabel: "MY CART",
  newsletterPlaceholder: "Your email address",
  newsletterCta: "SUBSCRIBE",
};

export const navLinks = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.shop", href: "/shop" },
  { labelKey: "nav.deals", href: "/daily-deals" },
  { labelKey: "nav.under100", href: "/#under-100" },
  { labelKey: "nav.newArrivals", href: "/#new-arrivals" },
  { labelKey: "nav.blog", href: "/blog" },
  { labelKey: "nav.about", href: "/about-us" },
  { labelKey: "nav.contact", href: "/contact-us" },
];

export const topBarLinks = [
  { label: siteConfig.loginLabel, href: "/account/login" },
  { label: "ENGLISH", href: "/account" },
  { label: "USD", href: "/account" },
];

export const footerColumns = [
  {
    titleKey: "footer.contactUs",
    links: [
      { label: "Growrix Auto HQ, 2210 Commerce Drive, Austin, TX 78701", href: "/contact-us" },
      { label: "888 9434 4600 - 888 9434 4601", href: "/contact-us" },
      { label: brandConfig.supportEmail, href: "/contact-us" },
      { label: "Mon - Sat, 08:00 AM to 08:00 PM", href: "/contact-us" },
    ],
  },
  {
    titleKey: "footer.storeLocation",
    links: [
      { label: "Austin Service Hub - Texas", href: "/store-location" },
      { label: "Dallas Parts Center - Texas", href: "/store-location" },
      { label: "Phoenix Tire Lab - Arizona", href: "/store-location" },
      { label: "Denver Fleet Desk - Colorado", href: "/store-location" },
      { label: "Toronto Partner Bay - Ontario", href: "/store-location" },
      { label: "Vancouver West Point - British Columbia", href: "/store-location" },
    ],
  },
  {
    titleKey: "footer.customerService",
    links: [
      { label: "Customer Service", href: "/customer-service" },
      { label: "Shipping & Returns", href: "/shipping-returns" },
      { label: "Track Your Order", href: "/track-order" },
      { label: "Help Center", href: "/help-center" },
      { label: "Store Location", href: "/store-location" },
      { label: "Customer Feedback", href: "/customer-feedback" },
    ],
  },
  {
    titleKey: "footer.information",
    links: [
      { label: "Brake Kits", href: "/shop/category/replacement-parts" },
      { label: "Wheel Packages", href: "/shop/category/wheels-tires" },
      { label: "Garage Tools", href: "/shop/category/tools-equipment" },
      { label: "Engine Oils", href: "/shop/category/oils-fluids" },
      { label: "LED Lighting", href: "/shop/category/lights-lighting" },
      { label: "Smart Trackers", href: "/shop/category/smart-devices" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/growrixauto" },
  { label: "Twitter", href: "https://x.com/growrixauto" },
  { label: "Instagram", href: "https://www.instagram.com/growrixauto" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/growrix-auto" },
  { label: "Pinterest", href: "https://www.pinterest.com/growrixauto" },
  { label: "YouTube", href: "https://www.youtube.com/@growrixauto" },
];

export const paymentBrands = ["Maestro", "PayPal", "Western Union", "VISA", "Cirrus", "eBay"];
