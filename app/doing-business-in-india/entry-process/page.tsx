"use client"

import { motion } from "framer-motion"
import {
  CheckCircle,
  Building2,
  Landmark,
  FileText,
  Banknote,
  Settings,
  ShieldCheck,
  Globe,
  Briefcase,
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
}

export default function EntryProcessPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#081a42] text-white py-28 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-5xl font-bold">
            Entry Process & Business Structures in India
          </h1>

          <p className="mt-5 text-lg text-white/80 max-w-3xl mx-auto">
            A structured advisory framework for global businesses entering India —
            covering strategy, regulatory approvals, entity structuring, taxation,
            and end-to-end compliance support.
          </p>
        </motion.div>
      </section>

      {/* PROCESS INTRO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            End-to-End India Entry Framework
          </motion.h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We support foreign companies at every stage — from feasibility analysis
            to incorporation and ongoing regulatory compliance.
          </p>

        </div>
      </section>

      {/* ENTRY PROCESS - VISUAL JOURNEY */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold">
              India Entry Journey (Step-by-Step Advisory Flow)
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              A structured approach followed by AU Corporate to ensure smooth, compliant
              and efficient market entry into India.
            </p>
          </motion.div>

          {/* TIMELINE WRAPPER */}
          <div className="relative">

            {/* CENTER LINE */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 hidden md:block" />

            {[
              {
                title: "Market Entry Strategy",
                desc: "We evaluate your business model, industry landscape, and India market potential to design the right entry roadmap.",
              },
              {
                title: "Optimal Structure Selection",
                desc: "Selection between Subsidiary, LLP, JV, Branch or Liaison Office based on control, tax efficiency and regulations.",
              },
              {
                title: "Regulatory & FEMA Planning",
                desc: "Assessment of RBI/FEMA requirements, sectoral caps, and compliance obligations before incorporation.",
              },
              {
                title: "Entity Incorporation",
                desc: "End-to-end incorporation with MCA including PAN, TAN, GST, and other statutory registrations.",
              },
              {
                title: "Banking & Capital Structuring",
                desc: "Foreign investment structuring, capital infusion planning, and banking setup in India.",
              },
              {
                title: "Operational Setup",
                desc: "Office setup, hiring, payroll, accounting systems, and internal governance framework.",
              },
              {
                title: "Ongoing Compliance Management",
                desc: "Continuous compliance support including ROC filings, FEMA reporting, taxation, and audits.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-14 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
              >

                {/* DOT */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#081a42] rounded-full border-4 border-white shadow" />

                {/* CARD */}
                <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition p-6 md:w-[45%]">

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#081a42] text-white text-sm font-semibold">
                      {i + 1}
                    </div>

                    <h3 className="font-semibold text-lg">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* BUSINESS STRUCTURES */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Business Structures in India
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Wholly Owned Subsidiary",
                desc: "100% foreign-owned company with full control and flexibility.",
              },
              {
                title: "LLP Structure",
                desc: "Hybrid structure with limited liability and lower compliance.",
              },
              {
                title: "Joint Venture",
                desc: "Strategic partnership with Indian entity for market access.",
              },
              {
                title: "Branch / Liaison Office",
                desc: "Extension of foreign company with RBI approval.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 bg-white border rounded-xl hover:shadow-xl transition"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* KEY CONSIDERATIONS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Key Considerations for Foreign Investors
            </h2>

            <p className="text-gray-600 mb-6">
              Structuring entry into India requires careful evaluation of tax,
              regulatory, and operational implications.
            </p>

            <div className="space-y-3 text-gray-600">
              {[
                "FDI policy and sector restrictions",
                "Tax structuring & transfer pricing",
                "FEMA compliance requirements",
                "Profit repatriation rules",
                "Employment & labour laws",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#081a42] text-white p-10 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4">
              AU Corporate Advisory Advantage
            </h3>

            <ul className="space-y-3 text-white/80 text-sm">
              <li>• End-to-end India entry advisory</li>
              <li>• Regulatory & FEMA compliance support</li>
              <li>• Structuring for tax efficiency</li>
              <li>• Assistance with incorporation & approvals</li>
              <li>• Ongoing compliance & reporting support</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Start Your India Entry Journey with Experts
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Get professional advisory support from AU Corporate for seamless
            entry, structuring, and compliance in India.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:scale-105 transition">
            Talk to Experts
          </button>
        </motion.div>
      </section>

    </div>
  )
}