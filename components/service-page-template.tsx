import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';

interface ServicePageProps {
  service: {
    name: string;
    description: string;
    icon: string;
  };
  overview: string;
  benefits: string[];
  process: Array<{ step: number; title: string; description: string }>;
  deliverables: string[];
  relatedServices: Array<{ name: string; slug: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export default function ServicePageTemplate({
  service,
  overview,
  benefits,
  process,
  deliverables,
  relatedServices,
  faqs,
}: ServicePageProps) {
  return (
    <main>
      {/* Hero */}
      <PremiumHero
        subtitle={`Professional ${service.name}`}
        title={service.name}
        description={service.description}
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Solutions', href: '/solutions' }}
        background="primary-gradient"
      />

      {/* Overview */}
      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              {service.name} Solutions
            </h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Why Choose Our {service.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-lg border-2 border-border">
                <div className="text-2xl flex-shrink-0 text-accent">✓</div>
                <p className="text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              How We Deliver {service.name}
            </h2>
          </div>

          <div className="space-y-6">
            {process.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Deliverables</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              What You Get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, i) => (
              <div key={i} className="p-6 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors">
                <p className="text-foreground font-medium">{deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4 mb-8">
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">Related Services</span>
              <h2 className="text-3xl font-bold text-primary">
                Complementary Services
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {relatedServices.map((rel, i) => (
                <Link
                  key={i}
                  href={`/services/${rel.slug}`}
                  className="px-4 py-2 bg-input rounded-lg text-primary hover:bg-border font-medium transition-colors"
                >
                  {rel.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      {/* CTA */}
      <CTABanner
        title={`Ready to Get Started with ${service.name}?`}
        description="Let our team help you implement the right solution for your business."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
