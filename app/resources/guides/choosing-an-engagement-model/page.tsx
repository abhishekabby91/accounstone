import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import ArticleVisual from '@/components/article-visual';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/resources/guides/choosing-an-engagement-model';

export const metadata: Metadata = genMeta({
  title: 'Staff Augmentation vs. Dedicated Team vs. Offshore Support vs. Back Office: How to Choose',
  description:
    'A comparison of the four ways to add outsourced accounting capacity — staff augmentation, a dedicated team, offshore accounting support, and back-office support — and which fits which situation.',
  path: PATH,
});

export default function ChoosingEngagementModelGuide() {
  return (
    <ArticleLayout
      title="Staff Augmentation vs. Dedicated Team vs. Offshore Support vs. Back Office: How to Choose"
      category="Guide"
      description="Four ways to add outsourced accounting capacity, what actually separates them, and a framework for matching the model to your situation instead of the name that sounds most familiar."
      publishedDate="2026-08-21"
      section="guides"
      slug="choosing-an-engagement-model"
      inquiryTitle="Not Sure Which Model Fits?"
      inquiryLead="Describe the workload — recurring, seasonal, or a backlog with an end date — and we will tell you which of these four shapes we would actually propose, and why."
    >
      <p>
        These four terms get used almost interchangeably in outsourcing conversations, which makes comparing providers harder than it needs to be. They are not four tiers of the same thing — they differ in what unit you're actually adding (a person, a function, or ongoing capacity) and how permanent the arrangement is meant to be. Once that's clear, matching a situation to a model is usually straightforward.
      </p>
      <p>
        This guide is a comparison, not a sales pitch for any one model. If you haven't yet worked out what to look for in a provider generally, see{' '}
        <Link href="/resources/guides/how-to-choose-accounting-outsourcing-partner" className="text-primary font-medium hover:underline">how to choose an accounting outsourcing partner</Link>{' '}first — this guide assumes you're past that and deciding on structure.
      </p>

      <ArticleVisual
        variant="decision"
        title="What you're actually choosing between"
        items={[
          { label: 'Staff Augmentation', detail: 'A person added to your workflow.' },
          { label: 'Dedicated Team', detail: 'A team built and led around your operations.' },
          { label: 'Offshore Support', detail: 'Flexible capacity across accounting workflows.' },
          { label: 'Back Office', detail: 'A whole function handed off end to end.' },
        ]}
      />

      <h2>Side by Side</h2>
      <div className="overflow-x-auto my-6 rounded-xl border border-border/70">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-input text-left">
              <th className="p-4 font-bold text-primary">Model</th>
              <th className="p-4 font-bold text-primary">Unit of engagement</th>
              <th className="p-4 font-bold text-primary">Best fit</th>
              <th className="p-4 font-bold text-primary">Typical duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border/70">
              <td className="p-4 font-semibold text-foreground align-top"><Link href="/solutions/staff-augmentation" className="text-primary hover:underline">Staff Augmentation</Link></td>
              <td className="p-4 text-muted align-top">One or more professionals added into your existing team, systems, and review process.</td>
              <td className="p-4 text-muted align-top">A defined workload spike (tax season, a project, a hiring gap) where your team keeps ownership of the process.</td>
              <td className="p-4 text-muted align-top">Project-length or seasonal, though it can run ongoing.</td>
            </tr>
            <tr className="border-t border-border/70">
              <td className="p-4 font-semibold text-foreground align-top"><Link href="/solutions/dedicated-accounting-teams" className="text-primary hover:underline">Dedicated Accounting Team</Link></td>
              <td className="p-4 text-muted align-top">A team, with a lead, built around your close calendar, systems, and review structure specifically.</td>
              <td className="p-4 text-muted align-top">An ongoing need broad enough to justify a team (not one role), where you want one point of coordination.</td>
              <td className="p-4 text-muted align-top">Typically a 6–12 month initial commitment, structured as a longer-term partnership.</td>
            </tr>
            <tr className="border-t border-border/70">
              <td className="p-4 font-semibold text-foreground align-top"><Link href="/solutions/offshore-accounting-support" className="text-primary hover:underline">Offshore Accounting Support</Link></td>
              <td className="p-4 text-muted align-top">Flexible capacity that can be applied across bookkeeping, accounting, payroll, or AP/AR as the need shifts.</td>
              <td className="p-4 text-muted align-top">You want one relationship that can flex across several workflows over time rather than a fixed scope.</td>
              <td className="p-4 text-muted align-top">Ongoing, with scope that can scale up or down.</td>
            </tr>
            <tr className="border-t border-border/70">
              <td className="p-4 font-semibold text-foreground align-top"><Link href="/solutions/back-office-support" className="text-primary hover:underline">Back Office Support</Link></td>
              <td className="p-4 text-muted align-top">A defined function — bookkeeping, payroll, AP, AR, or some combination — handed off end to end.</td>
              <td className="p-4 text-muted align-top">You want to stop running a whole recurring workflow in-house, not add a person to help run it.</td>
              <td className="p-4 text-muted align-top">Ongoing, sized to transaction volume and the mix of functions handed over.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The lines between these blur in practice — a dedicated team can end up handling back-office-style work, and offshore support can look a lot like staff augmentation once it's running. The table above describes how each model is typically structured at the start, not a rule that stays fixed forever.
      </p>

      <h2>Four Questions That Actually Decide It</h2>

      <h3>1. Are you adding a person to your process, or handing off a whole process?</h3>
      <p>
        If the answer is "we need more hands doing the work our team already owns," that's staff augmentation. If the answer is "we want this entire recurring function to stop being our problem to run," that's back-office support. Most confusion between models starts by skipping this question.
      </p>

      <h3>2. Is the need temporary or permanent?</h3>
      <p>
        Staff augmentation is built for defined, often seasonal, needs — it can run indefinitely, but it's structured around a scope that has a natural start and end. A dedicated team and back-office support are both built for a need that isn't going away.
      </p>

      <h3>3. Do you want one workflow covered, or flexible coverage across several?</h3>
      <p>
        Back-office support and a dedicated team are usually built around a defined set of workflows agreed upfront. Offshore accounting support is the model built for flexibility — capacity that can shift toward whichever workflow needs it that month, without renegotiating the engagement each time.
      </p>

      <h3>4. Do you want a single point of coordination?</h3>
      <p>
        A dedicated team comes with a team lead who coordinates with you directly and is accountable for the group's output — useful once the work is broad enough that "who owns this" needs an answer. Staff augmentation and back-office support can both work without that layer if the scope is narrow enough to manage directly.
      </p>

      <ArticleVisual
        variant="workflow"
        title="A simple way to start"
        items={[
          { label: 'One role, defined scope', detail: 'Staff augmentation.' },
          { label: 'One function, run end to end', detail: 'Back-office support.' },
          { label: 'Broad, flexible capacity', detail: 'Offshore accounting support.' },
          { label: 'Broad, coordinated by a lead', detail: 'Dedicated accounting team.' },
        ]}
      />

      <h2>Can These Be Combined or Changed Later?</h2>
      <p>
        Yes, and it's common. A business might start with staff augmentation to cover a busy season, find the capacity genuinely useful, and move that same work into a dedicated team once the need proves ongoing. Or a CPA firm might run staff augmentation for tax season alongside back-office support for its own internal bookkeeping year-round — different models for different problems, running at the same time. Structure the initial engagement around what you know today; it doesn't have to predict the next two years.
      </p>

      <h2>Is One Cheaper Than the Others?</h2>
      <p>
        Not inherently — cost depends on scope and volume more than which model you pick. Back-office support tends to be priced as a fixed fee against transaction volume; staff augmentation and dedicated teams are usually priced around the role(s) or team involved; offshore support scope-and-prices similarly to whichever workflows it's currently covering. Comparing two models on price only makes sense once the scope behind each quote is genuinely equivalent — see the{' '}
        <Link href="/resources/guides/outsourced-bookkeeping-cost-guide" className="text-primary font-medium hover:underline">bookkeeping cost guide</Link>{' '}for how to make that comparison properly.
      </p>

      <h2>For CPA Firms Specifically</h2>
      <p>
        Staff augmentation and dedicated teams come up most often for CPA firms — staff augmentation for tax-season capacity without a permanent hire, a dedicated team once a firm's outsourced workload is consistent enough to justify one. See{' '}
        <Link href="/resources/guides/client-accounting-services-cas-guide" className="text-primary font-medium hover:underline">Client Accounting Services (CAS): A Guide for CPA Firms</Link>{' '}and{' '}
        <Link href="/resources/guides/staff-augmentation-tax-season-guide" className="text-primary font-medium hover:underline">how CPA firms use staff augmentation during tax season</Link>{' '}for more on those two specifically.
      </p>

      <p>
        See the full{' '}
        <Link href="/solutions" className="text-primary font-medium hover:underline">solutions overview</Link>{' '}for all four models, or{' '}
        <Link href="/contact" className="text-primary font-medium hover:underline">start a conversation</Link>{' '}about which one fits what you're dealing with right now.
      </p>
    </ArticleLayout>
  );
}
