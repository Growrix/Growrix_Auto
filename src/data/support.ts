import { brandConfig } from "@/data/brand";

export type SupportLink = {
  label: string;
  slug: string;
  description: string;
  content: string[];
};

export const supportLinks: SupportLink[] = [
  {
    label: "Customer Service",
    slug: "customer-service",
    description: "Get direct assistance for product, order, and account questions.",
    content: [
      "Our customer service team supports order updates, product compatibility checks, and account assistance.",
      "Use this page for general service requests and route-specific help guidance.",
    ],
  },
  {
    label: "Shipping & Returns",
    slug: "shipping-returns",
    description: "Review shipping timelines and return eligibility policies.",
    content: [
      "Shipping estimates vary by region and item type. Tracking updates are published as soon as parcels are scanned by carriers.",
      "Returns are accepted within the listed policy window when product condition and packaging requirements are met.",
    ],
  },
  {
    label: "Track Your Order",
    slug: "track-order",
    description: "Look up fulfillment and delivery progress for your order.",
    content: [
      "Track your order status using your order number and email confirmation details.",
      "If tracking has not updated within expected windows, submit a support request for escalation.",
    ],
  },
  {
    label: "Help Center",
    slug: "help-center",
    description: "Browse frequently asked questions and setup guides.",
    content: [
      "The help center includes installation guides, account troubleshooting, and checkout support articles.",
      "Use topic filters to find product family-specific answers quickly.",
    ],
  },
  {
    label: "Store Location",
    slug: "store-location",
    description: `Find ${brandConfig.siteName} locations and business hours.`,
    content: [
      "Store locations and service counters are listed with local operating hours.",
      "Appointment booking details are available for participating locations.",
    ],
  },
  {
    label: "Customer Feedback",
    slug: "customer-feedback",
    description: "Share product and service feedback with our team.",
    content: [
      "Customer feedback helps prioritize upcoming feature and catalog improvements.",
      "Use this route to submit quality concerns, suggestions, or post-purchase comments.",
    ],
  },
];

export const infoLinks = [
  { label: "OBD-II Scanners", categorySlug: "smart-devices" },
  { label: "Brake Assemblies", categorySlug: "replacement-parts" },
  { label: "Torque Tool Sets", categorySlug: "tools-equipment" },
  { label: "Synthetic Fluids", categorySlug: "oils-fluids" },
  { label: "Performance Tires", categorySlug: "wheels-tires" },
  { label: "Night Vision LEDs", categorySlug: "lights-lighting" },
];

export function getSupportLinkBySlug(slug: string) {
  return supportLinks.find((item) => item.slug === slug);
}
