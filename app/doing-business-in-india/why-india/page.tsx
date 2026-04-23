"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Users,
  TrendingUp,
  Landmark,
  Cpu,
  Briefcase,
  ShieldCheck,
  Building2,
  FileCheck2,
} from "lucide-react"
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
      <section className="bg-[#081a42] text-white py-28 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-5xl font-bold">
            Why India for Global Expansion
          </h1>

          <p className="mt-5 text-lg text-white/80 max-w-3xl mx-auto">
            India is one of the most attractive global destinations for foreign investment,
            offering scale, stability, and strategic growth opportunities across industries.
            AU Corporate supports international businesses in seamless entry, compliance,
            and long-term operations in India.
          </p>
        </motion.div>
      </section>

      {/* KEY DRIVERS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              icon: <Users />,
              title: "Massive Consumer Base",
              desc: "1.4+ billion population with rising consumption and urbanization.",
            },
            {
              icon: <TrendingUp />,
              title: "High Growth Economy",
              desc: "Among the fastest-growing large economies globally.",
            },
            {
              icon: <Cpu />,
              title: "Digital Transformation",
              desc: "World-leading digital public infrastructure and startup ecosystem.",
            },
            {
              icon: <Briefcase />,
              title: "Cost Efficiency",
              desc: "Competitive talent and operational cost advantage.",
            },
            {
              icon: <Landmark />,
              title: "Policy Reforms",
              desc: "FDI liberalization, GST, ease of doing business reforms.",
            },
            {
              icon: <Globe />,
              title: "Global Connectivity",
              desc: "Strategic gateway to Asia, Middle East & global supply chains.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 border rounded-xl hover:shadow-xl transition bg-white"
            >
              <div className="text-[#081a42] mb-4">{item.icon}</div>
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
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold text-[#081a42]">
                {stat.value}
              </h2>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SECTOR OPPORTUNITIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">
              Key Investment Sectors in India
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              High-growth sectors attracting global investors with strong policy support
              and long-term potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Pharmaceuticals",
                image: "https://cdn.corenexis.com/files/c/8581953720.jpg",
                points: ["Global leader in generics", "USD 130B+ projected market"],
              },
              {
                title: "IT & BPM",
                image: "https://cdn.corenexis.com/files/c/4374972720.jpg",
                points: ["Global IT hub", "Strong outsourcing destination"],
              },
              {
                title: "Automobile & EV",
                image: "https://cdn.corenexis.com/files/c/3863859720.jpg",
                points: ["Fast-growing EV ecosystem", "Global manufacturing base"],
              },
              {
                title: "Construction",
                image: "https://cdn.corenexis.com/files/c/7788446720.jpg",
                points: ["Infrastructure boom", "Urban development growth"],
              },
              {
                title: "Renewable Energy",
                image: "https://cdn.corenexis.com/files/c/6554291720.jpg",
                points: ["Net zero target", "Massive solar/wind capacity"],
              },
              {
                title: "Healthcare",
                image: "https://cdn.corenexis.com/files/c/4785839720.jpg",
                points: ["Rapid expansion", "Medical tourism hub"],
              },
            ].map((sector, i) => (
              <motion.div
                key={sector.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    {sector.title}
                  </h3>

                  <ul className="text-sm text-gray-600 space-y-2">
                    {sector.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY AU CORPORATE */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Why AU Corporate for India Entry
            </h2>

            <p className="text-gray-600 mb-6">
              We act as a trusted advisory partner for foreign companies entering India,
              ensuring regulatory compliance, tax efficiency, and smooth business setup.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><ShieldCheck className="w-5 h-5 text-green-600" /> End-to-end compliance support</li>
              <li className="flex gap-2"><Building2 className="w-5 h-5 text-green-600" /> Entity structuring advisory</li>
              <li className="flex gap-2"><FileCheck2 className="w-5 h-5 text-green-600" /> Regulatory approvals assistance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://cdn.corenexis.com/files/c/4374972720.jpg"
              alt="India Business Advisory"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Start Your India Expansion Journey
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Speak with our experts for structuring, compliance, and entry strategy advisory.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:scale-105 transition">
            Talk to Experts
          </button>
        </motion.div>
      </section>

    </div>
  )
}