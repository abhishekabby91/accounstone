import { Metadata } from 'next';
import { companyInfo } from './data';

export const baseUrl = 'https://www.accounstone.com';
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
  const robots = config.noindex
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1 } };

  return {
    title: config.path === '/' ? `${config.title} | ${siteName}` : config.title,
    description: config.description,
    robots,
    openGraph: {
      title: config.path === '/' ? `${config.title} | ${siteName}` : config.title,
      description: config.description,
      url,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: config.title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.path === '/' ? `${config.title} | ${siteName}` : config.title,
      description: config.description,
      images: [ogImage],
    },
    alternates: {
      canonical: config.canonical || url,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: companyInfo.name,
    description: companyInfo.description,
    url: baseUrl,
    logo: `${baseUrl}/accounstone-logo-horizontal.png`,
    sameAs: [
      'https://www.linkedin.com/company/accounstone/',
      'https://www.facebook.com/profile.php?id=61591501869187',
      'https://www.instagram.com/accounstone',
      'https://www.youtube.com/@accounstone',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: companyInfo.contact.email,
      telephone: companyInfo.contact.phone,
      areaServed: ['US', 'GB', 'AU'],
      availableLanguage: ['English'],
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: siteName,
    publisher: { '@id': `${baseUrl}/#organization` },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  areaServed?: string[];
  basePath?: string;
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
    areaServed: (service.areaServed ?? ['US', 'GB', 'AU']).map((code) => ({
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
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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
  basePath?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.publishedDate,
    author: { '@type': 'Organization', name: companyInfo.name },
    url: `${baseUrl}${article.basePath ?? '/resources/'}${article.slug}`,
  };
}
