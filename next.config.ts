import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const useCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const basePath = '/visible-home-inspections';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  // Only use basePath for GitHub Pages subdomain, not for custom domain (which serves from root)
  ...(isGitHubPages && !useCustomDomain && { basePath }),
  ...(isGitHubPages && { trailingSlash: true }), // Better compatibility with GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
