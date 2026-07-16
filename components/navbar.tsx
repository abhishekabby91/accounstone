'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { label: 'Solutions', href: '/solutions' },
    { label: 'Services', href: '/services' },
    { label: 'Markets', href: '/markets' },
    { label: 'Technology', href: '/technology' },
    { label: 'Company', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center h-16 flex-shrink-0 hover:opacity-90 transition-opacity">
          <svg
            viewBox="0 0 300 100"
            className="h-12 w-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Nested Squares */}
            <rect x="15" y="15" width="50" height="50" fill="none" stroke="#001f5c" strokeWidth="3"/>
            <rect x="22" y="22" width="40" height="40" fill="none" stroke="#0052cc" strokeWidth="3"/>
            
            {/* A Triangle */}
            <polygon points="38,25 44,40 32,40" fill="#001f5c"/>
            
            {/* S Shape */}
            <path d="M 40 42 Q 44 44 42 48 Q 40 50 35 48 Q 33 46 37 44 Q 42 42 40 40" fill="#0052cc"/>
            
            {/* Curved line accent */}
            <path d="M 28 48 Q 35 52 44 50" stroke="#ff6600" strokeWidth="2" fill="none" strokeLinecap="round"/>
            
            {/* Text - ACCOUNSTONE */}
            <text x="75" y="50" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#001f5c">ACCOUN</text>
            <circle cx="238" cy="42" r="6" fill="#ff6600"/>
            <text x="250" y="50" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#0052cc">NE</text>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-input transition-colors flex-shrink-0"
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-input hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
