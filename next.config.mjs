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

      // The generic service layer was retired 2026-08-27. Those 7 pages held
      // the deepest content on the site (600-1301 words) but had zero
      // editorial inbound links - their only inbound links were the sitewide
      // footer - while the Service x Region pages carried the commercial
      // intent at 484-758 words. Authority pointed at one layer and intent at
      // the other.
      //
      // Their unique depth was merged into the 21 regional pages first (see
      // lib/service-depth.ts), so no content was lost before these redirects
      // were added.
      //
      // Target is the United States page because it is the deepest and best
      // differentiated of each regional set. Every regional page carries a
      // region switcher so UK and Australia are one click away. If Search
      // Console later shows non-US demand on these URLs, each line here is
      // independently reversible.
      {
        source: "/services/bookkeeping",
        destination: "/services/bookkeeping/united-states",
        permanent: true,
      },
      {
        source: "/services/accounting",
        destination: "/services/accounting/united-states",
        permanent: true,
      },
      {
        source: "/services/tax-preparation",
        destination: "/services/tax-preparation/united-states",
        permanent: true,
      },
      {
        source: "/services/payroll",
        destination: "/services/payroll/united-states",
        permanent: true,
      },
      {
        source: "/services/accounts-payable",
        destination: "/services/accounts-payable/united-states",
        permanent: true,
      },
      {
        source: "/services/accounts-receivable",
        destination: "/services/accounts-receivable/united-states",
        permanent: true,
      },
      {
        source: "/services/audit-support",
        destination: "/services/audit-support/united-states",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;