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
  description: 'Discover why India is the premier destination for global business outsourcing, talent acquisition, and business growth.',
}

const advantages = [
  {
    icon: Users,
    title: 'Massive Talent Pool',
    value: '1.4B+',
    description: 'Access to over 1.4 billion people with a rapidly growing workforce of skilled professionals across all industries.',
  },
  {
    icon: GraduationCap,
    title: 'Highly Educated Workforce',
    value: '5M+',
    description: 'Over 5 million graduates annually from world-class universities and technical institutions.',
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    value: '60%',
    description: 'Achieve up to 60% cost savings compared to Western markets without compromising on quality.',
  },
  {
    icon: Clock,
    title: 'Time Zone Advantage',
    value: '24/7',
    description: 'Strategic time zone positioning enables round-the-clock operations and faster turnaround times.',
  },
]

const stats = [
  { value: '$200B+', label: 'IT Services Export' },
  { value: '1500+', label: 'Global Delivery Centers' },
  { value: '500+', label: 'Fortune 500 Clients' },
  { value: '4.5M+', label: 'IT Professionals' },
]

const reasons = [
  {
    icon: Globe,
    title: 'Global Outsourcing Hub',
    description: 'India is the world&apos;s leading destination for business process outsourcing and IT services, handling operations for the largest global enterprises.',
    points: [
      'Mature outsourcing ecosystem with 30+ years of experience',
      'World-class infrastructure and technology parks',
      'Proven track record with Fortune 500 companies',
      'Strong data protection and compliance frameworks',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Business Scalability',
    description: 'Scale your operations rapidly with India&apos;s flexible business environment and abundant resources.',
    points: [
      'Flexible workforce scaling up or down based on needs',
      'Multiple tier-1 and tier-2 city options for delivery',
      'Established vendor ecosystem and partnerships',
      'Government incentives for foreign businesses',
    ],
  },
  {
    icon: Building2,
    title: 'Quality Excellence',
    description: 'India maintains the highest quality standards with a strong emphasis on process excellence and continuous improvement.',
    points: [
      'Highest number of CMM Level 5 certified companies',
      'Strong focus on Six Sigma and lean methodologies',
      'ISO certified delivery centers',
      'Robust quality management systems',
    ],
  },
  {
    icon: Zap,
    title: 'Innovation & Technology',
    description: 'A thriving startup ecosystem and strong R&D capabilities make India a hub for innovation and digital transformation.',
    points: [
      'Third-largest startup ecosystem globally',
      'Strong presence of global R&D centers',
      'Leading in AI, ML, and emerging technologies',
      'Robust digital infrastructure',
    ],
  },
]

export default function WhyIndiaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-navy to-navy-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Strategic Advantage</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Why India is Your 
              <span className="text-gold"> Global Business Partner</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover why leading global enterprises choose India as their strategic partner for growth, innovation, and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-24 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Key Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              The India Advantage
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <div 
                key={advantage.title}
                className="p-8 rounded-xl bg-navy border border-border hover:border-gold/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-gold" />
                </div>
                <div className="text-4xl font-bold text-gold mb-2">{advantage.value}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
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

      {/* Detailed Reasons */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">In Detail</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Why Global Leaders Choose India
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive look at the strategic benefits of partnering with India for your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div 
                key={reason.title}
                className="p-8 rounded-xl bg-navy-light border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <reason.icon className="h-7 w-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 pl-4 border-l-2 border-gold/30">
                  {reason.points.map((point) => (
                    <li key={point} className="text-muted-foreground text-sm pl-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gold/10 via-navy-dark to-navy-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Leverage the India Advantage?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let AU Corporate be your guide to successful business operations in India. We bring local expertise with global standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-lg"
            >
              <Link href="/career">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-gold/50 text-foreground hover:bg-gold/10 hover:border-gold px-8 py-6 text-lg"
            >
              <Link href="/outsourcing">Explore Outsourcing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
