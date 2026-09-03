import { Metadata } from 'next';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquiryTrigger from '@/components/inquiry-trigger';
import InquirySection from '@/components/inquiry-section';
import SectionHeading from '@/components/section-heading';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Compliance & Regulatory Standards',
  description: 'How Accounstone approaches accounting standards, tax regulations, and industry compliance requirements across the US, UK, and Australia.',
  path: '/compliance',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Compliance', url: `${baseUrl}/compliance` },
]);

export default function CompliancePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Trust & Compliance"
        title="Regulatory Compliance & Standards"
        description="Accounting work structured around GAAP, IFRS, tax regulations, and the compliance requirements relevant to your industry and location."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div>
            <SectionHeading eyebrow="By market" title="What Each Market Actually Requires" lead="The obligations differ enough that a single compliance statement would describe none of them accurately." />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'United States',
                items: ['GAAP Compliance', 'Federal Tax Requirements', 'State Tax Compliance', 'SOX Requirements (large firms)'],
              },
              {
                title: 'United Kingdom',
                items: ['IFRS Compliance', 'Companies House Reporting', 'VAT Regulations', 'Anti-Money Laundering (AML) Requirements'],
              },
              {
                title: 'Australia',
                items: ['IFRS Compliance', 'ATO Requirements', 'GST and BAS Reporting Standards', 'Superannuation Rules'],
              },
            ].map((region, i) => (
              <InquiryTrigger key={i} className="p-6 bg-input rounded-lg border border-border transition-colors hover:border-primary/40" source={`/compliance — ${region.title}`} title="Talk to Us About Your Compliance Cycle">
                <h3 className="text-xl font-bold text-primary mb-4">{region.title}</h3>
                <ul className="space-y-2">
                  {region.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted">
                      <Check className="text-accent w-5 h-5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </InquiryTrigger>
            ))}
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold">Our Approach to Compliance</h2>
            <p>As a growing company, here is where we honestly stand today:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5" aria-hidden="true" />
                <span>NDA-backed engagements for every client relationship</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5" aria-hidden="true" />
                <span>Continuous monitoring of regulatory changes across the markets we serve</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5" aria-hidden="true" />
                <span>Team training on relevant compliance requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5" aria-hidden="true" />
                <span>Actively working toward formal certifications such as SOC 2 — ask us for our current status</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <InquirySection
        compact
        source="/compliance"
        title="Ask Us How We Handle Your Requirements"
        lead="Tell us which obligations and reporting cycles govern your work, and we will explain how the engagement would be structured around them."
      />

      <CTABanner
        title="Compliance You Can Trust"
        description="Talk to us about your specific compliance requirements and how we structure work around them."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="accent"
      />
    </main>
  );
}
