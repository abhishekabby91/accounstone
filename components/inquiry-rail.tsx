'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import InquiryForm from '@/components/inquiry-form';
import { regions } from '@/lib/data';

/**
 * A compact enquiry form fixed to the right edge of the viewport.
 *
 * The site's content column is `max-w-5xl` (1024px), so at 1440px there is only
 * ~208px of margin either side - not enough for a 330px form to sit beside the
 * text. That single measurement drives the whole design here:
 *
 * - **Expanded by default only at >=1960px.** Measured, not guessed. The content
 *   column is centred and ~1230px wide, so its right edge sits at
 *   `(viewport + 1230) / 2` and the panel's left edge at `viewport - 342`. Those
 *   two meet at about 1914px, which is why 1700 and 1820 both still overlapped;
 *   1960 leaves a real margin rather than three pixels of luck. Below that it
 *   starts as a tab, and still expands on click at any width from 1280px up -
 *   once the reader asks for it, floating over the text is fine and there is a
 *   close button. Opening itself on top of a sentence is not.
 * - **Hidden below `xl` (1280px).** At 1024px the content column already fills
 *   the viewport, so even the collapsed tab would sit on top of it; 1280px is
 *   the first width with enough margin to hold the tab clear of the text. On
 *   phones and tablets the band, the dialog and the card triggers already cover
 *   the same job anyway.
 * - **Hides itself while the main `#inquiry` band is on screen.** Two identical
 *   forms visible at once reads as a bug, and the band is the better one.
 *
 * It is a complementary region, not a dialog: no focus trap, no backdrop, no
 * scroll lock. The reader is meant to keep reading with it open. That is also
 * why it never opens itself - `expanded` only changes on a click.
 *
 * `formId="rail"` keeps its field ids out of the band's namespace, and it must
 * never use `id="inquiry"` or `id="inquiry-heading"` - CLAUDE.md allows exactly
 * one of each per page and the band owns both.
 */

type RegionSlug = (typeof regions)[number]['slug'];

interface InquiryRailProps {
  region?: RegionSlug;
  service?: string;
  source?: string;
  /** Short heading for the panel. Keep it under ~30 characters. */
  title?: string;
}

export default function InquiryRail({ region, service, source, title }: InquiryRailProps) {
  const [expanded, setExpanded] = useState(false);
  const [bandVisible, setBandVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // See the note above for where 1960 comes from. Below it the panel would open
  // on top of the copy, so it starts collapsed instead.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1960px)');
    const sync = () => setExpanded(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Stand down while the full-size band is on screen.
  useEffect(() => {
    const band = document.getElementById('inquiry');
    if (!band) return;
    const io = new IntersectionObserver(
      ([entry]) => setBandVisible(entry.isIntersecting),
      { threshold: 0.12 },
    );
    io.observe(band);
    return () => io.disconnect();
  }, []);

  if (bandVisible) return null;

  return (
    <aside
      aria-label="Quick enquiry"
      // pt-28 keeps the panel clear of the sticky header: centred in the full
      // viewport it sat on top of the navbar's Get Started button.
      className="pointer-events-none fixed inset-y-0 right-0 z-[90] hidden items-center pb-5 pt-24 xl:flex"
    >
      {expanded ? (
        <div
          ref={panelRef}
          className="pointer-events-auto mr-3 max-h-full w-[320px] overflow-y-auto rounded-2xl border border-border bg-white p-4 shadow-[0_8px_40px_-12px_rgba(30,58,95,0.35)]"
        >
          <div className="mb-3 flex items-start justify-between gap-2">
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                Free consultation
              </span>
              <h2 className="mt-0.5 font-serif text-base font-bold leading-snug text-primary text-balance">
                {title ?? 'Ask Us About This Work'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="Collapse the enquiry form"
              aria-expanded={true}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-input hover:text-primary"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <InquiryForm
            region={region}
            service={service}
            source={source ? `${source} (rail)` : 'rail'}
            formId="rail"
            size="compact"
            minimal
            submitLabel="Book a Free Call"
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-expanded={false}
          className="pointer-events-auto flex w-10 flex-col items-center gap-2 rounded-l-xl bg-primary px-2 py-5 text-xs font-semibold text-white shadow-[0_8px_30px_-10px_rgba(30,58,95,0.5)] transition-colors hover:bg-primary-light"
        >
          <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="[writing-mode:vertical-rl] rotate-180 tracking-wide">
            Free consultation
          </span>
        </button>
      )}
    </aside>
  );
}
