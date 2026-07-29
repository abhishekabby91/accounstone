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
  {
    question: 'Will I spend more time reviewing offshore work than doing it myself?',
    answer:
      'This is a fair concern, and the honest answer is: at first, review takes real time — there\'s no shortcut around learning how a new team works. That review time should decrease steadily as we learn your standards and file formats. If it isn\'t decreasing after the first few weeks, that\'s a real signal something\'s wrong, and we\'d want to know.',
  },
  {
    question: "How do I know your team understands our firm's processes?",
    answer:
      'You don\'t, until we\'ve actually worked together for a bit — no vendor can prove this upfront convincingly. What we do instead: a structured onboarding period where we learn your specific workflow, chart of accounts conventions, and review preferences before taking on full volume, rather than assuming our general experience automatically transfers to your firm\'s specific way of doing things.',
  },
  {
    question: 'How is our financial data protected?',
    answer:
      'Every engagement is NDA-backed, with system access limited to the team members actually working on your account. We are actively working toward formal certification (SOC 2) — we\'ll tell you exactly where we are in that process if you ask, rather than pointing to certifications we don\'t yet hold.',
  },
  {
    question: 'Who owns the implementation?',
    answer:
      'You do. Your data lives in your own QuickBooks, Xero, Drake Tax, or CCH Axcess account — never in a separate system we control. If you ever end the engagement, you keep everything exactly as it stands, with no migration required on your end.',
  },
  {
    question: 'Can your team work in our existing software?',
    answer:
      'Yes — we work inside whatever you already use rather than requiring you to adopt a new platform. If your firm and your clients are on different systems, we adapt to each rather than standardizing everyone onto one tool for our convenience.',
  },
  {
    question: 'How long before the team becomes productive?',
    answer:
      'Typically 2-4 weeks to full productivity, depending on the complexity of your workflow and how many client files are involved. We\'d rather give you a realistic range now than an optimistic number we can\'t back up during your actual busy season.',
  },
  {
    question: 'Will my clients notice any difference?',
    answer:
      'That\'s the goal, and it\'s also the honest test of whether white-label support is working. Deliverables go out under your firm\'s name and formatting, following your review process — if your clients notice a difference, that\'s something to flag to us immediately, not something we\'d consider an acceptable "growing pain."',
  },
  {
    question: 'How do you maintain quality after go-live?',
    answer:
      'Through the same review process we establish during onboarding, not a one-time quality check that fades over time. We\'d also rather hear early that something slipped than have you discover it three months later — ongoing, direct feedback is part of how the engagement should work, not an afterthought.',
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
