import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/resources/guides';

export const metadata: Metadata = genMeta({
  title: 'Accounting & Bookkeeping Guides',
  description:
    'In-depth guides on outsourced bookkeeping costs, QuickBooks vs. Xero, and how CPA firms use staff augmentation during tax season.',
  path: PATH,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Resources', url: `${baseUrl}/resources` },
  { name: 'Guides', url: `${baseUrl}${PATH}` },
]);

const guides = [
  {
    title: 'How to Choose an Accounting Outsourcing Partner',
    href: '/resources/guides/how-to-choose-accounting-outsourcing-partner',
    description: 'A decision framework covering scope, review structure, red flags and what a sound onboarding process should look like.',
    isNew: true,
  },
  {
    title: 'Client Accounting Services (CAS): A Guide for CPA Firms',
    href: '/resources/guides/client-accounting-services-cas-guide',
    description: 'What CAS actually includes, why production capacity is the usual bottleneck, and where outsourced back-office support fits without touching advisory work.',
    isNew: true,
  },
  {
    title: 'Outsourced Payroll Processing: What It Actually Covers (US, UK & Australia)',
    href: '/resources/guides/outsourced-payroll-processing-guide',
    description: 'Per-jurisdiction payroll compliance, QuickBooks/Xero/Gusto workflows, realistic cost ranges, and the real questions employers ask before handing payroll to an offshore team.',
    isNew: true,
  },
  {
    title: 'Outsourced Accounts Payable: How It Works in QuickBooks, Xero & NetSuite',
    href: '/resources/guides/outsourced-accounts-payable-guide',
    description: 'What the AP team handles vs. what stays with you, how approval workflows and fraud controls work, location-specific VAT/GST nuances, and realistic per-invoice costs.',
    isNew: true,
  },
  {
    title: 'Outsourced Accounts Receivable: DSO, Collections & Software Workflows (US, UK, AU)',
    href: '/resources/guides/outsourced-accounts-receivable-guide',
    description: 'How to measure the cash flow impact of outsourced AR, how collections follow-up works in QuickBooks and Xero, and the questions business owners ask before outsourcing receivables.',
    isNew: true,
  },
  {
    title: 'Outsourced Accounting Services: Month-End Close, GAAP vs IFRS, and QuickBooks to NetSuite',
    href: '/resources/guides/outsourced-accounting-services-guide',
    description: 'What accounting operations cover beyond bookkeeping, how month-end close works in QBO, Xero, Sage, and NetSuite, and how US GAAP, UK FRS 102, and Australian AASB differ.',
    isNew: true,
  },
  {
    title: '9 Questions to Ask Before Outsourcing Your Bookkeeping',
    href: '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping',
    description: 'The real questions to ask before hiring — answered honestly, including the ones without a flattering answer.',
    isNew: false,
  },
  {
    title: 'Outsourced Bookkeeping Cost Guide for U.S. Businesses',
    href: '/resources/guides/outsourced-bookkeeping-cost-guide',
    description: 'What actually drives the price up or down, and how it compares to hiring in-house.',
    isNew: false,
  },
  {
    title: 'QuickBooks Online vs. Xero: Which Should Your Business Use?',
    href: '/resources/guides/quickbooks-vs-xero-comparison',
    description: 'A practical comparison of pricing, ease of use, and reporting to help you decide.',
    isNew: false,
  },
  {
    title: 'How CPA Firms Use Staff Augmentation During Tax Season',
    href: '/resources/guides/staff-augmentation-tax-season-guide',
    description: 'Why seasonal hiring is risky, and how flexible capacity support works instead.',
    isNew: false,
  },
];

export default function GuidesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <Reveal className="max-w-3xl mx-auto text-center space-y-6">
          <>
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">Guides</span>
          <h1 className="text-2xl md:text-3xl font-bold text-primary text-balance">In-Depth Guides</h1>
          <p className="text-lg text-muted leading-relaxed">
            Longer-form guides on the accounting decisions that actually come up
            for growing businesses and CPA firms.
          </p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-8 md:py-10 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto space-y-6">
          {guides.map((guide, i) => (
            <Reveal key={guide.href} delay={Math.min(i * 0.08, 0.24)}>
              <Link
                href={guide.href}
                className="block p-8 bg-white rounded-xl border-2 border-border hover:border-primary transition-colors relative"
              >
                {guide.isNew && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wide">New</span>
                )}
                <h2 className="text-2xl font-bold text-primary mb-2 pr-14">{guide.title}</h2>
                <p className="text-muted leading-relaxed">{guide.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cross-links to the state-specific market pages -- these live
          under /markets/united-states/*, not duplicated here, just
          linked so they're discoverable from Resources too. */}
      <section className="w-full py-8 md:py-10 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center space-y-2 mb-8">
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">State-Specific Guides</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Accounting Rules by U.S. State</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Texas', href: '/markets/united-states/texas', note: 'Franchise tax, no state income tax' },
              { name: 'California', href: '/markets/united-states/california', note: 'CDTFA sales tax, FTB coordination' },
              { name: 'Florida', href: '/markets/united-states/florida', note: 'No personal income tax, corporate tax clarity' },
            ].map((state, i) => (
              <Reveal key={state.href} delay={Math.min(i * 0.08, 0.24)}>
                <Link
                  href={state.href}
                  className="block h-full p-6 bg-input rounded-lg border-2 border-border hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-primary mb-1">{state.name}</h3>
                  <p className="text-sm text-muted">{state.note}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
