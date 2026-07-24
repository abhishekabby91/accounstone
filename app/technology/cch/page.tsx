import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'CCH Axcess Tax Software Solutions',
  description: 'Expert CCH tax and accounting software setup, integration, and support for comprehensive tax compliance.',
  path: '/technology/cch',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'CCH Axcess', url: `${baseUrl}/technology/cch` },
]);

export default function CCHPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Tax & Accounting Software"
        title="CCH Axcess Solutions"
        description="Expert CCH Axcess integration and support for tax preparation, accounting, and compliance management."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">CCH Axcess</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              CCH Axcess Expertise
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              CCH Axcess is the leading integrated tax, accounting, and compliance software. We provide expert setup, optimization, and ongoing support for efficient tax preparation and financial reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our CCH Services</h3>
              <ul className="space-y-3">
                {['CCH setup and configuration', 'Tax return preparation', 'Accounting and bookkeeping', 'Compliance management', 'Financial reporting', 'Multi-entity support'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose CCH</h3>
              <ul className="space-y-3">
                {['Integrated tax and accounting', 'Comprehensive compliance tools', 'Multi-state capability', 'Advanced reporting', 'Document management', 'Professional resources'].map((item, i) => (
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

      <CTABanner title="Ready to Optimize Your CCH Operations?" description="Let our CCH experts support your tax and accounting practice." cta={{ text: 'Get Started', href: '/contact' }} background="primary" />
    </main>
  );
}
