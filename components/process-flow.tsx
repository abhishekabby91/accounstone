import Link from 'next/link';
import { ArrowRight, CheckCircle2, KeyRound, MessageSquare, Play } from 'lucide-react';
import Reveal from '@/components/reveal';

/**
 * The four phases of starting an engagement, on a connected rail.
 *
 * The structure - numbered nodes hanging off a single line, each with an icon,
 * a title and a short line of copy - is the clearest way to show a sequence,
 * and it answers the question the homepage otherwise leaves open: what actually
 * happens if I get in touch. That is principle 1 in AI-WEBSITE-GUIDE.md,
 * reduce uncertainty before selling.
 *
 * It is deliberately NOT four unrelated colours. The reference this came from
 * used teal, orange, red and purple, which reads as a stock template and would
 * fight a navy-and-gold identity - the same failure mode CLAUDE.md records for
 * the emoji icons that were removed sitewide. So it follows the rule the
 * service illustrations already use: navy line work, a gold rail, and the
 * burnt-orange accent spent exactly once, on the step where the boundary
 * matters. Colour here carries meaning rather than decoration.
 *
 * The copy is a fair compression of the seven documented steps on
 * /delivery-framework/onboarding, not a new claim, and every card links there
 * so the full version is one click away.
 */

const PHASES = [
  {
    n: '01',
    icon: MessageSquare,
    title: 'Scope',
    body: 'A free half-hour call. What is falling behind, which systems it lives in, and who reviews the output.',
  },
  {
    n: '02',
    icon: KeyRound,
    title: 'Set up',
    body: 'Access established under your security protocols, and your existing workflows documented before anything moves.',
  },
  {
    n: '03',
    icon: Play,
    title: 'Soft launch',
    body: 'A defined slice runs alongside your current process, so both sides can judge it before the volume arrives.',
  },
  {
    n: '04',
    icon: CheckCircle2,
    title: 'Steady state',
    body: 'Full handover of the agreed scope. Review, judgement and sign-off stay with your team, in every market.',
    /** The one accent on this graphic. It marks the boundary, not the finish. */
    accent: true,
  },
];

export default function ProcessFlow() {
  return (
    <section className="w-full bg-white px-6 md:px-8 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-3xl space-y-3 md:mb-14">
          <>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent sm:text-sm">
                How it starts
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary text-balance md:text-3xl">
              Four Phases, and You Can Stop After Any of Them
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Nothing transfers on the first call. The work moves in stages, each one small enough to
              judge before the next begins.
            </p>
          </>
        </Reveal>

        <div className="relative">
          {/* The rail. Spans node centre to node centre across four columns, so
              it stops at the first and last node rather than running off. */}
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-secondary lg:block"
          />

          <ol className="relative grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-6">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.n} delay={Math.min(i * 0.08, 0.3)}>
                <li className="flex h-full flex-col items-center text-center">
                  <span
                    className={`relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-white font-serif text-base font-bold tabular-nums sm:h-14 sm:w-14 sm:text-lg ${
                      phase.accent
                        ? 'border-accent text-accent'
                        : 'border-border text-primary'
                    }`}
                  >
                    {phase.n}
                  </span>

                  <div className="mt-4 flex h-full w-full flex-col rounded-xl border border-border bg-input p-3.5 sm:mt-5 sm:p-6">
                    <phase.icon
                      className={`mx-auto mb-2 h-5 w-5 sm:mb-3 sm:h-6 sm:w-6 ${phase.accent ? 'text-accent' : 'text-primary'}`}
                      aria-hidden="true"
                    />
                    <h3 className="mb-1.5 font-bold text-primary text-sm leading-snug sm:mb-2 sm:text-lg">{phase.title}</h3>
                    <p className="text-xs leading-5 text-muted sm:text-sm sm:leading-relaxed">{phase.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.28} className="mt-8 flex justify-center">
          <Link
            href="/delivery-framework/onboarding"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-input"
          >
            See the full seven-step onboarding
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
