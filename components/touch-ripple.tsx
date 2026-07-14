'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

export default function TouchRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const rippleCounterRef = useRef(0);

  useEffect(() => {
    // Check if device supports touch
    const hasTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      );
    };

    setIsTouchDevice(hasTouch());

    const handleTouchStart = (e: TouchEvent) => {
      if (!isTouchDevice) return;

      const touch = e.touches[0];
      const target = e.target as HTMLElement;

      // Only create ripple for interactive elements
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a[href]') ||
        target.tagName === 'A' ||
        target.closest('[role="button"]');

      if (!isInteractive) return;

      // Get the element's bounding rect
      const rect = (target.closest('button') || target.closest('a[href]') || target) as HTMLElement;
      const bounds = rect.getBoundingClientRect();

      // Calculate ripple center
      const x = touch.clientX - bounds.left;
      const y = touch.clientY - bounds.top;

      // Calculate ripple size (should extend beyond element)
      const size = Math.max(bounds.width, bounds.height) * 2;

      setRipples((prev) => [
        ...prev,
        {
          id: rippleCounterRef.current++,
          x,
          y,
          size,
        },
      ]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 600);
    };

    window.addEventListener('touchstart', handleTouchStart, true);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart, true);
    };
  }, [isTouchDevice]);

  if (!isTouchDevice) {
    return null;
  }

  return (
    <div className="fixed pointer-events-none z-[9997] inset-0 overflow-hidden">
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full bg-white"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            pointerEvents: 'none',
          }}
          initial={{
            scale: 0,
            opacity: 0.6,
          }}
          animate={{
            scale: 1,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
