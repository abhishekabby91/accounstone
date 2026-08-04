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

const PATH = '/services/tax-preparation/australia';

export const metadata: Metadata = genMeta({
  title: 'Australian Tax Preparation Support Services',
  description:
    'Tax preparation support for Australian businesses — income tax return and BAS lodgment documentation, working under your registered tax agent or BAS agent\'s review, aligned with ATO requirements.',
  path: PATH,
});

const overview =
  "Australian tax preparation runs on the ATO's systems and calendar: the Australian financial year runs 1 July to 30 June, BAS lodgments happen periodically throughout the year (monthly, quarterly, or annually depending on your business), and income tax returns are prepared and lodged by a registered tax agent. Only agents registered with the Tax Practitioners Board can lodge on a client's behalf — we support the preparation and documentation work underneath that, not the registered lodgment itself.";

const benefits = [
  'Income tax return documentation preparation for ATO lodgment',
  'BAS preparation support aligned with your lodgment cycle (monthly, quarterly, or annual)',
  'Records organised and reconciled ahead of your tax agent\'s review',
  'Support aligned with the Australian financial year (1 July to 30 June)',
  'Support during EOFY (End of Financial Year) capacity crunches',
  'Coordination with your registered tax agent or BAS agent for final review and lodgment',
];

const faqs = [
  {
    question: 'Do you lodge tax returns or BAS directly with the ATO?',
    answer:
      'No — only agents registered with the Tax Practitioners Board can lodge on a client\'s behalf. We support the preparation and documentation process, and your registered tax agent or BAS agent handles final review and lodgment.',
  },
  {
    question: 'Can you help during EOFY (End of Financial Year)?',
    answer:
      'Yes, this is one of the most common ways businesses and firms use our support — absorbing preparation workload around 30 June so your tax agent can focus on review and client conversations.',
  },
  {
    question: 'Do you support quarterly BAS lodgment cycles?',
    answer:
      'Yes, we prepare BAS documentation aligned with whichever lodgment cycle applies to your business — monthly, quarterly, or annual.',
  },
  {
    question: 'What accounting software do you work within?',
    answer:
      'We work within Xero and MYOB, the two platforms most Australian tax and BAS agents already use.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Tax Preparation Support for Australian Businesses',
  description: overview,
  slug: 'tax-preparation/australia',
  basePath: '/services/',
  areaServed: ['AU'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Tax Preparation', url: `${baseUrl}/services/tax-preparation` },
  { name: 'Australia', url: `${baseUrl}${PATH}` },
]);

export default function TaxPrepAUPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Tax Preparation Support for Australian Businesses"
        title="Australian Tax Preparation Support Services"
        description="Income tax and BAS preparation support, working under your registered tax agent's review."
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
          <li aria-current="page" className="text-primary font-medium">Australia</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Support for Australian Tax Preparation Workflows</h2>
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
        title="Preparing for EOFY?"
        description="Let's talk about your capacity needs before the next lodgment deadline."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
