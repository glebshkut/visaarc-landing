import type { Metadata } from "next";
import {
  StructuredData,
  breadcrumbSchema,
} from "../_components/structured-data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service & Privacy Policy",
  description:
    "VisaArc terms of service and privacy policy for Regulated Canadian Immigration Consultants. PIPEDA compliance, Canadian data residency, and communications consent.",
  path: "/terms",
  noIndex: true,
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      {children}
    </>
  );
}
