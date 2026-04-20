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
  ArrowRight,
  Globe,
  TrendingUp,
  Award
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

      {/* HERO SECTION WITH IMAGE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

        {/* Background Image */}
        <Image
          src="https://cdn.corenexis.com/files/c/6282821720.jpg"
          alt="AU Corporate Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium">
              Global Business Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            <span className="text-[#FFD700]">AU Corporate</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#081a42] bg-white/80 inline-block px-3 py-1 rounded tracking-[0.45em] uppercase font-medium mb-6">
            Growing Together
          </p>

          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            AU Corporate is a trusted advisory partner providing consulting, outsourcing, HR, taxation, and arbitration solutions focused on compliance, operational excellence, and long-term business value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg"
            >
              <Link href="/career">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-[#081a42] hover:bg-white/90 font-semibold px-8 py-6 text-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* STATS */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
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

      {/* SERVICES SECTION */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
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
                className="group p-8 rounded-xl bg-white border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
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