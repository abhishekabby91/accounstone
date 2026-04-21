"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import {
  ArrowRight,
  Users,
  Wallet,
  Shield,
  TrendingUp,
  UserPlus,
  Award,
  CheckCircle2,
  Heart,
  GraduationCap,
} from "lucide-react"

/* HERO POINTS */
const heroPoints = [
  "End-to-end HR outsourcing solutions",
  "Payroll & statutory compliance management",
  "Scalable workforce solutions for India operations",
]

/* CORE SERVICES */
const services = [
  {
    icon: UserPlus,
    title: "Talent Acquisition & Recruitment",
    description:
      "End-to-end recruitment solutions to help you build the right team in India.",
    features: [
      "Executive & leadership hiring",
      "Bulk & project-based recruitment",
      "Campus hiring programs",
      "Specialized & technical hiring",
      "Background verification",
    ],
  },
  {
    icon: Wallet,
    title: "Payroll Processing & Compliance",
    description:
      "Accurate payroll management with full statutory and tax compliance.",
    features: [
      "Monthly payroll processing",
      "TDS, PF, ESIC compliance",
      "Tax computation & filings",
      "Leave & attendance integration",
      "Employee payslip & reporting",
    ],
  },
  {
    icon: Shield,
    title: "HR Compliance & Outsourcing",
    description:
      "Complete HR outsourcing with strong focus on Indian labour law compliance.",
    features: [
      "Labour law compliance management",
      "HR policy drafting",
      "Employment contracts",
      "HR audits & compliance checks",
      "Employee grievance handling",
    ],
  },
]

/* VALUE ADDED */
const additionalServices = [
  {
    icon: TrendingUp,
    title: "Performance Management",
    description: "Structured frameworks to track and improve employee performance.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Training programs designed to enhance workforce capability.",
  },
  {
    icon: Heart,
    title: "Employee Engagement",
    description: "Improve retention, satisfaction and workplace culture.",
  },
  {
    icon: Award,
    title: "Compensation Structuring",
    description: "Market-aligned salary benchmarking and planning.",
  },
]

/* STATS */
const stats = [
  { value: 5000, suffix: "+", label: "Employees Managed" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 99.9, suffix: "%", label: "Payroll Accuracy" },
  { value: 15, suffix: "+", label: "Years Experience" },
]

function CountUp({
  value,
  suffix = "",
}: {
  value: number
  suffix?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplay(Number(latest.toFixed(1)))
        },
      })

      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="transition-all duration-500">
      {display}{suffix}
    </span>
  )
}

export default function HRServicesPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative py-24 min-h-[80vh] flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.corenexis.com/files/c/8589382720.jpg"
            alt="HR Outsourcing India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center text-white">

          <div>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
              HR & Payroll Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              India-Focused HR Outsourcing Solutions
            </h1>

            <p className="text-white/80 text-lg mb-6">
              AU Corporate provides end-to-end HR outsourcing, payroll processing,
              and labour law compliance services for companies operating in India.
            </p>

            <p className="text-white/70 mb-8">
              We act as your extended HR arm, ensuring compliance, efficiency,
              and seamless workforce management while you focus on growth.
            </p>

            <Button asChild className="bg-yellow-400 text-black">
              <Link href="/contact">
                Speak to HR Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="mt-6 space-y-2 text-sm text-white/80">
              {heroPoints.map((p) => (
                <div key={p} className="flex gap-2 items-start">
                  <CheckCircle2 className="h-4 w-4 text-yellow-400 mt-1" />
                  {p}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-black">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Core HR Services</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 bg-white border rounded-xl">

                <service.icon className="text-yellow-500 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-yellow-500 mt-1" />
                      {f}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VALUE ADDED */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6">

          {additionalServices.map((item) => (
            <div key={item.title} className="p-6 border rounded-xl text-center">

              <item.icon className="text-yellow-500 mx-auto mb-3" />

              <h3 className="font-semibold">{item.title}</h3>

              <p className="text-sm text-muted-foreground mt-2">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Simplify Your HR Operations in India
        </h2>

        <p className="text-muted-foreground mb-8">
          Let us manage your HR, payroll, and compliance while you focus on growth.
        </p>

        <Button asChild className="bg-yellow-400 text-black">
          <Link href="/contact">
            Contact us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

    </div>
  )
}