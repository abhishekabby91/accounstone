import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import {
  generateMetadata,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/real-estate/yardi-accounting-outsourcing-texas';

export const metadata: Metadata = generateMetadata({
  title: 'Yardi Accounting Outsourcing for Texas Property Management Companies',
  description:
    'Outsourced accounting support for Texas property management companies using Yardi Voyager and Yardi Breeze — trust accounting, owner statements, CAM reconciliations, and multi-property bookkeeping.',
  path: PATH,
});

const overview =
  "Property management accounting has specific demands that general bookkeeping doesn't cover well: trust accounting compliance, owner statement accuracy across dozens or hundreds of units, CAM (Common Area Maintenance) reconciliations, and month-end close across multiple properties simultaneously. Our team brings hands-on working experience with the Yardi platform — including Yardi Voyager and Yardi Breeze — to support Texas-based property management companies with accurate, compliant, and scalable accounting operations.";

const benefits = [
  'Working experience with Yardi Voyager and Yardi Breeze platforms',
  'Trust accounting support aligned with property management compliance requirements',
  'Owner statement preparation and reconciliation across multi-property portfolios',
  'CAM (Common Area Maintenance) reconciliation support',
  'Multi-entity, multi-property general ledger management',
  'Awareness of Texas-specific business tax considerations, including franchise tax reporting (Texas has no state income tax, but the franchise tax return process has its own requirements)',
  'Bank reconciliation across multiple property accounts',
  'Scalable support during peak leasing season workload spikes',
];

// ...process, deliverables, faqs, schema generation, and full JSX as written above