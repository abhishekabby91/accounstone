import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: "Outsourced Accounting Services: What's Included, What Costs What, and How to Start",
  description: 'The difference between bookkeeping and accounting outsourcing. Month-end close support, reconciliations, and management reporting. Real cost ranges for SMBs and CPA firms.',
  path: '/blog/outsourced-accounting-services',
});

export default function AccountingServicesBlog() {
  return (
    <ArticleLayout
      title="Outsourced Accounting Services: What's Included, What Costs What, and How to Start"
      category="Accounting"
      description="Bookkeeping vs. accounting operations, month-end close workflows, GAAP/IFRS/AASB differences, and what the close cycle should look like."
      publishedDate="2026-08-14"
      section="guides"
      slug="../../../blog/outsourced-accounting-services"
    >
      <p>
        Bookkeeping is the transaction layer: recording, categorizing, reconciling. Accounting operations sit above it: journal entries, period close, management reporting, and the work that requires understanding accounting standards rather than just entering data correctly.
      </p>
      <p>
        The distinction matters because many businesses outsource bookkeeping but still wonder why their books aren&rsquo;t producing useful management reports. The answer is usually that the accounting operations layer — the close work that turns reconciled transactions into usable financial statements — hasn&rsquo;t been addressed.
      </p>

      <h2>What Accounting Operations Outsourcing Covers</h2>
      <ul>
        <li>Journal entries: accruals, prepayments, depreciation, intercompany, reclassifications</li>
        <li>Balance sheet reconciliations — every account tied to a source</li>
        <li>Month-end close: completing a documented checklist so financial statements can be generated on schedule</li>
        <li>Fixed asset management: register maintenance, depreciation posting, disposal accounting</li>
        <li>Deferred revenue tracking for subscription or contract businesses</li>
        <li>Intercompany accounting for multi-entity structures</li>
        <li>Management reporting: P&amp;L, balance sheet, and supporting schedules</li>
      </ul>

      <h2>Month-End Close: What Good Looks Like</h2>
      <p>A well-run outsourced accounting close produces these outputs on a predictable schedule (typically 5–8 business days after period end for most businesses, 10 for complex multi-entity):</p>
      <ul>
        <li>Bank and credit card reconciliations — closing balance tied to statement</li>
        <li>AP and AR subledgers reconciled to GL</li>
        <li>Payroll GL entries reconciled to payroll register</li>
        <li>Prepaid expense amortization posted</li>
        <li>Accrued expenses posted (accrued salaries, utilities, etc.)</li>
        <li>Fixed asset depreciation posted</li>
        <li>Deferred revenue entries updated</li>
        <li>Trial balance reviewed, unusual items flagged</li>
        <li>Management reporting package prepared for review</li>
      </ul>
      <p>The accounting team prepares and posts. A reviewer (your CFO, controller, or CPA) signs off before the period is locked. Judgment calls on unusual items stay with the reviewer.</p>

      <h2>Standards: US GAAP, UK FRS 102, Australian AASB</h2>
      <p><strong>US (GAAP):</strong> Key areas where GAAP specifics matter for outsourced accounting: ASC 606 (revenue recognition), ASC 842 (leases), ASC 350 (intangibles). Most small US businesses maintain simplified accrual books in QBO or Xero; year-end GAAP adjustments are made by the CPA. The accounting operations team handles recurring accruals and close work; GAAP judgment calls stay with the CPA.</p>
      <p><strong>UK (FRS 102):</strong> Generally applicable standard for non-IFRS entities. UK-specific: R&amp;D cost capitalization under FRS 102 Section 18, holiday pay accrual requirements. Companies House filing deadlines (9 months after financial year end) are a hard close driver. The accounting team maintains books to FRS 102 standards; disclosure judgments are made by the statutory accountant.</p>
      <p><strong>Australia (AASB):</strong> Largely aligned with IFRS for reporting entities. AASB 15 (revenue, equivalent to IFRS 15), AASB 16 (leases). EOFY June 30 drives close timing — accounts should be complete by early July. Tax effect accounting relevant for larger entities.</p>

      <h2>Software: QBO, Xero, Sage, NetSuite</h2>
      <p><strong>QBO:</strong> Close involves reconciling all accounts, entering accruals as manual journal entries, running the trial balance, and locking the period in Advanced Settings. Works well for businesses with straightforward accrual accounting; becomes limiting for high-volume or complex structures.</p>
      <p><strong>Xero:</strong> Bank reconciliation is central to the workflow. Repeating journal entries reduce manual entry for monthly accruals. No hard period lock (unlike QBO) — access control or accountant lock is used instead. Third-party tools (Fathom, Spotlight Reporting) used for board-level management reports.</p>
      <p><strong>Sage Intacct:</strong> Close management with checklists, period controls, and multi-entity consolidation. Intercompany eliminations automated once transactions are coded correctly. More appropriate for mid-market businesses.</p>
      <p><strong>NetSuite:</strong> Period management controls open periods. Intercompany module for multi-subsidiary, consolidation in OneWorld. Fixed Assets module tracks the register and depreciation. The accounting team works within an already-configured system; implementation sits with your ERP partner.</p>

      <h2>Cost Ranges</h2>
      <ul>
        <li>SMB accounting operations (simple accrual, monthly close): $500–$1,500/month offshore</li>
        <li>Mid-market (multi-entity, complex revenue, board reporting): $1,500–$4,000/month offshore</li>
        <li>Onshore equivalent: 40–60% more</li>
        <li>Note: these are in addition to bookkeeping fees if the transaction layer is also being outsourced</li>
      </ul>

      <div className="mt-8 p-6 bg-input rounded-xl border border-border/70">
        <p className="font-semibold text-primary mb-3">Relevant services</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/services/accounting" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounting Services</Link>
          <Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">QuickBooks</Link>
          <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Xero</Link>
          <Link href="/technology/netsuite" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">NetSuite</Link>
          <Link href="/resources/guides/outsourced-accounting-services-guide" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Full Accounting Guide</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
