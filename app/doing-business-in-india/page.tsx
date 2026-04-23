"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

/* ================= MAIN DROPDOWN ================= */
const mainSections = [
  {
    title: "Why India",
    content: `
India is one of the fastest-growing major economies offering strong market potential and policy support.

• Large and expanding consumer base  
• Cost-efficient operations  
• Liberal FDI regime  
• Strong digital ecosystem  
• Strategic global location  
    `,
  },
  {
    title: "Entry Process & Business Structures in India",
    content: `
Entry Process:
1. Business feasibility analysis  
2. Structure selection  
3. Regulatory approvals  
4. Incorporation & setup  

Structures:
• Wholly Owned Subsidiary  
• LLP  
• Joint Venture  
• Branch / Liaison / Project Office  
    `,
  },
]

/* ================= SERVICES ================= */
const serviceSections = [
  {
    title: "Pre-Incorporation",
    services: [
      "Business feasibility analysis to evaluate market entry viability",
      "Market entry strategy development aligned with business objectives",
      "Competition assessment and industry benchmarking insights",
      "FDI policy assessment for regulatory route clarity",
      "Tax structure planning for efficient operations",
      "Product diversification strategies for growth expansion",
      "Joint venture and collaboration structuring support",
      "Profit optimisation solutions for sustainable margins",
      "Industrial parks and zones advisory for location strategy",
    ],
  },
  {
    title: "Incorporation",
    services: [
      "Company incorporation and legal entity setup",
      "SEMA compliance implementation for regulatory adherence",
      "FEMA & FDI compliance management for foreign investments",
      "GST and trade license registration support",
      "Accounting system setup for financial tracking",
      "MIS reporting framework setup for management insights",
      "Statutory registrations and government filings",
      "Initial board setup and secretarial compliance",
      "Initial audit and regulatory compliance support",
      "Expatriate setup and advisory services",
    ],
  },
  {
    title: "Post-Incorporation",
    subSections: [
      {
        title: "Accounting",
        services: [
          "End-to-end accounting services ensuring accurate financial records",
          "MIS reporting to support management decision-making",
          "Financial statement preparation as per applicable standards",
          "Monthly payroll management ensuring compliance and accuracy",
        ],
      },
      {
        title: "Taxation & Regulatory",
        services: [
          "International taxation advisory and litigation support",
          "Advance Pricing Agreement (APA) planning and execution",
          "Transfer pricing compliance and documentation",
          "Corporate tax planning and structuring strategies",
          "Income tax litigation handling and advisory",
          "Expat taxation and return filing services",
          "DTAA advisory for cross-border tax efficiency",
          "Direct tax return filing and compliance management",
          "FEMA compliance services for foreign exchange regulations",
          "GST compliance and return filing support",
          "GST refund processing and dispute handling",
          "GST audit and annual return filing",
          "GST litigation and representation support",
          "GST advisory and technical opinions",
        ],
      },
      {
        title: "Legal & Secretarial",
        services: [
          "Company incorporation and statutory registrations",
          "Corporate secretarial compliance management",
          "SEBI compliance services for regulated entities",
          "Intellectual Property Rights (IPR) advisory services",
          "Labour law compliance and advisory support",
          "Contract drafting and management services",
          "Corporate legal advisory for business matters",
        ],
      },
    ],
  },
]

export default function Page() {
  const [openMain, setOpenMain] = useState<number | null>(null)
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
              End-to-end advisory for global businesses entering and expanding in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN DROPDOWN */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-4">

          {mainSections.map((sec, i) => {
            const isOpen = openMain === i

            return (
              <div key={sec.title} className="border rounded-xl">

                <button
                  onClick={() => setOpenMain(isOpen ? null : i)}
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

          {/* HOW AU HELPS */}
          <div className="border rounded-xl">

            <button
              onClick={() => setOpenMain(openMain === 99 ? null : 99)}
              className="w-full flex justify-between p-5 font-semibold"
            >
              How AU Corporate Can Help You
              <ChevronDown className={`${openMain === 99 ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {openMain === 99 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >
                  <div className="p-5 space-y-4">

                    {serviceSections.map((sec, i) => {
                      const isOpen = openService === i

                      return (
                        <div key={sec.title} className="border rounded-lg">

                          <button
                            onClick={() => setOpenService(isOpen ? null : i)}
                            className="w-full flex justify-between p-4 bg-gray-50"
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
                              >
                                <div className="p-4 space-y-3">

                                  {/* SERVICES */}
                                  {sec.services && (
                                    <ul className="text-sm space-y-2">
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
                                      <div key={sub.title} className="border rounded-md">

                                        <button
                                          onClick={() =>
                                            setOpenSub(isSubOpen ? null : key)
                                          }
                                          className="w-full flex justify-between p-3 bg-gray-100"
                                        >
                                          {sub.title}
                                          <ChevronDown className={`${isSubOpen ? "rotate-180" : ""}`} />
                                        </button>

                                        <AnimatePresence>
                                          {isSubOpen && (
                                            <motion.ul
                                              initial={{ height: 0 }}
                                              animate={{ height: "auto" }}
                                              exit={{ height: 0 }}
                                              className="p-3 text-sm space-y-2"
                                            >
                                              {sub.services.map((s) => (
                                                <li key={s}>• {s}</li>
                                              ))}
                                            </motion.ul>
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
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-[#081a42] text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Your India Expansion Journey
        </h2>
        <p className="mb-6 text-white/70">
          Seamless setup, compliance, and advisory for global businesses.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
          Talk to Experts
        </button>
      </section>

    </div>
  )
}