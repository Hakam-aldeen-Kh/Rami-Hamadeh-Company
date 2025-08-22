import { MetadataRoute } from "next";

export const dynamic = "force-static"; // required for output: 'export'

const SITE_URL = "https://rami-hamadeh.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
