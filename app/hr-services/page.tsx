"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import {
  ArrowRight,
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

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4">

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-bold mb-4">Growing Together</h2>
            <p className="text-gray-600">
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  AU Corporate is a leading human resource consulting firm specializing in manpower solutions and comprehensive recruitment services. Established in 2016, we have grown into a trusted partner committed to fulfilling the hiring needs of both clients and candidates.
                </p>
                <p>
                  We provide customized recruitment solutions across diverse sectors including accounts & finance, IT consulting, healthcare, construction, oil & gas, manufacturing, infrastructure, hospitality, and higher education.
                  Our expertise spans a wide range of roles-from chartered accountants, MBAs, medical professionals, and engineers to skilled and unskilled workforce.
                </p>
                <p>
                  Our end-to-end recruitment approach ensures a seamless experience for both clients and candidates while building long-term partnerships through quality, integrity, and professionalism.
                  Our mission is to drive business success for our clients while supporting the career growth and aspirations of candidates across industries.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg"
                >
                  <p className="text-sm italic text-gray-700">
                    “Human is not a resource. A human being is a tremendous possibility.”
                  </p>
                </motion.div>
              </div>
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" className="rounded-xl" />
          </motion.div>

        </div>
      </section>
      {/* RECRUITMENT SOLUTIONS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          {/* PERMANENT RECRUITMENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#081a42]">
                Permanent Recruitment
              </h2>
              <p className="text-yellow-500 font-semibold mb-4">
                Connecting You with Top Talent
              </p>

              <p className="text-gray-600 mb-4">
                In today’s competitive job market, finding and retaining top talent is critical.
                We focus on selecting the right candidates aligned with your business goals.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Advanced hiring tools & assessment techniques</li>
                <li>• Industry-specific recruitment expertise</li>
                <li>• End-to-end recruitment lifecycle management</li>
                <li>• Culture-fit and skill-based hiring approach</li>
              </ul>
            </div>
          </motion.div>

          {/* CONTRACT STAFFING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#081a42]">
                Contract Staffing & Third-Party Payroll
              </h2>
              <p className="text-yellow-500 font-semibold mb-4">
                Flexible Workforce Solutions
              </p>

              <p className="text-gray-600 mb-4">
                We provide skilled professionals for temporary and project-based roles,
                helping businesses scale efficiently with flexibility.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quick deployment of contract workforce</li>
                <li>• Project-based & short-term staffing</li>
                <li>• Access to diverse talent pool</li>
                <li>• End-to-end staffing lifecycle support</li>
              </ul>
            </div>

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* PAYROLL OUTSOURCING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#081a42]">
                Payroll & HR Outsourcing
              </h2>
              <p className="text-yellow-500 font-semibold mb-4">
                Streamlining HR Operations
              </p>

              <p className="text-gray-600 mb-4">
                Our payroll and HR outsourcing solutions help businesses manage operations
                efficiently while ensuring full compliance and accuracy.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Accurate payroll processing & compliance</li>
                <li>• Employee onboarding & HR management</li>
                <li>• Labour law & statutory compliance</li>
                <li>• End-to-end HR outsourcing support</li>
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

      {/* CORE SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          {services.map((s) => (
            <motion.div key={s.title} whileHover={{ y: -10 }} className="p-6 bg-white rounded-xl shadow">
              <s.icon className="text-yellow-500 mb-4" />
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-sm">{s.description}</p>

              <ul className="mt-4 space-y-2">
                {s.features.map(f => (
                  <li key={f} className="flex gap-2 text-sm">
                    <CheckCircle2 className="text-yellow-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </section>

      {/* BANNER */}
      <section className="relative py-24 text-white text-center">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <h2 className="text-4xl font-bold">Recruit • Train • Retain</h2>
        </div>
      </section>

      {/* VALUE ADDED */}
      <section className="py-24 grid md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {additionalServices.map((item) => (
          <motion.div key={item.title} whileHover={{ scale: 1.05 }} className="p-6 border rounded-xl text-center">
            <item.icon className="text-yellow-500 mx-auto mb-2" />
            <h3>{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Simplify Your HR Operations</h2>
        <Button asChild className="bg-yellow-400 text-black">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>

    </div>
  )
}