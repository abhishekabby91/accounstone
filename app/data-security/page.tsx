import { Metadata } from 'next';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Data Security & Protection',
  description:
    'How Accounstone handles client financial data — NDA-backed engagements, security-conscious practices, and an honest account of our current certification status.',
  path: '/data-security',
});

export default function DataSecurityPage() {
  return (
    <main>
      <PremiumHero
        subtitle="Trust & Compliance"
        title="How We Handle Your Data"
        description="An honest account of our current security practices — not a list of certifications we don't yet hold."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="bg-input border-2 border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Where We Stand Today</h2>
            <p className="text-muted leading-relaxed mb-4">
              We're a growing company, and we'd rather be direct about our current
              security posture than list certifications we don't hold yet. Here's
              where we actually stand:
            </p>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <Check className="text-accent w-5 h-5" aria-hidden="true" />
                <span>Every client engagement is NDA-backed before any data is shared</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent w-5 h-5" aria-hidden="true" />
                <span>Your financial data stays in your own QuickBooks Online, Xero, or other accounting software — not a separate proprietary system you'd lose access to</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent w-5 h-5" aria-hidden="true" />
                <span>We are actively working toward formal certification (SOC 2) — we'll tell you exactly where we are in that process if you ask, rather than claiming it's already complete</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent w-5 h-5" aria-hidden="true" />
                <span>Access to client systems is limited to the team members actually working on your account</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">What This Means Practically</h2>
              <p className="text-muted leading-relaxed">
                Because we work inside your own accounting platform rather than a
                separate system, your data benefits from that platform's own
                security infrastructure (QuickBooks Online and Xero both invest
                heavily in this) in addition to our access controls and
                confidentiality practices.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Questions We Expect</h2>
              <p className="text-muted leading-relaxed">
                If you're evaluating us for vendor security review, we'd expect
                you to ask about our certification timeline, access control
                practices, and incident response plan specifically. We'll answer
                directly rather than pointing to generic marketing language.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have Specific Security Questions?"
        description="Ask us directly — we'd rather answer honestly than guess what you want to hear."
        cta={{
          text: 'Schedule Security Discussion',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
