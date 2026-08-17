import { Metadata } from 'next';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'Staff Augmentation',
  description: 'Augment your existing team with skilled accountants and finance professionals. Handle overflow work, seasonal demand, and specialized projects.',
  path: '/solutions/staff-augmentation',
});

const faqs = [
  {
    question: 'What is staff augmentation?',
    answer: 'Staff augmentation is adding temporary or semi-permanent skilled professionals to your team to handle overflow work, seasonal demands, special projects, or skills gaps without permanent hiring.',
  },
  {
    question: 'How quickly can you provide staff?',
    answer: 'We can typically provide vetted professionals within 1-2 weeks. For urgent needs, we may have available resources available within days.',
  },
  {
    question: 'Can we hire augmented staff permanently?',
    answer: 'Yes, many clients transition augmented staff to permanent positions. We facilitate this process and ensure smooth onboarding.',
  },
  {
    question: 'What skills can you augment?',
    answer: 'We provide CPAs, accountants, tax specialists, financial analysts, bookkeepers, and other accounting and finance professionals at all experience levels.',
  },
  {
    question: 'Is there a minimum commitment?',
    answer: 'Flexibility is built in. Engagements can be short-term (weeks), project-based, or ongoing. You only pay for the time and resources you need.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
  { name: 'Staff Augmentation', url: `${baseUrl}/solutions/staff-augmentation` },
]);

export default function StaffAugmentationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Staff Augmentation"
        title="Extend Your Team On-Demand"
        description="Add skilled accounting professionals to your team on a flexible basis. Perfect for overflow work, seasonal needs, specialized projects, and skill gaps."
        cta={{
          text: 'Request Staff',
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
              <Reveal><h2 className="text-4xl font-bold text-primary">Scale Your Team Without Long-Term Commitment</h2></Reveal>
              <p className="text-lg text-muted leading-relaxed">Staff augmentation provides access to qualified accounting professionals when you need them, without the overhead of permanent hiring. Perfect for managing seasonal peaks, special projects, or filling expertise gaps.</p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Vetted accounting professionals',
                  'Flexible short or long-term engagement',
                  'Works inside your existing systems and approval process',
                  'No permanent employment costs',
                  'Option to hire permanently',
                  'Rapid onboarding',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent to-accent-light rounded-xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">Why Staff Augmentation?</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold mb-2">Peak Season Support</div>
                  <p className="text-white/80 text-sm">Handle year-end closes, tax season, and busy periods without permanent headcount.</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">Special Projects</div>
                  <p className="text-white/80 text-sm">Dedicate expertise to system implementations, audits, or strategic initiatives.</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">No Overhead</div>
                  <p className="text-white/80 text-sm">Pay only for what you use, no benefits, payroll taxes, or permanent employment costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><h2 className="text-4xl font-bold text-primary text-center mb-12">Use Cases for Staff Augmentation</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Overflow Work', desc: 'Handle client projects and overflow that your team cannot accommodate.' },
              { title: 'Seasonal Demand', desc: 'Add capacity during peak periods like year-end close and tax season.' },
              { title: 'Skill Gaps', desc: 'Bring in specialists for areas like tax, audit, or specialized accounting support.' },
              { title: 'Project Work', desc: 'Dedicate resources to system implementations or one-time initiatives.' },
              { title: 'Temporary Coverage', desc: 'Cover for vacation, leave, or temporary staffing needs.' },
              { title: 'Permanent Hiring Trial', desc: 'Test compatibility before making permanent hiring decisions.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Staff Augmentation" items={faqs} columns={2} />

      <CTABanner
        title="Need Additional Staff Right Away?"
        description="Tell us your requirements and we'll find the right professionals for your team."
        cta={{
          text: 'Request Staff Now',
          href: '/contact',
        }}
        background="accent"
      />
    </main>
  );
}
