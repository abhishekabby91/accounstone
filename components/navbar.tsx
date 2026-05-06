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

            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-2xl font-bold text-gold">
                AU Corporate
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#081a42]">
                Growing Together
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-3">

            {/* SERVICES (UNCHANGED) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => {
                setTimeout(() => {
                  setActiveMenu(null)
                  setActiveSubMenu(null)
                }, 150)
              }}
            >
              <button
                onClick={() => {
                  setActiveMenu(activeMenu === "services" ? null : "services")
                  setActiveSubMenu(null)
                }}
                className="px-3 py-2 text-sm text-gray-600 hover:text-black"
              >
                Services ▾
              </button>

              <div
                className={`absolute top-full left-0 w-[520px] bg-white border shadow-xl rounded-xl flex z-50 transition-all duration-200 ease-out
                ${activeMenu === "services"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible pointer-events-none"
                }`}
              >
                <div className="w-1/2 border-r py-2">
                  {mainServices.map((service) => (
                    <div
                      key={service.label}
                      onMouseEnter={() => service.key && setActiveSubMenu(service.key)}
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

                <div className="w-1/2 p-4 transition-all duration-200">
                  {activeSubMenu === "risk" &&
                    riskSubServices.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-sm hover:pl-1 transition-all duration-150"
                      >
                        {item.label}
                      </Link>
                    ))}

                  {activeSubMenu === "tax" &&
                    taxSubServices.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-sm hover:pl-1 transition-all duration-150"
                      >
                        {item.label}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* INDIA DROPDOWN — FIXED */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("india")}
              onMouseLeave={() => {
                setTimeout(() => {
                  setActiveMenu(null)
                  setActiveSubMenu(null)
                }, 150)
              }}
            >
              <button
                onClick={() => {
                  setActiveMenu(activeMenu === "india" ? null : "india")
                  setActiveSubMenu(null)
                }}
                className="px-3 py-2 text-sm text-gray-600 hover:text-black"
              >
                Doing Business in India ▾
              </button>

              <div
                className={`absolute top-full left-0 w-[260px] bg-white border shadow-xl rounded-xl z-50 transition-all duration-200 ease-out
                ${activeMenu === "india"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible pointer-events-none"
                }`}
              >
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

        {/* MOBILE MENU (UNCHANGED) */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-16 w-full bg-white border-t shadow-lg flex flex-col px-5 py-6">
            {/* unchanged */}
          </div>
        )}

      </nav>
    </header>
  )
}