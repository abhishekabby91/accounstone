import { Metadata } from 'next';
import { Check, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'QuickBooks Online Accounting Services',
  description:
    'Expert QuickBooks Online setup, integration, optimization, and support. We manage your accounting using QuickBooks for seamless financial operations.',
  path: '/technology/quickbooks',
});

export default function QuickBooksPage() {
  const faqs = [
    {
      question: 'Can you set up QuickBooks Online for our business?',
      answer:
        'Yes, we handle complete QuickBooks Online setup including configuration, chart of accounts design, user setup, and integration with your business systems.',
    },
    {
      question: 'Do you provide ongoing QuickBooks support?',
      answer:
        'Absolutely. We provide monthly bookkeeping, reconciliation, reporting, and ongoing support for any QuickBooks questions or issues.',
    },
    {
      question: 'Can we integrate QuickBooks with other systems?',
      answer:
        'Yes, we integrate QuickBooks with CRM systems, payroll platforms, e-commerce systems, and other business software for seamless data flow.',
    },
    {
      question: 'How do you optimize our QuickBooks setup?',
      answer:
        'We review your chart of accounts, customize reports, set up automation, and optimize workflows to maximize efficiency and accuracy.',
    },
    {
      question: 'Do you help with QuickBooks troubleshooting?',
      answer:
        'Yes, we troubleshoot QuickBooks issues, reconcile accounts, fix data errors, and ensure your accounting is always accurate.',
    },
    {
      question: 'Are you a certified QuickBooks ProAdvisor?',
      answer:
        'Yes, our team includes a QuickBooks Certified ProAdvisor, certified since 2022, which means direct access to QuickBooks-specific training, tools, and support channels for our clients.',
    },
    {
      question: 'Can you migrate from desktop to QuickBooks Online?',
      answer:
        'Yes, we manage the entire migration from QuickBooks Desktop to QuickBooks Online including data import and setup verification.',
    },
  ];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Technology', url: `${baseUrl}/technology` },
  { name: 'QuickBooks', url: `${baseUrl}/technology/quickbooks` },
]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Platform Expertise"
        title="QuickBooks Online Accounting Services"
        description="Expert QuickBooks Online integration, setup, optimization, and support from a team including a QuickBooks Certified ProAdvisor."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">QuickBooks Online</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              QuickBooks Online Expertise
            </h2></Reveal>
            <p className="text-lg text-muted leading-relaxed">
              QuickBooks Online is the most popular cloud accounting software for small to mid-size businesses. Our team brings deep expertise in setup, configuration, optimization, and support. Whether you're new to QuickBooks or migrating from desktop, we ensure your accounting is properly structured, efficient, and provides the insights you need.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-input rounded-lg border-2 border-border">
              <BadgeCheck className="w-6 h-6 text-primary" aria-hidden="true" />
              <span className="font-semibold text-primary">QuickBooks Certified ProAdvisor since 2022</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our QuickBooks Services</h3>
              <ul className="space-y-3">
                {[
                  'QuickBooks Online setup and configuration',
                  'Chart of accounts design and optimization',
                  'User setup and permission management',
                  'Monthly bookkeeping and reconciliation',
                  'Bank and credit card reconciliation',
                  'Financial reporting and analysis',
                  'Payroll integration',
                  'Integration with other business systems',
                  'Data migration and cleanup',
                  'Custom report development',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose QuickBooks Online</h3>
              <ul className="space-y-3">
                {[
                  'Cloud-based accessibility from anywhere',
                  'Real-time financial data and reporting',
                  'Automation of repetitive tasks',
                  'Integration with hundreds of business apps',
                  'Mobile app for on-the-go access',
                  'Scalable as your business grows',
                  'Bank-level security',
                  'Automatic backups and data protection',
                  'Regular updates and improvements',
                  'Competitive pricing for features',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Related Services</span>
            <Reveal><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Services We Deliver in QuickBooks
            </h2></Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Bookkeeping', slug: 'bookkeeping' },
              { name: 'Accounts Payable', slug: 'accounts-payable' },
              { name: 'Accounts Receivable', slug: 'accounts-receivable' },
              { name: 'Accounting Services', slug: 'accounting' },
              { name: 'Financial Reporting', slug: 'accounting' },
              { name: 'Payroll Integration', slug: 'payroll' },
            ].map((service, i) => (
              <Link
                key={i}
                href={`/services/${service.slug}`}
                className="p-6 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors group"
              >
                <h3 className="font-bold text-primary text-lg group-hover:text-primary-light transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="QuickBooks FAQs" items={faqs} columns={2} />

      <CTABanner
        title="Ready to Master QuickBooks Online?"
        description="Let our QuickBooks experts optimize your accounting and provide ongoing support."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
