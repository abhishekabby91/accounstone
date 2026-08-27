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
    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          {subtitle && (
            <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
              {subtitle}
            </span>
          )}
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
            {title}
          </h2>
        </div>

        <div className={`grid grid-cols-1 ${colsClass} gap-6`}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="border-2 border-border rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full px-6 py-5 text-left font-semibold text-lg text-primary hover:bg-input transition-colors flex items-center justify-between group"
                >
                  <span>{item.question}</span>
                  <span
                    className={`text-2xl text-accent transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 py-4 bg-input border-t-2 border-border">
                      <p className="text-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}