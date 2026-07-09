import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Client Onboarding Process',
  description: 'Our streamlined onboarding process ensures smooth transition and immediate productivity. Learn how we integrate with your team.',
  path: '/delivery-framework/onboarding',
});

export default function OnboardingPage() {
  const onboardingFAQs = [
    {
      question: 'How long does the onboarding process take?',
      answer: 'Typically 2-4 weeks depending on complexity. We work with your team to establish workflows, access systems, and complete knowledge transfer.',
    },
    {
      question: 'What documentation do we need to provide?',
      answer: 'We need your accounting chart of accounts, current software access, compliance requirements, and any existing documentation or procedures.',
    },
    {
      question: 'Can onboarding happen while we continue normal operations?',
      answer: 'Yes, our onboarding is designed to be non-disruptive. We work parallel to your existing processes and seamlessly take over.',
    },
  ];

  return (
    <main>
      <PremiumHero
        subtitle="Delivery Framework"
        title="Seamless Client Onboarding"
        description="Our proven onboarding process ensures quick ramp-up, clear documentation, and immediate value delivery. We integrate with your team from day one."
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary">Our Onboarding Approach</h2>
            
            {[
              {
                step: '1',
                title: 'Discovery & Planning',
                desc: 'We conduct detailed discovery calls to understand your business, current processes, compliance requirements, and success metrics.',
              },
              {
                step: '2',
                title: 'System Access Setup',
                desc: 'Establish secure access to QuickBooks, Xero, banking platforms, and any other systems. We follow your security protocols.',
              },
              {
                step: '3',
                title: 'Process Documentation',
                desc: 'Document your current workflows, accounting procedures, month-end close process, and reporting requirements.',
              },
              {
                step: '4',
                title: 'Team Kickoff',
                desc: 'Meet your dedicated team, establish communication protocols, set expectations, and define escalation procedures.',
              },
              {
                step: '5',
                title: 'Knowledge Transfer',
                desc: 'Comprehensive training on your specific accounting requirements, compliance needs, and internal controls.',
              },
              {
                step: '6',
                title: 'Soft Launch',
                desc: 'Begin work on non-critical tasks while maintaining your existing processes. Build confidence and team dynamics.',
              },
              {
                step: '7',
                title: 'Full Transition',
                desc: 'Seamless handoff of all accounting responsibilities. Ongoing support and optimization phase begins.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 pb-8 border-b border-border">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Onboarding" items={onboardingFAQs} columns={2} />

      <CTABanner
        title="Ready to Get Started?"
        description="Schedule a discovery call to learn about our onboarding process and timeline."
        cta={{
          text: 'Schedule Discovery Call',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
