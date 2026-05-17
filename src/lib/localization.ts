export const languageOptions = [
  { code: "en", label: "ENGLISH", locale: "en-US" },
  { code: "fr", label: "FRANCAIS", locale: "fr-FR" },
  { code: "es", label: "ESPANOL", locale: "es-ES" },
] as const;

export const currencyOptions = ["USD", "EUR", "GBP"] as const;

export type LanguageCode = (typeof languageOptions)[number]["code"];
export type CurrencyCode = (typeof currencyOptions)[number];

export const preferenceKeys = {
  language: "growrix-language",
  currency: "growrix-currency",
  authSession: "growrix-auth-session",
};

const fallbackLanguage: LanguageCode = "en";
const fallbackCurrency: CurrencyCode = "USD";

const currencyRatesFromUsd: Record<CurrencyCode, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
};

const messages: Record<LanguageCode, Record<string, string>> = {
  en: {
    "common.home": "Home",
    "common.shop": "Shop",
    "common.account": "Account",
    "common.login": "Login",
    "common.register": "Register",
    "common.checkout": "Checkout",
    "common.success": "Success",
    "common.blog": "Blog",
    "common.search": "Search",
    "common.category": "Category",
    "common.contact": "Contact Us",
    "common.about": "About Us",
    "common.dailyDeals": "Daily Deals",
    "common.readMore": "Read More",
    "common.loadMore": "Load More",
    "common.submit": "Submit",
    "common.remove": "Remove",
    "common.goToShop": "Go To Shop",
    "common.continueShopping": "Continue Shopping",
    "common.viewAccount": "View Account",
    "common.clearCart": "Clear Cart",
    "common.proceedCheckout": "Proceed To Checkout",
    "common.placeOrder": "Place Order",
    "common.by": "By",
    "common.searchAction": "Search",

    "nav.hotline": "Hotline",
    "nav.loginRegister": "Login / Register",
    "nav.account": "My Account",
    "nav.logout": "Logout",
    "nav.myCart": "My Cart",
    "nav.search": "Search",
    "nav.itemSingular": "item",
    "nav.itemPlural": "items",
    "nav.home": "HOME",
    "nav.shop": "SHOP",
    "nav.deals": "DEALS",
    "nav.under100": "UNDER $100",
    "nav.newArrivals": "NEW ARRIVALS",
    "nav.blog": "BLOG",
    "nav.about": "ABOUT US",
    "nav.contact": "CONTACT US",

    "footer.followUs": "FOLLOW US",
    "footer.newsletterTitle": "SIGN UP FOR NEWSLETTER",
    "footer.newsletterThanks": "Thanks, you are subscribed.",
    "footer.contactUs": "CONTACT US",
    "footer.storeLocation": "STORE LOCATION",
    "footer.customerService": "CUSTOMER SERVICE",
    "footer.information": "INFORMATION",
    "footer.replicationNote": "Built as a production-ready Next.js storefront.",

    "newsletter.title": "Newsletter Subscribe",
    "newsletter.description": "Subscribe to the mailing list to receive updates on new arrivals, special offers and other discount information.",
    "newsletter.subscribed": "Thanks, your subscription is active.",
    "newsletter.doNotShow": "Don't show this popup again",
    "newsletter.placeholder": "Your email address",
    "newsletter.cta": "SUBSCRIBE",

    "home.welcome": "Welcome to {siteName}",
    "home.heroTop": "THE BEST",
    "home.heroBottom": "AUTOMOTIVE SHOP",
    "home.heroDescription": "A complete automotive storefront with strong contrast, fast discovery, and conversion-focused shopping flows.",
    "home.exploreNow": "EXPLORE NOW",
    "home.selectVehicle": "Select Your Vehicle",
    "home.vehicleSubtitle": "Over 120,000 automotive and truck parts",
    "home.topSelection": "Top selection this week",
    "home.bestSellers": "Best Sellers",
    "home.recentPosts": "Our recent posts",
    "home.latestBlogs": "Latest Blogs",
    "home.featureFreeShipping": "FREE SHIPPING",
    "home.featureFreeShippingText": "On orders over {amount}",
    "home.featureMoneyGuarantee": "MONEY GUARANTEE",
    "home.featureMoneyGuaranteeText": "30 days money back guarantee",
    "home.featureSafeShopping": "SAFE SHOPPING",
    "home.featureSafeShoppingText": "Safe shopping guarantee",
    "home.featureOnlineSupport": "ONLINE SUPPORT",
    "home.featureOnlineSupportText": "We support 24/7 every day",
    "home.newArrivals": "NEW ARRIVALS",
    "home.bestSellersColumn": "BEST SELLERS",
    "home.saleOff": "SALE OFF",

    "shop.subtitle": "Discover premium automotive products with complete browsing and purchase flows.",
    "shop.noProducts": "No products are available in this category yet.",

    "search.results": "SEARCH RESULTS",
    "search.query": "Query",
    "search.make": "Make",
    "search.model": "Model",
    "search.year": "Year",
    "search.noResults": "No products matched your search. Try another keyword or adjust your filters.",
    "search.placeholder": "Search products",
    "search.selectMake": "Select Make",
    "search.selectModel": "Select Model",
    "search.selectYear": "Select Year",

    "cart.title": "MY CART",
    "cart.empty": "Your cart is empty. Browse products in the shop to add items.",
    "cart.subtotal": "Subtotal",

    "checkout.title": "CHECKOUT",
    "checkout.orderSummary": "Order Summary",
    "checkout.items": "Items",
    "checkout.empty": "Your cart is empty. Add products before checking out.",
    "checkout.fullName": "Full Name",
    "checkout.email": "Email",
    "checkout.address": "Address",
    "checkout.city": "City",
    "checkout.postalCode": "Postal Code",

    "checkout.successTitle": "ORDER CONFIRMED",
    "checkout.successMessage": "Your order has been placed successfully. You can continue browsing the catalog or review your account for the latest order status.",

    "product.sku": "SKU",
    "product.inStock": "In Stock",
    "product.category": "Category",
    "product.addToCart": "Add To Cart",
    "product.added": "Added",

    "account.title": "MY ACCOUNT",
    "account.profileOverview": "Profile Overview",
    "account.profileDescription": "Keep account preferences updated so language, currency, and checkout defaults remain consistent across sessions.",
    "account.currentPreferences": "Current Preferences",
    "account.language": "Language",
    "account.currency": "Currency",
    "account.guestTitle": "Guest Session",
    "account.guestDescription": "Sign in or create an account to save your profile and checkout preferences.",
    "account.signInNow": "Sign In Now",
    "account.registerNow": "Register Now",

    "auth.loginTitle": "LOGIN",
    "auth.registerTitle": "REGISTER",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.signIn": "Sign In",
    "auth.createAccount": "Create Account",
    "auth.loginSuccess": "Signed in successfully for this demo session.",
    "auth.registerSuccess": "Registration completed for this demo session.",
    "auth.noAccount": "Don't have an account?",
    "auth.haveAccount": "Already have an account?",
    "auth.fullName": "Full Name",

    "contact.title": "CONTACT US",
    "contact.intro": "We love to hear from you! Please let us know if you have any questions or concerns and we will get back to you within 2 business days. Thanks!",
    "contact.name": "Name",
    "contact.phone": "Phone Number",
    "contact.message": "Leave A Comment",
    "contact.success": "Thank you, your message has been submitted.",

    "about.title": "ABOUT US",
    "about.team": "Our Team Work",
    "about.locations": "Shop Location",

    "dailyDeals.title": "DAILY DEALS",
    "dailyDeals.days": "DAYS",
    "dailyDeals.hours": "HOURS",
    "dailyDeals.mins": "MINS",
    "dailyDeals.secs": "SECS",

    "blog.related": "Related Posts",
    "support.titleFallback": "Support",
  },
  fr: {
    "common.home": "Accueil",
    "common.shop": "Boutique",
    "common.account": "Compte",
    "common.login": "Connexion",
    "common.register": "Inscription",
    "common.checkout": "Paiement",
    "common.success": "Succes",
    "common.blog": "Blog",
    "common.search": "Recherche",
    "common.category": "Categorie",
    "common.contact": "Contact",
    "common.about": "A propos",
    "common.dailyDeals": "Offres du jour",
    "common.readMore": "Lire plus",
    "common.loadMore": "Voir plus",
    "common.submit": "Envoyer",
    "common.remove": "Retirer",
    "common.goToShop": "Aller a la boutique",
    "common.continueShopping": "Continuer vos achats",
    "common.viewAccount": "Voir le compte",
    "common.clearCart": "Vider le panier",
    "common.proceedCheckout": "Passer au paiement",
    "common.placeOrder": "Passer la commande",
    "common.by": "Par",
    "common.searchAction": "Rechercher",

    "nav.hotline": "Assistance",
    "nav.loginRegister": "Connexion / Inscription",
    "nav.account": "Mon compte",
    "nav.logout": "Deconnexion",
    "nav.myCart": "Mon panier",
    "nav.search": "Recherche",
    "nav.itemSingular": "article",
    "nav.itemPlural": "articles",
    "nav.home": "ACCUEIL",
    "nav.shop": "BOUTIQUE",
    "nav.deals": "OFFRES",
    "nav.under100": "SOUS 100",
    "nav.newArrivals": "NOUVEAUTES",
    "nav.blog": "BLOG",
    "nav.about": "A PROPOS",
    "nav.contact": "CONTACT",

    "footer.followUs": "SUIVEZ-NOUS",
    "footer.newsletterTitle": "INSCRIPTION NEWSLETTER",
    "footer.newsletterThanks": "Merci, vous etes inscrit.",
    "footer.contactUs": "CONTACT",
    "footer.storeLocation": "MAGASINS",
    "footer.customerService": "SERVICE CLIENT",
    "footer.information": "INFORMATIONS",
    "footer.replicationNote": "Cree comme vitrine Next.js de niveau production.",

    "newsletter.title": "Abonnement newsletter",
    "newsletter.description": "Abonnez-vous pour recevoir les nouveautes, offres speciales et informations de reduction.",
    "newsletter.subscribed": "Merci, votre abonnement est actif.",
    "newsletter.doNotShow": "Ne plus afficher cette fenetre",
    "newsletter.placeholder": "Votre adresse email",
    "newsletter.cta": "S'ABONNER",

    "home.welcome": "Bienvenue chez {siteName}",
    "home.heroTop": "LE MEILLEUR",
    "home.heroBottom": "MAGASIN AUTO",
    "home.heroDescription": "Une vitrine auto complete avec contraste fort, recherche rapide et parcours d'achat optimise.",
    "home.exploreNow": "EXPLORER",
    "home.selectVehicle": "Selectionnez votre vehicule",
    "home.vehicleSubtitle": "Plus de 120 000 pieces auto et camion",
    "home.topSelection": "Selection de la semaine",
    "home.bestSellers": "Meilleures ventes",
    "home.recentPosts": "Nos derniers posts",
    "home.latestBlogs": "Derniers blogs",
    "home.featureFreeShipping": "LIVRAISON GRATUITE",
    "home.featureFreeShippingText": "Sur les commandes de plus de {amount}",
    "home.featureMoneyGuarantee": "GARANTIE ARGENT",
    "home.featureMoneyGuaranteeText": "Garantie remboursement 30 jours",
    "home.featureSafeShopping": "ACHAT SECURISE",
    "home.featureSafeShoppingText": "Garantie d'achat securise",
    "home.featureOnlineSupport": "SUPPORT EN LIGNE",
    "home.featureOnlineSupportText": "Support 24/7 chaque jour",
    "home.newArrivals": "NOUVEAUTES",
    "home.bestSellersColumn": "MEILLEURES VENTES",
    "home.saleOff": "PROMOTIONS",

    "shop.subtitle": "Decouvrez des produits automobiles premium avec des parcours d'achat complets.",
    "shop.noProducts": "Aucun produit n'est encore disponible dans cette categorie.",

    "search.results": "RESULTATS DE RECHERCHE",
    "search.query": "Requete",
    "search.make": "Marque",
    "search.model": "Modele",
    "search.year": "Annee",
    "search.noResults": "Aucun produit ne correspond a votre recherche. Essayez un autre mot-cle ou ajustez vos filtres.",
    "search.placeholder": "Rechercher des produits",
    "search.selectMake": "Choisir la marque",
    "search.selectModel": "Choisir le modele",
    "search.selectYear": "Choisir l'annee",

    "cart.title": "MON PANIER",
    "cart.empty": "Votre panier est vide. Parcourez la boutique pour ajouter des articles.",
    "cart.subtotal": "Sous-total",

    "checkout.title": "PAIEMENT",
    "checkout.orderSummary": "Resume de commande",
    "checkout.items": "Articles",
    "checkout.empty": "Votre panier est vide. Ajoutez des produits avant le paiement.",
    "checkout.fullName": "Nom complet",
    "checkout.email": "Email",
    "checkout.address": "Adresse",
    "checkout.city": "Ville",
    "checkout.postalCode": "Code postal",

    "checkout.successTitle": "COMMANDE CONFIRMEE",
    "checkout.successMessage": "Votre commande a ete enregistree. Continuez vos achats ou consultez votre compte pour voir le statut.",

    "product.sku": "SKU",
    "product.inStock": "En stock",
    "product.category": "Categorie",
    "product.addToCart": "Ajouter au panier",
    "product.added": "Ajoute",

    "account.title": "MON COMPTE",
    "account.profileOverview": "Vue du profil",
    "account.profileDescription": "Gardez vos preferences a jour pour conserver langue, devise et paiement par defaut.",
    "account.currentPreferences": "Preferences actuelles",
    "account.language": "Langue",
    "account.currency": "Devise",
    "account.guestTitle": "Session invite",
    "account.guestDescription": "Connectez-vous ou creez un compte pour sauvegarder vos preferences.",
    "account.signInNow": "Se connecter",
    "account.registerNow": "Creer un compte",

    "auth.loginTitle": "CONNEXION",
    "auth.registerTitle": "INSCRIPTION",
    "auth.email": "Email",
    "auth.password": "Mot de passe",
    "auth.signIn": "Se connecter",
    "auth.createAccount": "Creer un compte",
    "auth.loginSuccess": "Connexion reussie pour cette session demo.",
    "auth.registerSuccess": "Inscription terminee pour cette session demo.",
    "auth.noAccount": "Vous n'avez pas de compte ?",
    "auth.haveAccount": "Vous avez deja un compte ?",
    "auth.fullName": "Nom complet",

    "contact.title": "CONTACT",
    "contact.intro": "Nous aimons recevoir vos messages. Partagez vos questions et nous repondrons sous 2 jours ouvrables.",
    "contact.name": "Nom",
    "contact.phone": "Numero de telephone",
    "contact.message": "Laisser un commentaire",
    "contact.success": "Merci, votre message a ete envoye.",

    "about.title": "A PROPOS",
    "about.team": "Notre equipe",
    "about.locations": "Magasins",

    "dailyDeals.title": "OFFRES DU JOUR",
    "dailyDeals.days": "JOURS",
    "dailyDeals.hours": "HEURES",
    "dailyDeals.mins": "MINS",
    "dailyDeals.secs": "SECS",

    "blog.related": "Articles lies",
    "support.titleFallback": "Support",
  },
  es: {
    "common.home": "Inicio",
    "common.shop": "Tienda",
    "common.account": "Cuenta",
    "common.login": "Iniciar sesion",
    "common.register": "Registro",
    "common.checkout": "Pago",
    "common.success": "Exito",
    "common.blog": "Blog",
    "common.search": "Buscar",
    "common.category": "Categoria",
    "common.contact": "Contacto",
    "common.about": "Nosotros",
    "common.dailyDeals": "Ofertas diarias",
    "common.readMore": "Leer mas",
    "common.loadMore": "Cargar mas",
    "common.submit": "Enviar",
    "common.remove": "Quitar",
    "common.goToShop": "Ir a la tienda",
    "common.continueShopping": "Seguir comprando",
    "common.viewAccount": "Ver cuenta",
    "common.clearCart": "Vaciar carrito",
    "common.proceedCheckout": "Continuar al pago",
    "common.placeOrder": "Realizar pedido",
    "common.by": "Por",
    "common.searchAction": "Buscar",

    "nav.hotline": "Linea directa",
    "nav.loginRegister": "Iniciar sesion / Registro",
    "nav.account": "Mi cuenta",
    "nav.logout": "Cerrar sesion",
    "nav.myCart": "Mi carrito",
    "nav.search": "Buscar",
    "nav.itemSingular": "articulo",
    "nav.itemPlural": "articulos",
    "nav.home": "INICIO",
    "nav.shop": "TIENDA",
    "nav.deals": "OFERTAS",
    "nav.under100": "BAJO 100",
    "nav.newArrivals": "NOVEDADES",
    "nav.blog": "BLOG",
    "nav.about": "NOSOTROS",
    "nav.contact": "CONTACTO",

    "footer.followUs": "SIGUENOS",
    "footer.newsletterTitle": "SUSCRIBETE AL BOLETIN",
    "footer.newsletterThanks": "Gracias, te has suscrito.",
    "footer.contactUs": "CONTACTO",
    "footer.storeLocation": "UBICACIONES",
    "footer.customerService": "SERVICIO AL CLIENTE",
    "footer.information": "INFORMACION",
    "footer.replicationNote": "Construido como escaparate Next.js listo para produccion.",

    "newsletter.title": "Suscripcion al boletin",
    "newsletter.description": "Suscribete para recibir novedades, ofertas especiales e informacion de descuentos.",
    "newsletter.subscribed": "Gracias, tu suscripcion esta activa.",
    "newsletter.doNotShow": "No mostrar este popup de nuevo",
    "newsletter.placeholder": "Tu correo electronico",
    "newsletter.cta": "SUSCRIBIRSE",

    "home.welcome": "Bienvenido a {siteName}",
    "home.heroTop": "LO MEJOR",
    "home.heroBottom": "TIENDA AUTOMOTRIZ",
    "home.heroDescription": "Una tienda automotriz completa con fuerte contraste, descubrimiento rapido y rutas de compra optimizadas.",
    "home.exploreNow": "EXPLORAR",
    "home.selectVehicle": "Selecciona tu vehiculo",
    "home.vehicleSubtitle": "Mas de 120,000 piezas para auto y camion",
    "home.topSelection": "Seleccion destacada de la semana",
    "home.bestSellers": "Mas vendidos",
    "home.recentPosts": "Publicaciones recientes",
    "home.latestBlogs": "Ultimos blogs",
    "home.featureFreeShipping": "ENVIO GRATIS",
    "home.featureFreeShippingText": "En pedidos superiores a {amount}",
    "home.featureMoneyGuarantee": "GARANTIA DE DINERO",
    "home.featureMoneyGuaranteeText": "30 dias de garantia de reembolso",
    "home.featureSafeShopping": "COMPRA SEGURA",
    "home.featureSafeShoppingText": "Garantia de compra segura",
    "home.featureOnlineSupport": "SOPORTE EN LINEA",
    "home.featureOnlineSupportText": "Soporte 24/7 todos los dias",
    "home.newArrivals": "NOVEDADES",
    "home.bestSellersColumn": "MAS VENDIDOS",
    "home.saleOff": "OFERTAS",

    "shop.subtitle": "Descubre productos automotrices premium con rutas completas de busqueda y compra.",
    "shop.noProducts": "No hay productos disponibles en esta categoria por ahora.",

    "search.results": "RESULTADOS DE BUSQUEDA",
    "search.query": "Consulta",
    "search.make": "Marca",
    "search.model": "Modelo",
    "search.year": "Ano",
    "search.noResults": "No se encontraron productos. Prueba otra palabra clave o ajusta los filtros.",
    "search.placeholder": "Buscar productos",
    "search.selectMake": "Seleccionar marca",
    "search.selectModel": "Seleccionar modelo",
    "search.selectYear": "Seleccionar ano",

    "cart.title": "MI CARRITO",
    "cart.empty": "Tu carrito esta vacio. Explora la tienda para agregar productos.",
    "cart.subtotal": "Subtotal",

    "checkout.title": "PAGO",
    "checkout.orderSummary": "Resumen del pedido",
    "checkout.items": "Articulos",
    "checkout.empty": "Tu carrito esta vacio. Agrega productos antes de pagar.",
    "checkout.fullName": "Nombre completo",
    "checkout.email": "Correo electronico",
    "checkout.address": "Direccion",
    "checkout.city": "Ciudad",
    "checkout.postalCode": "Codigo postal",

    "checkout.successTitle": "PEDIDO CONFIRMADO",
    "checkout.successMessage": "Tu pedido se realizo correctamente. Puedes seguir comprando o revisar tu cuenta para ver el estado.",

    "product.sku": "SKU",
    "product.inStock": "En stock",
    "product.category": "Categoria",
    "product.addToCart": "Agregar al carrito",
    "product.added": "Agregado",

    "account.title": "MI CUENTA",
    "account.profileOverview": "Resumen del perfil",
    "account.profileDescription": "Manten tus preferencias actualizadas para idioma, moneda y pago predeterminados.",
    "account.currentPreferences": "Preferencias actuales",
    "account.language": "Idioma",
    "account.currency": "Moneda",
    "account.guestTitle": "Sesion de invitado",
    "account.guestDescription": "Inicia sesion o crea una cuenta para guardar tus preferencias.",
    "account.signInNow": "Iniciar sesion",
    "account.registerNow": "Crear cuenta",

    "auth.loginTitle": "INICIAR SESION",
    "auth.registerTitle": "REGISTRO",
    "auth.email": "Correo electronico",
    "auth.password": "Contrasena",
    "auth.signIn": "Ingresar",
    "auth.createAccount": "Crear cuenta",
    "auth.loginSuccess": "Inicio de sesion exitoso para esta demo.",
    "auth.registerSuccess": "Registro completado para esta demo.",
    "auth.noAccount": "No tienes una cuenta?",
    "auth.haveAccount": "Ya tienes una cuenta?",
    "auth.fullName": "Nombre completo",

    "contact.title": "CONTACTO",
    "contact.intro": "Nos encanta escucharte. Envia tus preguntas y responderemos en un plazo de 2 dias habiles.",
    "contact.name": "Nombre",
    "contact.phone": "Numero de telefono",
    "contact.message": "Deja un comentario",
    "contact.success": "Gracias, tu mensaje fue enviado.",

    "about.title": "SOBRE NOSOTROS",
    "about.team": "Nuestro equipo",
    "about.locations": "Ubicaciones",

    "dailyDeals.title": "OFERTAS DIARIAS",
    "dailyDeals.days": "DIAS",
    "dailyDeals.hours": "HORAS",
    "dailyDeals.mins": "MINS",
    "dailyDeals.secs": "SEGS",

    "blog.related": "Entradas relacionadas",
    "support.titleFallback": "Soporte",
  },
};

type Replacements = Record<string, string | number>;

export function normalizeLanguage(value: string | null | undefined): LanguageCode {
  if (!value) return fallbackLanguage;
  const lower = value.toLowerCase();
  const fromCode = languageOptions.find((language) => language.code === lower);

  if (fromCode) {
    return fromCode.code;
  }

  const upper = value.toUpperCase();
  const fromLabel = languageOptions.find((language) => language.label === upper);
  return fromLabel ? fromLabel.code : fallbackLanguage;
}

export function normalizeCurrency(value: string | null | undefined): CurrencyCode {
  if (!value) return fallbackCurrency;
  const upper = value.toUpperCase();
  return currencyOptions.find((currency) => currency === upper) ?? fallbackCurrency;
}

export function getLanguageLabel(language: LanguageCode) {
  return languageOptions.find((item) => item.code === language)?.label ?? languageOptions[0].label;
}

export function getLanguageLocale(language: LanguageCode) {
  return languageOptions.find((item) => item.code === language)?.locale ?? languageOptions[0].locale;
}

export function convertUsdPrice(price: number, currency: CurrencyCode) {
  return price * currencyRatesFromUsd[currency];
}

export function formatPriceByPreference(price: number, currency: CurrencyCode, language: LanguageCode) {
  const converted = convertUsdPrice(price, currency);
  const locale = getLanguageLocale(language);

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(converted);
}

export function translate(language: LanguageCode, key: string, replacements: Replacements = {}) {
  const dictionary = messages[language] ?? messages.en;
  const fallback = messages.en;
  const template = dictionary[key] ?? fallback[key] ?? key;

  return template.replace(/\{(\w+)\}/g, (match, token: string) => {
    const value = replacements[token];
    return value === undefined ? match : String(value);
  });
}

export function translateByBreadcrumbLabel(language: LanguageCode, label: string) {
  const normalized = label.trim().toLowerCase();
  const keyMap: Record<string, string> = {
    home: "common.home",
    shop: "common.shop",
    account: "common.account",
    login: "common.login",
    register: "common.register",
    checkout: "common.checkout",
    success: "common.success",
    blog: "common.blog",
    search: "common.search",
    "my cart": "cart.title",
    "contact us": "common.contact",
    "about us": "common.about",
    "daily deals": "common.dailyDeals",
    category: "common.category",
  };

  const translationKey = keyMap[normalized];
  return translationKey ? translate(language, translationKey) : label;
}