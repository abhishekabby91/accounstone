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
      },
      {
        protocol: "https",
        hostname: "user8396.na.imgto.link",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ added for About page images
      },
    ],
  },
}

export default nextConfig