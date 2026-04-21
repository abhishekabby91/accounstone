"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Building2,
  Calculator,
  Headphones,
  Database,
  TrendingUp,
  CheckCircle2,
  Globe,
  Clock,
  Users,
  Zap,
  BarChart3
} from 'lucide-react'
import type { Metadata } from 'next'

const services = [
  {
    icon: Calculator,
    title: 'Finance & Accounting BPO',
    description: 'Complete finance and accounting outsourcing from bookkeeping to financial analysis.',
    features: [
      'Accounts payable/receivable',
      'Financial reporting',
      'Reconciliation services',
      'Month-end close support',
      'Financial analysis',
    ],
  },
  {
    icon: Database,
    title: 'Back Office Operations',
    description: 'Streamlined back-office services to enhance operational efficiency.',
    features: [
      'Data entry and management',
      'Document processing',
      'Records management',
      'Administrative support',
      'Order processing',
    ],
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Multi-channel customer support services to enhance customer experience.',
    features: [
      'Inbound/outbound support',
      'Technical helpdesk',
      'Email support',
      'Chat support',
      'Social media management',
    ],
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'Business process reengineering and optimization for maximum efficiency.',
    features: [
      'Process assessment',
      'Workflow automation',
      'Quality assurance',
      'Continuous improvement',
      'Performance monitoring',
    ],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Cost Efficiency',
    value: '40-60%',
    description: 'Reduce operational costs while maintaining quality standards.',
  },
  {
    icon: Clock,
    title: '24/7 Operations',
    value: '24/7',
    description: 'Round-the-clock operations for continuous business support.',
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    value: '500+',
    description: 'Access to trained professionals across various domains.',
  },
  {
    icon: BarChart3,
    title: 'Scalability',
    value: '3x',
    description: 'Flexible scaling to meet your business demands.',
  },
]

const industries = [
  'Financial Services',
  'Healthcare',
  'Retail & E-commerce',
  'Technology',
  'Manufacturing',
]

export default function OutsourcingPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative py-24 min-h-[80vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.corenexis.com/files/c/6433487720.jpg"
            alt="Global Support Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center text-white">

            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Business Process
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                <span className="text-white">Outsourcing</span>{' '}
                <span className="text-gold">Solutions</span>
              </h1>

              <p className="text-white/80 leading-relaxed mb-8">
                Scalable business process outsourcing solutions that optimize operations,
                reduce costs and drive efficiency. Focus on your core business while we handle the rest.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gold text-black font-semibold">
                  <Link href="/contact">
                    Start Outsourcing <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/why-india">Why India</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="aspect-square rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Building2 className="w-32 h-32 text-gold/70" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6">

          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-6 bg-white border rounded-xl text-center">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mx-auto mb-4 rounded-xl">
                <benefit.icon className="text-gold w-6 h-6" />
              </div>

              <div className="text-3xl font-bold text-gold">{benefit.value}</div>
              <div className="text-sm font-medium">{benefit.title}</div>
              <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
            </div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Comprehensive Outsourcing Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {services.map((service) => (
              <div key={service.title} className="p-8 border rounded-xl bg-secondary">

                <service.icon className="text-gold mb-4" />

                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 className="text-gold w-4 h-4 mt-1" />
                      {f}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-5 gap-4 text-center">

            {industries.map((i) => (
              <div key={i} className="p-4 bg-white border rounded-lg">
                <Globe className="mx-auto text-gold mb-2" />
                <span className="text-sm">{i}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Optimize Your Operations?
        </h2>

        <p className="text-muted-foreground mb-8">
          Let AU Corporate help you achieve operational excellence.
        </p>

        <Button asChild className="bg-gold text-black">
          <Link href="/contact">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>

    </div>
  )
}