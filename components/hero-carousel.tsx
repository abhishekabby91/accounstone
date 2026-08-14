'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface CarouselSlide {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
  pageHeading: string;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 5000,
  pageHeading,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length), [slides.length]);
  const goTo = useCallback((index: number) => setCurrent(index), []);

  useEffect(() => {
    if (shouldReduceMotion || isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }
    autoPlayRef.current = setInterval(next, autoPlayInterval);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next, autoPlayInterval, isPaused, shouldReduceMotion]);

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="relative w-full h-[520px] md:h-[620px] overflow-hidden bg-primary"
      role="region"
      aria-roledescription="carousel"
      aria-label={pageHeading}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <h1 className="sr-only">{pageHeading}</h1>

      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={isActive}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-primary/10" />

            <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-16">
              <div className="max-w-3xl space-y-5 md:space-y-6 text-white">
                {slide.subtitle && (
                  <motion.p
                    key={`subtitle-${slide.id}-${isActive}`}
                    initial={isActive && !shouldReduceMotion ? { opacity: 0, y: 12 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-white/80"
                  >
                    {slide.subtitle}
                  </motion.p>
                )}
                <motion.h2
                  key={`title-${slide.id}-${isActive}`}
                  initial={isActive && !shouldReduceMotion ? { opacity: 0, y: 16 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance"
                >
                  {slide.title}
                </motion.h2>
                <div className="h-px w-16 bg-accent-light" aria-hidden="true" />
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={prev}
        className="absolute left-4 md:left-7 top-1/2 -translate-y-1/2 z-10 h-11 w-11 md:h-12 md:w-12 inline-flex items-center justify-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/70"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-7 top-1/2 -translate-y-1/2 z-10 h-11 w-11 md:h-12 md:w-12 inline-flex items-center justify-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/70"
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 md:bottom-8 left-6 md:left-12 lg:left-16 z-10 flex gap-2 w-auto max-w-xs">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            className="relative h-1 w-12 md:w-16 bg-white/30 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            {index === current && (
              <div
                key={current}
                className="absolute inset-y-0 left-0 bg-white rounded-full animate-ledger-fill"
                style={{
                  animationDuration: `${autoPlayInterval}ms`,
                  animationPlayState: isPaused || shouldReduceMotion ? 'paused' : 'running',
                }}
              />
            )}
            {index < current && <div className="absolute inset-0 bg-white/70" />}
          </button>
        ))}
      </div>
    </div>
  );
}
