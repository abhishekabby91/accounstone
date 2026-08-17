'use client';

import { ClipboardCheck } from 'lucide-react';

interface EngagementTheme {
  name: string;
  title: string;
  company: string;
  text: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: EngagementTheme[];
}

export default function TestimonialsSection({
  title = 'Common Engagement Themes',
  subtitle,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center space-y-4 max-w-3xl mx-auto">
          {subtitle && (
            <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">{subtitle}</span>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">{title}</h2>
          <p className="text-muted leading-7">
            These are common workflow situations, not client testimonials. The right support model depends on the work, review process, systems, and capacity your team needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {testimonials.map((theme, index) => (
            <article
              key={index}
              className="group h-full bg-input border border-border/70 rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 w-11 rounded-xl bg-white border border-border flex items-center justify-center text-accent" aria-hidden="true">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{theme.title}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{theme.name}</h3>
              <p className="text-sm font-medium text-accent mb-4">{theme.company}</p>
              <p className="text-foreground leading-7">{theme.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
