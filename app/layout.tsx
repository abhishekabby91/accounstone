import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MessageCircle, Linkedin } from "lucide-react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theaucorp.com"),

  title: {
    default: "AU Corporate | Assurance, Tax and Consulting Services",
    template: "%s | AU Corporate",
  },

  description:
    "AU Corporate provides premium services in Assurance, Taxation, Risk Management, Transaction Advisory, and Compliance.",

  keywords: [
    "Assurance services",
    "Taxation services",
    "Consulting firm India",
    "Risk management",
    "Transaction advisory",
    "Corporate advisory",
    "Business consulting India",
  ],

  authors: [{ name: "AU Corporate" }],

  openGraph: {
    title: "AU Corporate | Assurance, Tax and Consulting Services",
    description:
      "Professional services in Assurance, Taxation, Risk Management, and Compliance.",
    url: "https://www.theaucorp.com",
    siteName: "AU Corporate",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AU Corporate | Assurance, Tax and Consulting Services",
    description:
      "Professional services in Assurance, Taxation, Risk Management, and Compliance.",
  },
}

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
      <head>
        {/* Apollo Tracking Script */}
        <Script id="apollo" strategy="afterInteractive">
          {`function initApollo(){
            var n = Math.random().toString(36).substring(7),
                o = document.createElement("script");
            o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
            o.async = true;
            o.defer = true;
            o.onload = function(){
              window.trackingFunctions.onLoad({
                appId: "69ef2f72e61a0c000d596f8e"
              });
            };
            document.head.appendChild(o);
          }
          initApollo();`}
        </Script>
      </head>

      <body
        className={`${inter.variable} font-sans antialiased m-0 p-0 overflow-x-hidden scroll-smooth`}
      >
        {/* HEADER (should already be z-[60]) */}
        <Navbar />

        {/* 🔥 LEFT FLOATING SOCIAL SIDEBAR (FIXED SAFE LAYER) */}
        <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-[45]">

          {/* WhatsApp */}
          <a
            href="https://wa.me/919999010513"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition hover:scale-110"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/28753559"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>

        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 pt-16 sm:pt-20">
            {children}
          </main>

          <Footer />
        </div>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}