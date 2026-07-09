import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import {
  StructuredData,
  organizationSchema,
  websiteSchema,
} from "./_components/structured-data";
import { defaultSiteMetadata } from "@/lib/site";
import { UtmCapture } from "./_components/utm-capture";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = defaultSiteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <UtmCapture />
        <StructuredData data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
