import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Data Security & Protection',
  description: 'Enterprise-grade security with ISO 27001, SOC 2 Type II compliance, and advanced encryption protecting your financial data.',
  path: '/data-security',
});

export default function DataSecurityPage() {
  return (
    <main>
      <PremiumHero
        subtitle="Trust & Compliance"
        title="Enterprise-Grade Data Security"
        description="ISO 27001 certified infrastructure with SOC 2 Type II compliance, advanced encryption, and continuous security monitoring."
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Security Certifications</h2>
              {[
                { cert: 'ISO 27001', desc: 'Information Security Management System certification' },
                { cert: 'SOC 2 Type II', desc: 'Service Organization Control audit and compliance' },
                { cert: 'GDPR Compliant', desc: 'Full General Data Protection Regulation compliance' },
                { cert: 'Data Residency Options', desc: 'Choose US, UK, or Australia data centers' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold text-primary">{item.cert}</h4>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Security Measures</h2>
              {[
                { measure: 'End-to-End Encryption', desc: 'All data encrypted in transit and at rest' },
                { measure: '256-Bit AES Encryption', desc: 'Military-grade encryption standards' },
                { measure: 'Multi-Factor Authentication', desc: 'MFA required for all system access' },
                { measure: 'Regular Security Audits', desc: 'Third-party security assessments quarterly' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-primary">{item.measure}</h4>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-input p-8 rounded-lg border-2 border-border">
            <h2 className="text-2xl font-bold text-primary mb-4">Access Control</h2>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Role-based access control with granular permissions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Automatic session timeouts and activity logging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>IP whitelisting and geo-location restrictions available</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Comprehensive audit trails for all data access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Automated backup and disaster recovery protocols</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title="Your Data is Secure with Accounstone"
        description="Learn more about our security infrastructure and compliance certifications."
        cta={{
          text: 'Schedule Security Briefing',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
