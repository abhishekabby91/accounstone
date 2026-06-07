"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-6">

        <div className="flex h-20 items-center justify-between">

          <Link href="/">
            <div>
              <h1 className="text-2xl font-bold text-blue-600">
                808
              </h1>
              <p className="text-xs tracking-widest">
                STRATEGY
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex gap-8">

            <Link href="/about">
              About
            </Link>

            <Link href="/expertise">
              Expertise
            </Link>

            <Link href="/onegd-framework">
              ONEGD
            </Link>

            <Link href="/insights">
              Insights
            </Link>

            <Link href="/podcast">
              Coffee With Dhawan
            </Link>

            <Link href="/resources">
              Resources
            </Link>

            <Link href="/contact">
              Contact
            </Link>

          </nav>

          <Link
            href="/schedule-call"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Schedule A Call
          </Link>

        </div>

      </div>
    </header>
  )
}