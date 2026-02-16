import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { workList } from "@/lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const workPages: MetadataRoute.Sitemap = workList.map((work) => ({
    url: `${baseUrl}/${work.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...workPages];
}
