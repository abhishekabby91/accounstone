import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import { generateMetadata } from '@/lib/seo';
import { companyInfo } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Accounstone to discuss your accounting and finance needs.',
  path: '/contact',
});

export default function ContactPage() {
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

              <form className="space-y-5">
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
                    <option value="accounting">Accounting Services</option>
                    <option value="tax">Tax Planning</option>
                    <option value="advisory">Financial Advisory</option>
                    <option value="hr">HR & Compliance</option>
                    <option value="other">Other</option>
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
                <div className="text-2xl text-accent flex-shrink-0">✉</div>
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
                <div className="text-2xl text-accent flex-shrink-0">📞</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a
                    href={`tel:${companyInfo.contact.phone}`}
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="text-2xl text-accent flex-shrink-0">📍</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted">{companyInfo.contact.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-input rounded-xl p-6 border-2 border-border space-y-3">
                <h4 className="font-semibold text-foreground">Business Hours</h4>
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
                    <span className="text-accent text-lg flex-shrink-0">✓</span>
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
