"use client"

import { motion } from "framer-motion"
import { Globe, Users, TrendingUp, Landmark, Cpu, Briefcase } from "lucide-react"
import Image from "next/image"

export default function WhyIndiaPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#081a42] text-white py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold">Why India</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            India is one of the world’s fastest-growing economies, offering unmatched
            opportunities for global businesses to expand, innovate, and scale.
          </p>
        </motion.div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              icon: <Users />,
              title: "Large Consumer Market",
              desc: "Access to over 1.4 billion consumers with rapidly growing middle class demand.",
            },
            {
              icon: <TrendingUp />,
              title: "Fastest Growing Economy",
              desc: "India continues to be among the top GDP growth economies globally.",
            },
            {
              icon: <Cpu />,
              title: "Digital & Tech Ecosystem",
              desc: "Strong digital infrastructure and startup ecosystem driving innovation.",
            },
            {
              icon: <Briefcase />,
              title: "Cost Advantage",
              desc: "Competitive labor and operational costs compared to global markets.",
            },
            {
              icon: <Landmark />,
              title: "Government Support",
              desc: "Business-friendly reforms, FDI liberalisation, and tax incentives.",
            },
            {
              icon: <Globe />,
              title: "Strategic Location",
              desc: "Gateway to Asia, Middle East, and global supply chains.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 border rounded-xl hover:shadow-lg transition">
              <div className="text-[#081a42] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-4 text-center gap-8">

          <div>
            <h2 className="text-3xl font-bold text-[#081a42]">1.4B+</h2>
            <p className="text-sm text-gray-600">Population</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#081a42]">$3.7T+</h2>
            <p className="text-sm text-gray-600">GDP Size</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#081a42]">Top 5</h2>
            <p className="text-sm text-gray-600">Global Economy</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#081a42]">100K+</h2>
            <p className="text-sm text-gray-600">Startups</p>
          </div>

        </div>
      </section>

      {/* SECTOR OPPORTUNITIES (NEW SECTION) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-4">
            Sector Wise Opportunities
          </h2>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            India offers strong growth opportunities across diverse sectors driven by demand,
            policy support, and global competitiveness.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Pharmaceuticals",
                image: "https://cdn.corenexis.com/files/c/4291696720.jpg",
                points: [
                  "20% global generic medicine supply",
                  "USD 130 Bn market by 2030",
                ],
              },
              {
                title: "IT - BPM",
                image: "https://cdn.corenexis.com/files/c/3221391720.jpg",
                points: [
                  "8% contribution to GDP",
                  "USD 350 Bn expected size",
                ],
              },
              {
                title: "Automobile / EV",
                image: "https://cdn.corenexis.com/files/c/9266523720.jpg",
                points: [
                  "4th largest automotive market",
                  "Growing EV ecosystem",
                ],
              },
              {
                title: "Construction",
                image: "https://cdn.corenexis.com/files/c/3438374720.jpg",
                points: [
                  "USD 1Tn market by 2025",
                  "Major GDP contributor",
                ],
              },
              {
                title: "Renewable Energy",
                image: "https://cdn.corenexis.com/files/c/3934283720.jpg",
                points: [
                  "1000+ GW potential",
                  "Strong policy push",
                ],
              },
              {
                title: "Healthcare",
                image: "https://cdn.corenexis.com/files/c/7454887720.jpg",
                points: [
                  "Fastest growing sector",
                  "USD 372 Bn opportunity",
                ],
              },
            ].map((sector) => (
              <div key={sector.title} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">

                <div className="relative h-48">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{sector.title}</h3>

                  <ul className="text-sm text-gray-600 space-y-2">
                    {sector.points.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY INDIA CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              A Strategic Hub for Global Expansion
            </h2>
            <p className="text-gray-600 leading-relaxed">
              India offers a unique combination of market size, talent availability,
              policy reforms, and cost efficiency, making it a preferred destination
              for global expansion.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Skilled Workforce</h4>
              <p className="text-sm text-gray-600">
                Large pool of qualified professionals across industries.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Ease of Doing Business</h4>
              <p className="text-sm text-gray-600">
                Continuous regulatory improvements and digitisation.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">FDI Friendly Policies</h4>
              <p className="text-sm text-gray-600">
                Liberalised foreign investment norms across sectors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Expand Your Business in India with Confidence
        </h2>
        <p className="max-w-2xl mx-auto text-white/80 mb-6">
          AU provide end-to-end advisory and compliance support for seamless entry and growth.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
          Talk to Experts
        </button>
      </section>

    </div>
  )
}