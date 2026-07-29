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

interface IndustryPageProps {
  path: string;
  industry: {
    name: string;
    description: string;
    icon: string;
  };
  overview: string;
  benefits: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks?: Array<{ name: string; href: string }>;
}

export default function IndustryPageTemplate({
  path,
  industry,
  overview,
  benefits,
  faqs,
  relatedLinks = [],
}: IndustryPageProps) {
  const slug = path.replace(/^\/industries\//, '');

  const serviceSchema = generateServiceSchema({
    name: `Accounting Services for ${industry.name}`,
    description: industry.description,
    slug,
    basePath: '/industries/',
  });

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Industries', url: `${baseUrl}/industries` },
    { name: industry.name, url: `${baseUrl}${path}` },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Industry Expertise"
        title={`Accounting for ${industry.name}`}
        description={industry.description}
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Industries', href: '/industries' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">{industry.name}</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              What Makes {industry.name} Accounting Different
            </h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-4 mb-16">
            <>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">How We Help</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Support Built for {industry.name}
            </h2>
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

      {relatedLinks.length > 0 && (
        <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <Reveal className="space-y-4 mb-8">
              <>
              <span className="text-sm font-semibold tracking-wide uppercase text-accent">Go Deeper</span>
              <h2 className="text-3xl font-bold text-primary">Related Resources</h2>
              </>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link, i) => (
                <Link key={i} href={link.href} className="px-4 py-2 bg-input rounded-lg text-primary hover:bg-border font-medium transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <CTABanner
        title={`Ready to Simplify Your ${industry.name} Accounting?`}
        description="Let's talk about what your business actually needs."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
