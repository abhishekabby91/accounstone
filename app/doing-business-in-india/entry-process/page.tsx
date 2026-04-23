"use client"

import { motion } from "framer-motion"
import { TrendingUp, Globe, Users, Shield, Landmark, Cpu, Briefcase, BarChart3 } from "lucide-react"
import Image from "next/image"

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

      {/* HERO (FIXED - NO WHY INDIA) */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="https://cdn.corenexis.com/files/c/7719595720.jpg"
          alt="India Business Entry"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[#081a42]/60" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-5xl font-bold">
            India Entry Process & Business Structures
          </h1>

          <p className="mt-5 text-lg text-white/80">
            A structured roadmap for global companies entering India — covering market evaluation,
            regulatory approvals, entity setup, taxation, and operational launch strategy.
          </p>
        </motion.div>
      </section>

      {/* STRATEGIC CONTEXT (FROM WHY INDIA INSIGHT BUT REPOSITIONED) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold">
              Why India is a Strategic Entry Market
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              India’s economic transformation, digital infrastructure, and supply chain integration
              make it a key destination for global expansion strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Market Scale Advantage</h3>
              <p className="text-sm text-gray-600">
                India offers one of the largest consumer bases globally, enabling long-term demand visibility.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Policy & Reform Ecosystem</h3>
              <p className="text-sm text-gray-600">
                Liberal FDI regime, GST implementation, and digital compliance systems simplify entry.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Digital Infrastructure</h3>
              <p className="text-sm text-gray-600">
                UPI, Aadhaar, GSTN enable efficient business operations and scalability.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Global Supply Chain Shift</h3>
              <p className="text-sm text-gray-600">
                India is a key beneficiary of China+1 manufacturing diversification strategy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ENTRY PROCESS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Step-by-Step Entry Process
          </h2>

          <div className="relative">

            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 hidden md:block" />

            {[
              "Market Feasibility & Entry Strategy",
              "Business Structure Selection",
              "Regulatory & FDI Compliance Review",
              "Entity Incorporation in India",
              "Tax & Banking Setup",
              "Operational Launch",
              "Ongoing Compliance & Reporting"
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex md:items-center mb-14 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#081a42] rounded-full border-4 border-white" />

                <div className="bg-white border rounded-2xl p-6 md:w-[45%] shadow-sm hover:shadow-lg transition">
                  <h3 className="font-semibold text-lg mb-2">
                    {i + 1}. {step}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Structured execution with regulatory compliance and business alignment.
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* BUSINESS STRUCTURES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Business Structures in India
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { title: "Wholly Owned Subsidiary", desc: "Full control with independent legal entity structure." },
              { title: "LLP Structure", desc: "Flexible partnership-based model with lower compliance." },
              { title: "Joint Venture", desc: "Strategic partnership with Indian entity." },
              { title: "Branch Office", desc: "Foreign company presence under RBI approval." },
            ].map((item) => (
              <div key={item.title} className="p-6 border rounded-xl hover:shadow-lg transition">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Key Entry Risks to Consider
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Regulatory Complexity</h3>
              <p className="text-sm text-gray-600">
                Multiple approvals under FEMA, RBI and tax laws.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Tax Exposure</h3>
              <p className="text-sm text-gray-600">
                Improper structuring may lead to double taxation.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Compliance Burden</h3>
              <p className="text-sm text-gray-600">
                Ongoing reporting and audit obligations.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* AU SUPPORT AGAINST ENTRY RISKS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold">
              How{" "}
              <span className="text-[#FFD700]">AU Corporate</span>{" "}
              Mitigates Entry Risks
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We transform regulatory complexity into a structured, compliant and predictable
              India entry journey for global businesses.
            </p>
          </motion.div>

          {/* GRID */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {[
              {
                title: "Regulatory Navigation",
                desc: "End-to-end handling of FEMA, RBI and MCA approvals with compliance accuracy.",
              },
              {
                title: "Optimal Structuring",
                desc: "Tax-efficient entity structuring aligned with long-term business goals.",
              },
              {
                title: "Tax Risk Management",
                desc: "Transfer pricing, DTAA planning and corporate tax optimization.",
              },
              {
                title: "Faster Market Entry",
                desc: "Reduced incorporation timelines through structured execution planning.",
              },
              {
                title: "Ongoing Compliance Support",
                desc: "Accounting, payroll, ROC filings and FEMA reporting managed end-to-end.",
              },
              {
                title: "Strategic Advisory",
                desc: "Beyond compliance — supporting expansion, scaling and investment strategy.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.25)"
                }}
                className="p-6 border rounded-xl bg-white cursor-pointer relative overflow-hidden"
              >

                {/* GOLD ACCENT BAR */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FFD700]" />

                {/* HOVER GLOW EFFECT */}
                <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-[#FFD700] transition" />

                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>
      {/* CTA */}
      <section className="bg-[#081a42] text-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your India Entry Journey
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Build a compliant and scalable business structure in India with expert guidance.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
          Talk to Experts
        </button>
      </section>

    </div>
  )
}