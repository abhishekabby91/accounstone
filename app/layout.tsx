import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.808strategy.com"),

  title: {
    default: "808 Strategy",
    template: "%s | 808 Strategy",
  },

  description:
    "808 Strategy helps accounting firms scale through offshore staffing, operational excellence, global talent solutions, and India expansion strategies.",

  keywords: [
    "808 Strategy",
    "Accounting firm growth",
    "Offshore staffing",
    "Accounting outsourcing India",
    "CPA firm staffing",
    "Bookkeeping outsourcing",
    "Tax preparation support",
    "India offshore team",
    "Operational excellence",
    "Accounting practice growth",
    "Global talent solutions",
    "Accounting workflow optimization",
    "India expansion",
    "Remote accounting teams",
    "Finance and accounting outsourcing",
    "Accounting consulting",
    "Business process outsourcing",
  ],

  alternates: {
    canonical: "https://www.808strategy.com",
  },

  authors: [
    {
      name: "808 Strategy",
    },
  ],

  creator: "808 Strategy",

  publisher: "808 Strategy",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "808 Strategy",

    description:
      "Helping accounting firms scale through offshore staffing, operational excellence, and India expansion.",

    url: "https://www.808strategy.com",

    siteName: "808 Strategy",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "808 Strategy",

    description:
      "Helping accounting firms scale through offshore staffing and operational excellence.",
  },

  category: "Accounting Consulting",
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <head>
        {/* ORGANIZATION SCHEMA */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Organization",

              name: "808 Strategy",

              alternateName: "808 Strategy",

              url: "https://www.808strategy.com",

              logo: "https://www.808strategy.com/logo.png",

              description:
                "Strategic consulting firm helping accounting firms scale through offshore staffing, operational excellence, and India expansion.",

              sameAs: [
                "https://www.linkedin.com/company/808-strategy",
              ],
            }),
          }}
        />

        {/* WEBSITE SCHEMA */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "WebSite",

              name: "808 Strategy",

              alternateName: "808 Strategy",

              url: "https://www.808strategy.com",
            }),
          }}
        />

        {/* PROFESSIONAL SERVICE SCHEMA */}
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "ProfessionalService",

              name: "808 Strategy",

              image: "https://www.808strategy.com/logo.png",

              url: "https://www.808strategy.com",

              description:
                "Helping accounting firms build scalable operations through offshore staffing, global talent solutions, and strategic growth consulting.",

              address: {
                "@type": "PostalAddress",

                addressCountry: "IN",
              },

              areaServed: [
                "United States",
                "United Kingdom",
                "Australia",
                "Canada",
                "India",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} font-sans antialiased m-0 p-0 overflow-x-hidden`}
      >
        {/* NAVBAR */}
        <div className="relative z-[60]">
          <Navbar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 pt-16 sm:pt-20">
            {children}
          </main>

          <Footer />
        </div>

        {/* APOLLO TRACKER */}
        <Script id="apollo" strategy="lazyOnload">
          {`
            function initApollo() {
              var n = Math.random().toString(36).substring(7),
                  o = document.createElement("script");

              o.src =
                "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" +
                n;

              o.async = true;
              o.defer = true;

              o.onload = function () {
                if (window.trackingFunctions) {
                  window.trackingFunctions.onLoad({
                    appId: "69ef2f72e61a0c000d596f8e",
                  });
                }
              };

              document.head.appendChild(o);
            }

            initApollo();
          `}
        </Script>
      </body>
    </html>
  )
}