'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type CursorState = {
  x: number;
  y: number;
  isVisible: boolean;
  isHovering: boolean;
  hoverText: string;
  sectionColor: string;
};

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    isVisible: false,
    isHovering: false,
    hoverText: '',
    sectionColor: 'blue',
  });

  const cursorRef = useRef<HTMLDivElement>(null);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Check if user prefers reduced motion
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      lastXRef.current = e.clientX;
      lastYRef.current = e.clientY;

      if (!state.isVisible) {
        setState((prev) => ({ ...prev, isVisible: true }));
      }

      // Determine section color based on scroll position
      const heroSection = document.querySelector('[data-section="hero"]');
      const servicesSection = document.querySelector('[data-section="services"]');
      const technologySection = document.querySelector('[data-section="technology"]');
      const contactSection = document.querySelector('[data-section="contact"]');

      let sectionColor = 'blue';

      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          sectionColor = 'blue';
        }
      }

      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          sectionColor = 'emerald';
        }
      }

      if (technologySection) {
        const rect = technologySection.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          sectionColor = 'purple';
        }
      }

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          sectionColor = 'gold';
        }
      }

      setState((prev) => ({ ...prev, sectionColor }));
    };

    const handleMouseEnter = () => {
      setState((prev) => ({ ...prev, isVisible: true }));
    };

    const handleMouseLeave = () => {
      setState((prev) => ({ ...prev, isVisible: false }));
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if hovering over interactive elements
      const isButton =
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a[href]');
      const isLink = target.tagName === 'A' || target.closest('a[href]');

      if (isButton || isLink) {
        const element = target.closest('button, a[href]') as HTMLElement;
        const hoverText = element?.dataset.cursorText || 'View';

        setState((prev) => ({
          ...prev,
          isHovering: true,
          hoverText,
        }));
      }
    };

    const handleElementLeave = () => {
      setState((prev) => ({
        ...prev,
        isHovering: false,
        hoverText: '',
      }));
    };

    // Smooth cursor animation
    const animate = () => {
      if (cursorRef.current) {
        const smoothing = 0.15; // Adjust for smoothness
        const x = lastXRef.current;
        const y = lastYRef.current;

        cursorRef.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementLeave);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      document.body.style.cursor = 'auto';
    };
  }, [state.isVisible]);

  // Disable custom cursor on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  // Disable if user prefers reduced motion
  if (prefersReducedMotion.current) {
    return null;
  }

  const colorMap = {
    blue: 'from-[#1e3a5f] to-[#2d5a8c]',
    emerald: 'from-[#2d6a3e] to-[#3d8a4e]',
    purple: 'from-[#6366f1] to-[#8b5cf6]',
    gold: 'from-[#c9a876] to-[#e0c191]',
  };

  return (
    <motion.div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] w-8 h-8 rounded-full ${
        state.isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-200`}
      initial={false}
      animate={{
        scale: state.isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* Outer glow ring */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${colorMap[state.sectionColor as keyof typeof colorMap]} opacity-40 blur-md`}
      />

      {/* Inner circle */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-r from-white to-white/80 shadow-lg" />

      {/* Center dot */}
      <div className="absolute inset-3 rounded-full bg-primary" />

      {/* Hover text */}
      {state.isHovering && (
        <motion.div
          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-white bg-primary rounded-full px-3 py-1 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {state.hoverText}
        </motion.div>
      )}
    </motion.div>
  );
}
