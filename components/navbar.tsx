"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Why India', href: '/why-india' },
    { label: 'Arbitration Services', href: '/arbitration-services' },
    { label: 'HR Services', href: '/hr-services' },
    { label: 'Global Support', href: '/outsourcing' },
    { label: 'About', href: '/about' },
    { label: 'Career', href: '/career' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b ${isScrolled ? 'shadow-sm' : ''}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://user8396.na.imgto.link/public/20260417/au.avif"
              alt="AU Corporate Logo"
              width={40}
              height={40}
            />

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-gold">
                AU Corporate
              </span>
              <span className="text-[10px] text-[#081a42] tracking-[0.25em] uppercase">
                Growing Together
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1 relative">

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black">
                Services ▾
              </button>

              {servicesOpen && (
                <div className="absolute top-10 left-0 w-[340px] bg-white border shadow-xl rounded-xl overflow-hidden z-50">

                  {/* HEADER */}
                  <div className="px-4 py-3 border-b bg-gray-50">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Key Services
                    </p>
                  </div>

                  {/* KEY SERVICES LIST */}
                  <div className="py-2">

                    <Link href="/services/corporate-tax" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Corporate Tax
                    </Link>

                    <Link href="/services/income-tax-litigation" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Income Tax Litigation Services
                    </Link>

                    <Link href="/services/direct-indirect-tax" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Direct & Indirect Tax
                    </Link>

                    <Link href="/services/income-tax-return" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Income Tax Return Filings
                    </Link>

                    <Link href="/services/tds-tcs" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      TDS & TCS Return Filings
                    </Link>

                    <Link href="/services/gst" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      GST Consultancy Services
                    </Link>

                    <Link href="/services/goods-service-tax" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Goods & Service Tax
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* OTHER NAV LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-600 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild className="bg-yellow-400 text-black font-semibold">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white">

            <Link href="/services" className="block px-4 py-3 font-medium">
              Services
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-sm text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          </div>
        )}

      </nav>
    </header>
  )
}