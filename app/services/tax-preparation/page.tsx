import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Tax Preparation Support for CPA Firms',
  description: 'Outsourced tax preparation support for CPA firms: document organization, data entry, workpapers, schedules, and return preparation within your existing workflow, with final review and filing kept with your licensed professional.',
  path: '/services/tax-preparation',
});

const faqs = [
  { question: 'What does outsourced tax preparation actually include?', answer: 'Tax preparation support can cover organizing source documents, entering data into the return, preparing supporting schedules and workpapers, reconciling figures to the underlying books, and preparing a return file for review. Tax advice, professional judgment, final sign-off, and filing remain with the appropriate licensed practitioner.' },
  { question: 'Who reviews and files the return?', answer: 'The appropriate licensed professional or authorized practitioner on the client or accounting firm side reviews the prepared work, makes judgment-based adjustments, signs where required, and handles filing or representation. The preparation team supports the workflow rather than replacing that professional responsibility.' },
  { question: 'Can the preparation team represent clients with tax authorities?', answer: 'Representation and professional tax advice remain with the appropriately authorized practitioner. The preparation team can organize documents, schedules, workpapers, and other preparation materials needed for the professional handling the matter.' },
  { question: 'Which tax software can the team work in?', answer: 'The team can work within the firm\'s established tax workflow, including platforms such as Drake Tax and CCH Axcess in the US. The exact software and tasks depend on the firm\'s licenses, process, return types, and review controls.' },
  { question: 'How can tax prep outsourcing help a CPA firm during busy season?', answer: 'It can move repeatable preparation work—document organization, data entry, schedules, workpapers, and other defined tasks—away from reviewers. That gives licensed staff more room for review, client questions, tax positions, exceptions, and other work that requires professional judgment.' },
  { question: 'What is a common mistake when outsourcing tax preparation?', answer: 'Starting preparation before the source-document checklist is complete. A defined intake checklist for the return type helps the preparation team identify missing information early and reduces avoidable back-and-forth during review.' },
  { question: 'What determines the cost of outsourced tax preparation?', answer: 'Scope, return type, complexity, number of schedules, software, documentation requirements, review process, and seasonal volume all affect cost. A useful proposal should be based on the actual preparation workflow rather than a generic per-return promise.' },
  { question: 'How does tax preparation differ between the US, UK, and Australia?', answer: 'The return types, tax rules, software, filing processes, and professional requirements differ by market. For that reason, preparation workflows should be built around the specific jurisdiction and the client firm\'s existing process rather than treating all tax preparation as one standardized workflow.' },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Tax Preparation', url: `${baseUrl}/services/tax-preparation` },
]);

const regionData = [
  { region: '🇺🇸 United States', returns: '1040, 1120, 1120-S, 1065 and other firm-specific return workflows', software: 'Drake Tax, CCH Axcess and other firm platforms', detail: 'Preparation support can include document organization, data entry, schedules, workpapers, reconciliation to the books, and review-ready return files.', link: '/services/tax-preparation/united-states', linkLabel: 'U.S. Tax Preparation' },
  { region: '🇬🇧 United Kingdom', returns: 'Self Assessment, Corporation Tax and other firm-specific workflows', software: 'The firm\'s established tax software and HMRC workflow', detail: 'The preparation process should follow the firm\'s existing review, authorization and filing procedures for UK returns and related work.', link: '/services/tax-preparation/united-kingdom', linkLabel: 'UK Tax Preparation' },
  { region: '🇦🇺 Australia', returns: 'Individual and business returns plus related preparation workflows', software: 'The firm\'s established tax software and ATO workflow', detail: 'Preparation support can be organized around document collection, return data, schedules, workpapers, reconciliations and the firm\'s review process.', link: '/services/tax-preparation/australia', linkLabel: 'Australian Tax Preparation' },
];

export default function TaxPreparationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Outsourced Tax Preparation"
        title="Tax Preparation Support That Fits Your Review Process"
        description="Move defined preparation work—documents, data entry, schedules and workpapers—into an organized support workflow while your licensed professionals retain review, judgment, sign-off and filing responsibilities."
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

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope boundary</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">Preparation work and professional judgment are different jobs</h2>
            <p className="text-lg text-muted leading-relaxed mt-4 max-w-4xl">A useful outsourcing model makes the handoff clear. The preparation team handles defined, repeatable work and produces organized files for review. Your licensed CPA, EA, tax adviser or other appropriately authorized professional retains the judgment, approvals, sign-off, filing and representation responsibilities that belong with them.</p>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="p-8 bg-input rounded-2xl border border-border/70 h-full">
                <h3 className="font-bold text-primary text-xl mb-5">Preparation support can include</h3>
                <ul className="space-y-3">
                  {['Source-document organization and checklists', 'Data entry and schedule preparation', 'Supporting workpapers and documentation', 'Reconciliation to the underlying books', 'Defined return preparation tasks', 'Multi-entity preparation support', 'Exception lists for reviewer follow-up', 'Review-ready return files within the firm\'s workflow'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground"><Check className="text-accent shrink-0 w-4 h-4 mt-0.5" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-8 bg-primary rounded-2xl text-white h-full">
                <h3 className="font-bold text-white text-xl mb-5">Stays with the appropriate professional</h3>
                <ul className="space-y-3">
                  {['Tax advice and planning', 'Professional judgment on tax positions', 'Final review and sign-off', 'Filing and submission decisions', 'Tax-authority representation', 'Amended-return decisions', 'Complex tax matters requiring professional judgment', 'Client advice and engagement responsibility'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/85"><Check className="text-white shrink-0 w-4 h-4 mt-0.5" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">The workflow</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">A better tax-prep handoff starts before the return is opened</h2>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              ['1', 'Intake', 'Confirm the return type, source documents, prior-year information, open questions and the firm\'s preparation checklist.'],
              ['2', 'Prepare', 'Complete the defined data-entry, schedules, workpapers and other preparation tasks inside the firm\'s established system.'],
              ['3', 'Flag', 'Document missing information, exceptions and items that need the reviewer\'s judgment rather than silently making unsupported assumptions.'],
              ['4', 'Review', 'Return the organized file to the firm for professional review, adjustments, sign-off and the next step in its filing workflow.'],
            ].map(([num, title, text], i) => (
              <Reveal key={num} delay={i * 0.06}><div className="p-6 bg-white rounded-2xl border border-border/70 h-full"><div className="text-sm font-bold text-accent mb-3">{num}</div><h3 className="font-bold text-primary mb-2">{title}</h3><p className="text-muted text-sm leading-6">{text}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="regions" className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal><><span className="text-sm font-semibold tracking-wide uppercase text-accent">By region</span><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">How the preparation workflow changes by market</h2></></Reveal>
          <div className="mt-10 space-y-5">
            {regionData.map((r, i) => (
              <Reveal key={i} delay={i * 0.07}><div className="p-7 bg-input rounded-2xl border border-border/70"><div className="flex flex-wrap items-start justify-between gap-4"><h3 className="font-bold text-primary text-xl">{r.region}</h3><Link href={r.link} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors">{r.linkLabel} <ArrowRight size={14} /></Link></div><div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm"><div><span className="font-semibold text-muted block mb-1">Typical scope</span><span className="text-foreground">{r.returns}</span></div><div><span className="font-semibold text-muted block mb-1">Software</span><span className="text-foreground">{r.software}</span></div><div><span className="font-semibold text-muted block mb-1">Workflow</span><span className="text-foreground">{r.detail}</span></div></div></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Tax Preparation Questions" items={faqs} columns={2} />

      <section className="w-full py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><h2 className="text-xl font-bold text-primary mb-4">Related resources</h2><div className="flex flex-wrap gap-3"><Link href="/resources/guides/staff-augmentation-tax-season-guide" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Tax-Season Staff Augmentation Guide</Link><Link href="/technology/drake-tax" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Drake Tax Support</Link><Link href="/technology/cch" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">CCH Axcess Support</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Staff Augmentation</Link></div></div></section>

      <CTABanner title="Where Is Tax Season Putting Pressure on Your Team?" description="Tell us which part of the preparation workflow is the bottleneck—documents, schedules, workpapers, review capacity, or volume—and we can scope practical support around it." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
