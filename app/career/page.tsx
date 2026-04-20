"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  MapPin,
  Briefcase,
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
    title: 'Senior Consultant - Risk Advisory',
    location: 'New York, USA',
    type: 'Full-time',
    department: 'Risk & Technology',
    description: 'Lead risk advisory engagements for Fortune 500 clients, developing comprehensive risk management strategies.',
  },
  {
    id: 2,
    title: 'Tax Manager',
    location: 'London, UK',
    type: 'Full-time',
    department: 'Taxation',
    description: 'Manage international tax compliance and planning projects for multinational corporations.',
  },
  {
    id: 3,
    title: 'HR Business Partner',
    location: 'Mumbai, India',
    type: 'Full-time',
    department: 'HR Services',
    description: 'Partner with clients to develop and implement HR strategies aligned with business objectives.',
  },
  {
    id: 4,
    title: 'Process Excellence Lead',
    location: 'Singapore',
    type: 'Full-time',
    department: 'Outsourcing',
    description: 'Drive continuous improvement initiatives and process optimization for outsourcing operations.',
  },
  {
    id: 5,
    title: 'Arbitration Specialist',
    location: 'Dubai, UAE',
    type: 'Full-time',
    department: 'Arbitration',
    description: 'Handle complex commercial arbitration cases and provide expert advisory on dispute resolution.',
  },
  {
    id: 6,
    title: 'Financial Analyst',
    location: 'Bangalore, India',
    type: 'Full-time',
    department: 'Finance & Accounting',
    description: 'Perform financial analysis and reporting for global clients across diverse industries.',
  },
]

const cultureValues = [
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'Work alongside talented professionals who support and inspire each other.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Clear career paths and continuous learning opportunities for professional development.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description: 'Work on international projects with clients and colleagues across the world.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible policies that support your personal and professional well-being.',
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

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', position: '', message: '' })

    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              <span className="text-[#081a42]">Build Your Career at</span>
              <span className="text-gold"> AU Corporate</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join a team of passionate professionals dedicated to delivering exceptional value to clients worldwide. Grow your career with us.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At AU Corporate, we believe our people are our greatest asset. We foster an environment where talent thrives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-white border border-border hover:border-gold/50 transition-all duration-300 text-center hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Employee Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Comprehensive Benefits Package
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We invest in our employees&apos; success and well-being with a comprehensive benefits package designed to support you at every stage of your career.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-secondary border border-border p-8 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-16 h-16 text-gold/50 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gold mb-2">Top Employer</div>
                  <p className="text-foreground text-lg font-medium">Certified Workplace</p>
                  <p className="text-muted-foreground text-sm mt-1">3 Years Running</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Current Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities across our global offices and find the role that matches your expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-xl bg-white border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full">
                    {job.department}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{job.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-gold" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gold" />
                    {job.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Apply Now</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Submit Your Application
            </h2>
            <p className="text-muted-foreground">
              Interested in joining our team? Fill out the form below and we&apos;ll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-secondary border border-border">
            {submitSuccess && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-center">
                Thank you for your application! We&apos;ll be in touch soon.
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                  Position of Interest *
                </label>
                <Input
                  id="position"
                  name="position"
                  type="text"
                  required
                  value={formData.position}
                  onChange={handleInputChange}
                  className="bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
                  placeholder="e.g., Senior Consultant"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Cover Letter / Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold resize-none"
                  placeholder="Tell us about yourself and why you'd be a great fit..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-foreground font-semibold py-6 text-lg"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Application
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Our HR team is here to help. Reach out to learn more about career opportunities at AU Corporate.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue text-blue hover:bg-blue/5 px-8 py-6 text-lg"
          >
            <a href="mailto:careers@aucorporate.com">
              Contact HR Team
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
