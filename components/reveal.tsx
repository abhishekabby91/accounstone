'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Site-wide scroll-reveal: a quick, precise fade + 8px rise.
 *
 * This is intentionally the ONE entrance animation used everywhere
 * (hero text excluded, which has its own staggered treatment) rather
 * than a different effect per section — per the existing CSS comment
 * in globals.css: "deliberate, restrained transitions only." A single
 * consistent motion language reads as intentional; a different effect
 * per section reads as decoration.
 *
 * Respects prefers-reduced-motion via framer-motion's useReducedMotion
 * (in addition to the global CSS override in globals.css).
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
