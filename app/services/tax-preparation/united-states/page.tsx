import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/tax-preparation/united-states';

export const metadata: Metadata = genMeta({
  title: 'U.S. Tax Preparation Support for CPA Firms',
  description: 'Tax preparation support for U.S. businesses and CPA firms, covering return preparation workflows, documentation, review handoff and tax-season capacity.',
  path: PATH,
});

const overview = 'U.S. tax preparation becomes difficult when return volume rises faster than the review team can handle it. We support preparation and documentation work under the review and sign-off of the appropriate tax professional. The goal is to move organized, reviewable work into your queue without taking final professional judgment or filing authority away from your CPA or Enrolled Agent.';

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
  { question: 'Do you file tax returns directly with the IRS?', answer: 'No. We support preparation and documentation, while final review, sign-off and filing remain with the appropriate licensed tax professional.' },
  { question: 'Can you help during tax-season capacity crunches?', answer: 'Yes. Defined preparation and documentation tasks can be moved into the delivery workflow so your licensed staff can spend more time on review and client-facing work.' },
  { question: 'What information should be ready before preparation starts?', answer: 'The exact list depends on the return, but organized source documents, prior-year information, trial balances or bookkeeping records and clear client questions generally make the preparation workflow easier to review.' },
  { question: 'What tax software do you support?', answer: 'We work with Drake Tax and CCH Axcess workflows where they are part of the client or CPA firm process.' },
  { question: 'Can you work from our existing tax-season checklist?', answer: 'Yes. Existing checklists, naming conventions, review notes and handoff procedures are useful during onboarding because they make the workflow specific to your firm.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Tax Preparation Support for U.S. Businesses', description: overview, slug: 'tax-preparation/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Tax Preparation', url: `${baseUrl}/services/tax-preparation` }, { name: 'United States', url: `${baseUrl}${PATH}` },
]);

export default function TaxPrepUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero subtitle="Tax Preparation Support for U.S. Businesses" title="U.S. Tax Preparation Support" description="Preparation and documentation support that fits your tax-season workflow while your licensed professional keeps final review and filing control." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="hover:text-primary">Services</Link></li><li aria-hidden="true">/</li><li><Link href="/services/tax-preparation" className="hover:text-primary">Tax Preparation</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">United States</li></ol></nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white"><Reveal className="max-w-4xl mx-auto space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Preparation Work That Reaches Review in Better Shape</h2></div><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">What Can Be Delegated</h2></></Reveal><ul className="grid grid-cols-1 md:grid-cols-2 gap-6">{preparation.map((item, i) => <Reveal key={i}><li className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border/70"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-7">{item}</span></li></Reveal>)}</ul></div></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Your team retains</span><h2 className="text-3xl font-bold text-primary mt-3 mb-6">Professional judgment and filing control</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-6">{item}</span></li>)}</ul></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Workflow</span><h2 className="text-3xl font-bold mt-3 mb-6">A practical tax-season handoff</h2><p className="text-white/85 leading-7">Start with your checklist and source-document process. Define who prepares, who reviews, what gets escalated and where completed work lives. Then use the same workflow across the files in scope.</p></></Reveal></div></section>

      <section className="w-full py-20 md:py-24 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-8">Connect tax preparation to the rest of the workflow</h2><div className="flex flex-wrap justify-center gap-3"><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/technology/drake-tax" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Drake Tax</Link><Link href="/technology/cch" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CCH Axcess</Link><Link href="/resources/guides/staff-augmentation-tax-season-guide" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Tax-Season Staff Augmentation</Link></div></div></section>

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <CTABanner title="Need More Tax-Season Capacity?" description="Tell us which preparation tasks are building up and where your review queue is slowing down." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
