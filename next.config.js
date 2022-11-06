/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ui-avatars.com', 'www.placecage.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.placecage.com',
        pathname: '',
      },
    ],
  },
};

module.exports = nextConfig;
