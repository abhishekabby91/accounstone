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
    title: '9 Questions to Ask Before Outsourcing Your Bookkeeping',
    href: '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping',
    description: 'The real questions to ask before hiring — answered honestly, including the ones without a flattering answer.',
  },
  {
    title: 'Outsourced Bookkeeping Cost Guide for U.S. Businesses',
    href: '/resources/guides/outsourced-bookkeeping-cost-guide',
    description: 'What actually drives the price up or down, and how it compares to hiring in-house.',
  },
  {
    title: 'QuickBooks Online vs. Xero: Which Should Your Business Use?',
    href: '/resources/guides/quickbooks-vs-xero-comparison',
    description: 'A practical comparison of pricing, ease of use, and reporting to help you decide.',
  },
  {
    title: 'How CPA Firms Use Staff Augmentation During Tax Season',
    href: '/resources/guides/staff-augmentation-tax-season-guide',
    description: 'Why seasonal hiring is risky, and how flexible capacity support works instead.',
  },
];

export default function GuidesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-3xl mx-auto text-center space-y-6">
          <>
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">Guides</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-balance">In-Depth Guides</h1>
          <p className="text-lg text-muted leading-relaxed">
            Longer-form guides on the accounting decisions that actually come up
            for growing businesses and CPA firms.
          </p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-16 md:py-20 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto space-y-6">
          {guides.map((guide, i) => (
            <Reveal key={guide.href} delay={Math.min(i * 0.08, 0.24)}>
              <Link
                href={guide.href}
                className="block p-8 bg-white rounded-xl border-2 border-border hover:border-primary transition-colors"
              >
                <h2 className="text-2xl font-bold text-primary mb-2">{guide.title}</h2>
                <p className="text-muted leading-relaxed">{guide.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cross-links to the state-specific market pages -- these live
          under /markets/united-states/*, not duplicated here, just
          linked so they're discoverable from Resources too. */}
      <section className="w-full py-16 md:py-20 px-6 md:px-8 bg-white">
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
