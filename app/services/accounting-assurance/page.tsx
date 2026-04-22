"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function Page() {
  const mainRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const section = {
    title: "Accounting & Assurance",
    ref: mainRef,
    items: [
      {
        title: "Accounting Services",
        desc: "Providing end-to-end accounting support to ensure accurate financial records and compliance.",
      },
      {
        title: "MIS Reporting for Management",
        desc: "Delivering insightful management reports to support strategic planning and decision-making.",
      },
      {
        title: "Financial Statement Preparation",
        desc: "Preparing reliable and compliant financial statements in accordance with applicable standards.",
      },
      {
        title: "IFRS & IND-AS Implementation",
        desc: "Assisting in seamless transition and compliance with international and Indian accounting standards.",
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
          Accounting & Assurance
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-3xl mb-10"
        >
          We provide reliable accounting and assurance services to enhance
          financial transparency, strengthen governance, and support informed
          decision-making.
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

          {/* GRID */}
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