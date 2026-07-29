import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'Sage Accounting Software Services',
  description:
    'Expert Sage accounting software setup, integration, and support. Optimize your Sage platform for efficient accounting operations.',
  path: '/technology/sage',
});

export default function SagePage() {
  const faqs = [
    {
      question: 'Can you implement Sage for our business?',
      answer: 'Yes, we handle complete Sage implementation including setup, configuration, training, and integration with your existing systems.',
    },
    {
      question: 'Do you provide ongoing Sage support?',
      answer: 'Absolutely. We offer monthly accounting services using Sage, troubleshooting, optimization, and user support.',
    },
    {
      question: 'Can Sage integrate with other systems?',
      answer: 'Yes, we integrate Sage with CRM systems, payroll, e-commerce, and other business applications.',
    },
    {
      question: 'Do you support multi-company accounting?',
      answer: 'Yes, we configure Sage for multi-entity operations with proper consolidation and reporting.',
    },
    {
      question: 'How do you optimize Sage workflows?',
      answer: 'We customize reports, set up automation, configure approval workflows, and optimize your chart of accounts.',
    },
    {
      question: 'Can you migrate data to Sage?',
      answer: 'Yes, we migrate historical data from legacy systems to Sage with proper reconciliation and validation.',
    },
  ];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'Sage', url: `${baseUrl}/technology/sage` },
]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Platform Expertise"
        title="Sage Accounting Software Services"
        description="Expert Sage implementation, optimization, and support. Leverage Sage's comprehensive features for your accounting operations."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Sage Software</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Sage Accounting Expertise
            </h2></Reveal>
            <p className="text-lg text-muted leading-relaxed">
              Sage is a powerful accounting platform for businesses of all sizes. Our team brings deep expertise in Sage implementation, configuration, and support. We help you leverage Sage's capabilities to streamline accounting, improve reporting, and gain financial insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Sage Services</h3>
              <ul className="space-y-3">
                {[
                  'Sage implementation and setup',
                  'Chart of accounts design and configuration',
                  'Multi-company setup and consolidation',
                  'Monthly bookkeeping and accounting',
                  'Bank reconciliation and reporting',
                  'Integration with business systems',
                  'Custom report development',
                  'User training and support',
                  'System optimization and upgrades',
                  'Data migration from legacy systems',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose Sage</h3>
              <ul className="space-y-3">
                {[
                  'Comprehensive accounting functionality',
                  'Scalable for growing businesses',
                  'Multi-company and multi-location support',
                  'Advanced reporting and analytics',
                  'Integration capabilities',
                  'Industry-specific functionality',
                  'Mobile accessibility',
                  'Strong user community',
                  'Regular updates and improvements',
                  'Competitive pricing',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Related Services</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Services We Deliver in Sage
            </h2></Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Bookkeeping', slug: 'bookkeeping' },
              { name: 'Accounting Services', slug: 'accounting' },
              { name: 'Financial Reporting', slug: 'accounting' },
              { name: 'Accounts Payable', slug: 'accounts-payable' },
              { name: 'Accounts Receivable', slug: 'accounts-receivable' },
              { name: 'Tax Preparation', slug: 'tax-preparation' },
            ].map((service, i) => (
              <Link
                key={i}
                href={`/services/${service.slug}`}
                className="p-6 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors group"
              >
                <h3 className="font-bold text-primary text-lg group-hover:text-primary-light transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Sage FAQs" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Optimize Your Sage Accounting?"
        description="Let our Sage experts implement and optimize your accounting system."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
