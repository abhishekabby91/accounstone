import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  Globe,
  Users,
  Shield,
  Lightbulb,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | AU Corporate',
  description:
    'AU Corporate helps foreign companies establish and operate in India with compliance, taxation, and advisory services.',
}

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We maintain the highest standards of ethics and transparency in all our client engagements.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Approach',
    description:
      'We deliver practical and implementable solutions tailored to Indian regulatory frameworks.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description:
      'We work closely with our clients as long-term partners in their India journey.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We are committed to delivering high-quality advisory and compliance services consistently.',
  },
]

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '100+', label: 'Clients Served' },
  { value: '15+', label: 'Industries' },
  { value: '50+', label: 'Cross-Border Engagements' },
]

const leadership = [
  {
    name: 'Abhishek Jain',
    role: 'Partner – International Advisory',
    description:
      'Leads international advisory engagements with a focus on India entry strategy, FEMA regulations, and cross-border taxation for foreign companies.',
  },
  {
    name: 'Utsav Dogra',
    role: 'Partner – Operations & Compliance',
    description:
      'Oversees execution and delivery across compliance, outsourcing, and business support services, ensuring efficient and seamless operations for clients.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              About AU Corporate
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-[#081a42]">Growing Together,</span>,
              <span className="text-gold"> Building in India</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              AU Corporate is a specialized advisory firm focused on helping foreign companies establish and operate in India. We provide end-to-end support across company setup, regulatory compliance, taxation, and ongoing business advisory, ensuring a smooth and compliant market entry.
            </p>
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

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8">

          <div className="p-8 bg-white rounded-xl border">
            <Target className="text-gold mb-4" />
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-muted-foreground">
              To enable global businesses to establish and operate in India with confidence by delivering reliable, compliant, and business-focused advisory solutions.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border">
            <Eye className="text-gold mb-4" />
            <h2 className="text-xl font-bold mb-3">Our Vision</h2>
            <p className="text-muted-foreground">
              To be a trusted partner for international companies entering India, recognized for our expertise, responsiveness, and commitment to long-term client success.
            </p>
          </div>

        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4">

          <h2 className="text-3xl font-bold mb-6">Our Story</h2>

          <p className="text-muted-foreground mb-4">
            AU Corporate was established with a clear objective — to simplify India entry and regulatory compliance for foreign businesses. We assist clients with company incorporation, FEMA compliance, taxation, and ongoing regulatory requirements.
          </p>

          <p className="text-muted-foreground mb-4">
            With strong domain expertise and a practical understanding of Indian regulations, we act as a single-point advisory partner for global companies looking to establish and scale their presence in India.
          </p>

        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership driving strategic advisory, regulatory expertise, and seamless execution for global clients entering India.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-8">
          {leadership.map((leader) => (
            <div
              key={leader.name}
              className="p-8 rounded-xl bg-white border text-center hover:shadow-lg transition"
            >
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <h3 className="text-lg font-semibold">{leader.name}</h3>
              <p className="text-gold text-sm mb-3">{leader.role}</p>
              <p className="text-muted-foreground text-sm">{leader.description}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-10">
          Supported by a team of experienced professionals in taxation, compliance, and advisory services.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Your India Presence</h2>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Planning to set up your business in India? Partner with AU Corporate for reliable advisory, compliance, and end-to-end execution support.
        </p>

        <Button className="bg-gold text-black px-6 py-3">
          <Link href="/contact">
            Get in Touch <ArrowRight className="inline ml-2" />
          </Link>
        </Button>
      </section>

    </div>
  )
}