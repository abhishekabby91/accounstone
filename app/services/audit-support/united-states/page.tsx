import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ServiceDepth from '@/components/service-depth';
import RegionalContext from '@/components/regional-context';
import RegionFlag from '@/components/region-flag';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/audit-support/united-states';

export const metadata: Metadata = genMeta({
  title: 'U.S. Audit Support for CPA Firms and Businesses',
  description: 'Audit preparation support for U.S. businesses and CPA firms, including working-paper organization, schedules, documentation and testing support before and during fieldwork.',
  path: PATH,
});

const overview = 'Audit work can slow down long before fieldwork begins. Schedules need updating, reconciliations need support, client documents need to be organized and open questions need someone to keep moving. We support that preparation work so the engaged CPA firm or auditor can spend less time hunting for evidence and more time exercising professional judgment.';

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
  { question: 'What if the audit team is spending too much time chasing support?', answer: 'That is exactly the type of preparation work that can be separated from the professional review itself. Schedules, reconciliations, evidence and open-item tracking can be organized so the reviewer can see what is complete and what still needs attention.' },
  { question: 'Can you organize working papers before fieldwork?', answer: 'Yes. Getting schedules, reconciliations and supporting evidence into a consistent structure before fieldwork can reduce the amount of basic follow-up that competes with the actual audit work.' },
  { question: 'Can you work from the auditor’s PBC list?', answer: 'Yes. We can help organize requested documentation, reconcile supporting schedules and track outstanding items according to the engagement workflow.' },
  { question: 'Do you support internal-control documentation?', answer: 'We can support documentation and evidence gathering where it is within the agreed scope and follows the procedures established by your audit or compliance team.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Audit Support Services for U.S. Businesses', description: overview, slug: 'audit-support/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Audit Support — United States', url: `${baseUrl}${PATH}` },
]);

export default function AuditSupportUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero subtitle="Audit Support for U.S. Businesses" title="U.S. Audit Support Services" description="Documentation, schedules and preparation support that helps your audit team spend less time chasing open items." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="inline-block py-1.5 hover:text-primary">Services</Link></li><li aria-hidden="true">/</li><li>Audit Support</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">United States</li></ol></nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><Reveal className="max-w-4xl mx-auto space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Make the Evidence Easier to Work Through</h2></div><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Preparation Work Around the Audit</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{support.map((item, i) => <Reveal key={i}><li className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Support team</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Preparation and organization</h2><p className="text-white/85 leading-7">The delivery team can organize schedules, reconciliations, evidence and open-item documentation around the procedures and file structure established by the engagement team.</p></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Auditor / CPA retains</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Judgment and final conclusions</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-6">{item}</span></li>)}</ul></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-6">Connect audit support to the work around the engagement</h2>
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/audit-support/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-kingdom" decorative />United Kingdom</Link>
          <Link href="/services/audit-support/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="australia" decorative />Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Market Overview</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/services/bookkeeping/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Bookkeeping</Link><Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Staff Augmentation</Link></div></div></section>

      <RegionalContext serviceSlug="audit-support" regionSlug="united-states" />

      <ServiceDepth serviceSlug="audit-support" regionSlug="united-states" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <CTABanner title="What Is Holding Up the Audit?" description="Tell us whether the pressure is coming from schedules, documentation, PBC follow-up or preparation capacity." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
