import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.abundantlifeharvey.org",
      },
    ],
  },
};

export default nextConfig;
