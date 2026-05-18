import { brandConfig } from "@/data/brand";
import { normalizeLanguage, type LanguageCode } from "@/lib/localization";

export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  image: string;
  excerpt: string;
  content: string[];
  author: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "moving-from-ticket-system-to-forum",
    date: "2017-04-19",
    title: "MOVING FROM TICKET SYSTEM TO FORUM",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    excerpt: `Why ${brandConfig.siteName} migrated support conversations into a searchable community forum.`,
    content: [
      "Our support team moved from a private ticket queue to a public-first forum model to improve response speed and knowledge sharing.",
      "By tagging recurring technical issues and linking product references, we reduced duplicate tickets and made answers discoverable for everyone.",
      `The forum now acts as both a support channel and a structured learning archive for new ${brandConfig.siteName} customers.`,
    ],
    author: "Support Team",
    tags: ["support", "community", "operations"],
  },
  {
    slug: "8-ideas-to-get-your-site-ready",
    date: "2017-04-19",
    title: "8 IDEAS TO GET YOUR SITE READY",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    excerpt: "A practical launch checklist for automotive commerce experiences.",
    content: [
      "A strong storefront launch depends on complete route coverage and honest user journeys from first click to checkout.",
      "We recommend validating product discovery, cart persistence, and mobile conversion pathways before public rollout.",
      "When visual sections and route destinations are aligned, bounce rates drop and repeat visits rise naturally.",
    ],
    author: "Product Team",
    tags: ["launch", "ux", "commerce"],
  },
  {
    slug: "customer-support-notice-for-holiday",
    date: "2017-04-19",
    title: "CUSTOMER SUPPORT NOTICE FOR HOLIDAY",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    excerpt: "Holiday support coverage timelines and service continuity details.",
    content: [
      "During holiday weeks, live support hours adjust while order tracking and help-center documentation remain available 24/7.",
      "Urgent shipping requests can still be submitted through the support routes, with responses prioritized by fulfillment deadlines.",
      "We publish route and status updates in advance so customers always know where to find the right support destination.",
    ],
    author: "Operations Desk",
    tags: ["holiday", "support", "shipping"],
  },
];

const localizedBlogCopy: Partial<
  Record<LanguageCode, Record<string, Pick<BlogPost, "title" | "excerpt" | "content" | "tags">>>
> = {
  fr: {
    "moving-from-ticket-system-to-forum": {
      title: "PASSER DU SYSTEME DE TICKETS AU FORUM",
      excerpt: `Pourquoi ${brandConfig.siteName} a migre ses conversations support vers un forum consultable.`,
      content: [
        "Notre equipe support est passee d'une file privee de tickets a un modele forum public pour accelerer les reponses et le partage.",
        "En taguant les problemes techniques recurrents et en liant les references produit, nous avons reduit les tickets dupliques.",
        `Le forum sert maintenant de canal support et d'archive d'apprentissage pour les clients ${brandConfig.siteName}.`,
      ],
      tags: ["support", "communaute", "operations"],
    },
    "8-ideas-to-get-your-site-ready": {
      title: "8 IDEES POUR PREPARER VOTRE SITE",
      excerpt: "Une checklist pratique de lancement pour les experiences commerce automobile.",
      content: [
        "Un lancement solide depend d'une couverture complete des routes et de parcours utilisateurs honnetes du premier clic au paiement.",
        "Nous recommandons de valider la decouverte produit, la persistance panier et les parcours mobiles avant le lancement public.",
        "Quand les sections visuelles et les destinations de route sont alignees, le rebond baisse et les retours augmentent naturellement.",
      ],
      tags: ["lancement", "ux", "commerce"],
    },
    "customer-support-notice-for-holiday": {
      title: "NOTE SUPPORT CLIENT POUR LES CONGES",
      excerpt: "Horaires support pendant les conges et details de continuite de service.",
      content: [
        "Pendant les periodes de conges, les horaires de support en direct changent tandis que le suivi commande et la base d'aide restent disponibles 24/7.",
        "Les demandes d'expedition urgentes peuvent toujours etre envoyees via les routes support, avec priorite selon les delais de livraison.",
        "Nous publions les mises a jour de route et statut en avance pour que les clients sachent ou trouver la bonne destination.",
      ],
      tags: ["conges", "support", "expedition"],
    },
  },
  es: {
    "moving-from-ticket-system-to-forum": {
      title: "MIGRAR DE TICKETS A FORO",
      excerpt: `Por que ${brandConfig.siteName} movio conversaciones de soporte a un foro consultable.`,
      content: [
        "Nuestro equipo de soporte paso de una cola privada de tickets a un modelo de foro publico para mejorar velocidad y compartir conocimiento.",
        "Al etiquetar problemas tecnicos recurrentes y enlazar referencias de producto, reducimos tickets duplicados y mejoramos descubrimiento.",
        `El foro ahora funciona como canal de soporte y archivo de aprendizaje para clientes de ${brandConfig.siteName}.`,
      ],
      tags: ["soporte", "comunidad", "operaciones"],
    },
    "8-ideas-to-get-your-site-ready": {
      title: "8 IDEAS PARA PREPARAR TU SITIO",
      excerpt: "Checklist practica de lanzamiento para experiencias de comercio automotriz.",
      content: [
        "Un buen lanzamiento depende de cobertura completa de rutas y recorridos honestos desde el primer clic hasta pago.",
        "Recomendamos validar descubrimiento de productos, persistencia del carrito y conversion movil antes del despliegue publico.",
        "Cuando las secciones visuales y los destinos de ruta estan alineados, baja el rebote y suben las visitas repetidas.",
      ],
      tags: ["lanzamiento", "ux", "comercio"],
    },
    "customer-support-notice-for-holiday": {
      title: "AVISO DE SOPORTE EN TEMPORADA FESTIVA",
      excerpt: "Cobertura de soporte en festivos y continuidad del servicio.",
      content: [
        "Durante semanas festivas, el soporte en vivo ajusta horarios mientras seguimiento de pedidos y ayuda permanecen disponibles 24/7.",
        "Las solicitudes urgentes de envio se pueden enviar por rutas de soporte y se priorizan segun los plazos de cumplimiento.",
        "Publicamos actualizaciones de rutas y estado por adelantado para que los clientes encuentren siempre el destino correcto.",
      ],
      tags: ["festivo", "soporte", "envio"],
    },
  },
};

export function getLocalizedBlogPost(post: BlogPost, language: LanguageCode = "en") {
  const normalizedLanguage = normalizeLanguage(language);
  const localized = localizedBlogCopy[normalizedLanguage]?.[post.slug];

  if (!localized) {
    return post;
  }

  return {
    ...post,
    ...localized,
  };
}

export function getLocalizedBlogPosts(language: LanguageCode = "en") {
  return blogPosts.map((post) => getLocalizedBlogPost(post, language));
}

export function getBlogPostBySlug(slug: string, language: LanguageCode = "en") {
  const post = blogPosts.find((entry) => entry.slug === slug);
  return post ? getLocalizedBlogPost(post, language) : undefined;
}
