import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ServiceDepth from '@/components/service-depth';
import RegionalContext from '@/components/regional-context';
import RegionFlag from '@/components/region-flag';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/tax-preparation/united-states';

export const metadata: Metadata = genMeta({
  title: 'U.S. Tax Preparation Support for CPA Firms',
  description: 'Tax preparation support for U.S. businesses and CPA firms, covering return preparation, documentation, review handoff and tax-season capacity.',
  path: PATH,
});

const overview = 'Tax season rarely feels difficult because one return is impossible. The pressure comes from having many returns at different stages, incomplete client information, recurring follow-ups and a limited number of people who can perform final review. We support defined preparation and documentation work so licensed tax professionals can spend more of their time on review, judgment and client questions.';

const preparation = [
  'Return preparation assistance and supporting schedules',
  'Organization of source documents and missing-information lists',
  'Data entry and reconciliation against the underlying books',
  'Documentation prepared for reviewer follow-up',
  'Support for recurring and peak-season preparation workflows',
  'Drake Tax and CCH Axcess workflow support where applicable',
];

const retained = [
  'Final professional review and sign-off',
  'Tax advice and positions requiring professional judgment',
  'Final filing authority and client approval',
  'Client-specific decisions that require your licensed professional',
];

const faqs = [
  { question: 'Do you file tax returns directly with the IRS?', answer: 'No. We support preparation and documentation. Final review, sign-off and filing remain with the appropriate licensed tax professional.' },
  { question: 'What if our review team is the bottleneck?', answer: 'That is often where additional preparation capacity can help. The goal is to move organized, complete work into review so the reviewer is dealing with tax questions and exceptions rather than basic missing information.' },
  { question: 'Can you help when client documents are incomplete?', answer: 'We can organize the documents received, maintain missing-information lists and prepare the file for follow-up. Your firm still decides what information is required and how the client is contacted.' },
  { question: 'What information should be ready before preparation starts?', answer: 'The exact list depends on the return. Prior-year information, organized source documents, bookkeeping records or trial balances and known client questions generally make the preparation handoff more efficient.' },
  { question: 'Can you work from our existing tax-season checklist?', answer: 'Yes. Your checklist, naming conventions, review notes and escalation rules are useful because the best workflow is usually the one your reviewers already understand.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Tax Preparation Support for U.S. Businesses', description: overview, slug: 'tax-preparation/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Tax Preparation — United States', url: `${baseUrl}${PATH}` },
]);

export default function TaxPrepUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero subtitle="Tax Preparation Support for U.S. Businesses" title="U.S. Tax Preparation Support" description="Preparation and documentation support that fits your tax-season workflow while your licensed professional keeps final review and filing control." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="inline-block py-1.5 hover:text-primary">Services</Link></li><li aria-hidden="true">/</li><li>Tax Preparation</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">United States</li></ol></nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><Reveal className="max-w-4xl mx-auto space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Give Your Reviewer Better Work to Review</h2></div><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Preparation Work That Can Move Out of the Reviewer's Queue</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{preparation.map((item, i) => <Reveal key={i}><li className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Your team retains</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Professional judgment and filing control</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-6">{item}</span></li>)}</ul></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Workflow</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Build around the way your firm already reviews</h2><p className="text-white/85 leading-7">Start with your checklist, source-document process and review notes. Define what is prepared, what gets escalated and what a reviewer expects to see before a file moves forward. That makes the handoff easier to repeat across the season.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-6">Connect tax preparation to the rest of the workflow</h2>
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/tax-preparation/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-kingdom" decorative />United Kingdom</Link>
          <Link href="/services/tax-preparation/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="australia" decorative />Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Market Overview</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/technology/drake-tax" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Drake Tax</Link><Link href="/technology/cch" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CCH Axcess</Link><Link href="/resources/guides/staff-augmentation-tax-season-guide" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Tax-Season Staff Augmentation</Link></div></div></section>

      <RegionalContext serviceSlug="tax-preparation" regionSlug="united-states" />

      <ServiceDepth serviceSlug="tax-preparation" regionSlug="united-states" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <CTABanner title="Where Is Tax Season Putting Pressure on Your Team?" description="Tell us which preparation tasks are building up and whether the real bottleneck is documents, preparation or review." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
