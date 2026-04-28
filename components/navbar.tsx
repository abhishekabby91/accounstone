"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [indiaOpen, setIndiaOpen] = useState(false)

  const navLinks = [
    { label: "Arbitration Services", href: "/arbitration-services" },
    { label: "HR Services", href: "/hr-services" },
    { label: "Global Support", href: "/outsourcing" },
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="https://user8396.na.imgto.link/public/20260417/au.avif"
              alt="AU Corporate Logo"
              width={36}
              height={36}
            />
            <span className="text-lg sm:text-2xl font-bold text-gold">
              AU Corporate
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-3">

            {/* INDIA DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setIndiaOpen(!indiaOpen)}
                className="px-3 py-2 text-sm text-gray-600 hover:text-black"
              >
                Doing Business in India ▾
              </button>

              {indiaOpen && (
                <div className="absolute top-full left-0 w-[260px] bg-white border shadow-xl rounded-xl z-50">

                  <Link href="/doing-business-in-india/why-india" className="block px-4 py-3 hover:bg-gray-100">
                    Why India
                  </Link>

                  <Link href="/doing-business-in-india/entry-process" className="block px-4 py-3 hover:bg-gray-100">
                    Entry Process
                  </Link>

                  {/* SUB MENU */}
                  <div className="relative group">
                    <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
                      <span>Incorporation</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>

                    <div className="absolute top-0 left-full w-[240px] bg-white border shadow-xl rounded-xl hidden group-hover:block">

                      <Link href="/doing-business-in-india/pre-incorporation" className="block px-4 py-3 hover:bg-gray-100">
                        Pre-Incorporation
                      </Link>

                      <Link href="/doing-business-in-india/incorporation" className="block px-4 py-3 hover:bg-gray-100">
                        Incorporation
                      </Link>

                      <Link href="/doing-business-in-india/post-incorporation" className="block px-4 py-3 hover:bg-gray-100">
                        Post-Incorporation
                      </Link>

                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* OTHER LINKS */}
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="px-3 py-2 text-sm">
                {link.label}
              </Link>
            ))}

          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-16 w-full bg-white border-t shadow-lg flex flex-col p-4 space-y-3">

            {/* INDIA MOBILE */}
            <div className="border-b pb-3">
              <p className="font-semibold mb-2">Doing Business in India</p>

              <Link href="/doing-business-in-india/why-india" onClick={() => setIsOpen(false)}>
                Why India
              </Link>

              <Link href="/doing-business-in-india/entry-process" onClick={() => setIsOpen(false)}>
                Entry Process
              </Link>

              <Link href="/doing-business-in-india/pre-incorporation" onClick={() => setIsOpen(false)}>
                Pre-Incorporation
              </Link>

              <Link href="/doing-business-in-india/incorporation" onClick={() => setIsOpen(false)}>
                Incorporation
              </Link>

              <Link href="/doing-business-in-india/post-incorporation" onClick={() => setIsOpen(false)}>
                Post-Incorporation
              </Link>
            </div>

            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}

            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>

          </div>
        )}

      </nav>
    </header>
  )
}