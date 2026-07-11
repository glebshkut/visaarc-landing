import type { Metadata } from "next";
import {
  StructuredData,
  breadcrumbSchema,
} from "../_components/structured-data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "PIPEDA-Compliant Security for RCIC Software",
  description:
    "VisaArc stores client data on AWS ca-central-1 in Canada, PIPEDA-compliant and encrypted end-to-end, with CICC-aware access controls.",
  path: "/security",
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
