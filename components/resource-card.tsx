import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ResourceItem } from '@/lib/resources';

/**
 * Card for a guide, insight or article.
 *
 * Design notes:
 * - Uses --font-serif (Georgia), which the brand already defines but nothing
 *   used. Resources is the editorial part of the site, so a serif title gives
 *   it its own character without introducing a new typeface.
 * - The left accent rail is the only decorative element and it carries
 *   hierarchy: 4px on a featured card, 2px otherwise, and it warms on hover.
 * - Topic and region chips are real classifications from lib/resources.ts,
 *   not ornament.
 *
 * Responsive: the whole card is one flex column, so it reflows at any width.
 * Chips wrap. The title never truncates - CLAUDE.md notes these run 60-90
 * characters, which is also why these listings stay one per row.
 */
export default function ResourceCard({ item, featured = false }: { item: ResourceItem; featured?: boolean }) {
  return (
    <Link
      href={item.href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)] ${
        featured ? 'p-6 sm:p-8 md:p-10' : 'p-5 sm:p-7'
      }`}
    >
      {/* Accent rail - decorative, so hidden from assistive tech */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 h-full bg-gradient-to-b from-accent to-secondary transition-all duration-200 ${
          featured ? 'w-1' : 'w-0.5 group-hover:w-1'
        }`}
      />

      <div className="flex flex-wrap items-center gap-2 mb-3">
        {featured && (
          <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            Start here
          </span>
        )}
        {item.isNew && !featured && (
          <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            New
          </span>
        )}
        {item.topics.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full bg-input px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted"
          >
            {t}
          </span>
        ))}
        {item.regions?.map((r) => (
          <span
            key={r}
            className="inline-flex items-center rounded-full border border-secondary/50 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary"
          >
            {r}
          </span>
        ))}
      </div>

      <h3
        className={`font-serif font-bold text-primary text-balance leading-snug ${
          featured ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl'
        }`}
      >
        {item.title}
      </h3>

      <p className={`mt-2.5 text-muted leading-relaxed ${featured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
        {item.description}
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Read the {featured ? 'guide' : 'piece'}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
