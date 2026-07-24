import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';
import { solutions } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Service Solutions',
  description:
    'Flexible engagement models for CPA firms and finance teams — white-labeled outsourcing, dedicated staff, and back-office support. Also available for growing businesses.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <main>
      <PremiumHero
        subtitle="Flexible Engagement"
        title="Engagement Models Built for CPA Firms"
        description="From white-labeled back-office support to dedicated accounting teams, choose the model that plugs into your firm's workflow. Also available for growing businesses that need full-service support."
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