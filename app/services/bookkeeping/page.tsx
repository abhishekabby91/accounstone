import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Bookkeeping Services for CPA Firms & Businesses',
  description: 'See what outsourced bookkeeping can cover, how the workflow fits your team, which software is supported, and what to review before handing off recurring bookkeeping work.',
  path: '/services/bookkeeping',
});

const faqs = [
  { question: 'What does an outsourced bookkeeper actually do daily?', answer: 'They post transactions, categorize activity against your chart of accounts, reconcile bank and credit card accounts, follow up on unmatched items, and organize the reporting package your CPA, controller, or management team reviews each period. The goal is organized, reconciled work—not a queue of raw transactions.' },
  { question: 'How is offshore bookkeeping different from hiring a local bookkeeper?', answer: 'The accounting work itself is similar: transaction processing, reconciliations, cleanup, and month-end tasks. The main difference is the delivery model. An offshore team works inside your existing systems and documented process while your team keeps the review, approval, and management decisions.' },
  { question: 'What software do you work in?', answer: 'QuickBooks Online and Xero are common. We also work in Sage, NetSuite, MYOB for Australian clients, and other client-specific systems. We work inside your existing platform rather than requiring you to migrate to ours.' },
  { question: 'How often does the work get done?', answer: 'The cadence depends on transaction volume and your review process. Daily transaction posting, weekly reconciliations, and monthly close work are all possible. The schedule is agreed around the deadlines your CPA, controller, or management team works to.' },
  { question: 'What do I need to prepare before handing off bookkeeping?', answer: "At minimum, the accounting system, an organized chart of accounts, access to the relevant records, and a recent reconciled period as a baseline. Prior-period financials and documentation of recurring entries also make knowledge transfer easier." },
  { question: 'What stays with my team?', answer: 'Review and approval stay with your designated reviewer. Management decisions, judgment-based reclassifications, write-offs, and matters requiring professional tax or legal judgment should remain with the appropriate person on your team or adviser. The bookkeeping team prepares and documents the work.' },
  { question: 'How do you handle cleanup of a messy file?', answer: 'Cleanup normally starts by identifying where reconciliations stopped agreeing with the general ledger. The team then works through unreconciled periods, duplicates, uncategorized transactions, and documentation gaps while recording the decisions that need review. Scope and timing depend on the age and complexity of the file.' },
  { question: 'How do you price outsourced bookkeeping?', answer: 'Pricing depends on transaction volume, number of accounts and entities, software, cleanup requirements, reporting needs, and the scope of work. We review the workflow first and then propose an engagement model based on the actual work rather than using one rate for every client.' },
  { question: 'How do you maintain quality when bookkeeping is outsourced?', answer: 'The workflow should have clear ownership, documented procedures, review points, and an agreed close or reporting cadence. Your designated reviewer remains responsible for approvals and judgment calls, while the delivery team prepares, reconciles, documents, and flags exceptions for review.' },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Bookkeeping', url: `${baseUrl}/services/bookkeeping` },
]);

const softwareNotes = [
  { name: 'QuickBooks Online', notes: 'Bank feeds, transaction categorization, reconciliations, recurring entries, and month-end checklists can be handled inside the existing QBO file, with exceptions prepared for review.' },
  { name: 'Xero', notes: 'Bank rules, reconciliations, reporting, and recurring accounting tasks can be organized around the client\'s existing Xero workflow and review cadence.' },
  { name: 'Sage', notes: 'Sage environments vary by version and industry. The team works within the client\'s existing setup and chart of accounts rather than changing the system without approval.' },
  { name: 'NetSuite', notes: 'Support can include recurring close activities, reconciliations, account maintenance, and intercompany work within the client\'s established NetSuite controls. Implementation remains with the appropriate NetSuite partner.' },
  { name: 'MYOB (Australia)', notes: 'Bookkeeping can include recurring transaction processing, GST-related categorization, reconciliations, and reporting preparation within the client\'s existing MYOB workflow.' },
];

const regionNotes = [
  { region: '🇺🇸 United States', detail: 'Workflows can be organized around U.S. accounting records, QuickBooks or Xero, reconciliations, vendor tracking, payroll-related bookkeeping, and month-end review. See the dedicated U.S. page for more detail.' },
  { region: '🇬🇧 United Kingdom', detail: 'Workflows can include VAT-coded transaction categorization, recurring bookkeeping, reconciliations, reporting, and support around the client\'s existing Xero or Sage process. See the UK page for more detail.' },
  { region: '🇦🇺 Australia', detail: 'Workflows can include GST categorization, reconciliations, recurring bookkeeping, reporting, and support around MYOB or Xero. See the Australian page for more detail.' },
];

export default function BookkeepingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Outsourced Bookkeeping"
        title="What Outsourced Bookkeeping Actually Covers"
        description="A practical look at the recurring work, review points, software, regional workflows, and handoffs involved when bookkeeping becomes part of an extended accounting team."
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

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">The work</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">What the bookkeeper actually does</h2>
            <p className="text-lg text-muted leading-relaxed mt-4">Bookkeeping is the recurring maintenance work that keeps your accounting records current and reconciled. In practice, that means transactions are posted and categorized against your chart of accounts, bank and credit card accounts are reconciled, exceptions are flagged, and a reporting package is organized for whoever reviews it—your CPA, controller, or management team.</p>
            <p className="text-lg text-muted leading-relaxed mt-4">It does not replace tax advice, audit opinions, management decisions, or other work that requires professional judgment. The delivery team prepares and documents the accounting work; the appropriate professional or client-side reviewer retains the relevant decisions and approvals.</p>
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

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">What experience teaches you</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">The parts of bookkeeping that affect the whole workflow</h2>
          </></Reveal>
          <div className="mt-10 space-y-6">
            {[
              { q: 'The bottleneck is often the source documents', a: 'Bank statements, vendor invoices, receipts, and other records have to arrive before the books can be completed. A simple document-intake process can make the bookkeeping cycle more predictable than simply asking the bookkeeper to work faster.' },
              { q: 'A messy chart of accounts compounds over time', a: 'Duplicate accounts, vague categories, and inconsistent coding make reconciliations and reporting harder. A focused cleanup of the chart of accounts can improve the recurring process before more volume is added.' },
              { q: 'Review is part of the process', a: 'Outsourced bookkeeping still needs a reviewer. The point is to move preparation and recurring work away from the reviewer so that the reviewer can focus on exceptions, judgment, approvals, and the quality of the final records.' },
              { q: 'The first month is different from steady-state work', a: 'Knowledge transfer takes time. The team has to learn the chart of accounts, recurring entries, vendors, transaction patterns, reporting expectations, and review preferences. A controlled onboarding period makes the ongoing workflow easier to manage.' },
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

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Software</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">How the workflow fits different accounting platforms</h2>
            <p className="text-muted leading-relaxed mt-4 max-w-2xl">We work inside your existing accounting software. The exact tasks depend on your system, chart of accounts, integrations, and review process.</p>
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

      <section id="regions" className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">By region</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">How bookkeeping workflows differ by market</h2>
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

      <section className="w-full py-16 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Cost context</span>
            <h2 className="text-xl md:text-2xl font-bold text-primary text-balance mt-2">What determines the cost of outsourced bookkeeping?</h2>
            <p className="text-muted leading-relaxed mt-4">There is no useful single price for every bookkeeping engagement. The cost usually depends on transaction volume, number of accounts and entities, software, cleanup requirements, reporting needs, and how much of the recurring workflow is being handed over.</p>
          </></Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tier: 'Transaction volume', notes: 'More transactions and more frequent processing generally require more delivery capacity.' },
              { tier: 'Workflow complexity', notes: 'Multiple entities, integrations, AP/AR, reconciliations, and close requirements add scope.' },
              { tier: 'Review and reporting', notes: 'The required reporting package, review cadence, cleanup, and documentation affect the overall engagement.' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="p-6 bg-input rounded-2xl border border-border/70">
                  <div className="font-bold text-primary text-lg">{t.tier}</div>
                  <p className="text-muted text-sm leading-6 mt-3">{t.notes}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-sm text-muted mt-6">We scope the actual workflow first and then recommend an engagement model that matches the work.</p>
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

      <CTABanner title="Where Is Your Bookkeeping Getting Stuck?" description="Tell us what is falling behind—reconciliations, cleanup, AP/AR, or month-end—and we can talk through what a practical support model looks like." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
