import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Payroll Processing — US, UK & Australia',
  description: 'What outsourced payroll actually covers, what it costs, how it works in QuickBooks and Xero, and the real questions employers ask before handing payroll to an offshore team.',
  path: '/services/payroll',
});

const faqs = [
  { question: 'What does outsourced payroll processing actually include?', answer: 'Payroll processing covers calculating gross pay (salaries, hourly rates, overtime, commissions), applying deductions (tax withholdings, benefits, garnishments), generating payslips, submitting payroll runs, and maintaining payroll records. It does not include HR strategy, benefits administration, employment law advice, or hiring/termination decisions.' },
  { question: 'Do you handle payroll tax filings?', answer: 'We handle payroll tax withholding calculations and record-keeping as part of payroll processing. The actual filing of payroll tax returns (Form 941, 940, state returns in the US; RTI in the UK; STP in Australia) can be included in scope or handled by your accountant — this depends on your setup and what we agree on during onboarding.' },
  { question: 'What software do you use for payroll?', answer: 'We work inside your existing payroll software — QuickBooks Payroll, Xero Payroll, Gusto, ADP, or similar. We do not require you to migrate to a separate system. For Australian clients we support MYOB payroll and Xero Payroll. For UK clients, RTI-compliant payroll software is required and we work within whatever is already set up.' },
  { question: 'How does outsourced payroll work across the US, UK, and Australia?', answer: 'Each jurisdiction has its own payroll compliance layer. US: federal and state withholding, FICA, FUTA/SUTA, W-2s. UK: PAYE, NI contributions, RTI submissions. Australia: STP reporting, superannuation, PAYG withholding. We handle the payroll processing and record-keeping within your existing compliant system; the compliance filings can be included or sit with your accountant.' },
  { question: 'What is the typical cost of outsourced payroll processing?', answer: 'Per-employee-per-month pricing is common in the US market: roughly $4–$10/employee/month for processing, excluding payroll software subscription costs. For UK and Australian clients, fixed monthly pricing based on headcount and frequency is more typical. Offshore payroll support costs 40–60% less than equivalent onshore payroll staff.' },
  { question: 'What are the most common mistakes in outsourced payroll?', answer: 'The most common: giving the payroll team full payroll-run approval authority with no internal check (payroll should always have a reviewer who confirms headcount and hours before runs are submitted); not establishing a clear cutoff for timesheet submission (late timesheets cascade into late payroll); and not reconciling the payroll general ledger entries against the payroll register monthly.' },
  { question: 'Can you handle payroll for contractors vs. employees?', answer: 'Yes. Contractor payment processing (1099 vendors in the US, limited company invoices in the UK, ABN holders in Australia) is handled differently from payroll but can be included in scope. Determining whether someone is a contractor or employee — and the tax implications of that classification — is a legal and tax question that stays with your advisor.' },
  { question: 'What questions does Reddit ask about outsourced payroll?', answer: '"What happens if payroll runs late?" (answer: it depends on the SLA; establish one before you start). "Do they have access to our bank account?" (answer: no — payment runs are approved internally and submitted by your authorized signatory; the payroll team prepares the run, it does not execute the payment). "Can they handle equity compensation?" (answer: vesting schedules and RSU taxation are beyond payroll processing scope; that sits with your equity platform and tax advisor).' },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Payroll Processing', url: `${baseUrl}/services/payroll` },
]);

const regionNotes = [
  { region: '🇺🇸 United States', items: ['Federal income tax withholding (W-4 based)', 'State income tax withholding', 'FICA: Social Security & Medicare', 'FUTA/SUTA unemployment taxes', 'W-2 and 1099 preparation support', 'Payroll journal entries into QBO/Xero'] },
  { region: '🇬🇧 United Kingdom', items: ['PAYE income tax withholding', 'National Insurance (employee & employer)', 'RTI submission support', 'Pension auto-enrolment bookkeeping', 'Statutory payments (SSP, SMP, SPP)', 'Payroll journal entries into Xero/Sage'] },
  { region: '🇦🇺 Australia', items: ['PAYG withholding calculations', 'Superannuation guarantee (11.5%)', 'Single Touch Payroll (STP) reporting', 'State payroll tax awareness', 'Annual Payment Summaries support', 'Payroll journal entries into MYOB/Xero'] },
];

export default function PayrollPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Outsourced Payroll Processing"
        title="What Outsourced Payroll Actually Covers"
        description="Scope, software, cost benchmarks, and the real questions employers ask before handing payroll to an offshore team."
        cta={{ text: 'Talk Through Your Payroll Setup', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Payroll Processing</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance mt-2">What the payroll team handles</h2>
            <p className="text-lg text-muted leading-relaxed mt-4">Payroll processing is the recurring calculation, documentation, and record-keeping work that happens each pay cycle. It is not HR strategy, employment law advice, or benefits design — those stay with your internal team or HR advisor. The payroll team prepares the run; your authorized person reviews and submits it.</p>
          </></Reveal>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {['Gross pay calculations (salary, hourly, overtime)', 'Tax withholding calculations by jurisdiction', 'Deduction management (benefits, garnishments)', 'Payslip/paystub generation', 'Payroll register and records maintenance', 'Journal entry preparation for the GL', 'Payroll reconciliation against the general ledger', 'Year-end payroll documentation support'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-input rounded-xl border border-border/70">
                  <Check className="text-accent shrink-0 w-5 h-5 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">By region</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance mt-2">Payroll compliance by market</h2>
            <p className="text-muted leading-relaxed mt-4 max-w-2xl">Each jurisdiction has its own payroll compliance layer. These are the recurring elements involved in each market.</p>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {regionNotes.map((r, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="p-6 bg-white rounded-2xl border border-border/70 h-full">
                  <div className="text-lg font-bold text-primary mb-4">{r.region}</div>
                  <ul className="space-y-2.5">
                    {r.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted">
                        <Check className="text-accent shrink-0 w-4 h-4 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Common mistakes</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance mt-2">What goes wrong with outsourced payroll</h2>
          </></Reveal>
          <div className="mt-10 space-y-5">
            {[
              { issue: 'No internal review before the payroll run', fix: 'Payroll should always have an authorized internal reviewer who confirms headcount, hours, and any changes before the run is submitted. The team prepares; someone internal approves.' },
              { issue: 'Late timesheets cascade into late payroll', fix: 'Establish a hard cutoff — timesheets due by noon Tuesday, payroll processed by Thursday — before you start. Late inputs after cutoff go into the next cycle, not this one.' },
              { issue: 'Payroll entries never reconcile to the GL', fix: 'The payroll register should reconcile to the journal entries posted in your accounting software each pay period. If they drift, errors compound across quarters.' },
              { issue: 'Assuming the payroll team handles tax filings', fix: 'Payroll processing (the calculations and records) is different from payroll tax filing (the actual return submissions). Clarify which is in scope before you start.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="p-6 bg-input rounded-2xl border border-border/70">
                  <div className="font-bold text-primary mb-2">❌ {item.issue}</div>
                  <div className="text-muted leading-7">✓ {item.fix}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Payroll Questions" items={faqs} columns={2} />

      <section className="w-full py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-primary mb-4">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/resources/guides/outsourced-payroll-processing-guide" className="px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium hover:bg-primary-light transition-colors">📖 Payroll Guide: US, UK &amp; AU</Link>
            <Link href="/services/accounting" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounting Services</Link>
            <Link href="/services/accounts-payable" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounts Payable</Link>
            <Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">QuickBooks Payroll</Link>
            <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Xero Payroll</Link>
            <Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">U.S. Market</Link>
          </div>
        </div>
      </section>

      <CTABanner title="Where Is Payroll Creating Friction?" description="Tell us your pay schedule, headcount, and which part of the payroll workflow is taking the most time. We can scope a practical support model around what you actually need." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
