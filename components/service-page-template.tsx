import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

interface ServicePageProps {
  path: string;
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
  path,
  service,
  overview,
  benefits,
  process,
  deliverables,
  relatedServices,
  faqs,
}: ServicePageProps) {
  const slug = path.replace(/^\/services\//, '');

  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.description,
    slug,
    basePath: '/services/',
  });

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Services', url: `${baseUrl}/services` },
    { name: service.name, url: `${baseUrl}${path}` },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle={`Professional ${service.name}`}
        title={service.name}
        description={service.description}
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Solutions', href: '/solutions' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">{service.name}</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">{service.name} Solutions</h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Why Choose Our {service.name}</h2>
            </>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <li className="flex items-start gap-4 p-6 bg-white rounded-lg border-2 border-border">
                  <Check className="shrink-0 text-accent w-5 h-5" aria-hidden="true" />
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">How We Deliver {service.name}</h2>
            </>
          </Reveal>
          <ol className="space-y-6">
            {process.map((item, i) => (
              <Reveal key={i} delay={Math.min(i * 0.06, 0.3)}>
                <li className="flex gap-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg" aria-hidden="true">{item.step}</div>
                  </div>
                  <div className="grow">
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted leading-relaxed">{item.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Deliverables</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">What You Get</h2>
            </>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
                <li className="p-6 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <p className="text-foreground font-medium">{deliverable}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <Reveal className="space-y-4 mb-8">
              <>
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">Related Services</span>
              <h2 className="text-3xl font-bold text-primary">Complementary Services</h2>
              </>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((rel, i) => (
                <Link key={i} href={`/services/${rel.slug}`} className="px-4 py-2 bg-input rounded-lg text-primary hover:bg-border font-medium transition-colors">
                  {rel.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <CTABanner
        title={`Ready to Get Started with ${service.name}?`}
        description="Let our team help you implement the right solution for your business."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
