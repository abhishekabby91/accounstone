import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'Australian Accounting & Bookkeeping Services',
  description:
    'Australian accounting and bookkeeping services — IFRS-aligned reporting, ATO requirements, and GST/BAS-ready records for businesses operating in Australia.',
  path: '/markets/australia',
});

export default function AustraliaMarketPage() {
  const faqs = [
    {
      question: 'Do you work with IFRS accounting standards?',
      answer:
        "Yes, our bookkeeping and reporting work for Australian clients is structured around IFRS/AASB accounting standards. Formal compliance requirements for public or large proprietary companies — including ASIC and Corporations Act obligations — are confirmed with your accountant and auditor of record.",
    },
    {
      question: 'Can you help with GST?',
      answer:
        'Yes. We prepare BAS-ready GST records and reconciliations for monthly or quarterly reporting. Registration and lodgment with the ATO stay with you or your registered tax or BAS agent.',
    },
    {
      question: 'What about PAYG withholding and Super?',
      answer:
        'We calculate PAYG tax withholding and superannuation guarantee contributions as part of payroll processing, and prepare the records that feed SuperStream reporting. Lodgment stays with your registered agent.',
    },
    {
      question: 'Are you familiar with ABN and registration?',
      answer:
        "Yes. We can help organize the documentation needed for ABN registration and prepare BAS-ready records. Registration and lodgment are completed by you or your registered agent — final ATO compliance responsibility sits with the business and its registered tax or BAS agent.",
    },
    {
      question: 'Do you support both companies and sole traders?',
      answer:
        'Yes, we serve companies, sole traders, partnerships, and trusts with specialized knowledge of each entity type.',
    },
    {
      question: 'Can you help with tax planning?',
      answer:
        'We prepare the bookkeeping and documentation that tax planning depends on, including BAS-ready GST records and structured accounts. Strategies like capital gains planning, negative gearing, and salary sacrificing are advice given by your registered tax agent or accountant, not something we provide directly.',
    },
  ];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'Australia', url: `${baseUrl}/markets/australia` },
]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Australian Market Expertise"
        title="Accounting Services for Australian Businesses"
        description="Accounting, bookkeeping, and tax preparation support structured around Australian ATO and GST requirements."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services/bookkeeping/australia' }}
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Australian Market</span>
            <Reveal><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">
              Australian Accounting Expertise
            </h2></Reveal>
            <p className="text-lg text-muted leading-relaxed">
              Australian accounting requires specialized knowledge of ATO requirements, GST compliance, and superannuation rules. Our Australian-focused team brings expertise in regulatory requirements and industry practices. Whether you're managing Australian operations or expanding to Australia, we provide accounting and bookkeeping support built for the local requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Australian Expertise</h3>
              <ul className="space-y-3">
                {[
                  'IFRS accounting standards',
                  'ATO tax compliance',
                  'Income tax return preparation',
                  'GST management and reconciliation',
                  'PAYG withholding and remittance',
                  'Superannuation guarantee compliance',
                  'Business activity statements (BAS)',
                  'Fringe benefits tax (FBT) reporting support',
                  'Capital gains tax reporting support',
                  'Audit support services',
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
                  { name: 'Property and real estate', href: '/industries/real-estate' },
                  { name: 'Professional services', href: '/industries/professional-services' },
                  { name: 'Healthcare and medical', href: '/industries/healthcare' },
                  { name: 'Retail and e-commerce', href: '/industries/ecommerce' },
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
              Services for Australian Markets
            </h2></Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Bookkeeping', href: '/services/bookkeeping/australia' },
              { name: 'Accounting Services', href: '/services/accounting' },
              { name: 'Tax Preparation', href: '/services/tax-preparation/australia' },
              { name: 'Payroll Processing', href: '/services/payroll/australia' },
              { name: 'Accounts Payable', href: '/services/accounts-payable/australia' },
              { name: 'Accounts Receivable', href: '/services/accounts-receivable/australia' },
              { name: 'Audit Support', href: '/services/audit-support/australia' },
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

      <FAQSection subtitle="Australian Market FAQs" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Expand Your Australian Accounting Capabilities?"
        description="Let our Australian experts help you navigate compliance and scale your operations."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
