'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Why India', href: '/why-india' },
  {
    label: 'Solutions',
    href: '#',
    children: [
      { label: 'Arbitration Services', href: '/arbitration-services' },
      { label: 'HR Services', href: '/hr-services' },
      { label: 'Outsourcing', href: '/outsourcing' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Career', href: '/career' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="AU Corporate Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-gold">
                AU <span className="text-foreground">Corporate</span>
              </span>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                Growing Together
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 w-56 pt-2">
                        <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-gold hover:bg-gold-dark text-background font-semibold">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <div className="space-y-1">
                      <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block pl-8 pr-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Button asChild className="w-full bg-gold hover:bg-gold-dark text-background font-semibold">
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    Get in Touch
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
