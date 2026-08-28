import { Metadata } from 'next';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { industries } from '@/lib/data';

export const metadata: Metadata = genMeta({
  title: 'Industries We Serve',
  description:
    'Specialized outsourced accounting and finance support for CPA firms, technology companies, healthcare providers, e-commerce businesses, real estate, and professional services firms.',
  path: '/industries',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
]);

export default function IndustriesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
            Industries
          </span>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
            Industries We Serve
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Accounting needs differ by industry. Our team applies sector-specific
            knowledge across CPA firms, technology, healthcare, e-commerce, real
            estate, and professional services businesses.
          </p>
        </div>
      </section>

      <SectionGrid
        subtitle="Explore by Industry"
        title="Specialized Support for Your Sector"
        description="Select your industry to see how we tailor our accounting and finance support."
        items={industries}
        baseUrl="/industries"
        columns={3}
        variant="default"
      />

      <InquirySection source="/industries" title="Talk to Us About Your Sector" lead="A free consultation, and a call that costs nothing. Different sectors break in different places; tell us which one you work in and what keeps recurring." />

      <CTABanner
        title="Don't See Your Industry?"
        description="We work with growing businesses across many sectors. Reach out and we'll discuss your specific needs."
        cta={{ text: 'Contact Us', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
