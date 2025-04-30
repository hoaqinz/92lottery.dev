/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cấu hình cơ bản
  reactStrictMode: true,
  swcMinify: false,

  // Cấu hình cho images
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
  },

  // Bỏ qua lỗi
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
