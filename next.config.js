/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  compress: true,
  optimizeFonts: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [],
  },
}

module.exports = nextConfig
