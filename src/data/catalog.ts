import {
  formatPriceByPreference,
  normalizeCurrency,
  normalizeLanguage,
  type CurrencyCode,
  type LanguageCode,
} from "@/lib/localization";

export type Category = {
  slug: string;
  label: string;
  image: string;
  description: string;
};

export type Product = {
  slug: string;
  title: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  discountLabel?: string;
  badge?: string;
  image: string;
  rating: number;
  excerpt: string;
  sku: string;
  stock: number;
  tags: string[];
  compatibility?: {
    makes: string[];
    models: string[];
    years: string[];
  };
};

export type PromoTile = {
  label: string;
  title: string;
  cta: string;
  image: string;
  targetType: "shop" | "category" | "product";
  targetSlug?: string;
};

export type ProductListSection = {
  title: string;
  slugs: string[];
};

export type DealTab = {
  slug: string;
  label: string;
  labelKey: string;
  categorySlug: string;
};

export const categories: Category[] = [
  {
    slug: "wheels-tires",
    label: "WHEELS & TIRES",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80",
    description: "Premium wheel and tire packages for city and off-road driving.",
  },
  {
    slug: "smart-devices",
    label: "SMART DEVICES",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=400&q=80",
    description: "Connected car devices, trackers, and digital accessories.",
  },
  {
    slug: "oils-fluids",
    label: "OILS & FLUIDS",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
    description: "Engine oils and essential fluids for long-term performance.",
  },
  {
    slug: "lights-lighting",
    label: "LIGHTS & LIGHTING",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=80",
    description: "Headlights, lamps, and interior lighting upgrades.",
  },
  {
    slug: "replacement-parts",
    label: "REPLACEMENT PARTS",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=400&q=80",
    description: "Reliable replacement parts for everyday maintenance.",
  },
  {
    slug: "tools-equipment",
    label: "TOOLS & EQUIPMENT",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=400&q=80",
    description: "Garage-ready tools and workshop essentials.",
  },
];

export const products: Product[] = [
  {
    slug: "20x9-wheels-fit-gmc-chevy",
    title: "20X9 WHEELS FIT GMC CHEVY",
    categorySlug: "wheels-tires",
    price: 100,
    oldPrice: 120,
    discountLabel: "-17%",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    rating: 4,
    excerpt: "Performance-focused wheel setup with durable road grip and balanced ride comfort.",
    sku: "WHE-1001",
    stock: 18,
    tags: ["wheel", "gmc", "chevy", "performance"],
  },
  {
    slug: "22-5-hole-aluminum-wheel",
    title: "22.5 HOLE ALUMINUM WHEEL",
    categorySlug: "wheels-tires",
    price: 40,
    oldPrice: 65,
    discountLabel: "-38%",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    rating: 5,
    excerpt: "Lightweight aluminum wheel set for better handling and cleaner braking response.",
    sku: "WHE-1002",
    stock: 36,
    tags: ["wheel", "aluminum", "rim"],
  },
  {
    slug: "bf-goodrich-all-terrain-ko",
    title: "BF GOODRICH ALL-TERRAIN KO",
    categorySlug: "wheels-tires",
    price: 60,
    oldPrice: 75,
    discountLabel: "-20%",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80",
    rating: 4,
    excerpt: "All-terrain tire compound designed for long mileage and strong wet-weather traction.",
    sku: "WHE-1003",
    stock: 27,
    tags: ["tire", "all-terrain", "off-road"],
  },
  {
    slug: "carlisle-hd-field-trax-atv-tire",
    title: "CARLISLE HD FIELD TRAX ATV TIRE",
    categorySlug: "wheels-tires",
    price: 190,
    oldPrice: 210,
    discountLabel: "-10%",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    rating: 5,
    excerpt: "Heavy-duty ATV tire with reinforced sidewalls and stable load carrying capacity.",
    sku: "WHE-1004",
    stock: 9,
    tags: ["atv", "tire", "trail"],
  },
  {
    slug: "chevy-silverado-tahoe-gmc-kit",
    title: "CHEVY SILVERADO TAHOE GMC",
    categorySlug: "replacement-parts",
    price: 40,
    oldPrice: 55,
    discountLabel: "-27%",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    rating: 4,
    excerpt: "Replacement fitment kit built for Silverado, Tahoe, and compatible GMC models.",
    sku: "REP-1001",
    stock: 22,
    tags: ["replacement", "gmc", "chevy"],
  },
  {
    slug: "compaloy-series-68-wheel",
    title: "COMPALOY SERIES 68 WHEEL",
    categorySlug: "wheels-tires",
    price: 100,
    oldPrice: 120,
    discountLabel: "NEW",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=900&q=80",
    rating: 5,
    excerpt: "Modern wheel profile with premium finish and improved load balance.",
    sku: "WHE-1005",
    stock: 14,
    tags: ["wheel", "new-arrival", "alloy"],
  },
  {
    slug: "hankook-dynapro-off-road",
    title: "HANKOOK DYNAPRO OFF-ROAD",
    categorySlug: "wheels-tires",
    price: 68,
    oldPrice: 72,
    discountLabel: "-6%",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    rating: 4,
    excerpt: "Off-road tread engineered for control across gravel, mud, and rough terrain.",
    sku: "WHE-1006",
    stock: 25,
    tags: ["tire", "off-road", "hankook"],
  },
  {
    slug: "hankook-dynapro-atm-rf10",
    title: "HANKOOK DYNAPRO ATM RF10",
    categorySlug: "wheels-tires",
    price: 30,
    oldPrice: 34,
    discountLabel: "-12%",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80",
    rating: 4,
    excerpt: "Daily-use all-terrain pattern balancing highway comfort with trail confidence.",
    sku: "WHE-1007",
    stock: 40,
    tags: ["tire", "all-terrain", "daily-use"],
  },
  {
    slug: "car-precision-led-headlight",
    title: "CAR PRECISION LED HEADLIGHT",
    categorySlug: "lights-lighting",
    price: 86,
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80",
    rating: 5,
    excerpt: "High-clarity LED beam setup for improved night visibility and lower power draw.",
    sku: "LIG-1001",
    stock: 29,
    tags: ["led", "headlight", "lighting"],
  },
  {
    slug: "car-easy-installation-forland",
    title: "CAR EASY INSTALLATION FORLAND",
    categorySlug: "replacement-parts",
    price: 125,
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80",
    rating: 4,
    excerpt: "Quick-install replacement part engineered for reduced labor time and dependable fit.",
    sku: "REP-1002",
    stock: 13,
    tags: ["replacement", "quick-install", "forland"],
  },
  {
    slug: "evolution-brake-kit-drilled",
    title: "EVOLUTION BRAKE KIT WITH DRILLED",
    categorySlug: "replacement-parts",
    price: 85,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    rating: 5,
    excerpt: "Drilled brake kit for cooler braking and responsive pedal feel on long drives.",
    sku: "REP-1003",
    stock: 11,
    tags: ["brake", "drilled", "kit"],
  },
  {
    slug: "discount-starter-and-alternator",
    title: "DISCOUNT STARTER AND ALTERNATOR",
    categorySlug: "replacement-parts",
    price: 98,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    rating: 4,
    excerpt: "Starter and alternator combo unit with tested charging consistency.",
    sku: "REP-1004",
    stock: 16,
    tags: ["starter", "alternator", "electrical"],
  },
  {
    slug: "ac-delco-385-professional",
    title: "AC DELCO 385 PROFESSIONAL",
    categorySlug: "tools-equipment",
    price: 83,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    rating: 4,
    excerpt: "Professional-grade component designed for extended workshop use.",
    sku: "TOO-1001",
    stock: 19,
    tags: ["tool", "professional", "ac-delco"],
  },
  {
    slug: "road-warrior-hub-pilot",
    title: "ROAD WARRIOR HUB PILOT",
    categorySlug: "tools-equipment",
    price: 1.9,
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=900&q=80",
    rating: 4,
    excerpt: "Hub pilot accessory for steady wheel alignment under mixed load conditions.",
    sku: "TOO-1002",
    stock: 120,
    tags: ["hub", "alignment", "accessory"],
  },
];

export const promoTiles: PromoTile[] = [
  {
    label: "Special Offers",
    title: "PERFORMANCE BRAKE PARTS",
    cta: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80",
    targetType: "category",
    targetSlug: "replacement-parts",
  },
  {
    label: "SHOP TRUSTED PARTS AT BETTER PRICES",
    title: "",
    cta: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    targetType: "shop",
  },
  {
    label: "Sale up to 70% Off",
    title: "PREMIUM WHEEL PACKAGES",
    cta: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    targetType: "category",
    targetSlug: "wheels-tires",
  },
];

export const productListSections: ProductListSection[] = [
  {
    title: "NEW ARRIVALS",
    slugs: [
      "car-precision-led-headlight",
      "car-easy-installation-forland",
      "evolution-brake-kit-drilled",
      "discount-starter-and-alternator",
    ],
  },
  {
    title: "BEST SELLERS",
    slugs: [
      "ac-delco-385-professional",
      "road-warrior-hub-pilot",
      "car-easy-installation-forland",
      "hankook-dynapro-off-road",
    ],
  },
  {
    title: "SALE OFF",
    slugs: [
      "20x9-wheels-fit-gmc-chevy",
      "22-5-hole-aluminum-wheel",
      "bf-goodrich-all-terrain-ko",
      "carlisle-hd-field-trax-atv-tire",
    ],
  },
];

export const dealTabs: DealTab[] = [
  {
    slug: "brake-and-service-kits",
    label: "Brake & Service Kits",
    labelKey: "dailyDeals.tabBrakeService",
    categorySlug: "replacement-parts",
  },
  {
    slug: "engine-care-fluids",
    label: "Engine Care & Fluids",
    labelKey: "dailyDeals.tabEngineCare",
    categorySlug: "oils-fluids",
  },
  {
    slug: "smart-driving-accessories",
    label: "Smart Driving Accessories",
    labelKey: "dailyDeals.tabSmartAccessories",
    categorySlug: "smart-devices",
  },
];

export const vehicleFilterOptions = {
  make: ["Toyota", "BMW", "Ford", "Mercedes", "Chevrolet"],
  model: ["Sedan", "SUV", "Truck", "Coupe", "Hatchback"],
  year: ["2024", "2023", "2022", "2021", "2020"],
};

export type ProductCompatibility = {
  makes: string[];
  models: string[];
  years: string[];
};

const fallbackCompatibility: ProductCompatibility = {
  makes: vehicleFilterOptions.make,
  models: vehicleFilterOptions.model,
  years: vehicleFilterOptions.year,
};

const compatibilityByCategory: Record<string, ProductCompatibility> = {
  "wheels-tires": {
    makes: ["Toyota", "Ford", "Chevrolet"],
    models: ["SUV", "Truck", "Coupe"],
    years: ["2024", "2023", "2022", "2021"],
  },
  "replacement-parts": {
    makes: ["Ford", "Chevrolet", "Toyota"],
    models: ["Sedan", "SUV", "Truck"],
    years: ["2024", "2023", "2022", "2021", "2020"],
  },
  "lights-lighting": {
    makes: ["BMW", "Mercedes", "Toyota"],
    models: ["Sedan", "Coupe", "SUV"],
    years: ["2024", "2023", "2022"],
  },
  "tools-equipment": fallbackCompatibility,
  "smart-devices": {
    makes: ["Toyota", "BMW", "Mercedes"],
    models: ["Sedan", "SUV", "Hatchback"],
    years: ["2024", "2023", "2022", "2021"],
  },
  "oils-fluids": {
    makes: ["Toyota", "Ford", "BMW", "Chevrolet"],
    models: ["Sedan", "SUV", "Truck", "Hatchback"],
    years: ["2024", "2023", "2022", "2021", "2020"],
  },
};

const compatibilityOverrides: Record<string, ProductCompatibility> = {
  "ac-delco-385-professional": fallbackCompatibility,
  "road-warrior-hub-pilot": fallbackCompatibility,
};

const categoryLocalizedCopy: Partial<
  Record<LanguageCode, Record<string, { label: string; description: string }>>
> = {
  fr: {
    "wheels-tires": {
      label: "ROUES ET PNEUS",
      description: "Packs de roues et pneus premium pour route et terrain mixte.",
    },
    "smart-devices": {
      label: "APPAREILS CONNECTES",
      description: "Trackers auto et accessoires connectes pour conduite moderne.",
    },
    "oils-fluids": {
      label: "HUILES ET FLUIDES",
      description: "Huiles moteur et fluides essentiels pour performance durable.",
    },
    "lights-lighting": {
      label: "LUMIERES AUTO",
      description: "Phares, ampoules et upgrades interieur pour meilleure visibilite.",
    },
    "replacement-parts": {
      label: "PIECES DE REMPLACEMENT",
      description: "Pieces fiables pour entretien courant et reparations rapides.",
    },
    "tools-equipment": {
      label: "OUTILS ET EQUIPEMENT",
      description: "Outils garage et equipement atelier pour interventions propres.",
    },
  },
  es: {
    "wheels-tires": {
      label: "RUEDAS Y NEUMATICOS",
      description: "Paquetes premium de ruedas y neumaticos para ciudad y off-road.",
    },
    "smart-devices": {
      label: "DISPOSITIVOS INTELIGENTES",
      description: "Rastreadores y accesorios conectados para una conduccion moderna.",
    },
    "oils-fluids": {
      label: "ACEITES Y FLUIDOS",
      description: "Aceites de motor y fluidos clave para rendimiento a largo plazo.",
    },
    "lights-lighting": {
      label: "LUCES E ILUMINACION",
      description: "Faros y mejoras de iluminacion para una vision nocturna clara.",
    },
    "replacement-parts": {
      label: "PIEZAS DE REEMPLAZO",
      description: "Piezas confiables para mantenimiento diario y servicio rapido.",
    },
    "tools-equipment": {
      label: "HERRAMIENTAS Y EQUIPO",
      description: "Herramientas de taller listas para diagnostico y reparacion.",
    },
  },
};

const productLocalizedCopy: Partial<
  Record<LanguageCode, Record<string, { title: string; excerpt: string }>>
> = {
  fr: {
    "20x9-wheels-fit-gmc-chevy": {
      title: "JANTES 20X9 POUR GMC ET CHEVY",
      excerpt: "Pack roue performance avec adherence stable et confort de conduite.",
    },
    "22-5-hole-aluminum-wheel": {
      title: "JANTE ALUMINIUM 22.5 A 5 TROUS",
      excerpt: "Jante legere en aluminium pour maniabilite nette et freinage propre.",
    },
    "bf-goodrich-all-terrain-ko": {
      title: "BF GOODRICH ALL-TERRAIN KO",
      excerpt: "Pneu tout-terrain concu pour long kilometrage et traction en pluie.",
    },
    "carlisle-hd-field-trax-atv-tire": {
      title: "CARLISLE HD FIELD TRAX PNEU ATV",
      excerpt: "Pneu ATV robuste avec flancs renforces et charge stable.",
    },
    "chevy-silverado-tahoe-gmc-kit": {
      title: "KIT CHEVY SILVERADO TAHOE GMC",
      excerpt: "Kit de remplacement adapte aux modeles Silverado, Tahoe et GMC.",
    },
    "compaloy-series-68-wheel": {
      title: "JANTE COMPALOY SERIE 68",
      excerpt: "Profil moderne avec finition premium et meilleur equilibre.",
    },
    "hankook-dynapro-off-road": {
      title: "HANKOOK DYNAPRO OFF-ROAD",
      excerpt: "Sculpture off-road pour controle solide sur gravier, boue et piste.",
    },
    "hankook-dynapro-atm-rf10": {
      title: "HANKOOK DYNAPRO ATM RF10",
      excerpt: "Pattern quotidien tout-terrain qui combine confort route et grip.",
    },
    "car-precision-led-headlight": {
      title: "PHARE LED HAUTE PRECISION",
      excerpt: "Faisceau LED net pour visibilite nocturne et consommation reduite.",
    },
    "car-easy-installation-forland": {
      title: "PIECE AUTO INSTALLATION RAPIDE FORLAND",
      excerpt: "Piece de remplacement rapide a poser avec fitment fiable.",
    },
    "evolution-brake-kit-drilled": {
      title: "KIT FREIN EVOLUTION PERCE",
      excerpt: "Kit perce pour refroidissement constant et pedale plus reactive.",
    },
    "discount-starter-and-alternator": {
      title: "DEMARREUR ET ALTERNATEUR PRIX REDUIT",
      excerpt: "Combo demarreur alternateur avec stabilite de charge testee.",
    },
    "ac-delco-385-professional": {
      title: "AC DELCO 385 PROFESSIONNEL",
      excerpt: "Composant niveau pro concu pour usage intensif en atelier.",
    },
    "road-warrior-hub-pilot": {
      title: "ROAD WARRIOR HUB PILOT",
      excerpt: "Accessoire hub pilot pour alignement stable sous charge mixte.",
    },
  },
  es: {
    "20x9-wheels-fit-gmc-chevy": {
      title: "RINES 20X9 PARA GMC Y CHEVY",
      excerpt: "Configuracion de rueda de alto rendimiento con agarre estable.",
    },
    "22-5-hole-aluminum-wheel": {
      title: "RIN DE ALUMINIO 22.5 DE 5 ORIFICIOS",
      excerpt: "Rin liviano para mejor manejo y frenado mas limpio.",
    },
    "bf-goodrich-all-terrain-ko": {
      title: "BF GOODRICH ALL-TERRAIN KO",
      excerpt: "Compuesto todo terreno para mayor kilometraje y traccion en lluvia.",
    },
    "carlisle-hd-field-trax-atv-tire": {
      title: "CARLISLE HD FIELD TRAX NEUMATICO ATV",
      excerpt: "Neumatico ATV reforzado con paredes fuertes y carga estable.",
    },
    "chevy-silverado-tahoe-gmc-kit": {
      title: "KIT CHEVY SILVERADO TAHOE GMC",
      excerpt: "Kit de reemplazo para Silverado, Tahoe y modelos GMC compatibles.",
    },
    "compaloy-series-68-wheel": {
      title: "RIN COMPALOY SERIE 68",
      excerpt: "Perfil moderno con acabado premium y mejor balance de carga.",
    },
    "hankook-dynapro-off-road": {
      title: "HANKOOK DYNAPRO OFF-ROAD",
      excerpt: "Dibujo off-road para control en grava, lodo y terreno irregular.",
    },
    "hankook-dynapro-atm-rf10": {
      title: "HANKOOK DYNAPRO ATM RF10",
      excerpt: "Patron todo terreno diario con equilibrio entre ruta y traccion.",
    },
    "car-precision-led-headlight": {
      title: "FARO LED DE PRECISION",
      excerpt: "Haz LED de alta claridad para mejor vision nocturna y menor consumo.",
    },
    "car-easy-installation-forland": {
      title: "PIEZA AUTO INSTALACION RAPIDA FORLAND",
      excerpt: "Repuesto de instalacion agil con ajuste confiable en taller.",
    },
    "evolution-brake-kit-drilled": {
      title: "KIT DE FRENO EVOLUTION PERFORADO",
      excerpt: "Kit perforado para menor calor y respuesta precisa del pedal.",
    },
    "discount-starter-and-alternator": {
      title: "ARRANCADOR Y ALTERNADOR EN OFERTA",
      excerpt: "Unidad combo con consistencia de carga validada.",
    },
    "ac-delco-385-professional": {
      title: "AC DELCO 385 PROFESIONAL",
      excerpt: "Componente profesional para uso continuo en el taller.",
    },
    "road-warrior-hub-pilot": {
      title: "ROAD WARRIOR HUB PILOT",
      excerpt: "Accesorio de alineacion de rueda para cargas mixtas.",
    },
  },
};

export function getProductCompatibility(product: Product): ProductCompatibility {
  return (
    product.compatibility
    ?? compatibilityOverrides[product.slug]
    ?? compatibilityByCategory[product.categorySlug]
    ?? fallbackCompatibility
  );
}

export function getCategoryLabel(category: Category, language: LanguageCode = "en") {
  const normalizedLanguage = normalizeLanguage(language);
  return categoryLocalizedCopy[normalizedLanguage]?.[category.slug]?.label ?? category.label;
}

export function getCategoryDescription(category: Category, language: LanguageCode = "en") {
  const normalizedLanguage = normalizeLanguage(language);
  return categoryLocalizedCopy[normalizedLanguage]?.[category.slug]?.description ?? category.description;
}

export function getCategoryLabelBySlug(slug: string, language: LanguageCode = "en") {
  const category = getCategoryBySlug(slug);
  return category ? getCategoryLabel(category, language) : slug;
}

export function getProductTitle(product: Product, language: LanguageCode = "en") {
  const normalizedLanguage = normalizeLanguage(language);
  return productLocalizedCopy[normalizedLanguage]?.[product.slug]?.title ?? product.title;
}

export function getProductExcerpt(product: Product, language: LanguageCode = "en") {
  const normalizedLanguage = normalizeLanguage(language);
  return productLocalizedCopy[normalizedLanguage]?.[product.slug]?.excerpt ?? product.excerpt;
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getProductsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));
}

export function productToCurrency(
  price: number,
  currency: CurrencyCode = "USD",
  language: LanguageCode = "en",
) {
  return formatPriceByPreference(
    price,
    normalizeCurrency(currency),
    normalizeLanguage(language),
  );
}
