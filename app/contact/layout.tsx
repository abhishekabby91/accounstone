import { Metadata } from 'next';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { companyInfo } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Accounstone — Free Consultation',
  description:
    'Talk to Accounstone about bookkeeping, tax preparation, payroll, and back-office support for CPA firms and growing businesses in the US, UK, and Australia.',
  path: '/contact',
});

// ContactPage + ContactPoint + Breadcrumb schema.
// Along with /about, this is a primary signal AI systems use to verify an
// organisation is real and reachable. Schema lives in the layout because
// page.tsx is a client component (it holds form state).
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Contact', url: `${baseUrl}/contact` },
]);

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${baseUrl}/contact#webpage`,
  url: `${baseUrl}/contact`,
  name: 'Contact Accounstone',
  description:
    'Get in touch with Accounstone about outsourced accounting, bookkeeping, tax preparation, payroll, and audit support.',
  isPartOf: { '@id': `${baseUrl}/#website` },
  about: { '@id': `${baseUrl}/#organization` },
  mainEntity: {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: companyInfo.name,
    email: companyInfo.contact.email,
    telephone: companyInfo.contact.phone,
    url: baseUrl,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: companyInfo.contact.email,
        telephone: companyInfo.contact.phone,
        areaServed: ['US', 'GB', 'AU'],
        availableLanguage: ['English'],
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
