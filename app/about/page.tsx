import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Rocket, Lock, Zap, Handshake, DollarSign } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';
import { trustBadges } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description:
    'Learn about Accounstone, our mission to provide expert outsourced accounting services for CPA firms and growing businesses.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main>
      <PremiumHero
        subtitle="Our Story"
        title="Practical Accounting Support, Built to Last"
        description="Accounstone helps CPA firms and growing businesses keep their books accurate and current, with expertise, integrity, and dedication."
        background="primary-gradient"
      />

      {/* Mission & Vision */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  Our Mission
                </span>
                <h2 className="text-4xl font-bold text-primary mt-2">
                  Empower Businesses to Grow
                </h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">
                We believe that small and mid-size businesses deserve accounting support that actually works for them, not a one-size-fits-all package. Our mission is to handle the complexity of accounting so you can focus on what you do best: running your business.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                By combining hands-on expertise with modern technology and dedicated teams, we deliver accurate books and dependable accounting support that helps your business run smoothly.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  Our Values
                </span>
                <h3 className="text-4xl font-bold text-primary mt-2">
                  Excellence & Integrity
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Expertise', desc: 'Real, hands-on accounting knowledge, not just credentials on paper' },
                  { title: 'Integrity', desc: 'Transparent, ethical, and trustworthy relationships — we say what\'s actually true' },
                  { title: 'Partnership', desc: 'Invested in your success, not just transactions' },
                  { title: 'Innovation', desc: 'Modern technology and forward-thinking solutions' },
                ].map((value, i) => (
                  <div key={i} className="space-y-1">
                    <h4 className="font-bold text-primary">{value.title}</h4>
                    <p className="text-muted text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are — honest, growing-company framing */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center text-balance mb-16">
            A Growing Team, Not a Faceless Vendor
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center space-y-3 p-6 rounded-lg bg-white border-2 border-border">
              <h3 className="text-xl font-semibold text-primary">Real Experience</h3>
              <p className="text-sm text-muted">Our team brings 24+ years of combined hands-on accounting experience to every engagement.</p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-lg bg-white border-2 border-border">
              <h3 className="text-xl font-semibold text-primary">Building Deliberately</h3>
              <p className="text-sm text-muted">We're a growing company and we'd rather earn trust with honest work than inflate our track record.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges — only real, verified items */}
      <section className="w-full py-12 px-6 md:px-8 bg-white border-y-2 border-border">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-3 bg-input rounded-lg border-2 border-border">
              <span className="text-xl" aria-hidden="true">{badge.icon}</span>
              <span className="font-medium text-sm text-foreground">{badge.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work — links to the previously orphaned delivery-framework pages */}
      <section className="w-full py-16 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Want to See How We Actually Work?</h2>
          <p className="text-muted">
            Evaluating a vendor for your firm or business means asking specifics, not just reading marketing copy. Here's exactly how we onboard, communicate, and review work:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/delivery-framework/onboarding" className="px-5 py-3 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors font-medium text-primary">
              Onboarding Process
            </Link>
            <Link href="/delivery-framework/communication" className="px-5 py-3 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors font-medium text-primary">
              Communication Standards
            </Link>
            <Link href="/delivery-framework/quality-assurance" className="px-5 py-3 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors font-medium text-primary">
              Quality Assurance
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
              What Sets Us Apart
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance">
              Why Businesses Choose Accounstone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Real Expertise',
                desc: '24+ years of combined hands-on accounting experience across our team.',
              },
              {
                icon: Rocket,
                title: 'Growth Focus',
                desc: 'We don\'t just manage finances; we provide practical guidance to fuel growth.',
              },
              {
                icon: Lock,
                title: 'Security-First, Honestly Stated',
                desc: 'NDA-backed engagements and secure data handling practices. We\'re actively working toward SOC 2 certification and will tell you exactly where we stand.',
              },
              {
                icon: Zap,
                title: 'Modern Technology',
                desc: 'Cloud-based systems (QuickBooks Online, Xero, and more), automation, and real-time reporting tools.',
              },
              {
                icon: Handshake,
                title: 'True Partnership',
                desc: 'A dedicated team invested in your success, not a rotating pool of vendors.',
              },
              {
                icon: DollarSign,
                title: 'Cost Effective',
                desc: 'Flexible engagement models designed to fit your budget and needs.',
              },
            ].map((item, i) => (
              <div key={i} className="space-y-3 p-6 bg-input rounded-xl border-2 border-border">
                <item.icon className="w-10 h-10 text-accent" aria-hidden="true" />
                <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Partner with Accounstone?"
        description="Let&apos;s discuss how we can help your business grow."
        cta={{
          text: 'Schedule a Consultation',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary"
      />
    </main>
  );
}
