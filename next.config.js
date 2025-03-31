/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static exports for GitHub Pages
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // GitHub Pages adds a trailing slash by default
  trailingSlash: true,
  // Set the base path if deploying to a subdirectory (e.g., username.github.io/repo-name)
  // basePath: '/tribeswallet', // Uncomment and adjust if deploying to a repository path instead of custom domain
}

module.exports = nextConfig 