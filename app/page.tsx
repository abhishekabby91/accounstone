"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import {
  Shield,
  Calculator,
  FileCheck,
  Scale,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react"

/* SERVICES */
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
      "Comprehensive accounting services and financial assurance.",
    href: "/services",
  },
  {
    icon: Calculator,
    title: "Taxation & Regulatory",
    description:
      "Expert guidance on tax planning and compliance frameworks.",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Strategic risk solutions to protect and grow your business.",
    href: "/services",
  },
  {
    icon: Scale,
    title: "Arbitration Services",
    description:
      "Professional dispute resolution and legal advisory.",
    href: "/arbitration-services",
  },
  {
    icon: Users,
    title: "HR & Payroll Solutions",
    description:
      "End-to-end HR and payroll management services.",
    href: "/hr-services",
  },
]

/* STATS */
const stats = [
  { value: 500, suffix: "+", label: "Clients" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
]

/* COUNT UP */
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
          src="https://cdn.corenexis.com/files/c/6282821720.jpg"
          alt="AU Corporate"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            <span className="text-yellow-400">AU Corporate</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 mb-8"
          >
            AU Corporate is your trusted advisory and professional services firm delivering integrated solutions across consulting, taxation, HR, outsourcing, and dispute resolution, enabling sustainable client growth through structured execution, regulatory expertise, integrity, and efficiency.
          </motion.p>

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

      {/* WHY INDIA */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 bg-[#081a42] text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Doing Business in India
        </h2>

        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          AU Corporate helps global companies set up and scale in India.
        </p>

        <Button asChild className="bg-yellow-400 text-black">
          <Link href="/why-india">
            Why India <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold">
              Comprehensive Business Solutions
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={service.href}
                  className="group block p-8 bg-white border border-gray-200 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 relative overflow-hidden"
                >

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-yellow-400/10 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-yellow-400/10 flex items-center justify-center mb-6 rounded-lg">
                      <service.icon className="text-yellow-500 h-7 w-7" />
                    </div>

                    <h3 className="font-semibold group-hover:text-yellow-500">
                      {service.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-2">
                      {service.description}
                    </p>
                  </div>

                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  )
}