import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/resources/case-studies';

export const metadata: Metadata = genMeta({
  title: 'Case Studies: Outsourced Accounting Scenarios',
  description:
    'Illustrative scenarios showing how CPA firms and growing businesses use outsourced bookkeeping, staff augmentation, and back-office support to solve real capacity challenges.',
  path: PATH,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Resources', url: `${baseUrl}/resources` },
  { name: 'Case Studies', url: `${baseUrl}${PATH}` },
]);

// NOTE: We're a new company and don't have named client case studies to
// publish yet. These are illustrative scenarios based on the kinds of
// problems our services are built to solve -- clearly labeled as such,
// not presented as real client engagements. Replace with real, named
// case studies (with permission) as they become available.
const scenarios = [
  {
    title: 'A Regional CPA Firm Facing a Tax Season Capacity Wall',
    situation:
      'A mid-size CPA firm found itself turning away new clients every January because existing staff were already at capacity handling returning clients\' returns.',
    approach:
      'Staff augmentation support absorbed PBC document organization and data entry work beginning in December, before the volume spike, so the firm\'s licensed staff could take on more client-facing review work during peak season.',
    outcome:
      'The firm was able to accept new clients for the upcoming season without adding permanent headcount it would have to justify keeping on after April.',
    link: { href: '/industries/cpa-firms', label: 'CPA Firm Support' },
  },
  {
    title: 'A Growing E-Commerce Brand With Multi-Channel Reconciliation Chaos',
    situation:
      'A business selling across its own Shopify store and two marketplaces had bookkeeping that only reflected total bank deposits — with no visibility into which channel was actually profitable after fees and returns.',
    approach:
      'Multi-channel reconciliation broke out revenue, fees, and refunds by channel, and inventory-based COGS tracking was set up to reflect true product margins.',
    outcome:
      'The business owner could finally see which channel was worth investing further marketing spend into, instead of guessing from a blended total.',
    link: { href: '/industries/ecommerce', label: 'E-Commerce Accounting' },
  },
  {
    title: 'A SaaS Startup Preparing for Its Series A',
    situation:
      'An early-stage SaaS company had been recording annual subscription payments as revenue in the month collected, overstating some months and understating others ahead of a fundraise.',
    approach:
      'Revenue was restructured under ASC 606 principles with proper deferred revenue tracking, and MRR/ARR reporting was built out for investor updates.',
    outcome:
      'The founders walked into due diligence with financials that matched how investors actually expect SaaS revenue to be presented.',
    link: { href: '/industries/technology', label: 'SaaS & Technology Accounting' },
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-3xl mx-auto text-center space-y-6">
          <>
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-balance">Illustrative Scenarios</h1>
          <p className="text-lg text-muted leading-relaxed">
            We're a growing company and don't have named client case studies to
            share publicly yet. The scenarios below illustrate the kinds of
            problems our services are built to solve, based on common
            challenges businesses like yours actually face.
          </p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-16 md:py-20 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto space-y-8">
          {scenarios.map((scenario, i) => (
            <Reveal key={scenario.title} delay={Math.min(i * 0.08, 0.24)}>
              <div className="p-8 bg-white rounded-xl border-2 border-border space-y-4">
                <h2 className="text-2xl font-bold text-primary">{scenario.title}</h2>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-1">Situation</p>
                  <p className="text-muted leading-relaxed">{scenario.situation}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-1">Approach</p>
                  <p className="text-muted leading-relaxed">{scenario.approach}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-1">Outcome</p>
                  <p className="text-muted leading-relaxed">{scenario.outcome}</p>
                </div>
                <Link href={scenario.link.href} className="inline-block text-primary font-medium hover:underline pt-2">
                  Learn more about {scenario.link.label} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner
        title="Facing a Similar Challenge?"
        description="Let's talk about your specific situation and what support would actually help."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
