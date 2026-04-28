"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // ✅ MAIN + SUB MENU STATE
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

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-3">

            {/* SERVICES */}
            <div className="relative">
              <button
                onClick={() => {
                  setActiveMenu(activeMenu === "services" ? null : "services")
                  setActiveSubMenu(null)
                }}
                className="px-3 py-2 text-sm text-gray-600 hover:text-black"
              >
                Services ▾
              </button>

              {activeMenu === "services" && (
                <div
                  className="absolute top-full left-0 w-[520px] bg-white border shadow-xl rounded-xl flex z-50"
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  <div className="w-1/2 border-r py-2">
                    {mainServices.map((service) => (
                      <div
                        key={service.label}
                        onMouseEnter={() =>
                          service.key && setActiveSubMenu(service.key)
                        }
                        className="flex justify-between px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        {service.href ? (
                          <Link href={service.href}>{service.label}</Link>
                        ) : (
                          <span>{service.label}</span>
                        )}
                        {service.key && <ChevronRight className="w-4 h-4" />}
                      </div>
                    ))}
                  </div>

                  <div className="w-1/2 p-4">
                    {activeSubMenu === "risk" &&
                      riskSubServices.map((item) => (
                        <Link key={item.label} href={item.href} className="block py-2 text-sm">
                          {item.label}
                        </Link>
                      ))}

                    {activeSubMenu === "tax" &&
                      taxSubServices.map((item) => (
                        <Link key={item.label} href={item.href} className="block py-2 text-sm">
                          {item.label}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* INDIA */}
            <div className="relative">
              <button
                onClick={() => {
                  setActiveMenu(activeMenu === "india" ? null : "india")
                  setActiveSubMenu(null)
                }}
                className="px-3 py-2 text-sm text-gray-600 hover:text-black"
              >
                Doing Business in India ▾
              </button>

              {activeMenu === "india" && (
                <div className="absolute top-full left-0 w-[260px] bg-white border shadow-xl rounded-xl z-50">

                  <Link href="/doing-business-in-india/why-india" className="block px-4 py-3 hover:bg-gray-100">
                    Why India
                  </Link>

                  <Link href="/doing-business-in-india/entry-process" className="block px-4 py-3 hover:bg-gray-100">
                    Entry Process
                  </Link>

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

          {/* MOBILE */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-16 w-full bg-white border-t shadow-lg flex flex-col p-4 space-y-3">

            <Link href="/services">Services</Link>

            <div className="border-b pb-3">
              <p className="font-semibold mb-2">Doing Business in India</p>
              <Link href="/doing-business-in-india/why-india">Why India</Link>
              <Link href="/doing-business-in-india/entry-process">Entry Process</Link>
              <Link href="/doing-business-in-india/pre-incorporation">Pre-Incorporation</Link>
              <Link href="/doing-business-in-india/incorporation">Incorporation</Link>
              <Link href="/doing-business-in-india/post-incorporation">Post-Incorporation</Link>
            </div>

            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
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