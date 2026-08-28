import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'Offshore Accounting Support',
  description: 'Scale your accounting operations with an experienced offshore team. Recurring support for bookkeeping, accounting operations, payroll and back-office work, inside your existing systems.',
  path: '/solutions/offshore-accounting-support',
});

const faqs = [
  {
    question: 'What is offshore accounting support?',
    answer: 'Offshore accounting support involves delegating accounting tasks to qualified professionals in other countries. We handle bookkeeping, accounting, payroll, AP/AR, and other financial operations while maintaining strict data security and quality standards.',
  },
  {
    question: 'How is data security maintained with offshore teams?',
    answer: 'Every engagement is NDA-backed, with system access limited to the team members actually working on your account. We are actively working toward formal certification (SOC 2) and will share our exact current status if you ask.',
  },
  {
    question: 'What time zone coverage do you provide?',
    answer: 'Our service delivery team operates from our Global Delivery Center in New Delhi, India, and structures working hours to align with US, UK, and Australian business hours depending on the client.',
  },
  {
    question: 'What is the typical cost savings?',
    answer: 'That depends on your transaction volume, the systems in use and how much of the work you want to keep in-house. We would rather scope the actual workflow with you than answer it in the abstract.',
  },
  {
    question: 'How long does onboarding take?',
    answer: 'It depends on how complex your books and systems are — a straightforward setup with clean records moves faster than one that needs cleanup first. A more useful first step than a fixed timeline is a discovery conversation about your current process, so we can give you a realistic estimate for your specific situation rather than a generic number.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
  { name: 'Offshore Accounting Support', url: `${baseUrl}/solutions/offshore-accounting-support` },
]);

export default function OffshoreSolutionPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Offshore Accounting"
        title="An Offshore Team Inside Your Existing Systems"
        description="Experienced accounting professionals handling the recurring preparation work, under access you grant and can revoke. NDA-backed engagements, and honest communication about our security certification timeline."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Reveal><h2 className="text-4xl font-bold text-primary">Capacity That Does Not Come With a Hiring Cycle</h2></Reveal>
              <p className="text-lg text-muted leading-relaxed">An offshore team absorbs the recurring preparation work without a recruitment process, an onboarding ramp or a desk. The work stays in your systems, to your templates, with your people keeping review and every decision that carries judgement.</p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Experienced accounting professionals',
                  'NDA-backed engagements on every project',
                  '24-hour response commitment',
                  'Works inside your existing accounting system and chart of accounts',
                  'Dedicated account management',
                  'Flexible scaling up or down',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">Key Benefits</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold mb-2">24 hrs</div>
                  <p className="text-white/80">Response Time Commitment</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-white/80">NDA-Backed Engagements</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Flexible</div>
                  <p className="text-white/80">Scope That Scales With You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><h2 className="text-4xl font-bold text-primary text-center mb-12">How It Works</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Consultation', desc: 'Understand your needs and requirements' },
              { step: '2', title: 'Team Assembly', desc: 'Build a dedicated offshore team for you' },
              { step: '3', title: 'Onboarding', desc: 'Complete training and integration setup' },
              { step: '4', title: 'Operations', desc: 'Begin daily accounting operations' },
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

      <section className="w-full py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><h2 className="text-xl font-bold text-primary mb-4">Related Accounstone solutions</h2><div className="flex flex-wrap gap-3"><Link href="/solutions/staff-augmentation" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Staff Augmentation <ArrowRight size={14} /></Link><Link href="/solutions/back-office-support" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Back Office Support <ArrowRight size={14} /></Link><Link href="/resources/guides/choosing-an-engagement-model" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium">Compare All 4 Models <ArrowRight size={14} /></Link></div></div></section>

      <FAQSection subtitle="Offshore Support" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Scale Your Accounting Operations?"
        description="Let our offshore team carry the preparation while your people stay on review and client work."
        cta={{
          text: 'Start Your Offshore Team',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
