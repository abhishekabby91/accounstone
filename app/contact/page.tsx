'use client';

import { useState, FormEvent } from 'react';
import { Check, Mail, Phone, MapPin } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import { companyInfo, services } from '@/lib/data';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  // What the visitor typed, kept only so the fallback below can pre-fill a
  // message without making them retype it.
  const [unsent, setUnsent] = useState<FormData | null>(null);

  // The visitor stays on this page: the form submits, and they see the result
  // here. The email fallback below is only offered if the send genuinely fails,
  // and only as a button they can choose - it used to fire on its own, which is
  // what made the form read as a mailto link in disguise.
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

    const get = (k: string) => ((data.get(k) as string) || '').trim();

    try {
      // The key comes from the server at submit time rather than being baked
      // into the bundle, so it stays out of this public repository and can be
      // rotated in Vercel without a redeploy.
      const keyRes = await fetch('/api/contact/key', { cache: 'no-store' });
      const keyJson = (await keyRes.json().catch(() => null)) as { accessKey?: string } | null;

      if (!keyRes.ok || !keyJson?.accessKey) {
        setUnsent(data);
        setStatus('error');
        setErrorMessage('mailto');
        return;
      }

      // Submitted from the browser, not the server. Web3Forms is behind
      // Cloudflare, which serves a JS challenge to server-side callers - a real
      // browser clears it, a serverless function never can.
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: keyJson.accessKey,
          subject: `Consultation request from ${get('name')}`,
          from_name: 'Accounstone website',
          name: get('name'),
          email: get('email'),
          message: get('message'),
          ...(get('company') && { company: get('company') }),
          ...(get('phone') && { phone: get('phone') }),
          ...(get('service') && { service_interest: get('service') }),
          // Web3Forms discards a submission that fills this. People cannot see
          // the field; bots fill everything.
          botcheck: get('botcheck'),
        }),
      });
      const result = (await res.json().catch(() => null)) as { success?: boolean } | null;

      if (res.ok && result?.success) {
        form.reset();
        setStatus('sent');
        return;
      }

      setUnsent(data);
      setStatus('error');
      setErrorMessage('mailto');
    } catch {
      setUnsent(data);
      setStatus('error');
      setErrorMessage('mailto');
    }
  };

  return (
    <main>
      <PremiumHero
        subtitle="Get in Touch"
        title="Tell Us What You Are Working With"
        description="Tell us what you are working with — the volume, the systems, the deadlines — and we will talk through what support would actually change."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  Start a Conversation
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
                <div role="alert" className="p-4 rounded-lg bg-input border-2 border-accent text-sm text-foreground space-y-3">
                  <p>
                    <strong className="font-semibold">We could not send that automatically.</strong> Nothing you typed
                    has been lost &mdash; you can send it as an email instead, already filled in.
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <button
                      type="button"
                      onClick={() => unsent && openMailClient(unsent)}
                      className="inline-block py-2 px-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Send by email instead
                    </button>
                    <span>
                      or write to{' '}
                      <a href={`mailto:${companyInfo.contact.email}`} className="inline-block py-1 font-semibold text-primary hover:underline">
                        {companyInfo.contact.email}
                      </a>
                    </span>
                  </div>
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
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                  className="w-full px-6 py-4 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-primary disabled:hover:shadow-md"
                >
                  {status === 'submitting' ? 'Sending\u2026' : 'Send Your Enquiry'}
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
                  'A scoping conversation before anything is committed',
                  'A written proposal built around your actual workflow',
                  'No long-term contracts required',
                  'A reply within one business day',
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
