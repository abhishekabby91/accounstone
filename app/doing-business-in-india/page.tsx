"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

/* MAIN ACCORDION */
const sections = [
  {
    title: "Why Doing Business in India",
    content: `
India is one of the fastest-growing major economies offering a large consumer base, skilled workforce, and strong policy support.

Key advantages:
• Expanding domestic demand
• Strong digital ecosystem
• Liberal FDI policies
• Cost-efficient operations
• Strategic global positioning
    `,
  },
  {
    title: "Entry Process Overview",
    content: `
1. Business feasibility analysis  
2. Entry structure selection  
3. Regulatory approvals (RBI / FEMA / MCA)  
4. Incorporation & operational setup  
    `,
  },
  {
    title: "Business Structures in India",
    content: `
• Wholly Owned Subsidiary – Full control with limited liability  
• LLP – Flexible structure with reduced compliance  
• Joint Venture – Strategic collaboration with Indian partner  
    `,
  },
]

/* SERVICE STRUCTURE */
const serviceSections = [
  {
    title: "Pre-Incorporation",
    services: [
      "Business feasibility analysis & strategy planning",
      "Market entry strategy development",
      "Competition assessment & market analysis",
      "FDI policy assessment",
      "Tax structure planning",
      "Product diversification strategies",
      "Joint venture & collaboration structuring",
      "Profit optimisation solutions",
      "Industrial parks & zones advisory",
    ],
  },
  {
    title: "Incorporation",
    services: [
      "Company incorporation & legal setup",
      "SEMA compliance implementation",
      "FEMA & FDI compliance management",
      "GST & trade license registration",
      "Accounting system setup",
      "MIS reporting framework setup",
      "Statutory registrations & filings",
      "Initial board & secretarial compliance",
      "Initial audit & regulatory compliance",
      "Expatriate setup & advisory services",
    ],
  },
  {
    title: "Post-Incorporation",
    subSections: [
      {
        title: "Accounting",
        services: [
          "End-to-end accounting and bookkeeping services",
          "MIS reporting for management decision-making",
          "Financial statement preparation as per standards",
          "Monthly payroll processing and compliance",
        ],
      },
      {
        title: "Taxation & Regulatory",
        services: [
          "International taxation advisory and litigation support",
          "Advance Pricing Agreement (APA) advisory",
          "Transfer pricing compliance and documentation",
          "Corporate tax planning and structuring",
          "Income tax litigation and dispute handling",
          "Expat taxation and return filing services",
          "DTAA advisory and cross-border compliance",
          "Direct tax return filing and compliance",
          "FEMA compliance and regulatory advisory",
          "GST compliance and return filing",
          "GST refund and litigation handling",
          "GST advisory and technical opinion",
          "GST audit and annual return filing",
        ],
      },
      {
        title: "Legal & Secretarial",
        services: [
          "Company incorporation and statutory registrations",
          "Corporate secretarial compliance management",
          "SEBI regulatory compliance services",
          "Intellectual property rights (IPR) advisory",
          "Labour law compliance and advisory",
          "Contract drafting and management services",
          "Corporate legal advisory support",
        ],
      },
    ],
  },
]

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [openService, setOpenService] = useState<number | null>(null)
  const [openSub, setOpenSub] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center">

        <Image
          src="https://cdn.corenexis.com/files/c/3298128720.jpg"
          alt="India Business"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-bold text-white">
              Doing Business in India
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              End-to-end support for global businesses entering and expanding in India.
            </p>
          </motion.div>
        </div>

      </section>

      {/* WHY INDIA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-4">

          {sections.map((sec, i) => {
            const isOpen = openIndex === i

            return (
              <div key={sec.title} className="border rounded-xl overflow-hidden">

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between p-5"
                >
                  <span className="font-semibold">{sec.title}</span>
                  <ChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <div className="p-5 whitespace-pre-line text-sm">
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

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            How AU Corporate Helps You
          </h2>

          {serviceSections.map((sec, i) => {
            const isOpen = openService === i

            return (
              <div key={sec.title} className="mb-4 border rounded-xl bg-white">

                <button
                  onClick={() => setOpenService(isOpen ? null : i)}
                  className="w-full flex justify-between p-5 font-semibold"
                >
                  {sec.title}
                  <ChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 space-y-4">

                        {/* NORMAL SERVICES */}
                        {sec.services && (
                          <ul className="space-y-2 text-sm">
                            {sec.services.map((s) => (
                              <li key={s}>• {s}</li>
                            ))}
                          </ul>
                        )}

                        {/* SUB SECTIONS */}
                        {sec.subSections?.map((sub) => {
                          const key = sec.title + sub.title
                          const isSubOpen = openSub === key

                          return (
                            <div key={sub.title} className="border rounded-lg">

                              <button
                                onClick={() => setOpenSub(isSubOpen ? null : key)}
                                className="w-full flex justify-between p-4 bg-gray-50"
                              >
                                {sub.title}
                                <ChevronDown className={`${isSubOpen ? "rotate-180" : ""}`} />
                              </button>

                              <AnimatePresence>
                                {isSubOpen && (
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                  >
                                    <ul className="p-4 space-y-2 text-sm">
                                      {sub.services.map((s) => (
                                        <li key={s}>• {s}</li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                )}
                              </AnimatePresence>

                            </div>
                          )
                        })}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-[#081a42] text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Your India Expansion Journey
        </h2>
        <p className="mb-6 text-white/70">
          We simplify your market entry with complete advisory and compliance support.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
          Talk to Experts
        </button>
      </section>

    </div>
  )
}