import { Metadata } from 'next';
import ServicePageTemplate from '@/components/service-page-template';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Payroll Processing Services',
  description:
    'Complete payroll management including processing, tax withholding, statutory reporting, and compliance. Simplify your payroll operations.',
  path: '/services/payroll',
});

export default function PayrollPage() {
  return (
    <ServicePageTemplate
    path="/services/payroll-processing"
      service={{
        name: 'Payroll Processing Services',
        description:
          'Complete payroll management including processing, tax withholding, statutory reporting, and payroll records aligned with federal and state requirements.',
        icon: '💰',
      }}
      overview="Payroll management is complex and requires strict compliance with constantly changing regulations. Our payroll experts handle complete payroll operations for businesses of all sizes, from startups to enterprises. We process payroll bi-weekly, semi-monthly, or monthly according to your schedule, manage all tax withholdings, handle statutory filings, and provide comprehensive reporting. Let us manage the complexity while you focus on growing your business."
      benefits={[
        'Accurate and timely payroll processing',
        'Federal and state tax withholding management',
        'Quarterly and annual tax filing and reporting',
        'Employee paycheck reconciliation',
        'Direct deposit processing',
        'Year-end W-2 and 1099 processing',
        'Compliance with changing tax regulations',
        'Employee benefit coordination',
      ]}
      process={[
        {
          step: 1,
          title: 'Setup & Configuration',
          description:
            'We gather employee information, tax details, and payroll schedule preferences to configure your payroll system.',
        },
        {
          step: 2,
          title: 'Integration Setup',
          description:
            'We integrate with your accounting software and set up secure data connections for payroll processing.',
        },
        {
          step: 3,
          title: 'Regular Processing',
          description:
            'According to your schedule, we process payroll, calculate deductions, withhold taxes, and generate paychecks.',
        },
        {
          step: 4,
          title: 'Tax Compliance',
          description:
            'We handle quarterly tax filings, tax payments, and ensure compliance with federal, state, and local requirements.',
        },
        {
          step: 5,
          title: 'Reporting & Support',
          description:
            'We provide monthly payroll reports, year-end tax documents, and ongoing support for payroll questions.',
        },
      ]}
      deliverables={[
        'Monthly payroll summary reports',
        'Employee payroll registers',
        'Tax liability reports',
        'Quarterly tax filing documents (941)',
        'Annual W-2 and 1099 processing',
        'Payroll reconciliation to general ledger',
        'Custom payroll reports as needed',
      ]}
      relatedServices={[
        { name: 'Bookkeeping', slug: 'bookkeeping' },
        { name: 'Accounting Services', slug: 'accounting' },
        { name: 'Tax Preparation', slug: 'tax-preparation' },
      ]}
      faqs={[
        {
          question: 'How often can we process payroll?',
          answer:
            'We accommodate weekly, bi-weekly, semi-monthly, or monthly payroll processing. The frequency can be adjusted based on your business needs.',
        },
        {
          question: 'Do you handle employee benefits and deductions?',
          answer:
            'Yes, we manage employee benefits, insurance deductions, retirement plan contributions, and other payroll deductions.',
        },
        {
          question: 'What about multi-state payroll?',
          answer:
            'We handle complex multi-state payroll with proper tax withholding for each state and required filings.',
        },
        {
          question: 'Are payroll records secure?',
          answer:
            'We handle payroll data under NDA-backed engagements with access limited to the team members working on your account. We are actively working toward SOC 2 certification and will tell you exactly where we stand if you ask.',
        },
        {
          question: 'How much does payroll processing cost?',
          answer:
            'Payroll costs typically range from $500-$2,000+ monthly depending on employee count and complexity. We provide custom quotes.',
        },
        {
          question: 'Can you transition from our current payroll provider?',
          answer:
            'Yes, we can manage a smooth transition from your current payroll provider and ensure no missed deadlines.',
        },
      ]}
    />
  );
}
