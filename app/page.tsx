"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import {
  Calculator,
  FileCheck,
  Scale,
  Users,
  Building2,
  ArrowRight,
  GraduationCap,
} from "lucide-react"

/* SERVICES */
const services = [
  {
    icon: Building2,
    title: "Global Support Services",
    description: "Scalable business process outsourcing to optimize your operations.",
    href: "/outsourcing",
  },
  {
    icon: FileCheck,
    title: "Accounting & Assurance",
    description: "Comprehensive accounting services and financial assurance.",
    href: "/services/accounting-assurance",
  },
  {
    icon: Calculator,
    title: "Taxation & Regulatory",
    description: "Expert guidance on tax planning and compliance frameworks.",
    href: "/services/taxation-regulatory",
  },
  {
    icon: Scale,
    title: "Arbitration Services",
    description: "Professional dispute resolution and legal advisory.",
    href: "/arbitration-services",
  },
  {
    icon: Users,
    title: "HR & Payroll Solutions",
    description: "End-to-end HR and payroll management services.",
    href: "/hr-services",
  },
  {
    icon: GraduationCap,
    title: "Training & Workshops",
    description:
      "Professional training programs and workshops to enhance skills, compliance, and business performance.",
    href: "/services/training-workshops",
  },
]

/* STATS */
const stats = [
  { value: 500, suffix: "+", label: "Client Served" },
  { value: 30, suffix: "+", label: "Collective Professional Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
]

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(latest) {
          setDisplay(Math.floor(latest))
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

        <Image
          src="https://cdn.corenexis.com/files/c/5473521720.jpg"
          alt="AU Corporate Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 max-w-5xl">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-yellow-400">AU Corporate</span>
          </h1>

          <p className="text-white/80 mb-8">
            AU Corporate is your trusted advisory and professional services firm delivering integrated solutions across consulting, taxation, HR, outsourcing, and dispute resolution.
          </p>

          <Button asChild className="bg-yellow-400 text-black">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-yellow-400">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Comprehensive Business Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={service.href}
                  className="group block p-8 bg-white border rounded-xl hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-yellow-400/10 flex items-center justify-center mb-6 rounded-lg">
                    <service.icon className="text-yellow-500 h-7 w-7" />
                  </div>

                  <h3 className="font-semibold group-hover:text-yellow-500">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {service.description}
                  </p>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* RISK MANAGEMENT SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Risk Management Services
            </h2>
            <p className="text-gray-500 mt-3">
              Integrated risk advisory and assurance solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Risk Management</h3>
              <p className="text-sm text-gray-500">
                Enterprise risk identification, assessment, and mitigation framework.
              </p>
            </div>

            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Forensic Services</h3>
              <p className="text-sm text-gray-500">
                Fraud detection, investigation, and financial analysis support.
              </p>
            </div>

            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Special Audit / Review</h3>
              <p className="text-sm text-gray-500">
                Focused audit engagements for specific risk or compliance areas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DOING BUSINESS IN INDIA */}
      <section className="relative py-24 text-white overflow-hidden">

        <Image
          src="https://cdn.corenexis.com/files/c/5753696720.jpg"
          alt="Doing Business in India"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Doing Business in India
          </h2>

          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-10">
            AU Corporate enables global businesses to enter, establish, and scale in India with complete regulatory, tax, and compliance support.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md">
              <h3 className="text-yellow-400 font-semibold mb-2">Why India</h3>
              <p className="text-white/70 text-sm">
                Structured entry into India’s fast-growing economy.
              </p>
            </div>

            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md">
              <h3 className="text-yellow-400 font-semibold mb-2">Company Incorporation</h3>
              <p className="text-white/70 text-sm">
                Seamless business setup and regulatory compliance support in India.
              </p>
            </div>

            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md">
              <h3 className="text-yellow-400 font-semibold mb-2">Growing Together</h3>
              <p className="text-white/70 text-sm">
                Partner with AU Corporate for long-term growth, operational scalability, and strategic expansion.
              </p>
            </div>

          </div>

          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/why-india">
              Explore India Opportunity
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </section>

    </div>
  )
}