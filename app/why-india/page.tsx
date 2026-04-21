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
      "Strong pool of skilled professionals across finance, technology, and management.",
  },
  {
    icon: DollarSign,
    title: "Cost Advantage",
    value: "50%+",
    description:
      "Significant operational and manpower cost efficiencies.",
  },
  {
    icon: Clock,
    title: "Ease of Doing Business",
    value: "Improving",
    description:
      "Continuous regulatory reforms and digital transformation improving efficiency.",
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
    title: "Investment-Friendly Ecosystem",
    description:
      "India offers strong policy support and liberal FDI norms for global investors.",
    points: [
      "100% FDI in key sectors",
      "Stable legal and tax framework",
      "Government incentives",
      "Global trade integration",
    ],
  },
  {
    icon: TrendingUp,
    title: "Strong Economic Growth",
    description:
      "India remains one of the fastest-growing major global economies.",
    points: [
      "Expanding middle class",
      "High domestic demand",
      "Startup ecosystem growth",
      "Digital economy expansion",
    ],
  },
  {
    icon: Building2,
    title: "Robust Regulatory Framework",
    description:
      "Transparent and evolving compliance structure aligned with global standards.",
    points: [
      "GST & FEMA framework",
      "Corporate compliance system",
      "Digitized governance",
      "Simplified reporting systems",
    ],
  },
  {
    icon: Zap,
    title: "Digital & Infrastructure Growth",
    description:
      "Rapid expansion in digital and physical infrastructure.",
    points: [
      "Digital India initiative",
      "Fintech & AI adoption",
      "Logistics expansion",
      "Smart infrastructure development",
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

        <div className="relative mx-auto max-w-7xl px-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
              Doing Business in India
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              India – A Strategic Hub for Global Expansion
            </h1>

            <p className="text-white/80 text-lg">
              India offers a compelling combination of market scale, skilled talent,
              cost efficiency, and regulatory evolution, making it a preferred destination
              for global businesses.
            </p>

            <div className="mt-6">
              <Button className="bg-yellow-400 text-black">
                <Link href="/contact">
                  Start Your India Journey <ArrowRight className="ml-2 h-4 w-4 inline" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-yellow-500">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-2">
            The India Advantage
          </h2>
          <p className="text-muted-foreground mb-12">
            Key factors driving global business expansion into India
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {advantages.map((a) => (
              <div key={a.title} className="p-6 border rounded-xl hover:shadow-md transition">

                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                  <a.icon className="text-yellow-500 w-6 h-6" />
                </div>

                <div className="text-2xl font-bold text-yellow-500">
                  {a.value}
                </div>

                <h3 className="font-semibold mt-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {a.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* REASONS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Global Companies Choose India
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            {reasons.map((r) => (
              <div key={r.title} className="p-8 bg-white border rounded-xl">

                <div className="flex gap-4 mb-4">
                  <r.icon className="text-yellow-500 w-6 h-6" />

                  <div>
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>

                <ul className="text-sm text-muted-foreground space-y-2">
                  {r.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Enter the Indian Market?
          </h2>

          <p className="text-muted-foreground mb-8">
            AU Corporate provides end-to-end advisory for global businesses entering India.
          </p>

          <Button className="bg-yellow-400 text-black">
            <Link href="/contact">
              Talk to Experts <ArrowRight className="ml-2 w-4 h-4 inline" />
            </Link>
          </Button>

        </div>
      </section>

    </div>
  )
}