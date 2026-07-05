import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';
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
      'Absolutely! Most of our clients use a combination of services. We can create a customized package that addresses all your accounting and finance needs.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on the scope of services, volume of transactions, and engagement model. We provide transparent, fixed-fee quotes whenever possible.',
  },
  {
    question: 'What accounting software do you support?',
    answer:
      'We work with QuickBooks Online, Xero, NetSuite, Sage, and custom systems. We can integrate with virtually any accounting platform.',
  },
];

export default function ServicesPage() {
  return (
    <main>
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
