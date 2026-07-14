'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HeaderBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-full bg-gradient-to-r from-primary via-primary-light to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center justify-center flex-1 sm:flex-none">
          <p className="text-sm sm:text-base font-medium text-center">
            Transform Your Accounting with Offshore Expertise
          </p>
        </div>

        <Link
          href="/contact"
          className="whitespace-nowrap px-4 sm:px-6 py-2 rounded-full bg-white text-primary font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300"
        >
          Get Started
        </Link>

        <button
          onClick={() => setIsVisible(false)}
          className="hidden sm:flex items-center justify-center w-8 h-8 rounded hover:bg-white/20 transition-colors flex-shrink-0"
          aria-label="Close announcement"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
