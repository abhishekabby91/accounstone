import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Quality Assurance & Controls',
  description: 'Multi-level review, documented checklists, and reconciliation controls behind every close cycle.',
  path: '/delivery-framework/quality-assurance',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'How We Work', url: `${baseUrl}/delivery-framework/quality-assurance` },
  { name: 'Quality Assurance', url: `${baseUrl}/delivery-framework/quality-assurance` },
]);

export default function QAPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Delivery Framework"
        title="Quality Assurance & Internal Controls"
        description="Multi-level review, documented checklists, and reconciliation controls behind every close cycle — not a one-time quality claim."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">QA Framework</h2>
              <div className="space-y-4">
                {[
                  { title: 'Multi-Level Reviews', desc: 'All work reviewed by senior accountants before delivery' },
                  { title: 'Compliance Audits', desc: 'Regular compliance checks against standards and client requirements' },
                  { title: 'Error Tracking', desc: 'Systematic error logging and resolution procedures' },
                  { title: 'Performance Metrics', desc: 'Monthly KPI reviews and continuous improvement tracking' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-input rounded-lg border border-border">
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Quality Standards</h2>
              <div className="space-y-4">
                {[
                  { title: 'Thorough Review Process', desc: 'Every deliverable is reviewed before it reaches you, not just prepared once' },
                  { title: 'Compliance-Focused', desc: 'We track regulatory requirements across the markets we serve and flag concerns early' },
                  { title: 'On-Time Delivery Commitment', desc: 'Monthly reports and filing-ready documentation delivered on the schedule we agree to' },
                  { title: 'Continuous Training', desc: 'Ongoing professional development for all team members' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-accent/10 rounded-lg border border-accent">
                    <h4 className="font-bold text-accent mb-1">{item.title}</h4>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-7 md:py-10 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted leading-relaxed">
            Review structure matters most on{' '}
            <Link href="/services/audit-support" className="text-primary font-medium hover:underline">audit support</Link>{' '}
            and{' '}
            <Link href="/services/tax-preparation" className="text-primary font-medium hover:underline">tax preparation</Link>{' '}
            work, where final sign-off stays with your CPA, Enrolled Agent, or audit team. See how this fits into{' '}
            <Link href="/delivery-framework/onboarding" className="text-primary font-medium hover:underline">onboarding</Link>{' '}
            and{' '}
            <Link href="/delivery-framework/communication" className="text-primary font-medium hover:underline">ongoing communication</Link>.
          </p>
        </div>
      </section>

      <CTABanner
        title="Experience Premium Quality"
        description="Learn how our QA processes ensure accuracy and compliance."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
