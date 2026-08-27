import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { serviceRegions } from '@/lib/data';

const PATH = '/markets/united-states';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting in the United States: A Practical Overview',
  description:
    'How U.S. accounting actually works in practice — federal and state obligations, U.S. GAAP, entity structures, payroll, and sales tax nexus — and where outsourced support fits.',
  path: PATH,
});

const faqs = [
  {
    question: 'What makes U.S. accounting different from the UK or Australia?',
    answer:
      'Mainly the state layer. The UK and Australia each run a single national indirect tax (VAT and GST respectively) administered by one authority. The U.S. has no national sales tax — instead, thousands of state and local jurisdictions set their own rates and rules, and a business can owe obligations in a state it has never physically visited. That one difference shapes how records need to be kept.',
  },
  {
    question: 'Do you determine our sales tax nexus?',
    answer:
      'No. We prepare records that make nexus visible — revenue and transaction activity tracked by state, so the picture is available rather than buried. The determination of where a business has established nexus, and what to do about it, is a decision for your CPA or tax advisor.',
  },
  {
    question: 'Do you represent us before the IRS?',
    answer:
      'No. IRS representation requires a licensed CPA, enrolled agent or attorney under Circular 230. We prepare returns and the underlying records; representation and filing stay with your licensed professional.',
  },
  {
    question: 'Do you work with U.S. GAAP or IFRS?',
    answer:
      'U.S. GAAP for domestic entities, which is what almost all U.S. businesses report under. Where a U.S. subsidiary reports into an IFRS parent, we work to the treatment the group has set. We follow the framework rather than deciding it.',
  },
  {
    question: 'Can you support a business operating in several states?',
    answer:
      'Yes. Multi-state activity is one of the more common reasons U.S. businesses look for additional accounting capacity, because the record-keeping burden grows faster than the revenue does. We prepare state-level records and the supporting detail for allocation and reporting.',
  },
  {
    question: 'Do you work with CPA firms as well as businesses?',
    answer:
      'Yes, and CPA firms are a large part of the work. A firm may have strong reviewers but still need capacity for transaction-level bookkeeping, cleanup, or workpaper preparation when deadlines stack up in the first quarter.',
  },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United States', url: `${baseUrl}${PATH}` },
]);

const topics = [
  {
    h: 'Federal and state run on separate tracks',
    p: 'A U.S. business answers to the IRS federally and, separately, to the revenue department of every state it has obligations in. These are not variations of one filing — they are distinct returns, on distinct calendars, with distinct rules on what is taxable. Records that only satisfy the federal picture usually have to be rebuilt to answer a state question.',
  },
  {
    h: 'Entity structure decides almost everything downstream',
    p: 'Whether a business is a sole proprietorship, partnership, S-corporation, C-corporation or LLC determines which return it files, how income reaches its owners, and what the books need to support. An S-corp needs shareholder basis tracked and reasonable compensation visible; a partnership needs capital accounts maintained for K-1 preparation. The structure is set by your CPA or attorney; the bookkeeping has to reflect it.',
  },
  {
    h: 'U.S. GAAP as the reporting convention',
    p: 'Most U.S. businesses report under U.S. GAAP, set by the FASB. For growing companies the areas that most often need attention are revenue recognition under ASC 606, lease treatment, and the accrual adjustments that turn a cash-basis ledger into something a lender or investor will accept.',
  },
  {
    h: 'Sales tax is a nexus problem before it is a filing problem',
    p: 'There is no federal sales tax. Following the 2018 South Dakota v. Wayfair decision, states may impose collection obligations based on economic activity alone — a threshold of sales or transactions into the state, with no physical presence required. For an e-commerce or SaaS business this can mean obligations in dozens of states, which is only manageable if activity is tracked by state as it happens.',
  },
  {
    h: 'Payroll carries federal, state and sometimes local layers',
    p: 'Federal income tax withholding, Social Security and Medicare, and federal unemployment sit alongside state income tax withholding, state unemployment insurance at a rate that varies by employer, and in some jurisdictions a local tax as well. Remote employees multiply this: an employee working from another state generally creates a registration obligation there.',
  },
  {
    h: 'Year-end is a documentation exercise',
    p: 'W-2s for employees and 1099-NEC forms for contractors both depend on vendor and employee data that has to be correct well before January. Missing tax identification numbers and stale addresses are the ordinary cause of year-end delay, and they are entirely preventable during the year.',
  },
];

export default function USMarketPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="United States"
        title="Accounting in the United States"
        description="How U.S. accounting works in practice — the federal and state split, entity structures, GAAP, payroll and sales tax — and where outside capacity actually helps."
        cta={{ text: 'Discuss Your U.S. Requirements', href: '/contact' }}
        ctaSecondary={{ text: 'View U.S. Services', href: '/services#united-states' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/markets" className="hover:text-primary transition-colors">Markets</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-5"><>
          <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Environment U.S. Businesses Operate In</h2>
          <p className="text-lg text-muted leading-relaxed">
            U.S. accounting is not harder than accounting elsewhere, but it is more fragmented. A business does not deal with one tax authority; it deals with the IRS and with every state where it has established an obligation. There is no single national sales tax to reconcile — there are thousands of overlapping state and local jurisdictions. Payroll rules stack federal requirements on top of state ones that differ meaningfully from each other.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            The practical consequence is that U.S. record-keeping has to carry more dimensions than a single-jurisdiction ledger. This page describes that environment. It is background, not a service page — the commercial detail sits on the individual U.S. service pages linked further down.
          </p>
        </></Reveal>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="max-w-3xl space-y-3 mb-8"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">The landscape</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">Six Things That Shape U.S. Accounting Work</h2>
          </></Reveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {topics.map((t, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <div className="h-full p-5 sm:p-6 bg-white rounded-xl border border-border/70">
                  <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{t.h}</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{t.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-5"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Where outsourcing fits</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">What Can Move, and What Cannot</h2>
            <p className="text-lg text-muted leading-relaxed">
              Most of the U.S. accounting burden is recurring preparation work: posting and reconciling transactions, maintaining vendor and employee data, tracking activity by state, assembling workpapers, and producing a close package. That work is documentable, reviewable, and can be handled by an outside team working inside your existing system.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              What cannot move is anything requiring a licence or a judgement call. Filing a return, representing a business before the IRS, determining nexus, choosing an entity structure, setting accounting policy, and signing off on financial statements all stay with your CPA, enrolled agent or attorney. We are explicit about this line because the value of the arrangement depends on it being clear.
            </p>
          </></Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="max-w-3xl space-y-3 mb-7"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">U.S. services</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">Our U.S. Service Pages</h2>
            <p className="text-base text-muted leading-relaxed">Each page covers scope, the review boundary, and how the work is run for U.S. engagements.</p>
          </></Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceRegions.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.2)}>
                <li>
                  <Link href={`/services/${s.slug}/united-states`} className="block p-4 bg-white rounded-xl border border-border/70 hover:border-primary/40 transition-colors">
                    <span className="font-semibold text-primary">U.S. {s.name}</span>
                    <span className="block text-sm text-muted mt-1 leading-relaxed">{s.copy['united-states']}</span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/markets/united-states/texas" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Texas</Link>
              <Link href="/markets/united-states/california" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">California</Link>
              <Link href="/markets/united-states/florida" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Florida</Link>
              <Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">CPA Firms</Link>
              <Link href="/industries/ecommerce" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">E-Commerce</Link>
              <Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">QuickBooks</Link>
              <Link href="/resources/insights/sales-tax-nexus-ecommerce-guide" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Sales tax nexus guide</Link>
              <Link href="/resources/insights/asc-606-revenue-recognition-saas" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">ASC 606 explainer</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="United States" items={faqs} columns={2} />

      <CTABanner
        title="Working Through a U.S. Accounting Bottleneck?"
        description="Tell us where the pressure sits — multi-state records, the close, tax-season capacity — and we can talk through what support would actually change."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
