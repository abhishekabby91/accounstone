import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import TestimonialsSection from '@/components/testimonials-section';
import FAQSection from '@/components/faq-section';
import { generateMetadata } from '@/lib/seo';
import { services, solutions, testimonials, trustBadges } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Accounting & Finance Solutions',
  description:
    'Professional outsourced accounting, finance, and HR services for growing businesses. Expert CPAs, dedicated teams, and strategic financial solutions.',
  path: '/',
});

const homePageFAQs = [
  {
    question: 'What services does Accounstone provide?',
    answer:
      'We provide comprehensive accounting services including bookkeeping, tax planning, financial advisory, HR compliance, audit and assurance, and dedicated accounting teams. Our solutions are tailored to businesses of all sizes.',
  },
  {
    question: 'How do you ensure data security?',
    answer:
      'We maintain ISO 27001 certification, SOC 2 Type II compliance, and implement enterprise-grade security measures including encryption, access controls, and regular security audits.',
  },
  {
    question: 'Can you work with our existing software?',
    answer:
      'Yes, we integrate with QuickBooks, Xero, NetSuite, Sage, and custom systems. Our team is experienced with all major accounting platforms.',
  },
  {
    question: 'How quickly can you get started?',
    answer:
      'Most clients are onboarded within 2-4 weeks. We work closely with your team to understand your processes, requirements, and goals before beginning work.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer flexible pricing based on scope of services, volume of transactions, and engagement model. Contact us for a customized quote.',
  },
  {
    question: 'Do you provide offshore accounting services?',
    answer:
      'Yes, we have offshore teams in multiple countries providing cost-effective accounting support while maintaining the same high standards as onshore services.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <PremiumHero
        subtitle="Trusted by 500+ Businesses"
        title="Outsourced Accounting & Finance Solutions"
        description="Expert accounting services, dedicated teams, and strategic financial guidance. Scale your business without the overhead."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
          variant: 'primary',
        }}
        ctaSecondary={{
          text: 'Explore Services',
          href: '/solutions',
        }}
        background="primary-gradient"
      />

      {/* Trust Badges */}
      <section className="w-full py-12 px-6 md:px-8 bg-white border-t-2 border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-muted mb-6 uppercase tracking-wide font-semibold">
            Trusted by Leading Firms
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="text-3xl">{badge.icon}</div>
                <span className="text-xs md:text-sm font-semibold text-center text-primary">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <SectionGrid
        subtitle="Our Offerings"
        title="Flexible Service Solutions"
        description="Choose the right engagement model for your business needs."
        items={solutions}
        baseUrl="/solutions"
        columns={3}
        variant="default"
      />

      {/* Services Section */}
      <SectionGrid
        subtitle="What We Do"
        title="Comprehensive Accounting Services"
        description="Expert services across all areas of accounting and finance."
        items={services}
        baseUrl="/services"
        columns={3}
        variant="default"
      />

      {/* Why Accounstone Section */}
      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
                Beyond Accounting, Strategic Partnership
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                We don&apos;t just handle the numbers. We become an extension of your team,
                providing strategic guidance to help your business grow profitably.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  'Expert CPAs with 10+ years of experience',
                  'Dedicated support during critical periods',
                  'Proactive tax planning and optimization',
                  'Advanced technology and automation',
                  'Transparent reporting and communication',
                  'Flexible engagement models',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="text-accent text-2xl flex-shrink-0">✓</div>
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 md:p-12 text-white space-y-6">
              <div className="space-y-2">
                <div className="text-5xl font-bold">500+</div>
                <p className="text-white/80 text-lg">Active Clients</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">$2B+</div>
                <p className="text-white/80 text-lg">Transactions Managed</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">15+</div>
                <p className="text-white/80 text-lg">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} subtitle="Client Stories" />

      {/* FAQ */}
      <FAQSection subtitle="Common Questions" items={homePageFAQs} columns={2} />

      {/* Final CTA */}
      <CTABanner
        title="Ready to Transform Your Finance Operations?"
        description="Let us handle the accounting while you focus on growing your business."
        cta={{
          text: 'Start Your Free Consultation',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'Learn More',
          href: '/about',
        }}
        background="primary"
      />
    </main>
  );
}
