import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteUrl";
import { getPosts, isSamplePost } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const lastModified = new Date();
  const posts = getPosts().filter((post) => !isSamplePost(post));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...["strategy", "marketing", "sales", "technology"].map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    // The blog joins the sitemap with its first article
    ...(posts.length > 0
      ? [
          { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
          ...posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(`${post.date}T00:00:00Z`),
            changeFrequency: "monthly" as const,
            priority: 0.7,
          })),
        ]
      : []),
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
