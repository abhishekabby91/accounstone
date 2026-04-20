import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Shield,
  Calculator,
  FileCheck,
  Scale,
  Users,
  Building2,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Risk & Technology Consulting',
    description: 'Strategic risk management and technology solutions to protect and grow your business.',
    href: '/services',
  },
  {
    icon: Calculator,
    title: 'Taxation & Regulatory Services',
    description: 'Expert guidance on tax planning, compliance, and regulatory frameworks.',
    href: '/services',
  },
  {
    icon: FileCheck,
    title: 'Accounting & Assurance',
    description: 'Comprehensive accounting services and financial assurance for stakeholder confidence.',
    href: '/services',
  },
  {
    icon: Scale,
    title: 'Arbitration Services',
    description: 'Professional dispute resolution and legal advisory for complex corporate matters.',
    href: '/arbitration-services',
  },
  {
    icon: Users,
    title: 'HR & Payroll Solutions',
    description: 'End-to-end human resource management and payroll processing services.',
    href: '/hr-services',
  },
  {
    icon: Building2,
    title: 'Outsourcing Solutions',
    description: 'Scalable business process outsourcing to optimize your operations.',
    href: '/outsourcing',
  },
]

const stats = [
  { value: '500+', label: 'Global Clients' },
  { value: '25+', label: 'Years Experience' },
  { value: '15', label: 'Countries Served' },
  { value: '98%', label: 'Client Retention' },
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

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-xs sm:text-sm font-medium">
              Global Business Solutions
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
            <span className="text-[#FFD700]">AU Corporate</span>
          </h1>

          <p className="text-[10px] sm:text-sm md:text-base text-[#081a42] bg-white/90 inline-block px-3 py-1 rounded tracking-[0.35em] uppercase font-medium mb-5">
            Growing Together
          </p>

          <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed px-2">
            AU Corporate is a trusted advisory partner providing consulting, outsourcing, HR, taxation, and arbitration solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">

            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3"
            >
              <Link href="/career">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>

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

      {/* 🔥 CLIENT BANNER (AU STYLE) */}
      <section className="py-8 bg-white border-y border-border overflow-hidden">

        <div className="relative whitespace-nowrap">

          <div className="flex gap-10 animate-scroll">

            {[
              "India",
              "UAE",
              "USA",
              "UK",
              "Singapore",
              "Germany",
              "Australia",
              "Canada",
              "Europe",
            ].concat([
              "India",
              "UAE",
              "USA",
              "UK",
              "Singapore",
              "Germany",
              "Australia",
              "Canada",
              "Europe",
            ]).map((country, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-[#081a42]"
              >
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                {country}
              </div>
            ))}

          </div>

        </div>

        <style jsx>{`
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 18s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Business Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver integrated consulting, compliance, and operational solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 rounded-xl bg-white border border-border hover:border-yellow-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-lg bg-yellow-400/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-yellow-500" />
                </div>

                <h3 className="text-xl font-semibold group-hover:text-yellow-500">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm">
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