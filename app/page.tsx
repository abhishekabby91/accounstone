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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

        <Image
          src="https://cdn.corenexis.com/files/c/5473521720.jpg"
          alt="AU Corporate Hero"
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="absolute w-[450px] h-[450px] bg-yellow-400/10 blur-3xl rounded-full top-[-120px] left-[-120px] animate-pulse" />
        <div className="absolute w-[350px] h-[350px] bg-blue-400/10 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse" />

        <div className="relative z-10 text-center px-4 max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            <span className="text-yellow-400 drop-shadow-lg">
              AU Corporate
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white/80 mb-8 text-lg max-w-3xl mx-auto"
          >
            Growing Together
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild className="bg-yellow-400 text-black hover:scale-105 transition">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
              >
                <div className="text-3xl font-bold text-yellow-400">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
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
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link
                  href={service.href}
                  className="group block p-8 bg-white border rounded-xl hover:shadow-2xl transition-all"
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

      {/* ================= INDIA SECTION ================= */}
      <section className="relative py-24 text-white overflow-hidden">

        <Image
          src="https://cdn.corenexis.com/files/c/5753696720.jpg"
          alt="Doing Business in India"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Doing Business in India
          </motion.h2>

          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-10">
            AU Corporate enables global businesses to enter, establish, and scale in India with complete regulatory, tax, and compliance support.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:scale-105 transition"
              >
                <h3 className="text-yellow-400 font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Button asChild className="bg-yellow-400 text-black hover:scale-105 transition">
            <Link href="/why-india">
              Explore India Opportunity
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </section>

      {/* ================= BLOG CTA ================= */}
      <section className="py-20 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-4">
            Insights & Knowledge Hub
          </h2>

          <p className="text-gray-500 mb-8">
            Stay updated with expert insights on taxation, compliance, and business strategies in India.
          </p>

          <Button asChild className="bg-yellow-400 text-black hover:scale-105 transition">
            <Link href="/blog">
              Explore Our Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}