import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { services } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting & Bookkeeping Services',
  description:
    'Bookkeeping, accounting operations, tax preparation, payroll, accounts payable, accounts receivable, and audit support for businesses and CPA firms.',
  path: '/services',
});

const serviceFAQs = [
  {
    question: 'Which service is best for my business?',
    answer:
      'The right service depends on your workload, systems, team structure, and recurring processes. We start by understanding the work that needs to be done and then recommend the most practical support model.',
  },
  {
    question: 'Can I combine multiple services?',
    answer:
      'Yes. Many engagements combine bookkeeping, accounting operations, payables, receivables, payroll, tax preparation, or audit support depending on the client workflow.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on service scope, transaction volume, workflow complexity, systems, turnaround requirements, and the engagement model. We provide a clear proposal after understanding the work.',
  },
  {
    question: 'What accounting software do you support?',
    answer:
      'We work with QuickBooks Online, Xero, Sage, NetSuite, Drake Tax, CCH Axcess, MYOB, and client-specific systems where access and documentation are available.',
  },
];

const faqSchema = generateFAQSchema(serviceFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
]);

export default function ServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="What We Do"
        title="Accounting Support Built Around Your Workflow"
        description="From day-to-day bookkeeping to tax preparation and audit support, our team helps keep recurring accounting work accurate, organized, and on schedule."
        cta={{ text: 'Discuss Your Requirements', href: '/contact' }}
        ctaSecondary={{ text: 'View Solutions', href: '/solutions' }}
        background="primary-gradient"
      />

      <SectionGrid
        subtitle="Our Services"
        title="Practical Support for Recurring Accounting Work"
        description="Choose individual services or combine them into a delivery model that fits your team."
        items={services}
        baseUrl="/services"
        columns={3}
        variant="default"
      />

      <FAQSection subtitle="Services" items={serviceFAQs} columns={2} />

      <CTABanner
        title="Not Sure Where to Start?"
        description="Tell us which processes are creating pressure for your team. We will help map the work to the right support model."
        cta={{ text: 'Schedule a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}