import { Metadata } from 'next';
import Link from 'next/link';
import { User, BarChart3, Zap, MessageSquare, TrendingUp, ClipboardList } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Communication & Support',
  description: 'Transparent, proactive communication with dedicated account managers and multiple support channels.',
  path: '/delivery-framework/communication',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'How We Work', url: `${baseUrl}/delivery-framework/communication` },
  { name: 'Communication', url: `${baseUrl}/delivery-framework/communication` },
]);

export default function CommunicationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Delivery Framework"
        title="Transparent Communication & Support"
        description="Dedicated account managers, multiple communication channels, and proactive reporting ensure you're always informed."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Dedicated Account Manager', desc: 'Single point of contact for all questions and issues', icon: User },
              { title: 'Weekly Status Updates', desc: 'Regular updates on project status and upcoming deliverables', icon: BarChart3 },
              { title: '24-Hour Response Time', desc: 'Quick turnaround on urgent questions and issues', icon: Zap },
              { title: 'Multiple Communication Channels', desc: 'Email, phone, Slack, Teams - choose what works for you', icon: MessageSquare },
              { title: 'Monthly Business Reviews', desc: 'Strategic reviews of performance, metrics, and improvements', icon: TrendingUp },
              { title: 'Transparent Reporting', desc: 'Detailed reports on work completed, metrics, and insights', icon: ClipboardList },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-6 bg-input rounded-lg border border-border">
                <item.icon className="w-8 h-8 text-accent flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-7 md:py-10 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted leading-relaxed">
            For{' '}
            <Link href="/industries/cpa-firms" className="text-primary font-medium hover:underline">CPA firms</Link>{' '}
            specifically, communication is usually the difference between delegated work reducing review time and simply moving it elsewhere. See how this connects to{' '}
            <Link href="/delivery-framework/quality-assurance" className="text-primary font-medium hover:underline">review and quality control</Link>{' '}
            and{' '}
            <Link href="/delivery-framework/onboarding" className="text-primary font-medium hover:underline">how onboarding sets communication expectations</Link>{' '}
            from the start.
          </p>
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
