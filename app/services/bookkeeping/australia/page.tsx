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

const PATH = '/services/bookkeeping/australia';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Bookkeeping Services for Australian Businesses',
  description:
    'Outsourced bookkeeping for Australian businesses — BAS-ready GST tracking, Single Touch Payroll (STP) compliant payroll bookkeeping, and Xero/MYOB support aligned with ATO requirements.',
  path: PATH,
});

const overview =
  "Bookkeeping for Australian businesses centres on a few specific obligations: GST needs to be tracked accurately for periodic Business Activity Statement (BAS) lodgment, payroll bookkeeping needs to align with Single Touch Payroll (STP) real-time ATO reporting, and most businesses run on Xero or MYOB rather than other platforms. The Australian financial year also runs 1 July to 30 June, not the calendar year. We structure bookkeeping around these specifics rather than applying a generic international template.";

const benefits = [
  'GST tracking structured for accurate BAS lodgment',
  'Single Touch Payroll (STP) compliant payroll bookkeeping',
  'Xero and MYOB support — the two dominant platforms in the Australian market',
  'Bookkeeping aligned with the Australian financial year (1 July to 30 June)',
  'Superannuation Guarantee contribution tracking',
  'Reporting formatted for your registered tax agent or BAS agent',
];

const faqs = [
  {
    question: 'Can you help with BAS (Business Activity Statement) preparation?',
    answer:
      'We track GST and the underlying figures your BAS requires accurately in your books, working alongside your registered BAS agent or tax agent for the actual lodgment.',
  },
  {
    question: 'Do you support Single Touch Payroll (STP) requirements?',
    answer:
      'Yes, we structure payroll bookkeeping to align with STP real-time reporting to the ATO, keeping your records consistent with what\'s being reported.',
  },
  {
    question: 'Do you work with Xero and MYOB?',
    answer:
      'Yes, both are core supported platforms for us, and between them they cover the large majority of Australian small businesses.',
  },
  {
    question: 'Do you track Superannuation Guarantee contributions?',
    answer:
      'Yes, we track Superannuation Guarantee obligations as part of payroll bookkeeping, keeping records aligned with your compulsory contribution requirements.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Bookkeeping Services for Australian Businesses',
  description: overview,
  slug: 'bookkeeping/australia',
  basePath: '/services/',
  areaServed: ['AU'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Bookkeeping', url: `${baseUrl}/services/bookkeeping` },
  { name: 'Australia', url: `${baseUrl}${PATH}` },
]);

export default function BookkeepingAUPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Bookkeeping for Australian Businesses"
        title="Outsourced Bookkeeping for Australian Businesses"
        description="BAS-ready GST tracking, STP-compliant payroll, and Xero/MYOB support built around ATO requirements."
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
          <li aria-current="page" className="text-primary font-medium">Australia</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Built for Australian Accounting Conventions</h2>
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
        title="Ready for BAS-Ready Books?"
        description="Let's talk about your current setup and what needs to change."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
