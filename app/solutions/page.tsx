import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { solutions } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Service Solutions',
  description:
    'Explore our flexible engagement models and service packages designed for growing businesses.',
  path: '/solutions',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
]);

export default function SolutionsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Flexible Engagement"
        title="Service Solutions for Every Business Stage"
        description="Choose the engagement model that fits your needs. From back-office support to dedicated teams, we deliver exceptional results."
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
        subtitle="Solutions Overview"
        title="Choose Your Engagement Model"
        items={solutions}
        baseUrl="/solutions"
        columns={3}
        variant="default"
      />

      <section className="w-full py-8 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted leading-relaxed">
            Not sure which of these fits? See{' '}
            <Link href="/resources/guides/choosing-an-engagement-model" className="text-primary font-medium hover:underline">
              a side-by-side comparison of all four models
            </Link>{' '}
            and a decision framework for matching one to your situation.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Find the Right Solution?"
        description="Let us help you choose the perfect engagement model for your business."
        cta={{
          text: 'Get Started Today',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
