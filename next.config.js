/** @type {import('next').NextConfig} */
const nextConfig = {
  // "output": "export",
  distDir: "build",
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
