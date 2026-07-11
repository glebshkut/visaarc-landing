import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/site";
import {
  StructuredData,
  breadcrumbSchema,
} from "@/app/_components/structured-data";
import { ComparePageView } from "@/app/_components/content-pages";
import { COMPARE_PAGES, getCompareBySlug } from "@/lib/content/compare";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return COMPARE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getCompareBySlug(slug);
  if (!content) return {};

  return createPageMetadata({
    title: content.titleTag,
    description: content.description,
    path: content.path,
  });
}

export default async function ComparePage({ params }: PageProps) {
  const { slug } = await params;
  const content = getCompareBySlug(slug);
  if (!content) notFound();

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: content.path },
          { name: content.h1, path: content.path },
        ])}
      />
      <ComparePageView content={content} />
    </>
  );
}
