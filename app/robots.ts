import type { MetadataRoute } from "next";
import { church } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${church.url}/sitemap.xml`,
  };
}
