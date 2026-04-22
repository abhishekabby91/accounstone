"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

/* MAIN SECTIONS */
const sections = [
  {
    title: "Why India?",
    content: `
India is one of the most attractive global investment destinations due to its large consumer base, skilled workforce, and evolving regulatory framework.

Key considerations include:
• Entry structure selection
• Regulatory approvals (RBI / FEMA / MCA)
• Tax and compliance planning
• Operational feasibility
    `,
  },
  {
    title: "Entry Process Overview",
    content: `
1. Business evaluation
2. Structure selection
3. Regulatory approvals
4. Incorporation and setup
    `,
  },
  {
    title: "Business Structures in India",
    content: `
Wholly Owned Subsidiary – 100% foreign ownership

LLP – Flexible low compliance structure

Joint Venture – Strategic Indian partnership
    `,
  },
]

/* AU HELP STRUCTURE (UPDATED) */
const helpSections = [
  {
    title: "Pre-Incorporation Support",
    services: [
      "Business feasibility analysis & strategic planning",
      "Market entry strategy development",
      "Competition assessment & industry benchmarking",
      "FDI policy assessment",
      "Tax structure planning",
      "Product diversification strategies",
      "Joint venture & collaboration structuring",
      "Profit optimisation solutions",
      "Industrial parks & zones development advisory",
    ],
  },
  {
    title: "Incorporation",
    services: [
      "Company / LLP registration with MCA",
      "RBI / FEMA approvals (where applicable)",
      "Documentation preparation & filing",
      "Government liaison & compliance setup",
    ],
  },
  {
    title: "Post-Incorporation",
    services: [
      "PAN, TAN & GST registrations",
      "Accounting & bookkeeping setup",
      "Payroll & HR compliance support",
      "Ongoing regulatory compliance management",
    ],
  },
]

export default function WhyIndiaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center">

        <Image
          src="https://cdn.corenexis.com/files/c/3298128720.jpg"
          alt="India Business"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Doing Business in India
            </h1>

            <p className="mt-4 text-white/80 text-lg">
              Structured entry routes, regulatory clarity & scalable growth opportunities.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ACCORDION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-4">

          {sections.map((sec, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={sec.title}
                className="border rounded-2xl overflow-hidden shadow-sm"
              >

                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center p-5 hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-[#081a42]">
                    {sec.title}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden bg-gray-50"
                >
                  <div className="p-5 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                    {sec.content}
                  </div>
                </motion.div>

              </div>
            )
          })}

        </div>
      </section>

      {/* HOW AU HELPS */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12 text-[#081a42]">
            How AU Corporate Helps You
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {helpSections.map((sec) => (
              <div
                key={sec.title}
                className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >

                <h3 className="font-semibold mb-4 text-[#081a42]">
                  {sec.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-700">
                  {sec.services.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-yellow-500">•</span>
                      {s}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#081a42] text-white text-center">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-4">
            Start Your India Expansion Journey
          </h2>

          <p className="text-white/70 mb-6">
            End-to-end advisory for seamless market entry, structuring & compliance.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium">
            Talk to Experts
          </button>

        </div>

      </section>

    </div>
  )
}