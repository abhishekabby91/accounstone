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
  title: 'Arbitration Services | AU Corporate',
  description: 'Professional dispute resolution, corporate arbitration advisory, and cross-border dispute handling services.',
}

const services = [
  {
    icon: Gavel,
    title: 'Commercial Arbitration',
    description: 'Expert representation and advisory services for domestic and international commercial disputes.',
    features: [
      'Contract dispute resolution',
      'Commercial litigation support',
      'Arbitrator selection assistance',
      'Award enforcement',
    ],
  },
  {
    icon: Globe,
    title: 'Cross-Border Disputes',
    description: 'Specialized handling of complex international disputes involving multiple jurisdictions.',
    features: [
      'Multi-jurisdictional expertise',
      'International trade disputes',
      'Investment treaty arbitration',
      'Foreign judgment enforcement',
    ],
  },
  {
    icon: Handshake,
    title: 'Mediation Services',
    description: 'Facilitated negotiation and mediation to achieve amicable resolutions.',
    features: [
      'Pre-litigation mediation',
      'Court-annexed mediation',
      'Settlement negotiations',
      'Neutral evaluation',
    ],
  },
  {
    icon: FileText,
    title: 'Expert Witness Services',
    description: 'Qualified experts to provide testimony and analysis in legal proceedings.',
    features: [
      'Financial forensics',
      'Industry expert testimony',
      'Damage quantification',
      'Technical assessments',
    ],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Case Assessment',
    description: 'Comprehensive evaluation of your dispute, including legal merits and potential outcomes.',
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Tailored dispute resolution strategy aligned with your business objectives.',
  },
  {
    step: '03',
    title: 'Representation',
    description: 'Expert representation throughout arbitration proceedings or mediation sessions.',
  },
  {
    step: '04',
    title: 'Resolution',
    description: 'Successful resolution with focus on award enforcement and implementation.',
  },
]

const stats = [
  { value: '200+', label: 'Cases Resolved' },
  { value: '95%', label: 'Success Rate' },
  { value: '15+', label: 'Jurisdictions' },
  { value: '50+', label: 'Expert Arbitrators' },
]

export default function ArbitrationServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-navy to-navy-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Dispute Resolution</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                Arbitration 
                <span className="text-gold"> Services</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Professional dispute resolution services for complex corporate matters. Our team of experienced arbitrators and legal experts ensures fair, efficient, and enforceable outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy-dark font-semibold"
                >
                  <Link href="/career">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-gold/20 p-8 flex items-center justify-center">
                <Scale className="w-32 h-32 text-gold/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Arbitration Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a full spectrum of dispute resolution services tailored to your specific needs and business context.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.title}
                className="p-8 rounded-xl bg-navy border border-border hover:border-gold/50 transition-all duration-300"
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

      {/* Process */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure efficient and favorable dispute resolution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div 
                key={item.step}
                className="relative p-6 rounded-xl bg-navy-light border border-border"
              >
                <div className="text-5xl font-bold text-gold/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Trusted Arbitration Experts
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                AU Corporate brings together a team of seasoned arbitrators, legal experts, and industry specialists to provide world-class dispute resolution services.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Confidentiality', desc: 'Complete privacy and confidentiality in all proceedings' },
                  { icon: Users, title: 'Expert Panel', desc: 'Access to renowned arbitrators and industry experts' },
                  { icon: Building, title: 'Global Reach', desc: 'Handling disputes across multiple jurisdictions' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gold mb-4">95%</div>
                  <p className="text-foreground text-xl font-medium">Success Rate</p>
                  <p className="text-muted-foreground mt-2">In Dispute Resolution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gold/10 via-navy to-navy-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Help Resolving a Dispute?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Our arbitration experts are ready to help you navigate complex disputes with professionalism and efficiency.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-lg"
          >
            <Link href="/career">
              Get Expert Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
