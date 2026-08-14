import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import HeroCarousel from '@/components/hero-carousel';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import TestimonialsSection from '@/components/testimonials-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import GlobalDeliveryDiagram from '@/components/global-delivery-diagram';
import { generateMetadata, generateFAQSchema } from '@/lib/seo';
import { services, solutions, testimonials, trustBadges } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Accounting & Bookkeeping for CPA Firms',
  description:
    'Accounting and bookkeeping support for CPA firms and growing businesses, with practical help across recurring accounting workflows, tax preparation, payroll, payables, receivables, and audit support.',
  path: '/',
});

const homePageFAQs = [
  { question: 'What services does Accounstone provide?', answer: 'We provide bookkeeping, accounting operations, tax preparation, payroll processing, accounts payable, accounts receivable, audit support, and dedicated accounting teams. Engagements are tailored to your workflow and workload.' },
  { question: 'How do you approach data security?', answer: 'Engagements are NDA-backed, with access limited to the team members working on the account. We use controlled access, documented workflows, and security-focused handling practices, and we are transparent about the certifications we do and do not hold.' },
  { question: 'Can you work with our existing software?', answer: 'Yes. Our team works with platforms including QuickBooks Online, Xero, Sage, NetSuite, Drake Tax, CCH Axcess, and MYOB, along with client-specific systems and workflows.' },
  { question: 'How quickly can you get started?', answer: 'Most engagements begin with structured discovery and knowledge transfer. The exact timeline depends on your workflows, systems, documentation, and scope of work.' },
  { question: 'How is pricing determined?', answer: 'Pricing depends on transaction volume, workflow complexity, systems, service scope, and the engagement model. We first understand the work and then provide a clear proposal.' },
  { question: 'Do you provide offshore accounting support?', answer: 'Yes. Our service delivery team operates from our Global Delivery Center in New Delhi, India, supporting accounting practices and businesses across the US, UK, and Australia.' },
];

const faqSchema = generateFAQSchema(homePageFAQs);

export default function HomePage() {
  const carouselSlides = [
    {
      id: 'budget-planning',
      image: '/carousel-budget-planning.jpg',
      alt: 'Budget summary, charts, and calculator on a desk',
      title: 'Accounting Support That Fits Your Workflow',
      subtitle: 'Experienced professionals working as an extension of your team',
    },
    {
      id: 'worldwide',
      image: '/carousel-worldwide.jpg',
      alt: 'Globe representing worldwide accounting support',
      title: 'Reliable Support Across Three Markets',
      subtitle: 'US, UK, and Australia support from one delivery team',
    },
    {
      id: 'tax-returns',
      image: '/carousel-tax-returns.jpg',
      alt: 'Organized tax return documents prepared for professional review',
      title: 'Built for Accounting Practices',
      subtitle: 'Bookkeeping, tax preparation, payroll, and audit support',
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section data-section="hero">
        <HeroCarousel slides={carouselSlides} autoPlayInterval={5000} pageHeading="Outsourced Accounting & Bookkeeping for CPA Firms | Accounstone" />
      </section>

      <section className="w-full py-7 md:py-8 px-6 md:px-8 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 md:px-5 py-2.5 bg-input rounded-full border border-border">
              <span className="text-base" aria-hidden="true">{badge.icon}</span>
              <span className="font-medium text-sm text-foreground">{badge.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-16 md:py-20 px-6 md:px-8 bg-white">
        <Reveal className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <>
            <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">One Delivery Team. Three Markets.</h2>
            <p className="text-muted leading-relaxed">Our service delivery team operates from our Global Delivery Center in New Delhi, India, supporting businesses and accounting practices across the US, UK, and Australia.</p>
          </>
        </Reveal>
        <Reveal delay={0.15}><GlobalDeliveryDiagram /></Reveal>
      </section>

      <section className="w-full py-12 md:py-16 px-6 md:px-8 bg-linear-to-r from-primary to-primary-light">
        <Reveal className="max-w-7xl mx-auto text-center space-y-6">
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">Need More Accounting Capacity?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">Add experienced accounting professionals to your workflow without rebuilding your entire team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-gray-100 transition-all">Talk to Our Team</Link>
              <Link href="/solutions" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all">Explore Solutions</Link>
            </div>
          </>
        </Reveal>
      </section>

      <section data-section="solutions"><SectionGrid subtitle="Our Engagement Models" title="Support Built Around Your Team" description="Choose the delivery model that matches your workload, processes, and growth plans." items={solutions} baseUrl="/solutions" columns={3} variant="default" /></section>
      <section data-section="services"><SectionGrid subtitle="What We Do" title="Accounting Services That Keep Work Moving" description="Practical support across bookkeeping, accounting operations, tax preparation, payroll, payables, receivables, and audit support." items={services} baseUrl="/services" columns={3} variant="default" /></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal className="space-y-6">
              <>
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">Why Accounstone</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">A Delivery Partner, Not Just Extra Hands</h2>
                <p className="text-lg text-muted leading-relaxed">We work inside your processes, follow your review standards, and become a dependable extension of your team.</p>
                <div className="space-y-4 pt-4">
                  {['Experienced accounting professionals', 'Dedicated support during busy periods', 'Documented onboarding and knowledge transfer', 'Quality review before work reaches your team', 'Clear communication and defined ownership', 'Flexible engagement models as workload changes'].map((item, i) => (
                    <div key={i} className="flex items-start gap-4"><Check className="text-accent shrink-0 w-5 h-5" aria-hidden="true" /><p className="text-foreground font-medium">{item}</p></div>
                  ))}
                </div>
              </>
            </Reveal>

            <Reveal delay={0.15} className="relative overflow-hidden bg-linear-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white space-y-7 shadow-xl">
              <>
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 1px, transparent 1px, transparent 28px)' }} />
                <div className="relative space-y-2"><div className="text-3xl font-bold">Three markets</div><p className="text-white/80 text-lg">US, UK and Australia support from one delivery team.</p></div>
                <div className="relative space-y-2"><div className="text-3xl font-bold">Seven core service lines</div><p className="text-white/80 text-lg">Bookkeeping, accounting, tax, payroll, AP, AR and audit support.</p></div>
                <div className="relative space-y-2"><div className="text-3xl font-bold">Defined review process</div><p className="text-white/80 text-lg">Work is organized around documented workflows, ownership and quality review.</p></div>
              </>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-section="testimonials"><Reveal><TestimonialsSection testimonials={testimonials} subtitle="Workflow Context" /></Reveal></section>
      <section data-section="faq"><Reveal><FAQSection subtitle="Common Questions" items={homePageFAQs} columns={2} /></Reveal></section>
      <section data-section="contact"><CTABanner title="Ready to Strengthen Your Accounting Operations?" description="Tell us what is slowing your team down. We can help you build a practical support model around the work that needs to get done." cta={{ text: 'Start a Conversation', href: '/contact' }} ctaSecondary={{ text: 'Learn About Accounstone', href: '/about' }} background="primary" /></section>
    </main>
  );
}
