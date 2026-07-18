import { Metadata } from 'next';
import { companyInfo } from './data';

export const baseUrl = 'https://accounstone.com';
const siteName = companyInfo.name;

export function generateMetadata(config: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${baseUrl}${config.path}`;
  const ogImage = config.ogImage || `${baseUrl}/og-image.png`;

  return {
    title: `${config.title} | ${siteName}`,
    description: config.description,
    robots: config.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [ogImage],
    },
    alternates: {
      canonical: config.canonical || url,
    },
  };
}

// Schema.org structured data generators

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: companyInfo.name,
    description: companyInfo.description,
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    sameAs: [
      'https://linkedin.com/company/accounstone',
      'https://twitter.com/accounstone',
      'https://facebook.com/accounstone',
    ],
    // Fixed: schema.org uses "contactPoint", not "contact" — the previous
    // key meant this block was not valid structured data at all.
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: companyInfo.contact.email,
      telephone: companyInfo.contact.phone,
      areaServed: ['US', 'GB', 'AU', 'CA'],
      availableLanguage: ['English'],
    },
  };
}

// New — needed for the sitelinks search box and for AI answer engines to
// resolve the site as a distinct entity separate from any single page.
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: siteName,
    publisher: { '@id': `${baseUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  // Was hardcoded to 'US' before — every UK/AU/CA service page was
  // claiming US-only coverage regardless of actual content. Now
  // defaults to all four markets but can be overridden per page.
  areaServed?: string[];
  basePath?: string; // defaults to /services/, override for other route groups
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: baseUrl,
    },
    areaServed: (service.areaServed ?? ['US', 'GB', 'AU', 'CA']).map((code) => ({
      '@type': 'Country',
      name: code,
    })),
    url: `${baseUrl}${service.basePath ?? '/services/'}${service.slug}`,
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  imageUrl: string;
  publishedDate: string;
  author: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.publishedDate,
    author: {
      '@type': 'Organization',
      name: companyInfo.name,
    },
    url: `${baseUrl}/resources/${article.slug}`,
  };
}

// New — for testimonials, since the brief calls for Review schema and
// none existed here yet.
export function generateReviewSchema(
  reviews: Array<{ author: string; reviewBody: string; rating: number }>
) {
  return reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewBody: r.reviewBody,
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    itemReviewed: { '@id': `${baseUrl}/#organization` },
  }));
}