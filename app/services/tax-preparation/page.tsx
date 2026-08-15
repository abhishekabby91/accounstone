import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Tax Return Preparation — US, UK & Australia',
  description: 'What outsourced tax preparation covers, how it differs by region, which software is used, what stays with your licensed CPA or tax agent, and the real questions practices ask before outsourcing prep work.',
  path: '/services/tax-preparation',
});

const faqs = [
  { question: 'What does outsourced tax preparation actually include?', answer: 'Tax preparation support covers gathering and organizing source documents, entering data into the return, preparing supporting schedules, reconciling figures against the underlying books, and producing a return file ready for the licensed CPA or Enrolled Agent to review, sign, and file. It does not include tax advice, tax positions, or the final professional sign-off — those require a licensed practitioner.' },
  { question: 'Who signs and files the return?', answer: 'The licensed CPA, Enrolled Agent (in the US), Chartered Accountant or Tax Adviser (in the UK), or Registered Tax Agent (in Australia). The preparation team produces the work; the licensed professional reviews it, makes any adjustments, and signs. This is a legal requirement, not an option.' },
  { question: 'Can you represent clients with the IRS, HMRC, or ATO?', answer: 'No. IRS representation requires a licensed CPA, Enrolled Agent, or attorney under Circular 230. HMRC matters require an authorized agent. ATO correspondence and lodgment requires a Registered Tax Agent. The preparation team handles the document preparation and workflow; professional representation stays with your licensed advisor.' },
  { question: 'Which software do you use for tax preparation?', answer: 'In the US: Drake Tax and CCH Axcess are most common for CPA firm work. In the UK: HMRC\'s own portal, Taxcalc, or GoSimpleTax depending on the firm. In Australia: Xero Tax, ATO\'s Online services for agents, or CCH iFirm. We work in the firm\'s existing platform rather than a separate one.' },
  { question: 'How does tax prep outsourcing help CPA firms specifically?', answer: 'Tax season creates a capacity mismatch: the same firm that handles steady work in October needs significantly more preparation capacity in March. Outsourced preparation handles the data entry, schedule preparation, and documentation work so your licensed staff can focus on review, tax positions, client questions, and the judgment calls that require their credentials.' },
  { question: 'What is the most common mistake in outsourced tax prep?', answer: 'Sending incomplete source documents and expecting the prep team to know what is missing. A checklist of required documents per return type — W-2s, 1099s, K-1s, depreciation schedules, prior-year return — should be completed before the prep team starts. Incomplete inputs produce incomplete returns that come back for revision.' },
  { question: 'What does outsourced tax preparation cost for a CPA firm?', answer: 'Per-return pricing is common for CPA firm outsourcing: roughly $50–$150 per individual return, $150–$400 per business return, depending on complexity. Offshore preparation costs 50–70% less than equivalent onshore preparation staff, which is why most multi-preparer CPA firms have explored it at some point during tax season.' },
  { question: 'What is different about tax prep outsourcing in the UK vs. US?', answer: 'US: the volume is higher (more returns, more schedules), the software ecosystem is more complex (Drake, CCH, UltraTax), and the filing deadline pattern is more concentrated (April 15 plus extensions). UK: Self Assessment deadlines run January 31 (online), and Corporation Tax follows the accounting period; the volume pattern is different but the capacity crunch during busy periods is the same. Australia: tax returns follow the financial year ending June 30, with lodgment programs running July through May of the following year.' },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Tax Preparation', url: `${baseUrl}/services/tax-preparation` },
]);

const regionData = [
  { region: '🇺🇸 United States', returns: 'Individual (1040), Corporate (1120), S-Corp (1120-S), Partnership (1065), Non-profit (990)', software: 'Drake Tax, CCH Axcess, UltraTax', deadline: 'April 15 (individual), March 15 (pass-throughs)', link: '/services/tax-preparation/united-states', linkLabel: 'U.S. Tax Preparation' },
  { region: '🇬🇧 United Kingdom', returns: 'Self Assessment (SA100), Corporation Tax (CT600), Partnership returns, VAT returns', software: 'Taxcalc, GoSimpleTax, HMRC portal', deadline: 'Jan 31 (Self Assessment online), 12 months after period end (CT600)', link: '/services/tax-preparation/united-kingdom', linkLabel: 'UK Tax Preparation' },
  { region: '🇦🇺 Australia', returns: 'Individual tax returns (ITR), Company tax returns, Trust/SMSF returns, BAS', software: 'Xero Tax, CCH iFirm, ATO portal', deadline: 'Oct 31 (self-lodgers), lodgment program for agents extends to May', link: '/services/tax-preparation/australia', linkLabel: 'Australian Tax Preparation' },
];

export default function TaxPreparationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Outsourced Tax Preparation"
        title="What Outsourced Tax Prep Actually Covers"
        description="Scope, software, regional differences, and what stays with your licensed CPA or tax agent — a practical guide for accounting firms and businesses considering outsourced preparation."
        cta={{ text: 'Talk Through Your Tax Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'View Region-Specific Pages', href: '#regions' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Tax Preparation</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope boundary</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance mt-2">Preparation vs. advice — where the line sits</h2>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="p-8 bg-input rounded-2xl border border-border/70 h-full">
                <h3 className="font-bold text-primary text-xl mb-5">Can be outsourced to preparation team</h3>
                <ul className="space-y-3">
                  {['Source document organization and checklist', 'Data entry and schedule preparation', 'Reconciliation against the underlying books', 'Supporting workpapers and documentation', 'Estimated quarterly tax calculations', 'Multi-entity and multi-state preparation support', 'Return file prepared for reviewer sign-off', 'Drake Tax / CCH Axcess workflow support'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="text-accent shrink-0 w-4 h-4 mt-0.5" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-8 bg-primary rounded-2xl text-white h-full">
                <h3 className="font-bold text-white text-xl mb-5">Stays with your licensed professional</h3>
                <ul className="space-y-3">
                  {['Tax advice and planning', 'Taking positions on return items', 'Final review and professional sign-off', 'Filing submission (e-file or paper)', 'IRS / HMRC / ATO representation', 'Amended return decisions', 'Nexus analysis and multi-state filing decisions', 'Estate, trust, and complex tax matters'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/85">
                      <Check className="text-white shrink-0 w-4 h-4 mt-0.5" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="regions" className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">By region</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance mt-2">How tax preparation differs by market</h2>
          </></Reveal>
          <div className="mt-10 space-y-5">
            {regionData.map((r, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="p-7 bg-white rounded-2xl border border-border/70">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="font-bold text-primary text-xl">{r.region}</h3>
                    <Link href={r.link} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors">
                      {r.linkLabel} <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div><span className="font-semibold text-muted block mb-1">Return types</span><span className="text-foreground">{r.returns}</span></div>
                    <div><span className="font-semibold text-muted block mb-1">Common software</span><span className="text-foreground">{r.software}</span></div>
                    <div><span className="font-semibold text-muted block mb-1">Key deadlines</span><span className="text-foreground">{r.deadline}</span></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Tax Preparation Questions" items={faqs} columns={2} />

      <section className="w-full py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-primary mb-4">Related resources</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/resources/guides/staff-augmentation-tax-season-guide" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Tax-Season Staff Augmentation Guide</Link>
            <Link href="/technology/drake-tax" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Drake Tax Support</Link>
            <Link href="/technology/cch" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">CCH Axcess Support</Link>
            <Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">CPA Firms</Link>
            <Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Staff Augmentation</Link>
          </div>
        </div>
      </section>

      <CTABanner title="Where Is Tax Season Putting Pressure on Your Team?" description="Tell us which part of the preparation workflow is the bottleneck — documents, data entry, multi-state complexity, or simply volume — and we can scope practical support around it." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
