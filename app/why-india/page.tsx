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
  Zap
} from "lucide-react"

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
      "Highly skilled professionals across finance, tech, legal, and management.",
  },
  {
    icon: DollarSign,
    title: "Cost Advantage",
    value: "50%+",
    description:
      "Significant operational cost savings compared to global markets.",
  },
  {
    icon: Clock,
    title: "Ease of Business",
    value: "Improving",
    description:
      "Reforms and digitization improving business environment continuously.",
  },
]

const stats = [
  { value: "$3.5T+", label: "GDP Size" },
  { value: "4th", label: "Largest Economy" },
  { value: "100+", label: "Unicorns" },
  { value: "High", label: "FDI Growth" },
]

const reasons = [
  {
    icon: Globe,
    title: "Investment Friendly Environment",
    description:
      "India supports foreign investment with strong policy frameworks.",
    points: [
      "100% FDI in multiple sectors",
      "Stable legal framework",
      "Government incentives",
      "Global trade agreements",
    ],
  },
  {
    icon: TrendingUp,
    title: "Rapid Economic Growth",
    description:
      "One of the fastest-growing economies globally.",
    points: [
      "Rising middle class",
      "Strong domestic demand",
      "Startup ecosystem growth",
      "Digital transformation",
    ],
  },
  {
    icon: Building2,
    title: "Regulatory Structure",
    description:
      "Clear compliance systems for global businesses.",
    points: [
      "FEMA & Company Law compliance",
      "GST taxation system",
      "Audit & reporting standards",
      "Transparent governance",
    ],
  },
  {
    icon: Zap,
    title: "Digital Infrastructure",
    description:
      "India leads in digital adoption and infrastructure growth.",
    points: [
      "Digital India initiative",
      "Fintech ecosystem",
      "Fast-growing logistics",
      "AI & tech adoption",
    ],
  },
]

export default function WhyIndiaClient() {
  return (
    <div className="min-h-screen pt-20 bg-white">

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">

        <Image
          src="https://cdn.corenexis.com/files/c/3298128720.jpg"
          alt="India Growth Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-7xl px-4 w-full">
          <div className="max-w-3xl">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold text-sm font-semibold uppercase tracking-wider"
            >
              Strategic Advantage
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white"
            >
              Why India is Your <span className="text-gold">Growth Destination</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-lg"
            >
              India offers unmatched opportunities for global businesses with a strong economy,
              skilled workforce, and rapidly expanding digital infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <Button className="bg-gold text-black hover:bg-yellow-500">
                <Link href="/contact">
                  Explore Opportunities <ArrowRight className="ml-2 h-4 w-4 inline" />
                </Link>
              </Button>
            </motion.div>

          </div>
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
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="text-3xl font-bold text-gold"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {s.value}
              </motion.div>

              <div className="text-sm text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">

          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
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
                className="p-8 bg-white border rounded-xl text-center hover:shadow-lg"
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

    </div>
  )
}