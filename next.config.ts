import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = '/visible-home-inspections';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  ...(isGitHubPages && { basePath }), // Set basePath for GitHub Pages subdirectory
  ...(isGitHubPages && { trailingSlash: true }), // Better compatibility with GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
