import { Metadata } from 'next';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'Back Office Support',
  description: 'Complete back-office operations including accounting, payroll, HR, and administrative functions. End-to-end support for your business.',
  path: '/solutions/back-office-support',
});

const faqs = [
  {
    question: 'What is included in back office support?',
    answer: 'Complete back-office operations including accounting, bookkeeping, payroll processing, accounts payable/receivable, financial reporting, HR compliance, and administrative functions.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Yes, we integrate seamlessly with QuickBooks, Xero, NetSuite, Sage, and custom systems. We handle data migration and system setup.',
  },
  {
    question: 'What about HR and compliance functions?',
    answer: 'We provide HR support including payroll processing, benefits administration, compliance reporting, and regulatory requirements across all our markets.',
  },
  {
    question: 'How do you ensure quality and accuracy?',
    answer: 'Multi-level QA processes, senior accountant reviews, automated controls, and monthly reconciliations ensure accuracy and compliance.',
  },
  {
    question: 'Can we customize which functions you handle?',
    answer: 'Absolutely. You choose which back-office functions you want us to handle. Some clients outsource everything, others select specific areas.',
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
        description="Outsource all your back-office operations. We handle accounting, payroll, HR, and administrative functions so you can focus on your core business."
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

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Reveal><h2 className="text-4xl font-bold text-primary">Full Back-Office Operations Outsourced</h2></Reveal>
              <p className="text-lg text-muted leading-relaxed">Back-office support removes the burden of administrative operations from your team. We handle all the operational details so you can focus on strategy, sales, and growth.</p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Complete accounting operations',
                  'Payroll processing and compliance',
                  'Accounts payable and receivable',
                  'HR administration and benefits',
                  'Financial reporting and analysis',
                  'System and process management',
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
                  'Benefits administration',
                  'Compliance reporting',
                  'Financial reporting and trend summaries',
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

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
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

      <FAQSection subtitle="Back Office Support" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Outsource Your Back Office?"
        description="Let us handle the operations so you can focus on growing your business."
        cta={{
          text: 'Start Back Office Support',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
