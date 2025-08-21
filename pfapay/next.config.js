const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: false,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'example.com'],
  },
  experimental: {
  }
};

module.exports = withNextIntl(nextConfig);

