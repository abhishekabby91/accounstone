import type { Metadata } from "next"
import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.808strategy.com"),

  title: {
    default:
      "808 Strategy | Global Growth Advisory for Accounting Firms",
    template: "%s | 808 Strategy",
  },

  description:
    "Helping accounting firms scale through operational excellence, offshore talent strategies, ONEGD™ Framework implementation, and India expansion.",

  keywords: [
    "CPA Firm Growth",
    "Accounting Firm Consulting",
    "Global Delivery",
    "India Expansion",
    "GCC Strategy",
    "Offshore Staffing",
    "ONEGD Framework",
    "Accounting Operations",
    "CPA Outsourcing",
    "Global Talent",
  ],

  authors: [
    {
      name: "Gaurav Dhawan",
    },
  ],

  creator: "808 Strategy",

  openGraph: {
    title:
      "808 Strategy | Global Growth Advisory for Accounting Firms",

    description:
      "Helping accounting firms build high-performance global teams and scalable delivery models.",

    url: "https://www.808strategy.com",

    siteName: "808 Strategy",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "808 Strategy | Global Growth Advisory for Accounting Firms",

    description:
      "Scale your accounting firm globally through operational excellence and offshore talent strategies.",
  },

  category: "Business Consulting",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased">

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}