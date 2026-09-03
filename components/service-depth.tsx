import Reveal from '@/components/reveal';
import InquiryTrigger from '@/components/inquiry-trigger';
import { serviceDepth } from '@/lib/service-depth';
import { regions, services } from '@/lib/data';

/**
 * Renders the operational depth section on a Service x Region page.
 *
 * This content came down from the generic /services/{slug} pages when that
 * layer was retired (see SEO-CHANGELOG.md, 2026-08-27). Those pages held the
 * deepest content on the site but had zero editorial inbound links; the
 * regional pages had the commercial intent but were thinner. Merging the depth
 * down and then redirecting resolved that inversion without losing content.
 */
export default function ServiceDepth({ serviceSlug, regionSlug }: { serviceSlug: string; regionSlug: string }) {
  const entry = serviceDepth[`${serviceSlug}/${regionSlug}`];
  if (!entry) return null;

  // Each workstream is a piece of work we would actually take on, so the card
  // opens the enquiry dialog with that service already selected rather than
  // ending the reader's journey at a paragraph.
  const serviceName = services.find((s) => s.slug === serviceSlug)?.name;
  const region = regions.find((r) => r.slug === regionSlug)?.slug as
    | (typeof regions)[number]['slug']
    | undefined;

  return (
    <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal className="max-w-3xl space-y-3 mb-8"><>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-secondary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">{entry.eyebrow}</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">{entry.title}</h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">{entry.intro}</p>
        </></Reveal>

        {/* Numbered rail: the vertical line is drawn on the list, the markers
            sit on top of it. On mobile the marker moves inline above the
            heading so nothing is squeezed into a narrow column. */}
        <ol className="relative space-y-3.5 sm:space-y-4 sm:before:absolute sm:before:left-[19px] sm:before:top-3 sm:before:bottom-3 sm:before:w-px sm:before:bg-border">
          {entry.items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
              <li className="relative sm:pl-14">
                <span
                  aria-hidden="true"
                  className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white font-serif text-sm font-bold text-primary tabular-nums sm:absolute sm:left-[4px] sm:top-5 sm:mb-0"
                >
                  {i + 1}
                </span>
                <InquiryTrigger
                  className="rounded-xl border border-border bg-input p-5 sm:p-6 transition-colors hover:border-primary/40 hover:bg-white"
                  region={region}
                  service={serviceName}
                  source={`${entry.eyebrow} — ${item.h}`}
                  title={`Talk to Us About ${item.h}`}
                  label={`Ask us about ${item.h}`}
                >
                  <h3 className="font-bold text-primary mb-1.5 text-base sm:text-lg">{item.h}</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{item.p}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Talk to us about this
                  </span>
                </InquiryTrigger>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
