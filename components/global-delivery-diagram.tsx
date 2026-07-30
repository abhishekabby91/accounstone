'use client';

import { useReducedMotion } from 'framer-motion';
import { USFlag, GBFlag, AUFlag, INFlag } from './flags';

/**
 * A bespoke visual specific to Accounstone's actual business model --
 * not a generic template graphic. Shows the real operating structure
 * (US/UK/Australia clients connected to the Global Delivery Center in
 * New Delhi) rather than an abstract stock illustration.
 *
 * Uses hand-embedded SVG flag components (components/flags.tsx, paths
 * sourced from the MIT-licensed country-flag-icons project) instead of
 * flag emoji or the npm package's React wrapper directly. Flag emoji render inconsistently across platforms -- notably,
 * many desktop browsers on Windows show plain two-letter country
 * codes instead of an actual flag image, since Windows' system emoji
 * font doesn't include regional-indicator flag glyphs the way iOS/
 * Android do. Real SVG flags render identically everywhere.
 */
export default function GlobalDeliveryDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4">
      {/* Connecting line + traveling pulse, as a background SVG overlay */}
      <svg
        viewBox="0 0 800 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-[52px] w-full h-[100px] pointer-events-none"
        aria-hidden="true"
      >
        <path
          id="delivery-path"
          d="M 130 50 C 300 5, 500 95, 670 50"
          fill="none"
          stroke="var(--color-accent-light)"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.6"
          vectorEffect="non-scaling-stroke"
        />
        {!shouldReduceMotion && (
          <circle r="5" fill="var(--color-accent-light)">
            <animateMotion dur="3.5s" repeatCount="indefinite">
              <mpath href="#delivery-path" />
            </animateMotion>
          </circle>
        )}
      </svg>

      {/* Nodes */}
      <div
        className="relative flex items-start justify-between"
        role="img"
        aria-label="Diagram showing client businesses in the US, UK, and Australia connected to Accounstone's Global Delivery Center in New Delhi, India"
      >
        {/* Left node: client businesses */}
        <div className="flex flex-col items-center gap-4 w-40">
          <div className="relative w-24 h-24 rounded-full bg-primary flex items-center justify-center text-center px-2">
            <span className="text-white font-bold text-sm leading-tight">Your Business</span>
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
          <div className="relative w-24 h-24 rounded-full bg-primary flex items-center justify-center text-center px-2">
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
