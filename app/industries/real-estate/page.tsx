import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/real-estate';

export const metadata: Metadata = genMeta({
  title: 'Accounting for Real Estate & Property Management Companies',
  description:
    'Outsourced accounting for real estate and property management companies — trust accounting, owner statements, CAM reconciliations, and multi-property portfolio reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'Do you handle trust accounting for owner and tenant funds?',
    answer:
      'Yes, we structure bookkeeping to keep trust funds (owner and tenant funds) clearly separated from operating funds, supporting the trust accounting compliance property management requires.',
  },
  {
    question: 'Can you prepare owner statements across a multi-property portfolio?',
    answer:
      'Yes, we prepare owner statements per property alongside consolidated portfolio-level reporting, so both individual owners and portfolio managers get the detail they need.',
  },
  {
    question: 'What property management platforms do you support?',
    answer:
      'Our team has hands-on experience with Yardi (Voyager and Breeze), and we also work with QuickBooks and other property accounting software depending on your setup.',
  },
  {
    question: 'Do you handle CAM (Common Area Maintenance) reconciliations?',
    answer:
      'Yes, CAM reconciliation across a commercial property portfolio is part of our standard property management accounting support.',
  },
  {
    question: 'Do you support both residential and commercial property portfolios?',
    answer:
      'Yes, we support both, adapting the reporting structure to residential unit-level detail or commercial lease and CAM structures as needed.',
  },
];

export default function RealEstateIndustryPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'Real Estate',
        description:
          'Trust accounting, owner statements, and multi-property portfolio reporting for real estate and property management companies.',
        icon: '🏠',
      }}
      overview="Real estate and property management accounting carries compliance weight that general bookkeeping doesn't: trust accounting rules require owner and tenant funds to be kept clearly separate from operating funds, and portfolios spanning multiple properties need both property-level detail and consolidated reporting at the same time. We structure bookkeeping around these requirements from the start, whether you manage a handful of properties or a large multi-entity portfolio."
      benefits={[
        'Trust accounting support keeping owner and tenant funds properly separated',
        'Owner statement preparation, per-property and portfolio-consolidated',
        'CAM (Common Area Maintenance) reconciliation for commercial portfolios',
        'Support for Yardi (Voyager and Breeze), QuickBooks, and other property platforms',
        'Multi-entity, multi-property general ledger management',
        'Support for both residential and commercial property structures',
      ]}
      relatedLinks={[
        { name: 'Yardi Accounting for Texas Property Managers', href: '/industries/real-estate/yardi-accounting-outsourcing-texas' },
        { name: 'Bookkeeping', href: '/services/bookkeeping' },
        { name: 'Back Office Support', href: '/solutions/back-office-support' },
      ]}
      faqs={faqs}
    />
  );
}
