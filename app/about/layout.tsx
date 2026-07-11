import type { Metadata } from "next";
import {
  StructuredData,
  breadcrumbSchema,
} from "../_components/structured-data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About VisaArc | AI for Canadian Immigration Consultants",
  description:
    "VisaArc was built after a year of manual immigration paperwork. See how we help RCICs automate document extraction and IRCC forms.",
  path: "/about",
  absoluteTitle: true,
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      {children}
    </>
  );
}
