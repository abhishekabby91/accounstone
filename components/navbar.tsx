"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/Sidebar"
import { MessageCircle, Linkedin, Mail } from "lucide-react"

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

              {/* ✅ TAGLINE (VISIBLE IN MOBILE ALSO) */}
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#081a42]">
                Growing Together
              </span>
            </div>
          </Link>
          {/* DESKTOP MENU */}
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
                <div className="absolute top-full left-0 w-[520px] bg-white border shadow-xl rounded-xl flex z-50">

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

          {/* MOBILE BUTTON */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-16 w-full bg-white border-t shadow-lg flex flex-col px-5 py-6">

            {/* SERVICES */}
            <div className="mb-4">
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === "services" ? null : "services")
                }
                className="w-full flex justify-between items-center text-base font-semibold py-2"
              >
                Services
                <span>{activeMenu === "services" ? "−" : "+"}</span>
              </button>

              {activeMenu === "services" && (
                <div className="mt-3 ml-3 pl-3 border-l space-y-3 text-sm text-gray-700">

                  {mainServices.map((service) => (
                    <div key={service.label}>

                      {service.href && (
                        <Link href={service.href} className="block py-1">
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
                            className="w-full flex justify-between items-center py-1 font-medium"
                          >
                            {service.label}
                            <span>{activeSubMenu === service.key ? "−" : "+"}</span>
                          </button>

                          {activeSubMenu === service.key && (
                            <div className="mt-2 ml-3 pl-3 border-l space-y-2 text-gray-600">

                              {service.key === "risk" &&
                                riskSubServices.map((item) => (
                                  <Link key={item.label} href={item.href} className="block py-1">
                                    {item.label}
                                  </Link>
                                ))}

                              {service.key === "tax" &&
                                taxSubServices.map((item) => (
                                  <Link key={item.label} href={item.href} className="block py-1">
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
                className="w-full flex justify-between items-center text-base font-semibold py-2"
              >
                Doing Business in India
                <span>{activeMenu === "india" ? "−" : "+"}</span>
              </button>

              {activeMenu === "india" && (
                <div className="mt-3 ml-3 pl-3 border-l space-y-3 text-sm text-gray-700">

                  <Link href="/doing-business-in-india/why-india" className="block py-1">
                    Why India
                  </Link>

                  <Link href="/doing-business-in-india/entry-process" className="block py-1">
                    Entry Process
                  </Link>

                  <div>
                    <button
                      onClick={() =>
                        setActiveSubMenu(
                          activeSubMenu === "incorporation" ? null : "incorporation"
                        )
                      }
                      className="w-full flex justify-between items-center py-1"
                    >
                      Incorporation
                      <span>{activeSubMenu === "incorporation" ? "−" : "+"}</span>
                    </button>

                    {activeSubMenu === "incorporation" && (
                      <div className="mt-2 ml-3 pl-3 border-l space-y-2 text-gray-600">
                        <Link href="/doing-business-in-india/pre-incorporation" className="block py-1">
                          Pre-Incorporation
                        </Link>
                        <Link href="/doing-business-in-india/incorporation" className="block py-1">
                          Incorporation
                        </Link>
                        <Link href="/doing-business-in-india/post-incorporation" className="block py-1">
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
                <Link key={link.label} href={link.href} className="block text-sm">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

          </div>
        )}

      </nav>
      {/* RIGHT FLOATING SIDEBAR */}
<div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[60]">

  {/* WhatsApp */}
  <a
    href="https://wa.me/+91- 09999010513"
    target="_blank"
    className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
  >
    <MessageCircle size={18} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/au-corporate/?viewAsMember=true"
    target="_blank"
    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
  >
    <Linkedin size={18} />
  </a>

  {/* Email */}
  <a
    href="mailto:partner@theaucorp.com"
    className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
  >
    <Mail size={18} />
  </a>

</div>
    </header>
  )
}