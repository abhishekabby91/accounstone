import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Calculator, 
  FileCheck, 
  Scale, 
  Users, 
  Building2,
  ArrowRight,
  Globe,
  TrendingUp,
  Award
} from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Risk & Technology Consulting',
    description: 'Strategic risk management and technology solutions to protect and grow your business.',
    href: '/services',
  },
  {
    icon: Calculator,
    title: 'Taxation & Regulatory Services',
    description: 'Expert guidance on tax planning, compliance, and regulatory frameworks.',
    href: '/services',
  },
  {
    icon: FileCheck,
    title: 'Accounting & Assurance',
    description: 'Comprehensive accounting services and financial assurance for stakeholder confidence.',
    href: '/services',
  },
  {
    icon: Scale,
    title: 'Arbitration Services',
    description: 'Professional dispute resolution and legal advisory for complex corporate matters.',
    href: '/arbitration-services',
  },
  {
    icon: Users,
    title: 'HR & Payroll Solutions',
    description: 'End-to-end human resource management and payroll processing services.',
    href: '/hr-services',
  },
  {
    icon: Building2,
    title: 'Outsourcing Solutions',
    description: 'Scalable business process outsourcing to optimize your operations.',
    href: '/outsourcing',
  },
]

const stats = [
  { value: '500+', label: 'Global Clients' },
  { value: '25+', label: 'Years Experience' },
  { value: '15', label: 'Countries Served' },
  { value: '98%', label: 'Client Retention' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium">Global Business Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
            <span className="text-gold">AU Corporate</span>
            <span className="block mt-2">Growing Together</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            Global consulting, outsourcing, HR, taxation, and arbitration solutions. 
            Your trusted partner for sustainable business growth and operational excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/career">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-blue text-blue hover:bg-blue/5 px-8 py-6 text-lg transition-all duration-300"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Business Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver integrated solutions across consulting, compliance, and operations to help your business thrive in a competitive global market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link 
                key={service.title}
                href={service.href}
                className="group p-8 rounded-xl bg-white border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline"
              className="border-blue text-blue hover:bg-blue/5"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why India Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">Strategic Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Why India is Your Global Business Partner
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                India offers unparalleled advantages for global businesses seeking growth, efficiency, and access to world-class talent. Our deep expertise in the Indian market positions us as your ideal strategic partner.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Globe, title: 'Global Talent Hub', desc: 'Access to millions of skilled professionals' },
                  { icon: TrendingUp, title: 'Cost Efficiency', desc: 'Significant cost savings without compromising quality' },
                  { icon: Award, title: 'Quality Excellence', desc: 'World-class standards and certifications' },
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
              
              <Button 
                asChild
                className="mt-8 bg-gold hover:bg-gold-dark text-foreground font-semibold"
              >
                <Link href="/why-india">
                  Explore India Advantage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary border border-border p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-bold text-gold mb-4">1.4B+</div>
                  <p className="text-foreground text-xl font-medium">Population</p>
                  <p className="text-muted-foreground mt-2">World&apos;s Largest Talent Pool</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-video rounded-2xl bg-white border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">25+</div>
                  <p className="text-foreground text-lg">Years of Excellence</p>
                  <p className="text-muted-foreground text-sm mt-2">Serving Global Enterprises</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">About AU Corporate</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Your Trusted Partner in Business Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AU Corporate stands as a beacon of professional excellence in the global consulting landscape. With over two decades of experience, we have established ourselves as a trusted advisor to Fortune 500 companies and emerging businesses alike.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our commitment to integrity, innovation, and client success has positioned us among the leading consulting firms worldwide. We believe in growing together with our clients, creating lasting partnerships that drive sustainable value.
              </p>
              
              <Button 
                asChild
                variant="outline"
                className="border-blue text-blue hover:bg-blue/5"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Partner with AU Corporate and unlock your organization&apos;s full potential. Let&apos;s discuss how we can help you achieve your business goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/career">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-blue text-blue hover:bg-blue/5 px-8 py-6 text-lg"
            >
              <a href="mailto:info@aucorporate.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
