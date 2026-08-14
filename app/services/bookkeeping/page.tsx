import { Metadata } from 'next';
import ServicePageTemplate from '@/components/service-page-template';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Professional Bookkeeping Services',
  description:
    'Expert bookkeeping services for small to mid-size businesses. We handle transaction recording, reconciliations, and financial record management. Start with a free consultation.',
  path: '/services/bookkeeping',
});

export default function BookkeepingPage() {
  return (
    <ServicePageTemplate
    path="/services/bookkeeping"
      service={{
        name: 'Bookkeeping Services',
        description:
          'Expert bookkeeping services handling daily transaction recording, bank reconciliations, and complete financial record management for your business.',
        icon: '📖',
      }}
      overview="Professional bookkeeping is the foundation of accurate, reliable accounting records. Our experienced bookkeepers handle all aspects of transaction recording, bank reconciliation, accounts payable and receivable, and financial record maintenance. Whether you're a growing business or established firm, we provide accurate, timely bookkeeping that gives you complete visibility into your financial position. Our offshore bookkeeping team works inside your existing systems and processes, at a competitive rate for the work involved."
      benefits={[
        'Accurate daily transaction recording and classification',
        'Weekly or monthly bank reconciliations',
        'Accounts payable and accounts receivable management',
        'Monthly financial reports and analysis',
        'Dedicated bookkeeper for your account',
        'Cloud-based access to all records and reports',
        'Reduced time spent on administrative tasks',
        'Compliance with accounting standards',
      ]}
      process={[
        {
          step: 1,
          title: 'Assessment & Setup',
          description:
            'We review your current bookkeeping processes, accounting software, and financial requirements to create a customized plan.',
        },
        {
          step: 2,
          title: 'System Integration',
          description:
            'We integrate with your accounting software (QuickBooks, Xero, etc.) and establish secure connections for data transfer.',
        },
        {
          step: 3,
          title: 'Daily Operations',
          description:
            'Our team processes transactions, maintains records, reconciles accounts, and provides weekly/monthly updates.',
        },
        {
          step: 4,
          title: 'Reporting & Analysis',
          description:
            'We generate monthly financial reports, identify trends, and provide insights to support your business decisions.',
        },
        {
          step: 5,
          title: 'Ongoing Support',
          description:
            'Dedicated support for questions, reconciliation issues, and changes to your bookkeeping needs.',
        },
      ]}
      deliverables={[
        'Monthly financial statements (P&L and Balance Sheet)',
        'Bank reconciliation reports',
        'Accounts receivable aging reports',
        'Accounts payable aging reports',
        'General ledger with account details',
        'Transaction detail reports',
        'Custom financial reports as needed',
      ]}
      relatedServices={[
        { name: 'Accounts Payable', slug: 'accounts-payable' },
        { name: 'Accounts Receivable', slug: 'accounts-receivable' },
        { name: 'Accounting Services', slug: 'accounting' },
        { name: 'Payroll Processing', slug: 'payroll' },
        { name: 'Bookkeeping for U.S. Businesses', slug: 'bookkeeping/united-states' },
      ]}
      faqs={[
        {
          question: 'How often will you reconcile my accounts?',
          answer:
            'We perform weekly or monthly bank reconciliations based on your preference. Most clients prefer monthly reconciliation to review with their own accounting team.',
        },
        {
          question: 'What accounting software do you support?',
          answer:
            'We work with QuickBooks Online, Xero, Sage, NetSuite, and other cloud-based accounting platforms. We can also support custom integrations if needed.',
        },
        {
          question: 'Can you handle multi-currency transactions?',
          answer:
            'Yes, we manage multi-currency transactions and can reconcile accounts in different currencies with proper documentation.',
        },
        {
          question: 'How secure is our financial data?',
          answer:
            'We handle every engagement under NDA, limit system access to the team members actually working on your account, and are actively working toward formal certification (SOC 2). We\'ll share our exact current status if you ask, rather than overstating it.',
        },
        {
          question: 'What\'s the typical cost for bookkeeping services?',
          answer:
            'Pricing depends on transaction volume, complexity, and frequency of reporting. Most small businesses invest $500-$2,000 monthly. We provide a free quote after assessment.',
        },
        {
          question: 'Can you transition our existing records?',
          answer:
            'Yes, we can help migrate your historical records to a cloud platform and ensure clean data going forward. This typically takes 2-4 weeks depending on data complexity.',
        },
      ]}
    />
  );
}
