'use client';

import Link from 'next/link';
import { Mail, Phone, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const socials = [
  { href: 'https://www.linkedin.com/company/accounstone/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.facebook.com/profile.php?id=61591501869187', label: 'Facebook', icon: Facebook },
  { href: 'https://www.instagram.com/accounstone?igsh=cTVpcXp0bG9sbnZy', label: 'Instagram', icon: Instagram },
  { href: 'https://www.youtube.com/@accounstone', label: 'YouTube', icon: Youtube },
];

export default function HeaderBar() {
  return (
    <div className="w-full bg-primary-dark text-white/80 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-2 flex items-center justify-between gap-4">
        {/* Left — contact info */}
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="mailto:partner@accounstone.com"
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={13} className="shrink-0" aria-hidden="true" />
            partner@accounstone.com
          </a>
          <a
            href="tel:+919990597192"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={13} className="shrink-0" aria-hidden="true" />
            +91 99905 97192
          </a>
        </div>

        {/* Right — social icons + CTA */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-1.5">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
          <span className="hidden md:block w-px h-4 bg-white/20" aria-hidden="true" />
          <Link
            href="/contact"
            className="hidden md:inline-flex whitespace-nowrap px-4 py-1.5 rounded-full bg-accent text-white font-semibold text-xs hover:bg-accent-light transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
