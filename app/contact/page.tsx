"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Globe
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Our team will respond within 24 hours',
    value: 'partner@aucorporate.com',
    href: 'mailto:partner@aucorporate.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our main office',
    value: '222 First Floor, World Trade Tower, Barakhamba Road, New Delhi',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday to Friday',
    value: '9:00 AM - 6:00 PM IST',
    href: '#',
  },
]

const offices = [
  { region: 'India (HQ)', city: 'New Delhi', address: '222 First Floor, World Trade Tower, Barakhamba Road, Connaught Place, New Delhi -110001' },
  { region: 'USA', city: 'New York', address: '350 Fifth Avenue, Suite 4000, New York, NY 10118' },
  { region: 'UK', city: 'London', address: '20 Fenchurch Street, London EC3M 3BY' },
  { region: 'Singapore', city: 'Singapore', address: '1 Raffles Place, Tower 1, Singapore 048616' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' })
    
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Contact 
              <span className="text-gold"> AU Corporate</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to transform your business? Our team of experts is here to help. Reach out to discuss how we can support your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="p-6 rounded-xl bg-white border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{info.description}</p>
                <p className="text-foreground text-sm font-medium">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitSuccess && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-center">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}
                
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
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-border bg-white px-3 py-2 text-foreground focus:border-gold focus:ring-gold"
                  >
                    <option value="">Select a service</option>
                    <option value="consulting">Risk & Technology Consulting</option>
                    <option value="taxation">Taxation & Regulatory Services</option>
                    <option value="accounting">Accounting & Assurance</option>
                    <option value="arbitration">Arbitration Services</option>
                    <option value="hr">HR & Payroll Solutions</option>
                    <option value="outsourcing">Outsourcing Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-foreground font-semibold py-6 text-lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Connect Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Connect With Us</h2>
              <p className="text-muted-foreground mb-8">
                Follow us on LinkedIn to stay updated with the latest news, insights, and career opportunities.
              </p>
              
              <a
                href="https://www.linkedin.com/company/a-u-corporate/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border hover:border-gold/50 transition-all duration-300 mb-12"
              >
                <div className="w-12 h-12 rounded-lg bg-blue/10 flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Follow on LinkedIn</h3>
                  <p className="text-muted-foreground text-sm">AU Corporate</p>
                </div>
              </a>

              <h3 className="text-xl font-bold text-foreground mb-6">Our Global Offices</h3>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div 
                    key={office.region}
                    className="p-4 rounded-xl bg-secondary border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{office.region}</h4>
                        <p className="text-gold text-sm mb-1">{office.city}</p>
                        <p className="text-muted-foreground text-sm">{office.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/CTA Section */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Partner With AU Corporate
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Whether you&apos;re looking to expand into new markets, optimize operations, or transform your business, 
            we&apos;re here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg"
            >
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-blue text-blue hover:bg-blue/5 px-8 py-6 text-lg"
            >
              <a href="mailto:partner@aucorporate.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
