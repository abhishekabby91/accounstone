import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Quality Assurance & Controls',
  description: 'Enterprise-grade quality assurance processes ensure accuracy, compliance, and continuous improvement.',
  path: '/delivery-framework/quality-assurance',
});

export default function QAPage() {
  return (
    <main>
      <PremiumHero
        subtitle="Delivery Framework"
        title="Quality Assurance & Internal Controls"
        description="We maintain enterprise-grade quality standards through rigorous review processes, compliance audits, and continuous improvement."
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
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
                  { title: '99.5% Accuracy Rate', desc: 'Industry-leading accuracy in all accounting work' },
                  { title: 'Zero Compliance Failures', desc: 'Perfect compliance record across all markets' },
                  { title: 'On-Time Delivery', desc: '100% on-time delivery of monthly reports and filings' },
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
