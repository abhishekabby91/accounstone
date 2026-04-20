"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Calculator,
  FileCheck,
  Scale,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react"

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
      "Comprehensive accounting services and financial assurance for stakeholder confidence.",
    href: "/services",
  },
  {
    icon: Calculator,
    title: "Taxation & Regulatory",
    description:
      "Expert guidance on tax planning, compliance, and regulatory frameworks.",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Strategic risk management solutions to protect and grow your business.",
    href: "/services",
  },
  {
    icon: Scale,
    title: "Arbitration Services",
    description:
      "Professional dispute resolution and legal advisory for complex corporate matters.",
    href: "/arbitration-services",
  },
  {
    icon: Users,
    title: "HR & Payroll Solutions",
    description:
      "End-to-end human resource management and payroll processing services.",
    href: "/hr-services",
  },
]

const stats = [
  { value: "500+", label: "Global Clients" },
  { value: "25+", label: "Years Experience" },
  { value: "15", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20">

        <Image
          src="https://cdn.corenexis.com/files/c/6282821720.jpg"
          alt="AU Corporate Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
            <span className="text-[#FFD700]">AU Corporate</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#081a42] bg-white/90 inline-block px-3 py-1 rounded tracking-[0.35em] uppercase font-medium mb-5">
            Growing Together
          </p>

          <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed px-2">
            AU Corporate is your trusted advisory and professional services firm delivering integrated solutions across consulting, taxation, HR, outsourcing, and dispute resolution, enabling sustainable client growth through structured execution, regulatory expertise, integrity, and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">



            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3"
            >
              <Link href="/contact">Get Started</Link>
            </Button>

          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">

            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-yellow-400">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ✅ NEW BANNER SECTION (YOU ASKED FOR THIS) */}
      <section className="py-12 bg-[#081a42] text-white text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Doing Business in India
        </h2>

        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Insights, regulatory framework, and strategic guidance for global companies entering and expanding in India.
        </p>

        <Button asChild className="bg-[#FFD700] text-black hover:bg-yellow-500 font-semibold">
          <Link href="/why-india" className="flex items-center">
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive Business Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              We deliver integrated consulting, compliance, and operational solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 rounded-xl bg-white border hover:border-yellow-400 transition hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-lg bg-yellow-400/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-yellow-500" />
                </div>

                <h3 className="text-xl font-semibold group-hover:text-yellow-500">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm mt-2">
                  {service.description}
                </p>
              </Link>
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}