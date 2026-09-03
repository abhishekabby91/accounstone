import { Metadata } from 'next';
import Link from 'next/link';
import { User, BarChart3, Zap, MessageSquare, TrendingUp, ClipboardList } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquiryTrigger from '@/components/inquiry-trigger';
import InquirySection from '@/components/inquiry-section';
import SectionHeading from '@/components/section-heading';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Communication & Support',
  description: 'How reporting, escalation and day-to-day contact are structured on an engagement, including who you speak to and how often updates arrive.',
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
          <SectionHeading eyebrow="Day to day" title="How Contact Actually Works on an Engagement" lead="Who you speak to, how often, and how quickly a question comes back." />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-12">
            {[
              { title: 'Dedicated Account Manager', desc: 'Single point of contact for all questions and issues', icon: User },
              { title: 'Weekly Status Updates', desc: 'Regular updates on project status and upcoming deliverables', icon: BarChart3 },
              { title: '24-Hour Response Time', desc: 'Quick turnaround on urgent questions and issues', icon: Zap },
              { title: 'Multiple Communication Channels', desc: 'Email, phone, Slack, Teams - choose what works for you', icon: MessageSquare },
              { title: 'Monthly Business Reviews', desc: 'Strategic reviews of performance, metrics, and improvements', icon: TrendingUp },
              { title: 'Transparent Reporting', desc: 'Detailed reports on work completed, metrics, and insights', icon: ClipboardList },
            ].map((item, i) => (
              <InquiryTrigger key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start p-3.5 sm:p-6 bg-input rounded-lg border border-border transition-colors hover:border-primary/40" source="/delivery-framework/communication" title="Talk to Us About How We Would Work Together">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent flex-shrink-0" aria-hidden="true" />
                {/* min-w-0: a flex item defaults to min-width:auto and will not
                    shrink below its longest word, which pushed this card past
                    the viewport at 320px in a two-column grid. */}
                <div className="w-full min-w-0 break-words">
                  <h3 className="font-bold text-primary text-sm sm:text-base mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                </div>
              </InquiryTrigger>
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

      <InquirySection
        compact
        source="/delivery-framework/communication"
        title="See How We Would Communicate With Your Team"
        lead="Tell us your review points, your time zones and who needs to hear what, and we will describe the reporting rhythm we would set up."
      />

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
