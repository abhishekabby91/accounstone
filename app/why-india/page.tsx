"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  GraduationCap,
  Globe,
  Building2,
  DollarSign,
  Zap,
} from "lucide-react"

/* ADVANTAGES */
const advantages = [
  {
    icon: Users,
    title: "Large Consumer Market",
    value: "1.4B+",
    description:
      "Access to one of the world’s largest and fastest-growing consumer markets.",
  },
  {
    icon: GraduationCap,
    title: "Skilled Workforce",
    value: "5M+",
    description:
      "Highly skilled professionals across finance, technology, and management.",
  },
  {
    icon: DollarSign,
    title: "Cost Advantage",
    value: "50%+",
    description:
      "Significant cost efficiencies compared to developed economies.",
  },
  {
    icon: Clock,
    title: "Ease of Doing Business",
    value: "Improving",
    description:
      "Continuous reforms and digitization improving regulatory environment.",
  },
]

/* STATS */
const stats = [
  { value: "$3.5T+", label: "GDP Size" },
  { value: "4th", label: "Largest Economy" },
  { value: "100+", label: "Unicorns" },
  { value: "High", label: "FDI Growth" },
]

/* REASONS */
const reasons = [
  {
    icon: Globe,
    title: "Investment Friendly Environment",
    description:
      "Strong government support and liberal FDI policies attract global investors.",
    points: [
      "100% FDI in key sectors",
      "Stable legal ecosystem",
      "Government incentives",
      "Trade agreements",
    ],
  },
  {
    icon: TrendingUp,
    title: "Rapid Economic Growth",
    description:
      "India continues to be among the fastest-growing major economies.",
    points: [
      "Expanding middle class",
      "High domestic consumption",
      "Startup ecosystem boom",
      "Digital transformation",
    ],
  },
  {
    icon: Building2,
    title: "Robust Regulatory Framework",
    description:
      "Clear and evolving compliance structure aligned with global standards.",
    points: [
      "FEMA regulations",
      "GST framework",
      "Corporate law compliance",
      "Transparent governance",
    ],
  },
  {
    icon: Zap,
    title: "Digital & Infrastructure Growth",
    description:
      "Rapid development in digital and physical infrastructure.",
    points: [
      "Digital India initiative",
      "Fintech ecosystem",
      "Logistics expansion",
      "AI adoption",
    ],
  },
]

export default function WhyIndiaPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">

        <Image
          src="https://cdn.corenexis.com/files/c/3298128720.jpg"
          alt="India Business"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-4 w-full">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Doing Business in India
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              India – A Strategic Hub for{" "}
              <span className="text-gold">Global Expansion</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
              India offers a compelling combination of market scale, skilled talent,
              cost efficiency, and regulatory evolution, making it a preferred
              destination for global businesses.
            </p>

            <div className="mt-6">
              <Button className="bg-gold text-black hover:bg-yellow-500">
                <Link href="/contact">
                  Start Your India Journey{" "}
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-gold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">

          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase">
              Key Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              The India Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {advantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 border rounded-xl text-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>

                <div className="text-3xl font-bold text-gold mb-2">
                  {item.value}
                </div>

                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* REASONS */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">

          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase">
              In Detail
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Why Global Companies Choose India
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white border rounded-xl"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <r.icon className="h-6 w-6 text-gold" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 pl-4 border-l border-gold/30">
                  {r.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground">
                      • {p}
                    </li>
                  ))}
                </ul>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Enter the Indian Market?
          </h2>

          <p className="text-muted-foreground mb-8">
            AU Corporate provides end-to-end support for foreign companies
            entering and expanding in India.
          </p>

          <Button className="bg-gold text-black hover:bg-yellow-500">
            <Link href="/contact">
              Talk to Experts <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </Button>

        </div>
      </section>

    </div>
  )
}