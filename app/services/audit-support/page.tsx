import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Outsourced Audit Support — What It Covers Across US, UK & Australia',
  description: 'What outsourced audit preparation support covers, what the audit team retains, how fieldwork preparation works, and the questions CPA firms ask before outsourcing audit support staff.',
  path: '/services/audit-support',
});

const faqs = [
  { question: 'What does outsourced audit support actually include?', answer: 'Audit support covers the preparation work that happens before and during fieldwork: organizing client-provided documents, preparing working-paper schedules, reconciling account balances and supporting schedules, maintaining evidence binders, supporting defined testing procedures under the direction of the audit team, and tracking and following up on open items (PBC lists). It does not include professional audit judgment, assurance opinions, or anything requiring a licensed auditor.' },
  { question: 'Does the audit support team make professional audit judgments?', answer: 'No. Professional judgment — materiality, scope decisions, sampling decisions, evaluation of audit evidence — stays with the licensed CPA firm conducting the audit. The support team handles preparation, documentation, and defined testing support; the auditor evaluates what the preparation produces.' },
  { question: 'What is a PBC list and how does outsourced support help with it?', answer: 'PBC stands for "Prepared by Client." It is the list of documents, schedules, and account analyses the audit firm requests from the client before fieldwork. PBC items are a constant source of delay — clients prepare them late, incomplete, or in the wrong format. An outsourced audit support team can work with the client to prepare PBC items to the auditor\'s specifications, track what is outstanding, and follow up, so the audit team arrives for fieldwork with a complete file rather than a partial one.' },
  { question: 'How does audit support differ across US, UK, and Australia?', answer: 'US: GAAS-based audits, PCAOB rules for public companies, single-audit requirements for government grants. UK: ISA (UK) standards, FRC guidelines, Companies Act requirements for statutory audits. Australia: AUASB standards, ASIC requirements for public company audits. The support work (schedules, evidence, reconciliations) is similar across all three; the standards the auditor applies differ.' },
  { question: 'Can outsourced support handle testing procedures?', answer: 'Defined testing — for example, tracing a sample of transactions from the sales ledger to source documents, or confirming that fixed asset additions reconcile to invoices — can be supported by the audit support team under the direction of the engaged audit firm. The audit firm defines the testing procedure, the support team executes the tracing work, and the auditor evaluates the results.' },
  { question: 'What is the biggest bottleneck outsourced audit support solves?', answer: 'PBC preparation time. Audit staff spend a significant portion of fieldwork time waiting for or chasing client-prepared documents. If an outsourced team prepares and organizes those documents before fieldwork starts, the audit team can spend more of its time on review and judgment rather than document retrieval. For a 200-hour audit engagement, reducing PBC preparation time by 30% saves 60 hours of billable time.' },
  { question: 'What does outsourced audit support cost?', answer: 'Per-hour pricing is common for audit support: $12–$22/hour for experienced offshore audit support staff. For a typical SMB statutory audit requiring 60–80 hours of preparation support, that is $720–$1,760 compared to $3,000–$5,600 for equivalent onshore preparation staff at $50–$70/hour. CPA firms use offshore audit support to extend capacity during busy periods without increasing headcount.' },
  { question: 'What are the most common questions CPA firms ask before outsourcing audit support?', answer: '"Will they understand audit standards?" — they understand the preparation workflow; audit judgment stays with your licensed staff. "What if the client\'s records are a mess?" — cleanup and organization are part of the preparation scope; the support team documents what it finds. "How do we maintain quality control?" — the audit team reviews all preparation work before it becomes part of the file; the support team does not submit work directly to the client.' },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Audit Support', url: `${baseUrl}/services/audit-support` },
]);

const regionNotes = [
  { region: '🇺🇸 United States', link: '/services/audit-support/united-states', label: 'U.S. Audit Support', standards: 'GAAS / PCAOB', items: ['Working-paper schedule preparation', 'PBC list management and follow-up', 'Account reconciliation support', 'Single-audit documentation support', 'Confirmations coordination support', 'GovernmentGrantrecipient testing support'] },
  { region: '🇬🇧 United Kingdom', link: '/services/audit-support/united-kingdom', label: 'UK Audit Support', standards: 'ISA (UK) / FRC', items: ['Companies Act audit file preparation', 'FRC-compliant working papers', 'PBC and evidence organization', 'Statutory accounts reconciliation', 'Group audit support (component work)', 'Charity SORP audit file support'] },
  { region: '🇦🇺 Australia', link: '/services/audit-support/australia', label: 'AU Audit Support', standards: 'AUASB / ASIC', items: ['AUASB-aligned working papers', 'SMSF audit documentation support', 'Listed entity audit file preparation', 'PBC list preparation and tracking', 'Charity/NFP audit file support', 'Group audit component support'] },
];

export default function AuditSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Outsourced Audit Support"
        title="What Outsourced Audit Support Actually Covers"
        description="Preparation, PBC lists, working papers, and defined testing support — and what the engaged auditor always retains. A guide for CPA firms considering outsourced audit preparation staff."
        cta={{ text: 'Talk Through Your Audit Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'View Region-Specific Pages', href: '#regions' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Audit Support</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">What the support team prepares — and what the auditor retains</h2>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="p-8 bg-input rounded-2xl border border-border/70 h-full">
                <h3 className="font-bold text-primary text-xl mb-5">Support team prepares</h3>
                <ul className="space-y-3">
                  {['Working-paper schedules and support binders', 'PBC list tracking and completion', 'Account reconciliation and tie-outs', 'Evidence organization and labeling', 'Defined testing under auditor direction', 'Open-item tracking and follow-up', 'Client-provided document organization', 'Period-end closing schedule preparation'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="text-accent shrink-0 w-4 h-4 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-8 bg-primary rounded-2xl text-white h-full">
                <h3 className="font-bold text-white text-xl mb-5">Auditor always retains</h3>
                <ul className="space-y-3">
                  {['Audit planning and risk assessment', 'Sampling decisions and materiality', 'Professional judgment on evidence', 'Audit opinion and assurance', 'Quality control review', 'Client communication on findings', 'Testing procedure design', 'Sign-off and report issuance'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="text-white shrink-0 w-4 h-4 mt-0.5" aria-hidden="true" />
                      <span className="text-white/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="regions" className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">By region</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-balance mt-2">Audit support across three markets</h2>
          </></Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {regionNotes.map((r, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="p-6 bg-white rounded-2xl border border-border/70 h-full flex flex-col">
                  <div>
                    <div className="text-lg font-bold text-primary">{r.region}</div>
                    <div className="text-xs text-accent font-semibold uppercase tracking-wide mt-1 mb-4">{r.standards}</div>
                    <ul className="space-y-2 mb-5">
                      {r.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted">
                          <Check className="text-accent shrink-0 w-3.5 h-3.5 mt-0.5" aria-hidden="true" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={r.link} className="mt-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors">
                    {r.label} <ArrowRight size={13} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection subtitle="Audit Support Questions" items={faqs} columns={2} />

      <section className="w-full py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-primary mb-4">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">CPA Firms</Link>
            <Link href="/services/bookkeeping" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Bookkeeping</Link>
            <Link href="/services/accounting" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounting Services</Link>
            <Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Staff Augmentation</Link>
          </div>
        </div>
      </section>

      <CTABanner title="Where Is the Audit File Getting Stuck?" description="Tell us whether the pressure is PBC preparation, working papers, open items, or simply audit-season capacity. We can scope preparation support around your team's review process." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
