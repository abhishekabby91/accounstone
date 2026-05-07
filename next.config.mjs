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
        hostname: "images.unsplash.com",
      },
    ],

    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async headers() {
    return [
      {
        source: "/(.*)",

        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, stale-while-revalidate=86400",
          },

          // SECURITY + SEO TRUST SIGNALS
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },

          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ]
  },

  // NON-WWW → WWW REDIRECT
  async redirects() {
    return [
      {
        source: "/:path*",

        has: [
          {
            type: "host",
            value: "theaucorp.com",
          },
        ],

        destination: "https://www.theaucorp.com/:path*",

        permanent: true,
      },
    ]
  },

  // SEO consistency
  trailingSlash: false,

  // performance
  poweredByHeader: false,
}

export default nextConfig