import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'Accounstone privacy policy and data protection practices.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-8 py-20">
      <div className="prose prose-invert max-w-none space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-muted">Last updated: January 2026</p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
          <p className="text-muted mb-4">
            Accounstone ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
          <p className="text-muted mb-4">We collect information you voluntarily provide:</p>
          <ul className="list-disc list-inside space-y-2 text-muted">
            <li>Name, email address, and phone number</li>
            <li>Company information and business details</li>
            <li>Messages and inquiries submitted through contact forms</li>
            <li>Financial data provided for accounting services</li>
          </ul>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Information</h2>
          <p className="text-muted mb-4">We use collected information for:</p>
          <ul className="list-disc list-inside space-y-2 text-muted">
            <li>Providing and improving our accounting services</li>
            <li>Responding to your inquiries and requests</li>
            <li>Sending service updates and communications</li>
            <li>Compliance with legal and regulatory obligations</li>
          </ul>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
          <p className="text-muted">
            We implement comprehensive security measures including ISO 27001 certification, SOC 2 Type II compliance, and end-to-end encryption to protect your data.
          </p>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
          <p className="text-muted mb-4">Under GDPR and applicable laws, you have rights to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
          </ul>
        </div>

        <div className="bg-input p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
          <p className="text-muted">
            For privacy inquiries, contact us at privacy@accounstone.com or through our contact form.
          </p>
        </div>
      </div>
    </main>
  );
}
