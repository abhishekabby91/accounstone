"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Globe,
  Briefcase,
  Building2,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

export default function IndiaExpansionPage() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Market Entry Strategy",
      desc: "Evaluate market opportunities, competition, customer demand, and go-to-market models.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Entity Setup & Structuring",
      desc: "Support for subsidiaries, branch offices, liaison offices, and joint ventures.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Regulatory & Compliance",
      desc: "Guidance on FEMA, RBI, GST, taxation, registrations, and ongoing compliance.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partner & Distributor Search",
      desc: "Identify strategic partners, distributors, suppliers, and local alliances.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Investment Advisory",
      desc: "Support for foreign investors, acquisitions, strategic investments, and expansion planning.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth & Scaling",
      desc: "Operational setup, workforce planning, growth strategies, and business scaling support.",
    },
  ]

  const framework = [
    "Assess Market Opportunity",
    "Develop Entry Strategy",
    "Establish Legal Structure",
    "Ensure Regulatory Compliance",
    "Build Local Operations",
    "Scale & Grow",
  ]

  const industries = [
    {
      title: "Technology & SaaS",
      image: "/images/india-expansion/technology.jpg",
    },
    {
      title: "Manufacturing",
      image: "/images/india-expansion/manufacturing.jpg",
    },
    {
      title: "Healthcare",
      image: "/images/india-expansion/healthcare.jpg",
    },
    {
      title: "Financial Services",
      image: "/images/india-expansion/finance.jpg",
    },
    {
      title: "Renewable Energy",
      image: "/images/india-expansion/renewable.jpg",
    },
    {
      title: "Consumer & Retail",
      image: "/images/india-expansion/retail.jpg",
    },
  ]

  const benefits = [
    "Integrated strategic and execution support",
    "Deep understanding of Indian regulations",
    "Cross-border business advisory expertise",
    "Market entry and expansion specialists",
    "Investor and stakeholder alignment",
    "Long-term growth and scaling support",
  ]

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#081a42] text-white py-28">

        <div className="absolute inset-0 bg-gradient-to-r from-[#081a42] via-[#0b245c] to-[#081a42]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            India Expansion Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-white/80"
          >
            Helping global businesses establish, expand, and succeed in India
            through strategic advisory, market entry planning, regulatory
            support, and execution-focused growth solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#081a42] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              How We Help
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              End-to-end support for international businesses entering and
              expanding in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="border rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="text-[#081a42] mb-5">
                  {service.icon}
                </div>

                <h3 className="font-semibold text-xl mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Our India Expansion Framework
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-14">
            A structured approach designed to reduce risk and accelerate
            successful market entry and growth.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            {framework.map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-xl border p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#081a42] text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>

                <h3 className="font-medium text-sm">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Industries Driving Growth in India
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              We support organizations across high-growth sectors that continue
              to attract investment and expansion opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl overflow-hidden border hover:shadow-xl transition"
              >
                <div className="relative h-56">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg">
                    {industry.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY 808 STRATEGY */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why 808 Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#081a42] mt-1" />

                <p>{benefit}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Expand into India with Confidence
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            From market assessment and business setup to compliance,
            partnerships, and growth execution, 808 Strategy provides
            the expertise needed to build a successful presence in India.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#081a42] px-7 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </section>

    </div>
  )
}
```
