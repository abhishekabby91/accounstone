"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Linkedin,
  Mail,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // DESKTOP
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)

  // MOBILE
  const [mobileMenu, setMobileMenu] = useState<string | null>(null)
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null)

  const navLinks = [
    { label: "Arbitration Services", href: "/arbitration-services" },
    { label: "HR Services", href: "/hr-services" },
    { label: "Global Support", href: "/outsourcing" },
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
  ]

  const mainServices = [
    { label: "Risk Management Services", key: "risk" },
    {
      label: "Accounting & Assurance",
      href: "/services/accounting-assurance",
    },
    { label: "Taxation & Regulatory Services", key: "tax" },
    {
      label: "Transaction Advisory Services",
      href: "/services/transaction-advisory",
    },
  ]

  const riskSubServices = [
    {
      label: "Risk Management",
      href: "/services/risk-management",
    },
    {
      label: "Forensic Services",
      href: "/services/risk-management",
    },
    {
      label: "Special Audit / Review",
      href: "/services/risk-management",
    },
  ]

  const taxSubServices = [
    {
      label: "Direct Taxation",
      href: "/services/taxation-regulatory",
    },
    {
      label: "Goods & Service Tax",
      href: "/services/taxation-regulatory",
    },
    {
      label: "Regulatory Services",
      href: "/services/taxation-regulatory",
    },
    {
      label: "Secretarial & Legal",
      href: "/services/taxation-regulatory",
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TOP BAR */}
        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://user8396.na.imgto.link/public/20260417/au.avif"
              alt="AU Corporate Logo"
              width={38}
              height={38}
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
            <div
              className="relative"
              onMouseLeave={() => {
                setActiveMenu(null)
                setActiveSubMenu(null)
              }}
            >
              <button
                onMouseEnter={() => {
                  setActiveMenu("services")
                  setActiveSubMenu(null)
                }}
                className="px-3 py-2 text-sm text-gray-700 hover:text-black flex items-center gap-1 transition"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeMenu === "services" && (
                <div className="absolute top-full left-0 mt-2 w-[560px] bg-white border shadow-2xl rounded-2xl flex overflow-hidden z-50">

                  {/* LEFT */}
                  <div className="w-1/2 bg-gray-50 border-r py-2">

                    {mainServices.map((service) => (
                      <div
                        key={service.label}
                        onMouseEnter={() =>
                          service.key && setActiveSubMenu(service.key)
                        }
                        className="group flex justify-between items-center px-5 py-3 text-sm hover:bg-white transition cursor-pointer"
                      >
                        {service.href ? (
                          <Link
                            href={service.href}
                            className="w-full flex items-center justify-between"
                          >
                            <span>{service.label}</span>
                          </Link>
                        ) : (
                          <>
                            <span>{service.label}</span>

                            <ChevronRight className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition" />
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className="w-1/2 p-5 bg-white min-h-[240px]">

                    {!activeSubMenu && (
                      <div className="text-sm text-gray-400">
                        Select a category
                      </div>
                    )}

                    {activeSubMenu === "risk" && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-[#081a42]">
                          Risk Management Services
                        </h3>

                        {riskSubServices.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block text-sm text-gray-700 hover:text-black hover:translate-x-1 transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}

                    {activeSubMenu === "tax" && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-[#081a42]">
                          Taxation & Regulatory Services
                        </h3>

                        {taxSubServices.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block text-sm text-gray-700 hover:text-black hover:translate-x-1 transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              )}
            </div>

            {/* DOING BUSINESS */}
            <div
              className="relative"
              onMouseLeave={() => {
                setActiveMenu(null)
                setActiveSubMenu(null)
              }}
            >
              <button
                onMouseEnter={() => {
                  setActiveMenu("india")
                  setActiveSubMenu(null)
                }}
                className="px-3 py-2 text-sm text-gray-700 hover:text-black flex items-center gap-1 transition"
              >
                Doing Business in India
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeMenu === "india" && (
                <div className="absolute top-full left-0 mt-2 flex z-50">

                  {/* LEFT PANEL */}
                  <div className="w-[290px] bg-white border shadow-2xl rounded-l-2xl overflow-hidden">

                    <div className="py-2">

                      <Link
                        href="/doing-business-in-india/why-india"
                        className="block px-5 py-3 text-sm hover:bg-gray-50 transition"
                      >
                        Why India
                      </Link>

                      <Link
                        href="/doing-business-in-india/entry-process"
                        className="block px-5 py-3 text-sm hover:bg-gray-50 transition"
                      >
                        Entry Process
                      </Link>

                      {/* INCORPORATION */}
                      <div
                        onMouseEnter={() =>
                          setActiveSubMenu("incorporation")
                        }
                        className="group flex justify-between items-center px-5 py-3 text-sm hover:bg-gray-50 cursor-pointer transition"
                      >
                        <span>Incorporation</span>

                        <ChevronRight className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition" />
                      </div>

                    </div>
                  </div>

                  {/* RIGHT PANEL */}
                  {activeSubMenu === "incorporation" && (
                    <div
                      className="w-[280px] bg-white border-y border-r shadow-2xl rounded-r-2xl overflow-hidden"
                      onMouseEnter={() =>
                        setActiveSubMenu("incorporation")
                      }
                    >
                      <div className="px-5 py-4 border-b bg-gray-50">
                        <h3 className="text-sm font-semibold text-[#081a42]">
                          Incorporation Services
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                          End-to-end India business setup assistance
                        </p>
                      </div>

                      <div className="py-2">

                        <Link
                          href="/doing-business-in-india/pre-incorporation"
                          className="block px-5 py-3 text-sm hover:bg-gray-50 transition"
                        >
                          Pre-Incorporation
                        </Link>

                        <Link
                          href="/doing-business-in-india/incorporation"
                          className="block px-5 py-3 text-sm hover:bg-gray-50 transition"
                        >
                          Incorporation
                        </Link>

                        <Link
                          href="/doing-business-in-india/post-incorporation"
                          className="block px-5 py-3 text-sm hover:bg-gray-50 transition"
                        >
                          Post-Incorporation
                        </Link>

                      </div>
                    </div>
                  )}

                </div>
              )}
            </div>

            {/* OTHER LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-700 hover:text-black transition"
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-16 w-full bg-white border-t shadow-lg px-5 py-6">

            {/* SERVICES */}
            <div className="mb-4">

              <button
                onClick={() =>
                  setMobileMenu(
                    mobileMenu === "services"
                      ? null
                      : "services"
                  )
                }
                className="w-full flex justify-between items-center text-base font-semibold py-2"
              >
                Services

                <span>
                  {mobileMenu === "services" ? "−" : "+"}
                </span>
              </button>

              {mobileMenu === "services" && (
                <div className="mt-3 ml-3 pl-3 border-l space-y-3 text-sm text-gray-700">

                  {mainServices.map((service) => (
                    <div key={service.label}>

                      {service.href && (
                        <Link
                          href={service.href}
                          className="block py-1"
                        >
                          {service.label}
                        </Link>
                      )}

                      {service.key && (
                        <>
                          <button
                            onClick={() =>
                              setMobileSubMenu(
                                mobileSubMenu === service.key
                                  ? null
                                  : service.key
                              )
                            }
                            className="w-full flex justify-between items-center py-1"
                          >
                            {service.label}

                            <span>
                              {mobileSubMenu === service.key
                                ? "−"
                                : "+"}
                            </span>
                          </button>

                          {mobileSubMenu === service.key && (
                            <div className="mt-2 ml-3 pl-3 border-l space-y-2">

                              {service.key === "risk" &&
                                riskSubServices.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block py-1"
                                  >
                                    {item.label}
                                  </Link>
                                ))}

                              {service.key === "tax" &&
                                taxSubServices.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block py-1"
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
                  setMobileMenu(
                    mobileMenu === "india"
                      ? null
                      : "india"
                  )
                }
                className="w-full flex justify-between items-center text-base font-semibold py-2"
              >
                Doing Business in India

                <span>
                  {mobileMenu === "india" ? "−" : "+"}
                </span>
              </button>

              {mobileMenu === "india" && (
                <div className="mt-3 ml-3 pl-3 border-l space-y-3 text-sm text-gray-700">

                  <Link
                    href="/doing-business-in-india/why-india"
                    className="block py-1"
                  >
                    Why India
                  </Link>

                  <Link
                    href="/doing-business-in-india/entry-process"
                    className="block py-1"
                  >
                    Entry Process
                  </Link>

                  {/* INCORPORATION */}
                  <div>

                    <button
                      onClick={() =>
                        setMobileSubMenu(
                          mobileSubMenu === "incorporation"
                            ? null
                            : "incorporation"
                        )
                      }
                      className="w-full flex justify-between items-center py-1"
                    >
                      Incorporation

                      <span>
                        {mobileSubMenu === "incorporation"
                          ? "−"
                          : "+"}
                      </span>
                    </button>

                    {mobileSubMenu === "incorporation" && (
                      <div className="mt-2 ml-3 pl-3 border-l space-y-2">

                        <Link
                          href="/doing-business-in-india/pre-incorporation"
                          className="block py-1"
                        >
                          Pre-Incorporation
                        </Link>

                        <Link
                          href="/doing-business-in-india/incorporation"
                          className="block py-1"
                        >
                          Incorporation
                        </Link>

                        <Link
                          href="/doing-business-in-india/post-incorporation"
                          className="block py-1"
                        >
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
                  className="block text-sm"
                >
                  {link.label}
                </Link>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-6">

              <Button asChild className="w-full">
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>

            </div>

          </div>
        )}

      </nav>

      {/* FLOATING SIDEBAR */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[60]">

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919999010513"
          target="_blank"
          className="relative group bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping"></span>

          <MessageCircle size={18} className="relative z-10" />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/company/au-corporate/?viewAsMember=true"
          target="_blank"
          className="relative group bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-40 animate-ping"></span>

          <Linkedin size={18} className="relative z-10" />
        </a>

        {/* EMAIL */}
        <a
          href="mailto:partner@theaucorp.com"
          className="relative group bg-red-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-red-400 opacity-40 animate-ping"></span>

          <Mail size={18} className="relative z-10" />
        </a>

      </div>
    </header>
  )
}