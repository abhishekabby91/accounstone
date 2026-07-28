import {
  BookOpen,
  Calculator,
  Receipt,
  Wallet,
  CreditCard,
  Inbox,
  LineChart,
  ShieldCheck,
  Globe,
  UserPlus,
  UsersRound,
  Building2,
  Landmark,
  Cpu,
  HeartPulse,
  ShoppingCart,
  Home,
  Scale,
  Plug2,
  Cloud,
  TrendingUp,
  Network,
  FileText,
  Target,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

// Semantic icon keys mapped to Lucide components -- replaces the
// generic emoji icons that were used throughout (a common tell of
// unpolished template sites). One consistent, professionally designed
// icon set instead of 25 hand-picked emoji.
const ICON_MAP: Record<string, LucideIcon> = {
  // Services
  bookkeeping: BookOpen,
  accounting: Calculator,
  'tax-preparation': Receipt,
  payroll: Wallet,
  'accounts-payable': CreditCard,
  'accounts-receivable': Inbox,
  'cfo-support': LineChart,
  'audit-support': ShieldCheck,
  // Solutions
  'offshore-accounting-support': Globe,
  'staff-augmentation': UserPlus,
  'dedicated-accounting-teams': UsersRound,
  'back-office-support': Building2,
  // Industries
  'cpa-firms': Landmark,
  technology: Cpu,
  healthcare: HeartPulse,
  ecommerce: ShoppingCart,
  'real-estate': Home,
  'professional-services': Scale,
  // Technologies
  quickbooks: Plug2,
  xero: Cloud,
  sage: TrendingUp,
  netsuite: Network,
  'drake-tax': FileText,
  cch: Target,
  myob: Briefcase,
};

interface IconBadgeProps {
  /** Semantic key matching an entry's slug/id in lib/data.ts */
  name: string;
  /** Falls back to this raw string (e.g. an emoji) if no mapped icon exists */
  fallback?: string;
  variant?: 'default' | 'featured';
  size?: 'sm' | 'md';
}

export default function IconBadge({ name, fallback, variant = 'default', size = 'md' }: IconBadgeProps) {
  const Icon = ICON_MAP[name];

  const dimensions = size === 'sm' ? 'w-10 h-10' : 'w-14 h-14';
  const iconSize = size === 'sm' ? 20 : 26;

  if (!Icon) {
    // Fallback for anything not yet mapped (e.g. markets, which
    // correctly use flag emoji -- a real icon there would be a
    // downgrade, not an upgrade).
    return <span className="text-4xl">{fallback ?? '•'}</span>;
  }

  const badgeStyle =
    variant === 'featured'
      ? 'bg-white/15 text-white'
      : 'bg-primary/8 text-primary';

  return (
    <div className={`inline-flex items-center justify-center rounded-xl ${dimensions} ${badgeStyle}`}>
      <Icon size={iconSize} strokeWidth={1.75} />
    </div>
  );
}
