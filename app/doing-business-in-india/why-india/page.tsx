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

export default function WhyIndiaPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="https://cdn.corenexis.com/files/c/7719595720.jpg"
          alt="India Growth"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[#081a42]/80" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-5xl font-bold">
            Why India is a Global Investment Powerhouse
          </h1>

          <p className="mt-5 text-lg text-white/80">
            India is transitioning from an emerging market to a global economic anchor —
            driven by scale, reforms, digital transformation, and manufacturing expansion.
          </p>
        </motion.div>
      </section>

      {/* INVESTMENT THESIS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            India Investment Thesis (2026 Outlook)
          </h2>

          <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
            Global firms are increasingly shifting capital toward India due to structural economic shifts,
            supply chain diversification, and policy-driven reforms.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              {
                title: "Consumption Driven Economy",
                desc: "India is powered by domestic consumption, not just exports — creating stable long-term demand.",
              },
              {
                title: "Supply Chain Diversification",
                desc: "Global companies are adopting China+1 strategy, positioning India as a manufacturing hub.",
              },
              {
                title: "Digital First Economy",
                desc: "UPI, fintech, AI adoption, and SaaS ecosystems are reshaping business models.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 border rounded-xl hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* KEY DRIVERS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Key Growth Drivers of India Economy
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              {
                icon: <Users />,
                title: "Demographic Dividend",
                desc: "65% population under 35 → largest young workforce globally.",
              },
              {
                icon: <TrendingUp />,
                title: "Fast GDP Expansion",
                desc: "India among top 3 fastest-growing major economies.",
              },
              {
                icon: <Cpu />,
                title: "Tech Transformation",
                desc: "AI, SaaS, fintech, and startup ecosystem expansion.",
              },
              {
                icon: <BarChart3 />,
                title: "Capital Market Growth",
                desc: "Rising IPO activity and strong equity inflows.",
              },
              {
                icon: <Landmark />,
                title: "Government Reforms",
                desc: "GST, PLI schemes, FDI liberalisation.",
              },
              {
                icon: <Globe />,
                title: "Global Trade Integration",
                desc: "FTAs with UAE, UK, ASEAN improving trade access.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 bg-white border rounded-xl hover:shadow-lg transition"
              >
                <div className="text-[#081a42] mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* INDIA VS GLOBAL MARKETS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Global Companies Choose India Over Other Markets
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="p-8 border rounded-xl">
              <h3 className="font-semibold text-lg mb-4">India Advantages</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Large domestic consumption base</li>
                <li>• Lower operating & labor costs</li>
                <li>• Strong IT + engineering talent pool</li>
                <li>• Government incentives & FDI reforms</li>
                <li>• Strategic Asia-Pacific location</li>
              </ul>
            </div>

            <div className="p-8 border rounded-xl">
              <h3 className="font-semibold text-lg mb-4">Compared to Other Markets</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Lower dependency on exports than China</li>
                <li>• Higher scalability than Southeast Asia</li>
                <li>• More cost-efficient than EU / US</li>
                <li>• Strong legal framework (common law system)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* AU CORPORATE STRATEGY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            How AU Corporate Supports Global Entry into India
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Market Entry Strategy & Feasibility Study",
              "Entity Setup (Subsidiary / LLP / JV / Branch)",
              "FEMA, RBI & Regulatory Compliance Advisory",
              "Tax Structuring & Transfer Pricing Support",
              "Accounting, Payroll & Compliance Management",
              "Ongoing Strategic Business Advisory",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 bg-white border rounded-lg hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700">✔ {item}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Unlock India’s Growth Potential with AU Corporate
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          From strategy to execution, we help global businesses enter India with confidence,
          compliance, and clarity.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:scale-105 transition">
          Schedule Consultation
        </button>
      </section>

    </div>
  )
}