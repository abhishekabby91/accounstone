import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Accounts Payable — What It Actually Covers',
  description: 'What outsourced AP processing covers, how it works in QuickBooks and Xero, what the real approval bottlenecks are, and the questions controllers ask before handing it off.',
  path: '/services/accounts-payable',
});

const faqs = [
  { question: 'What does outsourced AP processing actually include?', answer: 'AP processing covers receiving vendor invoices, entering them into your accounting system, matching against purchase orders where applicable, routing for internal approval, scheduling payments, and reconciling vendor statements. It does not include deciding which vendors to pay, approving invoices beyond your defined threshold, or managing vendor contracts.' },
  { question: 'Who approves invoices if AP is outsourced?', answer: 'Your team does. AP outsourcing handles the data entry, matching, and organization work; invoice approval stays with whoever currently approves it internally. The AP team gets invoices into the system and routes them to the right person; the approver clicks approve and the payment gets scheduled.' },
  { question: 'Do you make payments on our behalf?', answer: 'No. Payment execution (initiating ACH, writing checks, sending wire transfers) stays with an authorized person inside your organization. The AP team prepares the payment run — the vendor list, amounts, and scheduling — but the internal authorization and bank access stays with you.' },
  { question: 'How does AP outsourcing work in QuickBooks or Xero?', answer: 'In QBO: bills are entered against the vendor record, categorized to the correct expense account, and marked ready for payment via the pay bills queue. In Xero: bills are entered into the bills-to-pay module, approved through the Xero approval workflow if configured, and prepared for batch payment. Reconciliation against vendor statements happens in both.' },
  { question: 'What is the biggest AP problem outsourcing solves?', answer: 'Invoice pile-up — the physical or email inbox of invoices that nobody has entered, matched, or routed. The AP team processes invoices promptly, which means your approval queue stays current, vendor statements reconcile without surprises, and the aging payables report actually reflects reality rather than whatever was entered last.' },
  { question: 'What are the most common AP mistakes?', answer: 'Duplicate payments from the same invoice entered twice (prevented by duplicate-detection rules or PO matching). Late payment from invoices sitting unapproved (prevented by routing and follow-up). Vendor fraud from fake invoices (prevented by matching against approved vendor lists and PO records). Reconciliation drift from statements never checked against the system (prevented by monthly vendor statement reconciliations).' },
  { question: 'What does outsourced AP cost?', answer: 'Per-invoice pricing is common: roughly $0.50–$2.00 per invoice for basic entry and routing, higher for complex three-way matching or multi-entity consolidation. Fixed monthly pricing based on expected invoice volume is also common. Offshore AP support costs 50–65% less than equivalent onshore AP staff.' },
  { question: 'Does AP outsourcing work for multi-entity structures?', answer: 'Yes. Multi-entity AP typically involves entering invoices per-entity, managing intercompany coding, consolidating vendor payment runs, and reconciling AP balances across entities. We handle the processing layer; intercompany eliminations and consolidation accounting sit with your controller or CPA.' },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounts Payable', url: `${baseUrl}/services/accounts-payable` },
]);

export default function APPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Outsourced Accounts Payable"
        title="What Outsourced AP Actually Covers"
        description="What the AP team handles, what stays with your internal team, how it works in QuickBooks and Xero, and what the real bottlenecks look like in practice."
        cta={{ text: 'Talk Through Your AP Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'View All Services', href: '/services' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Accounts Payable</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">What the AP team handles vs. what stays internal</h2>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="p-8 bg-input rounded-2xl border border-border/70 h-full">
                <h3 className="font-bold text-primary text-xl mb-5">Can be outsourced</h3>
                <ul className="space-y-3">
                  {['Invoice receipt and data entry', 'PO matching and three-way matching', 'Vendor record maintenance', 'Invoice routing to approvers', 'Payment run preparation', 'Vendor statement reconciliation', 'AP aging report maintenance', 'Month-end AP close tasks'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="text-accent shrink-0 w-4 h-4 mt-0.5" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-8 bg-primary rounded-2xl text-white h-full">
                <h3 className="font-bold text-white text-xl mb-5">Stays with your team</h3>
                <ul className="space-y-3">
                  {['Invoice approval authority', 'Vendor selection and contracting', 'Payment execution (bank access)', 'Dispute resolution with vendors', 'Write-off decisions', 'New vendor onboarding approval', 'Internal controls design', 'Exception handling above threshold'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/85">
                      <Check className="text-white shrink-0 w-4 h-4 mt-0.5" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">In practice</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">The AP workflow step by step</h2>
          </></Reveal>
          <ol className="mt-10 space-y-5">
            {[
              { n: '01', t: 'Invoice received', d: 'Invoices arrive by email, post, or upload. The AP team logs them, assigns them to the correct vendor and period, and enters them into the accounting system.' },
              { n: '02', t: 'Matching and coding', d: 'If purchase orders exist, the invoice is matched against the PO line items. The expense is coded to the correct account and cost center per your chart of accounts.' },
              { n: '03', t: 'Routed for approval', d: 'The invoice is routed to the authorized approver (via email, the accounting system, or an approval workflow tool). The AP team follows up on outstanding approvals before the payment run.' },
              { n: '04', t: 'Payment run prepared', d: 'Approved invoices are added to the payment batch with vendor bank details, payment amounts, and due dates. The batch is handed to the internal payment authorizer — not submitted by the AP team.' },
              { n: '05', t: 'Reconcile and close', d: 'Vendor statements are reconciled against the AP ledger monthly. Any discrepancies — missing invoices, unapplied credits, duplicate entries — are resolved and documented.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <li className="flex gap-5 p-6 bg-white rounded-2xl border border-border/70">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">{step.n}</div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{step.t}</h3>
                    <p className="text-muted text-sm leading-6">{step.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FAQSection subtitle="AP Questions" items={faqs} columns={2} />

      <section className="w-full py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-primary mb-4">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/resources/guides/outsourced-accounts-payable-guide" className="px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium hover:bg-primary-light transition-colors">📖 AP Guide: QBO, Xero &amp; NetSuite</Link>
            <Link href="/services/accounts-receivable" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounts Receivable</Link>
            <Link href="/services/bookkeeping" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Bookkeeping</Link>
            <Link href="/services/accounting" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounting Services</Link>
            <Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">QuickBooks</Link>
            <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Xero</Link>
          </div>
        </div>
      </section>

      <CTABanner title="Where Is AP Creating a Backlog?" description="Tell us your invoice volume, current approval workflow, and which part of AP is taking the most manual time. We can scope a practical support model around it." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
