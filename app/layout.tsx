import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeaderBar from "@/components/header-bar";
import TouchRipple from "@/components/touch-ripple";
import BackToTop from "@/components/back-to-top";
import InquiryModal from "@/components/inquiry-modal";
import { generateOrganizationSchema, generateWebsiteSchema, baseUrl } from "@/lib/seo";

// GA4 measurement ID. Public by design - it identifies the property to the
// browser and is visible in the page source of every site that uses it, so it
// is not a secret and does not belong in an env var here. Loaded
// `afterInteractive` so it never competes with LCP: analytics is not worth a
// slower first paint on a site whose whole job is the first impression.
const GA_MEASUREMENT_ID = "G-D1L72NM0GY";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,       // allow pinch-zoom for accessibility — do NOT set to 1
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a5f" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1f35" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    // Fallback only - every page sets its own title, and the homepage sets
    // its exact SEO title via absoluteTitle. Kept distinct from the homepage
    // title so the two are not the same string in two places.
    default: "Accounstone — Outsourced Accounting, Bookkeeping, Tax & Payroll",
    template: "%s | Accounstone",
  },
  description:
    "Outsourced accounting, bookkeeping, tax, payroll, and audit support for CPA firms and businesses. Expand your accounting capacity with Accounstone.",
  authors: [{ name: "Accounstone" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    // Ordered smallest-first; browsers take the best match. The .ico carries
    // 16/32/48 internally for older clients and Windows shortcuts.
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Accounstone",
    // Fallback only - every page sets its own og:title through
    // generateMetadata, the homepage included. Kept brand-led so it is not the
    // homepage SEO title duplicated in a second file.
    title: "Accounstone — Outsourced Accounting, Bookkeeping, Tax & Payroll",
    description:
      "Outsourced accounting, bookkeeping, tax, payroll, and audit support for CPA firms and businesses. Expand your accounting capacity with Accounstone.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Accounstone — outsourced accounting, bookkeeping, tax and payroll services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // Fallback only, as above.
    title: "Accounstone — Outsourced Accounting, Bookkeeping, Tax & Payroll",
    description:
      "Outsourced accounting, bookkeeping, tax, payroll, and audit support for CPA firms and businesses. Expand your accounting capacity with Accounstone.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className="bg-background">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:rounded-lg focus:bg-primary focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <TouchRipple />
        <HeaderBar />
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <BackToTop />
        <InquiryModal />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}