import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Bookkeeping Services — US, UK & Australia',
  description: 'What outsourced bookkeeping actually covers, what it costs, which software it works with, and the questions practitioners ask before choosing an offshore bookkeeping partner.',
  path: '/services/bookkeeping',
});

const faqs = [
  { question: 'What does an outsourced bookkeeper actually do daily?', answer: 'They post transactions (sales receipts, bills, expenses), categorize them against your chart of accounts, reconcile bank and credit card feeds when statements close, follow up on unmatched or unusual items, and prepare whatever reporting package your team or CPA reviews each period. The goal is to hand off organized, reconciled work rather than a queue of raw data.' },
  { question: 'How is offshore bookkeeping different from hiring a local bookkeeper?', answer: 'The work itself is the same — reconciliations, categorization, month-end tasks. The difference is cost (offshore rates are typically 40–65% lower), coverage (an offshore team can scale with workload without rehiring), and the fact that the work happens asynchronously inside your systems during their business hours, with outputs ready for your review each morning.' },
  { question: 'What software do you work in?', answer: 'QuickBooks Online and Xero are the most common. We also work in Sage, NetSuite, MYOB (for Australian clients), and most client-specific systems. We work inside your existing platform — you do not migrate to ours.' },
  { question: 'How often does the work get done?', answer: 'This depends on your transaction volume and review cadence. Weekly reconciliations and daily transaction posting are common for active businesses. Monthly is more typical for smaller operations. Month-end tasks (close checklists, reporting) happen on whatever schedule your CPA or internal reviewer expects.' },
  { question: 'What do I need to prepare before handing off bookkeeping?', answer: "At minimum: access to your accounting software, a chart of accounts that's reasonably organized, and your most recent reconciled period as a baseline. It helps to have at least one prior-year or prior-quarter set of financials so the team understands your transaction patterns before starting live work." },
  { question: 'What stays with my team?', answer: 'Review and approval. Bank login credentials (you share read-only or statement access, not full banking credentials). Any decisions about write-offs, reclassifications that need management judgment, or transactions with legal/tax implications. The bookkeeping team prepares the work; your accountant or controller reviews it.' },
  { question: 'How do you handle cleanup of a messy file?', answer: 'Cleanup typically starts with a period-by-period reconciliation of bank accounts against the general ledger to identify where balances diverged. From there we categorize unposted transactions, resolve duplicates, and document decisions. Cleanup scope and timeline depend heavily on how far behind the file is and how many accounts are involved.' },
  { question: 'What does outsourced bookkeeping cost?', answer: 'Offshore bookkeeping support typically ranges from $8–$18/hour depending on complexity, volume, and scope — or a fixed monthly rate that reflects an agreed scope of work. A small business with 200–400 transactions per month and two bank accounts might pay $400–$800/month. A multi-entity operation with multiple currencies and weekly closes costs more. We scope first and then price.' },
  { question: 'What questions do Reddit/accounting forums ask about outsourced bookkeeping?', answer: 'The most common: "Will they understand my industry?" (answer: after onboarding, yes — they learn your chart of accounts and transaction patterns). "What happens when they make a mistake?" (answer: every engagement has a review point — your team catches things before they go to the CPA). "How do they handle sales tax?" (answer: they categorize and track taxable vs. non-taxable; sales tax return prep and filings stay with your accountant).' },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Bookkeeping', url: `${baseUrl}/services/bookkeeping` },
]);

const softwareNotes = [
  { name: 'QuickBooks Online', notes: 'Bank feeds, rules-based categorization, and the month-end close checklist all run natively inside QBO. Reconciliations use the built-in reconciliation tool so your review screen shows exactly what cleared and what didn\'t.' },
  { name: 'Xero', notes: 'Xero\'s bank rules and reconciliation workflow are cleaner than QBO\'s for high-volume feeds. Reporting (profit & loss, balance sheet, aged payables/receivables) exports directly to the formats most accountants request.' },
  { name: 'Sage', notes: 'Sage setups vary widely by version and industry. We work inside the client\'s existing Sage environment and chart of accounts rather than reconfiguring anything.' },
  { name: 'NetSuite', notes: 'Multi-entity and multi-currency reconciliations in NetSuite require subsidiary-level access. We support recurring close tasks and intercompany reconciliation; implementation and workflow configuration stay with your NetSuite partner.' },
  { name: 'MYOB (Australia)', notes: 'GST reconciliation and BAS-ready categorization are handled inside the existing MYOB setup. STP payroll bookkeeping is supported for Australian clients.' },
];

const regionNotes = [
  { region: '🇺🇸 United States', detail: 'GAAP-aligned chart of accounts, QuickBooks or Xero preferred. Sales tax categorization by state. 1099 vendor tracking. Payroll bookkeeping aligned with pay schedules. See the dedicated US bookkeeping page for workflow specifics.' },
  { region: '🇬🇧 United Kingdom', detail: 'VAT-coded transaction categorization. Making Tax Digital (MTD) records maintained inside Xero or Sage. Payroll bookkeeping aligned with RTI submissions. See the UK bookkeeping page for workflow specifics.' },
  { region: '🇦🇺 Australia', detail: 'GST categorization and BAS-ready records in MYOB or Xero. STP-aligned payroll bookkeeping. EOFY preparation. See the Australian bookkeeping page for workflow specifics.' },
];

export default function BookkeepingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Outsourced Bookkeeping"
        title="What Outsourced Bookkeeping Actually Covers"
        description="A practical guide to scope, software, cost, and the questions accountants and business owners ask before handing off their books."
        cta={{ text: 'Talk Through Your Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'View Region-Specific Pages', href: '#regions' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Bookkeeping</li>
        </ol>
      </nav>

      {/* What it covers */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">The work</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">What the bookkeeper actually does</h2>
            <p className="text-lg text-muted leading-relaxed mt-4">Bookkeeping is the recurring maintenance work that keeps your accounting records current and reconciled. In practice that means: transactions get posted and categorized against your chart of accounts, bank and credit card accounts get reconciled when statements close, exceptions and unmatched items get flagged and resolved, and a reporting package gets organized for whoever reviews it — your CPA, controller, or yourself.</p>
            <p className="text-lg text-muted leading-relaxed mt-4">What it does not include: tax advice, audit opinions, management decisions on reclassifications, or anything that requires a licensed CPA or Enrolled Agent. Those stay with your accountant.</p>
          </></Reveal>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                'Transaction posting and categorization',
                'Bank and credit card reconciliations',
                'Month-end close checklist completion',
                'Cleanup of unreconciled or historical periods',
                'Accounts payable and receivable bookkeeping',
                'Management reporting packages for review',
                'Chart of accounts maintenance',
                'Exception flagging and follow-up documentation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-input rounded-xl border border-border/70">
                  <Check className="text-accent shrink-0 w-5 h-5 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* What nobody tells you */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">What nobody tells you</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">The things accountants learn by doing it</h2>
          </></Reveal>
          <div className="mt-10 space-y-6">
            {[
              { q: 'The bottleneck is almost never the bookkeeper', a: 'It\'s getting the source documents in time. Bank statements, vendor invoices, receipts — the bookkeeping itself takes days; waiting for documents takes weeks. Setting up a document intake process (shared folder, receipt capture app, or regular send from the client) matters more than the bookkeeper\'s speed.' },
              { q: 'A messy chart of accounts compounds over time', a: 'If the COA has duplicate accounts, vague categories, or no clear logic, the bookkeeping will reflect that. Reconciliations get harder, reporting gets less useful, and cleanup gets more expensive. A short COA cleanup pass before outsourcing saves significant ongoing time.' },
              { q: 'Review is not optional', a: 'Outsourced bookkeeping needs a reviewer — either you, your controller, or your CPA. Without review, small errors accumulate into large ones. The value of outsourcing is not "set and forget"; it\'s freeing your reviewer from doing the preparation work so they can focus on the review itself.' },
              { q: 'The first month is always slower', a: 'Onboarding — learning the chart of accounts, transaction patterns, vendor names, recurring entries — takes time. Rushing it produces mistakes. A soft-launch phase where the team handles one account or one month before taking on the full scope is almost always worth it.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="p-7 bg-white rounded-2xl border border-border/70">
                  <h3 className="font-bold text-primary text-lg mb-2">{item.q}</h3>
                  <p className="text-muted leading-7">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Software notes */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Software</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">How it works in each platform</h2>
            <p className="text-muted leading-relaxed mt-4 max-w-2xl">We work inside your existing accounting software. Here is how outsourced bookkeeping typically operates in the platforms we support most.</p>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {softwareNotes.map((s, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="p-6 bg-input rounded-2xl border border-border/70 h-full">
                  <h3 className="font-bold text-primary text-base mb-2">{s.name}</h3>
                  <p className="text-muted text-sm leading-6">{s.notes}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {['QuickBooks', 'Xero', 'Sage', 'NetSuite', 'MYOB'].map(t => (
              <Link key={t} href={`/technology/${t.toLowerCase()}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">
                {t} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Region-specific */}
      <section id="regions" className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">By region</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">How bookkeeping differs by market</h2>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {regionNotes.map((r, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="p-6 bg-white rounded-2xl border border-border/70 h-full">
                  <div className="text-xl font-bold text-primary mb-3">{r.region}</div>
                  <p className="text-muted text-sm leading-6">{r.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services/bookkeeping/united-states" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors">🇺🇸 U.S. Bookkeeping <ArrowRight size={14} /></Link>
            <Link href="/services/bookkeeping/united-kingdom" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-border text-primary text-sm font-semibold hover:bg-input transition-colors">🇬🇧 UK Bookkeeping <ArrowRight size={14} /></Link>
            <Link href="/services/bookkeeping/australia" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-border text-primary text-sm font-semibold hover:bg-input transition-colors">🇦🇺 Australian Bookkeeping <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Cost benchmark */}
      <section className="w-full py-16 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Cost context</span>
            <h2 className="text-xl md:text-2xl font-bold text-primary text-balance mt-2">What outsourced bookkeeping typically costs</h2>
            <p className="text-muted leading-relaxed mt-4">The most common question people ask before engaging an offshore bookkeeping team. These are real-world ranges, not marketing numbers.</p>
          </></Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tier: 'Small business', vol: '100–400 transactions/mo', rate: '$400–$900/mo', notes: 'Two bank accounts, one credit card, minimal cleanup needed, monthly close.' },
              { tier: 'Growing business', vol: '400–1,200 transactions/mo', rate: '$900–$2,500/mo', notes: 'Multiple entities or accounts, regular AP/AR, weekly tasks, more complex COA.' },
              { tier: 'CPA firm support', vol: 'Per-client or per-hour', rate: '$8–$18/hr', notes: 'Per-client bookkeeping for firms outsourcing client work, often on a retainer.' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="p-6 bg-input rounded-2xl border border-border/70">
                  <div className="font-bold text-primary text-lg">{t.tier}</div>
                  <div className="text-accent font-bold text-2xl mt-2">{t.rate}</div>
                  <div className="text-xs text-muted mt-1 mb-3">{t.vol}</div>
                  <p className="text-muted text-sm leading-6">{t.notes}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-sm text-muted mt-6">Pricing depends on transaction volume, complexity, number of accounts, and scope. We scope the work first, then provide a fixed monthly proposal.</p>
        </div>
      </section>

      <FAQSection subtitle="Bookkeeping Questions" items={faqs} columns={2} />

      <section className="w-full py-7 md:py-10 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-5">Related resources</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/resources/guides/outsourced-bookkeeping-cost-guide" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Outsourced Bookkeeping Cost Guide</Link>
            <Link href="/resources/guides/questions-to-ask-before-outsourcing-bookkeeping" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">9 Questions to Ask Before Outsourcing</Link>
            <Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">CPA Firms</Link>
            <Link href="/solutions/offshore-accounting-support" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Offshore Accounting Support</Link>
          </div>
        </div>
      </section>

      <CTABanner title="Where Is Your Bookkeeping Getting Stuck?" description="Tell us what is falling behind — reconciliations, cleanup, AP/AR, or month-end — and we can talk through what a practical support model looks like." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
