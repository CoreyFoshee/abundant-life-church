import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-neutral-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
