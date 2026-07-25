import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/cpa-firms';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Support for CPA Firms',
  description:
    'Overflow bookkeeping, tax season capacity, and white-label accounting support for CPA firms that need reliable help without adding full-time headcount.',
  path: PATH,
});

const faqs = [
  {
    question: 'Can you work under our firm name (white-label)?',
    answer:
      "Yes. Many CPA firm clients keep our involvement invisible to their own clients — we work as an extension of your team, following your review process and formatting standards.",
  },
  {
    question: 'How do you handle busy season (Jan-April) capacity?',
    answer:
      'We plan capacity ahead of tax season with firms so overflow bookkeeping, data entry, and prep work is absorbed without your senior staff getting buried in low-leverage tasks during your busiest months.',
  },
  {
    question: 'What tax and accounting software do you support?',
    answer:
      'We work with QuickBooks, Xero, Drake Tax, and CCH Axcess, among others — matching whatever your firm and your clients already use rather than asking you to switch platforms.',
  },
  {
    question: 'Do you work on PBC (prepared-by-client) documentation?',
    answer:
      'Yes, we can organize and reconcile client-provided documentation (PBC lists) ahead of your review, reducing the back-and-forth your team spends chasing missing information.',
  },
  {
    question: 'Is our client data kept confidential from other firms you work with?',
    answer:
      'Yes, engagements are NDA-backed and each client relationship is handled separately — we do not share data, workpapers, or client information across engagements.',
  },
];

export default function CPAFirmsPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'CPA Firms',
        description:
          'Overflow capacity and white-label support for accounting firms managing client deliverables, tax season crunch, and growth without the overhead of full-time hires.',
        icon: '📊',
      }}
      overview="CPA firms have a specific problem general bookkeeping support doesn't solve: workload that spikes hard during tax season and slows the rest of the year, plus client work that needs to be reviewed and delivered under your firm's own standards, not a generic template. We support CPA firms as overflow capacity — handling bookkeeping, data entry, and PBC organization under your review process, so your senior staff can focus on the advisory and review work that actually needs their license and judgment."
      benefits={[
        'Overflow bookkeeping and data entry during tax season capacity crunches',
        'White-label engagement — work delivered under your firm\'s standards and format',
        'PBC (prepared-by-client) document organization and reconciliation before review',
        'Support across QuickBooks, Xero, Drake Tax, and CCH Axcess',
        'Scalable capacity that flexes up in Q1-Q2 and down in slower months',
        'NDA-backed, confidential handling of each client engagement separately',
      ]}
      relatedLinks={[
        { name: 'Bookkeeping', href: '/services/bookkeeping' },
        { name: 'Staff Augmentation', href: '/solutions/staff-augmentation' },
        { name: 'Audit Support', href: '/services/audit-support' },
      ]}
      faqs={faqs}
    />
  );
}
