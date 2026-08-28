import { USFlag, GBFlag, AUFlag } from '@/components/flags';

/**
 * Region slug -> flag, so every surface draws the same one from one place.
 *
 * These are SVGs rather than emoji. Emoji flags are not rendered as flags on
 * Windows at all - Chrome and Edge fall back to the two regional-indicator
 * letters, so a visitor there sees "US" and "GB" as plain text next to
 * everything else. The SVG component was already in the repo and unused.
 */
const FLAGS = {
  'united-states': USFlag,
  'united-kingdom': GBFlag,
  australia: AUFlag,
} as const;

const NAMES = {
  'united-states': 'United States',
  'united-kingdom': 'United Kingdom',
  australia: 'Australia',
} as const;

export type FlagRegion = keyof typeof FLAGS;

export default function RegionFlag({
  region,
  className = '',
  decorative = false,
}: {
  region: string;
  className?: string;
  decorative?: boolean;
}) {
  const Flag = FLAGS[region as FlagRegion];
  if (!Flag) return null;

  // When the region name is already in the adjacent text, the flag is
  // decoration and repeating the country name to a screen reader is noise.
  return (
    <span aria-hidden={decorative ? 'true' : undefined} className="inline-flex shrink-0">
      <Flag className={`rounded-[2px] ring-1 ring-black/10 ${className}`} title={NAMES[region as FlagRegion]} />
    </span>
  );
}
