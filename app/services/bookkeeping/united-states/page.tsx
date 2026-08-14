import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/bookkeeping/united-states';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Bookkeeping for U.S. Businesses',
  description: 'U.S. bookkeeping support for businesses and CPA firms, including transaction recording, reconciliations, cleanup, month-end close and reporting workflows.',
  path: PATH,
});

const overview = 'Good bookkeeping is more than entering transactions. The work has to be reconciled, reviewed, documented and closed on a schedule your business or CPA can rely on. We support U.S. bookkeeping workflows inside the systems you already use, with clear ownership for recurring tasks and defined review points.';

const benefits = [
  'Transaction recording, categorization and account maintenance',
  'Bank and credit-card reconciliations with exception follow-up',
  'Month-end close support and account review schedules',
  'Cleanup of historical transactions and unreconciled balances',
  'Accounts payable and receivable support where included in scope',
  'Reporting packages organized for your management team or CPA',
];

const delegated = [
  'Recurring transaction processing and categorization',
  'Bank and credit-card reconciliations',
  'Supporting schedules and account maintenance',
  'AP/AR processing when included in the engagement',
  'Month-end preparation and first-level checks',
];

const retained = [
  'Final review and approval of the books',
  'Policy decisions and unusual accounting judgments',
  'Client-facing decisions and tax advice',
  'Final tax return sign-off or audit opinion',
  'Control over user access, approvals and business decisions',
];

const process = [
  { title: 'Understand the current books', text: 'We review the accounting system, chart of accounts, reconciliation status, close calendar and existing documentation.' },
  { title: 'Define ownership', text: 'Together we decide which recurring tasks are delegated, which approvals stay with your team, and what the review handoff looks like.' },
  { title: 'Run the workflow', text: 'The delivery team performs the agreed work inside the authorized system and documents exceptions that need your attention.' },
  { title: 'Review and close', text: 'Your team receives organized work for review, with unresolved items clearly identified instead of being buried in the monthly output.' },
];

const faqs = [
  { question: 'Do you work with QuickBooks Online?', answer: 'Yes. QuickBooks Online is one of the platforms we support, along with Xero and other systems listed on our technology pages.' },
  { question: 'Can you clean up old bookkeeping problems?', answer: 'Yes, cleanup can be scoped separately or included in an ongoing engagement. We first identify unreconciled accounts, categorization issues and missing documentation so the cleanup has a defined endpoint.' },
  { question: 'Will our CPA still control the books?', answer: 'Yes. The engagement can be structured so your CPA or internal reviewer retains approval and review control while the delivery team handles defined preparation work.' },
  { question: 'Can you track sales-tax information across states?', answer: 'We can organize and reconcile transaction data and supporting information used by your tax team. State tax filing and legal tax advice should remain with the appropriate tax professional or filing provider.' },
  { question: 'How often can bookkeeping be performed?', answer: 'Frequency depends on transaction volume and the close schedule. Common arrangements include recurring weekly or monthly processing, with the exact cadence agreed during onboarding.' },
  { question: 'What happens during month-end close?', answer: 'The workflow typically includes transaction completion, reconciliations, account review, supporting schedules, exception lists and preparation of the reporting package for review.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Bookkeeping Services for U.S. Businesses', description: overview, slug: 'bookkeeping/united-states', basePath: '/services/', areaServed: ['US'] });
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

      <PremiumHero subtitle="Bookkeeping for U.S. Businesses" title="Outsourced Bookkeeping for U.S. Businesses" description="Practical bookkeeping support built around your existing systems, close calendar and review process." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services/bookkeeping" className="hover:text-primary transition-colors">Bookkeeping</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Bookkeeping That Is Ready for Review</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-16"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">What the Bookkeeping Workflow Can Include</h2></></Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border/70 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"><Check className="shrink-0 text-accent w-5 h-5" aria-hidden="true" /><p className="text-foreground leading-relaxed">{item}</p></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="text-3xl font-bold text-primary mt-3 mb-6">Recurring preparation work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="text-3xl font-bold mt-3 mb-6">Review and business decisions</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Workflow</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">How a Typical Engagement Runs</h2></></Reveal><ol className="grid grid-cols-1 md:grid-cols-2 gap-6">{process.map((step, i) => <Reveal key={step.title} delay={Math.min(i * 0.06, 0.2)}><li className="bg-white rounded-2xl border border-border/70 p-7"><div className="text-sm font-bold text-accent mb-3">0{i + 1}</div><h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3><p className="text-muted leading-7">{step.text}</p></li></Reveal>)}</ol></div></section>

      <section className="w-full py-20 md:py-24 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="text-3xl md:text-4xl font-bold text-primary">Continue the workflow</h2></></Reveal><div className="flex flex-wrap justify-center gap-3"><Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">QuickBooks</Link><Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Xero</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/resources/guides/outsourced-bookkeeping-cost-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Bookkeeping Cost Guide</Link></div></div></section>

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <CTABanner title="Need More Bookkeeping Capacity?" description="Tell us what your current workflow looks like and where the review queue is getting stuck." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
