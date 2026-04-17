"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Why India', href: '/why-india' },
  { label: 'Arbitration Services', href: '/arbitration-services' },
  { label: 'HR Services', href: '/hr-services' },
  { label: 'Outsourcing', href: '/outsourcing' },
  { label: 'About', href: '/about' },
  { label: 'Career', href: '/career' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="AU Corporate"
              width={48}
              height={48}
              className="transition-transform duration-300 group-hover:scale-105"
            />

            {/* TEXT BLOCK */}
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-semibold tracking-tight text-gray-900">
                AU <span className="text-[#D4AF37]">Corporate</span>
              </span>

              <span className="text-[11px] text-gray-500 tracking-[0.25em] uppercase">
                Growing Together
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#D4AF37] transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <Button
              asChild
              className="bg-[#D4AF37] hover:bg-yellow-500 text-black font-semibold px-6 transition-all duration-200"
            >
              <Link href="/career">Get Started</Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-gray-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 text-gray-700 hover:text-[#D4AF37] hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 px-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#e0bd4c] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <Button
              asChild
              className="bg-[#f7cb3e] hover:bg-yellow-500 text-black font-semibold flex-1"
            >
              <Link href="/career">Get Started</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}