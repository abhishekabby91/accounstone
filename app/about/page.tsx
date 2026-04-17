import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Globe,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Handshake
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | AU Corporate',
  description: 'Learn about AU Corporate - your trusted partner for global consulting, outsourcing, and business solutions.',
}

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our engagements, building trust through transparency and honesty.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously evolve our solutions, embracing new technologies and methodologies to deliver exceptional value.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as true partners with our clients, fostering relationships built on mutual respect and shared success.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, setting high standards and consistently exceeding expectations.',
  },
]

const milestones = [
  { year: '1998', title: 'Founded', description: 'AU Corporate established with a vision to transform global business consulting.' },
  { year: '2005', title: 'Global Expansion', description: 'Expanded operations to serve clients across North America, Europe, and Asia.' },
  { year: '2012', title: 'Digital Transformation', description: 'Launched technology consulting practice to help clients embrace digital innovation.' },
  { year: '2018', title: 'Strategic Acquisitions', description: 'Acquired specialized firms to strengthen HR and arbitration capabilities.' },
  { year: '2023', title: 'Industry Leadership', description: 'Recognized as a leading consulting firm serving Fortune 500 companies globally.' },
]

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '500+', label: 'Global Clients' },
  { value: '15', label: 'Countries' },
  { value: '1000+', label: 'Professionals' },
]

const leadership = [
  {
    name: 'Abhishek Jain',
    role: 'Founder & CEO',
    description: 'Visionary leader with 30+ years in global consulting and business transformation.',
  },
  {
    name: 'Utsav Dogra',
    role: 'Founder & CEO',
    description: 'Expert in operational excellence and global delivery management.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Chief Financial Officer',
    description: 'Strategic financial leader with expertise in international markets.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Global Head - Client Relations',
    description: 'Dedicated to building lasting partnerships with clients worldwide.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">About AU Corporate</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Growing Together,
              <span className="text-gold"> Achieving Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over two decades, AU Corporate has been a trusted partner for businesses worldwide, delivering exceptional consulting, outsourcing, and advisory services that drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gold/10">
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

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-white border border-border">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-gold" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses worldwide by delivering innovative, high-quality consulting and outsourcing solutions that drive operational excellence, ensure compliance, and create sustainable competitive advantages.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border border-border">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-gold" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted global partner for businesses seeking transformative solutions, recognized for our integrity, innovation, and unwavering commitment to client success across all industries and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AU Corporate was founded with a simple yet powerful vision: to help businesses thrive in an increasingly complex global environment. What began as a small consulting practice has grown into a comprehensive business solutions firm serving clients across the globe.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic expansion, and an unwavering commitment to client success. Today, we are proud to serve Fortune 500 companies and emerging businesses alike, delivering solutions that create lasting value.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As we look to the future, we remain committed to our founding principles while embracing new technologies and methodologies that enable us to better serve our clients in an ever-evolving business landscape.
              </p>
            </div>
            <div>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-gold/20 my-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values define who we are and guide every interaction with our clients, partners, and colleagues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-white border border-border hover:border-gold/50 transition-all duration-300 text-center hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Meet Our Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals committed to driving client success and organizational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="p-6 rounded-xl bg-secondary border border-border text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{leader.name}</h3>
                <p className="text-gold text-sm mb-3">{leader.role}</p>
                <p className="text-muted-foreground text-sm">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Global Reach</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                A Truly Global Presence
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With offices and delivery centers across North America, Europe, and Asia, we bring local expertise with global capabilities to serve clients wherever they operate.
              </p>

              <div className="space-y-4">
                {[
                  { region: 'Americas', locations: 'USA, Canada, Mexico' },
                  { region: 'Europe', locations: 'UK, Germany, Netherlands' },
                  { region: 'Asia Pacific', locations: 'India, Singapore, Australia' },
                ].map((item) => (
                  <div key={item.region} className="flex items-center gap-4 p-4 rounded-lg bg-white border border-border">
                    <Globe className="h-6 w-6 text-gold shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{item.region}</h3>
                      <p className="text-muted-foreground text-sm">{item.locations}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-white border border-border p-8 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-gold/50 mx-auto mb-6" />
                  <div className="text-5xl font-bold text-gold mb-2">15</div>
                  <p className="text-foreground text-lg font-medium">Countries</p>
                  <p className="text-muted-foreground text-sm mt-1">Global Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let&apos;s Grow Together
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses that trust AU Corporate for their consulting, outsourcing, and advisory needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue text-blue hover:bg-blue/5 px-8 py-6 text-lg"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
