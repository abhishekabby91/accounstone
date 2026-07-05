import { Metadata } from 'next';
import ServicePageTemplate from '@/components/service-page-template';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'CFO Support & Financial Advisory Services',
  description:
    'Expert CFO-level support including financial planning, strategy, forecasting, and executive reporting. Scale without a full-time CFO.',
  path: '/services/cfo-support',
});

export default function CFOSupportPage() {
  return (
    <ServicePageTemplate
      service={{
        name: 'CFO Support Services',
        description:
          'Expert CFO-level support including financial planning, strategy, forecasting, and executive reporting for growing businesses.',
        icon: '💼',
      }}
      overview="Growing businesses need financial leadership without the overhead of a full-time CFO. Our CFO support service provides strategic financial guidance, planning, and executive reporting. We analyze your financial position, develop strategies for growth, create forecasts and budgets, and provide insights to support decision-making. Our experienced financial advisors work as an extension of your leadership team."
      benefits={[
        'Strategic financial planning and analysis',
        'Monthly executive financial reporting',
        'Cash flow forecasting and management',
        'Budget development and variance analysis',
        'Financial KPI tracking and optimization',
        'Profitability analysis by product/line',
        'Capital planning and optimization',
        'Growth strategy financial support',
      ]}
      process={[
        {
          step: 1,
          title: 'Financial Assessment',
          description:
            'We review your current financial position, identify strengths/weaknesses, and understand business goals.',
        },
        {
          step: 2,
          title: 'Strategy Development',
          description:
            'We develop financial strategies aligned with business goals including growth, profitability, and cash flow targets.',
        },
        {
          step: 3,
          title: 'Planning & Budgeting',
          description:
            'We create detailed financial plans, budgets, and forecasts to guide decision-making.',
        },
        {
          step: 4,
          title: 'Monthly Reporting',
          description:
            'We provide executive-level financial reports with analysis, insights, and variance explanations.',
        },
        {
          step: 5,
          title: 'Advisory Support',
          description:
            'We provide ongoing strategic advice on investments, acquisitions, financing, and business decisions.',
        },
      ]}
      deliverables={[
        'Monthly executive financial statements',
        'Cash flow forecasts and scenarios',
        'Annual budgets and plans',
        'Profitability analysis by segment',
        'KPI dashboards and tracking',
        'Strategic financial recommendations',
        'Board-level financial presentations',
      ]}
      relatedServices={[
        { name: 'Accounting Services', slug: 'accounting' },
        { name: 'Financial Reporting', slug: 'accounting' },
        { name: 'Bookkeeping', slug: 'bookkeeping' },
        { name: 'Tax Preparation', slug: 'tax-preparation' },
      ]}
      faqs={[
        {
          question: 'How much CFO support do we need?',
          answer:
            'It depends on your complexity and needs. We offer flexible engagement from monthly reviews to full-time CFO services.',
        },
        {
          question: 'Can you help with financial planning?',
          answer:
            'Yes, we develop multi-year financial plans, growth strategies, and scenario analysis to support decision-making.',
        },
        {
          question: 'Do you provide board reporting?',
          answer:
            'Yes, we prepare executive and board-level financial reports with analysis and recommendations.',
        },
        {
          question: 'Can you help with mergers and acquisitions?',
          answer:
            'Yes, we provide financial due diligence, valuation support, and integration planning.',
        },
        {
          question: 'Do you offer financing advice?',
          answer:
            'Yes, we analyze financing options, help with capital planning, and support fundraising efforts.',
        },
        {
          question: 'How often will we meet?',
          answer:
            'We typically meet monthly to review financials and provide strategic advice, with additional calls as needed.',
        },
      ]}
    />
  );
}
