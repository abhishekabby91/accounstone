import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'UK Accounting & Bookkeeping Services',
  description:
    'UK accounting and bookkeeping services — IFRS-aligned reporting, VAT-ready records, and Companies House and corporation tax return preparation.',
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
      question: 'Can you help with VAT?',
      answer:
        'Yes. We prepare VAT-coded transactions, reconciliations, and return calculations. VAT registration and the actual return submission are completed by you or your accountant of record — we do not hold HMRC portal credentials.',
    },
    {
      question: 'What about Companies House filing?',
      answer:
        "We prepare statutory accounts and confirmation statement data for your review. Filing with Companies House and any director-level legal obligations stay with your company's registered accountant or company secretary.",
    },
    {
      question: 'Can you help with corporation tax?',
      answer:
        "We prepare corporation tax return calculations and supporting workpapers for your accountant's review and submission. Identifying R&D relief or other reliefs your business may qualify for is a specialist tax question best directed to your accountant or an R&D tax specialist.",
    },
    {
      question: 'Do you support payroll in the UK?',
      answer:
        'Yes, we process UK payroll including PAYE withholding calculations, National Insurance contributions, records for RTI reporting, and pension auto-enrolment bookkeeping.',
    },
    {
      question: 'What about limited companies vs sole traders?',
      answer:
        'We support both limited companies and sole traders, with bookkeeping and return preparation structured around whichever entity type applies. Entity structure decisions are a legal and tax question for your accountant or advisor.',
    },
  ];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United Kingdom', url: `${baseUrl}/markets/united-kingdom` },
]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="UK Market Expertise"
        title="Accounting Services for UK Businesses"
        description="Accounting, bookkeeping, and tax preparation support structured around UK VAT, Companies House and corporation tax requirements."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services/bookkeeping/united-kingdom' }}
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">United Kingdom Market</span>
            <Reveal><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">
              UK Accounting Expertise
            </h2></Reveal>
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
                  'Corporation tax return preparation',
                  'VAT reconciliation and return preparation',
                  'Self-assessment and personal tax preparation',
                  'PAYE and payroll processing',
                  'Companies House filing preparation',
                  'Pension auto-enrolment bookkeeping',
                  'Bank and credit-card reconciliations',
                  'Management reporting for UK entities',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Industries We Serve</h3>
              <ul className="space-y-3">
                {[
                  { name: 'CPA and accounting firms', href: '/industries/cpa-firms' },
                  { name: 'Technology and software', href: '/industries/technology' },
                  { name: 'Healthcare and medical practices', href: '/industries/healthcare' },
                  { name: 'Professional services', href: '/industries/professional-services' },
                  { name: 'Retail and e-commerce', href: '/industries/ecommerce' },
                  { name: 'Property and real estate', href: '/industries/real-estate' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <Link href={item.href} className="text-foreground hover:text-accent hover:underline">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Services</span>
            <Reveal><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">
              Services for UK Markets
            </h2></Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Bookkeeping', href: '/services/bookkeeping/united-kingdom' },
              { name: 'Accounting Services', href: '/services/accounting' },
              { name: 'Tax Preparation', href: '/services/tax-preparation/united-kingdom' },
              { name: 'Payroll Processing', href: '/services/payroll' },
              { name: 'Accounts Payable', href: '/services/accounts-payable' },
              { name: 'Accounts Receivable', href: '/services/accounts-receivable' },
              { name: 'Audit Support', href: '/services/audit-support/united-kingdom' },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
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
