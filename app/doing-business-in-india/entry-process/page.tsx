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

      {/* BUSINESS STRUCTURES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Business Structures in India
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Wholly Owned Subsidiary
              </h3>
              <p className="text-sm text-gray-600">
                100% foreign-owned company with full operational control in India.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                LLP
              </h3>
              <p className="text-sm text-gray-600">
                Flexible structure with limited liability and lower compliance.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Joint Venture
              </h3>
              <p className="text-sm text-gray-600">
                Partnership with Indian entity for market access and expertise.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Branch / Liaison / Project Office
              </h3>
              <p className="text-sm text-gray-600">
                Extension of foreign company with limited permitted activities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* KEY CONSIDERATIONS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Key Considerations for Foreign Investors
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>• FDI policy and sector restrictions</li>
            <li>• Tax implications and structuring</li>
            <li>• Regulatory approvals and compliance</li>
            <li>• Repatriation of profits and capital</li>
            <li>• Employment and labour laws</li>
          </ul>

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