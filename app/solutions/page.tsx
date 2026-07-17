import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';
import { solutions } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Service Solutions',
  description:
    'Explore our flexible engagement models and service packages designed for growing businesses.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <main>
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
