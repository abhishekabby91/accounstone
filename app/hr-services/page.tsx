import Link from 'next/link'
import { Button } from '@/components/ui/button'
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
  GraduationCap
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR Outsourcing & Payroll Services | AU Corporate',
  description:
    'End-to-end HR outsourcing, payroll, labour law compliance, recruitment, and workforce solutions for businesses operating in India.',
}

const services = [
  {
    icon: UserPlus,
    title: 'Talent Acquisition & Recruitment',
    description:
      'End-to-end recruitment solutions to help you build the right team in India.',
    features: [
      'Executive & leadership hiring',
      'Bulk & project-based recruitment',
      'Campus hiring programs',
      'Specialized & technical hiring',
      'Background verification',
    ],
  },
  {
    icon: Wallet,
    title: 'Payroll Processing & Compliance',
    description:
      'Accurate payroll management with full statutory and tax compliance.',
    features: [
      'Monthly payroll processing',
      'TDS, PF, ESIC compliance',
      'Tax computation & filings',
      'Leave & attendance integration',
      'Employee payslip & reporting',
    ],
  },
  {
    icon: Shield,
    title: 'HR Compliance & Outsourcing',
    description:
      'Complete HR outsourcing with strong focus on Indian labour law compliance.',
    features: [
      'Labour law compliance management',
      'HR policy drafting',
      'Employment contracts',
      'HR audits & compliance checks',
      'Employee grievance handling',
    ],
  },
]

const additionalServices = [
  {
    icon: TrendingUp,
    title: 'Performance Management',
    description:
      'Structured frameworks to track, evaluate and improve employee performance.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description:
      'Training programs designed to enhance workforce capability.',
  },
  {
    icon: Heart,
    title: 'Employee Engagement',
    description:
      'Strategies to improve retention, satisfaction and workplace culture.',
  },
  {
    icon: Award,
    title: 'Compensation Structuring',
    description:
      'Market-aligned salary benchmarking and compensation planning.',
  },
]

const stats = [
  { value: '50K+', label: 'Employees Managed' },
  { value: '200+', label: 'Clients Served' },
  { value: '99.9%', label: 'Payroll Accuracy' },
  { value: '15+', label: 'Years Experience' },
]

const benefits = [
  'Full compliance with Indian labour laws',
  'Reduction in HR operational costs',
  'Accurate and timely payroll processing',
  'Scalable HR support for growing businesses',
  'Single-point HR outsourcing partner',
  'Focus on core business operations',
]

export default function HRServicesPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              HR & Payroll Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-[#081a42]">India-Focused HR</span>
              <span className="text-gold"> Outsourcing Solutions</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              AU Corporate provides end-to-end HR outsourcing, payroll processing,
              and labour law compliance services for companies operating in India.
            </p>

            <p className="text-muted-foreground mb-8">
              We act as your extended HR arm, ensuring compliance, efficiency,
              and seamless workforce management while you focus on growing your business.
            </p>

            <Button asChild className="bg-gold text-black">
              <Link href="/contact">
                Speak to HR Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="hidden lg:flex bg-secondary rounded-2xl border p-10 items-center justify-center">
            <Users className="w-32 h-32 text-gold/40" />
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gold/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Core HR Services
            </h2>
            <p className="text-muted-foreground mt-4">
              Comprehensive HR solutions designed for compliance and efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 bg-white rounded-xl border hover:shadow-lg">

                <service.icon className="text-gold mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <CheckCircle2 className="text-gold h-4 w-4 mt-1" />
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
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((item) => (
            <div key={item.title} className="p-6 border rounded-xl text-center">
              <item.icon className="text-gold mx-auto mb-3" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Choose AU Corporate?
            </h2>

            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex gap-2">
                  <CheckCircle2 className="text-gold mt-1" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border rounded-xl p-10 text-center">
            <div className="text-5xl font-bold text-gold mb-3">40%</div>
            <p className="font-semibold">Cost Optimization</p>
            <p className="text-sm text-muted-foreground">
              Through efficient HR outsourcing
            </p>
          </div>

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

        <Button asChild className="bg-gold text-black">
          <Link href="/contact">
            Contact HR Team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

    </div>
  )
}