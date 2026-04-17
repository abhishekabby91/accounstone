"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

            {/* IMAGE LOGO (YOUR FILE) */}
            <div className="w-10 h-10 relative">
              <Image
                src="https://user8396.na.imgto.link/public/20260417/au.avif"
                alt="AU Corporate Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* TEXT BLOCK */}
            <div className="flex flex-col leading-tight">

              <span className="text-xl font-semibold tracking-tight text-[#f1d060]">
                AU Corporate
              </span>

              <span className="text-[11px] text-[#021a4d] tracking-[0.25em] uppercase">
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
              className="bg-[#fcd75a] hover:bg-yellow-500 text-black font-semibold"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* MOBILE MENU */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
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
                  className="w-full bg-[#f7d66d] hover:bg-yellow-500 text-black font-semibold"
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