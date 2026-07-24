'use client';

import FeatureCard from './feature-card';
import Reveal from './reveal';

interface GridItem {
  id: string;
  icon?: string;
  name: string;
  description: string;
  slug?: string;
  features?: string[];
}

interface SectionGridProps {
  title: string;
  subtitle?: string;
  description?: string;
  items: GridItem[];
  baseUrl?: string;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'featured' | 'minimal';
  featuredItemIndex?: number;
}

export default function SectionGrid({
  title,
  subtitle,
  description,
  items,
  baseUrl = '',
  columns = 3,
  variant = 'default',
  featuredItemIndex,
}: SectionGridProps) {
  const colsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns];

  return (
    <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal className="mb-16 text-center space-y-4">
          <>
            {subtitle && (
              <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                {subtitle}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </>
        </Reveal>

        {/* Grid */}
        <div className={`grid grid-cols-1 ${colsClass} gap-8`}>
          {items.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 0.06, 0.3)}>
              <FeatureCard
                icon={item.icon}
                title={item.name}
                description={item.description}
                href={item.slug ? `${baseUrl}/${item.slug}` : undefined}
                features={item.features}
                variant={
                  featuredItemIndex !== undefined && index === featuredItemIndex
                    ? 'featured'
                    : variant
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
