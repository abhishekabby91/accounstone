import { Metadata } from 'next';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'MYOB Accounting Software Solutions',
  description: 'Expert MYOB accounting software support for Australian and New Zealand businesses. Setup, optimization, and ongoing support.',
  path: '/technology/myob',
});

const faqs = [
  {
    question: 'Do you support Single Touch Payroll (STP) reporting for Australian businesses?',
    answer: "Yes, we work within MYOB's STP-compliant payroll reporting for Australian businesses, keeping reporting aligned with ATO requirements.",
  },
  {
    question: 'Can you help prepare BAS (Business Activity Statements)?',
    answer: 'We can prepare the underlying bookkeeping and GST reconciliation MYOB needs for BAS preparation, working alongside your accountant or tax agent for lodgment.',
  },
  {
    question: 'Do you support both MYOB Essentials and MYOB AccountRight?',
    answer: 'Yes, we work with both editions, adapting to whichever tier your business is currently using.',
  },
  {
    question: 'Do you work with New Zealand businesses too, or only Australian?',
    answer: 'We support both Australian and New Zealand MYOB users, adjusting for the relevant GST and reporting requirements in each country.',
  },
];

const faqSchema = generateFAQSchema(faqs);


const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'MYOB', url: `${baseUrl}/technology/myob` },
]);

export default function MYOBPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="ANZ Accounting Platform"
        title="MYOB Accounting Solutions"
        description="Expert MYOB accounting support for Australian and New Zealand businesses including setup, optimization, and ongoing operations."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">MYOB Software</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              MYOB Accounting Expertise
            </h2></Reveal>
            <p className="text-lg text-muted leading-relaxed">
              MYOB is the leading accounting software for Australian and New Zealand businesses. We provide expert MYOB setup, optimization, and ongoing support including GST, payroll, and tax integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our MYOB Services</h3>
              <ul className="space-y-3">
                {['MYOB setup and configuration', 'Bookkeeping and accounting', 'GST management and BAS', 'Payroll integration', 'ATO compliance', 'Bank reconciliation', 'Financial reporting', 'Multi-entity accounting'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose MYOB</h3>
              <ul className="space-y-3">
                {['Built for Australian/NZ compliance', 'Integrated GST and tax', 'Payroll and PAYG ready', 'ATO e-lodgement', 'Mobile accessibility', 'Cloud-based operations', 'Local support', 'Industry expertise'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection subtitle="MYOB Questions" items={faqs} columns={2} />


      


      <CTABanner title="Ready to Optimize Your MYOB Accounting?" description="Let our MYOB experts support your Australian or NZ business." cta={{ text: 'Get Started', href: '/contact' }} background="primary" />
    </main>
  );
}
