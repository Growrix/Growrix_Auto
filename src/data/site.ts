export const siteConfig = {
  name: "AutoStore",
  hotline: "888-943-446-000",
  loginLabel: "Login / Register",
  language: "ENGLISH",
  currency: "USD",
  cartLabel: "MY CART",
  cartCount: "0 item",
  newsletterPlaceholder: "Your email address",
  newsletterCta: "SUBSCRIBE",
};

export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "DEALS", href: "/daily-deals" },
  { label: "UNDER $100", href: "/#under-100" },
  { label: "NEW ARRIVALS", href: "/#new-arrivals" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT US", href: "/contact-us" },
];

export const topBarLinks = [
  { label: siteConfig.loginLabel, href: "#" },
  { label: siteConfig.language, href: "#" },
  { label: siteConfig.currency, href: "#" },
];

export const footerColumns = [
  {
    title: "CONTACT US",
    links: [
      "5611 Wellington Road, Suite 115, Gainesville, VA 20155",
      "888 9344 6000 - 888 1234 6789",
      "autostore@magentech.com",
      "7 Days a week from 10-00 am to 6-00 pm",
    ],
  },
  {
    title: "STORE LOCATION",
    links: [
      "Los Angeles - USA",
      "New York - USA",
      "California - USA",
      "Bangkok - Thailand",
      "Paris - France",
      "London - England",
    ],
  },
  {
    title: "CUSTOMER SERVICE",
    links: [
      "Customer Service",
      "Shipping & Returns",
      "Track Your Order",
      "Help Center",
      "Store Location",
      "Customer Feedback",
    ],
  },
  {
    title: "INFORMATION",
    links: [
      "Caps & Hats",
      "Hoodies & Sweatshirts",
      "Jacket & Coats",
      "Jumpers & Cardigans",
      "Shoes, Boots & Trainers",
      "Underwear & Socks",
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
