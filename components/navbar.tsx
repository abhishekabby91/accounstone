"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)

  /* 🔒 Prevent background scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

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
    <header className="fixed top-0 left-0 right-0 z-[60] bg-white border-b">
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

          {/* DESKTOP MENU (UNCHANGED) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* unchanged desktop code */}
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

        {/* ================= MOBILE MENU (FIXED) ================= */}
        {isOpen && (
          <div className="lg:hidden fixed left-0 top-16 w-full bg-white border-t shadow-lg flex flex-col px-5 py-6 max-h-[85vh] overflow-y-auto z-[55]">

            {/* SERVICES */}
            <div className="mb-4">
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === "services" ? null : "services")
                }
                className="w-full flex justify-between items-center text-base font-semibold py-3"
              >
                Services
                <span>{activeMenu === "services" ? "−" : "+"}</span>
              </button>

              {activeMenu === "services" && (
                <div className="mt-3 ml-3 pl-3 border-l space-y-2 text-sm text-gray-700">

                  {mainServices.map((service) => (
                    <div key={service.label} className="py-2">

                      {service.href && (
                        <Link
                          href={service.href}
                          className="block py-2 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.label}
                        </Link>
                      )}

                      {service.key && (
                        <>
                          <button
                            onClick={() =>
                              setActiveSubMenu(
                                activeSubMenu === service.key ? null : service.key
                              )
                            }
                            className="w-full flex justify-between items-center py-2 font-medium"
                          >
                            {service.label}
                            <span>{activeSubMenu === service.key ? "−" : "+"}</span>
                          </button>

                          {activeSubMenu === service.key && (
                            <div className="mt-2 ml-3 pl-3 border-l space-y-2 text-gray-600">

                              {service.key === "risk" &&
                                riskSubServices.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block py-2 text-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                ))}

                              {service.key === "tax" &&
                                taxSubServices.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block py-2 text-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                ))}

                            </div>
                          )}
                        </>
                      )}

                    </div>
                  ))}

                </div>
              )}
            </div>

            {/* INDIA */}
            <div className="mb-4 border-t pt-4">
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === "india" ? null : "india")
                }
                className="w-full flex justify-between items-center text-base font-semibold py-3"
              >
                Doing Business in India
                <span>{activeMenu === "india" ? "−" : "+"}</span>
              </button>

              {activeMenu === "india" && (
                <div className="mt-3 ml-3 pl-3 border-l space-y-2 text-sm text-gray-700">

                  <Link href="/doing-business-in-india/why-india" className="block py-2" onClick={() => setIsOpen(false)}>
                    Why India
                  </Link>

                  <Link href="/doing-business-in-india/entry-process" className="block py-2" onClick={() => setIsOpen(false)}>
                    Entry Process
                  </Link>

                  <div className="pt-2">
                    <button
                      onClick={() =>
                        setActiveSubMenu(
                          activeSubMenu === "incorporation" ? null : "incorporation"
                        )
                      }
                      className="w-full flex justify-between items-center py-2"
                    >
                      Incorporation
                      <span>{activeSubMenu === "incorporation" ? "−" : "+"}</span>
                    </button>

                    {activeSubMenu === "incorporation" && (
                      <div className="mt-2 ml-3 pl-3 border-l space-y-2 text-gray-600">

                        <Link href="/doing-business-in-india/pre-incorporation" className="block py-2" onClick={() => setIsOpen(false)}>
                          Pre-Incorporation
                        </Link>

                        <Link href="/doing-business-in-india/incorporation" className="block py-2" onClick={() => setIsOpen(false)}>
                          Incorporation
                        </Link>

                        <Link href="/doing-business-in-india/post-incorporation" className="block py-2" onClick={() => setIsOpen(false)}>
                          Post-Incorporation
                        </Link>

                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

            {/* OTHER LINKS */}
            <div className="border-t pt-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>

          </div>
        )}

      </nav>
    </header>
  )
}