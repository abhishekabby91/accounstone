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
    title: "Accounting Services",
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
    description: "Training programs for skills, compliance and performance.",
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
    <div className="min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">

        <motion.div
          animate={{
            scale: [1.1, 1.15, 1.1],
            x: ["-2%", "2%", "-2%"],
            y: ["-2%", "2%", "-2%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://cdn.corenexis.com/files/c/5473521720.jpg"
            alt="AU Corporate Hero"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4 max-w-5xl">

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="text-yellow-400">AU Corporate</span>
          </h1>

          <p className="text-white/80 mb-8">
            Growing Together
          </p>

          <Button asChild className="bg-yellow-400 text-black">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-yellow-400">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Business Solutions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="p-6 bg-white border rounded-xl hover:shadow-lg transition"
              >
                <service.icon className="text-yellow-500 mb-4" />
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  {service.description}
                </p>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= INDIA SECTION ================= */}
<section className="relative py-24 text-white overflow-hidden">

  <Image
    src="https://cdn.corenexis.com/files/c/5753696720.jpg"
    alt="Doing Business in India"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/60" />

  <div className="relative max-w-7xl mx-auto px-4 text-center">

    <h2 className="text-3xl sm:text-5xl font-bold mb-6">
      Doing Business in India
    </h2>

    <p className="text-white/80 text-sm sm:text-lg max-w-3xl mx-auto mb-12">
      AU Corporate enables global businesses to enter, establish, and scale in India with complete regulatory, tax, and compliance support.
    </p>

    {/* ✅ 3 ORIGINAL CONTENT BOXES */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">

      <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
        <h3 className="text-yellow-400 font-semibold mb-2">
          Why India
        </h3>
        <p className="text-white/70 text-sm">
          India offers one of the fastest-growing economies with strong global investment opportunities and a large consumer base.
        </p>
      </div>

      <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
        <h3 className="text-yellow-400 font-semibold mb-2">
          Incorporation
        </h3>
        <p className="text-white/70 text-sm">
          End-to-end assistance for company formation, regulatory approvals, and seamless setup in India.
        </p>
      </div>

      <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
        <h3 className="text-yellow-400 font-semibold mb-2">
          Market Entry
        </h3>
        <p className="text-white/70 text-sm">
          Strategic advisory for entering Indian markets, ensuring compliance, tax efficiency, and sustainable growth.
        </p>
      </div>

    </div>

    <Button asChild className="bg-yellow-400 text-black hover:scale-105 transition">
      <Link href="/why-india">
        Explore India Opportunity
      </Link>
    </Button>

  </div>
</section>
      {/* ================= BLOG CTA ================= */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Insights & Knowledge Hub</h2>
        <p className="text-gray-500 mb-6">
          Stay updated with taxation and compliance insights.
        </p>

        <Button asChild className="bg-yellow-400 text-black">
          <Link href="/blog">Explore Blog</Link>
        </Button>
      </section>

    </div>
  )
}