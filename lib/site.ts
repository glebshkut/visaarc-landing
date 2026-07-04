import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.visaarc.com";

export const SITE_NAME = "VisaArc";
export const COMPANY_NAME = "Thelvon";
export const LEGAL_NAME = "SHKUT Acquisition DNA Inc.";

export const SEO_KEYWORDS = [
  "VisaArc",
  "Thelvon",
  "AI automation for RCICs",
  "AI automation for immigration consultants",
  "immigration consultant software Canada",
  "Canadian immigration consultant software",
  "RCIC practice management",
  "RCIC practice management software",
  "RCIC automation",
  "RCIC software",
  "immigration practice management software",
  "immigration workflow automation",
  "immigration case management software",
  "IRCC form automation",
  "IRCC form preparation",
  "IRCC form auto-population",
  "IMM form automation",
  "Canadian immigration software",
  "regulated Canadian immigration consultant tools",
  "CICC compliant software",
  "PIPEDA compliant immigration software",
  "immigration document automation",
  "AI document extraction immigration",
  "intelligent document extraction",
  "missing document detection",
  "client file management immigration",
  "immigration client dashboard",
  "Canadian data residency",
  "AWS ca-central-1 immigration software",
  "express entry software RCIC",
  "work permit automation Canada",
  "study permit automation Canada",
  "permanent residence application software",
  "immigration consultant AI tools",
  "automate immigration paperwork",
  "immigration consultant efficiency",
  "Edmonton immigration software",
];

export const FAQ_ITEMS = [
  {
    question: "What is VisaArc?",
    answer:
      "VisaArc is AI-powered practice management software built for Regulated Canadian Immigration Consultants (RCICs). It automates document extraction, IRCC form preparation, missing document detection, and client file management so consultants spend less time on repetitive paperwork.",
  },
  {
    question: "Is VisaArc built for RCICs and Canadian immigration consultants?",
    answer:
      "Yes. VisaArc is designed specifically for RCICs and Canadian immigration consulting practices. It supports IRCC workflows, IMM form auto-population, CICC-aware recordkeeping expectations, and the day-to-day file management needs of regulated consultants in Canada.",
  },
  {
    question: "Can VisaArc automate IRCC form preparation?",
    answer:
      "VisaArc auto-populates IMM forms and other IRCC application fields using data extracted from client documents. Fields are prepared against IRCC requirements so your team reviews and submits faster, with fewer manual entry errors.",
  },
  {
    question: "Is VisaArc PIPEDA compliant and hosted in Canada?",
    answer:
      "Yes. VisaArc is PIPEDA-compliant by design and stores client data on AWS ca-central-1 in Canada. Data is encrypted in transit and at rest, with access scoped to your practice team only.",
  },
  {
    question: "What immigration workflows does VisaArc automate?",
    answer:
      "VisaArc automates intelligent document extraction, IRCC form auto-population, missing document detection, and client file tracking across active applications. Practices also receive white-glove onboarding configured to their existing workflow.",
  },
  {
    question: "How does VisaArc help immigration consultants save time?",
    answer:
      "Instead of manually pulling passport numbers, dates, and client details from documents and retyping them into IRCC forms, VisaArc extracts the data automatically, flags missing files before submission, and keeps every active case visible in one dashboard.",
  },
] as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords ?? SEO_KEYWORDS,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const defaultSiteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: COMPANY_NAME, url: "https://thelvon.com" }],
  creator: COMPANY_NAME,
  publisher: LEGAL_NAME,
  category: "technology",
  keywords: SEO_KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "CA-AB",
    "geo.placename": "Edmonton",
  },
};
