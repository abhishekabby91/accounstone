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
    description: "Skills, compliance & performance training.",
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

        {/* Background - UPDATED WITH LOOP ANIMATION */}
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

        {/* Overlay */}
        <motion.div
          animate={{ opacity: [0.6, 0.75, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
        />

        {/* Glow effects */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-yellow-400/10 blur-3xl rounded-full top-[-120px] left-[-120px]"
        />

        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-blue-400/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]"
        />

        {/* Content */}
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild className="bg-yellow-400 text-black hover:scale-105 active:scale-95 transition">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link
                  href={service.href}
                  className="group block p-5 sm:p-8 bg-white border rounded-xl hover:shadow-2xl transition-all"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400/10 flex items-center justify-center mb-5 sm:mb-6 rounded-lg">
                    <service.icon className="text-yellow-500 h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="font-semibold group-hover:text-yellow-500 text-sm sm:text-base">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {service.description}
                  </p>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= INDIA SECTION ================= */}
      <section className="relative py-16 sm:py-24 text-white overflow-hidden">

        <Image
          src="https://cdn.corenexis.com/files/c/5753696720.jpg"
          alt="Doing Business in India"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
            Doing Business in India
          </h2>

          <p className="text-white/80 text-sm sm:text-lg max-w-3xl mx-auto mb-10 px-2">
            AU Corporate enables global businesses to enter, establish, and scale in India with complete regulatory, tax, and compliance support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {[
              { title: "Why India", desc: "High-growth economy with global opportunities." },
              { title: "Incorporation", desc: "Seamless setup & compliance in India." },
              { title: "Market Entry & Growth", desc: "Long-term expansion & advisory support." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-5 sm:p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md"
              >
                <h3 className="text-yellow-400 font-semibold mb-2 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Button asChild className="bg-yellow-400 text-black hover:scale-105 active:scale-95 transition">
            <Link href="/why-india">
              Explore India Opportunity
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </section>

      {/* ================= BLOG CTA ================= */}
      <section className="py-16 sm:py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Insights & Knowledge Hub
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mb-8">
            Stay updated with expert insights on taxation, compliance, and business strategies in India.
          </p>

          <Button asChild className="bg-yellow-400 text-black hover:scale-105 active:scale-95 transition">
            <Link href="/blog">
              Explore Our Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </section>

    </div>
  )
}