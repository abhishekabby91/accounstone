// Core service offerings
export const services = [
  {
    id: 'bookkeeping',
    slug: 'bookkeeping',
    name: 'Bookkeeping',
    icon: '📖',
    description: 'Accurate, audit-ready books your firm can rely on without re-checking. We handle daily transaction recording, bank reconciliations, and financial record management to your standards.',
    shortDesc: 'Audit-ready books, done to your standards',
  },
  {
    id: 'accounting',
    slug: 'accounting',
    name: 'Accounting Services',
    icon: '📊',
    description: 'Month-end close and financial statements delivered on your timeline, formatted the way your clients expect — so your firm reviews and signs off, not rebuilds from scratch.',
    shortDesc: 'Month-end close, ready for your review',
  },
  {
    id: 'tax-preparation',
    slug: 'tax-preparation',
    name: 'Tax Preparation',
    icon: '📝',
    description: 'Return preparation support that scales with your busy season, working inside your firm\'s tax software and review process — for business and individual returns.',
    shortDesc: 'Busy-season capacity for your firm',
  },
  {
    id: 'payroll',
    slug: 'payroll',
    name: 'Payroll Processing',
    icon: '💰',
    description: 'Payroll handled end-to-end — processing, tax withholding, statutory reporting, and compliance — so it never becomes the thing your team scrambles on every cycle.',
    shortDesc: 'Payroll & tax management, off your plate',
  },
  {
    id: 'accounts-payable',
    slug: 'accounts-payable',
    name: 'Accounts Payable',
    icon: '💳',
    description: 'Vendor management, invoice processing, and payment execution handled with the same discipline you\'d expect from an in-house AP team.',
    shortDesc: 'Vendor & payment management',
  },
  {
    id: 'accounts-receivable',
    slug: 'accounts-receivable',
    name: 'Accounts Receivable',
    icon: '📥',
    description: 'Invoice tracking and collections managed proactively, so cash flow stays predictable for your clients instead of becoming a quarterly fire drill.',
    shortDesc: 'Billing & collections, kept current',
  },
  {
    id: 'cfo-support',
    slug: 'cfo-support',
    name: 'CFO Support Services',
    icon: '💼',
    description: 'Financial planning, forecasting, and executive-level reporting for clients who\'ve outgrown basic bookkeeping — delivered under your firm\'s advisory relationship.',
    shortDesc: 'Strategic financial leadership',
  },
  {
    id: 'audit-support',
    slug: 'audit-support',
    name: 'Audit Support',
    icon: '✓',
    description: 'Documentation, testing, and preparation work that gets your clients audit-ready — freeing your senior staff to manage the audit relationship, not the paperwork behind it.',
    shortDesc: 'Audit preparation & support',
  },
];

// Solutions/service packages
export const solutions = [
  {
    id: 'offshore-accounting-support',
    slug: 'offshore-accounting-support',
    name: 'Offshore Accounting Support',
    icon: '🌍',
    description: 'Add delivery capacity without adding headcount. Our team works inside your existing process for bookkeeping, accounting, payroll, and financial operations — fully white-labeled.',
    services: ['Bookkeeping', 'Accounting Services', 'Payroll Processing', 'Accounts Payable', 'Accounts Receivable'],
  },
  {
    id: 'staff-augmentation',
    slug: 'staff-augmentation',
    name: 'Staff Augmentation',
    icon: '👥',
    description: 'Skilled accountants and finance professionals who plug into your existing team for overflow work and specialized projects — without the hiring cycle.',
    services: ['Accounting Services', 'Tax Preparation', 'CFO Support Services', 'Audit Support'],
  },
  {
    id: 'dedicated-accounting-teams',
    slug: 'dedicated-accounting-teams',
    name: 'Dedicated Accounting Teams',
    icon: '👨‍💼',
    description: 'A team of accountants and CPAs working exclusively on your firm\'s engagements — consistent staff who learn your clients, not a rotating pool.',
    services: ['Accounting Services', 'Tax Preparation', 'CFO Support Services', 'Financial Planning'],
  },
  {
    id: 'back-office-support',
    slug: 'back-office-support',
    name: 'Back Office Support',
    icon: '🏢',
    description: 'End-to-end back-office delivery — accounting, payroll, HR, and administrative work — so your firm\'s client-facing staff stay focused on advisory, not processing.',
    services: ['Bookkeeping', 'Payroll Processing', 'Accounts Payable', 'Accounts Receivable', 'Accounting Services'],
  },
];

// Geographic Markets
export const markets = [
  {
    id: 'united-states',
    slug: 'united-states',
    name: 'United States',
    icon: '🇺🇸',
    description: 'Serving U.S. businesses with expertise in federal, state, and local tax compliance, GAAP accounting, and SOX requirements.',
  },
  {
    id: 'united-kingdom',
    slug: 'united-kingdom',
    name: 'United Kingdom',
    icon: '🇬🇧',
    description: 'UK-focused accounting services with knowledge of IFRS, VAT, Companies House reporting, and UK tax regulations.',
  },
  {
    id: 'australia',
    slug: 'australia',
    name: 'Australia',
    icon: '🇦🇺',
    description: 'Australian accounting expertise including IFRS compliance, ATO requirements, and ASIC reporting standards.',
  },
];

// Industries/Verticals
export const industries = [
  {
    id: 'cpa-firms',
    slug: 'cpa-firms',
    name: 'CPA Firms',
    icon: '📊',
    description: 'Support for accounting firms handling overflow work, client deliverables, and specialized services.',
  },
  {
    id: 'technology',
    slug: 'technology',
    name: 'Technology',
    icon: '💻',
    description: 'Specialized accounting and CFO services for SaaS, software, and tech startups.',
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    description: 'Compliant financial management for medical practices, clinics, and healthcare providers.',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-Commerce',
    icon: '🛒',
    description: 'Multi-channel accounting and tax solutions for online retailers and marketplaces.',
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate',
    icon: '🏠',
    description: 'Real estate accounting including property management, investment analysis, and tax planning.',
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    name: 'Professional Services',
    icon: '⚖️',
    description: 'Specialized finance for law firms, consulting firms, and other professional services.',
  },
];

// Technology & Systems
export const technologies = [
  {
    id: 'quickbooks',
    slug: 'quickbooks',
    name: 'QuickBooks',
    icon: '📱',
    description: 'Expert integration and support for QuickBooks Online. We handle setup, optimization, automation, and advanced reporting.',
  },
  {
    id: 'xero',
    slug: 'xero',
    name: 'Xero',
    icon: '☁️',
    description: 'Xero accounting platform expertise. We manage setup, automation, integration, and advanced workflows.',
  },
  {
    id: 'sage',
    slug: 'sage',
    name: 'Sage',
    icon: '📈',
    description: 'Comprehensive Sage accounting software support including implementation, configuration, and optimization.',
  },
  {
    id: 'netsuite',
    slug: 'netsuite',
    name: 'NetSuite',
    icon: '🔧',
    description: 'Enterprise NetSuite ERP implementation and support for complex, multi-entity organizations.',
  },
  {
    id: 'drake-tax',
    slug: 'drake-tax',
    name: 'Drake Tax',
    icon: '📝',
    description: 'Drake Tax software expertise for efficient tax preparation, filing, and compliance management.',
  },
  {
    id: 'cch',
    slug: 'cch',
    name: 'CCH Axcess',
    icon: '🎯',
    description: 'CCH tax and accounting software support including implementation and advanced features.',
  },
  {
    id: 'myob',
    slug: 'myob',
    name: 'MYOB',
    icon: '💼',
    description: 'MYOB accounting platform expertise for Australian and New Zealand businesses.',
  },
];

// Expertise areas
export const expertise = [
  {
    title: 'Accounting Standards',
    items: ['GAAP', 'IFRS', 'SOX Compliance', 'ASC 606 Revenue Recognition'],
  },
  {
    title: 'Industry Knowledge',
    items: ['SaaS & Technology', 'E-Commerce & Retail', 'Healthcare', 'Real Estate & Hospitality'],
  },
  {
    title: 'Services',
    items: ['VOSB Certification', 'Benefits Administration', 'Risk Management', 'Strategic Planning'],
  },
];

// Testimonials/Case Studies
//
// ⚠️ TODO — LEGAL/TRUST: These are illustrative, not real client quotes.
// The FTC's rule on consumer reviews (16 CFR Part 465, effective 2024)
// prohibits presenting testimonials in a way that implies they're from
// real customers when they are not. Two safe paths:
//   1. Replace with real client quotes (get written permission) — best.
//   2. Keep as-is BUT the visible page text must say something like
//      "Illustrative feedback based on common client engagement themes"
//      — not just hidden in a code comment. Do NOT ship this section
//      with real-sounding names/avatars and no on-page disclosure.
// Placeholder avatars (dicebear cartoons) are fine to keep even with
// real quotes, if a real client prefers not to share a photo.
export const testimonials = [
  {
    name: 'Accounting Practice Owner',
    title: 'CPA Firm Leadership',
    company: 'Mid-size CPA Firm',
    text: 'Being able to scale our team during busy seasons without the overhead of hiring full-time staff has been invaluable. The team integrated smoothly into our workflows.',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=AccountingOwner',
  },
  {
    name: 'Finance Director',
    title: 'Managing Complex Client Work',
    company: 'Growing Accounting Practice',
    text: 'Having dedicated support for accounts payable and receivable freed up our senior team to focus on advisory work. The responsiveness has been key to our success.',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=FinanceDirector',
  },
  {
    name: 'CPA Firm Partner',
    title: 'Expanding Service Offerings',
    company: 'Regional CPA Firm',
    text: 'We were able to take on more clients because we had reliable bookkeeping support. The team understood our quality standards and delivered consistently.',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=CPAPartner',
  },
];

// Trust & Compliance badges
// [PLACEHOLDER - Add verified certifications only. Currently pursuing SOC 2 certification]
export const trustBadges = [
  { name: 'NDA-Backed Engagements', icon: '🔒' },
  { name: 'Security-First Data Handling', icon: '✓' },
];

// Company info
//
// Global delivery model: leadership/sales presence serving US/UK/AU
// clients, with the service delivery team based in New Delhi, India.
// This is presented transparently as the core "offshore accounting"
// value proposition, not hidden — matches how comparable companies
// (TOA Global, Escalon, etc.) position their delivery model.
export const companyInfo = {
  name: 'Accounstone',
  tagline: 'Outsourced Accounting & Finance Solutions',
  description: 'Accounstone is a leading provider of outsourced accounting, finance, and HR services to growing businesses across the US, UK, and Australia. With a team of expert accountants and CPAs, we deliver strategic financial solutions that drive business growth.',
  website: 'https://accounstone.com',
  contact: {
    email: 'partner@accounstone.com',
    // E.164 format for tel: links / schema. Displayed format handled
    // in the component (e.g. "+91 99905 97192").
    phone: '+919990597192',
    // Labeled as delivery center, not HQ — see note above.
    address: 'Global Delivery Center, New Delhi, India',
  },
};