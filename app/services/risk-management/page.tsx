"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

/* SERVICE STRUCTURE */
const services = [
  {
    title: "Risk Management Services",
    items: [
      {
        name: "Enterprise Risk Management (ERM)",
        desc: "Identifying, assessing, and mitigating enterprise-wide risks aligned with business strategy.",
      },
      {
        name: "Internal Control Framework",
        desc: "Designing and implementing robust internal control systems for operational efficiency.",
      },
      {
        name: "Risk Assessment & Gap Analysis",
        desc: "Evaluating risk exposure and identifying gaps in controls and compliance.",
      },
      {
        name: "Process Improvement & SOP Design",
        desc: "Optimizing business processes with structured SOPs to enhance efficiency and control.",
      },
    ],
  },
  {
    title: "Forensic Services",
    items: [
      {
        name: "Fraud Investigation",
        desc: "Conducting in-depth forensic investigations into suspected fraud and financial misconduct.",
      },
      {
        name: "Forensic Audit",
        desc: "Detailed audit procedures to uncover irregularities and financial discrepancies.",
      },
      {
        name: "Litigation Support",
        desc: "Providing expert reports and support for legal proceedings and dispute resolution.",
      },
      {
        name: "Data Analytics & Fraud Detection",
        desc: "Leveraging analytics tools to identify patterns, anomalies, and fraud risks.",
      },
    ],
  },
  {
    title: "Special Audit & Review",
    items: [
      {
        name: "Internal Audit",
        desc: "Independent evaluation of internal processes, controls, and governance.",
      },
      {
        name: "Compliance Audit",
        desc: "Ensuring adherence to regulatory and statutory requirements.",
      },
      {
        name: "Operational Audit",
        desc: "Assessing operational efficiency and effectiveness across business functions.",
      },
      {
        name: "Due Diligence Review",
        desc: "Comprehensive financial and operational review for investment or acquisition decisions.",
      },
    ],
  },
]

/* ✅ PAGE ANIMATION (KEY FIX - SAME AS TAX PAGE STYLE) */
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
}

const childVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function RiskManagementPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="hidden"
      animate="show"
      variants={pageVariants}
    >

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
          alt="Risk Management"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div variants={childVariant}>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Risk Management Services
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-2xl">
              Strengthening governance, mitigating risks, and enhancing operational efficiency through structured risk frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-6">

          {services.map((section, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div key={section.title} variants={childVariant} className="border rounded-xl shadow-sm">

                {/* HEADER */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50"
                >
                  <span className="font-semibold text-[#081a42]">
                    {section.title}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                      <div className="p-6 grid md:grid-cols-2 gap-6">

                        {section.items.map((item) => (
                          <div
                            key={item.name}
                            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                          >
                            <h4 className="font-semibold text-[#081a42] mb-2">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {item.desc}
                            </p>
                          </div>
                        ))}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#081a42] text-white text-center">
        <motion.div variants={childVariant}>
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">
              Strengthen Your Risk Framework
            </h2>
            <p className="text-white/70 mb-6">
              AU Corporate helps you build resilient systems and proactive risk strategies.
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium">
              Talk to Experts
            </button>
          </div>
        </motion.div>
      </section>

    </motion.div>
  )
}