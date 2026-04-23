"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const [indiaMenuOpen, setIndiaMenuOpen] = useState(false)
  const [activeIndiaMenu, setActiveIndiaMenu] = useState<string | null>(null)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  /* SCROLL */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* HOVER FIX */
  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIndiaMenuOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIndiaMenuOpen(false)
      setActiveIndiaMenu(null)
    }, 250)
  }

  /* NAV LINKS */
  const navLinks = [
    { label: "Arbitration Services", href: "/arbitration-services" },
    { label: "HR Services", href: "/hr-services" },
    { label: "Global Support", href: "/outsourcing" },
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b ${isScrolled ? "shadow-sm" : ""
        }`}
    >
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
              <div className="text-2xl font-bold text-gold">
                AU Corporate
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#081a42]">
                Growing Together
              </div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">

            {/* DOING BUSINESS */}
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-black">
                Doing Business in India ▾
              </button>

              {indiaMenuOpen && (
                <div className="absolute top-full left-0 flex bg-white border shadow-xl rounded-xl z-50">

                  {/* LEVEL 1 */}
                  <div className="w-[320px] border-r">

                    <Link
                      href="/doing-business-in-india#why-india"
                      className="block px-4 py-3 text-sm hover:bg-gray-100"
                    >
                      Why India
                    </Link>

                    <Link
                      href="/doing-business-in-india#entry"
                      className="block px-4 py-3 text-sm hover:bg-gray-100"
                    >
                      Entry Process & Business Structures
                    </Link>

                    <div
                      onMouseEnter={() => setActiveIndiaMenu("help")}
                      className="flex justify-between items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      <span>How AU Corporate Can Help You</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>

                  </div>

                  {/* LEVEL 2 */}
                  {activeIndiaMenu === "help" && (
                    <div className="w-[260px] border-r">

                      <Link
                        href="/doing-business-in-india/pre-incorporation"
                        className="block px-4 py-3 text-sm hover:bg-gray-100"
                      >
                        Pre-Incorporation
                      </Link>

                      <Link
                        href="/doing-business-in-india/incorporation"
                        className="block px-4 py-3 text-sm hover:bg-gray-100"
                      >
                        Incorporation
                      </Link>

                      <div
                        onMouseEnter={() => setActiveIndiaMenu("post")}
                        className="flex justify-between items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        <span>Post-Incorporation</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>

                    </div>
                  )}

                  {/* LEVEL 3 */}
                  {activeIndiaMenu === "post" && (
                    <div className="w-[240px]">

                      <Link
                        href="/doing-business-in-india/post-incorporation#accounting"
                        className="block px-4 py-3 text-sm hover:bg-gray-100"
                      >
                        Accounting
                      </Link>

                      <Link
                        href="/doing-business-in-india/post-incorporation#taxation"
                        className="block px-4 py-3 text-sm hover:bg-gray-100"
                      >
                        Taxation
                      </Link>

                      <Link
                        href="/doing-business-in-india/post-incorporation#hr"
                        className="block px-4 py-3 text-sm hover:bg-gray-100"
                      >
                        HR
                      </Link>

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
                className="px-4 py-2 text-sm"
              >
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
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>
      </nav>
    </header>
  )
}