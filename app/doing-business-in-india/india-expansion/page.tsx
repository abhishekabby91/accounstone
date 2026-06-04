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

        <div className="absolute inset-0 bg-[#081a42]/50" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-5xl font-bold">
            Why India?
          </h1>

          <p className="mt-5 text-lg text-white/80">
            India is transitioning from an emerging market to a global economic anchor —
            driven by scale, reforms, digital transformation, and manufacturing expansion.
          </p>
        </motion.div>
      </section>
      {/* WHY INDIA - DEEP INSIGHT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold">
              Why India is Becoming a Global Business Growth Engine
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              India is no longer viewed only as an emerging market — it is now a
              structural pillar in global supply chains, digital transformation,
              and long-term capital deployment strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  1. Structural Economic Transformation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  India is undergoing a long-term shift from a consumption-heavy economy
                  to a balanced model driven by manufacturing, services exports, and digital infrastructure.
                  This transformation is supported by policy reforms, capital inflows, and rising private investment.
                </p>
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  2. Shift in Global Supply Chains
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Global companies are actively diversifying away from single-country dependency strategies.
                  India is emerging as a key alternative manufacturing and sourcing destination under the
                  “China + 1” and “China + India + ASEAN” strategy frameworks.
                </p>
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  3. Policy-Led Investment Environment
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  India has introduced one of the most aggressive FDI liberalisation frameworks globally,
                  allowing automatic approvals in most sectors, reducing entry barriers, and promoting ease of doing business
                  through digital compliance systems.
                </p>
              </div>

            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  4. Capital Market & Investor Confidence
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  India has consistently ranked among the top destinations for FDI inflows in Asia.
                  Strong IPO activity, private equity participation, and sovereign wealth fund investments
                  reflect long-term confidence in India’s economic trajectory.
                </p>
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  5. Digital & Innovation Ecosystem
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  India has built one of the world’s largest digital public infrastructure systems
                  (UPI, Aadhaar, GSTN), enabling rapid scaling of fintech, SaaS, AI, and platform-based businesses.
                  This makes India a natural hub for digital-first global expansion.
                </p>
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  6. Long-Term Demographic Advantage
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Unlike aging developed economies, India offers a long runway of workforce expansion,
                  consumption growth, and urbanisation — making it one of the few large-scale markets
                  with sustained demand visibility over the next 20–30 years.
                </p>
              </div>

            </motion.div>

          </div>
        </div>
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
      {/* SECTOR OPPORTUNITIES WITH IMAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold">
              High-Growth Sector Opportunities in India
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              India offers diversified investment opportunities across sectors driven by
              policy support, digital transformation, and global supply chain realignment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Pharmaceuticals & Life Sciences",
                image: "https://cdn.corenexis.com/files/c/8581953720.jpg",
                desc: "Global leader in generics, vaccines and contract manufacturing.",
                stat: "20% global supply share",
              },
              {
                title: "IT Services & SaaS",
                image: "https://cdn.corenexis.com/files/c/4374972720.jpg",
                desc: "India dominates global IT outsourcing and digital services delivery.",
                stat: "$350B+ industry",
              },
              {
                title: "Automobile & EV",
                image: "https://cdn.corenexis.com/files/c/3863859720.jpg",
                desc: "Rapid EV adoption and manufacturing ecosystem expansion.",
                stat: "4th largest auto market",
              },
              {
                title: "Renewable Energy",
                image: "https://cdn.corenexis.com/files/c/6554291720.jpg",
                desc: "Massive solar, wind and green hydrogen expansion pipeline.",
                stat: "500+ GW target",
              },
              {
                title: "Infrastructure & Construction",
                image: "https://cdn.corenexis.com/files/c/7788446720.jpg",
                desc: "Smart cities, highways, logistics and real estate boom.",
                stat: "$1T+ pipeline",
              },
              {
                title: "Financial Services & Fintech",
                image: "https://cdn.corenexis.com/files/c/4785839720.jpg",
                desc: "UPI-driven digital economy transforming financial systems.",
                stat: "1B+ monthly transactions",
              },
            ].map((sector, i) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >

                {/* IMAGE */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <span className="text-xs bg-[#081a42] text-white px-3 py-1 rounded-full">
                    {sector.stat}
                  </span>

                  <h3 className="font-semibold text-lg mt-3 group-hover:text-[#081a42] transition">
                    {sector.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {sector.desc}
                  </p>

                  <div className="mt-4 text-sm text-yellow-600 font-medium opacity-0 group-hover:opacity-100 transition">
                    Explore opportunity →
                  </div>

                </div>

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