import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { church } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(church.url),
  title: {
    default: `${church.name} | Harvey, LA`,
    template: `%s | ${church.name}`,
  },
  description: church.description,
  keywords: [
    "Abundant Life",
    "Harvey",
    "Jesus",
    "Jonas Robertson",
    "Bill Fitzgerald",
    "church",
    "Louisiana",
    "worship",
  ],
  openGraph: {
    title: church.name,
    description: church.description,
    url: church.url,
    siteName: church.name,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: church.name,
  description: church.description,
  url: church.url,
  telephone: church.phone,
  email: church.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: church.address.street,
    addressLocality: church.address.city,
    addressRegion: church.address.state,
    postalCode: church.address.zip,
    addressCountry: "US",
  },
  sameAs: [church.social.facebook, church.social.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
