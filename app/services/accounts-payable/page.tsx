import { Metadata } from 'next';
import ServicePageTemplate from '@/components/service-page-template';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Accounts Payable Management Services',
  description:
    'Expert accounts payable management including invoice processing, vendor management, and payment optimization. Streamline your AP operations.',
  path: '/services/accounts-payable',
});

export default function APPage() {
  return (
    <ServicePageTemplate
    path="/services/accounts-payable"
      service={{
        name: 'Accounts Payable Services',
        description:
          'Complete accounts payable management including invoice processing, vendor management, payment optimization, and financial reporting.',
        icon: '💳',
      }}
      overview="Efficient accounts payable management is critical for cash flow and vendor relationships. Our AP experts handle complete payable operations from invoice receipt through payment. We manage vendor relationships, optimize payment timing, implement approval controls, and provide detailed reporting. Let us streamline your AP processes while improving cash flow and reducing costs."
      benefits={[
        'Efficient invoice receipt and processing',
        'Vendor management and relationship optimization',
        'Payment scheduling and optimization',
        'Early payment discounts maximization',
        'Approval workflow automation',
        'Duplicate invoice prevention',
        'Improved cash flow management',
        'Detailed AP reporting and aging analysis',
      ]}
      process={[
        {
          step: 1,
          title: 'Process Review',
          description: 'We assess your current AP processes, vendor relationships, and payment requirements.',
        },
        {
          step: 2,
          title: 'System Setup',
          description: 'We configure your accounting system for efficient invoice processing and payment management.',
        },
        {
          step: 3,
          title: 'Invoice Processing',
          description: 'We receive, validate, approve, and record invoices in your accounting system.',
        },
        {
          step: 4,
          title: 'Payment Processing',
          description:
            'We schedule payments to optimize cash flow, capture early payment discounts, and maintain vendor relationships.',
        },
        {
          step: 5,
          title: 'Reporting & Optimization',
          description: 'We provide AP reports, aging analysis, and recommendations for continued optimization.',
        },
      ]}
      deliverables={[
        'Monthly AP reports and aging',
        'Payment summary statements',
        'Vendor reconciliation statements',
        'Cash flow forecasts',
        'AP analytics and trends',
        'Early payment discount capture reports',
      ]}
      relatedServices={[
        { name: 'Bookkeeping', slug: 'bookkeeping' },
        { name: 'Accounts Receivable', slug: 'accounts-receivable' },
        { name: 'Accounting Services', slug: 'accounting' },
      ]}
      faqs={[
        {
          question: 'How do you process invoices?',
          answer:
            'We receive invoices, validate against purchase orders, approve according to your controls, and record in your accounting system.',
        },
        {
          question: 'Can you optimize our cash flow?',
          answer:
            'Yes, we schedule payments strategically to manage cash flow while capturing early payment discounts when beneficial.',
        },
        {
          question: 'How do you handle approval workflows?',
          answer:
            'We implement configurable approval workflows based on amount, vendor, or account to ensure proper controls.',
        },
        {
          question: 'Do you manage vendor relationships?',
          answer:
            'Yes, we handle vendor communications, dispute resolution, and maintain positive relationships.',
        },
        {
          question: 'What AP reports do you provide?',
          answer:
            'We provide aging reports, payment summaries, vendor reconciliations, and cash flow forecasts.',
        },
        {
          question: 'Can you prevent duplicate payments?',
          answer:
            'Yes, we implement controls and reviews to identify and prevent duplicate invoices and payments.',
        },
      ]}
    />
  );
}
