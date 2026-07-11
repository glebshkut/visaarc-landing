import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";
import {
  StructuredData,
  articleSchema,
  breadcrumbSchema,
} from "@/app/_components/structured-data";
import { GuidePageView } from "@/app/_components/content-pages";
import { GUIDE } from "@/lib/content/guide";

export const metadata: Metadata = createPageMetadata({
  title: GUIDE.titleTag,
  description: GUIDE.description,
  path: GUIDE.path,
});

export default function GuidePage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guide", path: GUIDE.path },
            { name: GUIDE.h1, path: GUIDE.path },
          ]),
          articleSchema({
            title: GUIDE.h1,
            description: GUIDE.description,
            path: GUIDE.path,
            datePublished: GUIDE.datePublished,
          }),
        ]}
      />
      <GuidePageView />
    </>
  );
}
