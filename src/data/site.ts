export const siteConfig = {
  name: "AutoStore",
  hotline: "888-943-446-000",
  loginLabel: "Login / Register",
  cartLabel: "MY CART",
  newsletterPlaceholder: "Your email address",
  newsletterCta: "SUBSCRIBE",
};

export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/shop" },
  { label: "DEALS", href: "/daily-deals" },
  { label: "UNDER $100", href: "/#under-100" },
  { label: "NEW ARRIVALS", href: "/#new-arrivals" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT US", href: "/contact-us" },
];

export const topBarLinks = [
  { label: siteConfig.loginLabel, href: "/account/login" },
  { label: "ENGLISH", href: "/account" },
  { label: "USD", href: "/account" },
];

export const footerColumns = [
  {
    title: "CONTACT US",
    links: [
      { label: "5611 Wellington Road, Suite 115, Gainesville, VA 20155", href: "/contact-us" },
      { label: "888 9344 6000 - 888 1234 6789", href: "/contact-us" },
      { label: "autostore@magentech.com", href: "/contact-us" },
      { label: "7 Days a week from 10-00 am to 6-00 pm", href: "/contact-us" },
    ],
  },
  {
    title: "STORE LOCATION",
    links: [
      { label: "Los Angeles - USA", href: "/store-location" },
      { label: "New York - USA", href: "/store-location" },
      { label: "California - USA", href: "/store-location" },
      { label: "Bangkok - Thailand", href: "/store-location" },
      { label: "Paris - France", href: "/store-location" },
      { label: "London - England", href: "/store-location" },
    ],
  },
  {
    title: "CUSTOMER SERVICE",
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
    title: "INFORMATION",
    links: [
      { label: "Caps & Hats", href: "/shop/category/smart-devices" },
      { label: "Hoodies & Sweatshirts", href: "/shop/category/replacement-parts" },
      { label: "Jacket & Coats", href: "/shop/category/tools-equipment" },
      { label: "Jumpers & Cardigans", href: "/shop/category/oils-fluids" },
      { label: "Shoes, Boots & Trainers", href: "/shop/category/wheels-tires" },
      { label: "Underwear & Socks", href: "/shop/category/lights-lighting" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Twitter", href: "https://x.com" },
  { label: "Google+", href: "https://about.google" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Pinterest", href: "https://www.pinterest.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
];

export const paymentBrands = ["Maestro", "PayPal", "Western Union", "VISA", "Cirrus", "eBay"];
