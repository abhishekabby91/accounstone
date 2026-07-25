'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { services, solutions, markets, technologies, industries } from '@/lib/data';

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

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
      children: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
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

  // Close mobile menu on Escape + lock body scroll while open.
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

  // Desktop dropdowns: close on click-outside, and on Escape.
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

  // Small delay on mouse-leave so moving the cursor from the label to
  // the dropdown panel doesn't close it prematurely.
  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  const cancelScheduledClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center h-20 px-3 sm:px-5 shrink-0">
          <Image
            src="/accounstone-logo-horizontal.png"
            alt="Accounstone"
            width={280}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} aria-label="Primary" className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item) => {
            const hasChildren = !!item.children?.length;
            const isOpen = openDropdown === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`transition-colors font-medium text-sm lg:text-base ${
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
                  className={`flex items-center gap-1 transition-colors font-medium text-sm lg:text-base ${
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

                {isOpen && (
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

      {/* Mobile Menu — accordion for items with children */}
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
              const isSectionOpen = openMobileSection === item.label;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-input text-primary'
                        : 'text-foreground hover:bg-input hover:text-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
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
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
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
                      className="p-3 mr-1 rounded-lg hover:bg-input transition-colors"
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

                  {isSectionOpen && (
                    <div className="pl-4 py-1 space-y-1 border-l-2 border-border ml-4 mb-1">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 rounded-lg text-sm text-muted hover:bg-input hover:text-primary transition-colors"
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
              className="block w-full mt-4 px-4 py-3 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
