import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { serviceRegions } from '@/lib/data';

const PATH = '/markets/united-kingdom';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting in the United Kingdom: A Practical Overview',
  description:
    'How UK accounting works in practice — HMRC, VAT and Making Tax Digital, PAYE and RTI, Corporation Tax, Companies House and FRS 102 — and where outsourced support fits.',
  path: PATH,
});

const faqs = [
  {
    question: 'What does Making Tax Digital actually require?',
    answer:
      'For VAT-registered businesses, records have to be kept digitally and returns submitted through compatible software, with an unbroken digital link between the underlying records and the submitted figures. In practice the digital link is the part that breaks — a manual copy-paste into a spreadsheet interrupts the chain. Keeping records in the accounting system rather than around it is what keeps compliance straightforward.',
  },
  {
    question: 'Do you submit our VAT return to HMRC?',
    answer:
      'No. We prepare the underlying records and the return figures so submission is straightforward, but submission itself stays with your registered practitioner. We do not hold HMRC portal credentials.',
  },
  {
    question: 'Which reporting standard applies to us?',
    answer:
      'Most UK companies report under FRS 102, and smaller entities often under Section 1A of it. Some report under FRS 105 as a micro-entity, and listed groups under IFRS. Your accountant determines which applies; we prepare records to the framework they have set.',
  },
  {
    question: 'Are we required to have an audit?',
    answer:
      'Audit exemption depends on turnover, balance sheet total and employee numbers, and on whether the company is part of a group or in a regulated sector. Because the tests interact, this is a question for your accountant rather than a rule of thumb. Where an audit is required, our audit support work is preparation for the engaged registered auditor.',
  },
  {
    question: 'Do you handle CIS?',
    answer:
      'We can handle the accounting around the Construction Industry Scheme — subcontractor records, deduction tracking, and the supporting detail for returns. Verification and submission stay with your registered practitioner.',
  },
  {
    question: 'What software do UK clients usually run?',
    answer:
      'Xero and QuickBooks Online dominate the UK SME market, with Sage still common in more established businesses. We work inside whichever platform is already in place rather than implementing or configuring it.',
  },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United Kingdom', url: `${baseUrl}${PATH}` },
]);

const topics = [
  {
    h: 'HMRC sets the recurring rhythm',
    p: 'Most UK businesses deal with a single tax authority across several cycles: VAT returns, PAYE submissions on or before every pay date, and Corporation Tax annually. This is administratively simpler than the U.S. federal-plus-state split, but the cycles are frequent and unforgiving — a late RTI submission is visible to HMRC immediately.',
  },
  {
    h: 'VAT is the cycle everything else is timed around',
    p: 'A VAT-registered business typically reports quarterly, with the return and payment due roughly a month and a week after the quarter ends. Because VAT touches nearly every transaction, the quarter is effectively a mini close: if the ledger is not current and coding is inconsistent, the return becomes an exercise in reconstruction rather than reporting.',
  },
  {
    h: 'Making Tax Digital changed how records must be kept',
    p: 'MTD requires digital record-keeping and submission through compatible software, with digital links preserved from source to return. The practical effect is that spreadsheet workarounds between the accounting system and the return are no longer acceptable — records have to live in the system.',
  },
  {
    h: 'PAYE runs in real time',
    p: 'Under Real Time Information, payroll data is reported to HMRC on or before each pay date rather than at year end. Pension auto-enrolment sits alongside it, with assessment and contributions running on the same cycle. Payroll therefore has no quiet periods to catch up in — it either runs correctly each period or accumulates corrections.',
  },
  {
    h: 'Companies House is a separate obligation from tax',
    p: 'Annual accounts filed at Companies House and the Corporation Tax return filed with HMRC draw on the same underlying figures but are separate filings with separate deadlines. Both depend on a year end that has been properly prepared, which is why year-end accounts work usually starts well before either deadline.',
  },
  {
    h: 'FRS 102 as the everyday framework',
    p: 'FRS 102 governs how most UK entities recognise and present transactions, with Section 1A providing reduced disclosure for smaller companies. The areas that most often need care are accruals and prepayments, revenue timing, and the disclosure notes — related parties, commitments, and leases — that are assembled from records kept during the year.',
  },
];

export default function UKMarketPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="United Kingdom"
        title="Accounting in the United Kingdom"
        description="How UK accounting works in practice — the VAT cycle, Making Tax Digital, real-time PAYE, Companies House and FRS 102 — and where outside capacity actually helps."
        cta={{ text: 'Discuss Your UK Requirements', href: '/contact' }}
        ctaSecondary={{ text: 'View UK Services', href: '/services#united-kingdom' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/markets" className="hover:text-primary transition-colors">Markets</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United Kingdom</li>
        </ol>
      </nav>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-5"><>
          <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Environment UK Businesses Operate In</h2>
          <p className="text-lg text-muted leading-relaxed">
            UK accounting is administratively centralised in a way that U.S. accounting is not. One tax authority, one national indirect tax, one companies registry. What it lacks in fragmentation it makes up for in cadence: VAT quarterly, PAYE on or before every pay date, pension assessment each period, and a year end that has to satisfy both HMRC and Companies House.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            The pressure in UK finance teams is therefore rarely a single deadline. It is the accumulation of frequent, non-negotiable cycles against a ledger that has to stay current to serve them. This page describes that environment as background; the commercial detail sits on the individual UK service pages linked further down.
          </p>
        </></Reveal>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="max-w-3xl space-y-3 mb-8"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">The landscape</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">Six Things That Shape UK Accounting Work</h2>
          </></Reveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {topics.map((t, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <div className="h-full p-5 sm:p-6 bg-white rounded-xl border border-border/70">
                  <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{t.h}</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{t.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-5"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Where outsourcing fits</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">What Can Move, and What Cannot</h2>
            <p className="text-lg text-muted leading-relaxed">
              The recurring layer moves well: posting and reconciling transactions, keeping VAT coding consistent as it happens, running the payroll calculation each period, maintaining the purchase and sales ledgers, and preparing year-end accounts and the workpapers behind them. This is process work with clear inputs and a reviewable output.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              What stays with your registered practitioner is submission and judgement: filing to HMRC and Companies House, signing off statutory accounts, deciding the reporting framework, and any question of tax treatment rather than tax recording. We do not hold HMRC portal credentials, and we do not offer tax planning or advisory work in any form.
            </p>
          </></Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="max-w-3xl space-y-3 mb-7"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">UK services</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">Our UK Service Pages</h2>
            <p className="text-base text-muted leading-relaxed">Each page covers scope, the review boundary, and how the work is run for UK engagements.</p>
          </></Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceRegions.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.2)}>
                <li>
                  <Link href={`/services/${s.slug}/united-kingdom`} className="block p-4 bg-white rounded-xl border border-border/70 hover:border-primary/40 transition-colors">
                    <span className="font-semibold text-primary">UK {s.name}</span>
                    <span className="block text-sm text-muted mt-1 leading-relaxed">{s.copy['united-kingdom']}</span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Xero</Link>
              <Link href="/technology/sage" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Sage</Link>
              <Link href="/industries/professional-services" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Professional Services</Link>
              <Link href="/industries/ecommerce" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">E-Commerce</Link>
              <Link href="/compliance" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Compliance &amp; Controls</Link>
              <Link href="/resources/guides/outsourced-payroll-processing-guide" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Payroll guide</Link>
              <Link href="/resources/guides/outsourced-accounts-receivable-guide" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Receivables guide</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="United Kingdom" items={faqs} columns={2} />

      <CTABanner
        title="Working Through a UK Accounting Bottleneck?"
        description="Tell us where the pressure sits — the VAT quarter, payroll each period, or year-end preparation — and we can talk through what support would actually change."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
