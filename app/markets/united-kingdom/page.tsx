import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'UK Accounting & Bookkeeping Services',
  description:
    'Expert UK accounting services. IFRS compliance, VAT management, Companies House reporting, and corporation tax. Support your UK operations.',
  path: '/markets/united-kingdom',
});

export default function UKMarketPage() {
  const faqs = [
    {
      question: 'Are you familiar with UK IFRS standards?',
      answer:
        'Yes, we use IFRS accounting standards for all UK clients. We ensure compliance with international financial reporting standards and UK-specific requirements.',
    },
    {
      question: 'Do you handle VAT compliance?',
      answer:
        'Absolutely. We manage VAT registration, returns, compliance, and optimization for UK businesses with full knowledge of current VAT rules.',
    },
    {
      question: 'What about Companies House filing?',
      answer:
        'We handle all Companies House requirements including statutory accounts filing, confirmation statements, and director obligations.',
    },
    {
      question: 'Can you manage corporation tax?',
      answer:
        'Yes, we handle corporation tax returns, calculations, and payments with optimization for R&D relief and other CT reliefs available.',
    },
    {
      question: 'Do you support payroll in the UK?',
      answer:
        'Yes, we manage UK payroll including PAYE withholding, National Insurance contributions, RTI reporting, and pension contributions.',
    },
    {
      question: 'What about limited companies vs sole traders?',
      answer:
        'We serve both limited companies and sole traders with specialized knowledge of corporation tax vs self-assessment and entity structure optimization.',
    },
  ];

  return (
    <main>
      <PremiumHero
        subtitle="UK Market Expertise"
        title="Accounting Services for UK Businesses"
        description="Expert accounting, bookkeeping, and tax services tailored to UK regulations. IFRS, VAT, and Companies House compliance included."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">United Kingdom Market</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              UK Accounting Expertise
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              UK accounting requires expertise in IFRS standards, VAT compliance, Companies House requirements, and corporation tax. Our UK-focused team brings deep knowledge of regulatory requirements and industry-specific practices. Whether you're expanding to the UK or supporting existing operations, we provide expert accounting and compliance services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our UK Expertise</h3>
              <ul className="space-y-3">
                {[
                  'IFRS financial reporting',
                  'Corporation tax compliance',
                  'VAT management and optimization',
                  'Self-assessment and personal tax',
                  'PAYE and payroll management',
                  'Companies House compliance',
                  'Director obligations and filings',
                  'Pension and benefits administration',
                  'R&D tax relief',
                  'Grant funding and incentives',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Industries We Serve</h3>
              <ul className="space-y-3">
                {[
                  'Technology and software',
                  'Financial services',
                  'Healthcare and pharmaceuticals',
                  'Professional services',
                  'Retail and e-commerce',
                  'Construction and engineering',
                  'Manufacturing and distribution',
                  'Property and real estate',
                  'Hospitality and leisure',
                  'Non-profit and charities',
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
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Services for UK Markets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Bookkeeping', slug: 'bookkeeping' },
              { name: 'Accounting Services', slug: 'accounting' },
              { name: 'Tax Preparation', slug: 'tax-preparation' },
              { name: 'Payroll Processing', slug: 'payroll' },
              { name: 'Accounts Payable', slug: 'accounts-payable' },
              { name: 'Accounts Receivable', slug: 'accounts-receivable' },
              { name: 'CFO Support', slug: 'cfo-support' },
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

      <FAQSection subtitle="UK Market FAQs" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Expand Your UK Accounting Capabilities?"
        description="Let our UK experts help you navigate regulatory compliance and scale your operations."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
