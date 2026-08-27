import Reveal from '@/components/reveal';
import { serviceDepth } from '@/lib/service-depth';

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

  return (
    <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal className="max-w-3xl space-y-3 mb-8"><>
          <span className="text-sm font-semibold tracking-wide uppercase text-accent">{entry.eyebrow}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">{entry.title}</h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">{entry.intro}</p>
        </></Reveal>
        <ol className="space-y-3.5">
          {entry.items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
              <li className="p-5 sm:p-6 bg-input rounded-xl border border-border/70">
                <h3 className="font-bold text-primary mb-1.5 text-base sm:text-lg">{item.h}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">{item.p}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
