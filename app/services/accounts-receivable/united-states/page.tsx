import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/accounts-receivable/united-states';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Accounts Receivable for U.S. Businesses',
  description: 'U.S. accounts receivable support — USD invoicing, ACH/check payment application, aging monitoring, and follow-up sequences inside QuickBooks Online or Xero.',
  path: PATH,
});

const overview = 'Cash collected late is cash your business already earned but cannot use. We handle the recurring AR cycle — invoicing, payment application, aging review, and follow-up — inside your existing system, so overdue accounts get consistent attention instead of getting lost between other priorities.';

const uSElements = [
  'USD invoicing from sales orders, contracts, or time sheets',
  'ACH and check payment application from the bank feed',
  'Weekly aging review with 30/60/90+ day buckets',
  'Follow-up sequences sent in your company name',
  'Customer account reconciliation against statements',
  'Month-end AR reconciliation to the general ledger',
];

const delegated = [
  'Invoice creation and sending on your billing schedule',
  'Payment application against open invoices',
  'Aging monitoring and escalation list preparation',
  'Systematic follow-up reminders (in your name)',
  'Customer account reconciliation',
];

const retained = [
  'Credit limit decisions and credit holds',
  'Write-off approval authority',
  'Legal or collections agency referral decisions',
  'Customer contract terms affecting invoicing',
  'Judgment calls on disputed balances',
];

const faqs = [
  { question: 'Will your team contact our customers directly?', answer: 'For overdue-invoice follow-up, yes — the AR team can send reminder emails in your company name from a shared or delegated inbox, on a schedule you define. Phone collection calls typically stay with your internal team unless specifically agreed.' },
  { question: 'How does this work with U.S. payment methods?', answer: 'Payments arriving via ACH, check, or card processor sync are matched against open invoices in QuickBooks Online or Xero. Discrepancies are flagged for your review rather than applied automatically when something does not match cleanly.' },
  { question: 'What is DSO and does this actually reduce it?', answer: 'Days Sales Outstanding measures how long it takes to collect after invoicing. Consistent aging monitoring and follow-up typically reduces DSO by 5–15 days — the cash freed up is working capital your business already earned but had tied up in receivables.' },
  { question: 'What stays with our team?', answer: 'Credit decisions, write-off authority, and any judgment call about the customer relationship. We handle the process — invoicing, application, follow-up, reconciliation — and flag exceptions for your decision.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Accounts Receivable for U.S. Businesses', description: overview, slug: 'accounts-receivable/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounts Receivable', url: `${baseUrl}/services/accounts-receivable` },
  { name: 'United States', url: `${baseUrl}${PATH}` },
]);

export default function AccountsReceivableUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero subtitle="Accounts Receivable for U.S. Businesses" title="Outsourced Accounts Receivable for U.S. Businesses" description="Invoicing, payment application, aging review, and follow-up inside QuickBooks Online or Xero." cta={{ text: 'Talk Through Your AR Workflow', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services/accounts-receivable" className="hover:text-primary transition-colors">Accounts Receivable</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">Collections That Follow a Schedule, Not Whoever Has Time</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">U.S. specifics</span><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to U.S. Accounts Receivable</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{uSElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="text-3xl font-bold text-primary mt-3 mb-6">Recurring processing work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="text-3xl font-bold mt-3 mb-6">Credit and collections judgment</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">This service everywhere:</span>
          <Link href="/services/accounts-receivable" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">General AR Overview</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">U.S. Market Overview</Link><Link href="/services/accounts-payable" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Accounts Payable</Link><Link href="/resources/guides/outsourced-accounts-receivable-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">AR Guide</Link><Link href="/industries/ecommerce" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">E-Commerce</Link></div>
      </div></section>

      <CTABanner title="How Long Are You Waiting to Collect?" description="Tell us your invoice volume, average payment terms, and current follow-up process." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
