import { Metadata } from 'next';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { technologies } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Technology & Systems',
  description:
    'We integrate with QuickBooks, Xero, NetSuite, Sage, and custom accounting systems.',
  path: '/technology',
});

const techFAQs = [
  {
    question: 'What accounting software do you support?',
    answer:
      'We support all major accounting platforms including QuickBooks Online, Xero, NetSuite, Sage, and custom ERP systems. We can integrate with virtually any accounting tool.',
  },
  {
    question: 'Can you migrate our data to a new system?',
    answer:
      'Yes, we have extensive experience with data migrations. We ensure clean, accurate data transfers with minimal disruption to your operations.',
  },
  {
    question: 'Do you provide training on accounting software?',
    answer:
      'Absolutely. We provide comprehensive training to your team on our accounting software and systems as part of our onboarding process.',
  },
  {
    question: 'Can you integrate with our custom systems?',
    answer:
      'Yes, we can integrate with custom systems, APIs, and legacy platforms. Our team can build custom integrations as needed.',
  },
  {
    question: 'How do you handle data security?',
    answer:
      'Every engagement is NDA-backed with access limited to the team members working on your account. We are actively working toward formal certification (SOC 2) and will share our current status directly if you ask.',
  },
  {
    question: 'What analytics and reporting tools do you use?',
    answer:
      'We use advanced business intelligence tools for real-time reporting, forecasting, and data-driven insights tailored to your business.',
  },
];

const faqSchema = generateFAQSchema(techFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
]);

export default function TechnologyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="Technology & Integration"
        title="Modern Systems & Integration"
        description="We work with the latest accounting software and can integrate with your existing systems. Advanced technology ensures efficiency and accuracy."
        cta={{
          text: 'Schedule Demo',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      <SectionGrid
        subtitle="Our Technology"
        title="Systems We Support"
        items={technologies}
        baseUrl="/technology"
        columns={3}
        variant="default"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                Modern Technology Stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
                Advanced Tools for Better Results
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                We leverage the latest accounting software, analytics platforms, and automation tools to deliver superior results for your business.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  'Cloud-based systems for 24/7 access',
                  'Real-time reporting and dashboards',
                  'Automated workflows and processes',
                  'Advanced analytics and forecasting',
                  'Enterprise-grade security',
                  'API integrations with your tools',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Technology Advantage</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">→</span>
                  <div>
                    <p className="font-semibold">Built on Established Cloud Platforms</p>
                    <p className="text-white/70 text-sm">QuickBooks Online, Xero, and other platforms with their own enterprise-grade infrastructure</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">→</span>
                  <div>
                    <p className="font-semibold">Real-Time Collaboration</p>
                    <p className="text-white/70 text-sm">Work together seamlessly</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">→</span>
                  <div>
                    <p className="font-semibold">Advanced Analytics</p>
                    <p className="text-white/70 text-sm">Data-driven insights</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">→</span>
                  <div>
                    <p className="font-semibold">Mobile Access</p>
                    <p className="text-white/70 text-sm">Manage finances anywhere</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection subtitle="Technology" items={techFAQs} columns={2} />

      <CTABanner
        title="Ready to Modernize Your Accounting?"
        description="Let us help you implement modern accounting systems and automation."
        cta={{
          text: 'Schedule a Demo',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
