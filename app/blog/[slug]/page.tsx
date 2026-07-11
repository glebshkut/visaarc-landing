import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/site";
import {
  StructuredData,
  articleSchema,
  breadcrumbSchema,
} from "@/app/_components/structured-data";
import { BlogPageView } from "@/app/_components/content-pages";
import { BLOG_POSTS, getBlogBySlug } from "@/lib/content/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getBlogBySlug(slug);
  if (!content) return {};

  return createPageMetadata({
    title: content.titleTag,
    description: content.description,
    path: content.path,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getBlogBySlug(slug);
  if (!content) notFound();

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: content.path },
            { name: content.h1, path: content.path },
          ]),
          articleSchema({
            title: content.h1,
            description: content.description,
            path: content.path,
            datePublished: content.datePublished,
          }),
        ]}
      />
      <BlogPageView content={content} />
    </>
  );
}
