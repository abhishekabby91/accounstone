'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { solutions, markets, technologies, industries } from '@/lib/data';

interface NavChild {
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  items: NavChild[];
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  groups?: NavGroup[];
}

// Region-specific service pages, built from the same slug pattern as
// the global services list. Grouped separately from the flat
// `children` pattern used by other nav items, since Services is the
// one dropdown that needs region sub-sections rather than a single
// flat list.
const regionServiceGroups: NavGroup[] = [
  {
    label: 'USA',
    items: [
      { label: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
      { label: 'Tax Preparation', href: '/services/tax-preparation/united-states' },
      { label: 'Audit Support', href: '/services/audit-support/united-states' },
      { label: 'Payroll', href: '/services/payroll' },
      { label: 'Accounts Payable', href: '/services/accounts-payable' },
      { label: 'Accounts Receivable', href: '/services/accounts-receivable' },
      { label: 'Accounting Services', href: '/services/accounting' },
    ],
  },
  {
    label: 'UK',
    items: [
      { label: 'Bookkeeping', href: '/services/bookkeeping/united-kingdom' },
      { label: 'Tax Preparation', href: '/services/tax-preparation/united-kingdom' },
      { label: 'Audit Support', href: '/services/audit-support/united-kingdom' },
    ],
  },
  {
    label: 'Australia',
    items: [
      { label: 'Bookkeeping', href: '/services/bookkeeping/australia' },
      { label: 'Tax Preparation', href: '/services/tax-preparation/australia' },
      { label: 'Audit Support', href: '/services/audit-support/australia' },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Built from the same lib/data.ts arrays used everywhere else on the
  // site, so a new service/solution/industry/etc. shows up in the nav
  // automatically instead of needing a second manual list kept in sync.
  const menuItems: NavItem[] = [
    {
      label: 'Solutions',
      href: '/solutions',
      children: solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
    },
    {
      label: 'Services',
      href: '/services',
      groups: regionServiceGroups,
    },
    {
      label: 'Industries',
      href: '/industries',
      children: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
    },
    {
      label: 'Markets',
      href: '/markets',
      children: markets.map((m) => ({ label: m.name, href: `/markets/${m.slug}` })),
    },
    {
      label: 'Technology',
      href: '/technology',
      children: technologies.map((t) => ({ label: t.name, href: `/technology/${t.slug}` })),
    },
    {
      label: 'Resources',
      href: '/resources',
      children: [
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Guides', href: '/resources/guides' },
        { label: 'Insights', href: '/resources/insights' },
      ],
    },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // Close the mobile menu and any open dropdown whenever the route
  // changes. Without this, clicking a link navigates but the menu
  // state persists — so the menu is still open on the new page.
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openDropdown]);

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  const cancelScheduledClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center px-3 sm:px-5 shrink-0" aria-label="Accounstone home">
          <Image
            src="/accounstone-logo-horizontal.png"
            alt="Accounstone"
            width={280}
            height={60}
            className="w-auto"
            style={{ height: '48px' }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} aria-label="Primary" className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item) => {
            const hasChildren = !!item.children?.length;
            const hasGroups = !!item.groups?.length;
            const isDropdown = hasChildren || hasGroups;
            const isOpen = openDropdown === item.label;

            if (!isDropdown) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`transition-colors font-medium text-sm ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => {
                  cancelScheduledClose();
                  setOpenDropdown(item.label);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  className={`flex items-center gap-1 transition-colors font-medium text-sm ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && hasGroups && (
                  // Wider, multi-column panel for Services: Global
                  // services alongside region-specific groups (USA/UK/
                  // Australia), so region pages sit beside the global
                  // ones instead of replacing them.
                  <div
                    className="absolute left-0 top-full mt-2 w-[600px] max-h-[75vh] overflow-y-auto rounded-lg border-2 border-border bg-white shadow-xl p-5 z-50"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 mb-3 text-sm font-semibold text-primary hover:bg-input rounded-lg transition-colors border-b border-border"
                    >
                      View All {item.label} →
                    </Link>
                    <div className="grid grid-cols-3 gap-6">
                      {item.groups!.map((group) => (
                        <div key={group.label}>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted mb-2 px-3">
                            {group.label}
                          </p>
                          <ul className="space-y-0.5">
                            {group.items.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="block px-3 py-1.5 rounded-lg text-sm text-foreground hover:bg-input hover:text-primary transition-colors"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isOpen && hasChildren && (
                  <div
                    className="absolute left-0 top-full mt-2 w-64 max-h-[70vh] overflow-y-auto rounded-lg border-2 border-border bg-white shadow-xl py-2 z-50"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-input transition-colors border-b border-border mb-1"
                    >
                      View All {item.label}
                    </Link>
                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-input hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
        >
          Get Started
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-input transition-colors shrink-0"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu — accordion for items with children/groups */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden bg-white border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {menuItems.map((item) => {
              const hasChildren = !!item.children?.length;
              const hasGroups = !!item.groups?.length;
              const isDropdown = hasChildren || hasGroups;
              const isSectionOpen = openMobileSection === item.label;

              if (!isDropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`flex items-center px-4 min-h-[48px] rounded-lg font-medium transition-colors active:bg-input ${
                      isActive(item.href)
                        ? 'bg-input text-primary'
                        : 'text-foreground hover:bg-input hover:text-primary'
                    }`}
                    onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                      className={`flex-1 flex items-center px-4 min-h-[48px] rounded-lg font-medium transition-colors active:bg-input ${
                        isActive(item.href)
                          ? 'bg-input text-primary'
                          : 'text-foreground hover:bg-input hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setOpenMobileSection(isSectionOpen ? null : item.label)}
                      aria-expanded={isSectionOpen}
                      aria-label={`${isSectionOpen ? 'Collapse' : 'Expand'} ${item.label} submenu`}
                      className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center mr-1 rounded-lg hover:bg-input active:bg-input transition-colors"
                    >
                      <svg
                        className={`w-4 h-4 text-muted transition-transform duration-200 ${isSectionOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {isSectionOpen && hasGroups && (
                    <div className="pl-4 py-1 space-y-3 border-l-2 border-border ml-4 mb-1">
                      {item.groups!.map((group) => (
                        <div key={group.label}>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1 px-4">
                            {group.label}
                          </p>
                          {group.items.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                              className="flex items-center px-4 min-h-[44px] rounded-lg text-sm text-muted hover:bg-input hover:text-primary transition-colors active:bg-input"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {isSectionOpen && hasChildren && (
                    <div className="pl-4 py-1 space-y-1 border-l-2 border-border ml-4 mb-1">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                          className="flex items-center px-4 min-h-[44px] rounded-lg text-sm text-muted hover:bg-input hover:text-primary transition-colors active:bg-input"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              className="block w-full mt-4 px-4 py-4 min-h-[52px] rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all text-center active:scale-[0.98]"
              onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
