import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'Drake Tax Software Solutions',
  description: 'Expert Drake Tax software integration and support for efficient tax preparation and filing.',
  path: '/technology/drake-tax',
});

const faqs = [
  {
    question: 'Do you support multi-state tax returns in Drake Tax?',
    answer: 'Yes, we work within Drake Tax to prepare multi-state return documentation, coordinating with your CPA or Enrolled Agent for final review and filing.',
  },
  {
    question: 'Can you help during tax season capacity crunches?',
    answer: 'Yes, this is one of the most common ways firms use our Drake Tax support — absorbing data entry and preparation workload during the January-April peak.',
  },
  {
    question: 'Can you import prior-year data or migrate from another tax software?',
    answer: 'Yes, we support data organization and migration planning when firms move to Drake Tax from another platform.',
  },
  {
    question: 'Do you handle e-filing submission directly?',
    answer: 'We prepare returns and documentation to be e-filing ready within Drake Tax; final review, sign-off, and submission is handled by your licensed CPA or Enrolled Agent.',
  },
];

const faqSchema = generateFAQSchema(faqs);


const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'Drake Tax', url: `${baseUrl}/technology/drake-tax` },
]);

export default function DrakeTaxPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="Tax Preparation Platform"
        title="Drake Tax Software Solutions"
        description="Expert Drake Tax integration and support for efficient tax preparation, filing, and compliance management."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Drake Tax Software</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Drake Tax Expertise
            </h2></Reveal>
            <p className="text-lg text-muted leading-relaxed">
              Drake is the leading tax preparation software for accounting professionals. Our team brings expertise in Drake setup, optimization, and support for efficient tax return preparation and filing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Drake Tax Services</h3>
              <ul className="space-y-3">
                {['Drake setup and configuration', 'Tax return preparation', 'E-filing and compliance', 'Multi-state tax returns', 'Tax planning and optimization', 'Quarterly estimated tax calculations'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose Drake</h3>
              <ul className="space-y-3">
                {['Efficient tax preparation workflow', 'Built-in compliance checks', 'Multi-state capability', 'IRS e-file integration', 'Data security', 'Professional support'].map((item, i) => (
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

      <FAQSection subtitle="Drake Tax Questions" items={faqs} columns={2} />


      


      <CTABanner title="Ready to Streamline Tax Preparation?" description="Let our Drake Tax experts support your tax operations." cta={{ text: 'Get Started', href: '/contact' }} background="primary" />
    </main>
  );
}
