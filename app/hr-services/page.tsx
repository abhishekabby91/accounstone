import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight,
  Users,
  Wallet,
  Shield,
  TrendingUp,
  UserPlus,
  ClipboardCheck,
  Award,
  CheckCircle2,
  Briefcase,
  Heart,
  GraduationCap
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR Services | AU Corporate',
  description: 'Comprehensive HR solutions including recruitment, payroll management, compliance, and HR outsourcing services.',
}

const services = [
  {
    icon: UserPlus,
    title: 'Recruitment Services',
    description: 'End-to-end talent acquisition solutions to help you find and hire the best candidates.',
    features: [
      'Executive search and headhunting',
      'Mass recruitment drives',
      'Campus hiring programs',
      'Technical recruitment',
      'Background verification',
    ],
  },
  {
    icon: Wallet,
    title: 'Payroll Management',
    description: 'Comprehensive payroll processing and management services for accuracy and compliance.',
    features: [
      'Salary processing',
      'Tax calculations and filing',
      'Statutory compliance',
      'Leave management',
      'Employee self-service portal',
    ],
  },
  {
    icon: Shield,
    title: 'Compliance & HR Outsourcing',
    description: 'Expert handling of HR compliance requirements and complete HR function outsourcing.',
    features: [
      'Labor law compliance',
      'Policy development',
      'HR audit services',
      'Employee relations',
      'Grievance management',
    ],
  },
]

const additionalServices = [
  {
    icon: TrendingUp,
    title: 'Performance Management',
    description: 'Design and implement effective performance management systems.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Customized training programs for employee skill enhancement.',
  },
  {
    icon: Heart,
    title: 'Employee Benefits',
    description: 'Comprehensive benefits administration and optimization.',
  },
  {
    icon: Award,
    title: 'Compensation Design',
    description: 'Market-aligned compensation structures and benchmarking.',
  },
]

const stats = [
  { value: '50K+', label: 'Employees Managed' },
  { value: '200+', label: 'Client Companies' },
  { value: '99.9%', label: 'Payroll Accuracy' },
  { value: '15+', label: 'Years Experience' },
]

const benefits = [
  'Reduce HR operational costs by up to 40%',
  'Ensure 100% compliance with labor laws',
  'Access to HR technology platforms',
  'Scalable solutions for growing businesses',
  'Expert guidance from HR professionals',
  'Focus on core business activities',
]

export default function HRServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-navy to-navy-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Human Resources</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                HR & Payroll 
                <span className="text-gold"> Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Comprehensive human resource management and payroll solutions that streamline your operations, ensure compliance, and enhance employee experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy-dark font-semibold"
                >
                  <Link href="/career">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-gold/20 p-8 flex items-center justify-center">
                <Users className="w-32 h-32 text-gold/50" />
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

      {/* Core Services */}
      <section className="py-24 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Core Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Complete HR Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From hiring to retirement, we manage the entire employee lifecycle with expertise and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

      {/* Additional Services */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Additional Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Value-Added HR Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div 
                key={service.title}
                className="p-6 rounded-xl bg-navy-light border border-border hover:border-gold/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Why Partner With Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Benefits of AU Corporate HR Services
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Transform your HR operations with our comprehensive solutions designed to reduce costs, ensure compliance, and drive employee satisfaction.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gold mb-4">40%</div>
                  <p className="text-foreground text-xl font-medium">Cost Reduction</p>
                  <p className="text-muted-foreground mt-2">In HR Operations</p>
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
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let our HR experts help you build a more efficient, compliant, and employee-centric organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-lg"
            >
              <Link href="/career">
                Contact HR Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-gold/50 text-foreground hover:bg-gold/10 hover:border-gold px-8 py-6 text-lg"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
