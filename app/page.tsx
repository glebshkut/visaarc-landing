import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";
import {
  StructuredData,
  faqSchema,
  softwareApplicationSchema,
} from "./_components/structured-data";
import HomePage from "./_components/home-page";

export const metadata: Metadata = createPageMetadata({
  title: "AI Automation for RCICs & Canadian Immigration Consultants",
  description:
    "VisaArc is AI automation for RCICs and Canadian immigration consultants — document extraction, IRCC form preparation, missing document detection, and client file management. PIPEDA-compliant, hosted in Canada.",
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
