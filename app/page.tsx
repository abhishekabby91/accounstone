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
    description: "Training for skills, compliance & performance.",
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
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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

        <motion.div
          animate={{ opacity: [0.6, 0.75, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
        />

        <div className="relative z-10 text-center px-4 max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4"
          >
            <span className="text-yellow-400 drop-shadow-lg">
              AU Corporate
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg text-white/80 mb-8 max-w-3xl mx-auto px-2"
          >
            Growing Together
          </motion.p>

          <Button asChild className="bg-yellow-400 text-black hover:scale-105 transition">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Comprehensive Business Solutions
            </h2>
          </div>

          {/* 🔥 FIXED GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">

            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="group flex flex-col h-full p-5 sm:p-8 bg-white border rounded-xl hover:shadow-2xl transition-all"
                >

                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400/10 flex items-center justify-center mb-5 sm:mb-6 rounded-lg">
                    <service.icon className="text-yellow-500 h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="font-semibold group-hover:text-yellow-500 text-sm sm:text-base min-h-[40px] leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 mt-2 flex-1">
                    {service.description}
                  </p>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}