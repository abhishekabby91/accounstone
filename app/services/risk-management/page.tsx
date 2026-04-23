"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

/* ---------------- MAIN SECTIONS ---------------- */
const sections = [
  {
    title: "Doing Business in India",
    content: `
India is one of the fastest-growing global economies offering scale, talent, and long-term investment opportunities.

Key advantages:
• Large consumer market
• Skilled workforce
• Strong digital ecosystem
• Pro-FDI reforms
• Expanding infrastructure base
    `,
  },
  {
    title: "Entry Process Overview",
    content: `
1. Business feasibility analysis  
2. Entry structure selection  
3. Regulatory approvals (RBI / FEMA / MCA)  
4. Incorporation & setup  
5. Operational launch & compliance framework
    `,
  },
  {
    title: "Business Structures in India",
    content: `
Wholly Owned Subsidiary – 100% foreign ownership  
LLP – Flexible low compliance structure  
Joint Venture – Strategic Indian partnership  
Branch / Liaison / Project Office – Limited presence model
    `,
  },
]

/* ---------------- HELP STRUCTURE ---------------- */
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
      "Company incorporation",
      "SEBI compliance",
      "FEMA & FDI compliance",
      "GST & trade license registration",
      "Accounting system setup",
      "MIS reporting framework",
      "GST & statutory registrations",
      "Initial board setup & secretarial compliance",
      "Initial audit compliance",
      "Expatriate solutions",
    ],
  },

  {
    title: "Post Incorporation",
    subSections: [
      {
        title: "Accounting",
        items: [
          "Accounting Services – end-to-end accounting support ensuring accurate financial records and compliance",
          "MIS Reporting for Management – insights for strategic decision-making",
          "Financial Statement Preparation – compliant financial reporting",
          "Monthly Payroll Management – payroll processing & statutory compliance",
        ],
      },

      {
        title: "Taxation",
        items: [
          "International Taxation Litigation & Advisory",
          "Advance Pricing Agreement (APA)",
          "Transfer Pricing Services",
          "Corporate Tax advisory",
          "Income Tax Litigation handling",
          "Expat Taxation & Return Filing",
          "DTAA Advisory & Compliance",
          "Direct Tax Return & Compliance",
          "GST Compliance",
          "GST Refund",
          "GST Annual Return & Audit",
          "GST Litigation",
          "GST Advisory & Opinions",
          "GST APA support",
          "FEMA Compliance Services",
        ],
      },

      {
        title: "HR, Legal & Secretarial",
        items: [
          "Corporate Secretarial Services",
          "Company Incorporation & Statutory Registrations",
          "SEBI Compliance Services",
          "IPR Services",
          "Labour Law Compliance",
          "Contract Management Services",
          "Corporate Legal Advisory Services",
          "SEMA / FEMA / FDI Compliance support",
          "GST & Trade License support",
          "Initial Board Setup & Secretarial Compliance",
          "Initial Audit Compliance",
          "Expatriate Solutions",
        ],
      },
    ],
  },
]

export default function WhyIndiaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [openPost, setOpenPost] = useState<string | null>(null)

  const toggleMain = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  const togglePost = (title: string) => {
    setOpenPost(openPost === title ? null : title)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-[70vh] flex items-center">

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

            <p className="mt-4 text-white/80 text-lg max-w-2xl">
              Structured entry routes, regulatory framework, incorporation process & full lifecycle compliance support.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ---------------- MAIN ACCORDION ---------------- */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-4">

          {sections.map((sec, i) => {
            const isOpen = openIndex === i

            return (
              <div key={sec.title} className="border rounded-2xl overflow-hidden">

                <button
                  onClick={() => toggleMain(i)}
                  className="w-full flex justify-between items-center p-5 hover:bg-gray-50"
                >
                  <span className="font-semibold text-[#081a42]">
                    {sec.title}
                  </span>

                  <ChevronDown
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <div className="p-5 text-sm text-gray-700 whitespace-pre-line">
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

      {/* ---------------- AU HELP ---------------- */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12 text-[#081a42]">
            How AU Corporate Helps You
          </h2>

          <div className="space-y-6">

            {helpSections.map((sec) => {

              const isPost = sec.subSections

              return (
                <div
                  key={sec.title}
                  className="bg-white border rounded-xl shadow-sm"
                >

                  <button
                    onClick={() => togglePost(sec.title)}
                    className="w-full flex justify-between items-center p-5 font-semibold text-[#081a42]"
                  >
                    {sec.title}
                    <ChevronDown
                      className={`transition-transform ${openPost === sec.title ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openPost === sec.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 space-y-6">

                          {!isPost &&
                            sec.services.map((s) => (
                              <div key={s} className="text-sm flex gap-2">
                                <span className="text-yellow-500">•</span>
                                {s}
                              </div>
                            ))}

                          {isPost &&
                            sec.subSections!.map((sub) => (
                              <div key={sub.title}>
                                <h4 className="font-semibold mb-2 text-[#081a42]">
                                  {sub.title}
                                </h4>

                                <ul className="space-y-2 text-sm text-gray-700">
                                  {sub.items.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="text-yellow-500">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-20 bg-[#081a42] text-white text-center">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-4">
            Start Your India Expansion Journey
          </h2>

          <p className="text-white/70 mb-6">
            End-to-end advisory for incorporation, compliance & taxation in India.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
            Talk to Experts
          </button>

        </div>

      </section>

    </div>
  )
}