import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  GraduationCap,
  Globe,
  Building2,
  DollarSign,
  Zap
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why India | AU Corporate',
  description: 'Understand why India is a preferred destination for foreign investment, business expansion, and global growth.',
}

const advantages = [
  {
    icon: Users,
    title: 'Large Consumer Market',
    value: '1.4B+',
    description: 'Access to one of the world’s largest and fastest-growing consumer markets across multiple industries.',
  },
  {
    icon: GraduationCap,
    title: 'Skilled Workforce',
    value: '5M+',
    description: 'A vast pool of qualified professionals across finance, engineering, technology, and management.',
  },
  {
    icon: DollarSign,
    title: 'Cost Advantage',
    value: '50%+',
    description: 'Significant cost efficiencies in manpower, operations, and infrastructure compared to developed economies.',
  },
  {
    icon: Clock,
    title: 'Ease of Doing Business',
    value: 'Improving',
    description: 'Ongoing regulatory reforms and digitization improving transparency and ease of business operations.',
  },
]

const stats = [
  { value: '$3.5T+', label: 'GDP Size' },
  { value: '5th', label: 'Largest Economy' },
  { value: '100+', label: 'Unicorn Startups' },
  { value: 'Strong', label: 'FDI Inflows' },
]

const reasons = [
  {
    icon: Globe,
    title: 'Favorable Investment Environment',
    description:
      'India provides a stable and evolving regulatory ecosystem that supports foreign investment across sectors.',
    points: [
      '100% FDI permitted in multiple sectors under automatic route',
      'Robust legal and regulatory framework',
      'Government incentives for foreign investors',
      'Growing international trade partnerships',
    ],
  },
  {
    icon: TrendingUp,
    title: 'High Growth Potential',
    description:
      'India continues to be one of the fastest-growing major economies, offering long-term growth opportunities.',
    points: [
      'Rapid urbanization and rising middle class',
      'Increasing consumption across sectors',
      'Strong domestic demand',
      'Expanding digital and startup ecosystem',
    ],
  },
  {
    icon: Building2,
    title: 'Regulatory & Compliance Framework',
    description:
      'Structured compliance systems ensure transparency and governance for foreign companies operating in India.',
    points: [
      'Company law and FEMA regulations for foreign entities',
      'GST-based indirect tax regime',
      'Defined corporate compliance requirements',
      'Robust audit and reporting standards',
    ],
  },
  {
    icon: Zap,
    title: 'Digital & Infrastructure Growth',
    description:
      'Rapid digitalization and infrastructure development support efficient and scalable business operations.',
    points: [
      'Digital India and e-governance initiatives',
      'Strong fintech and startup ecosystem',
      'Improving logistics and connectivity',
      'Technology-driven business environment',
    ],
  },
]

export default function WhyIndiaPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Strategic Advantage
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Why India is Your
              <span className="text-gold"> Growth Destination</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              India is one of the fastest-growing major economies, offering significant opportunities
              for foreign businesses. With a large consumer base, strong regulatory framework, and
              continuous economic reforms, India has become a preferred destination for global
              companies looking to establish and expand their presence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Key Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              The India Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="p-8 bg-white border rounded-xl text-center hover:shadow-lg">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-gold" />
                </div>
                <div className="text-4xl font-bold text-gold mb-2">{advantage.value}</div>
                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gold/10">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Reasons */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              In Detail
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Why Global Businesses Choose India
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key economic, regulatory, and strategic factors that make India a preferred destination for foreign investment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="p-8 bg-gray-50 border rounded-xl">
                <div className="flex gap-4 mb-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center">
                    <reason.icon className="h-7 w-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 border-l-2 border-gold/30 pl-4">
                  {reason.points.map((point) => (
                    <li key={point} className="text-sm text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Enter the Indian Market?
        </h2>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Planning to establish your business in India? AU Corporate provides end-to-end support across entry strategy, regulatory compliance, and operations.
        </p>

        <Button className="bg-gold text-black px-6 py-3">
          <Link href="/contact">
            Start Your Journey <ArrowRight className="ml-2 inline" />
          </Link>
        </Button>
      </section>

    </div>
  )
}