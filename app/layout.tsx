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
  metadataBase: new URL("https://www.theaucorp.com"),

  title: {
    default: "AU Corporate",
    template: "%s | AU Corporate",
  },

  description:
    "AU Corporate provides premium services in Assurance, Taxation, Risk Management, Transaction Advisory, FEMA, Accounting, Payroll, and Compliance services for Indian and foreign companies.",

  keywords: [
    "Assurance services",
    "Taxation services",
    "Consulting firm India",
    "Risk management",
    "Transaction advisory",
    "Corporate advisory",
    "Business consulting India",
    "Foreign company registration India",
    "India entry services",
    "Accounting outsourcing India",
    "FEMA compliance",
    "GST registration India",
    "Payroll services India",
    "Virtual CFO India",
  ],

  alternates: {
    canonical: "https://www.theaucorp.com",
  },

  authors: [{ name: "AU Corporate" }],

  creator: "AU Corporate",

  publisher: "AU Corporate",

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
    title: "AU Corporate",

    description:
      "Professional services in Assurance, Taxation, Risk Management, FEMA, Accounting, Payroll and Compliance.",

    url: "https://www.theaucorp.com",

    siteName: "AU Corporate",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "AU Corporate",

    description:
      "Professional services in Assurance, Taxation, Risk Management, FEMA, Accounting and Compliance.",
  },

  category: "Business Consulting",
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

              name: "AU Corporate",

              alternateName: "AU Corporate",

              url: "https://www.theaucorp.com",

              logo: "https://www.theaucorp.com/logo.png",

              description:
                "Professional services firm providing assurance, taxation, compliance, FEMA, accounting and advisory services.",

              sameAs: [
                "https://www.linkedin.com/company/au-corporate",
              ],
            }),
          }}
        />

        {/* WEBSITE SCHEMA FOR GOOGLE SITE NAME */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "WebSite",

              name: "AU Corporate",

              alternateName: "AU Corporate",

              url: "https://www.theaucorp.com",
            }),
          }}
        />

        {/* LOCAL BUSINESS SCHEMA */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "ProfessionalService",

              name: "AU Corporate",

              image: "https://www.theaucorp.com/logo.png",

              url: "https://www.theaucorp.com",

              address: {
                "@type": "PostalAddress",

                addressCountry: "IN",
              },

              areaServed: "India",
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