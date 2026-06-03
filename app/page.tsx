"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import {
  Users,
  Building2,
  TrendingUp,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Offshore Staffing",
    description:
      "Build high-performing accounting teams in India with skilled professionals aligned to your firm's goals.",
    href: "/offshore-staffing",
  },
  {
    icon: Building2,
    title: "Operational Excellence",
    description:
      "Improve workflows, increase efficiency, and create scalable systems for sustainable growth.",
    href: "/operational-excellence",
  },
  {
    icon: TrendingUp,
    title: "Practice Growth Advisory",
    description:
      "Growth strategies tailored specifically for accounting and professional service firms.",
    href: "/growth-advisory",
  },
  {
    icon: Globe,
    title: "India Expansion Strategy",
    description:
      "Strategic support for firms looking to establish or expand operations in India.",
    href: "/india-expansion",
  },
]

const stats = [
  {
    value: "500+",
    label: "Professionals Available",
  },
  {
    value: "15+",
    label: "Years Industry Experience",
  },
  {
    value: "5+",
    label: "Global Markets",
  },
  {
    value: "98%",
    label: "Client Retention",
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1445] via-[#0072BC] to-[#0B1445]" />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto px-4 py-32">

          <div className="max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm mb-6">
                Strategic Growth Partner for Accounting Firms
              </span>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                Scale Your Firm Through
                <span className="block text-[#F97316]">
                  Offshore Talent
                </span>
              </h1>

              <p className="text-xl text-white/80 mb-10 max-w-3xl">
                808 Strategy helps accounting firms across the United States,
                United Kingdom, Australia, and Canada accelerate growth through
                offshore staffing, operational excellence, and India expansion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <Button
                  asChild
                  size="lg"
                  className="bg-[#F97316] hover:bg-[#EA580C]"
                >
                  <Link href="/contact">
                    Schedule Consultation
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0B1445]"
                >
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-b">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#0072BC]">
                  {stat.value}
                </div>

                <div className="text-gray-600 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-[#0B1445] mb-4">
              Solutions Built for Accounting Firm Growth
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              We help firms create scalable operations, access global talent,
              and unlock sustainable growth opportunities.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border"
              >
                <service.icon className="h-10 w-10 text-[#0072BC] mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* INDIA SECTION */}
      <section className="py-24 bg-[#0B1445] text-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why India is the Future of Accounting Talent
            </h2>

            <p className="text-white/70 max-w-3xl mx-auto">
              Access world-class accounting professionals, reduce operating
              costs, and build scalable offshore teams that support long-term
              growth.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">

              <h3 className="text-[#F97316] font-semibold text-xl mb-4">
                Access Top Talent
              </h3>

              <p className="text-white/70">
                Connect with highly skilled accounting, tax, bookkeeping,
                and finance professionals.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">

              <h3 className="text-[#F97316] font-semibold text-xl mb-4">
                Scale Efficiently
              </h3>

              <p className="text-white/70">
                Expand your team without increasing operational complexity.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">

              <h3 className="text-[#F97316] font-semibold text-xl mb-4">
                Sustainable Growth
              </h3>

              <p className="text-white/70">
                Create long-term offshore capabilities aligned with your
                business objectives.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY 808 */}
      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-[#0B1445] mb-4">
              Why 808 Strategy
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Deep understanding of accounting firms",
              "Access to highly qualified offshore talent",
              "Scalable operating models",
              "Global delivery capabilities",
              "Strategic growth consulting",
              "Long-term partnership approach",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle className="h-6 w-6 text-[#0072BC]" />

                <span className="text-gray-700">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1445] mb-6">
            Ready to Scale Your Accounting Firm?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Discover how offshore staffing, operational excellence,
            and strategic growth planning can transform your business.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#F97316] hover:bg-[#EA580C]"
          >
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>

      </section>

    </div>
  )
}