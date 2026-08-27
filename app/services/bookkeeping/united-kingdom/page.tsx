import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ServiceDepth from '@/components/service-depth';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/bookkeeping/united-kingdom';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Bookkeeping for UK Businesses | Accounstone',
  description: 'UK bookkeeping support for businesses and accounting firms, with reconciliations, VAT records, MTD-ready digital records, month-end work and Xero support.',
  path: PATH,
});

const overview = "UK bookkeeping has a few practical realities that a generic bookkeeping process can miss. VAT records need to follow the business's registered scheme, digital records need to support Making Tax Digital requirements where applicable, and month-end work should leave the accountant with records that can be reviewed rather than rebuilt. We support recurring preparation work inside your existing process, while your accountant or internal team keeps review, approval and tax decisions.";

const benefits = [
  'Transaction processing, coding and account maintenance',
  'Bank and card reconciliations with exceptions clearly flagged',
  'VAT record preparation aligned with your registered VAT scheme',
  'Digital bookkeeping workflows that support MTD requirements where applicable',
  'Month-end schedules and records prepared for accountant review',
  'Xero and other supported accounting-platform workflows',
];

const delegated = [
  'Recurring transaction processing and categorisation',
  'Bank and card reconciliations',
  'Supporting schedules and account maintenance',
  'VAT-related bookkeeping and exception lists',
  'Month-end preparation and first-level checks',
];

const retained = [
  'Final review and approval of the books',
  'Tax advice and accounting judgements',
  'VAT scheme decisions and unusual treatment decisions',
  'Client-facing advice and statutory filing responsibility',
  'Control over access, approvals and business decisions',
];

const process = [
  { title: 'Understand the existing UK workflow', text: 'We start with the accounting system, chart of accounts, VAT setup, reconciliation status, month-end routine and the way your accountant currently reviews the work.' },
  { title: 'Separate preparation from judgement', text: 'Repeatable bookkeeping work can be delegated, while tax advice, unusual VAT treatment, approvals and professional judgement remain with the appropriate person.' },
  { title: 'Work from the documented routine', text: 'The delivery team follows the agreed process inside the authorised system and flags missing information or exceptions instead of making assumptions.' },
  { title: 'Leave a review-ready handoff', text: 'Completed reconciliations, schedules and exception items are organised so the reviewer can see what is finished, what needs attention and what questions remain.' },
];

const faqs = [
  { question: 'Can you support Making Tax Digital workflows?', answer: 'Yes. We can maintain the underlying digital bookkeeping records and workflows needed to support MTD requirements where they apply. Your accountant or authorised agent remains responsible for the relevant advice and submissions.' },
  { question: 'Can you help with VAT records?', answer: 'Yes. We can organise transaction records, VAT coding, reconciliations and exception lists around your registered VAT scheme so the records are easier for your accountant to review.' },
  { question: 'Do you work with Xero?', answer: 'Yes. Xero is one of the platforms we support. The important part is fitting the bookkeeping routine to your existing chart of accounts, approvals, reporting and month-end process rather than changing software unnecessarily.' },
  { question: 'Can you catch up bookkeeping that is behind?', answer: 'Yes. Catch-up work can be separated from the recurring monthly process so the team can address historic unreconciled items without allowing the current month to fall behind again.' },
  { question: 'Will our accountant still review the work?', answer: 'Yes. The engagement can be structured so the delivery team prepares defined work while your accountant or internal reviewer retains final review, approval and professional judgement.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Bookkeeping Services for UK Businesses', description: overview, slug: 'bookkeeping/united-kingdom', basePath: '/services/', areaServed: ['GB'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Bookkeeping — United Kingdom', url: `${baseUrl}${PATH}` },
]);

export default function BookkeepingUKPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero subtitle="Bookkeeping for UK Businesses" title="Outsourced Bookkeeping for UK Businesses" description="Practical bookkeeping support built around your existing records, VAT workflow, month-end routine and review process." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services">Services</Link></li><li aria-hidden="true">/</li><li>Bookkeeping</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">United Kingdom</li></ol></nav>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><Reveal className="max-w-4xl mx-auto space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">Books That Are Easier to Review</h2></div><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal></section>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-16"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">The Work Behind a Well-Kept Set of UK Books</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{benefits.map((item, i) => <Reveal key={i}><li className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-xl border border-border/70"><Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" /><p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{item}</p></li></Reveal>)}</ul></div></section>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="text-3xl font-bold text-primary mt-3 mb-6">Repeatable preparation work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="text-3xl font-bold mt-3 mb-6">Review, judgement and approvals</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal></div></section>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Workflow</span><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">A UK Bookkeeping Process Your Accountant Can Review</h2></></Reveal><ol className="grid grid-cols-1 md:grid-cols-2 gap-6">{process.map((step, i) => <Reveal key={step.title}><li className="bg-white rounded-2xl border border-border/70 p-7"><div className="text-sm font-bold text-accent mb-3">0{i + 1}</div><h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3><p className="text-muted leading-7">{step.text}</p></li></Reveal>)}</ol></div></section>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="text-xl md:text-2xl font-bold text-primary">Useful next steps</h2></></Reveal>
        <div className="mb-6 p-4 bg-input rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/bookkeeping/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors">🇺🇸 United States</Link>
          <Link href="/services/bookkeeping/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors">🇦🇺 Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Market Overview</Link><Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Xero</Link><Link href="/services/tax-preparation/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Tax Preparation</Link><Link href="/services/audit-support/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Audit Support</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link></div></div></section>
      <ServiceDepth serviceSlug="bookkeeping" regionSlug="united-kingdom" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <CTABanner title="Where Is Your UK Bookkeeping Process Getting Stuck?" description="Tell us whether the pressure is in reconciliations, VAT records, catch-up work or month-end review." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
