import { Metadata } from 'next';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description:
    'Learn about Accounstone, our mission to provide expert accounting services, and our team of experienced professionals.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main>
      <PremiumHero
        subtitle="Our Story"
        title="Building Better Financial Futures"
        description="Founded in 2009, Accounstone has been helping businesses of all sizes manage their finances with expertise, integrity, and dedication."
        background="primary-gradient"
      />

      {/* Mission & Vision */}
      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
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
                We believe that small and mid-size businesses deserve access to world-class accounting services. Our mission is to handle the complexity of accounting so you can focus on what you do best: running your business.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                By combining deep expertise with modern technology and dedicated teams, we deliver financial clarity and strategic guidance that drives growth.
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
                  { title: 'Expertise', desc: 'Deep industry knowledge and accounting excellence' },
                  { title: 'Integrity', desc: 'Transparent, ethical, and trustworthy relationships' },
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

      {/* Stats */}
      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center text-balance mb-16">
            Trusted by Hundreds of Businesses
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Active Clients' },
              { number: '$2B+', label: 'Transactions Managed' },
              { number: '15+', label: 'Years of Experience' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary text-balance">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
              What Sets Us Apart
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Why Businesses Choose Accounstone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Expert Team',
                desc: 'CPAs and accountants with 10+ years of industry experience and certifications.',
              },
              {
                icon: '🚀',
                title: 'Growth Focus',
                desc: 'We don\'t just manage finances; we provide strategic guidance to fuel growth.',
              },
              {
                icon: '🔒',
                title: 'Security & Compliance',
                desc: 'Enterprise-grade security, ISO 27001 certified, and fully compliant.',
              },
              {
                icon: '⚡',
                title: 'Modern Technology',
                desc: 'Cloud-based systems, automation, and real-time reporting tools.',
              },
              {
                icon: '🤝',
                title: 'True Partnership',
                desc: 'Dedicated teams invested in your success, not just another vendor.',
              },
              {
                icon: '💰',
                title: 'Cost Effective',
                desc: 'Flexible engagement models designed to fit your budget and needs.',
              },
            ].map((item, i) => (
              <div key={i} className="space-y-3 p-6 bg-input rounded-xl border-2 border-border">
                <div className="text-4xl">{item.icon}</div>
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
