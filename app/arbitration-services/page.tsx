import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Scale,
  FileText,
  Shield,
  Globe,
  Users,
  CheckCircle2,
  Gavel,
  Handshake,
  Building
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arbitration & Expert Services | AU Corporate',
  description: 'Specialized arbitration, dispute resolution, and expert advisory services for domestic and cross-border commercial matters.',
}

const services = [
  {
    icon: Gavel,
    title: 'Commercial Arbitration & Advisory',
    description: 'Strategic advisory and representation in domestic and international commercial disputes.',
    features: [
      'Contractual dispute analysis',
      'Arbitration strategy & representation',
      'Tribunal support & documentation',
      'Award recognition & enforcement',
    ],
  },
  {
    icon: Globe,
    title: 'Cross-Border & International Disputes',
    description: 'End-to-end handling of complex multi-jurisdictional and international arbitration matters.',
    features: [
      'Cross-border legal coordination',
      'Investment & trade disputes',
      'International arbitration forums',
      'Foreign award enforcement',
    ],
  },
  {
    icon: Handshake,
    title: 'Mediation & Settlement Advisory',
    description: 'Facilitated dispute resolution focused on efficient, amicable settlements.',
    features: [
      'Pre-arbitration mediation',
      'Settlement structuring',
      'Negotiation facilitation',
      'Conflict resolution strategy',
    ],
  },
  {
    icon: FileText,
    title: 'Expert Witness & Forensic Services',
    description: 'Independent expert analysis and testimony for complex financial and technical disputes.',
    features: [
      'Financial & forensic analysis',
      'Damage quantification reports',
      'Independent expert testimony',
      'Technical dispute evaluation',
    ],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Preliminary Review',
    description: 'Detailed assessment of dispute facts, contracts, and legal position.',
  },
  {
    step: '02',
    title: 'Resolution Strategy',
    description: 'Design of a tailored arbitration or settlement strategy aligned with objectives.',
  },
  {
    step: '03',
    title: 'Execution & Representation',
    description: 'End-to-end representation before arbitral tribunals or mediation panels.',
  },
  {
    step: '04',
    title: 'Final Resolution',
    description: 'Award implementation, enforcement, and closure support.',
  },
]

const stats = [
  { value: '200+', label: 'Disputes Handled' },
  { value: '95%', label: 'Resolution Success' },
  { value: '15+', label: 'Global Jurisdictions' },
  { value: '50+', label: 'Expert Network' },
]

export default function ArbitrationServicesPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Arbitration & Expert Services
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                Dispute Resolution
                <span className="text-gold"> Experts</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We provide specialized arbitration, mediation, and expert advisory services for complex commercial, financial, and cross-border disputes. Our focus is on achieving efficient, enforceable, and commercially sound outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-foreground font-semibold"
                >
                  <Link href="/contact">
                    Request Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-secondary border border-border p-8 flex items-center justify-center">
                <Scale className="w-32 h-32 text-gold/50" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Arbitration & Expert Advisory Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end dispute resolution support backed by legal, financial, and industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-xl bg-white border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

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

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Working Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Structured Dispute Resolution Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative p-6 rounded-xl bg-secondary border border-border">
                <div className="text-5xl font-bold text-gold/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold/30" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Expert Dispute Resolution Support?
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Engage our arbitration and expert advisory team for strategic, efficient, and enforceable dispute resolution outcomes.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg"
          >
            <Link href="/contact">
              Speak to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

        </div>
      </section>

    </div>
  )
}