"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function Page() {
  const riskRef = useRef<HTMLDivElement>(null)
  const forensicRef = useRef<HTMLDivElement>(null)
  const auditRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    {
      title: "Risk Management",
      ref: riskRef,
      items: [
        {
          title: "Internal Audit",
          desc: "Independent evaluation of internal controls, processes, and risk management systems.",
        },
        {
          title: "Internal Audit Transformation",
          desc: "Modernizing internal audit functions using technology and risk-based approaches.",
        },
        {
          title: "Enterprise Risk Management",
          desc: "Identifying and managing enterprise-wide risks aligned with strategic objectives.",
        },
        {
          title: "Risk and Control Registers",
          desc: "Designing structured risk registers with mapped controls for effective monitoring.",
        },
        {
          title: "Process Designing and Documentation",
          desc: "Developing standardized processes with detailed documentation for operational efficiency.",
        },
        {
          title: "IFC/ICFR – Design and Testing",
          desc: "Evaluating internal financial controls for compliance and reliability in financial reporting.",
        },
      ],
    },
    {
      title: "Forensic Services",
      ref: forensicRef,
      items: [
        {
          title: "Fraud Risk Assessments & Investigations",
          desc: "Identifying fraud risks and conducting detailed investigations to detect irregularities.",
        },
        {
          title: "Enforcement Agencies Assistance – CBI, SFIO",
          desc: "Supporting organizations in matters involving regulatory and enforcement authorities.",
        },
        {
          title: "Forensic Audit Under RBI Guidelines",
          desc: "Conducting forensic audits as per RBI norms to identify financial discrepancies.",
        },
        {
          title: "Transaction Audit Under IBC 2016",
          desc: "Reviewing transactions to detect preferential, undervalued, or fraudulent dealings.",
        },
        {
          title: "Digital Forensic",
          desc: "Analyzing digital data to uncover evidence of financial or operational misconduct.",
        },
        {
          title: "Anti-Bribery and Corruption",
          desc: "Assessing and strengthening frameworks to prevent bribery and corruption risks.",
        },
        {
          title: "Assets Tracing",
          desc: "Identifying and tracking assets in cases of fraud, disputes, or recovery proceedings.",
        },
        {
          title: "AML and KYC Review",
          desc: "Evaluating compliance with anti-money laundering and customer due diligence norms.",
        },
      ],
    },
    {
      title: "Special Audit / Review",
      ref: auditRef,
      items: [
        {
          title: "Project Audit",
          desc: "Reviewing project execution, costs, and controls to ensure efficiency and compliance.",
        },
        {
          title: "Concurrent Audit / Pre-Audit",
          desc: "Real-time audit checks to ensure transactions comply with policies and regulations.",
        },
        {
          title: "Fixed Asset Management and Verification",
          desc: "Physical verification and control assessment of fixed assets for accuracy and safeguarding.",
        },
        {
          title: "Inventory Control and Stock Audit Service",
          desc: "Evaluating inventory systems and conducting stock audits to ensure accuracy and control.",
        },
        {
          title: "Agency for Specialized Monitoring (ASM)",
          desc: "Providing monitoring services under ASM frameworks to ensure regulatory compliance.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#081a42] mb-6"
        >
          Risk Management
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-3xl mb-10"
        >
          We provide comprehensive risk management services to help organizations
          identify, assess, and mitigate risks while strengthening internal
          controls and enhancing governance frameworks.
        </motion.p>

        {/* NAV BUTTONS */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {sections.map((sec) => (
            <button
              key={sec.title}
              onClick={() => scrollTo(sec.ref)}
              className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
            >
              {sec.title}
            </button>
          ))}
        </div>

        {/* SECTIONS */}
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            ref={section.ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-semibold mb-8 text-[#081a42]">
              {section.title}
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <h3 className="font-semibold text-lg mb-3 text-[#081a42] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  )
}