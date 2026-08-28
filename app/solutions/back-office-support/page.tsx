import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'Back Office Support',
  description: 'Complete back-office accounting operations including bookkeeping, payroll processing, accounts payable/receivable, and account maintenance.',
  path: '/solutions/back-office-support',
});

const faqs = [
  {
    question: 'What is included in back office support?',
    answer: 'Recurring back-office accounting operations: bookkeeping, payroll processing, accounts payable/receivable, month-end close, and account maintenance.',
  },
  {
    question: 'Can you work inside our existing systems?',
    answer: 'Yes, we work inside QuickBooks, Xero, NetSuite, Sage, and similar platforms your firm or your client already uses. Data migration and initial system setup are typically handled by your software vendor or an implementation partner.',
  },
  {
    question: 'Does back-office support include HR functions?',
    answer: 'It includes the payroll-related accounting work: payroll processing, payroll tax withholding, and payroll reporting. Broader HR functions such as benefits administration, employment compliance, and regulatory filings sit with your HR provider or in-house team.',
  },
  {
    question: 'How do you ensure quality and accuracy?',
    answer: 'Multi-level QA processes, senior accountant reviews, automated controls, and monthly reconciliations are built into the workflow to catch errors before work reaches you.',
  },
  {
    question: 'Can we customize which functions you handle?',
    answer: 'Yes. You choose which back-office functions you want us to handle — some clients outsource everything, others select specific areas.',
  },
  {
    question: 'What is included in the pricing?',
    answer: 'Pricing is transparent and fixed-fee based on your transaction volume and function mix. No hidden costs or surprise fees.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
  { name: 'Back Office Support', url: `${baseUrl}/solutions/back-office-support` },
]);

export default function BackOfficeSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Back Office Support"
        title="End-to-End Operations Support"
        description="Take recurring accounting administration off your team's plate: bookkeeping, payroll processing, payables, and receivables."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Reveal><h2 className="text-4xl font-bold text-primary">Recurring Accounting Administration Outsourced</h2></Reveal>
              <p className="text-lg text-muted leading-relaxed">Back-office support takes recurring accounting administration off your team's plate so they can focus on review, clients, and growth instead of data entry.</p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Complete accounting operations',
                  'Payroll processing and payroll tax withholding',
                  'Accounts payable and receivable',
                  'Account maintenance and reconciliations',
                  'Month-end reporting and trend summaries',
                  'Documented, repeatable close process',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">What We Handle</h3>
              <div className="space-y-3 text-sm">
                {[
                  'Daily transaction recording and reconciliation',
                  'Monthly close and financial statements',
                  'Payroll processing and tax withholding',
                  'Invoice processing and vendor management',
                  'Customer billing and collections',
                  'Payroll reporting and recordkeeping',
                  'Account reconciliations and maintenance',
                  'Month-end reporting and trend summaries',
                ].map((item, i) => (
                  <p key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><h2 className="text-4xl font-bold text-primary text-center mb-12">Back Office Service Model</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Meaningfully reduce operational overhead vs. in-house staffing',
                  'Eliminate payroll tax headaches',
                  'Support compliance across the regions you operate in',
                  'Improve cash flow management',
                  'Access real-time financial data',
                  'Scale operations without hiring',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">→</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">Implementation</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-foreground">Week 1-2: Planning</div>
                  <p className="text-sm text-muted">Understand your processes and requirements</p>
                </div>
                <div>
                  <div className="font-bold text-foreground">Week 3-4: Transition</div>
                  <p className="text-sm text-muted">Data migration and system setup</p>
                </div>
                <div>
                  <div className="font-bold text-foreground">Week 5+: Operations</div>
                  <p className="text-sm text-muted">Full back-office operations begin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><h2 className="text-xl font-bold text-primary mb-4">Related Accounstone solutions</h2><div className="flex flex-wrap gap-3"><Link href="/solutions/offshore-accounting-support" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Offshore Accounting Support <ArrowRight size={14} /></Link><Link href="/solutions/dedicated-accounting-teams" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Dedicated Accounting Teams <ArrowRight size={14} /></Link><Link href="/resources/guides/choosing-an-engagement-model" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium">Compare All 4 Models <ArrowRight size={14} /></Link></div></div></section>

      <FAQSection subtitle="Back Office Support" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Outsource Your Back Office?"
        description="Let us handle the recurring operations so your people stay on the work that needs them."
        cta={{
          text: 'Start Back Office Support',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
