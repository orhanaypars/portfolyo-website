import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash için izin verilen domain
        port: "",
        pathname: "/**", // Tüm yolları kapsar
      },
    ],
  },
};

export default nextConfig;
