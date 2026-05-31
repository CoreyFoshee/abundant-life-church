import type { Metadata } from "next";
import { church } from "@/lib/constants";
import { defaultServiceTimes } from "@/lib/data/serviceTimes";

const siteUrl = church.url;

export const siteSeo = {
  locale: "en_US",
  defaultTitle: `${church.name} | Harvey, LA`,
  titleTemplate: `%s | ${church.name}`,
  defaultDescription:
    "The Church of Abundant Life in Harvey, Louisiana — Sunday worship, Bible teaching, and outreach in Greater New Orleans. Plan your visit today.",
  keywords: [
    "The Church of Abundant Life",
    "Abundant Life World Outreach Center",
    "church Harvey LA",
    "church Harvey Louisiana",
    "church near Harvey LA",
    "church Greater New Orleans",
    "worship Harvey LA",
    "Sunday service Harvey",
    "Jonas Robertson pastor",
    "Bill Fitzgerald pastor",
    "Christian church Louisiana",
    "plan a visit church Harvey",
  ],
  ogImage: {
    url: "/images/church-arial.jpg",
    width: 1200,
    height: 630,
    alt: `Aerial view of ${church.name} in Harvey, Louisiana`,
  },
  geo: {
    latitude: 29.9037,
    longitude: -90.0778,
  },
  areaServed: "Greater New Orleans, Louisiana",
} as const;

type PageSeoOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  ogType?: "website" | "article";
  noIndex?: boolean;
};

function absoluteUrl(path: PageSeoOptions["path"]) {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

function buildOpenGraph(
  title: string,
  description: string,
  url: string,
  ogType: "website" | "article" = "website",
) {
  return {
    title,
    description,
    url,
    siteName: church.name,
    locale: siteSeo.locale,
    type: ogType,
    images: [siteSeo.ogImage],
  };
}

function buildTwitter(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [siteSeo.ogImage.url],
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  ogType = "website",
  noIndex = false,
}: PageSeoOptions): Metadata {
  const url = absoluteUrl(path);
  const isHome = path === "/";
  const socialTitle = isHome ? siteSeo.defaultTitle : `${title} | ${church.name}`;

  return {
    title: isHome ? { absolute: siteSeo.defaultTitle } : title,
    description,
    keywords: [...siteSeo.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: buildOpenGraph(socialTitle, description, url, ogType),
    twitter: buildTwitter(socialTitle, description),
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

function parseTimeTo24Hour(time: string) {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;

  let hours = Number.parseInt(match[1], 10);
  const minutes = match[2];
  const meridiem = match[3].toUpperCase();

  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${minutes}`;
}

function buildServiceHoursSpecification() {
  return defaultServiceTimes.services
    .map((service) => {
      const opens = parseTimeTo24Hour(service.time);
      if (!opens) return null;

      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Sunday",
        opens,
        closes: "12:00",
        description: `${service.name} — ${service.location}`,
      };
    })
    .filter(Boolean);
}

export function buildSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: church.name,
        description: siteSeo.defaultDescription,
        inLanguage: "en-US",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": ["Church", "PlaceOfWorship"],
        "@id": `${siteUrl}/#organization`,
        name: church.name,
        alternateName: "Abundant Life World Outreach Center",
        description: church.description,
        url: siteUrl,
        telephone: church.phone,
        email: church.email,
        image: `${siteUrl}${siteSeo.ogImage.url}`,
        logo: `${siteUrl}/favicon.ico`,
        address: {
          "@type": "PostalAddress",
          streetAddress: church.address.street,
          addressLocality: church.address.city,
          addressRegion: church.address.state,
          postalCode: church.address.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteSeo.geo.latitude,
          longitude: siteSeo.geo.longitude,
        },
        hasMap: church.mapsUrl,
        areaServed: siteSeo.areaServed,
        sameAs: [church.social.facebook, church.social.youtube],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "https://schema.org/Monday",
              "https://schema.org/Tuesday",
              "https://schema.org/Wednesday",
              "https://schema.org/Thursday",
            ],
            opens: "09:00",
            closes: "15:00",
            description: "Office hours",
          },
          ...buildServiceHoursSpecification(),
        ],
      },
    ],
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteSeo.defaultTitle,
    template: siteSeo.titleTemplate,
  },
  description: siteSeo.defaultDescription,
  keywords: [...siteSeo.keywords],
  applicationName: church.shortName,
  authors: [{ name: church.name, url: siteUrl }],
  creator: church.name,
  publisher: church.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: buildOpenGraph(
    siteSeo.defaultTitle,
    siteSeo.defaultDescription,
    siteUrl,
  ),
  twitter: buildTwitter(siteSeo.defaultTitle, siteSeo.defaultDescription),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};
