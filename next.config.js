/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cấu hình cơ bản
  reactStrictMode: true,
  swcMinify: false,
  output: 'export',

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
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Cấu hình cho Node.js 18
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },

  // Thêm cấu hình cho Cloudflare Pages
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
