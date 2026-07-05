'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  columns?: 1 | 2;
}

export default function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle,
  items,
  columns = 1,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const colsClass = columns === 2 ? 'md:grid-cols-2' : '';

  return (
    <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
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
        </div>

        {/* FAQ Items */}
        <div className={`grid grid-cols-1 ${colsClass} gap-6`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="border-2 border-border rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left font-semibold text-lg text-primary hover:bg-input transition-colors flex items-center justify-between group"
              >
                <span>{item.question}</span>
                <span className={`text-2xl text-accent transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ↓
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-input border-t-2 border-border">
                  <p className="text-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
