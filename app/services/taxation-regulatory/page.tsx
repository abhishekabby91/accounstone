"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function Page() {
  const directRef = useRef<HTMLDivElement>(null)
  const gstRef = useRef<HTMLDivElement>(null)
  const regRef = useRef<HTMLDivElement>(null)
  const legalRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const sections = [
    {
      title: "Direct Taxation",
      ref: directRef,
      items: [
        {
          title: "International Taxation Litigation & Advisory",
          desc: "Providing advisory and litigation support on cross-border taxation matters.",
        },
        {
          title: "Advance Pricing Agreement (APA)",
          desc: "Assisting in APA planning and execution to ensure transfer pricing certainty.",
        },
        {
          title: "Transfer Pricing Services",
          desc: "Ensuring compliance with transfer pricing regulations and documentation requirements.",
        },
        {
          title: "Corporate Tax",
          desc: "Advising on corporate tax planning, structuring, and compliance strategies.",
        },
        {
          title: "Income Tax Litigation Handling & Advisory",
          desc: "Managing tax disputes and providing strategic litigation support.",
        },
        {
          title: "Expat Taxation & Return Filing",
          desc: "Managing tax compliance and filings for expatriates working in India.",
        },
        {
          title: "DTAA Advisory & Compliance",
          desc: "Advising on Double Taxation Avoidance Agreements for cross-border tax efficiency.",
        },
        {
          title: "Direct Tax Return & Compliance",
          desc: "Ensuring accurate filing and compliance of all direct tax obligations.",
        },
      ],
    },

    {
      title: "Goods & Service Tax (GST)",
      ref: gstRef,
      items: [
        {
          title: "GST Registration",
          desc: "Assisting businesses with seamless GST registration processes.",
        },
        {
          title: "GST Compliance",
          desc: "Ensuring timely filing and compliance with GST laws and regulations.",
        },
        {
          title: "GST Refund",
          desc: "Managing refund claims and resolving GST demands effectively.",
        },
        {
          title: "GST E-Invoice and E-Way Bill",
          desc: "Implementing and managing e-invoicing and e-way bill systems.",
        },
        {
          title: "GST Health Check-Up",
          desc: "Reviewing GST compliance to identify risks and improvement areas.",
        },
        {
          title: "GST Annual Return and GST Audit",
          desc: "Preparing and filing GST returns and conducting audits for compliance.",
        },

        // ✅ NEW ADDITIONS
        {
          title: "GST Litigation",
          desc: "Handling GST disputes, assessments, and appeal proceedings before authorities.",
        },
        {
          title: "GST Advisory & Opinion",
          desc: "Providing expert advisory and legal opinions on complex GST matters.",
        },
        {
          title: "GST APA (Advance Pricing Arrangement)",
          desc: "Assisting in GST-related pricing arrangements for tax certainty and dispute avoidance.",
        },
      ],
    },

    {
      title: "Regulatory Services",
      ref: regRef,
      items: [
        {
          title: "FEMA Compliance Services",
          desc: "Ensuring compliance with foreign exchange regulations under FEMA.",
        },
        {
          title: "FCRA Registration",
          desc: "Assisting NGOs and entities with FCRA registration and compliance.",
        },
        {
          title: "Trade License Registration",
          desc: "Facilitating trade license approvals for business operations.",
        },
        {
          title: "FSSAI Registration",
          desc: "Obtaining food safety licenses for businesses in the food sector.",
        },
        {
          title: "MSME Registration",
          desc: "Registering businesses under MSME to avail government benefits.",
        },
        {
          title: "Import-Export Code (IEC) Registration",
          desc: "Assisting in obtaining IEC for international trade operations.",
        },
      ],
    },

    {
      title: "Secretarial & Legal",
      ref: legalRef,
      items: [
        {
          title: "Company Incorporation & Statutory Registrations",
          desc: "Providing end-to-end company incorporation and regulatory registrations.",
        },
        {
          title: "Corporate Secretarial Services",
          desc: "Managing compliance with corporate laws and secretarial requirements.",
        },
        {
          title: "SEBI Compliance Services",
          desc: "Ensuring compliance with SEBI regulations for listed entities.",
        },
        {
          title: "Intellectual Property Rights (IPR) Services",
          desc: "Protecting intellectual property through registration and advisory services.",
        },
        {
          title: "Labour Law Services",
          desc: "Ensuring compliance with labour laws and employment regulations.",
        },
        {
          title: "Contract Management Services",
          desc: "Drafting, reviewing, and managing business contracts effectively.",
        },
        {
          title: "Corporate Legal Advisory Services",
          desc: "Providing legal advisory for corporate and business matters.",
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
          Taxation & Regulatory Services
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-3xl mb-10"
        >
          We provide end-to-end taxation and regulatory advisory services to help businesses stay compliant, optimize tax structures, and navigate complex legal frameworks efficiently.
        </motion.p>

        {/* CLICK NAV */}
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