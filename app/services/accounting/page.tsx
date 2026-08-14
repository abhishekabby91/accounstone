import { Metadata } from 'next';
import ServicePageTemplate from '@/components/service-page-template';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting Services',
  description:
    'Day-to-day accounting support including reconciliations, close tasks, journal entries, account maintenance, and management reporting.',
  path: '/services/accounting',
});

export default function AccountingPage() {
  return (
    <ServicePageTemplate
      path="/services/accounting"
      service={{
        name: 'Accounting Services',
        description:
          'Day-to-day accounting support for the work that sits between bookkeeping and reporting, including reconciliations, close tasks, journal entries, account maintenance, and management reporting.',
        icon: '📊',
      }}
      overview="Accounting operations sit between clean books and usable reporting. Our team handles the recurring work in between: account reconciliations, journal entries, month-end close tasks, account maintenance, and management reports your team or CPA can review with confidence. Work is structured around your existing chart of accounts and close calendar, with clear documentation at each step so review stays fast and predictable."
      benefits={[
        'Account reconciliations across bank, credit card, and balance sheet accounts',
        'Journal entries and account maintenance',
        'Month-end and period-end close support',
        'Management reports for internal review or your CPA',
        'Documented workpapers for every close cycle',
        'Consistent, repeatable close process month over month',
      ]}
      process={[
        {
          step: 1,
          title: 'Review Current Process',
          description: 'We review your chart of accounts, close calendar, and existing accounting workflow before making any changes.',
        },
        {
          step: 2,
          title: 'Define the Close Checklist',
          description: 'We document a recurring close checklist that fits your systems, review points, and reporting deadlines.',
        },
        {
          step: 3,
          title: 'Recurring Reconciliations and Entries',
          description: 'We complete reconciliations, journal entries, and account maintenance on the agreed schedule.',
        },
        {
          step: 4,
          title: 'Close and Report',
          description: 'We complete the period close and prepare management reports for your review.',
        },
        {
          step: 5,
          title: 'Review and Handoff',
          description: 'We document open items and hand off a clean, reviewable close package each cycle.',
        },
      ]}
      deliverables={[
        'Reconciled balance sheet accounts',
        'Monthly or period-end close checklist',
        'Journal entry schedules and support',
        'Management reports (P&L, balance sheet, supporting schedules)',
        'Documented workpapers for each close',
      ]}
      relatedServices={[
        { name: 'Bookkeeping', slug: 'bookkeeping' },
        { name: 'Accounts Payable', slug: 'accounts-payable' },
        { name: 'Accounts Receivable', slug: 'accounts-receivable' },
        { name: 'Audit Support', slug: 'audit-support' },
      ]}
      faqs={[
        {
          question: 'How is Accounting Services different from Bookkeeping?',
          answer:
            'Bookkeeping covers day-to-day transaction recording and reconciliations. Accounting Services covers the layer above it: month-end close, journal entries, account maintenance, and management reporting that turns clean books into usable reports.',
        },
        {
          question: 'Do you work inside our existing accounting software?',
          answer:
            'Yes. We work inside your existing system, such as QuickBooks Online, Xero, Sage, or NetSuite, rather than a separate proprietary platform.',
        },
        {
          question: 'Who reviews and approves the close?',
          answer:
            'Your team or CPA retains review and approval responsibility. We handle the recurring preparation work and document open items clearly so review stays fast.',
        },
        {
          question: 'Can this scale with a growing close calendar?',
          answer:
            'Yes. The recurring checklist and workflow can expand as transaction volume, entities, or reporting requirements grow.',
        },
      ]}
    />
  );
}
