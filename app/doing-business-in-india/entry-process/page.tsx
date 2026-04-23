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

        {/* soft animated glow */}
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

      {/* TIMELINE SECTION */}
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

            {/* center line */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 hidden md:block" />

            {[
              { title: "Market Feasibility Study", desc: "Evaluate business potential, competition, and regulatory landscape in India." },
              { title: "Entry Structure Selection", desc: "Choose optimal structure — Subsidiary, JV, LLP, Branch or Liaison Office." },
              { title: "Regulatory Planning", desc: "Analyze FEMA, RBI, FDI policy and sectoral compliance requirements." },
              { title: "Entity Incorporation", desc: "Company registration with MCA along with PAN, TAN, GST setup." },
              { title: "Capital & Banking Setup", desc: "Foreign investment structuring and banking account establishment." },
              { title: "Operational Launch", desc: "Office setup, HR onboarding, accounting systems and internal controls." },
              { title: "Ongoing Compliance", desc: "Tax filings, ROC compliance, FEMA reporting and audits." },
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

                {/* DOT */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#081a42] rounded-full border-4 border-white shadow-lg" />

                {/* CARD */}
                <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition p-6 md:w-[45%] group">

                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-[#081a42] text-white rounded-full text-sm">
                      {i + 1}
                    </span>

                    <h3 className="font-semibold text-lg group-hover:text-[#081a42] transition">
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

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Business Structures in India
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { title: "Wholly Owned Subsidiary", desc: "Full control with limited liability structure." },
              { title: "LLP Structure", desc: "Flexible, low compliance business model." },
              { title: "Joint Venture", desc: "Strategic Indian partnership for market access." },
              { title: "Branch / Liaison Office", desc: "RBI-approved foreign presence model." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-white border rounded-xl hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="bg-[#081a42] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              AU Corporate Advisory Advantage
            </h2>

            <p className="text-white/80 mb-6">
              We provide structured advisory solutions for seamless India entry and long-term compliance success.
            </p>

            <ul className="space-y-3 text-white/80 text-sm">
              <li>• End-to-end India entry advisory</li>
              <li>• Regulatory & FEMA compliance support</li>
              <li>• Tax-efficient structuring</li>
              <li>• Incorporation & approvals support</li>
              <li>• Ongoing compliance management</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Start Your India Entry with Experts
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Build a compliant, scalable and tax-efficient business structure in India with AU Corporate.
          </p>

          <button className="bg-[#081a42] text-white px-6 py-3 rounded-lg hover:scale-105 transition">
            Talk to Experts
          </button>
        </motion.div>
      </section>

    </div>
  )
}