import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description:
    'Talk to Accounstone about bookkeeping, tax preparation, payroll, and back-office support for CPA firms and growing businesses in the US, UK, and Australia.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
