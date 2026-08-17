import type { Metadata, Viewport } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeaderBar from "@/components/header-bar";
import TouchRipple from "@/components/touch-ripple";
import BackToTop from "@/components/back-to-top";
import { generateOrganizationSchema, generateWebsiteSchema, baseUrl } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Accounting, Tax, Bookkeeping & Audit Outsourcing | Accounstone",
    template: "%s | Accounstone",
  },
  description:
    "Accounting, tax, bookkeeping and audit support for CPA firms and growing businesses, with practical support across recurring accounting workflows.",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Accounstone",
    title: "Accounting, Tax, Bookkeeping & Audit Outsourcing | Accounstone",
    description:
      "Accounting, tax, bookkeeping and audit support for CPA firms and growing businesses, with practical support across recurring accounting workflows.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Accounstone — Accounting, Tax, Bookkeeping & Audit Outsourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting, Tax, Bookkeeping & Audit Outsourcing | Accounstone",
    description:
      "Accounting, tax, bookkeeping and audit support for CPA firms and growing businesses.",
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
      </body>
    </html>
  );
}