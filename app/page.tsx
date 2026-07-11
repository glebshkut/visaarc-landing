import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";
import {
  StructuredData,
  faqSchema,
  softwareApplicationSchema,
} from "./_components/structured-data";
import HomePage from "./_components/home-page";

export const metadata: Metadata = createPageMetadata({
  title: "RCIC Practice Automation Software",
  description:
    "AI automation for RCICs - document extraction, IRCC form prep, and missing-document detection. PIPEDA-compliant, hosted in Canada.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <StructuredData data={[softwareApplicationSchema(), faqSchema()]} />
      <HomePage />
    </>
  );
}
