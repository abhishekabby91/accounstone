"use client"

import { motion } from "framer-motion"
import { CheckCircle, Building2, Landmark, Globe, TrendingUp } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function EntryProcessPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#081a42] text-white py-28 text-center relative overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-500 via-transparent to-yellow-400 blur-3xl animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <h1 className="text-5xl font-bold">
            Entry Process & Business Structures in India
          </h1>

          <p className="mt-5 text-lg text-white/80 max-w-3xl mx-auto">
            Strategic end-to-end advisory for global businesses entering India —
            covering structuring, regulatory approvals, taxation, compliance and operational setup.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto px-6"
        >
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold">
            A Complete India Entry Framework
          </motion.h2>

          <motion.p variants={fadeUp} custom={2} className="text-gray-600 mt-4">
            AU Corporate assists multinational businesses in designing compliant,
            tax-efficient and scalable entry structures into India.
          </motion.p>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            India Entry Journey
          </motion.h2>

          <div className="relative">

            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 hidden md:block" />

            {[
              { title: "Market Feasibility Study", desc: "Evaluate business potential, competition, and regulatory landscape." },
              { title: "Entry Structure Selection", desc: "Subsidiary, JV, LLP, Branch or Liaison Office." },
              { title: "Regulatory Planning", desc: "FEMA, RBI and FDI compliance mapping." },
              { title: "Entity Incorporation", desc: "MCA registration, PAN, TAN, GST setup." },
              { title: "Capital Setup", desc: "Banking and foreign investment structuring." },
              { title: "Operations Launch", desc: "HR, accounting and internal systems setup." },
              { title: "Ongoing Compliance", desc: "Tax, ROC, FEMA filings and audits." },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex md:items-center mb-14 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
              >

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#081a42] rounded-full border-4 border-white shadow-lg" />

                <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition p-6 md:w-[45%]">

                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-[#081a42] text-white rounded-full text-sm">
                      {i + 1}
                    </span>

                    <h3 className="font-semibold text-lg">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600">
                    {step.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* STRUCTURES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Business Structures in India
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { title: "Wholly Owned Subsidiary", desc: "Full control with limited liability structure." },
              { title: "LLP Structure", desc: "Flexible compliance model." },
              { title: "Joint Venture", desc: "Local partnership for market access." },
              { title: "Branch / Liaison Office", desc: "RBI approved foreign presence." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 border rounded-xl hover:shadow-xl transition"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ===================== NEW EXPANDED SECTION 1 ===================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Detailed Entry Process Explained
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Market & Feasibility Analysis</h3>
              <p className="text-sm text-gray-600">
                Includes sector study, competitor benchmarking, pricing models,
                regulatory restrictions and profitability mapping before entry decision.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Entry Strategy Design</h3>
              <p className="text-sm text-gray-600">
                Structuring based on control, risk exposure, tax efficiency and capital deployment strategy.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Regulatory Clearance Mapping</h3>
              <p className="text-sm text-gray-600">
                FEMA, RBI approvals, sectoral caps and foreign investment compliance assessment.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Post Incorporation Setup</h3>
              <p className="text-sm text-gray-600">
                Banking, accounting systems, payroll, HR onboarding and internal governance setup.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ===================== NEW EXPANDED SECTION 2 ===================== */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Choosing the Right Business Structure
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Subsidiary Model</h3>
              <p className="text-sm text-gray-600">
                Best for full operational control and long-term market expansion in India.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Joint Venture Model</h3>
              <p className="text-sm text-gray-600">
                Suitable for local partnerships and regulatory-sensitive industries.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Branch / Liaison Office</h3>
              <p className="text-sm text-gray-600">
                Ideal for market research, branding presence and limited operations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your India Entry with Experts
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Build a compliant and scalable structure with AU Corporate advisory.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
          Talk to Experts
        </button>
      </section>

    </div>
  )
}