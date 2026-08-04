import { Metadata } from 'next';
import { Check } from 'lucide-react';
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

const PATH = '/services/bookkeeping/united-kingdom';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Bookkeeping Services for UK Businesses',
  description:
    'Outsourced bookkeeping for UK businesses — Making Tax Digital (MTD) compliant record-keeping, VAT tracking, and Xero support aligned with HMRC and Companies House requirements.',
  path: PATH,
});

const overview =
  "Bookkeeping for UK businesses runs on a different set of rules than other markets: HMRC's Making Tax Digital (MTD) initiative requires digital record-keeping and software-based VAT submissions rather than manual spreadsheets, VAT tracking needs to reflect the correct rate and scheme for your business, and annual accounts eventually need to reconcile cleanly for Companies House filing. Xero is the dominant platform in the UK market, and we structure bookkeeping around these specifics rather than applying a generic international template.";

const benefits = [
  'Making Tax Digital (MTD) compliant digital record-keeping',
  'VAT tracking and categorisation aligned with your registered VAT scheme',
  'Xero support — the leading bookkeeping platform in the UK market',
  'Monthly reconciliation structured for clean Companies House annual accounts',
  'UK fiscal year conventions (customisable company year-end, standard 6 April Self Assessment year)',
  'Reporting formatted for your UK accountant or tax agent at year-end',
];

const faqs = [
  {
    question: 'Do you handle Making Tax Digital (MTD) requirements?',
    answer:
      'Yes, we maintain digital records structured for MTD compliance and work within MTD-compatible software so your VAT submissions meet HMRC\'s digital record-keeping requirements.',
  },
  {
    question: 'Can you manage VAT tracking for our business?',
    answer:
      'Yes, we track VAT on transactions according to your registered scheme (standard, flat rate, or cash accounting) and prepare the underlying records your accountant or tax agent needs for submission.',
  },
  {
    question: 'Do you work with Xero specifically?',
    answer:
      'Yes, Xero is one of our core supported platforms, and it\'s the platform most UK small businesses and accountants already use, so integration is typically straightforward.',
  },
  {
    question: 'Will our books be ready for Companies House annual accounts?',
    answer:
      'Yes, we structure monthly reconciliation and reporting so your accountant can move directly into preparing annual accounts for Companies House without needing to redo your books first.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Bookkeeping Services for UK Businesses',
  description: overview,
  slug: 'bookkeeping/united-kingdom',
  basePath: '/services/',
  areaServed: ['GB'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Bookkeeping', url: `${baseUrl}/services/bookkeeping` },
  { name: 'United Kingdom', url: `${baseUrl}${PATH}` },
]);

export default function BookkeepingUKPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Bookkeeping for UK Businesses"
        title="Outsourced Bookkeeping for UK Businesses"
        description="MTD-compliant record-keeping, VAT tracking, and Xero support built around HMRC and Companies House requirements."
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
          <li aria-current="page" className="text-primary font-medium">United Kingdom</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Built for UK Accounting Conventions</h2>
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
                  <Check className="shrink-0 text-accent w-5 h-5" aria-hidden="true" />
                  <p className="text-foreground leading-relaxed">{b}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <CTABanner
        title="Ready for MTD-Ready Books?"
        description="Let's talk about your current setup and what needs to change."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
