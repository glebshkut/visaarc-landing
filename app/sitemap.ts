import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SOLUTION_PAGES } from "@/lib/content/solutions";
import { COMPARE_PAGES } from "@/lib/content/compare";
import { BLOG_POSTS } from "@/lib/content/blog";
import { GUIDE } from "@/lib/content/guide";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const core: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/security`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${GUIDE.path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const solutions = SOLUTION_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const compares = COMPARE_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const posts = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}${post.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // /terms is noindex - intentionally excluded
  return [...core, ...solutions, ...compares, ...posts];
}
