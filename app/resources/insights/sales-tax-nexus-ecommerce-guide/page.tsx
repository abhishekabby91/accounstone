import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/resources/insights/sales-tax-nexus-ecommerce-guide';

export const metadata: Metadata = genMeta({
  title: 'Sales Tax Nexus: What E-Commerce Sellers Need to Track',
  description:
    'A quick explainer on economic nexus for e-commerce sellers — why growing into new states can quietly create new sales tax obligations.',
  path: PATH,
});

export default function SalesTaxNexusInsight() {
  return (
    <ArticleLayout
      title="Sales Tax Nexus: What E-Commerce Sellers Need to Track"
      category="Insight"
      description="Why growing your e-commerce business into new states can quietly create new sales tax obligations you didn't have last year."
      publishedDate="2026-07-25"
      section="insights"
      slug="sales-tax-nexus-ecommerce-guide"
    >
      <p>
        Since the 2018 South Dakota v. Wayfair Supreme Court decision, states can
        require out-of-state sellers to collect sales tax based on economic
        activity alone — no physical presence required. This is called
        "economic nexus," and it's one of the most common blind spots for
        growing e-commerce businesses.
      </p>

      <h2>How It Catches Businesses Off Guard</h2>
      <p>
        Each state sets its own threshold — commonly a certain dollar amount of
        sales or number of transactions within the state per year. Cross that
        threshold, and you may owe sales tax registration and collection
        obligations in that state, even if you've never set foot there and have
        no employees or warehouses located in it.
      </p>
      <p>
        Because thresholds are state-specific and change over time, a business
        selling well across multiple states can accumulate nexus obligations in
        several states without anyone flagging it — until an audit or a
        compliance review surfaces it.
      </p>

      <h2>Why This Matters for Your Bookkeeping</h2>
      <p>
        Nexus tracking isn't a one-time setup — it needs to be monitored
        continuously as sales grow and shift across states and channels
        (your own storefront, Amazon, other marketplaces). Bookkeeping that
        tracks revenue by state, not just in aggregate, is what makes this
        visible in the first place.
      </p>

      <h2>What to Do About It</h2>
      <ul>
        <li>Track sales by state, not just total revenue</li>
        <li>Review your nexus footprint periodically as you grow, not just once</li>
        <li>Work with a sales tax filing service or tax advisor for actual registration and filing once nexus is triggered</li>
      </ul>
      <p>
        This is general information, not tax advice for your specific situation
        — sales tax rules vary by state and change over time, so confirm your
        specific obligations with a qualified tax advisor.
      </p>

      <h2>How We Help</h2>
      <p>
        Our{' '}
        <Link href="/industries/ecommerce" className="text-primary font-medium hover:underline">
          e-commerce accounting support
        </Link>{' '}
        includes tracking sales by state and channel, so this visibility exists
        in your books before it becomes a surprise.
      </p>
    </ArticleLayout>
  );
}
