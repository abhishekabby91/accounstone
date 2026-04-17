import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'AU Corporate – Growing Together | Global Consulting & Business Solutions',
  description: 'AU Corporate provides premium global consulting, outsourcing, HR, taxation, and arbitration solutions. Your trusted partner for business growth.',
  keywords: ['consulting', 'business solutions', 'HR services', 'outsourcing', 'taxation', 'arbitration', 'corporate advisory'],
  authors: [{ name: 'AU Corporate' }],
  openGraph: {
    title: 'AU Corporate – Growing Together',
    description: 'Global consulting, outsourcing, HR, taxation, and arbitration solutions',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
