import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

interface FeatureCardProps {
  icon?: string | React.ReactNode;
  title: string;
  description: string;
  href?: string;
  features?: string[];
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  features,
  variant = 'default',
  className = '',
}: FeatureCardProps) {
  const baseClasses = `group h-full p-7 md:p-8 rounded-2xl transition-all duration-300 ${className}`;

  const variantClasses = {
    default: 'bg-white border border-border/70 shadow-[0_1px_3px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-primary/15 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]',
    featured: 'bg-primary text-white border border-primary shadow-xl hover:-translate-y-1 hover:shadow-2xl',
    minimal: 'bg-transparent border border-border hover:-translate-y-1 hover:border-accent/50 hover:bg-white hover:shadow-lg',
  }[variant];

  const content = (
    <div className="space-y-5 h-full flex flex-col">
      {icon && <div className="shrink-0">{typeof icon === 'string' ? <span>{icon}</span> : icon}</div>}

      <div>
        <h3 className={`text-xl font-bold mb-2 ${variant === 'featured' ? 'text-white' : 'text-primary'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-7 ${variant === 'featured' ? 'text-white/85' : 'text-muted'}`}>
          {description}
        </p>
      </div>

      {features && features.length > 0 && (
        <ul className={`space-y-2.5 text-sm ${variant === 'featured' ? 'text-white/85' : 'text-foreground'}`}>
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check className={`w-4 h-4 mt-1 shrink-0 ${variant === 'featured' ? 'text-white' : 'text-accent'}`} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {href && (
        <div className="pt-3 mt-auto">
          <span className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${variant === 'featured' ? 'text-white' : 'text-primary'} group-hover:gap-3`}>
            View details
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full" aria-label={`Explore ${title}`}>
        <div className={`${baseClasses} ${variantClasses}`}>
          {content}
        </div>
      </Link>
    );
  }

  return <div className={`${baseClasses} ${variantClasses}`}>{content}</div>;
}