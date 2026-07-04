import type { Metadata } from "next";
import {
  StructuredData,
  breadcrumbSchema,
} from "../_components/structured-data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Security & PIPEDA Compliance for RCIC Software",
  description:
    "VisaArc keeps immigration consultant client data on AWS ca-central-1 in Canada. PIPEDA-compliant, encrypted, CICC-aware access controls for regulated Canadian immigration practices.",
  path: "/security",
  keywords: [
    "PIPEDA compliant immigration software",
    "RCIC data security",
    "Canadian data residency immigration",
    "AWS ca-central-1 RCIC software",
    "immigration consultant privacy Canada",
    "CICC recordkeeping software",
    "encrypted immigration client files",
    "immigration practice security",
  ],
});

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Security", path: "/security" },
        ])}
      />
      {children}
    </>
  );
}
