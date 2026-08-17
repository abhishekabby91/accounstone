import Link from 'next/link';
import CTABanner from '@/components/cta-banner';
import Reveal from '@/components/reveal';
import ShareButtons from '@/components/share-buttons';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';
import { ReactNode } from 'react';

interface ArticleLayoutProps {
  title: string;
  category: string;
  description: string;
  publishedDate: string;
  section: 'guides' | 'insights';
  slug: string;
  children: ReactNode;
}

export default function ArticleLayout({
  title,
  category,
  description,
  publishedDate,
  section,
  slug,
  children,
}: ArticleLayoutProps) {
  const path = `/resources/${section}/${slug}`;
  const sectionLabel = section === 'guides' ? 'Guides' : 'Insights';

  const articleSchema = generateArticleSchema({
    title,
    description,
    imageUrl: `${baseUrl}/og-image.png`,
    publishedDate,
    author: 'Accounstone',
    slug: `${section}/${slug}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Resources', url: `${baseUrl}/resources` },
    { name: sectionLabel, url: `${baseUrl}/resources/${section}` },
    { name: title, url: `${baseUrl}${path}` },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 hero-gradient text-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-white/80">
            {category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-balance">{title}</h1>
          <p className="text-lg text-white/90 leading-relaxed">{description}</p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-3xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/resources/${section}`} className="hover:text-primary transition-colors">{sectionLabel}</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium line-clamp-1">{title}</li>
        </ol>
      </nav>

      <article className="w-full py-7 md:py-10 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal className="prose-content space-y-8">
            <>{children}</>
          </Reveal>
          <ShareButtons url={`${baseUrl}${path}`} title={title} />
        </div>
      </article>

      <CTABanner
        title="Ready to Simplify Your Accounting?"
        description="Let's talk about what your business actually needs."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
