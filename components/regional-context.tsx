import Reveal from '@/components/reveal';
import { regionalContext } from '@/lib/regional-context';

/**
 * The "if this sounds familiar" section on a Service x Region page.
 *
 * Deliberately prose, not bullets. These pages were bullet-heavy - scope
 * checklists, delegated/retained lists, numbered steps - which reads as a
 * feature inventory rather than an explanation. AI-WEBSITE-GUIDE.md asks for
 * the opposite: name the reader's actual situation (principle 4), use
 * operational specificity as proof of understanding (5), speak to the hidden
 * cost of review (2), and reduce uncertainty about what happens when
 * information is missing (1).
 *
 * ServiceDepth covers the mechanics. This covers the situation the reader is
 * actually in when they land on the page.
 */
export default function RegionalContext({ serviceSlug, regionSlug }: { serviceSlug: string; regionSlug: string }) {
  const entry = regionalContext[`${serviceSlug}/${regionSlug}`];
  if (!entry) return null;

  return (
    <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
      <div className="max-w-3xl mx-auto">
        <Reveal className="space-y-4"><>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-secondary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">{entry.eyebrow}</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">{entry.title}</h2>
          <div className="space-y-4 pt-1">
            {entry.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-muted leading-relaxed">{p}</p>
            ))}
          </div>
        </></Reveal>

        {entry.aside && (
          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-white">
              <div className="border-l-4 border-accent p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">{entry.aside.label}</p>
                <p className="text-sm sm:text-base leading-relaxed text-foreground">{entry.aside.text}</p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
