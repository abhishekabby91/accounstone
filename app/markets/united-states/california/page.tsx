import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import InquiryTrigger from '@/components/inquiry-trigger';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/markets/united-states/california';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Accounting for California',
  description:
    'Bookkeeping and accounting for California businesses — CDTFA economic nexus tracking, FTB coordination, and a high-compliance operating environment.',
  path: PATH,
});

const overview =
  "California has one of the most layered compliance environments of any state — sales and use tax is administered separately by the CDTFA, income tax by the FTB, and payroll by the EDD, each with its own rules and deadlines. On top of that, California's economic nexus threshold for out-of-state and online sellers is a meaningful revenue level, meaning growing businesses can trigger new obligations without realizing it. California's high labor costs also make the in-house-vs-outsourced bookkeeping math more favorable to outsourcing than in most states, since local bookkeeper salaries run high relative to the rest of the country.";

const benefits = [
  'Sales tax tracking structured around CDTFA requirements and economic nexus thresholds',
  'Bookkeeping organized to support FTB income tax filings prepared by your CPA',
  'Payroll bookkeeping aligned with EDD reporting requirements',
  'Support for California\'s common entity types, including LLCs subject to the state\'s annual LLC fee structure',
  'Experience with California-concentrated industries: technology/SaaS, e-commerce, and professional services',
  'A cost structure that make sense against California\'s high in-house bookkeeper salary market',
];

const faqs = [
  {
    question: 'What is the CDTFA and why does it matter for my bookkeeping?',
    answer:
      "The California Department of Tax and Fee Administration (CDTFA) administers sales and use tax in California, separately from income tax. We structure your sales tax tracking around CDTFA requirements, including economic nexus thresholds for growing businesses.",
  },
  {
    question: 'Do you coordinate with the FTB (Franchise Tax Board) for income tax?',
    answer:
      "We keep your books organized and ready for your CPA to prepare FTB income tax filings — we support the bookkeeping foundation, and your CPA handles the actual tax filing and professional judgment.",
  },
  {
    question: 'Is outsourced bookkeeping actually worth it in California specifically?',
    answer:
      "California has some of the highest in-house bookkeeper and accountant salaries in the country, which shifts the cost comparison further in favor of outsourcing than in most states — though the right answer always depends on your specific volume and complexity.",
  },
  {
    question: 'Do you support California LLCs and their annual fee structure?',
    answer:
      "Yes, we're familiar with California's LLC fee structure and keep bookkeeping organized to support the related filings your CPA prepares.",
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Accounting Services for California Businesses',
  description: overview,
  slug: 'united-states/california',
  basePath: '/markets/',
  areaServed: ['US'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United States', url: `${baseUrl}/markets/united-states` },
  { name: 'California', url: `${baseUrl}${PATH}` },
]);

export default function CaliforniaPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="California Businesses"
        title="Accounting & Bookkeeping Built for California"
        description="CDTFA sales tax tracking, FTB-ready books, and a cost structure that makes sense against California's high labor market."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View U.S. Services', href: '/markets/united-states' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/markets" className="inline-block py-1.5 hover:text-primary transition-colors">Markets</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/markets/united-states" className="inline-block py-1.5 hover:text-primary transition-colors">United States</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">California</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Makes California Different</h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Support</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Built Around California Specifics</h2>
            </>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-lg border-2 border-border transition-colors hover:border-primary/40 h-full" source="/markets/united-states/california" region="united-states">
                  <Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" />
                  <p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{b}</p>
                </InquiryTrigger></li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection subtitle="California Questions" items={faqs} columns={2} />

      <InquirySection region="united-states" source="/markets/united-states/california" title="Talk to Us About Your California Clients" lead="A free consultation, and a call that costs nothing. CDTFA filings and FTB coordination make the record-keeping heavier; tell us where it is slipping." />

      <CTABanner
        title="Running a Business in California?"
        description="Let's talk about your specific tax and compliance situation."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
