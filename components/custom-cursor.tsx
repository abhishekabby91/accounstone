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
  ringScale: number;
};

type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
};

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    isVisible: false,
    isHovering: false,
    hoverText: '',
    sectionColor: 'blue',
    ringScale: 1,
  });

  const [particles, setParticles] = useState<Particle[]>([]);

  const cursorRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const velocityXRef = useRef(0);
  const velocityYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const particleCounterRef = useRef(0);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      velocityXRef.current = newX - lastXRef.current;
      velocityYRef.current = newY - lastYRef.current;

      lastXRef.current = newX;
      lastYRef.current = newY;

      if (!state.isVisible) {
        setState((prev) => ({ ...prev, isVisible: true }));
      }

      // Determine section color based on scroll position
      let sectionColor = 'blue';
      const sections = [
        { element: '[data-section="hero"]', color: 'blue' },
        { element: '[data-section="services"]', color: 'emerald' },
        { element: '[data-section="technology"]', color: 'purple' },
        { element: '[data-section="contact"]', color: 'gold' },
      ];

      for (const section of sections) {
        const el = document.querySelector(section.element);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
            sectionColor = section.color;
            break;
          }
        }
      }

      setState((prev) => ({ ...prev, sectionColor }));

      // Generate subtle particles on movement
      if (Math.random() > 0.92 && !prefersReducedMotion.current) {
        const speed = Math.sqrt(velocityXRef.current ** 2 + velocityYRef.current ** 2);
        if (speed > 0.5) {
          setParticles((prev) => [
            ...prev.slice(-8),
            {
              id: particleCounterRef.current++,
              x: newX,
              y: newY,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              life: 1,
              color: sectionColor,
            },
          ]);
        }
      }
    };

    const handleMouseEnter = () => {
      setState((prev) => ({ ...prev, isVisible: true }));
    };

    const handleMouseLeave = () => {
      setState((prev) => ({ ...prev, isVisible: false }));
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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
          ringScale: 1.8,
        }));
      }
    };

    const handleElementLeave = () => {
      setState((prev) => ({
        ...prev,
        isHovering: false,
        hoverText: '',
        ringScale: 1,
      }));
    };

    // Smooth cursor animation with easing
    const animate = () => {
      if (cursorRef.current && outerRingRef.current) {
        const x = lastXRef.current;
        const y = lastYRef.current;

        // Apply cubic easing for ultra-smooth movement
        cursorRef.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`;

        // Subtle outer ring rotation based on velocity
        const speed = Math.sqrt(velocityXRef.current ** 2 + velocityYRef.current ** 2);
        outerRingRef.current.style.transform = `rotate(${speed * 5}deg)`;
      }

      // Update particles
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vx: p.vx * 0.92,
            vy: p.vy * 0.92,
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0)
      );

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

  // Disable on mobile/touch or reduced motion
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  if (prefersReducedMotion.current) {
    return null;
  }

  const colorMap: Record<string, { glow: string; accent: string; ring: string }> = {
    blue: {
      glow: 'from-[#1e3a5f] via-[#2d5a8c] to-[#1e3a5f]',
      accent: 'from-[#2d5a8c] to-[#1e3a5f]',
      ring: 'via-[#5ba3d0]',
    },
    emerald: {
      glow: 'from-[#2d6a3e] via-[#3d8a4e] to-[#2d6a3e]',
      accent: 'from-[#3d8a4e] to-[#2d6a3e]',
      ring: 'via-[#5ab885]',
    },
    purple: {
      glow: 'from-[#6366f1] via-[#8b5cf6] to-[#6366f1]',
      accent: 'from-[#8b5cf6] to-[#6366f1]',
      ring: 'via-[#a78bfa]',
    },
    gold: {
      glow: 'from-[#c9a876] via-[#e0c191] to-[#c9a876]',
      accent: 'from-[#e0c191] to-[#c9a876]',
      ring: 'via-[#d4b896]',
    },
  };

  const currentColors = colorMap[state.sectionColor as keyof typeof colorMap];

  return (
    <>
      {/* Particles layer */}
      <div className="fixed pointer-events-none z-[9998] inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full pointer-events-none`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.life * 0.3,
              backgroundColor:
                particle.color === 'blue'
                  ? '#2d5a8c'
                  : particle.color === 'emerald'
                    ? '#3d8a4e'
                    : particle.color === 'purple'
                      ? '#8b5cf6'
                      : '#e0c191',
              boxShadow: `0 0 ${particle.life * 8}px ${
                particle.color === 'blue'
                  ? 'rgba(45, 90, 140, 0.6)'
                  : particle.color === 'emerald'
                    ? 'rgba(61, 138, 78, 0.6)'
                    : particle.color === 'purple'
                      ? 'rgba(139, 92, 246, 0.6)'
                      : 'rgba(224, 193, 145, 0.6)'
              }`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] ${state.isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        initial={false}
      >
        {/* Animated outer ring with glow */}
        <div
          ref={outerRingRef}
          className={`absolute -inset-3 rounded-full border border-double border-opacity-30 shadow-2xl`}
          style={{
            borderColor: currentColors.ring,
            filter: `drop-shadow(0 0 12px ${
              state.sectionColor === 'blue'
                ? 'rgba(45, 90, 140, 0.4)'
                : state.sectionColor === 'emerald'
                  ? 'rgba(61, 138, 78, 0.4)'
                  : state.sectionColor === 'purple'
                    ? 'rgba(139, 92, 246, 0.4)'
                    : 'rgba(224, 193, 145, 0.4)'
            })`,
            transform: `scale(${state.ringScale})`,
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />

        {/* Outer glow effect */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentColors.glow} opacity-25 blur-lg`}
          style={{
            filter: 'blur(16px)',
          }}
        />

        {/* Middle ring with accent gradient */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentColors.accent} opacity-15 blur-sm`}
          style={{
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />

        {/* Inner bright core */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-white via-white/90 to-white/70 shadow-xl" />

        {/* Center premium dot */}
        <div className="absolute inset-2.5 rounded-full bg-white shadow-lg" />

        {/* Hover text with premium styling */}
        {state.isHovering && (
          <motion.div
            className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-white rounded-full px-3 py-1.5 pointer-events-none backdrop-blur-md"
            style={{
              background: `linear-gradient(135deg, ${
                state.sectionColor === 'blue'
                  ? '#1e3a5f'
                  : state.sectionColor === 'emerald'
                    ? '#2d6a3e'
                    : state.sectionColor === 'purple'
                      ? '#6366f1'
                      : '#c9a876'
              }, ${
                state.sectionColor === 'blue'
                  ? '#2d5a8c'
                  : state.sectionColor === 'emerald'
                    ? '#3d8a4e'
                    : state.sectionColor === 'purple'
                      ? '#8b5cf6'
                      : '#e0c191'
              })`,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {state.hoverText}
          </motion.div>
        )}
      </motion.div>

      {/* Subtle animation keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }
      `}</style>
    </>
  );
}
