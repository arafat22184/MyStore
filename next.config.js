/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
};

module.exports = nextConfig;