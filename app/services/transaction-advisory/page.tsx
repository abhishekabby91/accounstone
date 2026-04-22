"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function Page() {
  const mainRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const section = {
    title: "Transaction Advisory Services",
    ref: mainRef,
    items: [
      {
        title: "Due Diligence Services",
        desc: "Conducting comprehensive due diligence to assess financial, legal, and operational risks.",
      },
      {
        title: "Merger & Acquisition Advisory",
        desc: "Providing strategic advisory for mergers, acquisitions, and business restructuring.",
      },
      {
        title: "Business and Asset Valuations",
        desc: "Delivering accurate valuation of businesses and assets for informed decision-making.",
      },
      {
        title: "Debts & Equity Financing Solutions",
        desc: "Structuring optimal debt and equity financing solutions to support growth.",
      },
      {
        title: "Seed and Venture Capital (VC) Funding",
        desc: "Advising startups and businesses on fundraising from seed and venture capital investors.",
      },
      {
        title: "Strategic Corporate Restructuring",
        desc: "Designing restructuring strategies to improve efficiency and financial performance.",
      },
      {
        title: "IPO Listing & Consulting - SME",
        desc: "Assisting businesses in SME IPO listing with end-to-end advisory support.",
      },
      {
        title: "IPO Listing & Consulting - Main Board",
        desc: "Providing complete advisory for main board IPO listing and capital market readiness.",
      },
    ],
  }

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#081a42] mb-6"
        >
          Transaction Advisory Services
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-3xl mb-10"
        >
          Our transaction advisory services support businesses through complex financial decisions including mergers, fundraising, restructuring, and capital market transactions.
        </motion.p>

        {/* CLICK NAV */}
        <div className="flex gap-4 mb-12 flex-wrap">
          <button
            onClick={() => scrollTo(mainRef)}
            className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            Our Services
          </button>
        </div>

        {/* SECTION */}
        <motion.div
          ref={mainRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold mb-8 text-[#081a42]">
            Our Services
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

      </div>
    </div>
  )
}