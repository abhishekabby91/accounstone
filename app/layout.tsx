import type { Metadata, Viewport } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeaderBar from "@/components/header-bar";
import TouchRipple from "@/components/touch-ripple";
import { generateOrganizationSchema, generateWebsiteSchema, baseUrl } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
  colorScheme: "light",
};

export const metadata: Metadata = {
  // DECISION: non-www (accounstone.com) is canonical everywhere.
  // baseUrl in lib/seo.ts is the single source of truth — never
  // hardcode the domain in any other file.
  metadataBase: new URL(baseUrl),

  title: {
    default: "Accounstone | Outsourced Accounting & Bookkeeping for CPA Firms",
    template: "%s | Accounstone",
  },

  description:
    "Outsourced accounting, bookkeeping, and finance solutions for CPA firms and accounting professionals. Scalable support from experienced accountants.",

  keywords: [
    "accounting services",
    "outsourced accounting",
    "CFO services",
    "bookkeeping",
    "tax advisory",
    "finance outsourcing",
    "HR services",
  ],

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

  // FALLBACK ONLY. Every individual page (services/*, solutions/*,
  // markets/*, resources/*) MUST call generateMetadata() from lib/seo.ts,
  // which sets its own canonical automatically. If a page sets metadata
  // manually instead of using that helper, it will silently inherit
  // this homepage canonical and Google may drop it from the index.
  alternates: {
    canonical: baseUrl,
  },

  manifest: "/manifest.webmanifest",

  // TODO once the domain is live: sign up for Google Search Console
  // and Bing Webmaster Tools, choose the "HTML meta tag" verification
  // method in each, and paste the codes they give you here. Example:
  // verification: {
  //   google: "paste-google-site-verification-code-here",
  //   other: { "msvalidate.01": "paste-bing-verification-code-here" },
  // },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Accounstone",
    title: "Accounstone | Outsourced Accounting & Finance Solutions",
    description:
      "Professional outsourced accounting, finance, and HR services for growing businesses.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Accounstone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Accounstone | Outsourced Accounting & Finance Solutions",
    description:
      "Professional outsourced accounting, finance, and HR services for growing businesses.",
    // TODO confirm: remove this line if @accounstone is not a real,
    // active X/Twitter account.
    creator: "@accounstone",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="text-foreground">
        <TouchRipple />
        <HeaderBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}