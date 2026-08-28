import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'MYOB Accounting Support',
  description: 'MYOB accounting support for Australian and New Zealand businesses — recurring bookkeeping, GST/BAS reconciliation, and reporting workflows.',
  path: '/technology/myob',
});

const faqs = [
  {
    question: 'Do you support Single Touch Payroll (STP) reporting for Australian businesses?',
    answer: "Yes, we work within MYOB's STP-compliant payroll reporting for Australian businesses, keeping reporting aligned with ATO requirements.",
  },
  {
    question: 'Can you help prepare BAS (Business Activity Statements)?',
    answer: 'We can prepare the underlying bookkeeping and GST reconciliation MYOB needs for BAS preparation, working alongside your accountant or tax agent for lodgment.',
  },
  {
    question: 'Do you support both MYOB Essentials and MYOB AccountRight?',
    answer: 'Yes, we work with both editions, adapting to whichever tier the client is currently using.',
  },
  {
    question: 'Do you work with New Zealand businesses too, or only Australian?',
    answer: 'We support both Australian and New Zealand MYOB users, adjusting for the relevant GST and reporting requirements in each country.',
  },
  {
    question: 'Do you implement or configure MYOB itself?',
    answer: 'We support the recurring accounting work inside an existing MYOB setup: bookkeeping, reconciliations, GST/BAS support and reporting. Initial setup and licensing are handled by your firm, the client, or an MYOB partner.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'MYOB', url: `${baseUrl}/technology/myob` },
]);

const workflows = [
  'Transaction processing and bank reconciliation',
  'GST reconciliation and BAS-ready records',
  'Payroll bookkeeping aligned with STP reporting',
  'Accounts payable and receivable workflows',
  'Month-end close and recurring reporting',
  'Cleanup and historical corrections',
];

export default function MYOBPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="Platform Workflow Support"
        title="MYOB Accounting Support"
        description="Help with the recurring accounting work inside MYOB — reconciliations, GST/BAS records, payroll bookkeeping and reporting for AU/NZ businesses."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">What buyers usually care about</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">MYOB is the system. Someone still has to keep GST and BAS records current.</h2><p className="text-lg text-muted leading-8">Australian and New Zealand compliance adds recurring work on top of ordinary bookkeeping — GST reconciliation, BAS-ready records and STP-aligned payroll all need to stay current between lodgment cycles. We work inside your existing MYOB setup on that recurring routine, while your accountant or tax agent keeps lodgment and advice responsibility.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workflows</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Work Around MYOB</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{workflows.map((item, i) => <Reveal key={i}><li className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-8">Connect MYOB to the accounting work</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/services/bookkeeping/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australian Bookkeeping</Link><Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australia Market</Link><Link href="/services/payroll/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Payroll Processing</Link></div></div></section>

      <FAQSection subtitle="MYOB Questions" items={faqs} columns={2} />

      <InquirySection source="/technology/myob" title="Talk to Us About Your MYOB Workload" lead="A free consultation, and a call that costs nothing. Tell us which MYOB edition the client runs and where the GST coding stops holding up." compact />

      <CTABanner title="Where Is Your MYOB Bookkeeping Getting Stuck?" description="Tell us whether the pressure is reconciliations, GST/BAS prep, payroll or simply keeping current." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
