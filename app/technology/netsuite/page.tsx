import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'NetSuite ERP Solutions & Support',
  description:
    'Expert NetSuite implementation, optimization, and support for enterprise accounting and financial operations.',
  path: '/technology/netsuite',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'NetSuite', url: `${baseUrl}/technology/netsuite` },
]);

export default function NetSuitePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Enterprise ERP Platform"
        title="NetSuite ERP Solutions"
        description="Expert NetSuite implementation and support for complex organizations with advanced accounting and financial operations."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">NetSuite ERP</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              NetSuite Enterprise Expertise
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              NetSuite is the leading cloud-based ERP solution for mid-market and enterprise organizations. Our team brings expertise in NetSuite implementation, configuration, optimization, and ongoing support for complex financial operations including multi-entity, multi-currency, and multi-subsidiary scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our NetSuite Services</h3>
              <ul className="space-y-3">
                {[
                  'NetSuite implementation and deployment',
                  'Multi-subsidiary and multi-entity setup',
                  'Advanced financial consolidation',
                  'Revenue recognition and compliance',
                  'Intercompany transactions',
                  'Period close and reporting automation',
                  'Custom workflow configuration',
                  'Integration with external systems',
                  'NetSuite optimization and tuning',
                  'Ongoing support and administration',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose NetSuite</h3>
              <ul className="space-y-3">
                {[
                  'Comprehensive cloud ERP solution',
                  'Multi-subsidiary and multi-currency',
                  'Advanced financial consolidation',
                  'Real-time financial visibility',
                  'Industry-specific functionality',
                  'Advanced reporting and analytics',
                  'Integration with global operations',
                  'Automated period close workflows',
                  'Enterprise-grade security',
                  'SaaS platform with continuous updates',
                ].map((item, i) => (
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

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Services We Deliver in NetSuite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Accounting Services', slug: 'accounting' },
              { name: 'Financial Reporting', slug: 'accounting' },
              { name: 'CFO Support', slug: 'cfo-support' },
              { name: 'Bookkeeping', slug: 'bookkeeping' },
              { name: 'Tax Preparation', slug: 'tax-preparation' },
              { name: 'Audit Support', slug: 'audit-support' },
            ].map((service, i) => (
              <Link
                key={i}
                href={`/services/${service.slug}`}
                className="p-6 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors group"
              >
                <h3 className="font-bold text-primary text-lg group-hover:text-primary-light transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Implement or Optimize NetSuite?"
        description="Let our NetSuite experts help you succeed with your enterprise ERP."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
