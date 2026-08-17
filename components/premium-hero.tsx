'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

interface PremiumHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  background?: 'primary-gradient' | 'accent-gradient' | 'default';
  image?: ReactNode;
  children?: ReactNode;
}

export default function PremiumHero({
  title,
  subtitle,
  description,
  cta,
  ctaSecondary,
  background = 'primary-gradient',
  image,
  children,
}: PremiumHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const bgClass = {
    'primary-gradient': 'hero-gradient text-white',
    'accent-gradient': 'accent-gradient text-white',
    default: 'bg-background',
  }[background];

  // Page-load stagger (not scroll-triggered — this is above the fold,
  // so it should animate in immediately on mount, using the same
  // easing curve as the rest of the site's motion language).
  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className={`relative w-full py-16 md:py-20 lg:py-24 px-6 md:px-8 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 ${image ? 'md:grid-cols-2' : ''} gap-12 md:gap-16 items-center`}>
          <div className="space-y-8">
            {subtitle && (
              <motion.div {...fadeUp(0)} className="inline-block">
                <span className={`text-sm md:text-base font-semibold tracking-wide uppercase ${
                  background === 'default' ? 'text-accent' : 'text-white/80'
                }`}>
                  {subtitle}
                </span>
              </motion.div>
            )}

            <motion.h1
              {...fadeUp(0.08)}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance ${
                background === 'default' ? 'text-primary' : ''
              }`}
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                {...fadeUp(0.16)}
                className={`text-lg md:text-xl leading-relaxed text-balance max-w-2xl ${
                  background === 'default' ? 'text-muted' : 'text-white/90'
                }`}
              >
                {description}
              </motion.p>
            )}

            {(cta || ctaSecondary) && (
              <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
                {cta && (
                  <Link
                    href={cta.href}
                    className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-sm sm:text-base ${
                      cta.variant === 'secondary'
                        ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        : 'bg-white hover:bg-gray-100 text-primary shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {cta.text}
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-sm sm:text-base ${
                      background === 'default'
                        ? 'border-2 border-primary text-primary hover:bg-primary/5'
                        : 'border-2 border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    {ctaSecondary.text}
                  </Link>
                )}
              </motion.div>
            )}

            {children}
          </div>

          {image && (
            <div className="hidden md:flex items-center justify-center">
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
