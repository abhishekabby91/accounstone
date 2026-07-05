import { Metadata } from 'next';
import { companyInfo } from './data';

const baseUrl = 'https://accounstone.com';
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
    robots: config.noindex ? 'noindex' : 'index, follow',
    canonical: config.canonical || url,
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
      canonical: url,
    },
  };
}

// Schema.org structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    description: companyInfo.description,
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    sameAs: [
      'https://linkedin.com/company/accounstone',
      'https://twitter.com/accounstone',
      'https://facebook.com/accounstone',
    ],
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: companyInfo.contact.email,
      telephone: companyInfo.contact.phone,
      areaServed: 'US',
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
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
    areaServed: 'US',
    url: `${baseUrl}/services/${service.slug}`,
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
