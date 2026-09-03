import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquiryTrigger from '@/components/inquiry-trigger';
import InquirySection from '@/components/inquiry-section';
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
              <h2 className="font-serif text-3xl font-bold text-primary">QA Framework</h2>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                {[
                  { title: 'Multi-Level Reviews', desc: 'All work reviewed by senior accountants before delivery' },
                  { title: 'Compliance Audits', desc: 'Regular compliance checks against standards and client requirements' },
                  { title: 'Error Tracking', desc: 'Systematic error logging and resolution procedures' },
                  { title: 'Performance Metrics', desc: 'Monthly KPI reviews and continuous improvement tracking' },
                ].map((item, i) => (
                  <InquiryTrigger key={i} className="p-3 sm:p-4 bg-input rounded-lg border border-border transition-colors hover:border-primary/40" source="/delivery-framework/quality-assurance" title="Talk to Us About Review and Quality">
                    <h4 className="font-bold text-primary text-sm sm:text-base mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                  </InquiryTrigger>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-primary">Quality Standards</h2>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                {[
                  { title: 'Thorough Review Process', desc: 'Every deliverable is reviewed before it reaches you, not just prepared once' },
                  { title: 'Compliance-Focused', desc: 'We track regulatory requirements across the markets we serve and flag concerns early' },
                  { title: 'On-Time Delivery Commitment', desc: 'Monthly reports and filing-ready documentation delivered on the schedule we agree to' },
                  { title: 'Continuous Training', desc: 'Ongoing professional development for all team members' },
                ].map((item, i) => (
                  <div key={i} className="p-3 sm:p-4 bg-accent/10 rounded-lg border border-accent">
                    <h4 className="font-bold text-accent text-sm sm:text-base mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted line-clamp-3 sm:line-clamp-none">{item.desc}</p>
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
            <Link href="/services/audit-support/united-states" className="text-primary font-medium hover:underline">audit support</Link>{' '}
            and{' '}
            <Link href="/services/tax-preparation/united-states" className="text-primary font-medium hover:underline">tax preparation</Link>{' '}
            work, where final sign-off stays with your CPA, Enrolled Agent, or audit team. See how this fits into{' '}
            <Link href="/delivery-framework/onboarding" className="text-primary font-medium hover:underline">onboarding</Link>{' '}
            and{' '}
            <Link href="/delivery-framework/communication" className="text-primary font-medium hover:underline">ongoing communication</Link>.
          </p>
        </div>
      </section>

      <InquirySection
        compact
        source="/delivery-framework/quality-assurance"
        title="Ask How Review Would Work on Your Files"
        lead="Tell us what a finished file has to look like before your reviewer signs it, and we will describe the checkpoints we would build to get it there."
      />

      <CTABanner
        title="Want to See How Review Works in Practice?"
        description="Talk through what our QA process would look like on your engagement."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
