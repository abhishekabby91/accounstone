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

const PATH = '/services/tax-preparation/united-kingdom';

export const metadata: Metadata = genMeta({
  title: 'UK Tax Preparation Support Services',
  description:
    'Tax preparation support for UK businesses — Self Assessment and Corporation Tax documentation, working under your accountant or tax agent\'s review, aligned with HMRC requirements.',
  path: PATH,
});

const overview =
  "UK tax preparation splits into two main tracks: Self Assessment for sole traders and individuals, and Corporation Tax for limited companies, both filed through HMRC's online systems. We support the preparation and documentation work — organising records, reconciling figures, and preparing supporting schedules — working under the review of your UK accountant or tax agent, who retains final sign-off and filing responsibility.";

const benefits = [
  'Self Assessment documentation preparation for sole traders and individuals',
  'Corporation Tax return preparation support for limited companies',
  'Records organised and reconciled ahead of your accountant\'s review',
  'HMRC online filing-ready documentation',
  'Support during UK tax season capacity crunches (January Self Assessment deadline)',
  'Coordination with your UK accountant or registered tax agent for final review and filing',
];

const faqs = [
  {
    question: 'Do you file tax returns directly with HMRC?',
    answer:
      'No — we support the preparation and documentation process, but final review, sign-off, and filing is handled by your UK accountant or registered tax agent, consistent with how UK tax practice works.',
  },
  {
    question: 'Can you help before the January Self Assessment deadline?',
    answer:
      'Yes, this is one of the most common ways firms and businesses use our support — absorbing preparation workload ahead of the 31 January Self Assessment deadline so your accountant can focus on review and client conversations.',
  },
  {
    question: 'Do you support Corporation Tax preparation for limited companies?',
    answer:
      'Yes, we prepare supporting documentation and reconciliations for Corporation Tax returns, working alongside your accountant for the actual CT600 filing.',
  },
  {
    question: 'What accounting software do you work within?',
    answer:
      'We work within Xero and other MTD-compatible platforms, fitting into however your accountant or firm already operates.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Tax Preparation Support for UK Businesses',
  description: overview,
  slug: 'tax-preparation/united-kingdom',
  basePath: '/services/',
  areaServed: ['GB'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Tax Preparation', url: `${baseUrl}/services/tax-preparation` },
  { name: 'United Kingdom', url: `${baseUrl}${PATH}` },
]);

export default function TaxPrepUKPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Tax Preparation Support for UK Businesses"
        title="UK Tax Preparation Support Services"
        description="Self Assessment and Corporation Tax preparation support, working under your accountant or tax agent's review."
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
          <li aria-current="page" className="text-primary font-medium">United Kingdom</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Support for UK Tax Preparation Workflows</h2>
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
        title="Preparing for Self Assessment or Corporation Tax?"
        description="Let's talk about your capacity needs before the next filing deadline."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
