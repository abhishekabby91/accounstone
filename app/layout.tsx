import type { Metadata } from "next"
import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "808 Strategy | Global Growth Advisory for Accounting Firms",
  description:
    "Helping accounting firms scale through operational excellence, global talent strategies, and India expansion.",

  keywords: [
    "CPA Firm Growth",
    "Global Delivery",
    "India Expansion",
    "Accounting Firm Consulting",
    "GCC Strategy",
    "Offshore Talent",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}