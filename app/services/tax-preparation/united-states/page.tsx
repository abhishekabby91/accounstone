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

const PATH = '/services/tax-preparation/united-states';

export const metadata: Metadata = genMeta({
  title: 'U.S. Tax Preparation Support Services',
  description:
    'Tax preparation support for U.S. businesses and CPA firms — federal and state return preparation assistance, quarterly estimated tax tracking, and IRS e-filing-ready documentation.',
  path: PATH,
});

const overview =
  "U.S. tax preparation involves layering federal and state requirements, tracking quarterly estimated tax deadlines, and preparing documentation that's e-filing ready. We support CPA firms and businesses with return preparation assistance, working under the review and sign-off of a licensed CPA or Enrolled Agent — we handle the preparation workload, not the final professional judgment or filing authority, which stays with your licensed tax professional.";

const benefits = [
  'Federal and state tax return preparation assistance for CPA-reviewed filings',
  'Quarterly estimated tax deadline tracking and documentation',
  'IRS e-filing-ready documentation and organization',
  'Support during peak U.S. tax season (January-April) capacity crunches',
  'Coordination with your CPA or Enrolled Agent for final review and filing',
  'Compatible with Drake Tax and CCH Axcess workflows',
];

const faqs = [
  {
    question: 'Do you file tax returns directly with the IRS?',
    answer:
      'No — we support the preparation and documentation process, but final review, sign-off, and filing is handled by your licensed CPA or Enrolled Agent, consistent with U.S. tax practice requirements.',
  },
  {
    question: 'Can you help during tax season capacity crunches?',
    answer:
      'Yes, this is one of the most common ways firms use our support — absorbing preparation workload during the January-April peak so your licensed staff can focus on review and client-facing work.',
  },
  {
    question: 'Do you track quarterly estimated tax deadlines?',
    answer:
      'Yes, we track quarterly estimated tax deadlines and help keep supporting documentation organized ahead of each due date.',
  },
  {
    question: 'What tax software do you support?',
    answer:
      'We work within Drake Tax and CCH Axcess workflows, fitting into however your firm already operates rather than requiring a new system.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Tax Preparation Support for U.S. Businesses',
  description: overview,
  slug: 'tax-preparation/united-states',
  basePath: '/services/',
  areaServed: ['US'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Tax Preparation', url: `${baseUrl}/services/tax-preparation` },
  { name: 'United States', url: `${baseUrl}${PATH}` },
]);

export default function TaxPrepUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Tax Preparation Support for U.S. Businesses"
        title="U.S. Tax Preparation Support Services"
        description="Federal and state return preparation assistance, working under your CPA or Enrolled Agent's review."
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
          <li><Link href="/services/tax-preparation" className="hover:text-primary transition-colors">Tax Preparation</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Support for U.S. Tax Preparation Workflows</h2>
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
        title="Need Tax Season Support?"
        description="Let's talk about your capacity needs before the next filing deadline."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
