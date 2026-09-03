import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/resources/insights/asc-606-revenue-recognition-saas';

export const metadata: Metadata = genMeta({
  title: 'ASC 606 Revenue Recognition for SaaS',
  description:
    'Why subscription businesses cannot just book cash received as revenue, and what ASC 606 and deferred revenue actually mean for your financials.',
  path: PATH,
});

export default function ASC606Insight() {
  return (
    <ArticleLayout
      title="ASC 606 Revenue Recognition for SaaS: A Quick Explainer"
      category="Insight"
      description="Why subscription businesses can't just book cash received as revenue, and what deferred revenue actually means for your financials."
      publishedDate="2026-07-25"
      section="insights"
      slug="asc-606-revenue-recognition-saas"
      inquiryTitle="Talk to Us About Your Revenue Schedules"
      inquiryLead="Tell us how contracts, billing and deferred revenue are tracked today, and we will scope the schedule preparation and reconciliation work your reviewers sign off."
    >
      <p>
        If your SaaS business bills customers annually but delivers the service
        monthly, you can't simply record the full annual payment as revenue the
        day it hits your bank account. That's the core idea behind ASC 606
        revenue recognition, and it trips up a lot of early-stage SaaS founders.
      </p>

      <h2>The Basic Idea</h2>
      <p>
        ASC 606 requires revenue to be recognized as the service is actually
        delivered, not when cash is received. If a customer pays $12,000 upfront
        for an annual subscription, that revenue gets recognized at roughly
        $1,000 per month over the year — not all at once in the month they paid.
      </p>

      <h2>What "Deferred Revenue" Means</h2>
      <p>
        The portion of that payment not yet "earned" sits on your balance sheet
        as a liability called deferred revenue (sometimes called unearned
        revenue). It represents an obligation — you've been paid, but you still
        owe the customer months of service. As each month passes, a slice of
        that deferred revenue moves over to recognized revenue.
      </p>

      <h2>Why This Actually Matters</h2>
      <ul>
        <li>
          <strong>Investors and boards expect it</strong> — recognizing all cash
          upfront overstates revenue in the month collected and understates it
          later, distorting growth trends.
        </li>
        <li>
          <strong>It affects valuation conversations</strong> — ARR and MRR
          calculations depend on revenue being recognized correctly over time,
          not lumped at collection.
        </li>
        <li>
          <strong>Cleanup gets expensive later</strong> — fixing years of
          incorrectly recognized revenue during a fundraise or audit is far more
          costly than setting it up correctly from the start.
        </li>
      </ul>

      <h2>Getting This Right From the Start</h2>
      <p>
        This becomes more complex with usage-based pricing, multi-year
        contracts, or bundled products and services — each has its own
        recognition pattern under ASC 606's broader framework. The key is
        setting up your accounting system to track this automatically as
        contracts are signed, not trying to reconstruct it later.
      </p>
      <p>
        See how we support{' '}
        <Link href="/industries/technology" className="text-primary font-medium hover:underline">
          technology and SaaS companies
        </Link>{' '}
        with revenue recognition and investor-ready reporting.
      </p>
    </ArticleLayout>
  );
}
