import type { Metadata } from "next";
import {
  StructuredData,
  breadcrumbSchema,
} from "../_components/structured-data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About VisaArc — AI Built for Canadian Immigration Consultants",
  description:
    "VisaArc was built by a founder who spent a year doing immigration paperwork manually. Learn how we help RCICs automate document extraction, IRCC forms, and client file management in Canada.",
  path: "/about",
  keywords: [
    "about VisaArc",
    "VisaArc founder",
    "AI immigration consultant software",
    "RCIC automation story",
    "Canadian immigration consultant tools",
    "immigration practice workflow automation",
    "Thelvon VisaArc",
    "Edmonton immigration software",
  ],
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
