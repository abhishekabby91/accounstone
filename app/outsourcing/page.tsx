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

export const metadata: Metadata = {
  title: 'Global Support | AU Corporate',
  description: 'Global outsourcing solutions including back-office operations, business process optimization and managed services.',
}

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
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Business Process</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                <span className="text-[#081a42]">Outsourcing</span>
                <span className="text-gold"> Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Scalable business process outsourcing solutions that optimize operations, reduce costs and drive efficiency. Focus on your core business while we handle the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-foreground font-semibold"
                >
                  <Link href="/contact">
                    Start Outsourcing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue text-blue hover:bg-blue/5"
                >
                  <Link href="/why-india">Why India</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-secondary border border-border p-8 flex items-center justify-center">
                <Building2 className="w-32 h-32 text-gold/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl bg-white border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-gold" />
                </div>
                <div className="text-3xl font-bold text-gold mb-1">{benefit.value}</div>
                <h3 className="text-sm font-medium text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-xs">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Outsourcing Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end business process outsourcing tailored to your industry and operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-xl bg-secondary border border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Industries We Serve</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Expertise Across Industries
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our outsourcing solutions are tailored to meet the unique requirements of diverse industries, ensuring compliance and best practices.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-3 p-4 rounded-lg bg-white border border-border">
                    <Globe className="h-5 w-5 text-gold" />
                    <span className="text-foreground text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-white border border-border p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold mb-4">60%</div>
                  <p className="text-foreground text-xl font-medium">Cost Savings</p>
                  <p className="text-muted-foreground mt-2">Average Client Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Seamless Transition Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business processes and requirements' },
              { step: '02', title: 'Planning', desc: 'Designing tailored outsourcing solutions' },
              { step: '03', title: 'Transition', desc: 'Smooth knowledge transfer and setup' },
              { step: '04', title: 'Operations', desc: 'Ongoing delivery with continuous improvement' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-xl bg-secondary border border-border text-center"
              >
                <div className="text-4xl font-bold text-gold/30 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let AU Corporate help you achieve operational excellence through our proven Global Support.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg"
          >
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
