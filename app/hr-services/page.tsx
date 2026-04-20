import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Users,
  Wallet,
  Shield,
  TrendingUp,
  UserPlus,
  ClipboardCheck,
  Award,
  CheckCircle2,
  Briefcase,
  Heart,
  GraduationCap
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR Outsourcing & Payroll Services | AU Corporate',
  description: 'End-to-end HR outsourcing, payroll management, compliance, recruitment, and workforce solutions for businesses.',
}

const services = [
  {
    icon: UserPlus,
    title: 'Talent Acquisition & Recruitment',
    description: 'Strategic hiring solutions to help you attract, assess, and onboard the right talent efficiently.',
    features: [
      'Executive search & leadership hiring',
      'Bulk & project-based recruitment',
      'Campus hiring programs',
      'Technical & niche hiring',
      'Pre-employment verification',
    ],
  },
  {
    icon: Wallet,
    title: 'Payroll Processing & Management',
    description: 'Accurate, compliant, and scalable payroll solutions for organizations of all sizes.',
    features: [
      'Monthly payroll processing',
      'Statutory deductions & filings',
      'Tax computation & compliance',
      'Leave & attendance integration',
      'Employee self-service access',
    ],
  },
  {
    icon: Shield,
    title: 'HR Compliance & Outsourcing',
    description: 'Complete HR function outsourcing with strong focus on statutory compliance and governance.',
    features: [
      'Labour law compliance management',
      'HR policy drafting & implementation',
      'HR audits & risk assessment',
      'Employee relations management',
      'Grievance handling systems',
    ],
  },
]

const additionalServices = [
  {
    icon: TrendingUp,
    title: 'Performance Management Systems',
    description: 'Structured performance frameworks to drive productivity and accountability.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Customized training programs to enhance workforce capability and skills.',
  },
  {
    icon: Heart,
    title: 'Employee Engagement & Benefits',
    description: 'Designing and managing employee benefits to improve retention and satisfaction.',
  },
  {
    icon: Award,
    title: 'Compensation Benchmarking',
    description: 'Market-aligned salary structuring and compensation planning.',
  },
]

const stats = [
  { value: '50K+', label: 'Employees Managed' },
  { value: '200+', label: 'Clients Served' },
  { value: '99.9%', label: 'Payroll Accuracy' },
  { value: '15+', label: 'Years Experience' },
]

const benefits = [
  'Reduce HR operational costs significantly',
  'Ensure full statutory & labour compliance',
  'Access modern HR tech platforms',
  'Scalable HR support for growing businesses',
  'Improved employee lifecycle management',
  'Focus on core business operations',
]

export default function HRServicesPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* Hero */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              HR Outsourcing & Advisory
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              <span className="text-[#081a42]">HR & Payroll</span>
              <span className="text-gold"> Solutions</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Comprehensive HR outsourcing, payroll management, and compliance solutions designed to streamline workforce operations and improve organizational efficiency.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground font-semibold"
            >
              <Link href="/contact">
                Speak to HR Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="hidden lg:flex aspect-square rounded-2xl bg-secondary border border-border items-center justify-center">
            <Users className="w-32 h-32 text-gold/50" />
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Core Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              End-to-End HR Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 bg-white border rounded-xl hover:shadow-lg transition">

                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">
            Value Added Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Strategic HR Support
          </h2>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((item) => (
            <div key={item.title} className="p-6 bg-secondary border rounded-xl text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Outsource HR to Us?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border rounded-2xl p-10 text-center">
            <div className="text-6xl font-bold text-gold mb-4">40%</div>
            <p className="text-xl font-semibold">Cost Optimization</p>
            <p className="text-sm text-muted-foreground mt-2">
              Through efficient HR outsourcing
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Optimize Your HR Function?
        </h2>

        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Partner with our HR experts to streamline payroll, compliance, and workforce management.
        </p>

        <Button asChild size="lg" className="bg-gold text-black font-semibold">
          <Link href="/contact">
            Contact HR Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

    </div>
  )
}