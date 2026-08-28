import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { serviceRegions } from '@/lib/data';

const PATH = '/markets/australia';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting in Australia: A Practical Overview',
  description:
    'How Australian accounting works in practice — the ATO, GST and BAS, PAYG, Single Touch Payroll, superannuation and the 30 June year end — and where outsourced support fits.',
  path: PATH,
});

const faqs = [
  {
    question: 'Do you lodge our BAS?',
    answer:
      'No. We prepare BAS-ready records — GST coding reconciled, the ledger current, supporting detail organised — so lodgment is straightforward. Lodgment itself is the work of a registered BAS agent, and income tax lodgment the work of a registered tax agent. We do not hold ATO portal access.',
  },
  {
    question: 'Why does the 30 June year end matter so much?',
    answer:
      'Because nearly every Australian entity shares it. Year-end close, the June quarter BAS, and the start of audit or tax preparation all land on the same finance team within weeks. In the UK and U.S., year ends are spread across the calendar; in Australia the workload concentrates, which is why capacity planning matters more than elsewhere.',
  },
  {
    question: 'How does superannuation affect the accounting work?',
    answer:
      'Superannuation guarantee contributions have to be calculated on ordinary time earnings and paid by quarterly deadlines, and late payment carries consequences that ordinary late payments do not. The accounting work is making sure the calculation and the accrual are right and supported. Superannuation fund advice is not something we offer in any form.',
  },
  {
    question: 'What is the difference between a BAS agent and a tax agent?',
    answer:
      'They are separately registered roles. A registered BAS agent can lodge activity statements and advise on GST and PAYG withholding obligations; a registered tax agent handles income tax lodgment and advice. Our work sits behind both — preparing the records each of them relies on.',
  },
  {
    question: 'Which reporting standards apply?',
    answer:
      'Australian entities report under AASB standards, which are aligned with IFRS. Reporting requirements differ depending on the type of entity and whether it is classified as a reporting entity, which is a determination for your registered agent rather than a general rule.',
  },
  {
    question: 'What software do Australian clients usually run?',
    answer:
      'Xero is dominant in the Australian SME market, with MYOB well established and QuickBooks Online also in use. We work inside whichever platform is already running rather than implementing or configuring it.',
  },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'Australia', url: `${baseUrl}${PATH}` },
]);

const topics = [
  {
    h: 'The BAS cycle governs the year',
    p: 'The Business Activity Statement is the recurring obligation most Australian businesses organise around — quarterly for the majority, monthly above a turnover threshold. It reports GST alongside PAYG withholding and PAYG instalments in a single statement, which means one inaccurate ledger affects several obligations at once.',
  },
  {
    h: 'GST is national, and coded at the transaction',
    p: 'Unlike U.S. sales tax, GST is a single national rate administered by the ATO, which removes the jurisdictional complexity entirely. What replaces it is coding discipline: GST-free, input-taxed and taxable supplies each behave differently, and a mis-coded transaction quietly distorts both the BAS and the year-end position until someone reconciles the control account.',
  },
  {
    h: 'PAYG runs in two distinct forms',
    p: 'PAYG withholding is tax withheld from employee wages and reported through the BAS. PAYG instalments are prepayments toward the business’s own income tax liability. They share a name and a statement but are unrelated obligations, and confusing them is a common source of reconciliation difficulty.',
  },
  {
    h: 'Single Touch Payroll reports every pay event',
    p: 'Payroll information is reported to the ATO on or before each pay day rather than at year end. Employee year-to-date figures are therefore visible to the ATO and to employees continuously, which means payroll errors surface immediately and have to be corrected in-cycle rather than swept into a year-end adjustment.',
  },
  {
    h: 'Superannuation guarantee is a hard deadline',
    p: 'Employer superannuation contributions are calculated on ordinary time earnings and must reach the employee’s fund by the quarterly cut-off. Late payment is treated differently from other late payments, so the accrual and the payment timing both need to be right — and supported — rather than reconstructed later.',
  },
  {
    h: 'Trust structures are common and change the records',
    p: 'Discretionary and unit trusts are used far more widely in Australian small business than in the UK or U.S. They bring their own record-keeping requirements — distribution resolutions, beneficiary entitlements, and trust accounts that have to reconcile — which a standard company chart of accounts does not accommodate on its own.',
  },
];

export default function AustraliaMarketPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        region="australia"
        subtitle="Australia"
        title="Accounting in Australia"
        description="How Australian accounting works in practice — the BAS cycle, GST coding, PAYG, Single Touch Payroll, superannuation and the 30 June crunch."
        cta={{ text: 'Discuss Your Australian Requirements', href: '/contact' }}
        ctaSecondary={{ text: 'View Australian Services', href: '/services#australia' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/markets" className="inline-block py-1.5 hover:text-primary transition-colors">Markets</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Australia</li>
        </ol>
      </nav>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-5"><>
          <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Accounting Environment Australian Businesses Operate In</h2>
          <p className="text-lg text-muted leading-relaxed">
            Australian accounting has a distinctive shape. A single tax authority and a single national GST rate make the rules simpler than the U.S. state patchwork. But two features concentrate the workload in ways neither the U.S. nor the UK experience: almost every entity shares a 30 June year end, and the BAS combines GST, PAYG withholding and PAYG instalments into one recurring statement.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            The result is a calendar with a pronounced peak and a ledger that several obligations depend on simultaneously. This page describes that environment as background; the commercial detail sits on the individual Australian service pages linked further down.
          </p>
        </></Reveal>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="max-w-3xl space-y-3 mb-8"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">The landscape</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Six Things That Shape Australian Accounting Work</h2>
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
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Can Move, and What Cannot</h2>
            <p className="text-lg text-muted leading-relaxed">
              The preparation layer moves well, and in Australia it is the layer that absorbs the 30 June pressure: keeping GST coding correct as transactions are posted, reconciling the GST control account through the year, running pay events with PAYG and superannuation calculated and supported, maintaining the ledgers, and assembling BAS-ready records and year-end workpapers.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              What cannot move is lodgment and advice. BAS lodgment belongs to a registered BAS agent, income tax lodgment to a registered tax agent, and we do not hold ATO portal access. We do not provide tax planning, structuring advice, or superannuation fund advice in any form — our work is the records those decisions are made from.
            </p>
          </></Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="max-w-3xl space-y-3 mb-7"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Australian services</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Our Australian Service Pages</h2>
            <p className="text-base text-muted leading-relaxed">Each page covers scope, the review boundary, and how the work is run for Australian engagements.</p>
          </></Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceRegions.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.2)}>
                <li>
                  <Link href={`/services/${s.slug}/australia`} className="block p-4 bg-white rounded-xl border border-border/70 hover:border-primary/40 transition-colors">
                    <span className="font-semibold text-primary">Australian {s.name}</span>
                    <span className="block text-sm text-muted mt-1 leading-relaxed">{s.copy['australia']}</span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">MYOB</Link>
              <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Xero</Link>
              <Link href="/industries/real-estate" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Real Estate</Link>
              <Link href="/industries/professional-services" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Professional Services</Link>
              <Link href="/compliance" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Compliance &amp; Controls</Link>
              <Link href="/resources/guides/outsourced-payroll-processing-guide" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Payroll guide</Link>
              <Link href="/resources/guides/outsourced-bookkeeping-cost-guide" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Bookkeeping cost guide</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="Australia" items={faqs} columns={2} />

      <CTABanner
        title="Heading Into a 30 June Crunch?"
        description="Tell us where the pressure sits — GST coding, the BAS cycle, payroll each pay event, or year-end preparation — and we can talk through what support would actually change."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
