import type { Metadata } from "next";
import { metadata as studioMetadata, viewport } from "next-sanity/studio";

export const metadata: Metadata = {
  ...studioMetadata,
  robots: {
    index: false,
    follow: false,
  },
};

export { viewport };

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
