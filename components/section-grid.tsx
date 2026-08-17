'use client';

import FeatureCard from './feature-card';
import Reveal from './reveal';
import IconBadge from './icon-badge';

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
    <section className="w-full py-14 md:py-16 px-6 md:px-8 bg-background dot-grid">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 md:mb-14 max-w-3xl mx-auto text-center space-y-4">
          <>
            {subtitle && (
              <span className="inline-flex items-center justify-center text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-accent">
                {subtitle}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary text-balance">
              {title}
            </h2>
            {description && (
              <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-7 md:leading-8">
                {description}
              </p>
            )}
          </>
        </Reveal>

        <div className={`grid grid-cols-1 ${colsClass} gap-6 md:gap-7`}>
          {items.map((item, index) => {
            const cardVariant =
              featuredItemIndex !== undefined && index === featuredItemIndex
                ? 'featured'
                : variant;
            return (
              <Reveal key={item.id} delay={Math.min(index * 0.06, 0.3)}>
                <FeatureCard
                  icon={<IconBadge name={item.id} fallback={item.icon} variant={cardVariant === 'featured' ? 'featured' : 'default'} />}
                  title={item.name}
                  description={item.description}
                  href={item.slug ? `${baseUrl}/${item.slug}` : undefined}
                  features={item.features}
                  variant={cardVariant}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
