import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.visaarc.com";

export const SITE_NAME = "VisaArc";
export const COMPANY_NAME = "Thelvon";
export const LEGAL_NAME = "SHKUT Acquisition DNA Inc.";

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
    question: "Does VisaArc's AI submit anything on its own, or could it cause a misrepresentation issue?",
    answer:
      "No. VisaArc never submits or finalizes anything automatically. Every AI-extracted or AI-suggested field is flagged for your review before it goes anywhere near a form your firm signs off on. VisaArc also keeps an audit trail of what was AI-suggested versus consultant-verified, so you have a clear record if a question ever comes up. The final judgment call - on every field, every time - stays with your regulated consultant.",
  },
  {
    question: "Is VisaArc PIPEDA compliant and hosted in Canada?",
    answer:
      "Yes. VisaArc is PIPEDA-compliant by design and stores client data on AWS ca-central-1 in Canada. Data is encrypted in transit and at rest, with access scoped to your practice team only.",
  },
  {
    question: "What happens to my client data if I ever want to leave VisaArc, or if something happened to VisaArc as a company?",
    answer:
      "Your data is yours. You can export your full client files at any time - VisaArc never holds your data hostage. We also support scheduled backups to your own storage, so you always have an independent copy outside the platform.",
  },
  {
    question: "I've tried switching software before and it disrupted my workflow. How is onboarding with VisaArc different?",
    answer:
      "We don't hand you a fixed tool and ask you to adapt your practice to it. Onboarding starts with a workflow audit - we map how your firm actually processes files before configuring anything - so the platform fits your existing process instead of forcing you to relearn it. You also keep a direct line to the person who configured your setup, not a support ticket queue.",
  },
  {
    question: "My clients aren't very tech-savvy, or communicate mostly by WhatsApp/phone - will VisaArc still work for us?",
    answer:
      "Yes. VisaArc doesn't require your clients to use a portal directly. Staff can intake documents however your clients already send them - WhatsApp, email, in person, handwritten forms - and VisaArc's AI still extracts and validates the data behind the scenes. The workflow adapts to your practice, not the other way around.",
  },
  {
    question: "What if my practice handles many different application types (or only a few uncommon ones)?",
    answer:
      "Application-type coverage is scoped to your practice during onboarding - you're not locked into a fixed list. We prioritize automating the application types you actually process most, and can add others as your practice grows.",
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
  /** Use when the title already includes the brand (e.g. "About VisaArc | …"). */
  absoluteTitle?: boolean;
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
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
