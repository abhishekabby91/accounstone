import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Communication & Support',
  description: 'Transparent, proactive communication with dedicated account managers and multiple support channels.',
  path: '/delivery-framework/communication',
});

export default function CommunicationPage() {
  return (
    <main>
      <PremiumHero
        subtitle="Delivery Framework"
        title="Transparent Communication & Support"
        description="Dedicated account managers, multiple communication channels, and proactive reporting ensure you're always informed."
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Dedicated Account Manager', desc: 'Single point of contact for all questions and issues', icon: '👤' },
              { title: 'Weekly Status Updates', desc: 'Regular updates on project status and upcoming deliverables', icon: '📊' },
              { title: '24-Hour Response Time', desc: 'Quick turnaround on urgent questions and issues', icon: '⚡' },
              { title: 'Multiple Communication Channels', desc: 'Email, phone, Slack, Teams - choose what works for you', icon: '💬' },
              { title: 'Monthly Business Reviews', desc: 'Strategic reviews of performance, metrics, and improvements', icon: '📈' },
              { title: 'Transparent Reporting', desc: 'Detailed reports on work completed, metrics, and insights', icon: '📋' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-6 bg-input rounded-lg border border-border">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Get Started with Accounstone"
        description="Experience our commitment to communication and transparency."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
