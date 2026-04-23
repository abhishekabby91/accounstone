"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

/* ---------------- SERVICES ---------------- */

const preServices = [
  "Business feasibility analysis & strategy planning",
  "Market entry strategy",
  "Competition & industry analysis",
  "FDI policy assessment",
  "Tax structure planning",
  "Joint venture structuring",
  "Profit optimisation",
  "Industrial park advisory",
]

const incorporationServices = [
  "Company incorporation",
  "FEMA & FDI compliance",
  "GST & trade license",
  "Accounting system setup",
  "MIS reporting framework",
  "Board setup & secretarial compliance",
  "Initial audit compliance",
  "Expatriate solutions",
]

const postServices = [
  "Accounting & bookkeeping",
  "MIS reporting",
  "Financial statements",
  "Payroll management",
  "Corporate tax advisory",
  "Transfer pricing",
  "GST compliance & litigation",
  "FEMA compliance",
  "Corporate secretarial services",
  "Labour law & HR compliance",
]

export default function Page() {

  const preRef = useRef<HTMLDivElement>(null)
  const incRef = useRef<HTMLDivElement>(null)
  const postRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="https://cdn.corenexis.com/files/c/3298128720.jpg"
          alt="India"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold">Doing Business in India</h1>
          <p className="mt-4 text-lg text-white/80">
            Structured approach for market entry, setup & compliance.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <div className="sticky top-20 z-40 bg-white border-b">
        <div className="max-w-6xl mx-auto flex gap-6 px-6 py-4 text-sm font-medium">

          <button onClick={() => scrollTo(preRef)}>Pre-Incorporation</button>
          <button onClick={() => scrollTo(incRef)}>Incorporation</button>
          <button onClick={() => scrollTo(postRef)}>Post-Incorporation</button>

        </div>
      </div>

      {/* PRE */}
      <section ref={preRef} className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#081a42]">
          Pre-Incorporation Support
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {preServices.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-lg"
            >
              <p className="text-sm text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INCORPORATION */}
      <section ref={incRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8 text-[#081a42]">
            Incorporation
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {incorporationServices.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-lg"
              >
                <p className="text-sm text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* POST */}
      <section ref={postRef} className="py-20 max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8 text-[#081a42]">
          Post-Incorporation
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {postServices.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-lg"
            >
              <p className="text-sm text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  )
}