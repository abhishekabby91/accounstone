import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/resources';

export const metadata: Metadata = genMeta({
  title: 'Resources for CPA Firms & Growing Businesses',
  description:
    'Guides, insights, and case studies on outsourced bookkeeping, tax season staffing, SaaS accounting, and more for U.S. CPA firms and businesses.',
  path: PATH,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Resources', url: `${baseUrl}${PATH}` },
]);

const sections = [
  {
    title: 'Guides',
    href: '/resources/guides',
    description:
      'In-depth guides on outsourced accounting costs, platform comparisons, and how CPA firms scale capacity during tax season.',
  },
  {
    title: 'Insights',
    href: '/resources/insights',
    description:
      'Shorter explainers on specific accounting and tax topics — sales tax nexus, revenue recognition, and more.',
  },
  {
    title: 'Case Studies',
    href: '/resources/case-studies',
    description:
      'Illustrative examples of how businesses use our outsourced accounting support to solve real capacity and reporting challenges.',
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-3xl mx-auto text-center space-y-6">
          <>
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-balance">
            Guides, Insights & Case Studies
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Practical resources on outsourced accounting, bookkeeping platforms,
            tax season capacity, and industry-specific financial topics —
            written for CPA firms and growing businesses.
          </p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-16 md:py-20 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <Reveal key={section.href} delay={Math.min(i * 0.08, 0.24)}>
              <Link
                href={section.href}
                className="block h-full p-8 bg-white rounded-xl border-2 border-border hover:border-primary transition-colors"
              >
                <h2 className="text-2xl font-bold text-primary mb-3">{section.title}</h2>
                <p className="text-muted leading-relaxed">{section.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
