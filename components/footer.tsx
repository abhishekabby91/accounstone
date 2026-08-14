import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Offshore Accounting Support', href: '/solutions/offshore-accounting-support' },
        { name: 'Staff Augmentation', href: '/solutions/staff-augmentation' },
        { name: 'Dedicated Accounting Teams', href: '/solutions/dedicated-accounting-teams' },
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
    { name: 'Data Security', href: '/data-security' },
    { name: 'Compliance', href: '/compliance' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-10 lg:gap-16 pb-12 mb-12 border-b border-white/10">
          <div className="max-w-md space-y-5">
            <Link href="/" className="inline-flex items-center hover:opacity-90 transition-opacity">
              <Image src="/accounstone-logo-horizontal.png" alt="Accounstone" width={280} height={60} className="h-12 w-auto" />
            </Link>
            <p className="text-white/70 text-sm leading-7 max-w-sm">{companyInfo.tagline}</p>
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { href: 'https://www.linkedin.com/company/accounstone/', label: 'LinkedIn', icon: <Linkedin size={17} /> },
                { href: 'https://www.facebook.com/profile.php?id=61591501869187', label: 'Facebook', icon: <Facebook size={17} /> },
                { href: 'https://www.instagram.com/accounstone?igsh=cTVpcXp0bG9sbnZy', label: 'Instagram', icon: <Instagram size={17} /> },
                { href: 'https://www.youtube.com/@accounstone', label: 'YouTube', icon: <Youtube size={17} /> },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 hover:text-white hover:border-white/35 hover:bg-white/10 transition-all duration-200">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <ul className="space-y-3 text-sm text-white/70 lg:min-w-[260px] lg:pt-1">
            <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-white/45" aria-hidden="true" /><a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white transition-colors break-all">{companyInfo.contact.email}</a></li>
            <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-white/45" aria-hidden="true" /><a href={`tel:${companyInfo.contact.phone}`} className="hover:text-white transition-colors">+91 99905 97192</a></li>
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-white/45" aria-hidden="true" /><span className="leading-6">{companyInfo.contact.address}</span></li>
          </ul>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.35fr_1.35fr_0.8fr_0.95fr_0.95fr_1fr] gap-x-7 gap-y-10">
          {footerSections.map((section) => (
            <div key={section.title} className="min-w-0">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name} className="leading-5">
                    <Link href={link.href} className="inline-block text-sm text-white/65 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-white/10 mt-12 pt-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/50 text-xs md:text-sm">© {currentYear} Accounstone. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-white/50 hover:text-white transition-colors text-xs md:text-sm">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <p className="text-white/40 text-xs mt-4 max-w-3xl leading-5">Security-focused with NDA-backed engagements. Actively pursuing SOC 2 certification.</p>
        </div>
      </div>
    </footer>
  );
}
