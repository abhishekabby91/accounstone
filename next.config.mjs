/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      // Merged into the guide 2026-08-21 - the two pages had near-identical
      // content (see docs/CONTENT-REGISTRY.md). The guide's cost coverage
      // was extended with the blog's unique "Cost Ranges" section before
      // this redirect was added, so no informational content was lost.
      {
        source: "/blog/outsourced-accounting-services",
        destination: "/resources/guides/outsourced-accounting-services-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;