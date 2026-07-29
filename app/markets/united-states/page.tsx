import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'U.S. Accounting & Bookkeeping Services',
  description:
    'Expert accounting services for U.S. businesses. GAAP compliance, federal tax, state tax, payroll, and financial reporting. Serve your U.S. clients better.',
  path: '/markets/united-states',
});

export default function USMarketPage() {
  const faqs = [
    {
      question: 'What tax regulations do you specialize in?',
      answer:
        'We specialize in federal, state, and local tax compliance including GAAP accounting, federal income tax, state tax (varies by state), local property tax, and industry-specific compliance.',
    },
    {
      question: 'Do you handle S-Corps and LLCs?',
      answer:
        'Yes, we serve sole proprietors, partnerships, S-Corps, C-Corps, and LLCs with specialized knowledge of entity selection and tax planning.',
    },
    {
      question: 'What about state-specific requirements?',
      answer:
        'Each U.S. state has unique tax requirements. We maintain expertise across all 50 states and handle specific state compliance, filings, and reporting.',
    },
    {
      question: 'Can you handle multi-state operations?',
      answer:
        'Absolutely. We manage accounting for businesses operating across multiple states with proper nexus analysis, tax allocation, and reporting.',
    },
    {
      question: 'What payroll taxes do you manage?',
      answer:
        'We handle federal payroll taxes (FICA, FUTA), state unemployment insurance, and state income tax withholding with proper quarterly filings.',
    },
    {
      question: 'Are you familiar with SOX compliance?',
      answer:
        'Yes, for public companies, we provide SOX compliance support including internal control documentation and financial reporting requirements.',
    },
  ];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United States', url: `${baseUrl}/markets/united-states` },
]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="U.S. Market Expertise"
        title="Accounting Services for U.S. Businesses"
        description="Expert accounting, bookkeeping, and tax services tailored to U.S. federal, state, and local requirements. From startups to established firms, we support your growth."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">United States Market</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              U.S. Accounting Expertise
            </h2></Reveal>
            <p className="text-lg text-muted leading-relaxed">
              The U.S. market requires expertise in federal taxes, state and local compliance, and industry-specific regulations. Our team brings deep knowledge of GAAP accounting standards, complex tax rules, and evolving regulatory requirements. Whether you're a CPA firm, accounting practice, or business, we provide reliable support to grow your U.S. operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our U.S. Expertise</h3>
              <ul className="space-y-3">
                {[
                  'Federal income tax compliance',
                  'State and local tax compliance',
                  'Payroll and FICA tax management',
                  'Multi-state tax optimization',
                  'GAAP financial reporting',
                  'Quarterly estimated tax planning',
                  '1099 and W-2 processing',
                  'Sales tax and use tax compliance',
                  'Industry-specific regulations',
                  'CFO and financial advisory services',
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
                  'Technology and SaaS',
                  'E-commerce and retail',
                  'Healthcare and medical practices',
                  'Real estate and property management',
                  'Professional services and consulting',
                  'Manufacturing and distribution',
                  'Non-profit organizations',
                  'Financial services',
                  'Construction and contracting',
                  'Hospitality and restaurants',
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
              Services for U.S. Markets
            </h2></Reveal>
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

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">By State</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              State-Specific Considerations
            </h2></Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Texas', slug: 'texas', note: 'Franchise tax awareness, no state income tax' },
              { name: 'California', slug: 'california', note: 'CDTFA sales tax, FTB coordination' },
              { name: 'Florida', slug: 'florida', note: 'No personal income tax, corporate tax clarity' },
            ].map((state, i) => (
              <Reveal key={state.slug} delay={Math.min(i * 0.08, 0.24)}>
                <Link
                  href={`/markets/united-states/${state.slug}`}
                  className="block h-full p-6 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-primary text-lg mb-2">{state.name}</h3>
                  <p className="text-sm text-muted">{state.note}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="U.S. Market FAQs" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Expand Your U.S. Accounting Capabilities?"
        description="Let our U.S. market experts help you serve your clients better."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
