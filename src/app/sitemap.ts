import { MetadataRoute } from "next";

const SITE_URL = "https://rami-hamadeh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/coming-soon`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Add more pages if you have them later
  ];
}
