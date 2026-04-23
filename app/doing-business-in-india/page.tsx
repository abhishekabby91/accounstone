"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

/* ---------------- SERVICES ---------------- */

const preServices = [
  "Business feasibility analysis & strategy planning",
  "Market entry strategy",
  "Competition assessment & market analysis",
  "FDI policy assessment",
  "Tax structure planning",
  "Product diversification strategies",
  "Joint venture & collaboration structuring",
  "Profit optimisation solutions",
  "Industrial parks & zones advisory",
]

const incorporationServices = [
  "Company incorporation",
  "FEMA & FDI compliance",
  "GST & trade license registration",
  "Accounting system setup",
  "MIS reporting framework",
  "Statutory registrations",
  "Initial board setup & secretarial compliance",
  "Initial audit compliance",
  "Expatriate solutions",
]

const postServices = [
  "Accounting & bookkeeping",
  "MIS reporting & financial insights",
  "Financial statement preparation",
  "Payroll & HR compliance",
  "Corporate tax advisory",
  "Transfer pricing services",
  "GST compliance & litigation",
  "FEMA compliance",
  "Corporate secretarial services",
  "Labour law & legal compliance",
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

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[65vh] flex items-center">
        <Image
          src="https://cdn.corenexis.com/files/c/3298128720.jpg"
          alt="India Business"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold">
            Doing Business in India
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            India offers a compelling mix of scale, talent, and regulatory evolution,
            making it a preferred destination for global expansion.
          </p>
        </div>
      </section>

      {/* ---------------- WHY INDIA ---------------- */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-[#081a42]">
          Why Do Business in India?
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          India is one of the fastest-growing major economies globally, supported by strong domestic demand,
          a growing middle class, and continuous government reforms. It offers significant opportunities across
          manufacturing, technology, services, and infrastructure sectors.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          With over 1.4 billion people, India provides access to one of the largest consumer markets in the world.
          Combined with a highly skilled workforce and rapidly expanding digital ecosystem, it enables businesses
          to scale efficiently.
        </p>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Large and growing consumer market</li>
          <li>• Strong talent pool across industries</li>
          <li>• Liberal FDI policies</li>
          <li>• Digital and infrastructure growth</li>
          <li>• Strategic export and manufacturing hub</li>
        </ul>
      </section>

      {/* ---------------- HOW AU HELPS ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12 text-[#081a42]">
            How AU Corporate Helps You
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 bg-white border rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Pre-Incorporation</h3>
              <p className="text-sm text-gray-600">
                Strategic planning, feasibility analysis, and structuring advisory for smooth market entry.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Incorporation</h3>
              <p className="text-sm text-gray-600">
                End-to-end company setup, regulatory approvals, and compliance implementation.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Post-Incorporation</h3>
              <p className="text-sm text-gray-600">
                Ongoing accounting, taxation, compliance, and operational support services.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- NAVIGATION ---------------- */}
      <div className="sticky top-20 bg-white border-b z-40">
        <div className="max-w-6xl mx-auto flex gap-6 px-6 py-4 text-sm font-medium">

          <button onClick={() => scrollTo(preRef)}>Pre-Incorporation</button>
          <button onClick={() => scrollTo(incRef)}>Incorporation</button>
          <button onClick={() => scrollTo(postRef)}>Post-Incorporation</button>

        </div>
      </div>

      {/* ---------------- PRE ---------------- */}
      <section ref={preRef} className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#081a42]">
          Pre-Incorporation Support
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {preServices.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              className="p-5 border rounded-xl shadow-sm hover:shadow-lg"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- INC ---------------- */}
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
                {item}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- POST ---------------- */}
      <section ref={postRef} className="py-20 max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8 text-[#081a42]">
          Post-Incorporation
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {postServices.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              className="p-5 border rounded-xl shadow-sm hover:shadow-lg"
            >
              {item}
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  )
}