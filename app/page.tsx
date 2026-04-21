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
    href: "/services",
  },
  {
    icon: Calculator,
    title: "Taxation & Regulatory",
    description: "Expert guidance on tax planning and compliance frameworks.",
    href: "/services",
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
]

/* STATS */
const stats = [
  { value: 500, suffix: "+", label: "Clients" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "", label: "Countries Served" },
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
      {display}{suffix}
    </span>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

        {/* BACKGROUND IMAGE */}
        <Image
          src="https://cdn.corenexis.com/files/c/5473521720.jpg"
          alt="AU Corporate Hero"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
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

      {/* DOING BUSINESS IN INDIA */}
      <section className="relative py-24 text-white overflow-hidden bg-[#081a42]">

        {/* Glow background */}
        <div className="absolute inset-0">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Doing Business in India
          </h2>

          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-10">
            AU Corporate enables global businesses to enter, establish, and scale in India with complete regulatory, tax and compliance support.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-yellow-400 font-semibold mb-2">Why India</h3>
              <p className="text-white/70 text-sm">
                Structured entry into India’s fast-growing economy.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-yellow-400 font-semibold mb-2">Compliance Setup</h3>
              <p className="text-white/70 text-sm">
                End-to-end regulatory, tax and legal setup support.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-yellow-400 font-semibold mb-2">Scalable Growth</h3>
              <p className="text-white/70 text-sm">
                Long-term expansion and operational scaling strategy.
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