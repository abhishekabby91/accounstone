import Reveal from '@/components/reveal';

/**
 * Consistent eyebrow / heading / lead block.
 *
 * The eyebrow sits above a short hairline rule rather than floating on its
 * own - it gives the heading a visual anchor at every width without needing a
 * decorative container.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  as: As = 'h2',
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}) {
  const centered = align === 'center';
  return (
    <Reveal className={centered ? 'text-center' : ''}>
      <div className={`space-y-3 ${centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>
        {eyebrow && (
          <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
            <span aria-hidden="true" className="h-px w-8 bg-secondary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">{eyebrow}</span>
            {centered && <span aria-hidden="true" className="h-px w-8 bg-secondary" />}
          </div>
        )}
        <As className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance leading-tight">
          {title}
        </As>
        {lead && <p className="text-base md:text-lg text-muted leading-relaxed">{lead}</p>}
      </div>
    </Reveal>
  );
}
