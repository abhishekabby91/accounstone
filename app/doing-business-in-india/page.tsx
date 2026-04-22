"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

/* MAIN ACCORDION SECTIONS */
const sections = [
  {
    title: "Doing Business in India",
    content: `
India is one of the most attractive global investment destinations due to its large consumer base, skilled workforce, and evolving regulatory framework.

Foreign investors can enter India through structured routes depending on business model, sector, and investment strategy.

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

AU Corporate ensures seamless execution at every stage.
    `,
  },
  {
    title: "Branch, Liaison & Project Office",
    content: `
Branch Office:
• Revenue-generating presence in India
• Export/import and consultancy activities

Liaison Office:
• Non-commercial coordination only
• Market research and communication

Project Office:
• Set up for specific project execution
• Valid for project duration only
    `,
  },
  {
    title: "Business Structures in India",
    content: `
Wholly Owned Subsidiary:
• 100% foreign ownership
• Separate legal entity in India

LLP:
• Flexible structure with lower compliance
• Ideal for service businesses

Joint Venture:
• Strategic partnership with Indian entity
• Used in regulated sectors
    `,
  },
]

/* AU HELP STRUCTURE */
const helpSections = [
  {
    title: "Pre-Incorporation Support",
    services: [
      "Business structure advisory (BO / LO / WOS / LLP)",
      "Regulatory feasibility analysis",
      "Entry strategy planning",
      "Name selection & approval guidance",
    ],
  },
  {
    title: "Incorporation",
    services: [
      "Company / LLP registration with MCA",
      "RBI / FEMA approvals (where applicable)",
      "Documentation & compliance drafting",
      "Government filing & liaison",
    ],
  },
  {
    title: "Post-Incorporation",
    services: [
      "Tax registrations (PAN, TAN, GST)",
      "Accounting & compliance setup",
      "Payroll & HR advisory support",
      "Ongoing regulatory compliance management",
    ],
  },
]

export default function WhyIndiaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
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
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Why India – Strategic Business Entry
            </h1>

            <p className="mt-4 text-white/80 text-lg">
              India offers structured entry routes, regulatory clarity, and long-term growth opportunities for global enterprises.
            </p>
          </motion.div>

        </div>
      </section>

      {/* MAIN ACCORDION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-4">

          {sections.map((sec, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={sec.title}
                className="border rounded-xl overflow-hidden shadow-sm"
              >

                {/* HEADER */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-[#081a42]">
                    {sec.title}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <div className="p-5 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                        {sec.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )
          })}

        </div>
      </section>

      {/* HOW AU CORPORATE HELPS (3-PHASE STRUCTURE) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12 text-[#081a42]">
            How AU Corporate Helps You
          </h2>

          <div className="space-y-6">

            {helpSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border rounded-xl bg-white shadow-sm overflow-hidden"
              >

                {/* TITLE */}
                <div className="p-5 font-semibold text-[#081a42] border-b">
                  {section.title}
                </div>

                {/* SERVICES */}
                <div className="p-5">
                  <ul className="space-y-3">
                    {section.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-yellow-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
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
            AU Corporate provides end-to-end advisory for seamless business setup, compliance, and operations in India.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium">
            Talk to Experts
          </button>

        </div>

      </section>

    </div>
  )
}