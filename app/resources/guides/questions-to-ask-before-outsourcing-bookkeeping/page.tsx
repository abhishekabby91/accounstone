import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping';

export const metadata: Metadata = genMeta({
  title: '9 Questions to Ask Before Outsourcing Your Bookkeeping',
  description:
    'Considering outsourced bookkeeping? These nine practical questions cover scope, software access, review, security, pricing, handoff and day-to-day communication.',
  path: PATH,
});

export default function QuestionsToAskGuide() {
  return (
    <ArticleLayout
      title="9 Questions to Ask Before Outsourcing Your Bookkeeping"
      category="Guide"
      description="Before you compare providers, understand the workflow you are actually buying. These questions help you evaluate scope, review, access, pricing and the handoff.">
      <p>
        Outsourcing bookkeeping is not simply a decision about who enters transactions. Someone outside your business may be working in the same accounting file your CPA relies on, preparing information your management team uses, and handling records that need to stay organised month after month. It is reasonable to ask how that relationship will work before you hand over access.
      </p>
      <p>
        These questions are useful whether you run a growing business or manage accounting work for clients. The goal is not to find the provider with the longest list of promises. It is to understand what will actually happen to the books.
      </p>

      <h2>1. What exactly is included in the monthly scope?</h2>
      <p>
        “Bookkeeping” can mean very different things. Ask whether the scope includes transaction categorisation, bank and credit-card reconciliations, AP/AR, month-end close, reporting, cleanup and follow-up on missing information. If a task matters to your workflow, it should be clear whether it is included, excluded or separately scoped.
      </p>

      <h2>2. Who will actually work on the books?</h2>
      <p>
        Ask whether you will have a consistent person or team, who handles questions when that person is unavailable, and who reviews the completed work. Consistency matters because bookkeeping depends on context: how accounts are normally coded, which transactions need clarification and what your CPA expects to see at review time.
      </p>

      <h2>3. What happens if the books are already behind?</h2>
      <p>
        Catch-up work is different from recurring bookkeeping. If several months need to be reconciled, old balances investigated or transactions corrected, ask for that work to be identified separately. A clear starting assessment makes the ongoing monthly scope easier to understand.
      </p>

      <h2>4. Will you work in our existing accounting software?</h2>
      <p>
        If your business already uses QuickBooks Online, Xero or another accounting platform, ask whether the provider can work within that environment. Also ask how access is granted, how permissions are managed and how changes or issues are documented. Moving systems should not become a requirement unless there is a genuine reason for it.
      </p>

      <h2>5. How is the work reviewed before it reaches us?</h2>
      <p>
        A useful question is not just “Who does the bookkeeping?” but “Who checks it?” Ask what happens after transactions are processed and reconciliations are completed. Is there a review checklist? Are unusual items flagged? How are open questions tracked? The exact process will vary, but the provider should be able to explain it clearly.
      </p>

      <h2>6. What happens when the workload changes?</h2>
      <p>
        Your normal month may not look like your busiest month. You may add an entity, open another bank account, experience a transaction spike or need cleanup before tax work. Ask what causes the scope or price to change and how those changes are agreed before additional work begins.
      </p>

      <h2>7. How are security and access handled?</h2>
      <p>
        “We take security seriously” is not enough on its own. Ask how users receive access, what permissions are used, how access is removed when someone leaves the team, and how sensitive documents are exchanged. If a provider mentions certifications or formal security frameworks, ask which ones actually apply today rather than relying on future plans.
      </p>

      <h2>8. What happens if we decide to bring the work back in-house?</h2>
      <p>
        This is worth discussing before the relationship starts. Your accounting records should remain accessible in the systems you control, and the handoff process should be understandable. Ask what documentation is maintained, how outstanding items are communicated and what the transition would look like if responsibilities change later.
      </p>

      <h2>9. What does month-end actually look like?</h2>
      <p>
        Ask the provider to walk through a normal month. When are transactions processed? When do reconciliations happen? When are exceptions raised? When are reports or close schedules prepared? Who reviews them? A provider who can explain the workflow in practical terms gives you much more to evaluate than a generic promise of “timely books.”
      </p>

      <h2>For CPA Firms, Add One More Question</h2>
      <p>
        If you are a CPA firm, ask: <strong>“How much review-ready work should reach my team?”</strong> Production volume alone does not tell you whether the arrangement will help. If your staff still has to reorganise the file, chase explanations and correct avoidable issues, the capacity problem may simply have moved rather than disappeared.
      </p>
      <p>
        Look for a workflow that makes review easier: clear documentation, visible exceptions, consistent reconciliations and a defined handoff. Our <Link href="/industries/cpa-firms" className="text-primary font-medium hover:underline">CPA firm support</Link> page explains how that type of workflow can fit into an existing firm.
      </p>

      <h2>What a Good Conversation Should Cover</h2>
      <p>
        By the end of the discussion, you should understand the monthly scope, who does and reviews the work, what happens during cleanup, how access and documents are handled, how changes are priced, and what the month-end handoff looks like. If those answers are still vague, the proposal is probably difficult to compare fairly.
      </p>
      <p>
        If you are defining the scope now, see our <Link href="/services/bookkeeping/united-states" className="text-primary font-medium hover:underline">U.S. bookkeeping support</Link> or <Link href="/resources/guides/outsourced-bookkeeping-cost-guide" className="text-primary font-medium hover:underline">bookkeeping cost guide</Link> for the next step in the evaluation.
      </p>
    </ArticleLayout>
  );
}
