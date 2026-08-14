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
          'Professional tax return preparation and filing support for businesses and individuals, prepared for review and sign-off by your CPA or Enrolled Agent.',
        icon: '📝',
      }}
      overview="Tax preparation requires expertise in constantly changing regulations and industry-specific requirements. Our experienced tax professionals handle return preparation for corporations, partnerships, sole proprietors, and individuals, working from your source documents and prior filings. We prepare returns in line with current federal, state, and local requirements; final review, tax positions, and sign-off remain with your licensed CPA or Enrolled Agent."
      benefits={[
        'Accurate tax return preparation and filing',
        'Returns prepared to current federal and state requirements',
        'Source-document organization and workpaper preparation',
        'Multi-entity return preparation',
        'Industry-specific tax expertise',
        'Quarterly estimated tax calculations',
        'Documentation prepared to support your CPA or EA',
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
          title: 'Organization & Review',
          description:
            'We organize source documents against your prior-year return and flag anything that looks incomplete or inconsistent before preparation begins.',
        },
        {
          step: 3,
          title: 'Return Preparation',
          description:
            'Our tax professionals prepare your complete tax return with all required schedules and supporting documentation.',
        },
        {
          step: 4,
          title: 'Quality Review',
          description:
            'We review the prepared return for accuracy and completeness before it goes to your CPA or Enrolled Agent for final sign-off.',
        },
        {
          step: 5,
          title: 'Filing Support',
          description:
            'Once your CPA or Enrolled Agent signs off, we support the filing process and stay available for any follow-up documentation needs.',
        },
      ]}
      deliverables={[
        'Completed tax returns, ready for your CPA or EA to review and sign',
        'Quarterly estimated tax calculations',
        'Multi-entity consolidated return preparation',
        'State and local tax documentation',
        'Organized workpapers supporting each return',
        'Tax documentation and source-document organization',
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
            'We recommend starting document organization in Q4 so preparation can begin as soon as year-end figures are final. We aim to file as early as possible once documents are complete.',
        },
        {
          question: 'What documents do I need?',
          answer:
            'Generally, you need income records, expense documentation, investment statements, payroll records, and prior year returns.',
        },
        {
          question: 'Can you represent us with the IRS?',
          answer:
            'No. IRS representation requires power of attorney held by a licensed CPA, Enrolled Agent, or attorney. We prepare returns and supporting documentation; representation before the IRS stays with your licensed CPA or EA.',
        },
        {
          question: 'Do you handle estimated quarterly taxes?',
          answer:
            'Yes, we calculate quarterly estimated tax figures for your review and payment.',
        },
        {
          question: 'What about multi-state taxes?',
          answer:
            'We handle the preparation work for multi-state tax situations, including income allocation and state-specific documentation, with final positions reviewed by your CPA.',
        },
        {
          question: 'How do you ensure return accuracy?',
          answer:
            'We use current tax software, follow IRS guidelines, stay updated on filing requirement changes, and run every return through an internal quality review before it goes to your CPA or EA for sign-off.',
        },
      ]}
    />
  );
}
