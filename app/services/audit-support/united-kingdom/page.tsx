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

const PATH = '/services/audit-support/united-kingdom';

export const metadata: Metadata = genMeta({
  title: 'UK Audit Support Services',
  description:
    'Audit support and documentation preparation for UK businesses — working papers and testing support aligned with Companies Act 2006 and UK auditing standards, ahead of your statutory audit.',
  path: PATH,
});

const overview =
  "UK companies above the audit exemption thresholds set out in the Companies Act 2006 require a statutory audit, carried out by a registered auditor regulated by a recognised supervisory body (such as ICAEW or ACCA). We support the preparation work that happens before and during that audit — organising working papers, reconciling supporting schedules, and getting documentation into the format auditors expect — while the audit opinion itself is issued by your engaged UK audit firm, not by us.";

const benefits = [
  'Audit documentation and working paper preparation ahead of fieldwork',
  'Testing support aligned with UK auditing standards',
  'Organised, audit-ready files that reduce back-and-forth during fieldwork',
  'Support understanding Companies Act 2006 audit exemption thresholds',
  'Coordination with your engaged UK audit firm',
  'Capacity support during audit season without adding permanent headcount',
];

const faqs = [
  {
    question: 'Do you issue the audit opinion?',
    answer:
      'No — the audit opinion is issued by your engaged, registered UK audit firm. We support the preparation, documentation, and testing work that happens before and during the audit.',
  },
  {
    question: 'Do you understand UK audit exemption thresholds?',
    answer:
      "We're familiar with the general Companies Act 2006 audit exemption thresholds (based on turnover, balance sheet total, and employee numbers), and can help you understand whether your company is likely to require a statutory audit -- though your accountant should confirm your specific position.",
  },
  {
    question: 'Can you help organise working papers before fieldwork starts?',
    answer:
      'Yes, getting working papers and supporting documentation organised before fieldwork begins is one of the most common ways we support audit readiness.',
  },
  {
    question: 'Do you work with ICAEW or ACCA-regulated audit firms?',
    answer:
      'Yes, we coordinate with whichever registered UK audit firm you engage, adapting our documentation format to what your specific auditors expect.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Audit Support Services for UK Businesses',
  description: overview,
  slug: 'audit-support/united-kingdom',
  basePath: '/services/',
  areaServed: ['GB'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Audit Support', url: `${baseUrl}/services/audit-support` },
  { name: 'United Kingdom', url: `${baseUrl}${PATH}` },
]);

export default function AuditSupportUKPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Audit Support for UK Businesses"
        title="UK Audit Support Services"
        description="Documentation and testing support aligned with Companies Act 2006 and UK auditing standards — your auditor issues the opinion, we handle the prep work."
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
          <li><Link href="/services/audit-support" className="hover:text-primary transition-colors">Audit Support</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United Kingdom</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Audit-Ready Documentation for UK Standards</h2>
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
        title="Preparing for a Statutory Audit?"
        description="Let's get your documentation organised before fieldwork starts."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
