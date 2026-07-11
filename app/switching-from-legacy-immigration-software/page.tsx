import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";
import {
  StructuredData,
  breadcrumbSchema,
} from "@/app/_components/structured-data";
import { SwitchingPageView } from "@/app/_components/content-pages";
import { SWITCHING } from "@/lib/content/switching";

export const metadata: Metadata = createPageMetadata({
  title: SWITCHING.titleTag,
  description: SWITCHING.description,
  path: SWITCHING.path,
});

export default function SwitchingPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Switching", path: SWITCHING.path },
          { name: SWITCHING.h1, path: SWITCHING.path },
        ])}
      />
      <SwitchingPageView />
    </>
  );
}
