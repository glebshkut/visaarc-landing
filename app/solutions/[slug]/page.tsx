import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/site";
import {
  StructuredData,
  breadcrumbSchema,
} from "@/app/_components/structured-data";
import { SolutionPageView } from "@/app/_components/content-pages";
import { getSolutionBySlug, SOLUTION_PAGES } from "@/lib/content/solutions";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SOLUTION_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getSolutionBySlug(slug);
  if (!content) return {};

  return createPageMetadata({
    title: content.titleTag,
    description: content.description,
    path: content.path,
  });
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getSolutionBySlug(slug);
  if (!content) notFound();

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: content.path },
          { name: content.h1, path: content.path },
        ])}
      />
      <SolutionPageView content={content} />
    </>
  );
}
