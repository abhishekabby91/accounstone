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

const PATH = '/services/audit-support/united-states';

export const metadata: Metadata = genMeta({
  title: 'U.S. Audit Support Services',
  description:
    'Audit support and documentation preparation for U.S. businesses and CPA firms — working papers, testing support, and audit-ready documentation aligned with AICPA and PCAOB expectations.',
  path: PATH,
});

const overview =
  'Preparing for a U.S. audit means having documentation and working papers organized in a way that matches what auditors following AICPA standards (or PCAOB standards, for public companies) actually expect to see. We support CPA firms and businesses with documentation preparation, testing support, and working paper organization ahead of and during an audit — the audit opinion itself is issued by your engaged CPA firm or auditor, not by us.';

const benefits = [
  'Audit documentation and working paper preparation ahead of fieldwork',
  'Testing support aligned with AICPA audit standards (or PCAOB, for public companies)',
  'Organized, audit-ready files that reduce back-and-forth during fieldwork',
  'Support for both financial statement audits and internal control documentation',
  'Coordination with your engaged CPA firm or external auditor',
  'Capacity support during audit season without adding permanent headcount',
];

const faqs = [
  {
    question: 'Do you issue the audit opinion?',
    answer:
      'No — the audit opinion is issued by your engaged CPA firm or licensed auditor. We support the preparation, documentation, and testing work that happens before and during the audit.',
  },
  {
    question: 'Do you understand PCAOB requirements for public companies?',
    answer:
      "We're familiar with the general documentation and control expectations under PCAOB standards for public company audits, and we work closely with your audit firm to align with their specific requirements.",
  },
  {
    question: 'Can you help organize working papers before fieldwork starts?',
    answer:
      'Yes, getting working papers and supporting documentation organized before fieldwork begins is one of the most common ways we support audit readiness.',
  },
  {
    question: 'Do you support SOX-related internal control documentation?',
    answer:
      "We can support the documentation of internal controls in a format your auditors can review, working alongside your compliance or internal audit function.",
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Audit Support Services for U.S. Businesses',
  description: overview,
  slug: 'audit-support/united-states',
  basePath: '/services/',
  areaServed: ['US'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Audit Support', url: `${baseUrl}/services/audit-support` },
  { name: 'United States', url: `${baseUrl}${PATH}` },
]);

export default function AuditSupportUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Audit Support for U.S. Businesses"
        title="U.S. Audit Support Services"
        description="Documentation and testing support aligned with AICPA and PCAOB expectations — your auditor issues the opinion, we handle the prep work."
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
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Audit-Ready Documentation for U.S. Standards</h2>
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
        title="Preparing for an Upcoming Audit?"
        description="Let's get your documentation organized before fieldwork starts."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
