import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'MYOB Accounting Software Solutions',
  description: 'Expert MYOB accounting software support for Australian and New Zealand businesses. Setup, optimization, and ongoing support.',
  path: '/technology/myob',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'MYOB', url: `${baseUrl}/technology/myob` },
]);

export default function MYOBPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              MYOB Accounting Expertise
            </h2>
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
                    <span className="text-accent font-bold">✓</span>
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
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Optimize Your MYOB Accounting?" description="Let our MYOB experts support your Australian or NZ business." cta={{ text: 'Get Started', href: '/contact' }} background="primary" />
    </main>
  );
}
