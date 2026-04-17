import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Calculator, 
  FileCheck, 
  Scale, 
  Users, 
  Building2,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  BarChart3,
  Lock,
  Cpu
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | AU Corporate',
  description: 'Comprehensive business solutions including consulting, taxation, accounting, arbitration, HR, and outsourcing services.',
}

const services = [
  {
    icon: Shield,
    title: 'Risk & Technology Consulting',
    description: 'Strategic risk management and cutting-edge technology solutions to safeguard and accelerate your business growth.',
    features: [
      'Enterprise Risk Assessment',
      'Cybersecurity Strategy',
      'Digital Transformation',
      'IT Infrastructure Consulting',
      'Business Continuity Planning',
    ],
    href: '/services',
  },
  {
    icon: Calculator,
    title: 'Taxation & Regulatory Services',
    description: 'Expert guidance navigating complex tax landscapes and regulatory frameworks across multiple jurisdictions.',
    features: [
      'International Tax Planning',
      'Transfer Pricing',
      'Tax Compliance & Filing',
      'Regulatory Advisory',
      'Tax Dispute Resolution',
    ],
    href: '/services',
  },
  {
    icon: FileCheck,
    title: 'Accounting & Assurance',
    description: 'Comprehensive financial reporting and assurance services that build stakeholder confidence and drive informed decisions.',
    features: [
      'Financial Statement Audits',
      'Internal Audit Services',
      'IFRS/GAAP Compliance',
      'Financial Reporting',
      'SOX Compliance',
    ],
    href: '/services',
  },
  {
    icon: Scale,
    title: 'Arbitration Services',
    description: 'Professional dispute resolution services for complex corporate matters with expertise in cross-border arbitration.',
    features: [
      'Commercial Arbitration',
      'International Disputes',
      'Mediation Services',
      'Expert Witness Services',
      'Contract Review',
    ],
    href: '/arbitration-services',
  },
  {
    icon: Users,
    title: 'HR & Payroll Solutions',
    description: 'End-to-end human capital management solutions that streamline operations and enhance employee experience.',
    features: [
      'Talent Acquisition',
      'Payroll Processing',
      'Benefits Administration',
      'HR Compliance',
      'Performance Management',
    ],
    href: '/hr-services',
  },
  {
    icon: Building2,
    title: 'Outsourcing Solutions',
    description: 'Scalable business process outsourcing that optimizes operations and drives cost efficiencies.',
    features: [
      'Finance & Accounting BPO',
      'Back Office Operations',
      'Customer Support',
      'Data Processing',
      'Process Optimization',
    ],
    href: '/outsourcing',
  },
]

const industries = [
  { icon: Briefcase, name: 'Financial Services' },
  { icon: BarChart3, name: 'Healthcare & Life Sciences' },
  { icon: Lock, name: 'Technology & Media' },
  { icon: Cpu, name: 'Manufacturing' },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Solutions for 
              <span className="text-gold"> Business Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From strategic consulting to operational excellence, we deliver integrated solutions that address your most complex business challenges and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.title}
                className="group p-8 rounded-xl bg-white border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.href}
                      className="inline-flex items-center text-blue text-sm font-medium hover:underline"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Industry Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Serving Diverse Industries
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our deep industry knowledge enables us to deliver tailored solutions that address sector-specific challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div 
                key={industry.name}
                className="p-6 rounded-xl bg-secondary border border-border text-center hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-medium text-foreground">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your business objectives.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg"
          >
            <Link href="/contact">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
