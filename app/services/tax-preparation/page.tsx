import { Metadata } from 'next';
import ServicePageTemplate from '@/components/service-page-template';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Professional Tax Preparation Services',
  description:
    'Expert tax preparation and filing services for businesses and individuals. Ensure compliance and optimize your tax position.',
  path: '/services/tax-preparation',
});

export default function TaxPreparationPage() {
  return (
    <ServicePageTemplate
    path="/services/tax-preparation"
      service={{
        name: 'Tax Preparation Services',
        description:
          'Professional tax return preparation and filing for businesses and individuals, ensuring full compliance and tax optimization.',
        icon: '📝',
      }}
      overview="Tax preparation requires expertise in constantly changing regulations and industry-specific requirements. Our experienced tax professionals handle complete tax preparation for corporations, partnerships, sole proprietors, and individuals. We ensure compliance with federal, state, and local tax requirements while implementing strategies to minimize your tax liability. Our team stays current with tax law changes and optimization opportunities."
      benefits={[
        'Accurate tax return preparation and filing',
        'Full federal and state compliance',
        'Tax reduction strategies and optimization',
        'Multi-entity tax planning',
        'Industry-specific tax expertise',
        'Quarterly tax planning and payments',
        'IRS representation and support',
        'Timely filing to avoid penalties',
      ]}
      process={[
        {
          step: 1,
          title: 'Information Gathering',
          description:
            'We collect all necessary financial documents, business information, and tax records needed for accurate preparation.',
        },
        {
          step: 2,
          title: 'Analysis & Planning',
          description:
            'We analyze your financial situation, identify tax strategies, and determine the optimal filing approach.',
        },
        {
          step: 3,
          title: 'Return Preparation',
          description:
            'Our tax professionals prepare your complete tax return with all required schedules and documentation.',
        },
        {
          step: 4,
          title: 'Review & Optimization',
          description:
            'We review your return, implement final tax optimization strategies, and ensure accuracy.',
        },
        {
          step: 5,
          title: 'Filing & Support',
          description:
            'We file your tax return and provide support for any follow-up questions or IRS correspondence.',
        },
      ]}
      deliverables={[
        'Completed and filed tax returns',
        'Tax planning summary and recommendations',
        'Quarterly estimated tax calculations',
        'Multi-entity consolidated returns',
        'State and local tax documentation',
        'IRS representation letters',
        'Tax documentation and organization',
      ]}
      relatedServices={[
        { name: 'Bookkeeping', slug: 'bookkeeping' },
        { name: 'Accounting Services', slug: 'accounting' },
        { name: 'Audit Support', slug: 'audit-support' },
        { name: 'Tax Preparation for U.S. Businesses', slug: 'tax-preparation/united-states' },
      ]}
      faqs={[
        {
          question: 'When should I start preparing for tax season?',
          answer:
            'We recommend starting tax preparation in Q4 to plan for the year and implement year-end strategies. We file as early as possible in January.',
        },
        {
          question: 'What documents do I need?',
          answer:
            'Generally, you need income records, expense documentation, investment statements, payroll records, and prior year returns.',
        },
        {
          question: 'Can you represent us with the IRS?',
          answer:
            'Yes, we can provide power of attorney to represent your interests in IRS matters and correspondence.',
        },
        {
          question: 'Do you handle estimated quarterly taxes?',
          answer:
            'Yes, we calculate quarterly estimated taxes and help ensure timely payment to avoid penalties.',
        },
        {
          question: 'What about multi-state taxes?',
          answer:
            'We handle complex multi-state tax situations including income allocation, nexus analysis, and state-specific requirements.',
        },
        {
          question: 'How do you ensure compliance?',
          answer:
            'We use current tax software, follow IRS guidelines, stay updated on law changes, and implement quality control reviews.',
        },
      ]}
    />
  );
}
