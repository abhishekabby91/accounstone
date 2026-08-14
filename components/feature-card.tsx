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
    default: 'bg-white border border-border/80 shadow-sm hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl',
    featured: 'bg-primary text-white border border-primary shadow-xl hover:-translate-y-1 hover:shadow-2xl',
    minimal: 'bg-transparent border border-border hover:-translate-y-1 hover:border-accent hover:bg-white hover:shadow-lg',
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
        <div className="pt-2 mt-auto">
          <span className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-transform duration-300 group-hover:gap-2.5 ${variant === 'featured' ? 'text-white' : 'text-accent'}`}>
            Explore service
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
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