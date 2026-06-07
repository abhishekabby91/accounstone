import type { Metadata } from "next"
import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.808strategy.com"),

  title: {
    default: "808 Strategy | Global Growth Advisory for Accounting Firms",
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
  ],

  openGraph: {
    title: "808 Strategy | Global Growth Advisory for Accounting Firms",
    description:
      "Helping accounting firms build high-performance global teams and scalable delivery models.",
    url: "https://www.808strategy.com",
    siteName: "808 Strategy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "808 Strategy | Global Growth Advisory for Accounting Firms",
    description:
      "Scale your accounting firm globally through operational excellence.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 📱 Mobile viewport fix (CRITICAL) */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>

      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased overflow-x-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Main Content (mobile-safe spacing) */}
        <main className="flex-1 w-full">
          <div className="w-full max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  )
}