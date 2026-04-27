"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import {
  ArrowRight,
} from "lucide-react"

/* STATS */
const stats = [
  { value: 5000, suffix: "+", label: "Employees Managed" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 99.9, suffix: "%", label: "Payroll Accuracy" },
  { value: 15, suffix: "+", label: "Years Experience" },
]

/* BASE ANIMATION */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

/* CUSTOM TRANSITIONS */
const imageLeft = {
  hidden: { opacity: 0, x: -120, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
}

const imageRight = {
  hidden: { opacity: 0, x: 120, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
}

const textLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
}

const textRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(latest) {
          setDisplay(Number(latest.toFixed(1)))
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return <span ref={ref}>{display}{suffix}</span>
}

export default function HRServicesPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* ================= HERO ================= */}
      <section className="relative py-24 min-h-[80vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            src="https://cdn.corenexis.com/files/c/8589382720.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-7xl mx-auto px-4 text-white"
        >

          <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-4">
            HR & Payroll Services
          </motion.h1>

          <motion.p variants={fadeUp} className="mb-6 text-white/80">
            End-to-end HR outsourcing, payroll processing, and compliance solutions.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button asChild className="bg-yellow-400 text-black hover:scale-105 transition">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>

          {/* QUOTE */}
          <motion.div
            variants={fadeUp}
            className="mt-10 border-l-4 border-yellow-400 pl-6 max-w-2xl"
          >
            <p className="text-lg md:text-xl italic text-white/90 leading-relaxed">
              “Human is not a resource. A human being is a tremendous possibility.
              If we approach human beings as resources, then we will never unfold
              their innate genius.”
            </p>

            <p className="mt-3 text-yellow-400 font-semibold">
              — Sadhguru
            </p>
          </motion.div>

        </motion.div>
      </section>

      {/* ================= MAIN SECTIONS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-32">

          {/* PERMANENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={imageLeft} whileHover={{ scale: 1.05 }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div variants={textRight}>
              <h2 className="text-3xl font-bold mb-4">Permanent Recruitment</h2>
              <p className="text-yellow-500 font-semibold mb-4">
                Connecting You with Top Talent
              </p>

              <p className="text-gray-600 mb-4">
                In today’s competitive job market, finding and retaining top talent is critical.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Advanced recruitment tools</li>
                <li>✔ Industry-specific hiring</li>
                <li>✔ Culture-fit selection</li>
                <li>✔ End-to-end lifecycle</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* CONTRACT (MATCHED WITH PAYROLL STYLE) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={textLeft}>
              <h2 className="text-3xl font-bold mb-4">
                Contract Staffing & Third-Party Payroll
              </h2>

              <p className="text-yellow-500 font-semibold mb-4">
                Flexible Workforce Solutions
              </p>

              <p className="text-gray-600 mb-4">
                We provide skilled professionals for temporary and project-based roles ensuring flexibility and efficiency.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Quick deployment</li>
                <li>✔ Project staffing</li>
                <li>✔ Diverse talent pool</li>
              </ul>
            </motion.div>

            <motion.div variants={imageRight} whileHover={{ scale: 1.05 }}>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* PAYROLL */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={imageLeft} whileHover={{ scale: 1.05 }}>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div variants={textRight}>
              <h2 className="text-3xl font-bold mb-4">
                Payroll & HR Outsourcing
              </h2>

              <p className="text-yellow-500 font-semibold mb-4">
                Streamlining HR Operations
              </p>

              <p className="text-gray-600 mb-4">
                Accurate payroll, compliance, and HR lifecycle management solutions tailored for business growth.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Payroll processing</li>
                <li>✔ Compliance</li>
                <li>✔ HR lifecycle</li>
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-yellow-50 text-center grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <p>{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Simplify Your HR Operations
        </h2>

        <Button asChild className="bg-yellow-400 text-black hover:scale-105 transition">
          <Link href="/contact">
            Contact Us <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </motion.section>

      {/* FLOATING BUTTON */}
      <a
        href="https://www.image2url.com/r2/default/documents/1777026304947-6e16b4f8-c2df-4c55-8d68-8d47a460bda0.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-50"
      >
        📄 <span className="font-medium">View HR Brochure</span>
      </a>

    </div>
  )
}