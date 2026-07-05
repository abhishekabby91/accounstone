import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Xero Accounting Services',
  description:
    'Expert Xero accounting software setup, optimization, and support. We manage your accounting using Xero for seamless cloud-based finance operations.',
  path: '/technology/xero',
});

export default function XeroPage() {
  const faqs = [
    {
      question: 'Can you set up Xero for our business?',
      answer:
        'Yes, we handle complete Xero setup including chart of accounts design, organization structure, user configuration, and integration with your systems.',
    },
    {
      question: 'What accounting services do you provide in Xero?',
      answer:
        'We provide bookkeeping, bank reconciliation, accounts payable, accounts receivable, financial reporting, payroll integration, and ongoing accounting support.',
    },
    {
      question: 'Does Xero work internationally?',
      answer:
        'Yes, Xero is used in over 180 countries. We support U.S., UK, and Australian accounting with proper compliance for each region.',
    },
    {
      question: 'Can we integrate Xero with other apps?',
      answer:
        'Yes, Xero integrates with hundreds of apps including CRM systems, payroll, e-commerce, and custom business software.',
    },
    {
      question: 'How do you optimize Xero workflows?',
      answer:
        'We configure automation rules, custom reports, invoice templates, approval workflows, and other features to maximize Xero efficiency.',
    },
    {
      question: 'Can you migrate our data to Xero?',
      answer:
        'Yes, we migrate your accounting data from other platforms to Xero including historical records with proper reconciliation.',
    },
  ];

  return (
    <main>
      <PremiumHero
        subtitle="Platform Expertise"
        title="Xero Cloud Accounting Services"
        description="Expert Xero accounting software setup, optimization, and support. Simplify your accounting with the world's most flexible cloud platform."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Xero Accounting</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Xero Cloud Accounting Expertise
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Xero is the world's most popular cloud accounting software for small to medium-sized businesses. With flexible features, powerful automation, and global support, Xero enables businesses to manage accounting efficiently from anywhere. Our team brings deep expertise in Xero setup, optimization, and support across all regions and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Xero Services</h3>
              <ul className="space-y-3">
                {[
                  'Xero setup and configuration',
                  'Multi-organization structure setup',
                  'Chart of accounts design',
                  'User and permission management',
                  'Monthly bookkeeping and reconciliation',
                  'Bank feeds and reconciliation',
                  'Accounts payable management',
                  'Accounts receivable management',
                  'Multi-currency support',
                  'Tax reporting configuration',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose Xero</h3>
              <ul className="space-y-3">
                {[
                  'Cloud-based with global accessibility',
                  'Powerful automation and workflows',
                  'Multi-organization management',
                  'Real-time financial visibility',
                  'Bank feeds for automatic reconciliation',
                  'Flexible invoicing and payment processing',
                  'Mobile app for on-the-go accounting',
                  'Integrations with 500+ business apps',
                  'Enterprise-grade security',
                  'Compliant with IFRS and local standards',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Services We Deliver in Xero
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Bookkeeping', slug: 'bookkeeping' },
              { name: 'Accounting Services', slug: 'accounting' },
              { name: 'Accounts Payable', slug: 'accounts-payable' },
              { name: 'Accounts Receivable', slug: 'accounts-receivable' },
              { name: 'Tax Preparation', slug: 'tax-preparation' },
              { name: 'Financial Reporting', slug: 'accounting' },
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

      <FAQSection subtitle="Xero FAQs" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Harness the Power of Xero?"
        description="Let our Xero experts set up and optimize your accounting for growth."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
