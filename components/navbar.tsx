"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import {
  Menu,
  X,
  MessageCircle,
  Linkedin,
  Mail,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Offshore Staffing",
    href: "/offshore-staffing",
  },
  {
    label: "Operational Excellence",
    href: "/operational-excellence",
  },
  {
    label: "India Expansion",
    href: "/india-expansion",
  },
  {
    label: "Insights",
    href: "/blog",
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="808 Strategy"
                width={180}
                height={60}
                priority
                className="h-auto"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">

              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-[#0072BC] transition-colors"
                >
                  {item.label}
                </Link>
              ))}

            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">

              <Button
                asChild
                className="bg-[#F97316] hover:bg-[#EA580C] text-white"
              >
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

          </div>

        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t">

            <div className="px-6 py-6 space-y-5">

              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-slate-700"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4">

                <Button
                  asChild
                  className="w-full bg-[#F97316] hover:bg-[#EA580C]"
                >
                  <Link href="/contact">
                    Schedule Consultation
                  </Link>
                </Button>

              </div>

            </div>

          </div>
        )}

      </header>

      {/* FLOATING CONTACT BUTTONS */}

      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-4">

        {/* WHATSAPP */}
        <a
          href="https://wa.me/91"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping"></span>

          <MessageCircle
            size={18}
            className="relative z-10"
          />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#0072BC] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-40 animate-ping"></span>

          <Linkedin
            size={18}
            className="relative z-10"
          />
        </a>

        {/* EMAIL */}
        <a
          href="mailto:bemore@808strategy.com"
          className="relative bg-[#F97316] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-orange-300 opacity-40 animate-ping"></span>

          <Mail
            size={18}
            className="relative z-10"
          />
        </a>

      </div>
    </>
  )
}