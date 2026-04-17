"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Why India', href: '/why-india' },
  { label: 'Arbitration Services', href: '/arbitration-services' },
  { label: 'HR Services', href: '/hr-services' },
  { label: 'Outsourcing', href: '/outsourcing' },
  { label: 'About', href: '/about' },
  { label: 'Career', href: '/career' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-border ${isScrolled ? 'shadow-sm' : ''
        }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">

            {/* ICON */}
            <div className="w-8 h-8 rounded-full border-2 border-[#f1c83f] flex items-center justify-center">
              <span className="text-[#f1c83f] font-bold text-xs">
                AU
              </span>
            </div>

            {/* TEXT BLOCK */}
            <div className="flex flex-col leading-tight">

              {/* BRAND NAME */}
              <span className="text-xl font-semibold tracking-tight text-[#f1c83f]">
                AU Corporate
              </span>

              {/* TAGLINE */}
              <span className="text-[11px] text-[#06225e] tracking-[0.25em] uppercase">
                Growing Together
              </span>

            </div>

          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#f1c83f] hover:bg-yellow-500 text-black font-semibold"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="py-4 space-y-1">

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-4 pt-4">
                <Button
                  asChild
                  className="w-full bg-[#f1c83f] hover:bg-yellow-500 text-black font-semibold"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        )}

      </nav>
    </header>
  )
}