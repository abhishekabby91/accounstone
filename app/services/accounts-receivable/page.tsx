import { Metadata } from 'next';
import ServicePageTemplate from '@/components/service-page-template';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Accounts Receivable Management Services',
  description:
    'Expert accounts receivable management including invoicing, collections, and cash flow optimization. Improve your receivables efficiency.',
  path: '/services/accounts-receivable',
});

export default function ARPage() {
  return (
    <ServicePageTemplate
    path="/services/accounts-receivable"
      service={{
        name: 'Accounts Receivable Services',
        description:
          'Complete accounts receivable management including invoicing, payment processing, collections, and financial reporting.',
        icon: '📥',
      }}
      overview="Effective accounts receivable management directly impacts cash flow and profitability. Our AR experts manage complete receivable operations from invoice creation through collection. We handle invoicing, payment reconciliation, aging analysis, and collections. Let us optimize your AR operations while improving cash conversion and customer relationships."
      benefits={[
        'Accurate and timely invoicing',
        'Multiple payment collection methods',
        'Payment reconciliation and posting',
        'Aging analysis and collections tracking',
        'Customer communication and follow-up',
        'Bad debt identification and reserves',
        'Improved cash collection rates',
        'Customer relationship management',
      ]}
      process={[
        {
          step: 1,
          title: 'Process Setup',
          description: 'We design invoicing procedures, establish payment terms, and configure collection policies.',
        },
        {
          step: 2,
          title: 'Invoice Generation',
          description: 'We create accurate invoices with clear payment terms, details, and customer information.',
        },
        {
          step: 3,
          title: 'Collections Management',
          description: 'We track payments, send reminders for overdue accounts, and follow up with customers.',
        },
        {
          step: 4,
          title: 'Payment Posting',
          description: 'We receive and post payments accurately, reconcile accounts, and manage exceptions.',
        },
        {
          step: 5,
          title: 'Reporting & Analysis',
          description: 'We provide aging reports, collection metrics, and recommendations for improvement.',
        },
      ]}
      deliverables={[
        'Monthly aging reports',
        'Collection activity summaries',
        'Payment reconciliation reports',
        'Customer balance statements',
        'Cash collection forecasts',
        'Bad debt analysis and recommendations',
      ]}
      relatedServices={[
        { name: 'Bookkeeping', slug: 'bookkeeping' },
        { name: 'Accounts Payable', slug: 'accounts-payable' },
        { name: 'Accounting Services', slug: 'accounting' },
      ]}
      faqs={[
        {
          question: 'How do you manage collections?',
          answer:
            'We track aging, send collection notices, follow up with customers, and implement collection strategies.',
        },
        {
          question: 'What payment methods do you support?',
          answer:
            'We accept checks, ACH, credit cards, and other payment methods based on your customer preferences.',
        },
        {
          question: 'Can you customize invoicing?',
          answer:
            'Yes, we create professional invoices with your branding, terms, and any custom fields needed.',
        },
        {
          question: 'How do you handle payment disputes?',
          answer:
            'We investigate discrepancies, communicate with customers, and resolve issues professionally.',
        },
        {
          question: 'Do you identify bad debt?',
          answer:
            'Yes, we analyze aging, identify problematic accounts, and recommend appropriate write-offs.',
        },
        {
          question: 'What reports do you provide?',
          answer:
            'We provide aging analysis, collection activity reports, payment forecasts, and customer statements.',
        },
      ]}
    />
  );
}
