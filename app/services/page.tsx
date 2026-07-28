import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { services } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Services',
  description:
    'Comprehensive accounting and finance services including bookkeeping, tax planning, financial advisory, and more.',
  path: '/services',
});

const serviceFAQs = [
  {
    question: 'Which service is best for my business?',
    answer:
      'The best service depends on your business type, size, and specific needs. We recommend scheduling a consultation where we can assess your situation and recommend a customized package.',
  },
  {
    question: 'Can I combine multiple services?',
    answer:
      'Yes, most clients use a combination of services. We can put together a package that addresses your accounting and finance needs together rather than piecemeal.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on the scope of services, volume of transactions, and engagement model. We provide transparent, fixed-fee quotes whenever possible. See our cost guide for an instant estimate.',
  },
  {
    question: 'What accounting software do you support?',
    answer:
      'We work with QuickBooks Online, Xero, NetSuite, Sage, and custom systems.',
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
        subtitle="Expertise at Every Level"
        title="Professional Accounting Services"
        description="From bookkeeping basics to complex tax strategy, we provide expert services tailored to your business."
        cta={{
          text: 'Get a Quote',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Solutions',
          href: '/solutions',
        }}
        background="primary-gradient"
      />

      <SectionGrid
        subtitle="Our Services"
        title="Complete Accounting Solutions"
        items={services}
        baseUrl="/services"
        columns={3}
        variant="default"
      />

      <FAQSection subtitle="Services" items={serviceFAQs} columns={2} />

      <CTABanner
        title="Need Help Choosing Services?"
        description="Our team can help you select the right combination of services for your business."
        cta={{
          text: 'Schedule a Consultation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
