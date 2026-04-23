"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function EntryProcessPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#081a42] text-white py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold">
            Entry Process & Business Structures in India
          </h1>

          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            A step-by-step guide for global businesses to establish and operate in India
            with the right structure and regulatory compliance.
          </p>
        </motion.div>
      </section>

      {/* ENTRY PROCESS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Step-by-Step Entry Process
          </h2>

          <div className="space-y-6">

            {[
              {
                step: "Market Research & Feasibility",
                desc: "Evaluate demand, competition, regulatory landscape, and sector opportunities before entering India.",
              },
              {
                step: "Entry Strategy & Structure Selection",
                desc: "Choose subsidiary, LLP, JV, or branch office based on business goals.",
              },
              {
                step: "Regulatory Approvals",
                desc: "Obtain RBI/FEMA approvals wherever applicable.",
              },
              {
                step: "Company Incorporation",
                desc: "Register with MCA and obtain PAN, TAN, GST registrations.",
              },
              {
                step: "Bank Account & Capital Infusion",
                desc: "Open bank account and bring foreign investment compliantly.",
              },
              {
                step: "Operational Setup",
                desc: "Office setup, hiring, accounting systems, and compliance framework.",
              },
              {
                step: "Ongoing Compliance",
                desc: "Tax filings, ROC compliance, FEMA reporting, audits.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 p-5 border rounded-xl hover:shadow-md transition"
              >
                <CheckCircle className="text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">{item.step}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your India Entry with Confidence
        </h2>

        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          We guide you through every step—from strategy to incorporation and compliance.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
          Talk to Experts
        </button>
      </section>

    </div>
  )
}