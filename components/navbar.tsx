"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)

  const navLinks = [
    { label: "Arbitration Services", href: "/arbitration-services" },
    { label: "HR Services", href: "/hr-services" },
    { label: "Global Support", href: "/outsourcing" },
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
  ]

  const mainServices = [
    { label: "Risk Management Services", key: "risk" },
    { label: "Accounting & Assurance", href: "/services/accounting-assurance" },
    { label: "Taxation & Regulatory Services", key: "tax" },
    { label: "Transaction Advisory Services", href: "/services/transaction-advisory" },
  ]

  const riskSubServices = [
    { label: "Risk Management", href: "/services/risk-management" },
    { label: "Forensic Services", href: "/services/risk-management" },
    { label: "Special Audit / Review", href: "/services/risk-management" },
  ]

  const taxSubServices = [
    { label: "Direct Taxation", href: "/services/taxation-regulatory" },
    { label: "Goods & Service Tax", href: "/services/taxation-regulatory" },
    { label: "Regulatory Services", href: "/services/taxation-regulatory" },
    { label: "Secretarial & Legal", href: "/services/taxation-regulatory" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
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

          {/* DESKTOP (UNCHANGED) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* keep your existing desktop code exactly same */}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* MOBILE */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-16 w-full bg-white border-t shadow-lg flex flex-col p-4 space-y-4">

            {/* SERVICES */}
            <button
              onClick={() =>
                setActiveMenu(activeMenu === "services" ? null : "services")
              }
              className="text-left font-semibold flex justify-between"
            >
              Services
              <span>{activeMenu === "services" ? "−" : "+"}</span>
            </button>

            {activeMenu === "services" && (
              <div className="pl-3 space-y-2 border-l">
                {mainServices.map((service) => (
                  <div key={service.label}>
                    {service.href ? (
                      <Link href={service.href} className="block text-gray-700">
                        {service.label}
                      </Link>
                    ) : (
                      <p className="text-gray-800 font-medium">{service.label}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* DOING BUSINESS */}
            <button
              onClick={() =>
                setActiveMenu(activeMenu === "india" ? null : "india")
              }
              className="text-left font-semibold border-t pt-3 flex justify-between"
            >
              Doing Business in India
              <span>{activeMenu === "india" ? "−" : "+"}</span>
            </button>

            {activeMenu === "india" && (
              <div className="pl-3 space-y-3 border-l">

                <Link
                  href="/doing-business-in-india/why-india"
                  className="block text-gray-700"
                >
                  Why India
                </Link>

                <Link
                  href="/doing-business-in-india/entry-process"
                  className="block text-gray-700"
                >
                  Entry Process
                </Link>

                {/* INCORPORATION */}
                <div>
                  <button
                    onClick={() =>
                      setActiveSubMenu(
                        activeSubMenu === "incorporation" ? null : "incorporation"
                      )
                    }
                    className="w-full flex justify-between items-center text-left font-medium"
                  >
                    Incorporation
                    <span>{activeSubMenu === "incorporation" ? "−" : "+"}</span>
                  </button>

                  {activeSubMenu === "incorporation" && (
                    <div className="pl-4 mt-2 space-y-2 border-l">

                      <Link
                        href="/doing-business-in-india/pre-incorporation"
                        className="block text-gray-600"
                      >
                        Pre-Incorporation
                      </Link>

                      <Link
                        href="/doing-business-in-india/incorporation"
                        className="block text-gray-600"
                      >
                        Incorporation
                      </Link>

                      <Link
                        href="/doing-business-in-india/post-incorporation"
                        className="block text-gray-600"
                      >
                        Post-Incorporation
                      </Link>

                    </div>
                  )}
                </div>

              </div>
            )}

            {/* OTHER LINKS */}
            <div className="border-t pt-3 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block">
                  {link.label}
                </Link>
              ))}
            </div>

            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>

          </div>
        )}

      </nav>
    </header>
  )
}