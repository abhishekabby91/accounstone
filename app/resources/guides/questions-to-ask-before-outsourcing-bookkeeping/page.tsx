import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping';

export const metadata: Metadata = genMeta({
  title: '9 Questions to Ask Before Outsourcing Your Bookkeeping',
  description:
    'The real questions business owners ask before hiring an outsourced bookkeeper — dedicated vs. pooled staff, data ownership, security, pricing, and what happens if you cancel.',
  path: PATH,
});

export default function QuestionsToAskGuide() {
  return (
    <ArticleLayout
      title="9 Questions to Ask Before Outsourcing Your Bookkeeping"
      category="Guide"
      description="The questions business owners actually ask before hiring — answered honestly, including the ones that don't have a flattering answer for every provider."
      publishedDate="2026-07-25"
      section="guides"
      slug="questions-to-ask-before-outsourcing-bookkeeping"
    >
      <p>
        Hiring an outsourced bookkeeper means handing over sensitive financial
        access to a company you may have never met in person. That's a
        reasonable thing to be careful about. Here are the questions that
        actually matter, and how we'd answer each one honestly.
      </p>

      <h2>1. Will I have a dedicated bookkeeper, or does my work rotate through a team?</h2>
      <p>
        This affects consistency more than almost anything else. If your work
        rotates through whoever's available, you end up re-explaining context
        every month. Ask any provider directly whether you'll have a consistent
        point of contact who actually knows your business, or a pooled team
        assigned by availability.
      </p>

      <h2>2. What exactly is included in the price?</h2>
      <p>
        "Bookkeeping" can mean transaction categorization only, or it can
        include reconciliation, reporting, and being ready to hand clean books
        to your CPA at tax time. Get the scope in writing before you compare
        prices between providers — a cheaper quote that excludes reconciliation
        isn't actually cheaper once you add it back in.
      </p>

      <h2>3. What happens to my files if I decide to cancel?</h2>
      <p>
        This is worth asking upfront, not after a falling-out. A provider
        should be able to tell you clearly: you own your data, your books stay
        in your accounting software (not a proprietary system you'd lose
        access to), and you can export or hand off cleanly if you ever switch.
      </p>

      <h2>4. What security measures are actually in place?</h2>
      <p>
        "We take security seriously" isn't an answer. Ask specifically about
        NDA coverage, access controls, and whether the provider is working
        toward or holds relevant certifications (like SOC 2). Any legitimate
        provider should be comfortable being specific here, not vague.
      </p>

      <h2>5. Is the pricing flat-fee, hourly, or usage-based — and what triggers a change?</h2>
      <p>
        Understand what happens to your price if your transaction volume grows,
        or if you add a new bank account or entity. Surprise cost increases are
        one of the most common complaints in outsourced bookkeeping relationships,
        and they're avoidable if you ask this upfront.
      </p>

      <h2>6. Does the provider work in my actual accounting software?</h2>
      <p>
        If you're on QuickBooks Online or Xero, confirm the provider works
        directly in your existing system rather than requiring you to adopt a
        new platform just for them. Migrating software you didn't need to
        migrate is a real hidden cost.
      </p>

      <h2>7. Full-time hire vs. outsourcing — which is actually cheaper for me?</h2>
      <p>
        This depends heavily on your transaction volume and local labor costs
        — there's no universal answer. A full-time bookkeeper's real cost
        includes salary, payroll taxes, benefits, and management time, not just
        the base salary. Ask a provider to walk through your specific volume
        rather than accepting a generic industry comparison.
      </p>

      <h2>8. How is quality actually reviewed before I see the numbers?</h2>
      <p>
        Ask whether there's a second-review step before reports reach you, or
        whether the person entering transactions is also the only person
        checking their own work. A described review process is a good sign; no
        answer at all is not.
      </p>

      <h2>9. Can you describe your month-end close process, specifically?</h2>
      <p>
        A provider who can walk you through their actual close process step by
        step is very different from one who gives a vague timeline. If they
        can't describe it clearly, they may not have a consistent one.
      </p>

      <h2>Where We Stand on These</h2>
      <p>
        You'll have a consistent point of contact, not a rotating pool. You own
        your data in your own QuickBooks Online or Xero account — nothing lives
        in a system you'd lose access to if you left. We're upfront that we're
        a newer company still building toward formal certifications like SOC 2,
        and we'll tell you exactly where we are on that path rather than
        overstating it.
      </p>
      <p>
        See our{' '}
        <Link href="/services/bookkeeping" className="text-primary font-medium hover:underline">
          bookkeeping services
        </Link>{' '}
        or{' '}
        <Link href="/contact" className="text-primary font-medium hover:underline">
          ask us these questions directly
        </Link>{' '}
        — we'd rather you ask before signing than after.
      </p>
    </ArticleLayout>
  );
}
