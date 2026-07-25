import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/services/bookkeeping/united-states';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Bookkeeping Services for U.S. Businesses',
  description:
    'GAAP-based outsourced bookkeeping for U.S. businesses — QuickBooks Online and Xero support, multi-state sales tax tracking, and monthly close aligned to U.S. fiscal-year conventions.',
  path: PATH,
});

const overview =
  'Bookkeeping for U.S. businesses has its own set of conventions: books are kept under GAAP (Generally Accepted Accounting Principles), most businesses run on QuickBooks Online or Xero, and many companies need to track sales tax obligations across multiple states rather than a single national rate. We structure bookkeeping around these specifics rather than applying a generic international template.';

const benefits = [
  'GAAP-based recordkeeping aligned with U.S. accounting standards',
  'QuickBooks Online and Xero support — the two dominant U.S. small business platforms',
  'Multi-state sales tax nexus tracking as your business grows into new states',
  'Monthly close aligned to standard U.S. fiscal-year conventions',
  'Bank and credit card reconciliation across U.S. financial institutions',
  'Reporting formatted for U.S. CPAs and tax preparers at year-end',
];

const faqs = [
  {
    question: 'Do you work with QuickBooks Online specifically?',
    answer:
      'Yes, QuickBooks Online is one of our core supported platforms alongside Xero, covering setup, categorization, reconciliation, and reporting.',
  },
  {
    question: 'Can you track sales tax obligations across multiple states?',
    answer:
      "Yes, we help track where your sales activity may create tax nexus across states, and coordinate with your CPA or a sales tax filing service for the actual filings.",
  },
  {
    question: 'Will our books be ready for our U.S. CPA at tax time?',
    answer:
      'Yes, we format monthly and year-end reporting specifically so your CPA or tax preparer can move directly into tax prep without needing to redo or reclassify your books first.',
  },
  {
    question: 'Do you understand U.S. fiscal year and month-end close conventions?',
    answer:
      'Yes, our monthly close process follows standard U.S. accounting conventions and timelines that align with how U.S. CPAs and lenders expect to see financials.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Bookkeeping Services for U.S. Businesses',
  description: overview,
  slug: 'bookkeeping/united-states',
  basePath: '/services/',
  areaServed: ['US'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Bookkeeping', url: `${baseUrl}/services/bookkeeping` },
  { name: 'United States', url: `${baseUrl}${PATH}` },
]);

export default function BookkeepingUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Bookkeeping for U.S. Businesses"
        title="Outsourced Bookkeeping for U.S. Businesses"
        description="GAAP-based bookkeeping built around QuickBooks Online, Xero, and U.S. multi-state tax realities."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View All Services', href: '/services' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services/bookkeeping" className="hover:text-primary transition-colors">Bookkeeping</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Built for U.S. Accounting Conventions</h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">What You Get</h2>
            </>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <li className="flex items-start gap-4 p-6 bg-white rounded-lg border-2 border-border">
                  <div className="text-2xl shrink-0 text-accent" aria-hidden="true">✓</div>
                  <p className="text-foreground leading-relaxed">{b}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <CTABanner
        title="Ready for U.S.-Ready Books?"
        description="Let's talk about your current setup and what needs to change."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
