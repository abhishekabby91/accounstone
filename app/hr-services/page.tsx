"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

/* HERO POINTS */
const heroPoints = [
  "End-to-end HR outsourcing solutions",
  "Payroll & statutory compliance management",
  "Scalable workforce solutions for India operations",
]

/* STATS */
const stats = [
  { value: 5000, suffix: "+", label: "Employees Managed" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 99.9, suffix: "%", label: "Payroll Accuracy" },
  { value: 15, suffix: "+", label: "Years Experience" },
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

      {/* HERO */}
      <section className="relative py-24 min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://cdn.corenexis.com/files/c/8589382720.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">HR & Payroll Services</h1>
          <p className="mb-6 text-white/80">
            End-to-end HR outsourcing, payroll processing, and compliance solutions.
          </p>

          <Button asChild className="bg-yellow-400 text-black">
            <Link href="/contact">Get Started</Link>
          </Button>

          <div className="mt-6 space-y-2">
            {heroPoints.map((p) => (
              <div key={p} className="flex gap-2">
                <CheckCircle2 className="text-yellow-400" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SECTIONS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-32">

          {/* PERMANENT RECRUITMENT */}
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" className="rounded-2xl shadow-lg hover:scale-105 transition duration-700" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Permanent Recruitment</h2>
              <p className="text-yellow-500 font-semibold mb-4">Connecting You with Top Talent</p>

              <p className="text-gray-600 mb-4">
                In today’s competitive job market, finding and retaining top talent is critical.
                We focus on selecting candidates who align with your business goals rather than just filling positions.
              </p>

              <p className="text-gray-600 mb-4">
                Our innovative recruitment solutions leverage modern tools and industry insights to ensure efficient hiring.
                We match candidates based on both technical expertise and cultural fit.
              </p>

              <p className="text-gray-600 mb-4">
                We provide end-to-end recruitment support including access to a diverse talent pool and flexible hiring models.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Advanced recruitment tools & assessments</li>
                <li>✔ Industry-specific hiring expertise</li>
                <li>✔ Culture-fit candidate selection</li>
                <li>✔ End-to-end recruitment lifecycle</li>
                <li>✔ Long-term talent engagement</li>
              </ul>
            </div>
          </motion.div>

          {/* CONTRACT STAFFING */}
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-4">Contract Staffing & Third-Party Payroll</h2>
              <p className="text-yellow-500 font-semibold mb-4">Flexible Workforce Solutions</p>

              <p className="text-gray-600 mb-4">
                In a dynamic business environment, having access to the right talent at the right time is essential.
                We provide skilled professionals for temporary and project-based roles.
              </p>

              <p className="text-gray-600 mb-4">
                Our tailored staffing solutions ensure quick deployment and alignment with your business requirements.
              </p>

              <p className="text-gray-600 mb-4">
                We offer continuous support and maintain strong relationships with contract staff to ensure performance and satisfaction.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Quick deployment of skilled professionals</li>
                <li>✔ Project-based staffing solutions</li>
                <li>✔ Access to diverse talent pool</li>
                <li>✔ End-to-end staffing lifecycle</li>
                <li>✔ Ongoing workforce support</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" className="rounded-2xl shadow-lg hover:scale-105 transition duration-700" />
            </div>
          </motion.div>

          {/* PAYROLL */}
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" className="rounded-2xl shadow-lg hover:scale-105 transition duration-700" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Payroll & HR Outsourcing</h2>
              <p className="text-yellow-500 font-semibold mb-4">Streamlining HR Operations</p>

              <p className="text-gray-600 mb-4">
                Our payroll services ensure accurate and timely processing including salary calculations, compliance, and benefits.
              </p>

              <p className="text-gray-600 mb-4">
                We act as an extension of your HR team, handling recruitment, onboarding, compliance, and performance management.
              </p>

              <p className="text-gray-600 mb-4">
                Our flexible outsourcing solutions are designed to enhance efficiency and support business growth.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Accurate payroll processing</li>
                <li>✔ Tax & statutory compliance</li>
                <li>✔ HR lifecycle management</li>
                <li>✔ Scalable outsourcing solutions</li>
                <li>✔ Expert HR support</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-yellow-50 text-center grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Simplify Your HR Operations</h2>
        <Button asChild className="bg-yellow-400 text-black">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
      {/* FLOATING BROCHURE BUTTON */}
      <a
        href="http://digil.ink/l/23507UkphJE"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-50"
      >
        📄 <span className="font-medium">View Brochure</span>
      </a>

    </div>
  )
}