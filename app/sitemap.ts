import type { MetadataRoute } from "next";
import { church } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/contact", "/events"];

  return routes.map((route) => ({
    url: `${church.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
