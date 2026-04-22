"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [activeGroup, setActiveGroup] = useState<string | null>("risk")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Why India", href: "/why-india" },
    { label: "Arbitration Services", href: "/arbitration-services" },
    { label: "HR Services", href: "/hr-services" },
    { label: "Global Support", href: "/outsourcing" },
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
  ]

  // LEVEL 2
  const serviceGroups = [
    { label: "Risk Management", key: "risk", href: "/services/risk-management" },
    { label: "Accounting & Assurance", key: "accounting", href: "/services/accounting-assurance" },
    { label: "Taxation & Regulatory", key: "tax", href: "/services/taxation-regulatory" },
    { label: "Transaction Advisory Services", key: "transaction", href: "/services/transaction-advisory-services" },
  ]

  // LEVEL 3 - FULL RISK MANAGEMENT STRUCTURE
  const keyServices: Record<string, string[]> = {
    risk: [
      "Internal Audit",
      "Internal Audit Transformation",
      "Enterprise Risk Management",
      "Risk and Control Registers",
      "Process Designing and Documentation",
      "SOX/JSOX Reviews - Design and Testing",
      "IFC/ICFR - Design and Testing",

      "Forensic Services",
      "Fraud Risk Assessments & Investigations",
      "Enforcement Agencies Assistance - CBI, SFIO",
      "Forensic Audit Under RBI Guidelines",
      "Transaction Audit Under IBC 2016",
      "Digital Forensic",
      "Anti Bribery and Corruption",
      "Assets Tracing",
      "AML and KYC Review",

      "Special Audit / Review",
      "Project Audit",
      "Concurrent Audit / Pre-Audit",
      "Fixed Asset Management and Verification",
      "Inventory Control and Stock Audit Service",
      "Agency for Specialized Monitoring (ASM) Mechanism",
    ],
  }

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\//g, "-")
      .replace(/\s+/g, "-")

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

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-gold">AU Corporate</span>
              <span className="text-[10px] text-[#081a42] tracking-[0.25em] uppercase">
                Growing Together
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black">
                Services ▾
              </button>

              {servicesOpen && (
                <div className="absolute top-10 left-0 w-[720px] bg-white border shadow-xl rounded-xl z-50 flex">

                  {/* LEVEL 2 */}
                  <div className="w-1/3 border-r py-2">
                    {serviceGroups.map((group) => (
                      <div
                        key={group.key}
                        onMouseEnter={() => setActiveGroup(group.key)}
                        className="flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        <Link href={group.href}>{group.label}</Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>

                  {/* LEVEL 3 */}
                  <div className="w-2/3 p-4 max-h-[500px] overflow-y-auto">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                      Key Services - Risk Management
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {keyServices["risk"].map((item) => (
                        <Link
                          key={item}
                          href={`/services/${slugify(item)}`}
                          className="text-sm text-gray-600 hover:text-black hover:bg-gray-100 px-2 py-1 rounded"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* OTHER LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-600 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild className="bg-yellow-400 text-black font-semibold">
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