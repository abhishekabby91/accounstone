"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function RiskManagementPage() {
  const ermRef = useRef<HTMLDivElement>(null)
  const forensicRef = useRef<HTMLDivElement>(null)
  const auditRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const sections = [
    {
      title: "Risk Management Services",
      ref: ermRef,
      items: [
        {
          title: "Enterprise Risk Management (ERM)",
          desc: "Identifying, assessing, and mitigating enterprise-wide risks aligned with business strategy.",
        },
        {
          title: "Internal Control Framework",
          desc: "Designing and implementing robust internal control systems for operational efficiency.",
        },
        {
          title: "Risk Assessment & Gap Analysis",
          desc: "Evaluating risk exposure and identifying gaps in controls and compliance.",
        },
        {
          title: "Process Improvement & SOP Design",
          desc: "Optimizing business processes with structured SOPs to enhance efficiency and control.",
        },
      ],
    },

    {
      title: "Forensic Services",
      ref: forensicRef,
      items: [
        {
          title: "Fraud Investigation",
          desc: "In-depth investigation into suspected fraud and financial misconduct.",
        },
        {
          title: "Forensic Audit",
          desc: "Audit procedures to uncover irregularities and financial discrepancies.",
        },
        {
          title: "Litigation Support",
          desc: "Expert reporting and support for legal disputes and proceedings.",
        },
        {
          title: "Data Analytics & Fraud Detection",
          desc: "Using analytics to identify anomalies and fraud risks.",
        },
      ],
    },

    {
      title: "Special Audit & Review",
      ref: auditRef,
      items: [
        {
          title: "Internal Audit",
          desc: "Independent evaluation of internal processes and governance.",
        },
        {
          title: "Compliance Audit",
          desc: "Ensuring adherence to statutory and regulatory requirements.",
        },
        {
          title: "Operational Audit",
          desc: "Assessing efficiency and effectiveness of business operations.",
        },
        {
          title: "Due Diligence Review",
          desc: "Comprehensive review for investments, mergers, and acquisitions.",
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
          Risk Management Services
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-3xl mb-10"
        >
          We help organizations identify, assess, and mitigate risks through structured frameworks, forensic insights, and audit-driven assurance.
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

        {/* OPTIONAL HERO IMAGE (like Tax page feel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Risk Management"
            width={1200}
            height={500}
            className="w-full h-[300px] object-cover"
          />
        </motion.div>

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