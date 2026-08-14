import { Metadata } from 'next';
import ServicePageTemplate from '@/components/service-page-template';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Audit Support & Preparation Services',
  description:
    'Expert audit support including documentation, testing, and preparation for external audits. Ensure audit readiness and compliance.',
  path: '/services/audit-support',
});

export default function AuditSupportPage() {
  return (
    <ServicePageTemplate
    path="/services/audit-support"
      service={{
        name: 'Audit Support Services',
        description:
          'Comprehensive audit support including documentation preparation, testing assistance, and preparation for external audits.',
        icon: '✓',
      }}
      overview="External audits require thorough preparation and documentation. Our audit support team helps prepare your company for successful audits by ensuring proper documentation, supporting testing procedures, and addressing auditor findings. We work with your external auditors to streamline the audit process, reduce time requirements, and ensure compliance with audit standards. Our experienced team brings expertise in audit requirements and best practices."
      benefits={[
        'Thorough audit preparation and documentation',
        'Organized and complete audit files',
        'Support during audit procedures and testing',
        'Quick response to auditor inquiries',
        'Resolution of audit findings and recommendations',
        'Reduced time and cost for audits',
        'Compliance with audit standards',
        'Year-round audit readiness',
      ]}
      process={[
        {
          step: 1,
          title: 'Audit Planning',
          description:
            'We coordinate with external auditors to understand scope, timeline, and requirements.',
        },
        {
          step: 2,
          title: 'Documentation Preparation',
          description:
            'We compile and organize all necessary supporting documentation and workpapers.',
        },
        {
          step: 3,
          title: 'Testing Support',
          description:
            'We assist with audit procedures, testing activities, and data gathering.',
        },
        {
          step: 4,
          title: 'Issue Resolution',
          description:
            'We address auditor questions, provide explanations, and correct any identified issues.',
        },
        {
          step: 5,
          title: 'Follow-up',
          description:
            'We implement recommendations and ensure compliance with audit findings.',
        },
      ]}
      deliverables={[
        'Complete audit documentation files',
        'Organized workpapers and support',
        'Management letters addressing findings',
        'Audit findings tracking and resolution',
        'Internal control recommendations',
        'Compliance confirmations and certifications',
      ]}
      relatedServices={[
        { name: 'Accounting Services', slug: 'accounting' },
        { name: 'Bookkeeping', slug: 'bookkeeping' },
        { name: 'Tax Preparation', slug: 'tax-preparation' },
        { name: 'Audit Support for U.S. Businesses', slug: 'audit-support/united-states' },
      ]}
      faqs={[
        {
          question: 'When should we start audit preparation?',
          answer:
            'We recommend starting 4-6 weeks before your audit fieldwork begins to ensure complete preparation.',
        },
        {
          question: 'What documentation do auditors need?',
          answer:
            'Auditors typically need general ledger, financial statements, trial balances, bank statements, confirmations, and supporting schedules.',
        },
        {
          question: 'Can you resolve audit findings?',
          answer:
            'Yes, we work with you to understand and resolve auditor findings and implement recommendations.',
        },
        {
          question: 'Do you work with all audit firms?',
          answer:
            'Yes, we support audits by any external firm and coordinate with your auditors throughout the process.',
        },
        {
          question: 'How do you reduce audit costs?',
          answer:
            'By preparing complete documentation upfront and being responsive to auditor requests, we minimize audit time and costs.',
        },
        {
          question: 'What about internal controls?',
          answer:
            'We help assess and strengthen internal controls to address auditor concerns and prevent future findings.',
        },
      ]}
    />
  );
}
