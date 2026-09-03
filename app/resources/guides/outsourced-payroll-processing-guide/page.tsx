import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/resources/guides/outsourced-payroll-processing-guide';

export const metadata: Metadata = genMeta({
  title: 'What Outsourced Payroll Processing Covers',
  description:
    'How outsourced payroll runs in QuickBooks, Xero, Gusto and ADP, what it costs in the US, UK and Australia, and what employers ask before handing it over.',
  path: PATH,
});

export default function OutsourcedPayrollGuide() {
  return (
    <ArticleLayout
      title="Outsourced Payroll Processing: What It Actually Covers (US, UK & Australia)"
      category="Guide"
      description="Per-jurisdiction payroll compliance, software workflows, realistic cost ranges, and the questions that come up on Reddit and in real onboarding calls."
      publishedDate="2026-08-14"
      section="guides"
      slug="outsourced-payroll-processing-guide"
      inquiryTitle="Talk to Us About Payroll in Your Market"
      inquiryLead="Tell us which market you run payroll in, the provider and the pay calendar, and we will scope the preparation and reporting work around your existing approvals."
    >
      <p>
        &ldquo;Outsourced payroll&rdquo; means different things depending on who you ask. For a US founder with 12 employees it might mean someone runs the Gusto payroll on their behalf. For a UK accountancy firm it might mean a dedicated payroll bureau handling PAYE submissions. For an Australian business owner it means someone keeping STP reporting current across an MYOB or Xero setup. The underlying task is the same; the compliance layer is entirely different in each jurisdiction.
      </p>
      <p>
        This guide covers what outsourced payroll processing actually includes, how it works inside the tools your business already uses, what it costs in the US, UK and Australia, and the specific questions that come up when businesses think seriously about handing this off.
      </p>

      <h2>What Outsourced Payroll Processing Actually Includes</h2>
      <p>
        Payroll processing — the recurring calculation and record-keeping work — includes:
      </p>
      <ul>
        <li>Calculating gross pay from timesheets, salary schedules, hourly rates, overtime rules and commission structures</li>
        <li>Applying deductions: tax withholdings, voluntary deductions (benefits, 401k/pension contributions), garnishments</li>
        <li>Generating payslips and distributing them to employees</li>
        <li>Submitting payroll runs in your payroll system</li>
        <li>Reconciling payroll records against the general ledger</li>
        <li>Maintaining payroll records and audit trails</li>
      </ul>
      <p>
        What it <strong>does not include</strong>: HR strategy, benefits administration, employment law advice, contractor vs. employee classification decisions, or hiring and termination decisions. Those stay with your management team or your employment attorney.
      </p>

      <h2>How It Works in Common Payroll Software</h2>

      <h3>QuickBooks Payroll (US)</h3>
      <p>
        QuickBooks Online Payroll integrates directly with the accounting ledger, so payroll journal entries post automatically. An outsourced payroll team working in QBO Payroll will:
      </p>
      <ul>
        <li>Set up or maintain the payroll schedule and pay periods</li>
        <li>Import or enter approved hours/salaries before each run</li>
        <li>Run the payroll and confirm the pre-run summary before submission</li>
        <li>Confirm that direct deposit or check runs completed</li>
        <li>Reconcile the payroll expense accounts monthly</li>
      </ul>
      <p>
        The payroll team should not have direct-deposit authorization or bank account access. They prepare the run; an authorized person inside your business approves and submits it, or they submit it after you confirm the summary. This is the most common question in Reddit&rsquo;s r/smallbusiness and r/accounting: &ldquo;Do they have access to our bank account?&rdquo; The answer should always be no.
      </p>

      <h3>Xero Payroll (US, UK, Australia)</h3>
      <p>
        Xero Payroll operates similarly across all three regions but with different tax engines: W-2/1099 in the US, PAYE/NI in the UK, PAYG/STP in Australia. An outsourced team working in Xero Payroll will:
      </p>
      <ul>
        <li>Maintain employee records, pay calendars and leave balances</li>
        <li>Process each pay run from the draft stage through to approval</li>
        <li>Handle the payslip distribution from within Xero</li>
        <li>Reconcile payroll liabilities (PAYE/NI in UK, PAYG in Australia) against what Xero calculates and what has been paid</li>
      </ul>

      <h3>Gusto (US)</h3>
      <p>
        Gusto is popular with US SMBs partly because it handles federal and state payroll tax filings automatically. An outsourced team using Gusto will typically prepare and submit payroll runs, verify that Gusto has filed the correct tax forms (Form 941 quarterly, W-2s annually), and reconcile Gusto&rsquo;s payroll reports against the accounting general ledger if Gusto is connected to QBO or Xero.
      </p>
      <p>
        One thing worth knowing: Gusto&rsquo;s employer-of-record features (where Gusto becomes the legal employer) are a separate product from standard payroll processing and are not typically part of an outsourced accounting team&rsquo;s scope.
      </p>

      <h3>ADP (US)</h3>
      <p>
        ADP is common in mid-market US businesses. Outsourced payroll support for ADP typically involves working with ADP reports and journal entries rather than running payroll inside ADP directly, since ADP access tends to be more restricted. The outsourced team reconciles ADP payroll registers against the GL, tracks accruals and reconciles payroll liabilities.
      </p>

      <h3>MYOB Payroll (Australia)</h3>
      <p>
        MYOB&rsquo;s payroll module handles STP Phase 2 reporting for Australian businesses. An outsourced team working in MYOB will process pay runs, confirm STP lodgments, reconcile PAYG withholding liabilities, and maintain the payroll records for superannuation reconciliation.
      </p>

      <h2>Jurisdiction-Specific Payroll Compliance: What You Need to Know</h2>

      <h3>United States</h3>
      <p>
        US payroll compliance sits across federal and state layers:
      </p>
      <ul>
        <li><strong>Federal:</strong> FICA (Social Security 6.2%, Medicare 1.45%), FUTA (federal unemployment), federal income tax withholding from W-4s</li>
        <li><strong>State:</strong> State income tax withholding where applicable (9 states have no income tax), SUTA (state unemployment), state-specific requirements (California SDI, New York PFL, etc.)</li>
        <li><strong>Filings:</strong> Form 941 quarterly, FUTA Form 940 annually, W-2s by January 31, state equivalents vary by state</li>
        <li><strong>Multi-state:</strong> Employees working in multiple states, or remote employees in states different from headquarters, create nexus questions. Your tax advisor determines the nexus; the payroll team processes per the determination.</li>
      </ul>

      <h3>United Kingdom</h3>
      <p>
        UK payroll operates under PAYE (Pay As You Earn):
      </p>
      <ul>
        <li><strong>RTI:</strong> Real Time Information submissions are required with each payroll run, not just monthly or quarterly. Late RTI submissions create HMRC penalties.</li>
        <li><strong>NI contributions:</strong> Both employee (12% on earnings between Primary Threshold and Upper Earnings Limit) and employer (13.8% on earnings above Secondary Threshold) NI are calculated per payroll run</li>
        <li><strong>Auto-enrolment:</strong> Eligible employees must be enrolled in a qualifying workplace pension. Contribution rates (minimum 3% employer, 5% employee) must be correct each payroll run</li>
        <li><strong>Statutory payments:</strong> SSP (Statutory Sick Pay), SMP/SPP (maternity/paternity pay) require separate calculation</li>
      </ul>

      <h3>Australia</h3>
      <p>
        Australian payroll compliance centres on:
      </p>
      <ul>
        <li><strong>STP Phase 2:</strong> Single Touch Payroll Phase 2 requires reporting gross salary, tax withheld, and superannuation each pay period directly to the ATO</li>
        <li><strong>Superannuation:</strong> The superannuation guarantee rate is 12% (from July 2025). Super must be paid quarterly (or per your payroll schedule if more frequent) to the employee&rsquo;s nominated fund</li>
        <li><strong>PAYG withholding:</strong> Tax withheld from employee wages must be remitted to the ATO, typically monthly or quarterly depending on your withholding amount</li>
        <li><strong>Award rates:</strong> Many Australian employees are covered by modern awards that set minimum pay rates, penalty rates and allowances. Payroll processing must account for the correct award classification</li>
      </ul>

      <h2>What Does Outsourced Payroll Cost?</h2>

      <h3>United States</h3>
      <p>
        Per-employee-per-month pricing is most common in the US market:
      </p>
      <ul>
        <li><strong>DIY software (Gusto, QuickBooks Payroll, Rippling):</strong> $6–$12/employee/month for the software alone, plus your time</li>
        <li><strong>Local payroll bureau or bookkeeper:</strong> $15–$30/employee/month</li>
        <li><strong>Offshore outsourced payroll team:</strong> $4–$10/employee/month for processing, excluding software subscription costs</li>
        <li><strong>Full-service payroll with tax filing:</strong> $25–$50/employee/month from large providers (ADP, Paychex) all-in</li>
      </ul>
      <p>
        Minimum monthly fees typically apply — a team that only processes payroll for 5 employees may not be worth the onboarding overhead. Most offshore payroll arrangements make economic sense at 10+ employees or where the owner is spending meaningful time on payroll each month.
      </p>

      <h3>United Kingdom</h3>
      <p>
        UK payroll bureaus typically price by employee band:
      </p>
      <ul>
        <li><strong>1–10 employees:</strong> £50–£100/month</li>
        <li><strong>11–25 employees:</strong> £100–£200/month</li>
        <li><strong>26–50 employees:</strong> £200–£400/month</li>
        <li><strong>Offshore support:</strong> 40–60% less than comparable UK bureau rates</li>
      </ul>

      <h3>Australia</h3>
      <p>
        Australian payroll outsourcing is often bundled with bookkeeping:
      </p>
      <ul>
        <li><strong>Standalone payroll (1–15 employees):</strong> A$150–A$400/month</li>
        <li><strong>Bundled with bookkeeping:</strong> A$500–A$1,200/month depending on scope</li>
        <li><strong>Offshore support:</strong> 40–60% less than comparable Australian rates</li>
      </ul>

      <h2>The Questions That Actually Come Up Before Outsourcing Payroll</h2>
      <p>
        These are the questions from real onboarding conversations, accounting forums, and discussions on Reddit&rsquo;s r/smallbusiness, r/Accounting, and r/AusFinance:
      </p>

      <h3>&ldquo;What happens if payroll runs late?&rdquo;</h3>
      <p>
        Establish a service-level agreement before you start. Typically: timesheets or payroll data due to the payroll team by a defined cutoff (e.g. by noon on Thursday for a Friday pay day); payroll prepared and sent for review by end of day Thursday; approved and submitted by 9am Friday. Late timesheets cascade into late payroll. The SLA should specify what happens when data arrives late, and the payroll team should flag late data immediately rather than absorbing the delay silently.
      </p>

      <h3>&ldquo;Do they have access to our bank account?&rdquo;</h3>
      <p>
        No. This is a firm line. The payroll team prepares the payroll run and the payment file. An authorized person inside your business — typically the owner, CFO, or controller — reviews the pre-run summary and initiates or approves the actual payment. Bank account access, direct-deposit authorization, and payment execution stay with you.
      </p>

      <h3>&ldquo;Can they handle equity compensation / RSUs / stock options?&rdquo;</h3>
      <p>
        Vesting schedules, RSU taxation, and option exercises are beyond standard payroll processing scope. The tax treatment of equity compensation (W-2 supplemental income in the US, employment income in the UK, employee share schemes in Australia) requires a tax advisor to determine the correct withholding. Once the tax advisor determines how to handle it, the payroll team can process the withholding correctly. Your equity platform (Carta, Shareworks, etc.) should generate the supplemental pay event for the payroll team to process.
      </p>

      <h3>&ldquo;What if we have employees in multiple states?&rdquo; (US)</h3>
      <p>
        Multi-state payroll is common and straightforward to process once the tax advisor determines which states have nexus and what the withholding requirements are. The payroll team processes per those determinations. The nexus analysis — deciding whether remote employees in other states create a tax obligation — is your tax advisor&rsquo;s call, not the payroll team&rsquo;s.
      </p>

      <h3>&ldquo;What about contractor payments?&rdquo;</h3>
      <p>
        Contractor payments (1099 vendors in the US, limited company invoices in the UK, ABN holders in Australia) are handled differently from payroll. Whether they belong in accounts payable or payroll depends on how they&rsquo;re categorized. Determining whether someone is a contractor or an employee — and the tax and legal implications — is your employment attorney&rsquo;s or tax advisor&rsquo;s decision.
      </p>

      <h3>&ldquo;What&rsquo;s the most common mistake in the handoff?&rdquo;</h3>
      <p>
        Three common ones: (1) Giving the payroll team full submission authority with no internal review — payroll should always have a reviewer who confirms headcount and hours before runs are submitted. (2) Not defining a timesheet cutoff, so late data is the norm rather than the exception. (3) Not reconciling the payroll GL entries against the payroll register monthly — differences accumulate quietly until they become material.
      </p>

      <h2>What to Confirm Before You Start</h2>
      <ul>
        <li>Which payroll software is the team working inside — yours, or theirs?</li>
        <li>Who has bank account access and payment authorization? (should be you)</li>
        <li>What is the timesheet/data submission cutoff?</li>
        <li>What is the review step before submission?</li>
        <li>Who handles payroll tax filings — the payroll team, your accountant, or the software automatically?</li>
        <li>How are payroll GL entries reconciled, and how frequently?</li>
        <li>What is the process for new hires, terminations, and changes mid-period?</li>
      </ul>

      <div className="mt-8 p-6 bg-input rounded-xl border border-border/70">
        <p className="font-semibold text-primary mb-3">Relevant services</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/services/payroll/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Payroll Processing</Link>
          <Link href="/services/accounting/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounting Services</Link>
          <Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">U.S. Market</Link>
          <Link href="/markets/united-kingdom" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">UK Market</Link>
          <Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Australia Market</Link>
          <Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">QuickBooks</Link>
          <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Xero</Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
