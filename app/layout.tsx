import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.theaucorp.com'),

  title: {
    default: 'AU Corporate | Assurance, Tax and Consulting Services',
    template: '%s | AU Corporate',
  },

  description:
    'AU Corporate provides premium services in Assurance, Taxation, Risk Management, Transaction Advisory, and Compliance.',

  keywords: [
    'Assurance services',
    'Taxation services',
    'Consulting firm India',
    'Risk management',
    'Transaction advisory',
    'Corporate advisory',
    'Business consulting India',
  ],

  authors: [{ name: 'AU Corporate' }],

  openGraph: {
    title: 'AU Corporate | Assurance, Tax and Consulting Services',
    description:
      'Professional services in Assurance, Taxation, Risk Management, and Compliance.',
    url: 'https://www.theaucorp.com',
    siteName: 'AU Corporate',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AU Corporate | Assurance, Tax and Consulting Services',
    description:
      'Professional services in Assurance, Taxation, Risk Management, and Compliance.',
  },
}

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}