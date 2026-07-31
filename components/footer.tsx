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

  // Consolidated from 8 sections down to 6 -- "Company" now absorbs the
  // former standalone "How We Work" section (both were small, related
  // categories), and legal links moved to the bottom bar (the
  // conventional place for them, and it removes an 8th column that was
  // forcing uneven grid wrapping). 6 divides evenly into 2, 3, and 6
  // columns, so this wraps cleanly at every breakpoint instead of the
  // previous nested-grid math creating jagged, uneven rows.
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
        { name: 'Industries We Serve', href: '/industries' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Onboarding', href: '/delivery-framework/onboarding' },
        { name: 'Communication', href: '/delivery-framework/communication' },
        { name: 'Quality Assurance', href: '/delivery-framework/quality-assurance' },
      ],
    },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Data Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Brand block — deliberately decoupled from the link grid below
            (not sharing grid columns with it) so its width and the nav
            grid's column count never conflict with each other. */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12 mb-12 border-b border-white/10">
          <div className="max-w-sm space-y-4">
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
            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.linkedin.com/company/accounstone/" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591501869187" target="_blank" rel="noopener noreferrer me" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/accounstone?igsh=cTVpcXp0bG9sbnZy" target="_blank" rel="noopener noreferrer me" aria-label="Instagram" className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-linear-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]">
                <Instagram size={18} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.youtube.com/@accounstone" target="_blank" rel="noopener noreferrer me" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all duration-300 hover:scale-110">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Contact info — right-aligned on desktop, forming a clean
              two-column top section rather than being buried inside
              the brand column's vertical stack. */}
          <ul className="space-y-3 text-sm text-white/70 shrink-0">
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-white/50" aria-hidden="true" />
              <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white transition-colors">
                {companyInfo.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-white/50" aria-hidden="true" />
              <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-white transition-colors">
                +91 99905 97192
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={16} className="shrink-0 text-white/50" aria-hidden="true" />
              <span>{companyInfo.contact.address}</span>
            </li>
          </ul>
        </div>

        {/* Link grid — a single, flat grid (no nesting). 6 sections
            divide evenly at 2, 3, and 6 columns, so every breakpoint
            wraps cleanly with no jagged, uneven rows. */}
        <nav aria-label="Footer" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-bold text-white text-[13px] md:text-sm uppercase tracking-wider pb-1">{section.title}</h3>
              <ul className="space-y-2.5">
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

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/60 text-sm order-2 md:order-1">
              © {currentYear} Accounstone. All rights reserved.
            </p>

            {/* Legal links — moved here from their own footer column.
                This is the conventional placement for legal/compliance
                links, and it removes a column that had very few items
                compared to the others, which was contributing to the
                uneven look. */}
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-1 md:order-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-white/50 text-xs text-center md:text-left mt-4">
            Security-focused with NDA-backed engagements. Actively pursuing SOC 2 certification.
          </p>
        </div>
      </div>
    </footer>
  );
}
