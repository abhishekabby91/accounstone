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
    <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <Reveal className="space-y-4"><>
          <span className="text-sm font-semibold tracking-wide uppercase text-accent">{entry.eyebrow}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">{entry.title}</h2>
          <div className="space-y-4 pt-1">
            {entry.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-muted leading-relaxed">{p}</p>
            ))}
          </div>
        </></Reveal>

        {entry.aside && (
          <Reveal delay={0.1}>
            <div className="mt-7 border-l-4 border-accent bg-input rounded-r-xl p-5 sm:p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-2">{entry.aside.label}</p>
              <p className="text-foreground leading-relaxed text-sm sm:text-base">{entry.aside.text}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
