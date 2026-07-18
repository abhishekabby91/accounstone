'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type TrailPoint = {
  id: number;
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [enabled, setEnabled] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const cursorXRef = useRef(0);
  const cursorYRef = useRef(0);
  const trailCounterRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Decide whether the custom cursor should run at all, and keep re-checking —
  // covers touch devices, reduced-motion preference, and hybrid devices where
  // this can change after mount (e.g. a 2-in-1 laptop switching input mode).
  useEffect(() => {
    const touchQuery = window.matchMedia('(hover: none)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const evaluate = () => setEnabled(!touchQuery.matches && !motionQuery.matches);
    evaluate();

    touchQuery.addEventListener('change', evaluate);
    motionQuery.addEventListener('change', evaluate);
    return () => {
      touchQuery.removeEventListener('change', evaluate);
      motionQuery.removeEventListener('change', evaluate);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      if (trailCounterRef.current % 2 === 0) {
        setTrail((prev) => [
          ...prev.slice(-20),
          { id: trailCounterRef.current, x: e.clientX, y: e.clientY },
        ]);
      }
      trailCounterRef.current++;
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        !!target.closest('button') ||
        !!target.closest('a[href]');
      if (isInteractive) setIsHovering(true);
    };

    const handleElementLeave = () => setIsHovering(false);

    const animate = () => {
      const ease = 0.15;
      cursorXRef.current += (mouseXRef.current - cursorXRef.current) * ease;
      cursorYRef.current += (mouseYRef.current - cursorYRef.current) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorXRef.current - 12}px, ${cursorYRef.current - 12}px)`;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementLeave);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);

      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      document.body.style.cursor = 'auto';
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Trail layer */}
      <div className="fixed pointer-events-none z-9998 inset-0">
        {trail.map((point, index) => {
          const progress = index / trail.length;
          const opacity = progress * 0.4;
          const size = 2 + progress * 2;

          return (
            <div
              key={point.id}
              className="absolute rounded-full"
              style={{
                left: `${point.x}px`,
                top: `${point.y}px`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: 'var(--color-primary)',
                opacity,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 ${size * 2}px color-mix(in srgb, var(--color-primary) 60%, transparent)`,
              }}
            />
          );
        })}
      </div>

      {/* Main cursor - smooth circle */}
      <motion.div
        ref={cursorRef}
        className={`fixed pointer-events-none z-9999 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        initial={false}
      >
        <motion.div
          className="absolute -inset-1.5 rounded-full border border-primary opacity-60"
          style={{ borderColor: 'var(--color-primary)' }}
          animate={{
            scale: isHovering ? 1.6 : 1,
            opacity: isHovering ? 0.8 : 0.4,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
        <div
          className="absolute inset-0 rounded-full bg-white shadow-lg border"
          style={{ borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }}
        />
        <div
          className="absolute inset-1.5 rounded-full"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
          }}
        />
      </motion.div>

      {/* Ambient glow — now correctly follows the actual cursor position */}
      <motion.div
        className="fixed pointer-events-none z-9997 rounded-full"
        style={{
          width: '40px',
          height: '40px',
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-primary) 20%, transparent) 0%, transparent 70%)',
          filter: 'blur(12px)',
          opacity: isVisible ? 0.5 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 1.5 }}
      />
    </>
  );
}