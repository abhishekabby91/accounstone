import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/resources';

export const metadata: Metadata = genMeta({
  title: 'Accounting Resources for CPA Firms & Growing Businesses',
  description:
    'Practical accounting, bookkeeping, tax preparation and workflow guides for CPA firms, accounting teams and growing businesses.',
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
      'In-depth answers to practical accounting questions, including bookkeeping costs, software decisions and CPA firm capacity planning.',
  },
  {
    title: 'Insights',
    href: '/resources/insights',
    description:
      'Focused explainers on accounting, tax and operational topics that come up in real bookkeeping and accounting workflows.',
  },
  {
    title: 'Case Studies',
    href: '/resources/case-studies',
    description:
      'Examples of accounting workflow and capacity challenges, with a focus on what changed and how the work was approached.',
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <Reveal className="max-w-3xl mx-auto text-center space-y-6">
          <>
            <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">Resources</span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
              Useful Answers to Practical Accounting Questions
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Guides and insights for people responsible for keeping the books current,
              getting work ready for review and keeping accounting workflows moving.
              Start with the question you are trying to solve, then go deeper where it helps.
            </p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-8 md:py-10 px-6 md:px-8 bg-input">
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
