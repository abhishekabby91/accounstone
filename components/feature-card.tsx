'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

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
  const baseClasses = `p-8 rounded-xl transition-all duration-300 ${className}`;

  const variantClasses = {
    default: 'bg-white border-2 border-border hover:border-accent hover:shadow-lg',
    featured: 'bg-accent text-white border-2 border-accent shadow-lg',
    minimal: 'bg-transparent border-2 border-muted hover:border-accent',
  }[variant];

  const content = (
    <div className="space-y-4 h-full flex flex-col">
      {icon && (
        <div className={`text-4xl ${variant === 'featured' ? '' : ''}`}>
          {typeof icon === 'string' ? <span>{icon}</span> : icon}
        </div>
      )}

      <div>
        <h3 className={`text-xl font-bold mb-2 ${
          variant === 'featured' ? 'text-white' : 'text-primary'
        }`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${
          variant === 'featured' ? 'text-white/90' : 'text-muted'
        }`}>
          {description}
        </p>
      </div>

      {features && features.length > 0 && (
        <ul className={`space-y-2 text-sm ${variant === 'featured' ? 'text-white/80' : 'text-foreground'}`}>
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className={`w-4 h-4 mt-0.5 shrink-0 ${variant === 'featured' ? 'text-white' : 'text-accent'}`} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {href && (
        <div className="pt-4 mt-auto">
          <Link
            href={href}
            className={`inline-flex items-center text-sm font-semibold transition-colors ${
              variant === 'featured'
                ? 'text-white hover:text-white/80'
                : 'text-accent hover:text-primary'
            }`}
          >
            Learn more →
          </Link>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <div className={`${baseClasses} ${variantClasses} cursor-pointer`}>
          {content}
        </div>
      </Link>
    );
  }

  return <div className={`${baseClasses} ${variantClasses}`}>{content}</div>;
}
