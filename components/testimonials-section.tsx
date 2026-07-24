'use client';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  text: string;
  image?: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  title = 'What Our Clients Say',
  subtitle,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          {subtitle && (
            <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
              {subtitle}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
            {title}
          </h2>
          <p className="text-sm text-muted max-w-2xl mx-auto pt-2">
            Illustrative feedback based on common client engagement themes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-input border-2 border-border rounded-xl p-8 space-y-6 hover:border-accent transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl text-secondary">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed text-lg italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t-2 border-border">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}