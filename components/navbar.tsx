"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const [servicesOpen, setServicesOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const [indiaMenuOpen, setIndiaMenuOpen] = useState(false)
  const [indiaSubMenu, setIndiaSubMenu] = useState<string | null>(null)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* FIXED HOVER HANDLING */
  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIndiaMenuOpen(true)
  }

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setIndiaMenuOpen(false)
      setIndiaSubMenu(null)
    }, 250)
  }

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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b ${isScrolled ? "shadow-sm" : ""}`}>
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
            <div>
              <div className="text-2xl font-bold text-gold">AU Corporate</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#081a42]">
                Growing Together
              </div>
            </div>
          </Link>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => {
              setServicesOpen(false)
              setActiveMenu(null)
            }}
          >
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-black">
              Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-[650px] bg-white border shadow-xl rounded-xl flex z-50">

                <div className="w-1/2 border-r py-2">
                  {mainServices.map((service) => (
                    <div
                      key={service.label}
                      onMouseEnter={() => setActiveMenu(service.key || null)}
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
                  {activeMenu === "risk" &&
                    riskSubServices.map((item) => (
                      <Link key={item.label} href={item.href} className="block py-2 text-sm">
                        {item.label}
                      </Link>
                    ))}

                  {activeMenu === "tax" &&
                    taxSubServices.map((item) => (
                      <Link key={item.label} href={item.href} className="block py-2 text-sm">
                        {item.label}
                      </Link>
                    ))}
                </div>

              </div>
            )}
          </div>
          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">

            {/* DOING BUSINESS */}
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-black">
                Doing Business in India ▾
              </button>

              {indiaMenuOpen && (
                <div className="absolute top-full left-0 w-[320px] bg-white border shadow-xl rounded-xl z-50">

                  <Link
                    href="/doing-business-in-india/why-india"
                    className="block px-4 py-3 text-sm hover:bg-gray-100"
                  >
                    Why India
                  </Link>

                  {/* ✅ FIXED ROUTE */}
                  <Link
                    href="/doing-business-in-india/entry-process"
                    className="block px-4 py-3 text-sm hover:bg-gray-100"
                  >
                    Entry Process & Business Structures
                  </Link>

                  <div
                    onMouseEnter={() => setIndiaSubMenu("help")}
                    className="flex justify-between items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    <span>How AU Corporate Can Help You</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>

                  {indiaSubMenu === "help" && (
                    <div className="absolute top-0 left-full w-[260px] bg-white border shadow-xl rounded-xl">

                      <Link href="/doing-business-in-india/pre-incorporation" className="block px-4 py-3 text-sm hover:bg-gray-100">
                        Pre-Incorporation
                      </Link>

                      <Link href="/doing-business-in-india/incorporation" className="block px-4 py-3 text-sm hover:bg-gray-100">
                        Incorporation
                      </Link>

                      <Link href="/doing-business-in-india/post-incorporation" className="block px-4 py-3 text-sm hover:bg-gray-100">
                        Post-Incorporation
                      </Link>

                    </div>
                  )}
                </div>
              )}
            </div>


            {/* OTHER LINKS */}
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="px-4 py-2 text-sm">
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
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>
      </nav>
    </header>
  )
}