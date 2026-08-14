import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'QuickBooks Online Accounting Support',
  description: 'QuickBooks Online support for setup, cleanup, bookkeeping, reconciliations, reporting and recurring accounting workflows.',
  path: '/technology/quickbooks',
});

export default function QuickBooksPage() {
  const faqs = [
    { question: 'Can you set up QuickBooks Online for our business?', answer: 'Yes. Setup support can include organization settings, chart of accounts, users, permissions, opening balances and the workflow needed for recurring bookkeeping.' },
    { question: 'Do you provide ongoing QuickBooks support?', answer: 'Yes. Ongoing support can include bookkeeping, reconciliations, AP/AR workflows, reporting, cleanup and month-end close activities.' },
    { question: 'Can you help when the QuickBooks file has become difficult to review?', answer: 'Yes. We can review unreconciled accounts, inconsistent categorization, duplicate or missing transactions and other cleanup items before establishing a repeatable workflow.' },
    { question: 'Can QuickBooks connect to other systems?', answer: 'QuickBooks Online supports many integrations. We can help review the accounting side of an integration and reconcile the resulting workflow, while the exact connector depends on the systems involved.' },
    { question: 'Can you help migrate from QuickBooks Desktop?', answer: 'Yes. Migration support can include preparation, data transfer coordination, setup checks and post-migration reconciliation. The exact approach depends on the Desktop file and the destination setup.' },
    { question: 'Do you provide QuickBooks certification or official vendor support?', answer: 'We provide accounting workflow support around QuickBooks Online. We are not QuickBooks or Intuit, and any certification claim should be verified independently before being treated as a credential.' },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Technology', url: `${baseUrl}/technology` },
    { name: 'QuickBooks', url: `${baseUrl}/technology/quickbooks` },
  ]);

  const workflows = [
    'Initial setup and chart-of-accounts review',
    'Transaction processing and categorization',
    'Bank and credit-card reconciliation',
    'Accounts payable and receivable workflows',
    'Cleanup and historical corrections',
    'Month-end close and reporting preparation',
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero subtitle="Platform Workflow Support" title="QuickBooks Online Accounting Support" description="Help with the accounting work around QuickBooks Online — from setup and cleanup to reconciliations, month-end and reporting." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View Services', href: '/services' }} background="primary-gradient" />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Why the workflow matters</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">QuickBooks is the system. The accounting process still needs ownership.</h2><p className="text-lg text-muted leading-8">A well-configured QuickBooks file does not automatically produce clean month-end work. Transactions still need to be categorized, accounts reconciled, exceptions resolved and supporting records kept in a form your reviewer can follow. Our role is to support those accounting workflows inside the system your team already uses.</p></></Reveal></div></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">What We Can Support in QuickBooks</h2></></Reveal><ul className="grid grid-cols-1 md:grid-cols-2 gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border/70"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-7">{item}</span></li></Reveal>)}</ul></div></section>

      <section className="w-full py-20 md:py-24 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Common starting points</span><h2 className="text-3xl md:text-4xl font-bold text-primary">When QuickBooks support becomes useful</h2></></Reveal><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="p-7 rounded-2xl bg-input border border-border/70"><h3 className="font-bold text-primary text-xl mb-3">Cleanup</h3><p className="text-muted leading-7">Reconciliations are behind, categories have drifted, or old transactions need to be reviewed before recurring work can be trusted.</p></div><div className="p-7 rounded-2xl bg-input border border-border/70"><h3 className="font-bold text-primary text-xl mb-3">Capacity</h3><p className="text-muted leading-7">The bookkeeping process works, but the internal team no longer has enough time to keep up with transaction volume and close deadlines.</p></div><div className="p-7 rounded-2xl bg-input border border-border/70"><h3 className="font-bold text-primary text-xl mb-3">Close</h3><p className="text-muted leading-7">Month-end repeatedly turns into a catch-up exercise because reconciliations, schedules and unresolved items are not completed on time.</p></div></div></div></section>

      <section className="w-full py-20 md:py-24 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-8">Connect QuickBooks to the accounting work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/bookkeeping/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Bookkeeping</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/resources/guides/quickbooks-vs-xero-comparison" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">QuickBooks vs Xero</Link></div></div></section>

      <FAQSection subtitle="QuickBooks FAQs" items={faqs} columns={2} />
      <CTABanner title="Need Help With Your QuickBooks Workflow?" description="Tell us what is happening in the file today and which part of the accounting process needs more capacity." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
