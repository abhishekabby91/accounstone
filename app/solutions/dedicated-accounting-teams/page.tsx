import { Metadata } from 'next';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'Dedicated Accounting Teams',
  description: 'Build dedicated accounting teams exclusively for your business, working inside your existing systems, with a dependable, long-term accounting partnership.',
  path: '/solutions/dedicated-accounting-teams',
});

const faqs = [
  {
    question: 'What is a dedicated accounting team?',
    answer: 'A dedicated accounting team is a group of experienced accounting professionals exclusively assigned to your business. They work as an extension of your team, handling all accounting and financial operations.',
  },
  {
    question: 'How large can a dedicated team be?',
    answer: 'Teams range from 1-2 professionals for smaller businesses to 10+ for larger enterprises. We customize team size based on your needs and budget.',
  },
  {
    question: 'Can we scale the team up or down?',
    answer: 'Absolutely. Your dedicated team scales with your business. Add resources during growth phases or reduce during slower periods with flexibility.',
  },
  {
    question: 'Who manages the dedicated team?',
    answer: 'Each dedicated team has a team lead/manager who reports directly to you and coordinates with your stakeholders. We handle HR, training, and performance management.',
  },
  {
    question: 'What is the typical cost?',
    answer: 'Costs vary based on team size, experience level, and location. Generally, dedicated teams provide better value than hiring equivalent onshore staff.',
  },
  {
    question: 'How long is the commitment?',
    answer: 'Dedicated teams typically have a 6-12 month initial commitment with flexibility to adjust team composition and size as needs evolve.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
  { name: 'Dedicated Accounting Teams', url: `${baseUrl}/solutions/dedicated-accounting-teams` },
]);

export default function DedicatedTeamsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Dedicated Teams"
        title="A Team Built Around Your Business"
        description="A dedicated accounting team of CPAs and accountants working inside your existing systems and approval process, structured around your workload rather than a fixed package."
        cta={{
          text: 'Build Your Team',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Reveal><h2 className="text-4xl font-bold text-primary">More Than Accounting - A True Partnership</h2></Reveal>
              <p className="text-lg text-muted leading-relaxed">A dedicated accounting team becomes an integral part of your organization. They understand your business deeply, anticipate your needs, and provide dependable accounting support that keeps pace with your growth.</p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Dedicated senior-level oversight and coordination',
                  'Deep understanding of your business',
                  'Recurring tax preparation support and deadline tracking',
                  'Real-time financial insights and reporting',
                  'Team lead accountability and coordination',
                  'Works inside your existing systems and approval process',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">Typical Team Composition</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold mb-1">Small Business (1-2)</div>
                  <p className="text-white/80 text-sm">Bookkeeper + Accountant or CPA</p>
                </div>
                <div>
                  <div className="font-bold mb-1">Mid-Size (3-5)</div>
                  <p className="text-white/80 text-sm">Manager + Accountants + Specialists</p>
                </div>
                <div>
                  <div className="font-bold mb-1">Enterprise (5+)</div>
                  <p className="text-white/80 text-sm">Senior Accounting Lead + Multi-specialist team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><h2 className="text-4xl font-bold text-primary text-center mb-12">Build Your Dedicated Team</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', desc: 'Understand your business and requirements' },
              { step: '2', title: 'Staffing', desc: 'Hire and prepare your dedicated team' },
              { step: '3', title: 'Integration', desc: 'Full onboarding and workflow setup' },
              { step: '4', title: 'Partnership', desc: 'Long-term strategic accounting support' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center space-y-3">
                <div className="text-4xl font-bold text-primary">{item.step}</div>
                <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Dedicated Teams" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Build Your Dedicated Team?"
        description="Let us assemble the right team of accounting professionals for your business."
        cta={{
          text: 'Start Team Building',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
