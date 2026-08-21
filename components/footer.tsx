import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import SocialIcon from '@/components/social-icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerSections = [
    { title: 'Solutions', links: [
      { name: 'Offshore Accounting Support', href: '/solutions/offshore-accounting-support' },
      { name: 'Staff Augmentation', href: '/solutions/staff-augmentation' },
      { name: 'Dedicated Accounting Teams', href: '/solutions/dedicated-accounting-teams' },
      { name: 'Back Office Support', href: '/solutions/back-office-support' },
    ]},
    { title: 'Services', links: [
      { name: 'Bookkeeping', href: '/services/bookkeeping' },
      { name: 'Accounting', href: '/services/accounting' },
      { name: 'Tax Preparation', href: '/services/tax-preparation' },
      { name: 'Payroll', href: '/services/payroll' },
      { name: 'Accounts Payable', href: '/services/accounts-payable' },
      { name: 'Accounts Receivable', href: '/services/accounts-receivable' },
      { name: 'Audit Support', href: '/services/audit-support' },
    ]},
    { title: 'Markets', links: [
      { name: 'United States', href: '/markets/united-states' },
      { name: 'United Kingdom', href: '/markets/united-kingdom' },
      { name: 'Australia', href: '/markets/australia' },
    ]},
    { title: 'Technology', links: [
      { name: 'QuickBooks', href: '/technology/quickbooks' },
      { name: 'Xero', href: '/technology/xero' },
      { name: 'Sage', href: '/technology/sage' },
      { name: 'NetSuite', href: '/technology/netsuite' },
      { name: 'Drake Tax', href: '/technology/drake-tax' },
      { name: 'CCH', href: '/technology/cch' },
      { name: 'MYOB', href: '/technology/myob' },
    ]},
    { title: 'Resources', links: [
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Guides', href: '/resources/guides' },
      { name: 'Insights', href: '/resources/insights' },
      { name: 'Industries', href: '/industries' },
    ]},
    { title: 'Company', links: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Onboarding', href: '/delivery-framework/onboarding' },
      { name: 'Communication', href: '/delivery-framework/communication' },
      { name: 'Quality Assurance', href: '/delivery-framework/quality-assurance' },
    ]},
  ];
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Data Security', href: '/data-security' },
    { name: 'Compliance', href: '/compliance' },
  ];
  const socials = [
    { href: 'https://www.linkedin.com/company/accounstone/', label: 'LinkedIn' },
    { href: 'https://www.facebook.com/profile.php?id=61591501869187', label: 'Facebook' },
    { href: 'https://www.instagram.com/accounstone?igsh=cTVpcXp0bG9sbnZy', label: 'Instagram' },
    { href: 'https://www.youtube.com/@accounstone', label: 'YouTube' },
  ];
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10 md:pt-12 pb-8 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          <div className="space-y-5 max-w-sm">
            <Link href="/" className="inline-flex items-center hover:opacity-90 transition-opacity">
              <Image src="/accounstone-logo-horizontal.png" alt="Accounstone" width={240} height={56} className="w-auto" style={{ height: '40px' }} />
            </Link>
            <p className="text-white/70 text-sm leading-7">{companyInfo.tagline}</p>
            <div className="flex items-center gap-2.5">
              {socials.map((social) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  size={17}
                  variant="footer"
                />
              ))}
            </div>
          </div>
          <ul className="space-y-3 text-sm text-white/70 md:text-right">
            <li className="flex items-center gap-3 md:flex-row-reverse">
              <a href={`mailto:${companyInfo.contact.email}`} aria-label="Email Accounstone" title="Email Accounstone" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 hover:text-white hover:border-white/35 hover:bg-white/10 transition-all" rel="nofollow">
                <Mail size={17} aria-hidden="true" />
              </a>
              <span className="sr-only">Email Accounstone</span>
            </li>
            <li className="flex items-center gap-3 md:flex-row-reverse">
              <MapPin size={16} className="shrink-0 text-white/45" aria-hidden="true" />
              <span className="leading-6">{companyInfo.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8"><div className="border-t border-white/10" /></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-10">
        {/* Single column below 375px: the 2-column grid needs ~155px per
            column to fit "TECHNOLOGY", which only holds from 375px up.
            Measured, not guessed — 360px clipped it, 375px does not. */}
        <nav aria-label="Footer" className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 sm:gap-x-6 gap-y-8 min-[375px]:gap-y-10">
          {footerSections.map((section) => (
            <div key={section.title} className="min-w-0">
              {/* The wide uppercase tracking overflowed a 2-column mobile grid
                  ("TECHNOLOGY" needed 180px in a 152px column and was clipped
                  at the viewport edge). Tracking and size are tightened on
                  mobile only, leaving real margin rather than a 1px squeak;
                  the original treatment returns from sm: up. */}
              <h3 className="mb-4 text-[11px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-[0.14em] text-white">{section.title}</h3>
              {/* py-1 lifts each link's hit area from 20px to 28px, above the
                  24px WCAG 2.5.8 minimum. The row gap is reduced to match so
                  the footer's overall height barely changes. */}
              <ul className="space-y-0.5">
                {section.links.map((link) => (
                  <li key={link.name}><Link href={link.href} className="inline-block py-1 text-sm leading-5 text-white/65 hover:text-white transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="bg-primary-dark/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/50 text-xs md:text-sm">© {currentYear} Accounstone. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-x-5">
              {legalLinks.map((link) => (<li key={link.name}><Link href={link.href} className="inline-block py-1.5 text-white/50 hover:text-white transition-colors text-xs md:text-sm leading-5">{link.name}</Link></li>))}
            </ul>
          </div>
          <p className="text-white/40 text-xs mt-3 max-w-3xl leading-5">Security-focused with NDA-backed engagements. Actively pursuing SOC 2 certification.</p>
        </div>
      </div>
    </footer>
  );
}
