/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    unoptimized: true,
    domains: ["images.pexels.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
