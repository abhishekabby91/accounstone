import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'NetSuite ERP Solutions & Support',
  description:
    'Expert NetSuite implementation, optimization, and support for enterprise accounting and financial operations.',
  path: '/technology/netsuite',
});

const faqs = [
  {
    question: 'Can you help migrate us from QuickBooks or Xero to NetSuite?',
    answer:
      'Yes, we support migrations from small-business platforms to NetSuite as companies outgrow them, including chart of accounts redesign and historical data migration planning.',
  },
  {
    question: 'Do you support multi-subsidiary and multi-currency consolidation?',
    answer:
      'Yes, multi-subsidiary, multi-currency, and intercompany consolidation is one of the main reasons companies move to NetSuite, and it\'s a core part of what we support.',
  },
  {
    question: 'Can you handle ASC 606 revenue recognition within NetSuite?',
    answer:
      "Yes, we configure and manage revenue recognition workflows in NetSuite aligned with ASC 606 for multi-period and subscription-based revenue.",
  },
  {
    question: 'How long does a typical NetSuite implementation take?',
    answer:
      'It depends on complexity — a straightforward single-entity setup can take a few weeks, while multi-subsidiary or heavily customized implementations take longer. We scope this specifically during initial review.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'NetSuite', url: `${baseUrl}/technology/netsuite` },
]);

export default function NetSuitePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="Enterprise ERP Platform"
        title="NetSuite ERP Solutions"
        description="Expert NetSuite implementation and support for complex organizations with advanced accounting and financial operations."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">NetSuite ERP</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              NetSuite Enterprise Expertise
            </h2></Reveal>
            <p className="text-lg text-muted leading-relaxed">
              NetSuite is the leading cloud-based ERP solution for mid-market and enterprise organizations. Our team brings expertise in NetSuite implementation, configuration, optimization, and ongoing support for complex financial operations including multi-entity, multi-currency, and multi-subsidiary scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our NetSuite Services</h3>
              <ul className="space-y-3">
                {[
                  'NetSuite implementation and deployment',
                  'Multi-subsidiary and multi-entity setup',
                  'Advanced financial consolidation',
                  'Revenue recognition and compliance',
                  'Intercompany transactions',
                  'Period close and reporting automation',
                  'Custom workflow configuration',
                  'Integration with external systems',
                  'NetSuite optimization and tuning',
                  'Ongoing support and administration',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose NetSuite</h3>
              <ul className="space-y-3">
                {[
                  'Comprehensive cloud ERP solution',
                  'Multi-subsidiary and multi-currency',
                  'Advanced financial consolidation',
                  'Real-time financial visibility',
                  'Industry-specific functionality',
                  'Advanced reporting and analytics',
                  'Integration with global operations',
                  'Automated period close workflows',
                  'Enterprise-grade security',
                  'SaaS platform with continuous updates',
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
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Services</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Services We Deliver in NetSuite
            </h2></Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Accounting Services', slug: 'accounting' },
              { name: 'Financial Reporting', slug: 'accounting' },
              { name: 'Bookkeeping', slug: 'bookkeeping' },
              { name: 'Tax Preparation', slug: 'tax-preparation' },
              { name: 'Audit Support', slug: 'audit-support' },
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

      <FAQSection subtitle="NetSuite Questions" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Implement or Optimize NetSuite?"
        description="Let our NetSuite experts help you succeed with your enterprise ERP."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
