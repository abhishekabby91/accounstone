'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type CursorState = {
  x: number;
  y: number;
  isVisible: boolean;
  isHovering: boolean;
};

type TrailPoint = {
  id: number;
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    isVisible: false,
    isHovering: false,
  });

  const [trail, setTrail] = useState<TrailPoint[]>([]);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const cursorXRef = useRef(0);
  const cursorYRef = useRef(0);
  const trailCounterRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;

      if (!state.isVisible) {
        setState((prev) => ({ ...prev, isVisible: true }));
      }

      // Create trail points every few pixels
      if (trailCounterRef.current % 2 === 0) {
        setTrail((prev) =>
          [...prev.slice(-20), {
            id: trailCounterRef.current,
            x: e.clientX,
            y: e.clientY,
          }]
        );
      }
      trailCounterRef.current++;
    };

    const handleMouseEnter = () => {
      setState((prev) => ({ ...prev, isVisible: true }));
    };

    const handleMouseLeave = () => {
      setState((prev) => ({ ...prev, isVisible: false }));
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a[href]') ||
        target.tagName === 'A';

      if (isInteractive) {
        setState((prev) => ({
          ...prev,
          isHovering: true,
        }));
      }
    };

    const handleElementLeave = () => {
      setState((prev) => ({
        ...prev,
        isHovering: false,
      }));
    };

    // Smooth cursor animation with magnetic effect
    const animate = () => {
      if (cursorRef.current) {
        // Check if cursor should have magnetic pull towards interactive elements
        let targetX = mouseXRef.current;
        let targetY = mouseYRef.current;

        if (state.isHovering) {
          // Magnetic pull - slight attraction to hover target (already happens via hover state)
        }

        // Smooth easing towards target
        const ease = 0.1; // Adjust for smoothness (lower = smoother but slower)
        cursorXRef.current += (targetX - cursorXRef.current) * ease;
        cursorYRef.current += (targetY - cursorYRef.current) * ease;

        cursorRef.current.style.transform = `translate(${cursorXRef.current - 12}px, ${cursorYRef.current - 12}px)`;
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
  }, [state.isVisible, state.isHovering]);

  // Disable on mobile/touch or reduced motion
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  if (prefersReducedMotion.current) {
    return null;
  }

  return (
    <>
      {/* Trail layer */}
      <div className="fixed pointer-events-none z-[9998] inset-0">
        {trail.map((point, index) => {
          const progress = index / trail.length; // 0 to 1
          const opacity = progress * 0.4; // Fade in as it progresses
          const size = 2 + progress * 2; // Grow slightly

          return (
            <div
              key={point.id}
              className="absolute rounded-full"
              style={{
                left: `${point.x}px`,
                top: `${point.y}px`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: '#1e3a5f',
                opacity,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 ${size * 2}px rgba(30, 58, 95, ${opacity * 0.6})`,
              }}
            />
          );
        })}
      </div>

      {/* Main cursor - smooth circle */}
      <motion.div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] ${state.isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        initial={false}
      >
        {/* Outer glow ring - expands on hover */}
        <motion.div
          className="absolute -inset-1.5 rounded-full border border-[#1e3a5f] opacity-60"
          animate={{
            scale: state.isHovering ? 1.6 : 1,
            opacity: state.isHovering ? 0.8 : 0.4,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
          }}
        />

        {/* Main cursor circle - smooth white */}
        <div className="absolute inset-0 rounded-full bg-white shadow-lg border border-[#1e3a5f] border-opacity-20" />

        {/* Inner accent dot */}
        <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8c]" />
      </motion.div>

      {/* Smooth glow effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full"
        style={{
          width: '40px',
          height: '40px',
          left: state.x - 20,
          top: state.y - 20,
          background: 'radial-gradient(circle, rgba(30, 58, 95, 0.2) 0%, rgba(30, 58, 95, 0) 70%)',
          filter: 'blur(12px)',
          opacity: state.isVisible ? 0.5 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
        animate={{
          x: state.x - 20,
          y: state.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
          mass: 1.5,
        }}
      />
    </>
  );
}
