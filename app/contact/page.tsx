'use client';

import { useState, FormEvent } from 'react';
import { Check, Mail, Phone, MapPin } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import { companyInfo, services } from '@/lib/data';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  // NOTE: There is no backend/email API wired up yet, so this builds a
  // mailto: link from the form fields and opens the user's email client
  // as a functional fallback. This is a stopgap, not the ideal solution
  // -- a proper form service (e.g. Formspree) or a Next.js API route
  // with an email provider (e.g. Resend) would submit without leaving
  // the page and wouldn't depend on the visitor having a configured
  // email client. Swap this out once that decision is made.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const company = data.get('company') as string;
    const phone = data.get('phone') as string;
    const service = data.get('service') as string;
    const message = data.get('message') as string;

    const subject = `Consultation Request from ${name || 'Website Visitor'}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      phone ? `Phone: ${phone}` : null,
      service ? `Service Interest: ${service}` : null,
      '',
      'Message:',
      message || '(none provided)',
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoLink = `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setStatus('sent');
  };

  return (
    <main>
      <PremiumHero
        subtitle="Get in Touch"
        title="Let&apos;s Talk About Your Business"
        description="Ready to transform your accounting operations? Schedule a free consultation with one of our experts."
        background="primary-gradient"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  Free Consultation
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Schedule Your Meeting
                </h2>
              </div>

              {status === 'sent' && (
                <div role="status" className="p-4 rounded-lg bg-accent/10 border-2 border-accent text-sm text-foreground">
                  Your email client should have opened with your message ready to send. If it didn&apos;t open, please email us directly at{' '}
                  <a href={`mailto:${companyInfo.contact.email}`} className="font-semibold text-primary hover:underline">
                    {companyInfo.contact.email}
                  </a>.
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-input"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-input"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-input"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Schedule Free Consultation
                </button>

                <p className="text-xs text-muted text-center">
                  We&apos;ll respond within 24 business hours.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  Contact Information
                </span>
                <h3 className="text-3xl font-bold text-primary">
                  Reach Out Today
                </h3>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a
                    href={`tel:${companyInfo.contact.phone}`}
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    +91 99905 97192
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted">{companyInfo.contact.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-input rounded-xl p-6 border-2 border-border space-y-3">
                <h4 className="font-semibold text-foreground">Client Support Hours</h4>
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 pt-4">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  What to Expect
                </p>
                {[
                  'Free initial consultation',
                  'Expert recommendations tailored to your business',
                  'No long-term contracts required',
                  'Fast response within 24 hours',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
