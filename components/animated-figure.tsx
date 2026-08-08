'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface AnimatedFigureProps {
  /** The numeric part to count up to, e.g. 3, 8, 15 */
  value: number;
  /** Text before the number, e.g. "$" */
  prefix?: string;
  /** Text after the number, e.g. "+", "B+" */
  suffix?: string;
  className?: string;
  duration?: number;
}

/**
 * Counts up from 0 to `value` once it scrolls into view. Uses the
 * site's existing `.figure` class (tabular-nums, tightened tracking)
 * so the motion reinforces the brand's own numeric typography rather
 * than introducing a new treatment.
 */
export default function AnimatedFigure({
  value,
  prefix = '',
  suffix = '',
  className = '',
  duration = 1200,
}: AnimatedFigureProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();
  // BUG FIX: this was useState(0), which is what Next.js renders into
  // the actual static HTML during SSR -- useEffect never runs on the
  // server, so every visitor without working JS (crawlers, slow
  // connections, JS-disabled browsers) saw literal "0" as the real
  // page content instead of the actual stat. Confirmed live on
  // production: the homepage was serving "0 Markets Served", "0 Core
  // Service Lines", "0+ Years of Experience". Initializing to the
  // real value means the correct number is always in the HTML by
  // default; the count-up is now purely a client-side enhancement
  // layered on top for users who get there with working JS, never the
  // fallback state itself.
  const [display, setDisplay] = useState(value);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current || shouldReduceMotion) return;
    hasAnimatedRef.current = true;

    setDisplay(0);
    let start: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out — settles precisely rather than overshooting.
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={`figure ${className}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
