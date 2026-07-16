'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

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
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 5000,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Preload images for smooth carousel
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, [slides]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(next, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [next, autoPlayInterval]);

  // Reset interval on manual interaction
  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(next, autoPlayInterval);
  }, [next, autoPlayInterval]);

  const handlePrev = () => {
    prev();
    resetAutoPlay();
  };

  const handleNext = () => {
    next();
    resetAutoPlay();
  };

  const handleDot = (index: number) => {
    goTo(index);
    resetAutoPlay();
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-96 md:h-screen max-h-[600px] md:max-h-full overflow-hidden bg-background">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === current}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center px-6 md:px-12">
              <div className="max-w-2xl space-y-4 text-white">
                {slide.subtitle && (
                  <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-white/80">
                    {slide.subtitle}
                  </p>
                )}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  {slide.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 flex-wrap justify-center max-w-xs">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDot(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? 'bg-white w-6 md:w-8'
                : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </div>
  );
}
