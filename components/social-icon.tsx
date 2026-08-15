'use client';

import { useState } from 'react';
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Official brand colors
const BRAND_COLORS: Record<string, string> = {
  LinkedIn:  '#0A66C2',
  Facebook:  '#1877F2',
  Instagram: '#E1306C',
  YouTube:   '#FF0000',
  Twitter:   '#1DA1F2',
  X:         '#000000',
};

// Icon map resolved inside the client component so no function
// is passed across the server→client boundary
const ICONS: Record<string, React.FC<LucideProps>> = {
  LinkedIn:  Linkedin,
  Facebook:  Facebook,
  Instagram: Instagram,
  YouTube:   Youtube,
  Twitter:   Twitter,
};

interface SocialIconProps {
  href: string;
  label: string;
  size?: number;
  variant?: 'header' | 'footer';
}

export default function SocialIcon({
  href,
  label,
  size = 14,
  variant = 'header',
}: SocialIconProps) {
  const [hovered, setHovered] = useState(false);
  const brandColor = BRAND_COLORS[label] ?? '#ffffff';
  const Icon = ICONS[label];

  const isHeader = variant === 'header';
  const sizeClasses = isHeader ? 'h-7 w-7' : 'h-9 w-9';

  const baseStyle: React.CSSProperties = isHeader
    ? { color: 'rgba(255,255,255,0.6)', background: 'transparent', borderRadius: '9999px' }
    : { color: 'rgba(255,255,255,0.65)', background: 'transparent', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.15)' };

  const hoverStyle: React.CSSProperties = isHeader
    ? { color: brandColor, background: `${brandColor}18`, borderRadius: '9999px' }
    : { color: brandColor, background: `${brandColor}18`, borderRadius: '9999px', border: `1px solid ${brandColor}60` };

  if (!Icon) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center transition-all duration-200 ${sizeClasses}`}
      style={hovered ? hoverStyle : baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={size} aria-hidden="true" />
    </a>
  );
}
