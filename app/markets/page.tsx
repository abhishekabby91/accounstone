import { Metadata } from 'next';
import { Check, Target, BarChart3 } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { markets } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Markets We Serve',
  description:
    'Outsourced accounting and bookkeeping support for businesses in the United States, United Kingdom, and Australia, with market-specific tax and compliance knowledge.',
  path: '/markets',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
]);

export default function MarketsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Where We Work"
        title="Markets We Serve"
        description="Accounting support built around the specific tax and compliance realities of the United States, United Kingdom, and Australia."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      <SectionGrid
        subtitle="Our Markets"
        title="Country-Specific Expertise"
        items={markets}
        baseUrl="/markets"
        columns={3}
        variant="default"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Your Market. Our Expertise.
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Tax rules, filing conventions, and compliance requirements differ meaningfully between the US, UK, and Australia. We structure your bookkeeping and reporting around the specific market you operate in, rather than a one-size-fits-all template.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <Target className="w-9 h-9 text-accent" aria-hidden="true" />
              <h3 className="font-bold text-lg text-primary">Country-Specific Knowledge</h3>
              <p className="text-muted text-sm">GAAP, IFRS, VAT, GST, and other market-specific accounting and tax conventions.</p>
            </div>
            <div className="space-y-3">
              <BarChart3 className="w-9 h-9 text-accent" aria-hidden="true" />
              <h3 className="font-bold text-lg text-primary">Cross-Border Support</h3>
              <p className="text-muted text-sm">Support for businesses operating across more than one of these markets.</p>
            </div>
            <div className="space-y-3">
              <Check className="w-9 h-9 text-accent" aria-hidden="true" />
              <h3 className="font-bold text-lg text-primary">Regulatory Awareness</h3>
              <p className="text-muted text-sm">Bookkeeping structured to stay aligned with each market's filing and reporting requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Talk About Your Market"
        description="Connect with our team to discuss your specific country and compliance needs."
        cta={{
          text: 'Schedule a Call',
          href: '/contact',
        }}
        background="accent"
      />
    </main>
  );
}
