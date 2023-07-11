/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.ctfassets.net',
      },
    ],
  },
}

module.exports = nextConfig
