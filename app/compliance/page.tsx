import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Compliance & Regulatory Standards',
  description: 'Full compliance with accounting standards, tax regulations, and industry requirements across US, UK, and Australia.',
  path: '/compliance',
});

export default function CompliancePage() {
  return (
    <main>
      <PremiumHero
        subtitle="Trust & Compliance"
        title="Regulatory Compliance & Standards"
        description="Full adherence to GAAP, IFRS, tax regulations, and industry-specific compliance requirements."
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'United States',
                items: ['GAAP Compliance', 'Federal Tax Requirements', 'State Tax Compliance', 'SOX Requirements (large firms)'],
              },
              {
                title: 'United Kingdom',
                items: ['IFRS Compliance', 'Companies House Reporting', 'VAT Regulations', 'FCA Requirements'],
              },
              {
                title: 'Australia',
                items: ['IFRS Compliance', 'ATO Requirements', 'ASIC Standards', 'Superannuation Rules'],
              },
            ].map((region, i) => (
              <div key={i} className="p-6 bg-input rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">{region.title}</h3>
                <ul className="space-y-2">
                  {region.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted">
                      <span className="text-accent font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold">Our Approach to Compliance</h2>
            <p>As a growing company, here is where we honestly stand today:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="font-bold">✓</span>
                <span>NDA-backed engagements for every client relationship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">✓</span>
                <span>Continuous monitoring of regulatory changes across the markets we serve</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">✓</span>
                <span>Team training on relevant compliance requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">✓</span>
                <span>Actively working toward formal certifications such as SOC 2 — ask us for our current status</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title="Compliance You Can Trust"
        description="Learn about our compliance certifications and regulatory expertise."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="accent"
      />
    </main>
  );
}
