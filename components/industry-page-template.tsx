import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

interface IndustryPageProps {
  path: string;
  industry: { name: string; description: string; icon: string };
  overview: string;
  benefits: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks?: Array<{ name: string; href: string }>;
}

export default function IndustryPageTemplate({ path, industry, overview, benefits, faqs, relatedLinks = [] }: IndustryPageProps) {
  const slug = path.replace(/^\/industries\//, '');
  const serviceSchema = generateServiceSchema({ name: `Accounting Support for ${industry.name}`, description: industry.description, slug, basePath: '/industries/' });
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

      <PremiumHero subtitle="Industry Workflow" title={`Accounting Support for ${industry.name}`} description={industry.description} cta={{ text: 'Talk Through Your Workflow', href: '/contact' }} ctaSecondary={{ text: 'View Industries', href: '/industries' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">{industry.name}</li></ol></nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><Reveal className="max-w-4xl mx-auto space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">The workflow</span><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">What tends to make {industry.name} accounting different</h2></div><p className="text-lg text-muted leading-8">{overview}</p></></Reveal></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Where support can fit</span><h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">The parts of the workflow that can be delegated</h2><p className="max-w-2xl mx-auto text-muted leading-7">The right scope depends on your systems, team and review process. These are practical areas where additional capacity can be useful without taking control away from your team.</p></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{benefits.map((benefit, i) => <Reveal key={i}><li className="h-full flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"><Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><p className="text-foreground text-sm sm:text-base leading-5 sm:leading-7">{benefit}</p></li></Reveal>)}</ul></div></section>

      {relatedLinks.length > 0 && <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="space-y-4 mb-8"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Related work</span><h2 className="text-3xl font-bold text-primary">Explore the workflows that connect to this one</h2></></Reveal><div className="flex flex-wrap gap-3">{relatedLinks.map((link) => <Link key={link.href} href={link.href} className="px-4 py-2 rounded-lg bg-input text-primary hover:bg-border font-medium transition-colors">{link.name}</Link>)}</div></div></section>}

      <FAQSection subtitle="Questions we hear" items={faqs} columns={2} />
      <CTABanner title={`Need support with ${industry.name} accounting?`} description="Tell us how the work is handled today and where additional capacity would make the biggest difference." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
