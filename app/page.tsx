import { Metadata } from 'next';
import Link from 'next/link';
import HeroCarousel from '@/components/hero-carousel';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import TestimonialsSection from '@/components/testimonials-section';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema } from '@/lib/seo';
import { services, solutions, testimonials } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Accounting & Finance Solutions',
  description:
    'Professional outsourced accounting, finance, and HR services for growing businesses. Expert CPAs, dedicated teams, and strategic financial solutions.',
  path: '/',
});

const homePageFAQs = [
  {
    question: 'What services does Accounstone provide?',
    answer:
      'We provide comprehensive accounting services including bookkeeping, tax planning, financial advisory, HR compliance, audit and assurance, and dedicated accounting teams. Our solutions are tailored to businesses of all sizes.',
  },
  {
    question: 'How do you ensure data security?',
    answer:
      'We implement security-first practices including encryption, secure access controls, NDA-backed engagements, and regular security reviews. We are actively pursuing SOC 2 certification and maintain strict data handling protocols.',
  },
  {
    question: 'Can you work with our existing software?',
    answer:
      'Yes, we integrate with QuickBooks, Xero, NetSuite, Sage, and custom systems. Our team is experienced with all major accounting platforms.',
  },
  {
    question: 'How quickly can you get started?',
    answer:
      'Most clients are onboarded within 2-4 weeks. We work closely with your team to understand your processes, requirements, and goals before beginning work.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer flexible pricing based on scope of services, volume of transactions, and engagement model. Contact us for a customized quote.',
  },
  {
    question: 'Do you provide offshore accounting services?',
    answer:
      'Yes, our service delivery team operates from our Global Delivery Center in New Delhi, India, providing cost-effective accounting support to US, UK, and Australian clients while maintaining the same high standards as onshore services.',
  },
];

// JSON-LD for the FAQ block above. This is what makes FAQ rich results
// (expandable Q&A snippets in Google search results) possible — without
// this schema, the FAQPage content is just plain text to Google.
const faqSchema = generateFAQSchema(homePageFAQs);

export default function HomePage() {
  const carouselSlides = [
    {
      id: 'budget-planning',
      image: '/carousel-budget-planning.jpg',
      alt: 'Budget planning workspace with calculator, financial charts, graphs, colorful markers, and monthly budget spreadsheet showing data analysis and financial planning',
      title: 'Professional Financial Planning Support',
      subtitle: 'Expert accounting solutions for your firm',
    },
    {
      id: 'worldwide',
      image: '/carousel-worldwide.jpg',
      alt: 'Wooden globe sculpture with worldwide text demonstrating global reach and international accounting services',
      title: 'Reliable Expertise, On Your Timeline',
      subtitle: 'Expert accountants ready to support your growth',
    },
    {
      id: 'tax-returns',
      image: '/carousel-tax-returns.jpg',
      alt: 'Blue tax returns document folder with gold text and financial documents showing professional tax preparation services',
      title: 'Trusted Partner for Your Accounting Needs',
      subtitle: 'Comprehensive solutions for CPA firms and accountants',
    },
  ];

  return (
    <main>
      {/* FAQ structured data for this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Carousel Section */}
      <section data-section="hero">
        <HeroCarousel slides={carouselSlides} autoPlayInterval={5000} />
      </section>

      {/* CTA Banner */}
      <section className="w-full py-12 md:py-16 px-6 md:px-8 bg-linear-to-r from-primary to-primary-light">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Scale Your Accounting Operations?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Partner with us for reliable, experienced accounting support designed specifically for CPA firms and accounting professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-gray-100 transition-all"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section data-section="solutions">
        <SectionGrid
          subtitle="Our Offerings"
          title="Flexible Service Solutions"
          description="Choose the right engagement model for your business needs."
          items={solutions}
          baseUrl="/solutions"
          columns={3}
          variant="default"
        />
      </section>

      {/* Services Section */}
      <section data-section="services">
        <SectionGrid
          subtitle="What We Do"
          title="Comprehensive Accounting Services"
          description="Expert services across all areas of accounting and finance."
          items={services}
          baseUrl="/services"
          columns={3}
          variant="default"
        />
      </section>

      {/* Why Accounstone Section */}
      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
                Beyond Accounting, Strategic Partnership
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                We don&apos;t just handle the numbers. We become an extension of your team,
                providing strategic guidance to help your business grow profitably.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  'Experienced professionals with hands-on accounting expertise', // TODO: replace with real "X+ years" once confirmed
                  'Dedicated support during critical periods',
                  'Proactive tax planning and optimization',
                  'Advanced technology and automation',
                  'Transparent reporting and communication',
                  'Flexible engagement models',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="text-accent text-2xl shrink-0">✓</div>
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/*
              STATS PANEL — REWRITTEN.
              Original had unverifiable claims ("500+ Active Clients",
              "$2B+ Transactions Managed", "15+ Years of Experience" for a
              pre-launch company). Replaced with true, verifiable facts:
              service breadth, market coverage, and delivery model. Swap
              the "X+ Years" line for a real number once confirmed — do
              not restore client/transaction counts until they're real.
            */}
            <div className="bg-linear-to-br from-primary to-primary-dark rounded-xl p-8 md:p-12 text-white space-y-6">
              <div className="space-y-2">
                <div className="text-5xl font-bold">3</div>
                <p className="text-white/80 text-lg">Markets Served — US, UK & Australia</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">8</div>
                <p className="text-white/80 text-lg">Core Accounting Service Lines</p>
              </div>
              <div className="space-y-2">
                {/* TODO: replace "X+" with the real confirmed number */}
                <div className="text-5xl font-bold">X+</div>
                <p className="text-white/80 text-lg">Years of Team Accounting Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section data-section="testimonials">
        <TestimonialsSection testimonials={testimonials} subtitle="Client Stories" />
      </section>

      {/* FAQ */}
      <section data-section="faq">
        <FAQSection subtitle="Common Questions" items={homePageFAQs} columns={2} />
      </section>

      {/* Final CTA */}
      <section data-section="contact">
        <CTABanner
          title="Ready to Transform Your Finance Operations?"
          description="Let us handle the accounting while you focus on growing your business."
          cta={{
            text: 'Start Your Free Consultation',
            href: '/contact',
          }}
          ctaSecondary={{
            text: 'Learn More',
            href: '/about',
          }}
          background="primary"
        />
      </section>
    </main>
  );
}