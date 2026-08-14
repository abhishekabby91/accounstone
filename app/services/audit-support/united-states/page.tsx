import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/audit-support/united-states';

export const metadata: Metadata = genMeta({
  title: 'U.S. Audit Support for CPA Firms and Businesses',
  description: 'Audit preparation support for U.S. businesses and CPA firms, including working-paper organization, schedules, documentation and testing support before and during fieldwork.',
  path: PATH,
});

const overview = 'Audit support is often less about one difficult task and more about getting many small pieces into a form the reviewer can work through: reconciliations, schedules, supporting documents, testing evidence and responses to open items. We help organize that preparation work while the engaged CPA firm or auditor retains responsibility for the audit opinion and professional judgment.';

const support = [
  'Working-paper and supporting-schedule preparation',
  'Reconciliation and documentation of account balances',
  'Organization of evidence and client-provided documentation',
  'Testing support based on the audit team’s procedures',
  'Open-item tracking and follow-up documentation',
  'Capacity support before and during audit fieldwork',
];

const retained = [
  'Audit planning and professional judgment',
  'Final conclusions and audit opinion',
  'Approval of audit procedures and evidence sufficiency',
  'Direct responsibility for the engagement and client relationship',
];

const faqs = [
  { question: 'Do you issue the audit opinion?', answer: 'No. The audit opinion is issued by the engaged CPA firm or auditor. We support preparation, documentation and defined testing work.' },
  { question: 'Can you organize working papers before fieldwork?', answer: 'Yes. Organizing schedules, reconciliations and supporting evidence before fieldwork can make the review process easier to manage.' },
  { question: 'Can you work from the auditor’s PBC list?', answer: 'Yes. We can help organize the requested documentation, reconcile supporting schedules and track outstanding items according to the engagement workflow.' },
  { question: 'Do you support internal-control documentation?', answer: 'We can support documentation and evidence gathering where it is within the agreed scope and follows the procedures set by your audit or compliance team.' },
  { question: 'Do you work with both CPA firms and businesses?', answer: 'Yes. The workflow can be structured for a CPA firm that needs preparation capacity or for a business that needs help organizing information before an external audit.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Audit Support Services for U.S. Businesses', description: overview, slug: 'audit-support/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Audit Support', url: `${baseUrl}/services/audit-support` }, { name: 'United States', url: `${baseUrl}${PATH}` },
]);

export default function AuditSupportUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero subtitle="Audit Support for U.S. Businesses" title="U.S. Audit Support Services" description="Documentation, schedules and preparation support that helps your audit team get to review-ready work sooner." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="hover:text-primary">Services</Link></li><li aria-hidden="true">/</li><li><Link href="/services/audit-support" className="hover:text-primary">Audit Support</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">United States</li></ol></nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white"><Reveal className="max-w-4xl mx-auto space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Prepare the Work Before the Auditor Reviews It</h2></div><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">What Audit Support Can Include</h2></></Reveal><ul className="grid grid-cols-1 md:grid-cols-2 gap-6">{support.map((item, i) => <Reveal key={i}><li className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border/70"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-7">{item}</span></li></Reveal>)}</ul></div></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Support team</span><h2 className="text-3xl font-bold mt-3 mb-6">Preparation and organization</h2><p className="text-white/85 leading-7">The delivery team can organize schedules, reconciliations, evidence and open-item documentation around the procedures and file structure established by the engagement team.</p></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Auditor / CPA retains</span><h2 className="text-3xl font-bold text-primary mt-3 mb-6">Judgment and final conclusions</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-6">{item}</span></li>)}</ul></></Reveal></div></section>

      <section className="w-full py-20 md:py-24 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-8">Connect audit support to your practice workflow</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/services/bookkeeping/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Bookkeeping</Link><Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Staff Augmentation</Link></div></div></section>

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <CTABanner title="Preparing for an Upcoming Audit?" description="Tell us which schedules, documentation or preparation tasks are creating the most review pressure." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
