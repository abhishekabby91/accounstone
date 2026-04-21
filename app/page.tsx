"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Shield,
  Calculator,
  FileCheck,
  Scale,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Global Support Services",
    description:
      "Scalable business process outsourcing to optimize your operations.",
    href: "/outsourcing",
  },
  {
    icon: FileCheck,
    title: "Accounting & Assurance",
    description:
      "Comprehensive accounting services and financial assurance for stakeholder confidence.",
    href: "/services",
  },
  {
    icon: Calculator,
    title: "Taxation & Regulatory",
    description:
      "Expert guidance on tax planning, compliance, and regulatory frameworks.",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Strategic risk management solutions to protect and grow your business.",
    href: "/services",
  },
  {
    icon: Scale,
    title: "Arbitration Services",
    description:
      "Professional dispute resolution and legal advisory for complex corporate matters.",
    href: "/arbitration-services",
  },
  {
    icon: Users,
    title: "HR & Payroll Solutions",
    description:
      "End-to-end human resource management and payroll processing services.",
    href: "/hr-services",
  },
]

const stats = [
  { value: "500+", label: "Clients" },
  { value: "25+", label: "Years Experience" },
  { value: "15", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20">

        <Image
          src="https://cdn.corenexis.com/files/c/6282821720.jpg"
          alt="AU Corporate Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-[#FFD700]">AU Corporate</span>
          </h1>

          <p className="text-sm text-[#081a42] bg-white/90 inline-block px-3 py-1 rounded tracking-widest uppercase mb-6">
            Growing Together
          </p>

          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            AU Corporate is your trusted advisory and professional services firm delivering integrated solutions across consulting, taxation, HR, outsourcing, and dispute resolution.
          </p>

          <Button asChild className="bg-yellow-400 text-black">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-yellow-400">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 SCROLL ANIMATION SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-16 bg-[#081a42] text-white text-center"
      >

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Doing Business in India
        </h2>

        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Planning to set up your business in India? AU Corporate is your reliable advisory, compliance and end-to-end execution partner.
        </p>

        <Button asChild className="bg-[#FFD700] text-black hover:bg-yellow-500">
          <Link href="/why-india" className="flex items-center">
            Why India
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

      </motion.section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Comprehensive Business Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-white border rounded-xl hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-yellow-400/10 flex items-center justify-center mb-6">
                  <service.icon className="text-yellow-500" />
                </div>

                <h3 className="font-semibold group-hover:text-yellow-500">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {service.description}
                </p>
              </Link>
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}