export type ProductCard = {
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  image: string;
  rating: number;
  badge?: string;
};

export type ProductListItem = {
  title: string;
  price: string;
  image: string;
  oldPrice?: string;
};

export const heroSlides = [
  {
    eyebrow: "Welcome to AutoStore",
    titleTop: "THE BEST",
    titleBottom: "AUTOMOTIVE SHOP",
    description: "The most complete automotive storefront experience, crafted as a clean, high-contrast, conversion-focused shopping layout.",
    ctaLabel: "EXPLORE NOW",
    backgroundImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
  },
];

export const categories = [
  { label: "WHEELS & TIRES", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80" },
  { label: "SMART DEVICES", image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=400&q=80" },
  { label: "OILS & FLUIDS", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80" },
  { label: "LIGHTS & LIGHTING", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=80" },
  { label: "REPLACEMENT PARTS", image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=400&q=80" },
  { label: "TOOLS & EQUIPMENT", image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=400&q=80" },
];

export const vehicleFilters = ["Select Make", "Select Model", "Select Year"];

export const bestSellerTabs = ["WHEELS & TIRES", "OILS & FLUIDS", "CAR LIGHTS", "SMART DEVICES", "HEADLIGHTS"];

export const bestSellerProducts: ProductCard[] = [
  { title: "20X9 WHEELS FIT GMC CHEVY", price: "$100.00", oldPrice: "$120.00", discount: "-17%", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80", rating: 4 },
  { title: "22.5 HOLE ALUMINUM WHEEL", price: "$40.00", oldPrice: "$65.00", discount: "-38%", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80", rating: 5 },
  { title: "BF GOODRICH ALL-TERRAIN KO", price: "$60.00", oldPrice: "$75.00", discount: "-20%", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80", rating: 4 },
  { title: "CARLISLE HD FIELD TRAX ATV TIRE", price: "$190.00", oldPrice: "$210.00", discount: "-10%", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80", rating: 5 },
  { title: "CHEVY SILVERADO TAHOE GMC", price: "$40.00", oldPrice: "$55.00", discount: "-27%", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80", rating: 4 },
  { title: "COMPALOY SERIES 68 WHEEL", price: "$100.00", oldPrice: "$120.00", discount: "NEW", image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=900&q=80", rating: 5, badge: "NEW" },
  { title: "HANKOOK DYNAPRO OFF-ROAD", price: "$68.00", oldPrice: "$72.00", discount: "-6%", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80", rating: 4 },
  { title: "HANKOOK DYNAPRO ATM RF10", price: "$30.00", oldPrice: "$34.00", discount: "-12%", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80", rating: 4 },
];

export const promoCards = [
  { label: "Special Offers", title: "MERCEDES BENZ AUTO PARTS", cta: "SHOP NOW", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80" },
  { label: "SPECIAL OFFERS AT THE LOWEST OF PRICES", title: "", cta: "SHOP NOW", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80" },
  { label: "Sale up to 70% Off", title: "FERRARI BRAND AUTO PARTS", cta: "SHOP NOW", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80" },
];

export const productLists: {
  title: string;
  items: ProductListItem[];
}[] = [
  {
    title: "NEW ARRIVALS",
    items: [
      { title: "CAR PRECISION LED HEADLIGHT", price: "$86.00", image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=200&q=80" },
      { title: "CAR EASY INSTALLATION FORLAND", price: "$125.00", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=200&q=80" },
      { title: "EVOLUTION BRAKE KIT WITH DRILLED", price: "$85.00", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=200&q=80" },
      { title: "DISCOUNT STARTER AND ALTERNATOR", price: "$98.00", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=200&q=80" },
    ],
  },
  {
    title: "BEST SELLERS",
    items: [
      { title: "AC DELCO 385 PROFESSIONAL", price: "$83.00", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=200&q=80" },
      { title: "ROAD WARRIOR HUB PILOT", price: "$1.90", image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=200&q=80" },
      { title: "CAR EASY INSTALLATION FORLAND", price: "$125.00", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=200&q=80" },
      { title: "HANKOOK DYNAPRO OFF-ROAD", price: "$68.00", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" },
    ],
  },
  {
    title: "SALE OFF",
    items: [
      { title: "20X9 WHEELS FIT GMC CHEVY", price: "$100.00", oldPrice: "$120.00", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=200&q=80" },
      { title: "22.5 HOLE ALUMINUM WHEEL", price: "$40.00", oldPrice: "$65.00", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=200&q=80" },
      { title: "BF GOODRICH ALL-TERRAIN KO", price: "$60.00", oldPrice: "$75.00", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=200&q=80" },
      { title: "CARLISLE HD FIELD TRAX ATV TIRE", price: "$190.00", oldPrice: "$210.00", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=200&q=80" },
    ],
  },
];

export const brandLogos = ["FATTRESE", "XLLE", "palco", "LOGO BRAND", "LETHROV", "LENTBEY"];

export const blogPosts = [
  { date: "2017-04-19", title: "MOVING FROM TICKET SYSTEM TO FORUM", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80" },
  { date: "2017-04-19", title: "8 IDEAS TO GET YOUR SITE READY", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80" },
  { date: "2017-04-19", title: "CUSTOMER SUPPORT NOTICE FOR HOLIDAY", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80" },
];

export const featureStrip = [
  { title: "FREE SHIPPING", text: "On orders over $99.00" },
  { title: "MONEY GUARANTEE", text: "30 days money back guarantee" },
  { title: "SAFE SHOPPING", text: "Safe shopping guarantee" },
  { title: "ONLINE SUPPORT", text: "We support 24/7 on day" },
];
