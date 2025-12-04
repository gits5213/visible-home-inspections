import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for Bluehost
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better compatibility with Bluehost
};

export default nextConfig;
