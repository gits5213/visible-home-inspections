/**
 * Base path for GitHub Pages deployment
 */
export const BASE_PATH = '/visible-home-inspections';

/**
 * Get the correct image path for static assets
 * Handles basePath for GitHub Pages deployment
 */
export function getImagePath(path: string): string {
  if (typeof window === 'undefined') {
    // Server-side: Check if we're building for GitHub Pages
    const isGitHubPages = process.env.GITHUB_PAGES === 'true';
    const useCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
    
    // Only prepend basePath if building for GitHub Pages (not custom domain)
    if (isGitHubPages && !useCustomDomain && path.startsWith('/') && !path.startsWith(BASE_PATH)) {
      return `${BASE_PATH}${path}`;
    }
    
    return path;
  }
  
  // Client-side: Check if we're on GitHub Pages
  const isGitHubPages = window.location.hostname === 'gits5213.github.io' || 
    window.location.pathname.startsWith(BASE_PATH);
  
  // Only prepend basePath if:
  // 1. We're on GitHub Pages
  // 2. Path starts with '/' (absolute path)
  // 3. Path doesn't already start with basePath
  if (isGitHubPages && path.startsWith('/') && !path.startsWith(BASE_PATH)) {
    return `${BASE_PATH}${path}`;
  }
  
  return path;
}

