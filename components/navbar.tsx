"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

const expertiseItems = [
  {
    title: "CPA Firm Growth",
    href: "/expertise/firm-growth",
  },
  {
    title: "Global Delivery",
    href: "/expertise/global-delivery",
  },
  {
    title: "Operational Excellence",
    href: "/expertise/operational-excellence",
  },
  {
    title: "India Expansion",
    href: "/expertise/india-expansion",
  },
]

const onegdItems = [
  {
    title: "ONEGD Framework",
    href: "/onegd",
  },
  {
    title: "Talent",
    href: "/onegd/talent",
  },
  {
    title: "Operations",
    href: "/onegd/operations",
  },
  {
    title: "Technology",
    href: "/onegd/technology",
  },
  {
    title: "Governance",
    href: "/onegd/governance",
  },
]

const insightItems = [
  {
    title: "Articles",
    href: "/insights/articles",
  },
  {
    title: "Case Studies",
    href: "/insights/case-studies",
  },
  {
    title: "Reports",
    href: "/insights/reports",
  },
]

const podcastItems = [
  {
    title: "Podcast Home",
    href: "/podcast",
  },
  {
    title: "Episodes",
    href: "/podcast/episodes",
  },
  {
    title: "Resources",
    href: "/podcast/resources",
  },
]

function Dropdown({
  label,
  items,
}: {
  label: string
  items: { title: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600 transition">
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-full left-0 mt-3 w-72 rounded-2xl border bg-white shadow-xl p-3"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-3 hover:bg-slate-50"
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex h-20 items-center justify-between">

          <Link href="/" className="group">

            <div>

              <h1 className="text-3xl font-bold text-blue-600 group-hover:text-orange-500 transition">
                808
              </h1>

              <p className="text-[11px] tracking-[0.35em] text-slate-700">
                STRATEGY
              </p>

            </div>

          </Link>

          <nav className="hidden lg:flex items-center gap-8">

            <Link
              href="/"
              className="font-medium hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Dropdown
              label="Expertise"
              items={expertiseItems}
            />

            <Dropdown
              label="ONEGD"
              items={onegdItems}
            />

            <Dropdown
              label="Insights"
              items={insightItems}
            />

            <Dropdown
              label="Coffee With Dhawan"
              items={podcastItems}
            />

            <Link
              href="/about"
              className="font-medium hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="font-medium hover:text-blue-600"
            >
              Contact
            </Link>

          </nav>

          <div className="hidden lg:block">
            <Link
              href="/schedule-call"
              className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition"
            >
              Schedule Strategy Call
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>

        </div>

      </div>

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-white"
          >

            <div className="px-6 py-6 space-y-4">

              <Link href="/" className="block">
                Home
              </Link>

              <Link href="/expertise" className="block">
                Expertise
              </Link>

              <Link href="/onegd" className="block">
                ONEGD
              </Link>

              <Link href="/insights" className="block">
                Insights
              </Link>

              <Link href="/podcast" className="block">
                Coffee With Dhawan
              </Link>

              <Link href="/about" className="block">
                About
              </Link>

              <Link href="/contact" className="block">
                Contact
              </Link>

              <Link
                href="/schedule-call"
                className="block text-center rounded-xl bg-blue-600 text-white px-6 py-3"
              >
                Schedule Strategy Call
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  )
}