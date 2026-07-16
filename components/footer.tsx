import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Offshore Accounting Support', href: '/solutions/offshore-accounting-support' },
        { name: 'Staff Augmentation', href: '/solutions/staff-augmentation' },
        { name: 'Dedicated Teams', href: '/solutions/dedicated-accounting-teams' },
        { name: 'Back Office Support', href: '/solutions/back-office-support' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Bookkeeping', href: '/services/bookkeeping' },
        { name: 'Accounting', href: '/services/accounting' },
        { name: 'Tax Preparation', href: '/services/tax-preparation' },
        { name: 'Payroll', href: '/services/payroll' },
        { name: 'Accounts Payable', href: '/services/accounts-payable' },
        { name: 'Accounts Receivable', href: '/services/accounts-receivable' },
        { name: 'CFO Support', href: '/services/cfo-support' },
        { name: 'Audit Support', href: '/services/audit-support' },
      ],
    },
    {
      title: 'Markets',
      links: [
        { name: 'United States', href: '/markets/united-states' },
        { name: 'United Kingdom', href: '/markets/united-kingdom' },
        { name: 'Australia', href: '/markets/australia' },
      ],
    },
    {
      title: 'Technology',
      links: [
        { name: 'QuickBooks', href: '/technology/quickbooks' },
        { name: 'Xero', href: '/technology/xero' },
        { name: 'Sage', href: '/technology/sage' },
        { name: 'NetSuite', href: '/technology/netsuite' },
        { name: 'Drake Tax', href: '/technology/drake-tax' },
        { name: 'CCH', href: '/technology/cch' },
        { name: 'MYOB', href: '/technology/myob' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Guides', href: '/resources/guides' },
        { name: 'Insights', href: '/resources/insights' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'LinkedIn', href: 'https://linkedin.com/company/accounstone' },
      ],
    },
    {
      title: 'Trust & Compliance',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Data Security', href: '/security' },
        { name: 'Compliance', href: '/compliance' },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center h-12 hover:opacity-90 transition-opacity">
              <Image
                src="/accounstone-logo-horizontal.png"
                alt="Accounstone"
                width={280}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional accounting and finance solutions for growing businesses.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/company/accounstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/accounstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">
            © {currentYear} Accounstone. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Trusted by 500+ businesses. ISO 27001 | SOC 2 Type II | GDPR Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
