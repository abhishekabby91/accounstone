/**
 * Bespoke line illustrations, one per service.
 *
 * Drawn for this site rather than picked from a stock set, and each one shows
 * the actual mechanic of the work: a ledger reconciling, a close sequence
 * collapsing into one report, an approval gate holding an invoice back, a
 * schedule tying to a balance. AI-WEBSITE-GUIDE.md principle 5 makes the case
 * in words - operational specificity is what proves you understand the job -
 * and this is the same argument in pictures. A generic calculator graphic would
 * say nothing a competitor's could not.
 *
 * What keeps the seven reading as one family:
 * - one 200x150 viewBox and one 1.6 stroke weight throughout
 * - navy line work via `currentColor`, so a parent sets the colour
 * - the brand gold as a single ground rule along the base of every drawing
 * - the burnt-orange accent used exactly once per illustration, always on the
 *   thing that needs a human decision - the exception, the unsigned line, the
 *   held invoice, the overdue bucket
 *
 * They are decorative: every one sits beside copy that already says the same
 * thing, so they carry `aria-hidden` and add nothing for a screen reader to
 * announce twice. Inline SVG, so there is no extra request and nothing to
 * lazy-load.
 */

const ACCENT = 'var(--color-accent)';
const GOLD = 'var(--color-secondary)';

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-auto w-full text-primary"
    >
      {/* Shared ground: a faint ruled field and the gold baseline. */}
      <g opacity={0.12}>
        {[26, 50, 74, 98, 122].map((y) => (
          <line key={y} x1={14} y1={y} x2={186} y2={y} />
        ))}
      </g>
      {children}
      <line x1={14} y1={140} x2={186} y2={140} stroke={GOLD} strokeWidth={2.4} />
    </svg>
  );
}

/** Bookkeeping: two columns agreeing, and the one row that does not. */
function Bookkeeping() {
  return (
    <Frame>
      <rect x={20} y={22} width={72} height={96} rx={5} />
      <rect x={108} y={22} width={72} height={96} rx={5} />
      {[40, 58, 76, 94].map((y) => (
        <g key={y}>
          <line x1={30} y1={y} x2={72} y2={y} opacity={0.55} />
          <line x1={118} y1={y} x2={160} y2={y} opacity={0.55} />
        </g>
      ))}
      {/* agreed rows */}
      {[40, 58, 94].map((y) => (
        <path key={y} d={`M78 ${y} l3.5 3.5 L88 ${y - 5}`} />
      ))}
      {/* the exception, the only thing anyone needs to look at */}
      <circle cx={83} cy={76} r={7} stroke={ACCENT} strokeWidth={2.2} />
      <line x1={83} y1={73} x2={83} y2={77} stroke={ACCENT} strokeWidth={2.2} />
      <circle cx={83} cy={80.5} r={0.9} fill={ACCENT} stroke="none" />
    </Frame>
  );
}

/** Accounting: a sequence of period work collapsing into one reviewable close. */
function Accounting() {
  return (
    <Frame>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={18 + i * 9} y={34 + i * 7} width={62} height={70} rx={5} opacity={i === 2 ? 1 : 0.35} />
      ))}
      {[58, 74, 90].map((y) => (
        <line key={y} x1={46} y1={y} x2={88} y2={y} opacity={0.5} />
      ))}
      <path d="M108 76 h26" />
      <path d="M128 70 l7 6 -7 6" />
      <rect x={144} y={40} width={38} height={72} rx={5} />
      <line x1={152} y1={58} x2={174} y2={58} opacity={0.5} />
      <line x1={152} y1={72} x2={174} y2={72} opacity={0.5} />
      <line x1={152} y1={86} x2={166} y2={86} opacity={0.5} />
      {/* the sign-off that stays with the reviewer */}
      <path d="M152 100 q6 -7 11 0 t11 0" stroke={ACCENT} strokeWidth={2.2} />
    </Frame>
  );
}

/** Tax preparation: workpapers behind a return, and a signature line left blank. */
function TaxPreparation() {
  return (
    <Frame>
      {[0, 1].map((i) => (
        <rect key={i} x={30 + i * 8} y={20 + i * 6} width={80} height={98} rx={5} opacity={0.3} />
      ))}
      <rect x={46} y={32} width={80} height={98} rx={5} fill="var(--color-background)" />
      <line x1={58} y1={50} x2={114} y2={50} opacity={0.55} />
      <line x1={58} y1={64} x2={114} y2={64} opacity={0.55} />
      <line x1={58} y1={78} x2={100} y2={78} opacity={0.55} />
      <rect x={58} y={90} width={24} height={14} rx={2} opacity={0.45} />
      <rect x={90} y={90} width={24} height={14} rx={2} opacity={0.45} />
      {/* prepared to here; the signature is not ours to give */}
      <line x1={58} y1={118} x2={114} y2={118} stroke={ACCENT} strokeWidth={2.2} strokeDasharray="5 4" />
      <path d="M142 60 l7 7 12 -14" stroke={GOLD} strokeWidth={2.4} />
      <circle cx={152} cy={64} r={20} opacity={0.25} />
    </Frame>
  );
}

/** Payroll: the same run, every cycle. */
function Payroll() {
  return (
    <Frame>
      <rect x={18} y={30} width={76} height={88} rx={5} />
      {[46, 62, 78, 94].map((y) => (
        <g key={y}>
          <circle cx={32} cy={y} r={4} opacity={0.5} />
          <line x1={42} y1={y} x2={84} y2={y} opacity={0.5} />
        </g>
      ))}
      {/* the recurring cycle the run belongs to */}
      <circle cx={146} cy={72} r={30} opacity={0.35} />
      <path d="M146 42 a30 30 0 1 1 -22 9.6" stroke={ACCENT} strokeWidth={2.4} />
      <path d="M124 44 l0 8 8 0" stroke={ACCENT} strokeWidth={2.4} />
      <path d="M138 72 h16" />
      <path d="M146 64 v16" />
      <path d="M104 72 h16" />
      <path d="M114 66 l7 6 -7 6" />
    </Frame>
  );
}

/** Accounts payable: a queue, an approval gate, and the one held back. */
function AccountsPayable() {
  return (
    <Frame>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={16} y={30 + i * 30} width={54} height={22} rx={3} opacity={i === 1 ? 1 : 0.4} />
      ))}
      {/* the gate: nothing passes without a decision */}
      <line x1={92} y1={22} x2={92} y2={126} strokeDasharray="6 5" opacity={0.5} />
      <rect x={78} y={62} width={28} height={26} rx={4} stroke={ACCENT} strokeWidth={2.2} />
      <path d="M85 75 l4 4 8 -9" stroke={ACCENT} strokeWidth={2.2} />
      <path d="M70 41 h48" opacity={0.5} />
      <path d="M110 35 l7 6 -7 6" opacity={0.5} />
      <path d="M70 101 h48" opacity={0.5} />
      <path d="M110 95 l7 6 -7 6" opacity={0.5} />
      <rect x={126} y={30} width={58} height={22} rx={3} opacity={0.4} />
      <rect x={126} y={90} width={58} height={22} rx={3} opacity={0.4} />
    </Frame>
  );
}

/** Accounts receivable: the aging profile, and the bucket that has drifted. */
function AccountsReceivable() {
  return (
    <Frame>
      <line x1={24} y1={126} x2={24} y2={30} opacity={0.5} />
      {[
        { x: 40, h: 58 },
        { x: 74, h: 44 },
        { x: 108, h: 30 },
      ].map((b) => (
        <rect key={b.x} x={b.x} y={126 - b.h} width={22} height={b.h} rx={3} opacity={0.45} />
      ))}
      {/* 90+ days: the only bar anyone should be looking at */}
      <rect x={142} y={56} width={22} height={70} rx={3} stroke={ACCENT} strokeWidth={2.4} />
      <path d="M153 44 v-12" stroke={ACCENT} strokeWidth={2.2} />
      <circle cx={153} cy={27} r={2} fill={ACCENT} stroke="none" />
      <line x1={24} y1={126} x2={178} y2={126} />
    </Frame>
  );
}

/** Audit support: the schedule ties to the balance; the opinion stays outside. */
function AuditSupport() {
  return (
    <Frame>
      <rect x={16} y={26} width={70} height={88} rx={5} />
      {[44, 60, 76, 92].map((y) => (
        <line key={y} x1={26} y1={y} x2={66} y2={y} opacity={0.5} />
      ))}
      <rect x={114} y={26} width={70} height={88} rx={5} />
      {[44, 60, 76, 92].map((y) => (
        <line key={y} x1={124} y1={y} x2={164} y2={y} opacity={0.5} />
      ))}
      {/* the tie-out: prepared work agreeing to the balance */}
      <path d="M86 68 h28" stroke={ACCENT} strokeWidth={2.2} />
      <path d="M94 60 l-8 8 8 8" stroke={ACCENT} strokeWidth={2.2} />
      <path d="M106 60 l8 8 -8 8" stroke={ACCENT} strokeWidth={2.2} />
      {/* the opinion: outside the frame, and not ours */}
      <rect x={136} y={120} width={30} height={2} rx={1} stroke={GOLD} strokeWidth={2.4} />
    </Frame>
  );
}

const ILLUSTRATIONS: Record<string, () => React.JSX.Element> = {
  bookkeeping: Bookkeeping,
  accounting: Accounting,
  'tax-preparation': TaxPreparation,
  payroll: Payroll,
  'accounts-payable': AccountsPayable,
  'accounts-receivable': AccountsReceivable,
  'audit-support': AuditSupport,
};

export default function ServiceIllustration({
  service,
  className = '',
}: {
  service: string;
  className?: string;
}) {
  const Art = ILLUSTRATIONS[service];
  if (!Art) return null;
  return (
    <div className={className}>
      <Art />
    </div>
  );
}
