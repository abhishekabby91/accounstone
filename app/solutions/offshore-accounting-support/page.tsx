import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'Offshore Accounting Support',
  description: 'Scale your accounting operations with experienced offshore professionals. Cost-effective support for bookkeeping, accounting, payroll, and financial operations.',
  path: '/solutions/offshore-accounting-support',
});

const faqs = [
  {
    question: 'What is offshore accounting support?',
    answer: 'Offshore accounting support involves delegating accounting tasks to qualified professionals in other countries. We handle bookkeeping, accounting, payroll, AP/AR, and other financial operations while maintaining strict data security and quality standards.',
  },
  {
    question: 'How is data security maintained with offshore teams?',
    answer: 'We maintain ISO 27001 certification, SOC 2 Type II compliance, secure VPN connections, encrypted data transfer, and strict access controls. All team members sign NDAs and undergo background checks.',
  },
  {
    question: 'What time zone coverage do you provide?',
    answer: 'Our offshore teams span multiple time zones including US, UK, and Australia regions, providing extended coverage and faster turnaround times on deliverables.',
  },
  {
    question: 'What is the typical cost savings?',
    answer: 'Offshore accounting support typically provides 30-50% cost savings compared to onshore staffing, while maintaining the same quality and expertise.',
  },
  {
    question: 'How long does onboarding take?',
    answer: 'Most clients are fully onboarded within 2-4 weeks. We conduct thorough training, establish processes, and ensure seamless integration with your existing systems.',
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
        title="Scale Your Operations Affordably"
        description="Leverage experienced offshore accounting professionals to handle your financial operations while reducing costs by 30-50%. Maintain quality and security with our ISO 27001 certified teams."
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

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Reveal><h2 className="text-4xl font-bold text-primary">Cost-Effective Without Compromising Quality</h2></Reveal>
              <p className="text-lg text-muted leading-relaxed">Our offshore accounting teams provide the same expertise and quality as onshore professionals, but at a fraction of the cost. We focus on delivering exceptional results while helping you manage your bottom line.</p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Experienced accounting professionals',
                  'ISO 27001 & SOC 2 certified',
                  '24+ hour turnaround on deliverables',
                  'Seamless integration with your systems',
                  'Dedicated account management',
                  'Flexible scaling up or down',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">✓</span>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">Key Benefits</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold mb-2">30-50%</div>
                  <p className="text-white/80">Cost Savings vs Onshore Staffing</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24+</div>
                  <p className="text-white/80">Hour Turnaround Times</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99%</div>
                  <p className="text-white/80">Uptime & Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
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

      <FAQSection subtitle="Offshore Support" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Scale Your Accounting Operations?"
        description="Let our offshore team handle your accounting while you focus on growing your business."
        cta={{
          text: 'Start Your Offshore Team',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
