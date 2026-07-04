import {
  COMPANY_NAME,
  FAQ_ITEMS,
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function StructuredData({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
    </>
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    alternateName: COMPANY_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon.png"),
    email: "gleb@thelvon.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    sameAs: [
      "https://thelvon.com",
      "https://linkedin.com/company/thelvon",
      "https://youtube.com/@thelvon",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "AI automation and practice management software for Regulated Canadian Immigration Consultants (RCICs).",
    inLanguage: "en-CA",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "AI automation for RCICs and Canadian immigration consultants: document extraction, IRCC form auto-population, missing document detection, and client file management.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
      availability: "https://schema.org/LimitedAvailability",
      description: "Limited access for regulated Canadian immigration consultants.",
    },
    featureList: [
      "Intelligent document extraction",
      "IRCC form auto-population",
      "Missing document detection",
      "Client file dashboard",
      "PIPEDA-compliant Canadian data residency",
      "White-glove onboarding for RCIC practices",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Regulated Canadian Immigration Consultants",
      geographicArea: {
        "@type": "Country",
        name: "Canada",
      },
    },
    provider: {
      "@type": "Organization",
      name: LEGAL_NAME,
      url: "https://thelvon.com",
    },
  };
}

export function faqSchema(
  items: ReadonlyArray<{ question: string; answer: string }> = FAQ_ITEMS,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
