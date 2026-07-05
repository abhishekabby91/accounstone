'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-primary hover:text-primary-light transition-colors">
          Accounstone
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/solutions"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Solutions
          </Link>

          <Link
            href="/services"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Services
          </Link>

          <Link
            href="/markets"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Markets
          </Link>

          <Link
            href="/technology"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Technology
          </Link>

          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Company
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-input transition-colors"
          aria-label="Menu"
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
