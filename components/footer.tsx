import Link from 'next/link';
import Image from 'next/image';
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { companyInfo } from '@/lib/data';

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
      ],
    },
    {
      title: 'How We Work',
      links: [
        { name: 'Onboarding', href: '/delivery-framework/onboarding' },
        { name: 'Communication', href: '/delivery-framework/communication' },
        { name: 'Quality Assurance', href: '/delivery-framework/quality-assurance' },
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
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center h-14 hover:opacity-90 transition-opacity">
              <Image
                src="/accounstone-logo-horizontal.png"
                alt="Accounstone"
                width={280}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>

            <ul className="space-y-2 pt-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white transition-colors">
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-white transition-colors">
                  +91 99905 97192
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{companyInfo.contact.address}</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-3">
              <a href="https://www.linkedin.com/company/accounstone/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591501869187" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/accounstone?igsh=cTVpcXp0bG9sbnZy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-linear-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]">
                <Instagram size={18} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.youtube.com/@accounstone" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all duration-300 hover:scale-110">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="col-span-2 md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">
            © {currentYear} Accounstone. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Security-focused with NDA-backed engagements. Pursuing industry certifications.
          </p>
        </div>
      </div>
    </footer>
  );
}