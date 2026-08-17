import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/resources/insights';

export const metadata: Metadata = genMeta({
  title: 'Accounting & Tax Insights',
  description:
    'Quick explainers on specific accounting and tax topics — sales tax nexus for e-commerce, ASC 606 revenue recognition for SaaS, and more.',
  path: PATH,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Resources', url: `${baseUrl}/resources` },
  { name: 'Insights', url: `${baseUrl}${PATH}` },
]);

const insights = [
  {
    title: 'Sales Tax Nexus: What E-Commerce Sellers Need to Track',
    href: '/resources/insights/sales-tax-nexus-ecommerce-guide',
    description: 'Why growing into new states can quietly create new sales tax obligations.',
  },
  {
    title: 'ASC 606 Revenue Recognition for SaaS: A Quick Explainer',
    href: '/resources/insights/asc-606-revenue-recognition-saas',
    description: "Why subscription businesses can't just book cash received as revenue.",
  },
];

export default function InsightsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <Reveal className="max-w-3xl mx-auto text-center space-y-6">
          <>
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">Insights</span>
          <h1 className="text-2xl md:text-3xl font-bold text-primary text-balance">Quick Explainers</h1>
          <p className="text-lg text-muted leading-relaxed">
            Shorter reads on specific accounting and tax topics that come up for
            growing businesses.
          </p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-8 md:py-10 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto space-y-6">
          {insights.map((insight, i) => (
            <Reveal key={insight.href} delay={Math.min(i * 0.08, 0.24)}>
              <Link
                href={insight.href}
                className="block p-8 bg-white rounded-xl border-2 border-border hover:border-primary transition-colors"
              >
                <h2 className="text-2xl font-bold text-primary mb-2">{insight.title}</h2>
                <p className="text-muted leading-relaxed">{insight.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
