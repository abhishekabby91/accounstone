import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';

export const metadata: Metadata = generateMetadata({
  title: 'A Dedicated Offshore Accounting Team for Your Practice',
  description: 'A named offshore team working only your portfolio — your templates, your close calendar, your review points, and one point of contact.',
  path: '/solutions/dedicated-accounting-teams',
});

const faqs = [
  {
    question: 'What is a dedicated accounting team?',
    answer: 'A dedicated accounting team is a group of experienced accounting professionals exclusively assigned to your business. They work as an extension of your team, handling all accounting and financial operations.',
  },
  {
    question: 'How large can a dedicated team be?',
    answer: 'Teams range from 1-2 professionals for smaller businesses to 10+ for larger enterprises. We customize team size based on your needs and budget.',
  },
  {
    question: 'Can we scale the team up or down?',
    answer: 'Yes. Your dedicated team can scale with your business — adding resources during growth phases or reducing during slower periods.',
  },
  {
    question: 'Who manages the dedicated team?',
    answer: 'Each dedicated team has a team lead/manager who reports directly to you and coordinates with your stakeholders. We handle HR, training, and performance management.',
  },
  {
    question: 'What is the typical cost?',
    answer: 'Costs vary based on team size, experience level, and location. Generally, dedicated teams provide better value than hiring equivalent onshore staff.',
  },
  {
    question: 'How long is the commitment?',
    answer: 'Dedicated teams typically have a 6-12 month initial commitment with flexibility to adjust team composition and size as needs evolve.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
  { name: 'Dedicated Accounting Teams', url: `${baseUrl}/solutions/dedicated-accounting-teams` },
]);

export default function DedicatedTeamsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Dedicated Teams"
        title="A Dedicated Team, Not a Ticket Queue"
        description="A named team working only your portfolio — to your templates, your close calendar and your review points, with one point of contact who knows your work."
        cta={{
          text: 'Build Your Team',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">When it applies</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
                When Ad-Hoc Capacity Stops Helping
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-5 space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                There is a point at which buying hours stops paying off. Once the same questions are being
                re-explained every month, the overhead of briefing outweighs the work being handed over. That is the
                point to stop buying capacity and start building a team.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                For an accountancy practice that usually arrives with portfolio growth: enough recurring client
                bookkeeping, payroll and year-end work that it needs owners rather than helpers. For a finance team
                it arrives with volume. Either way the answer is the same shape.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="space-y-3 max-w-3xl mb-8">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">What dedicated means</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
                Six Things That Make It a Team Rather Than a Queue
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {[
              { h: 'Named people', p: 'The same people on your work, not a rota. Continuity is most of what makes the arrangement cheaper over time.' },
              { h: 'Your templates, your chart of accounts', p: 'We work to your conventions. A parallel set of workpapers creates reconciliation work rather than removing it.' },
              { h: 'Your close calendar', p: 'Due dates set relative to your deadlines and your clients\u2019 cycles, written down rather than assumed.' },
              { h: 'Your review points, documented', p: 'Where preparation ends and your judgement begins is agreed at the start, so nobody has to guess mid-period.' },
              { h: 'One point of contact', p: 'A person who knows your work and your templates. Not a ticket queue, and not a different name each month.' },
              { h: 'Capacity that flexes', p: 'Wider for a January peak or a year-end cycle, narrower afterwards, without rebuilding the process each time.' },
            ].map((item, i) => (
              <Reveal key={item.h} delay={Math.min(i * 0.05, 0.25)}>
                <div className="h-full p-5 sm:p-6 bg-white rounded-xl border border-border">
                  <h3 className="font-bold text-primary mb-1.5 text-base sm:text-lg">{item.h}</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{item.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">The other option</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
                How This Differs From Staff Augmentation
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              Staff augmentation adds hands to a process you are already running. A dedicated team owns defined
              workflows end to end, up to your review point. Augmentation suits a temporary spike; a dedicated team
              suits recurring volume that is not going away. Most clients start with the former and move to the
              latter once the workflow is proven — there is no advantage to starting bigger than the evidence.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/solutions/staff-augmentation" className="inline-flex min-h-[44px] items-center rounded-lg border border-border bg-input px-5 py-3 font-semibold text-primary transition-colors hover:border-primary/50">Compare staff augmentation</Link>
              <Link href="/markets/united-kingdom" className="inline-flex min-h-[44px] items-center rounded-lg border border-border bg-input px-5 py-3 font-semibold text-primary transition-colors hover:border-primary/50">For UK practices</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-10">How the Team Gets Built</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Scoping', desc: 'Your portfolio, platforms and where the pressure sits' },
              { step: '2', title: 'Pilot', desc: 'One defined block of work, so you see the output first' },
              { step: '3', title: 'Documented workflow', desc: 'Preparer, reviewer, due dates and escalation' },
              { step: '4', title: 'Steady state', desc: 'Recurring delivery to your calendar, reviewed quarterly' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center space-y-3">
                <div className="text-4xl font-bold text-primary">{item.step}</div>
                <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><h2 className="font-serif text-xl font-bold text-primary mb-4">Related Accounstone solutions</h2><div className="flex flex-wrap gap-3"><Link href="/solutions/offshore-accounting-support" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Offshore Accounting Support <ArrowRight size={14} /></Link><Link href="/solutions/back-office-support" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Back Office Support <ArrowRight size={14} /></Link><Link href="/resources/guides/choosing-an-engagement-model" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium">Compare All 4 Models <ArrowRight size={14} /></Link></div></div></section>

      <FAQSection subtitle="Dedicated Teams" items={faqs} columns={2} />

      <CTABanner
        title="Start With One Block of Work"
        description="Tell us which part of your portfolio is costing the most review time, and we will scope a pilot around it."
        cta={{
          text: 'Start a Conversation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
