import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/cpa-firms';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Accounting Support for CPA Firms',
  description: 'Practical bookkeeping, tax preparation, audit support and staff augmentation for CPA firms managing overflow work, review queues and busy-season capacity.',
  path: PATH,
});

const faqs = [
  { question: 'Can you work under our firm name (white-label)?', answer: "Yes. Where a white-label arrangement is appropriate, we work as an extension of your team and follow your review process, formatting standards and communication preferences." },
  { question: 'How do you handle busy-season capacity?', answer: 'We can take on defined preparation and bookkeeping work during periods when your internal team is carrying more volume. The scope and handoff points are agreed before work begins so your reviewers retain control.' },
  { question: 'What tax and accounting software do you support?', answer: 'We work with platforms including QuickBooks Online, Xero, Drake Tax and CCH Axcess, along with client-specific systems and documented workflows.' },
  { question: 'Do you work on PBC documentation?', answer: 'Yes. We can organize client-provided documentation, reconcile supporting schedules and flag missing information before the work reaches your review queue.' },
  { question: 'Is client data kept separate between engagements?', answer: 'Engagements are NDA-backed and access is limited to the people working on the relevant account. Client information and work should remain separated by engagement.' },
  { question: 'Will I spend more time reviewing offshore work than doing it myself?', answer: "Some review is expected at the start of any new engagement because the team has to learn your standards. The goal is for that review to become more efficient as documentation, examples and feedback establish a repeatable workflow." },
  { question: "How do you learn our firm's processes?", answer: "Through structured discovery and knowledge transfer. We learn your chart-of-accounts conventions, file formats, review preferences, deadlines and handoff points instead of assuming a generic accounting workflow will fit your firm." },
  { question: 'How is client data protected?', answer: 'Engagements are NDA-backed, with system access limited to the team members working on the account. We use controlled access and documented handling practices. Any formal certification claim should be verified separately.' },
  { question: 'Who owns the client systems and workpapers?', answer: 'Your firm and client retain control of their own systems and records. Our role is to perform the agreed work inside the workflow and systems you authorize.' },
  { question: 'Can your team work in our existing software?', answer: 'Yes. The aim is to fit the support into the systems your firm and clients already use rather than forcing a platform change simply to accommodate the delivery team.' },
  { question: 'How long before a new team becomes productive?', answer: 'The timeline depends on workflow complexity, documentation, system access and the number of files involved. We prefer to establish a realistic ramp-up plan during onboarding rather than promise a fixed number of days.' },
  { question: 'Will clients notice a difference?', answer: 'The work should follow your firm’s approved formatting, review and communication standards. Your team remains responsible for client-facing review and delivery where that is part of your process.' },
  { question: 'How do you maintain quality after onboarding?', answer: 'Quality is maintained through documented procedures, defined ownership, review checkpoints and ongoing feedback rather than relying on a one-time quality check.' },
];

export default function CPAFirmsPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'CPA Firms',
        description: 'Practical support for accounting firms managing client deliverables, review queues, busy-season workload and growth without immediately adding permanent headcount.',
        icon: '📊',
      }}
      overview="Many CPA firms run into the same operational tension: the senior team needs to review and advise, but transaction-level bookkeeping, cleanup, PBC organization and recurring client work still have to get done. Accounstone can take ownership of defined parts of that workflow while your firm keeps review control. The useful question is not simply whether work can be outsourced; it is which tasks can be delegated without making your reviewers spend more time correcting the work afterward."
      benefits={[
        'Overflow bookkeeping and preparation support when internal capacity is tight',
        'Work organized around your firm’s review standards and formatting',
        'PBC document organization and reconciliation before review',
        'Support across QuickBooks, Xero, Drake Tax and CCH Axcess workflows',
        'Flexible capacity for seasonal demand, recurring work or defined projects',
        'NDA-backed handling with defined ownership and communication points',
      ]}
      relatedLinks={[
        { name: 'U.S. Bookkeeping', href: '/services/bookkeeping/united-states' },
        { name: 'U.S. Tax Preparation', href: '/services/tax-preparation/united-states' },
        { name: 'U.S. Audit Support', href: '/services/audit-support/united-states' },
        { name: 'Staff Augmentation', href: '/solutions/staff-augmentation' },
      ]}
      faqs={faqs}
    />
  );
}
