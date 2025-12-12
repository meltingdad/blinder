import { companyInfo, siteConfig } from "./config";

/**
 * Structured Data (JSON-LD) generators for SEO
 * These schemas help search engines understand the content better
 * and can enable rich results in search
 */

// Coordinates for Bülach, Switzerland
const GEO_COORDINATES = {
  latitude: 47.5187,
  longitude: 8.5406,
};

/**
 * LocalBusiness schema for homepage and contact page
 * https://schema.org/LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: companyInfo.name,
    image: `${siteConfig.url}/images/logo-dark.png`,
    logo: `${siteConfig.url}/images/logo-dark.png`,
    url: siteConfig.url,
    telephone: companyInfo.contact.phoneFormatted,
    email: companyInfo.contact.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.plz,
      addressCountry: companyInfo.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO_COORDINATES.latitude,
      longitude: GEO_COORDINATES.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: GEO_COORDINATES.latitude,
        longitude: GEO_COORDINATES.longitude,
      },
      geoRadius: "100000", // 100km radius
    },
    sameAs: [
      companyInfo.social.facebook,
      companyInfo.social.instagram,
      companyInfo.social.linkedin,
    ].filter(Boolean),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Organization schema (more general than LocalBusiness)
 * https://schema.org/Organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: companyInfo.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-dark.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.contact.phoneFormatted,
      contactType: "customer service",
      availableLanguage: ["German"],
      areaServed: "CH",
    },
  };
}

/**
 * Service schema for service pages
 * https://schema.org/Service
 */
export interface ServiceSchemaData {
  name: string;
  description: string;
  url: string;
  image?: string;
  serviceType?: string;
  provider?: string;
}

export function generateServiceSchema(service: ServiceSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}${service.url}`,
    name: service.name,
    description: service.description,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "State",
      name: "Zürich",
    },
    serviceType: service.serviceType || service.name,
    ...(service.image && { image: service.image }),
  };
}

/**
 * Product schema for specific product offerings
 * https://schema.org/Product
 */
export interface ProductSchemaData {
  name: string;
  description: string;
  image?: string;
  url: string;
  brand?: string;
}

export function generateProductSchema(product: ProductSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand || companyInfo.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: "Swiss Quality Storen",
    },
    ...(product.image && { image: product.image }),
    offers: {
      "@type": "Offer",
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  };
}

/**
 * FAQPage schema for FAQ sections
 * https://schema.org/FAQPage
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema for navigation
 * https://schema.org/BreadcrumbList
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * WebPage schema for general pages
 * https://schema.org/WebPage
 */
export interface WebPageSchemaData {
  name: string;
  description: string;
  url: string;
}

export function generateWebPageSchema(page: WebPageSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: page.url.startsWith("http") ? page.url : `${siteConfig.url}${page.url}`,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: siteConfig.language,
  };
}

/**
 * ContactPage schema
 * https://schema.org/ContactPage
 */
export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt - Swiss Quality Storen GmbH",
    description: "Kontaktieren Sie Swiss Quality Storen für eine kostenlose Beratung zu Storen, Lamellenstoren, Rollladen und Sonnenschutz.",
    url: `${siteConfig.url}/kontakt`,
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

/**
 * Helper to render JSON-LD script tag
 * Use in page components with dangerouslySetInnerHTML
 */
export function renderJsonLd(schema: object | object[]): string {
  return JSON.stringify(Array.isArray(schema) ? schema : schema);
}

/**
 * Combine multiple schemas into a single graph
 * Useful for pages that need multiple schema types
 */
export function combineSchemas(...schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map((schema) => {
      // Remove @context from individual schemas when combining
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { "@context": _, ...rest } = schema as { "@context"?: string };
      return rest;
    }),
  };
}
