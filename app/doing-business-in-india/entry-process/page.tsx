"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function EntryProcessPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#081a42] text-white py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
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
                step: "1. Market Research & Feasibility",
                desc: "Evaluate market demand, competition, regulatory landscape, and sector-specific opportunities before entering India.",
              },
              {
                step: "2. Entry Strategy & Structure Selection",
                desc: "Choose the right business structure such as subsidiary, LLP, or joint venture based on control, tax, and operational requirements.",
              },
              {
                step: "3. Regulatory Approvals",
                desc: "Obtain approvals under FEMA, RBI, and sector-specific regulators where applicable.",
              },
              {
                step: "4. Company Incorporation",
                desc: "Register the entity with MCA and complete statutory registrations including PAN, TAN, and GST.",
              },
              {
                step: "5. Bank Account & Capital Infusion",
                desc: "Open bank accounts and bring in foreign investment in compliance with FEMA regulations.",
              },
              {
                step: "6. Operational Setup",
                desc: "Set up office, hire employees, implement accounting systems, and establish internal processes.",
              },
              {
                step: "7. Ongoing Compliance",
                desc: "Ensure regular compliance with tax laws, labour laws, FEMA, and corporate regulations.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 border rounded-xl">
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

            {/* WOS */}
            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Wholly Owned Subsidiary
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                A private limited company fully owned by a foreign entity.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Full control over operations</li>
                <li>• Limited liability structure</li>
                <li>• Most preferred route for foreign companies</li>
              </ul>
            </div>

            {/* LLP */}
            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Limited Liability Partnership (LLP)
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Hybrid structure combining flexibility of partnership with limited liability.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lower compliance burden</li>
                <li>• Suitable for service-based businesses</li>
                <li>• Restricted FDI in certain sectors</li>
              </ul>
            </div>

            {/* JV */}
            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Joint Venture
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Partnership with an Indian company for market access and local expertise.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shared ownership and risk</li>
                <li>• Access to local network</li>
                <li>• Strategic collaboration benefits</li>
              </ul>
            </div>

            {/* BRANCH */}
            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Branch / Liaison / Project Office
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Extension of foreign company without separate legal entity.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• RBI approval required</li>
                <li>• Limited activities allowed</li>
                <li>• Suitable for specific business purposes</li>
              </ul>
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