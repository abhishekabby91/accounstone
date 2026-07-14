'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type FeedbackPoint = {
  id: number;
  x: number;
  y: number;
};

export default function MobileGestures() {
  const [feedbackPoints, setFeedbackPoints] = useState<FeedbackPoint[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const feedbackCounterRef = useRef(0);
  const tapThrottleRef = useRef(0);

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

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isTouchDevice) return;

      const now = Date.now();
      if (now - tapThrottleRef.current < 100) return;
      tapThrottleRef.current = now;

      const touch = e.changedTouches[0];
      const target = e.target as HTMLElement;

      // Only show feedback for interactive elements
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a[href]') ||
        target.tagName === 'A' ||
        target.closest('[role="button"]');

      if (!isInteractive) return;

      // Add visual feedback point at tap location
      setFeedbackPoints((prev) => [
        ...prev.slice(-3),
        {
          id: feedbackCounterRef.current++,
          x: touch.clientX,
          y: touch.clientY,
        },
      ]);

      // Remove feedback after animation
      setTimeout(() => {
        setFeedbackPoints((prev) => prev.slice(1));
      }, 400);
    };

    window.addEventListener('touchend', handleTouchEnd, true);

    return () => {
      window.removeEventListener('touchend', handleTouchEnd, true);
    };
  }, [isTouchDevice]);

  if (!isTouchDevice) {
    return null;
  }

  return (
    <div className="fixed pointer-events-none z-[9996] inset-0">
      {feedbackPoints.map((point) => (
        <motion.div
          key={point.id}
          className="absolute"
          style={{
            left: point.x,
            top: point.y,
          }}
          initial={{
            opacity: 1,
            scale: 0.5,
          }}
          animate={{
            opacity: 0,
            scale: 2,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
        >
          {/* Outer pulsing circle */}
          <div
            className="absolute rounded-full border-2 border-[#1e3a5f]"
            style={{
              width: '24px',
              height: '24px',
              marginLeft: '-12px',
              marginTop: '-12px',
            }}
          />

          {/* Inner dot */}
          <div
            className="absolute bg-[#1e3a5f] rounded-full"
            style={{
              width: '8px',
              height: '8px',
              marginLeft: '-4px',
              marginTop: '-4px',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
