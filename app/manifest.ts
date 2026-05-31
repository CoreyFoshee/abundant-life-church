import type { MetadataRoute } from "next";
import { church } from "@/lib/constants";
import { siteSeo } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: church.name,
    short_name: church.shortName,
    description: siteSeo.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#67a4e5",
    lang: "en-US",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
