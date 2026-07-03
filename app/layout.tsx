import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "VisaArc — Practice Management for Canadian Immigration Consultants",
  description:
    "VisaArc handles document extraction, IRCC form preparation, and client file management for Regulated Canadian Immigration Consultants. PIPEDA-compliant, hosted in Canada.",
  keywords: [
    "immigration consultant software",
    "RCIC practice management",
    "IRCC form automation",
    "Canadian immigration software",
    "VisaArc",
    "Thelvon",
  ],
  authors: [{ name: "Thelvon", url: "https://thelvon.com" }],
  openGraph: {
    title: "VisaArc — Practice Management for RCICs",
    description:
      "AI-powered practice management for Regulated Canadian Immigration Consultants.",
    siteName: "VisaArc",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
