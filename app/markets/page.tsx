import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';
import { markets } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Industries & Markets',
  description:
    'Specialized accounting services for technology, healthcare, e-commerce, manufacturing, and more.',
  path: '/markets',
});

export default function MarketsPage() {
  return (
    <main>
      <PremiumHero
        subtitle="Industry Expertise"
        title="Specialized Solutions for Your Industry"
        description="We bring deep expertise across multiple industries. Our team understands the unique accounting challenges and opportunities in your sector."
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
        title="Industry-Specific Expertise"
        items={markets}
        baseUrl="/markets"
        columns={3}
        variant="default"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Your Industry. Our Expertise.
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              No matter your industry, we have accountants with specialized knowledge and experience. We understand the regulatory requirements, operational challenges, and growth opportunities unique to your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <div className="text-4xl">🎯</div>
              <h3 className="font-bold text-lg text-primary">Specialized Knowledge</h3>
              <p className="text-muted text-sm">Deep expertise in industry-specific accounting practices and compliance.</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">📊</div>
              <h3 className="font-bold text-lg text-primary">Operational Insights</h3>
              <p className="text-muted text-sm">Strategic guidance based on our experience working with similar businesses.</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">✓</div>
              <h3 className="font-bold text-lg text-primary">Regulatory Compliance</h3>
              <p className="text-muted text-sm">Stay compliant with industry-specific regulations and reporting requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Talk About Your Industry"
        description="Connect with one of our industry specialists to discuss your unique accounting needs."
        cta={{
          text: 'Schedule a Call',
          href: '/contact',
        }}
        background="accent"
      />
    </main>
  );
}
