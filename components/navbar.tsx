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

        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-max">
            <Image
              src="https://user8396.na.imgto.link/public/20260417/au.avif"
              alt="AU Corporate Logo"
              width={36}
              height={36}
              className="sm:w-10 sm:h-10"
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
          <div className="hidden lg:flex items-center gap-2">

            {/* SERVICES */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-gray-600 hover:text-black">
                Services ▾
              </button>

              <div className="absolute top-full left-0 w-[520px] bg-white border shadow-xl rounded-xl hidden group-hover:flex z-50">

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
            </div>

            {/* INDIA */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-gray-600 hover:text-black">
                Doing Business in India ▾
              </button>

              <div className="absolute top-full left-0 w-[300px] bg-white border shadow-xl rounded-xl hidden group-hover:block z-50">

                <Link href="/doing-business-in-india/why-india" className="block px-4 py-3 text-sm hover:bg-gray-100">
                  Why India
                </Link>

                <Link href="/doing-business-in-india/entry-process" className="block px-4 py-3 text-sm hover:bg-gray-100">
                  Entry Process
                </Link>

                <Link href="/doing-business-in-india/incorporation" className="block px-4 py-3 text-sm hover:bg-gray-100">
                  Incorporation Support
                </Link>

              </div>
            </div>

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
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-16 w-full bg-white border-t shadow-lg flex flex-col p-4 space-y-3">

            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/outsourcing" onClick={() => setIsOpen(false)}>Global Support</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/career" onClick={() => setIsOpen(false)}>Career</Link>
            <Link href="/arbitration-services" onClick={() => setIsOpen(false)}>Arbitration</Link>
            <Link href="/hr-services" onClick={() => setIsOpen(false)}>HR Services</Link>

            <div className="pt-2 border-t">
              <Link href="/contact" className="block">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>

          </div>
        )}

      </nav>
    </header>
  )
}