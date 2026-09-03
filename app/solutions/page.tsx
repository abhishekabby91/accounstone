import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { solutions } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Engagement Models & Solutions',
  description:
    'Four ways to add accounting capacity — staff augmentation, a dedicated team, offshore support and back office — and how each one is structured.',
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
        title="Engagement Models for Every Stage of a Firm"
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

      <InquirySection source="/solutions" title="Talk to Us About How You Want to Engage" lead="A free consultation, and a call that costs nothing. Tell us whether you need people, a function taken off you, or a team of your own, and we will say which fits." />

      <CTABanner
        title="Ready to Find the Right Solution?"
        description="Tell us where the capacity is short and we will suggest the engagement model that fits."
        cta={{
          text: 'Get Started Today',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
