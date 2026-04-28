/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.corenexis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "user8396.na.imgto.link",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // ✅ IMPORTANT
      },
    ],
  },
}

module.exports = nextConfig