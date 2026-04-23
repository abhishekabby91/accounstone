"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight } from "lucide-react"

/* MAIN SECTIONS */
const mainSections = [
  {
    title: "Why India",
    content: `
India is one of the fastest-growing economies offering a large consumer base, skilled workforce, and strong policy reforms.

• Expanding domestic demand  
• Liberal FDI policies  
• Digital ecosystem growth  
• Cost-efficient operations  
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

Business Structures:
• Wholly Owned Subsidiary  
• LLP  
• Joint Venture  
• Branch / Liaison Office  
    `,
  },
]

/* SERVICES */
const services = [
  {
    title: "Pre-Incorporation",
    items: [
      "Business feasibility analysis & strategy planning – Evaluate market viability and define entry roadmap.",
      "Market entry strategy development – Build structured go-to-market strategies.",
      "Competition assessment & market analysis – Identify competitors and positioning.",
      "FDI policy assessment – Ensure sectoral compliance with FDI regulations.",
      "Tax structure planning – Optimize tax efficiency and structuring.",
      "Product diversification strategies – Expand offerings based on market demand.",
      "Joint venture structuring – Develop partnership frameworks.",
      "Profit optimisation solutions – Improve margins and cost structures.",
      "Industrial parks & zones advisory – Identify optimal locations and incentives.",
    ],
  },
  {
    title: "Incorporation",
    items: [
      "Company incorporation & legal setup – Establish legal entity in India.",
      "SEMA compliance – Ensure compliance with applicable regulations.",
      "FEMA & FDI compliance – Manage foreign investment regulations.",
      "GST & trade license registration – Complete indirect tax registrations.",
      "Accounting system setup – Implement financial systems and processes.",
      "MIS reporting framework – Develop reporting structure for management.",
      "Statutory registrations – Complete all required legal registrations.",
      "Initial board & secretarial compliance – Setup governance structure.",
      "Initial audit compliance – Ensure regulatory audit readiness.",
      "Expatriate solutions – Support foreign employees setup and compliance.",
    ],
  },
  {
    title: "Post-Incorporation",
    sub: [
      {
        title: "Accounting",
        items: [
          "Accounting services – Maintain accurate books and records.",
          "MIS reporting – Provide insights for decision-making.",
          "Financial statements – Prepare compliant financial reports.",
          "Payroll management – Manage salaries and statutory compliance.",
        ],
      },
      {
        title: "Taxation",
        items: [
          "International taxation – Advisory on cross-border transactions.",
          "Transfer pricing – Ensure compliance with TP regulations.",
          "Corporate tax – Strategic tax planning and compliance.",
          "GST compliance – Filing and regulatory adherence.",
          "GST litigation – Handling disputes and notices.",
          "DTAA advisory – Optimize cross-border tax efficiency.",
          "FEMA compliance – Manage foreign exchange regulations.",
        ],
      },
      {
        title: "Legal",
        items: [
          "Corporate secretarial services – Maintain statutory records.",
          "SEBI compliance – Regulatory compliance for listed entities.",
          "IPR services – Protect intellectual property.",
          "Labour law compliance – Ensure HR regulatory compliance.",
          "Contract management – Draft and review agreements.",
          "Corporate legal advisory – Ongoing legal support.",
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
      <section className="relative min-h-[60vh] flex items-center">
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
              End-to-end support for global businesses entering India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DROPDOWN SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-4">

          {/* WHY INDIA + ENTRY */}
          {mainSections.map((sec, i) => {
            const isOpen = openMain === i

            return (
              <div key={sec.title} className="border rounded-xl">

                <button
                  onClick={() => setOpenMain(isOpen ? null : i)}
                  className="w-full flex justify-between p-5 font-semibold"
                >
                  <span>▼ {sec.title}</span>
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
                      <div className="p-5 text-sm whitespace-pre-line">
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
              <span>▼ How AU Corporate Can Help You</span>
              <ChevronDown className={`${openMain === 99 ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {openMain === 99 && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }}>
                  <div className="p-5 space-y-3">

                    {services.map((sec, i) => {
                      const isOpen = openService === i

                      return (
                        <div key={sec.title} className="border rounded-lg">

                          {/* LEVEL 2 */}
                          <button
                            onClick={() =>
                              setOpenService(isOpen ? null : i)
                            }
                            className="w-full flex justify-between p-4 bg-gray-50"
                          >
                            <span>→ {sec.title}</span>
                            <ChevronRight className={`${isOpen ? "rotate-90" : ""}`} />
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                              >
                                <div className="p-4 space-y-3">

                                  {/* NORMAL LIST */}
                                  {sec.items && (
                                    <ul className="space-y-2 text-sm">
                                      {sec.items.map((item) => (
                                        <li key={item}>• {item}</li>
                                      ))}
                                    </ul>
                                  )}

                                  {/* SUB LEVEL */}
                                  {sec.sub?.map((sub) => {
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
                                          <span className="ml-2">→ {sub.title}</span>
                                          <ChevronRight className={`${isSubOpen ? "rotate-90" : ""}`} />
                                        </button>

                                        <AnimatePresence>
                                          {isSubOpen && (
                                            <motion.ul
                                              initial={{ height: 0 }}
                                              animate={{ height: "auto" }}
                                              exit={{ height: 0 }}
                                              className="p-3 text-sm space-y-2"
                                            >
                                              {sub.items.map((item) => (
                                                <li key={item}>• {item}</li>
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
          Seamless setup, compliance & advisory for global businesses.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
          Talk to Experts
        </button>
      </section>

    </div>
  )
}