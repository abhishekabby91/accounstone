import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Scale,
  FileText,
  Globe,
  CheckCircle2,
  Gavel,
  Handshake,
  Shield
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arbitration & Expert Services | AU Corporate',
  description:
    'Specialized arbitration, dispute resolution, and expert advisory services for domestic and cross-border commercial matters.',
}

const services = [
  {
    icon: Gavel,
    title: 'Commercial Arbitration',
    description:
      'Advisory and representation in complex commercial disputes across industries.',
    features: [
      'Contractual dispute advisory',
      'Arbitration proceedings support',
      'Tribunal documentation',
      'Award enforcement',
    ],
  },
  {
    icon: Globe,
    title: 'International Arbitration',
    description:
      'Handling cross-border disputes across jurisdictions and international forums.',
    features: [
      'Cross-border dispute handling',
      'Foreign award enforcement',
      'International arbitration forums',
      'Multi-jurisdiction advisory',
    ],
  },
  {
    icon: Handshake,
    title: 'Mediation & Settlement',
    description:
      'Efficient dispute resolution through structured negotiation and mediation.',
    features: [
      'Pre-arbitration mediation',
      'Settlement structuring',
      'Negotiation strategy',
      'Conflict resolution advisory',
    ],
  },
  {
    icon: FileText,
    title: 'Expert & Forensic Services',
    description:
      'Independent expert reports and financial analysis for dispute proceedings.',
    features: [
      'Forensic accounting',
      'Damage assessment',
      'Expert witness support',
      'Financial dispute evaluation',
    ],
  },
]

const whyChoose = [
  'Integrated legal, financial and advisory expertise',
  'Experience in cross-border dispute handling',
  'Strong focus on enforceable outcomes',
  'Confidential and commercially driven approach',
]

export default function ArbitrationServicesPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">

          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Arbitration & Expert Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-[#081a42]">Expert Dispute Resolution</span>
              <span className="text-gold"> in India & Globally</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AU Corporate provides arbitration, mediation, and expert advisory services for domestic and international disputes, ensuring structured and effective resolution of complex commercial conflicts.
            </p>

            <p className="text-muted-foreground mb-8">
              Our team combines legal, compliance and regulatory expertise to deliver efficient,
              enforceable and commercially viable dispute resolution solutions.
            </p>

            <Button asChild className="bg-gold text-black">
              <Link href="/contact">
                Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Arbitration Expertise
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Comprehensive dispute resolution services across industries and jurisdictions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-white rounded-xl border hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-gold" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
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

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Why Choose AU Corporate
          </h2>

          <p className="text-muted-foreground mb-10">
            We bring a multidisciplinary approach to dispute resolution ensuring
            efficiency, confidentiality and strong execution.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {whyChoose.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <Shield className="text-gold mt-1" />
                <p>{point}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Arbitration Support?
        </h2>

        <p className="text-muted-foreground mb-8">
          Connect with our experts for strategic dispute resolution advisory.
        </p>

        <Button asChild className="bg-gold text-black px-6 py-3">
          <Link href="/contact">
            Speak to an Expert <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

    </div>
  )
}