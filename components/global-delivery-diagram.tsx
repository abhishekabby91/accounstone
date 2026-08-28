'use client';

import { useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { USFlag, GBFlag, AUFlag, INFlag } from './flags';

/**
 * A bespoke visual specific to Accounstone's actual business model --
 * not a generic template graphic. Shows the real operating structure
 * (US/UK/Australia clients connected to the Global Delivery Center in
 * New Delhi) rather than an abstract stock illustration.
 *
 * The connecting path's endpoints are measured from the real DOM
 * positions of the two node circles (via getBoundingClientRect),
 * not hardcoded percentages. An earlier version used fixed path
 * coordinates that only approximately matched a flex-justify-between
 * layout with fixed-width (w-40) columns -- since fixed-pixel columns
 * represent a larger fraction of a narrow container, the approximation
 * broke down on mobile, causing the animated pulse to visibly overshoot
 * past the right node. Measuring real positions and recalculating on
 * resize eliminates that entirely, at any viewport width.
 */
export default function GlobalDeliveryDiagram() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const leftNodeRef = useRef<HTMLDivElement>(null);
  const rightNodeRef = useRef<HTMLDivElement>(null);
  const [pathD, setPathD] = useState<string | null>(null);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const leftNode = leftNodeRef.current;
    const rightNode = rightNodeRef.current;
    if (!container || !leftNode || !rightNode) return;

    const containerRect = container.getBoundingClientRect();
    const leftRect = leftNode.getBoundingClientRect();
    const rightRect = rightNode.getBoundingClientRect();

    const startX = leftRect.left + leftRect.width / 2 - containerRect.left;
    const endX = rightRect.left + rightRect.width / 2 - containerRect.left;
    const y = leftRect.top + leftRect.height / 2 - containerRect.top;

    const midX = (startX + endX) / 2;
    // Single quadratic arc bulging upward only (was a cubic S-curve
    // that bulged up then dipped down, which read as the motion going
    // downward before recovering -- especially exaggerated on short
    // mobile widths where the curve amplitude is a larger fraction of
    // the total path length).
    setPathD(`M ${startX} ${y} Q ${midX} ${y - 40}, ${endX} ${y}`);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    // Re-measure after fonts/layout settle (icons/flags can shift width slightly on load)
    const timeout = setTimeout(measure, 100);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timeout);
    };
  }, [measure]);

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto px-4">
      {/* Connecting line + traveling pulse -- path is set dynamically
          once real node positions are measured, so it's hidden (empty
          path) until then rather than showing an incorrect guess. */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        aria-hidden="true"
      >
        {pathD && (
          <>
            <path
              id="delivery-path"
              d={pathD}
              fill="none"
              stroke="var(--color-accent-light)"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity="0.6"
            />
            {!shouldReduceMotion && (
              <circle r="5" fill="var(--color-accent-light)">
                <animateMotion dur="3.5s" repeatCount="indefinite">
                  <mpath href="#delivery-path" />
                </animateMotion>
              </circle>
            )}
          </>
        )}
      </svg>

      {/* Nodes */}
      <div
        className="relative flex items-start justify-between"
        role="img"
        aria-label="Diagram showing accounting firms in the US, UK, and Australia connected to Accounstone's Global Delivery Center in New Delhi, India"
      >
        {/* Left node: the client firm */}
        <div className="flex flex-col items-center gap-4 w-40">
          <div ref={leftNodeRef} className="relative w-24 h-24 rounded-full bg-primary flex items-center justify-center text-center px-2">
            <span className="text-white font-bold text-sm leading-tight">Your Firm</span>
            <span className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-accent-light text-white text-[10px] font-bold uppercase tracking-wide whitespace-nowrap">
              Onshore
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <USFlag className="rounded-sm shadow-sm" />
            <GBFlag className="rounded-sm shadow-sm" />
            <AUFlag className="rounded-sm shadow-sm" />
          </div>
          <p className="text-xs text-muted text-center">US · UK · Australia</p>
        </div>

        {/* Right node: delivery center */}
        <div className="flex flex-col items-center gap-4 w-40">
          <div ref={rightNodeRef} className="relative w-24 h-24 rounded-full bg-primary flex items-center justify-center text-center px-2">
            <span className="text-white font-bold text-sm leading-tight">Global Delivery Center</span>
            <span className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-accent-light text-white text-[10px] font-bold uppercase tracking-wide whitespace-nowrap">
              Offshore
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <INFlag className="rounded-sm shadow-sm" />
          </div>
          <p className="text-xs text-muted text-center">New Delhi, India</p>
        </div>
      </div>
    </div>
  );
}
