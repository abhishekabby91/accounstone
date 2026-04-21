"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import {
  MapPin,
  Clock,
  Users,
  Heart,
  TrendingUp,
  Globe,
  Award,
  CheckCircle2,
  Send
} from 'lucide-react'

const jobListings = [
  {
    id: 1,
    title: 'Article Trainee',
    location: 'Connaught Place, New Delhi -110001',
    type: 'Full-time',
    department: 'Articleship',
    description:
      'We are seeking motivated Article Trainees to join our Articleship program, offering structured exposure to taxation, accounting, regulatory compliance, and advisory services. The role provides an opportunity to work on diverse client engagements, build strong technical capabilities, and develop a professional foundation in a high-performance, client-centric environment.',
  },
]

const cultureValues = [
  {
    icon: Users,
    title: 'Collaborative Environment',
    description:
      'Work alongside talented professionals who support and inspire each other.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description:
      'Clear career paths and continuous learning opportunities for professional development.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description:
      'Work on international projects with clients and colleagues across the world.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description:
      'Flexible policies that support your personal and professional well-being.',
  },
]

const benefits = [
  'Competitive compensation packages',
  'Comprehensive health insurance',
  'Retirement savings plans',
  'Professional development programs',
  'Performance bonuses',
  'Flexible work arrangements',
  'Paid time off and holidays',
  'Employee wellness programs',
]

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', position: '', message: '' })

    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen pt-20">

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative py-28 overflow-hidden">

        {/* Background Image */}
        <Image
          src="https://cdn.corenexis.com/files/c/4365696720.jpg"
          alt="Build Your Career at AU Corporate"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Join Our Team
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              <span className="text-white">Build Your Career at</span>{" "}
              <span className="text-gold">AU Corporate</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
              Join a team of passionate professionals dedicated to delivering exceptional value to clients worldwide. Grow your career with us.
            </p>

          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Why Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-white border hover:shadow-lg text-center"
              >
                <value.icon className="h-7 w-7 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Comprehensive Benefits Package
            </h2>

            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex gap-2">
                  <CheckCircle2 className="text-gold mt-1" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Have Questions?
        </h2>

        <p className="text-muted-foreground mb-8">
          Reach out to explore career opportunities at AU Corporate.
        </p>

        <Button asChild className="bg-gold text-black">
          <a href="mailto:partner@theaucorp.com">
            Contact us
          </a>
        </Button>
      </section>

    </div>
  )
}