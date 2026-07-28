'use client';

import { useReducedMotion } from 'framer-motion';

/**
 * A bespoke visual specific to Accounstone's actual business model --
 * not a generic template graphic. Shows the real operating structure
 * (US/UK/Australia clients connected to the Global Delivery Center in
 * New Delhi) rather than an abstract stock illustration.
 */
export default function GlobalDeliveryDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 800 260"
        className="w-full h-auto"
        role="img"
        aria-label="Diagram showing client businesses in the US, UK, and Australia connected to Accounstone's Global Delivery Center in New Delhi, India"
      >
        {/* Connecting path */}
        <path
          id="delivery-path"
          d="M 195 130 C 350 60, 450 200, 605 130"
          fill="none"
          stroke="var(--color-accent-light)"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.6"
        />

        {/* Traveling pulse along the path (respects reduced motion) */}
        {!shouldReduceMotion && (
          <circle r="5" fill="var(--color-accent-light)">
            <animateMotion dur="3.5s" repeatCount="indefinite">
              <mpath href="#delivery-path" />
            </animateMotion>
          </circle>
        )}

        {/* Left node: client businesses */}
        <g>
          <circle cx="130" cy="130" r="75" fill="var(--color-primary)" opacity="0.06" />
          <circle cx="130" cy="130" r="52" fill="var(--color-primary)" />
          <text x="130" y="122" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">
            Your
          </text>
          <text x="130" y="140" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">
            Business
          </text>
          <text x="130" y="210" textAnchor="middle" fontSize="20" letterSpacing="4">
            🇺🇸 🇬🇧 🇦🇺
          </text>
          <text x="130" y="235" textAnchor="middle" fontSize="12" fill="var(--color-muted)">
            US · UK · Australia
          </text>
        </g>

        {/* Right node: delivery center */}
        <g>
          <circle cx="670" cy="130" r="75" fill="var(--color-primary)" opacity="0.06" />
          <circle cx="670" cy="130" r="52" fill="var(--color-primary)" />
          <text x="670" y="115" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">
            Global
          </text>
          <text x="670" y="132" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">
            Delivery
          </text>
          <text x="670" y="149" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">
            Center
          </text>
          <text x="670" y="210" textAnchor="middle" fontSize="20">
            🇮🇳
          </text>
          <text x="670" y="235" textAnchor="middle" fontSize="12" fill="var(--color-muted)">
            New Delhi, India
          </text>
        </g>
      </svg>
    </div>
  );
}
