/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plugin-storage.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/families/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
