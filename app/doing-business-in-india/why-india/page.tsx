"use client"

import { motion } from "framer-motion"
import { Globe, Users, TrendingUp, Landmark, Cpu, Briefcase, CheckCircle } from "lucide-react"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
}

export default function WhyIndiaPage() {
  return (
    <div className="bg-white">

      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative text-white py-28 text-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src="https://cdn.corenexis.com/files/c/7719595720.jpg"
          alt="India Global Business Skyline"
          fill
          className="object-cover z-0"
          priority
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-20 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl font-bold">
            Why India is a Global Business Hub
          </h1>

          <p className="mt-5 text-lg text-white/80">
            India stands as one of the fastest-growing major economies,
            offering unmatched opportunities for foreign direct investment,
            expansion, and strategic global positioning.
          </p>
        </motion.div>
      </section>

      {/* INTRO ADVISORY SECTION (NEW - AU CORPORATE STYLE) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center"
          >
            India – A Strategic Destination for Global Expansion
          </motion.h2>

          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            As highlighted by global advisory firms such as EY, Deloitte, and RSM,
            India continues to emerge as a preferred destination for multinational
            corporations due to its scale, reforms, and economic resilience.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {[
              {
                title: "Global Market Access",
                desc: "Gateway to 1.4 billion consumers and rapidly expanding middle class.",
              },
              {
                title: "Regulatory Reforms",
                desc: "Ease of doing business improvements and digital governance transformation.",
              },
              {
                title: "Investment Growth",
                desc: "Consistent FDI inflows across manufacturing, IT, and services sectors.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="p-6 bg-white border rounded-xl hover:shadow-lg"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              icon: <Users />,
              title: "Large Consumer Market",
              desc: "Access to over 1.4 billion consumers with rising purchasing power.",
            },
            {
              icon: <TrendingUp />,
              title: "High Growth Economy",
              desc: "One of the fastest growing major economies globally.",
            },
            {
              icon: <Cpu />,
              title: "Digital Transformation",
              desc: "World-leading digital public infrastructure and startup ecosystem.",
            },
            {
              icon: <Briefcase />,
              title: "Cost Efficiency",
              desc: "Competitive labor and operational cost advantages.",
            },
            {
              icon: <Landmark />,
              title: "Policy Support",
              desc: "FDI liberalisation and business-friendly reforms.",
            },
            {
              icon: <Globe />,
              title: "Global Connectivity",
              desc: "Strategic access to Asia, Middle East, and global trade routes.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border rounded-xl hover:shadow-lg"
            >
              <div className="text-[#081a42] mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-4 text-center gap-8">

          {[
            { value: "1.4B+", label: "Population" },
            { value: "$3.7T+", label: "GDP Size" },
            { value: "Top 5", label: "Global Economy" },
            { value: "100K+", label: "Startups" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-3xl font-bold text-[#081a42]">{stat.value}</h2>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* WHY INDIA INSIGHT (ADVISORY CONTENT ADDED) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Why Global Companies Choose India
            </h2>

            <p className="text-gray-600 leading-relaxed">
              India is increasingly becoming a preferred hub for global capability
              centers (GCCs), manufacturing units, shared service centers, and
              strategic outsourcing due to its skilled workforce and policy stability.
            </p>

            <div className="mt-6 space-y-3 text-gray-600">
              {[
                "Strong legal & regulatory framework",
                "Stable democratic governance",
                "Rapid infrastructure development",
                "Talent availability across industries",
              ].map((item) => (
                <div key={item} className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 bg-[#081a42] text-white rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4">
              AU Corporate Advisory Advantage
            </h3>

            <ul className="space-y-3 text-white/80 text-sm">
              <li>• Entry strategy & structuring support</li>
              <li>• Regulatory & FEMA advisory</li>
              <li>• Tax efficient structuring</li>
              <li>• Entity incorporation support</li>
              <li>• End-to-end compliance management</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Expand into India with Strategic Clarity
        </h2>
        <p className="max-w-2xl mx-auto text-white/80 mb-6">
          AU Corporate assists global businesses in seamless India entry, structuring,
          and compliance management.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:scale-105 transition">
          Talk to Experts
        </button>
      </section>

    </div>
  )
}