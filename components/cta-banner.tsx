'use client';

import Link from 'next/link';
import Reveal from './reveal';

interface CTABannerProps {
  title: string;
  description?: string;
  cta: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  background?: 'primary' | 'accent' | 'dark';
}

export default function CTABanner({
  title,
  description,
  cta,
  ctaSecondary,
  background = 'primary',
}: CTABannerProps) {
  const bgClass = {
    primary: 'hero-gradient text-white',
    accent: 'accent-gradient text-white',
    dark: 'bg-primary text-white',
  }[background];

  return (
    <section className={`relative w-full py-12 md:py-16 px-6 md:px-8 ${bgClass} cta-glow dot-grid-dark`}>
      <Reveal className="max-w-5xl mx-auto text-center space-y-8">
        <>
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl opacity-90 text-balance">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white hover:bg-gray-100 text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {cta.text}
          </Link>
          {ctaSecondary && (
            <Link
              href={ctaSecondary.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/10 text-white transition-all duration-300"
            >
              {ctaSecondary.text}
            </Link>
          )}
        </div>
        </>
      </Reveal>
    </section>
  );
}
