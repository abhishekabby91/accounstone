import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Accounts Receivable — What It Actually Covers',
  description: 'What outsourced AR processing covers, how collections follow-up works, what DSO means practically, and the questions controllers ask before outsourcing receivables.',
  path: '/services/accounts-receivable',
});

const faqs = [
  { question: 'What does outsourced AR processing actually include?', answer: 'AR processing covers creating and sending customer invoices, applying payments when received, tracking outstanding balances, following up on overdue accounts, reconciling customer accounts, and maintaining the AR aging report. It does not include credit decisions, write-off authority, or legal collection action — those stay with your management team.' },
  { question: 'Will the AR team contact my customers?', answer: 'This depends on the scope you define. For follow-up on overdue invoices, the AR team can send reminder emails on your behalf, in your company name, from a shared or delegated inbox. Phone collection calls to customers typically stay with your internal team unless specifically agreed. The level of customer-facing contact should be defined before starting.' },
  { question: 'How does AR outsourcing work in QuickBooks or Xero?', answer: 'In QBO: invoices are created per the sales order or contract, sent from QBO, and payments are applied as they arrive from the bank feed or manual input. Aging is monitored via the A/R Aging Summary report. In Xero: invoices are created and approved in Xero, sent via the Xero email integration, and payments are matched from the bank feed. The overdue list feeds directly into follow-up workflows.' },
  { question: 'What is DSO and why does it matter for outsourced AR?', answer: 'DSO (Days Sales Outstanding) measures how long, on average, it takes to collect payment after invoicing. Outsourcing AR with consistent follow-up and aging monitoring typically reduces DSO by 5–15 days, which directly improves cash flow. A business with $500K monthly revenue and a 45-day DSO has roughly $750K tied up in receivables — reducing DSO to 35 days frees $167K.' },
  { question: 'What is the most common reason AR goes wrong?', answer: 'Invoices sent late or with errors. An AR team following up on an incorrect invoice creates a dispute rather than a payment. The single most impactful thing before outsourcing AR is making sure invoices go out promptly and correctly — the collection process only works if the invoice itself is undisputed.' },
  { question: 'Can you handle recurring invoicing and subscription billing?', answer: 'Yes. Recurring invoice schedules in QBO, Xero, or your billing platform can be managed as part of AR — creating, sending, and tracking recurring invoices on schedule. Subscription billing through dedicated platforms (Stripe, Chargebee, Recurly) integrates with QBO/Xero via sync, and the AR team works with the synchronized data.' },
  { question: 'What stays with our team in an outsourced AR setup?', answer: 'Credit limit decisions and credit holds. Write-off approval authority. Legal or collections agency referral decisions. Customer contract terms that affect invoicing. Any dispute that requires a business judgment about the relationship rather than a factual resolution. The AR team handles the process; you retain the judgment calls.' },
  { question: 'What does outsourced AR cost?', answer: 'Typically $600–$2,000/month for SMB-scale AR with up to 200–400 monthly invoices, consistent follow-up, and monthly reconciliation. Higher volumes or complex billing arrangements cost more. Per-invoice pricing ranges from $1.50–$4.00 depending on complexity. Offshore AR support costs 45–60% less than equivalent onshore AR staff.' },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounts Receivable', url: `${baseUrl}/services/accounts-receivable` },
]);

export default function ARPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Outsourced Accounts Receivable"
        title="What Outsourced AR Actually Covers"
        description="How outsourced receivables work in practice — invoicing, follow-up, aging, and what it does for DSO — plus the judgment calls that stay with your team."
        cta={{ text: 'Talk Through Your AR Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'View All Services', href: '/services' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Accounts Receivable</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">The AR cycle</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">From invoice to collection — what the AR team handles</h2>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { t: 'Invoice creation & sending', d: 'Invoices created from sales orders, contracts, or time sheets, reviewed, and sent on your billing schedule.' },
              { t: 'Payment application', d: 'Incoming payments matched to open invoices in QBO or Xero, discrepancies flagged for internal review.' },
              { t: 'Aging monitoring', d: 'Weekly AR aging review — 30/60/90+ day buckets tracked, escalation list prepared for your review.' },
              { t: 'Follow-up sequences', d: 'Systematic reminders sent at defined intervals (3 days before due, on due date, 7/14/30 days overdue) in your company name.' },
              { t: 'Customer account reconciliation', d: 'Customer accounts reconciled against statements, disputes identified and documented for your resolution.' },
              { t: 'Month-end AR close', d: 'AR balance reconciled to the general ledger, uncollectable balances flagged for write-off consideration.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="p-6 bg-input rounded-xl border border-border/70">
                  <h3 className="font-bold text-primary mb-2">{item.t}</h3>
                  <p className="text-muted text-sm leading-6">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Cash flow impact</span>
            <h2 className="text-xl md:text-2xl font-bold text-primary text-balance mt-2">What reducing DSO actually means in dollars</h2>
          </></Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'DSO: 45 days', rev: '$500K/mo revenue', tied: '~$750K in receivables' },
              { label: 'DSO: 35 days', rev: '$500K/mo revenue', tied: '~$583K in receivables' },
              { label: 'Freed up', rev: '10-day improvement', tied: '~$167K cash released', highlight: true },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${item.highlight ? 'bg-primary text-white border-primary' : 'bg-white border-border/70'}`}>
                <div className={`font-bold text-xl mb-2 ${item.highlight ? 'text-white' : 'text-primary'}`}>{item.label}</div>
                <div className={`text-sm mb-1 ${item.highlight ? 'text-white/80' : 'text-muted'}`}>{item.rev}</div>
                <div className={`text-lg font-semibold ${item.highlight ? 'text-white' : 'text-foreground'}`}>{item.tied}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted mt-5">Consistent AR follow-up typically reduces DSO by 5–15 days. The cash released is effectively interest-free working capital your business already earned.</p>
        </div>
      </section>

      <FAQSection subtitle="AR Questions" items={faqs} columns={2} />

      <section className="w-full py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-primary mb-4">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/resources/guides/outsourced-accounts-receivable-guide" className="px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium hover:bg-primary-light transition-colors">📖 AR Guide: DSO, Collections &amp; Software</Link>
            <Link href="/services/accounts-payable" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounts Payable</Link>
            <Link href="/services/bookkeeping" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Bookkeeping</Link>
            <Link href="/services/accounting" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounting Services</Link>
            <Link href="/industries/ecommerce" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">E-Commerce</Link>
          </div>
        </div>
      </section>

      <CTABanner title="How Long Are You Waiting to Collect?" description="Tell us your invoice volume, average payment terms, and current follow-up process. We can scope a practical AR support model that improves your collection cycle." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
