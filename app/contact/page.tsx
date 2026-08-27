'use client';

import { useState, FormEvent } from 'react';
import { Check, Mail, Phone, MapPin } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import { companyInfo, services } from '@/lib/data';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Posts to /api/contact, which forwards to Web3Forms server-side so the
  // access key never reaches the browser. If that route is unavailable -
  // most likely because WEB3FORMS_ACCESS_KEY is not set yet - we fall back to
  // opening the visitor's mail client with the message pre-filled, which is
  // what this form did before. An unconfigured key degrades, it does not
  // strand the visitor.
  const openMailClient = (data: FormData) => {
    const get = (k: string) => (data.get(k) as string) || '';
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Company: ${get('company')}`,
      get('phone') ? `Phone: ${get('phone')}` : null,
      get('service') ? `Service Interest: ${get('service')}` : null,
      '',
      'Message:',
      get('message') || '(none provided)',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(
      `Consultation Request from ${get('name') || 'Website Visitor'}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data });
      const result = (await res.json().catch(() => null)) as { ok?: boolean; reason?: string; message?: string } | null;

      if (res.ok && result?.ok) {
        form.reset();
        setStatus('sent');
        return;
      }

      // Not configured, or the provider is down: hand the visitor to their
      // mail client rather than showing a dead end.
      if (res.status === 503 || res.status === 502) {
        openMailClient(data);
        setStatus('error');
        setErrorMessage('mailto');
        return;
      }

      setStatus('error');
      setErrorMessage(result?.message || 'Something went wrong. Please try again.');
    } catch {
      openMailClient(data);
      setStatus('error');
      setErrorMessage('mailto');
    }
  };

  return (
    <main>
      <PremiumHero
        subtitle="Get in Touch"
        title="Let&apos;s Talk About Your Business"
        description="Ready to transform your accounting operations? Schedule a free consultation with one of our experts."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  Free Consultation
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  Schedule Your Meeting
                </h2>
              </div>

              {status === 'sent' && (
                <div role="status" className="p-4 rounded-lg bg-accent/10 border-2 border-accent text-sm text-foreground">
                  <strong className="font-semibold">Thanks &mdash; your message is on its way.</strong> We read every
                  enquiry ourselves and will come back to you shortly. If it is urgent, email{' '}
                  <a href={`mailto:${companyInfo.contact.email}`} className="inline-block py-1 font-semibold text-primary hover:underline">
                    {companyInfo.contact.email}
                  </a>.
                </div>
              )}

              {status === 'error' && errorMessage === 'mailto' && (
                <div role="status" className="p-4 rounded-lg bg-input border-2 border-border text-sm text-foreground">
                  Your email client should have opened with the message ready to send. If it did not, email us
                  directly at{' '}
                  <a href={`mailto:${companyInfo.contact.email}`} className="inline-block py-1 font-semibold text-primary hover:underline">
                    {companyInfo.contact.email}
                  </a>.
                </div>
              )}

              {status === 'error' && errorMessage !== 'mailto' && (
                <div role="alert" className="p-4 rounded-lg bg-input border-2 border-accent text-sm text-foreground">
                  {errorMessage}
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Honeypot. Hidden from people and from assistive tech; bots
                    fill it and the API discards the submission. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

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
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                  className="w-full px-6 py-4 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-primary disabled:hover:shadow-md"
                >
                  {status === 'submitting' ? 'Sending\u2026' : 'Schedule Free Consultation'}
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
                <h3 className="font-serif text-3xl font-bold text-primary">
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
                    className="inline-block py-1 text-primary hover:text-primary-light transition-colors"
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
                    className="inline-block py-1 text-primary hover:text-primary-light transition-colors"
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
