import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/resources/case-studies';

export const metadata: Metadata = genMeta({
  title: 'Case Studies: Outsourced Accounting Scenarios',
  description:
    'Illustrative scenarios showing how firms and businesses use outsourced bookkeeping, staff augmentation and back-office support to add capacity.',
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

      <section className="relative w-full overflow-hidden bg-white px-6 md:px-8 py-12 md:py-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-full max-w-[32rem] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted">
              <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/resources" className="inline-block py-1.5 hover:text-primary transition-colors">Resources</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-primary">Case Studies</li>
            </ol>
          </nav>
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Case Studies"
            title="Illustrative Scenarios"
            lead="Three situations that show how capacity and workflow problems are usually structured, and where outside support fits."
          />

          {/* The disclaimer is a visible notice rather than a line buried in the
              intro - claiming named client work we do not have would be the
              single most damaging thing this page could do. */}
          <Reveal delay={0.1}>
            <div className="mt-8 mx-auto max-w-2xl rounded-xl border border-secondary/50 bg-input p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-1.5">Please read this first</p>
              <p className="text-sm sm:text-base leading-relaxed text-foreground">
                Accounstone is a growing company and does not have named client case studies to publish yet.
                The scenarios below are <strong>illustrative</strong> - they describe the kinds of problems these
                services are built for. They are not real client engagements and no outcomes below are measured results.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-input px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-4xl space-y-5 md:space-y-6">
          {scenarios.map((scenario, i) => (
            <Reveal key={scenario.title} delay={Math.min(i * 0.08, 0.24)}>
              <article className="relative overflow-hidden rounded-xl border border-border bg-white p-6 sm:p-8">
                <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-secondary" />

                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8 font-serif text-lg font-bold text-primary tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-balance leading-snug">
                    {scenario.title}
                  </h2>
                </div>

                <dl className="mt-5 space-y-4 sm:pl-14">
                  {([
                    ['Situation', scenario.situation],
                    ['Approach', scenario.approach],
                    ['Outcome', scenario.outcome],
                  ] as const).map(([label, text]) => (
                    <div key={label} className="border-l-2 border-border pl-4">
                      <dt className="text-xs font-bold uppercase tracking-wider text-accent mb-1">{label}</dt>
                      <dd className="text-sm sm:text-base leading-relaxed text-muted">{text}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 sm:pl-14">
                  <Link
                    href={scenario.link.href}
                    className="group inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    More on {scenario.link.label}
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <InquirySection
        source="/resources/case-studies"
        title="Recognise One of These?"
        lead="These are patterns, not client names. If one of them reads like your month, tell us how the work runs today and we will scope the version of it that fits."
      />

      <CTABanner
        title="Facing a Similar Situation?"
        description="Tell us how the work is handled today and where the pressure actually sits, and we can talk through what would help."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
