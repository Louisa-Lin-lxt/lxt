const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/lxt' : '',
  trailingSlash: true,
  async generateStaticParams() {
    return {
      '/': { page: '/' },
      '/en': { page: '/en' },
      '/zh': { page: '/zh' },
    };
  },
}

module.exports = withNextIntl(nextConfig); 