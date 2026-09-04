/**
 * US company registration cluster.
 *
 * **Read `knowledge/company/scope-boundaries.md` §2 before editing any copy here.**
 * "Entity selection advice" is on the forbidden list, and this is the one cluster
 * on the site where it is easy to cross that line by accident. Describing what an
 * LLC and a C-corp *are* is fine — public, factual, and what the reader is
 * searching for. Telling them which to choose is not, in any phrasing, including
 * softened ones like "most firms in your position pick".
 *
 * What Accounstone does here, confirmed by the owner 2026-09-04: the registration
 * itself is arranged and coordinated rather than performed in-house, and the
 * accounting that follows — books, payroll, returns — is the part Accounstone runs.
 * The copy is written to that split. It never claims Accounstone files the
 * formation documents, acts as registered agent, or advises on structure.
 *
 * No filing fee, franchise tax figure or turnaround time appears anywhere in this
 * file. Those change per state and per year, and inventing them would breach the
 * "never invent statistics" rule in CLAUDE.md. The pages describe the steps and
 * say figures are confirmed when the work is scoped, which is how the rest of the
 * site handles pricing.
 */

export interface RegistrationState {
  slug: string;
  /** Full state name, as it appears in copy and headings. */
  name: string;
  /** ≤46 characters so the `%s | Accounstone` template stays inside 60. */
  title: string;
  /** 110–160 characters, per the metadata budget in CLAUDE.md. */
  description: string;
  /** One sentence on why this state comes up in registration searches. Factual. */
  whyItComesUp: string;
  /** The recurring obligations that land on the books once the entity exists. */
  ongoing: string[];
  /** What is specifically worth knowing before choosing this state. No advice. */
  considerations: { h: string; p: string }[];
  /** Who actually forms here, factually. Keeps the state pages distinct. */
  whoFormsHere: string;
  /**
   * Closing note under the annual-obligations list, naming this state's own
   * charges. Per-state rather than shared boilerplate: an identical paragraph on
   * all three pages was part of what pushed their overlap to 24%.
   */
  feesNote: string;
  /** One-line CTA description, again per-state to keep the pages apart. */
  ctaNote: string;
  /**
   * State-specific FAQs. These are per-state rather than templated because the
   * first version templated them and the three pages measured 53-55% 6-gram
   * overlap against each other — twice the 25% ceiling in CLAUDE.md. Shared
   * blocks were the bulk of each page. Keep these genuinely different.
   */
  faqs: { question: string; answer: string }[];
}

export const registrationStates: RegistrationState[] = [
  {
    slug: 'delaware',
    name: 'Delaware',
    title: 'Register a Company in Delaware',
    description:
      'What Delaware incorporation involves, the franchise tax and annual report that follow, and how the books and returns get set up from day one.',
    whyItComesUp:
      'Delaware is the default answer in most online guidance about US incorporation, largely because of its long-established corporate case law and the Court of Chancery that hears company disputes without a jury.',
    ongoing: [
      'Annual franchise tax and an annual report, on a Delaware schedule that is separate from any federal deadline',
      'A registered agent with a Delaware street address, maintained continuously',
      'Federal income tax return preparation for the entity, whatever state it was formed in',
      'Foreign qualification and a second set of filings in any state where the business actually operates',
    ],
    considerations: [
      {
        h: 'Forming in Delaware does not remove obligations elsewhere',
        p: 'A company incorporated in Delaware that operates from another state generally has to register as a foreign entity there too, and meet that state’s filing and tax requirements as well as Delaware’s. That is two sets of deadlines, not one, and it is the single most common surprise in the first year.',
      },
      {
        h: 'The franchise tax is not a tax on profit',
        p: 'Delaware’s franchise tax is calculated from authorised shares or assumed par value, not from what the company earned. A company with no revenue still owes it. How many shares are authorised at formation therefore has a recurring cost attached, which is worth understanding before the certificate is filed rather than after.',
      },
      {
        h: 'Corporation and LLC are different regimes',
        p: 'Delaware corporations and Delaware LLCs have different annual filings, different fee bases and different federal tax treatment by default. Which is appropriate is a question for your attorney and your CPA — it depends on ownership, funding plans and where you pay tax, and it is not a question we answer.',
      },
    ],
    feesNote:
      'Delaware’s franchise tax and annual report both fall due on a state schedule of their own, and the franchise figure moves with share structure rather than trading. We confirm the current amounts for your entity when the work is scoped instead of quoting a number here that would be wrong for most companies reading it.',
    ctaNote:
      'The Delaware filing is coordinated, the franchise tax and annual report go into your calendar, and the books open before the first transaction.',
    whoFormsHere:
      'Companies expecting outside investment form here most often, because venture and institutional investors are used to Delaware documents and Delaware law. A single-owner consulting business usually has no such reason, and pays the same annual franchise tax and registered agent cost as one that does.',
    faqs: [
      {
        question: 'Is Delaware only worth it if we are raising money?',
        answer:
          'Investor familiarity is the reason most often given, and it is a real one where outside funding is planned. Whether it justifies the annual franchise tax, the registered agent and a second state registration for a business that is not raising money is a question for your attorney. We can tell you what the recurring filings cost you in work either way.',
      },
      {
        question: 'How is the Delaware franchise tax actually calculated?',
        answer:
          'Two methods exist — one based on authorised shares, one on assumed par value capital — and a company generally pays the lower of them. Because both start from share structure rather than profit, a pre-revenue company still owes it, and authorising a very large number of shares at formation can raise the bill considerably.',
      },
      {
        question: 'We are incorporated in Delaware but operate from another state. What now?',
        answer:
          'You will usually need to register as a foreign entity in the state you operate from, and meet its filings and taxes alongside Delaware\u2019s. In practice that means two calendars. We track both in the filing calendar we set up, so a Delaware deadline does not get missed while the operating state is being handled.',
      },
      {
        question: 'Do you handle the Delaware annual report itself?',
        answer:
          'We prepare the underlying records and flag the deadline as part of the filing calendar. The report and franchise tax submission are arranged alongside the formation rather than performed by us, and anything requiring a licensed signature stays with your adviser.',
      },
    ],
  },
  {
    slug: 'wyoming',
    name: 'Wyoming',
    title: 'Register a Company in Wyoming',
    description:
      'What forming a Wyoming LLC involves, the annual report and registered agent that follow, and getting the bookkeeping right from the first month.',
    whyItComesUp:
      'Wyoming appears constantly in searches about forming a US company from outside the country, because it has no state corporate income tax and its annual filing requirements are comparatively light.',
    ongoing: [
      'An annual report with a licence tax calculated on assets located in the state',
      'A registered agent with a Wyoming address, maintained continuously',
      'Federal income tax return preparation, which is unaffected by the absence of state income tax',
      'Registration in any other state where the business has a physical or economic presence',
    ],
    considerations: [
      {
        h: 'No state income tax is not no tax',
        p: 'Wyoming does not levy a corporate income tax, which is what most of the search results emphasise. Federal tax obligations are unchanged, and if the business operates in another state, that state’s income and sales tax rules can still apply. The saving is narrower than the headline suggests.',
      },
      {
        h: 'Non-resident owners have extra steps',
        p: 'Forming the entity is only the first item. A federal EIN is normally needed before a US bank account can be opened, and account opening is a bank decision with its own identity requirements that no filing agent controls. Plan for that sequence rather than assuming registration completes it.',
      },
      {
        h: 'Beneficial ownership reporting',
        p: 'Reporting companies formed in the US may have a beneficial ownership information filing obligation under the Corporate Transparency Act, separate from anything the state requires. Whether it applies to a particular entity, and on what timetable, is a legal question for your attorney. [CLIENT / LEGAL REVIEW REQUIRED]',
      },
    ],
    feesNote:
      'Wyoming’s annual report licence tax is calculated from assets in the state and carries a minimum charge, so a company with nothing physically there still files every year. Current figures are confirmed at scoping rather than quoted here, because they move.',
    ctaNote:
      'The Wyoming filing is coordinated, the EIN follows it in the right order, and the books are open before the first transaction.',
    whoFormsHere:
      'A large share of Wyoming formations are by owners outside the United States, and by single-owner businesses looking for the lightest possible annual maintenance. Both groups tend to hit the same wall in the same order: the entity is straightforward, the bank account is not.',
    faqs: [
      {
        question: 'Can a non-US resident own a Wyoming LLC?',
        answer:
          'Ownership by a non-resident is common and is not itself a barrier. The practical sequence is what catches people out: the entity is formed, an EIN is applied for, and only then can a bank account realistically be opened \u2014 and the account is the bank\u2019s decision on its own identity rules. Your US tax filing position as a non-resident owner is a question for a CPA or enrolled agent.',
      },
      {
        question: 'What is the Wyoming annual report licence tax based on?',
        answer:
          'Assets located and employed in Wyoming, with a minimum charge. For a company with little or nothing physically in the state the charge is usually at or near that minimum, but the report still has to be filed every year to keep the entity in good standing.',
      },
      {
        question: 'Does Wyoming really mean no tax?',
        answer:
          'It means no state corporate income tax. Federal obligations are unchanged, and if the business has people, property or sufficient sales in another state, that state can tax it regardless of where the entity was formed. The saving is narrower than most search results imply.',
      },
      {
        question: 'What is beneficial ownership reporting?',
        answer:
          'Certain US-formed companies may have to report who ultimately owns or controls them under the Corporate Transparency Act, separately from any state filing. Whether it applies to a specific entity and by when is a legal question for your attorney. [CLIENT / LEGAL REVIEW REQUIRED]',
      },
    ],
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    title: 'Register a Company in Nevada',
    description:
      'What Nevada registration involves, the state business licence and annual list that follow, and how the accounting is set up alongside it.',
    whyItComesUp:
      'Nevada is grouped with Delaware and Wyoming in most incorporation comparisons, on the basis that it has no state corporate income tax and no personal income tax.',
    ongoing: [
      'An annual list of officers or managers, plus a state business licence renewed each year',
      'Commerce tax reporting where gross revenue passes the state threshold',
      'A registered agent with a Nevada address, maintained continuously',
      'Federal income tax return preparation, and sales tax registration where the business has nexus',
    ],
    considerations: [
      {
        h: 'The recurring cost is front-loaded into fixed fees',
        p: 'Nevada does not tax corporate income, but the annual list and the state business licence are flat charges that fall due whether or not the company traded. For a dormant or pre-revenue entity that is a fixed annual cost with no offsetting relief.',
      },
      {
        h: 'Commerce tax has a threshold, and it is on revenue',
        p: 'Nevada’s commerce tax applies to gross revenue above a state-set threshold, by business category. It is a gross-receipts measure, so it does not follow profitability. Tracking revenue by category from the first month is simpler than reconstructing it at year end.',
      },
      {
        h: 'Operating elsewhere still triggers registration there',
        p: 'As with Delaware and Wyoming, forming in Nevada does not displace the requirements of the state a business actually operates from. Where the work is performed and where staff are located generally drive that, not where the certificate was filed.',
      },
    ],
    feesNote:
      'Nevada’s annual list and state business licence are flat charges that fall due whether or not the company traded, and the commerce tax threshold is revenue-based and set by the state. All three change periodically, so we confirm them for your case at scoping.',
    ctaNote:
      'The Nevada filing is coordinated, the annual list and business licence go into your calendar, and the books open before the first transaction.',
    whoFormsHere:
      'Nevada tends to attract businesses that already have a west-coast operating footprint, and owners comparing it directly against Wyoming on annual cost. The comparison usually turns on fixed fees rather than tax rate, because neither state taxes corporate income.',
    faqs: [
      {
        question: 'How does Nevada compare with Wyoming on cost?',
        answer:
          'Neither taxes corporate income, so the difference is in fixed annual charges rather than rate. Nevada requires both an annual list and a state business licence; Wyoming requires an annual report with an asset-based licence tax. Which works out cheaper depends on the entity and its assets, and current figures are worth confirming at scoping rather than from an article.',
      },
      {
        question: 'What is the Nevada commerce tax?',
        answer:
          'A tax on gross revenue above a state-set threshold, with the rate varying by business category. Because it is measured on revenue rather than profit, a business can owe it in a year it did not make money. Coding revenue by category from the first month makes the annual position straightforward instead of a reconstruction.',
      },
      {
        question: 'Do we need a Nevada state business licence even if we do not trade there?',
        answer:
          'An entity registered in Nevada is generally expected to hold and renew the state business licence to stay in good standing, trading or not. That is a fixed annual cost with no offsetting relief for a dormant company, which is worth knowing before forming rather than at the first renewal.',
      },
      {
        question: 'We have staff in California but registered in Nevada. Does that work?',
        answer:
          'Where people work generally drives where a business is treated as operating, and that usually triggers registration and tax obligations in that state on top of Nevada\u2019s. This is exactly the kind of question to put to your CPA before staff are hired, not after. We make sure the payroll and books reflect whatever position they set.',
      },
    ],
  },
];

/** What actually happens, in order. Public process, described factually. */
export const registrationSteps: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'Structure and state confirmed',
    p: 'Which entity type and which state, decided by you with your attorney and your CPA. It drives every filing that follows, and it is not a decision we make on your behalf.',
  },
  {
    n: '02',
    h: 'Formation documents filed',
    p: 'Articles of organisation or incorporation lodged with the Secretary of State, and a registered agent appointed in that state. Coordinated for you, and confirmed back when the state accepts it.',
  },
  {
    n: '03',
    h: 'Federal EIN obtained',
    p: 'The employer identification number the entity needs before it can open a bank account, run payroll or file a return. Applied for once the formation is accepted.',
  },
  {
    n: '04',
    h: 'Books opened from day one',
    p: 'Chart of accounts, opening balances, bank feeds and the filing calendar for the state you chose — set up in QuickBooks, Xero or NetSuite before the first transaction rather than reconstructed months later. This is our part of the work.',
  },
  {
    n: '05',
    h: 'The recurring cycle runs',
    p: 'Bookkeeping, reconciliations, payroll preparation and return preparation on a set rhythm. Review, approval and signature stay with you and your licensed advisers.',
  },
];

/** Named so the boundary is impossible to miss on every page in the cluster. */
export const registrationBoundaries: string[] = [
  'We do not advise which entity type or which state to choose. That is your attorney’s and your CPA’s call, and it depends on facts about ownership and tax residence that belong with them.',
  'We do not provide legal advice, draft operating agreements, or interpret the Corporate Transparency Act for your situation.',
  'We do not sign or file your federal or state tax returns. We prepare them; your licensed CPA or enrolled agent reviews, signs and files.',
  'We do not hold your banking credentials or move money.',
];
