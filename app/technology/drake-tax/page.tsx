import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Drake Tax Software Solutions',
  description: 'Expert Drake Tax software integration and support for efficient tax preparation and filing.',
  path: '/technology/drake-tax',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'Drake Tax', url: `${baseUrl}/technology/drake-tax` },
]);

export default function DrakeTaxPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Drake Tax Expertise
            </h2>
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
                    <span className="text-accent font-bold">✓</span>
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
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Streamline Tax Preparation?" description="Let our Drake Tax experts support your tax operations." cta={{ text: 'Get Started', href: '/contact' }} background="primary" />
    </main>
  );
}
