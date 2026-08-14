import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

interface ServicePageProps {
  path: string;
  service: { name: string; description: string; icon: string };
  overview: string;
  benefits: string[];
  process: Array<{ step: number; title: string; description: string }>;
  deliverables: string[];
  relatedServices: Array<{ name: string; slug: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export default function ServicePageTemplate({ path, service, overview, benefits, process, deliverables, relatedServices, faqs }: ServicePageProps) {
  const slug = path.replace(/^\/services\//, '');
  const serviceSchema = generateServiceSchema({ name: service.name, description: service.description, slug, basePath: '/services/', areaServed: ['US'] });
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

      <PremiumHero subtitle={`Professional ${service.name}`} title={service.name} description={service.description} cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View Solutions', href: '/solutions' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">{service.name}</li>
        </ol>
      </nav>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white"><Reveal className="max-w-4xl mx-auto space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">{service.name} Solutions</h2></div><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">What the Workflow Can Include</h2></></Reveal><ul className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, i) => <Reveal key={i}><li className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border/70 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"><Check className="shrink-0 text-accent w-5 h-5" aria-hidden="true" /><p className="text-foreground leading-7">{benefit}</p></li></Reveal>)}</ul></div></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Process</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">How the Work Moves</h2></></Reveal><ol className="space-y-6">{process.map((item, i) => <Reveal key={i}><li className="flex gap-6"><div className="shrink-0"><div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg" aria-hidden="true">{item.step}</div></div><div className="grow"><h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3><p className="text-muted leading-7">{item.description}</p></div></li></Reveal>)}</ol></div></section>

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Deliverables</span><h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">What You Receive</h2></></Reveal><ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{deliverables.map((deliverable, i) => <Reveal key={i}><li className="h-full p-6 bg-white rounded-2xl border border-border/70 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg transition-all"><p className="text-foreground font-medium leading-6">{deliverable}</p></li></Reveal>)}</ul></div></section>

      {relatedServices.length > 0 && <section className="w-full py-20 md:py-24 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-4 mb-8"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Related</span><h2 className="text-3xl font-bold text-primary">Continue the workflow</h2></></Reveal><div className="flex flex-wrap gap-3">{relatedServices.map((rel) => <Link key={rel.slug} href={`/services/${rel.slug}`} className="px-4 py-2 rounded-lg bg-input text-primary hover:bg-border font-medium transition-colors">{rel.name}</Link>)}</div></div></section>}

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <CTABanner title={`Need More Capacity for ${service.name}?`} description="Tell us what the current workflow looks like and where the work is getting stuck." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
