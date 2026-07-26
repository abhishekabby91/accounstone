// Core service offerings
export const services = [
  {
    id: 'bookkeeping',
    slug: 'bookkeeping',
    name: 'Bookkeeping',
    icon: '📖',
    description: 'Expert bookkeeping services for small to mid-size businesses. We handle daily transaction recording, bank reconciliations, and financial record management.',
    shortDesc: 'Daily transaction & record management',
  },
  {
    id: 'accounting',
    slug: 'accounting',
    name: 'Accounting Services',
    icon: '📊',
    description: 'Complete accounting solutions including financial statement preparation, month-end close, and comprehensive financial analysis.',
    shortDesc: 'Financial statements & analysis',
  },
  {
    id: 'tax-preparation',
    slug: 'tax-preparation',
    name: 'Tax Preparation',
    icon: '📝',
    description: 'Professional tax return preparation and filing for businesses and individuals, ensuring compliance and optimization.',
    shortDesc: 'Tax returns & filing',
  },
  {
    id: 'payroll',
    slug: 'payroll',
    name: 'Payroll Processing',
    icon: '💰',
    description: 'Complete payroll management including processing, tax withholding, statutory reporting, and compliance.',
    shortDesc: 'Payroll & tax management',
  },
  {
    id: 'accounts-payable',
    slug: 'accounts-payable',
    name: 'Accounts Payable',
    icon: '💳',
    description: 'Accounts payable management, vendor management, invoice processing, and payment optimization.',
    shortDesc: 'Vendor & payment management',
  },
  {
    id: 'accounts-receivable',
    slug: 'accounts-receivable',
    name: 'Accounts Receivable',
    icon: '📥',
    description: 'Accounts receivable management, invoice tracking, collection optimization, and cash flow improvement.',
    shortDesc: 'Customer billing & collections',
  },
  {
    id: 'cfo-support',
    slug: 'cfo-support',
    name: 'CFO Support Services',
    icon: '💼',
    description: 'Expert CFO-level support including financial planning, strategy, forecasting, and executive reporting.',
    shortDesc: 'Strategic financial leadership',
  },
  {
    id: 'audit-support',
    slug: 'audit-support',
    name: 'Audit Support',
    icon: '✓',
    description: 'Comprehensive audit support services including documentation, testing, and preparation for external audits.',
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
    description: 'Scale your accounting operations with experienced offshore professionals. Cost-effective support for bookkeeping, accounting, payroll, and financial operations.',
    services: ['Bookkeeping', 'Accounting Services', 'Payroll Processing', 'Accounts Payable', 'Accounts Receivable'],
  },
  {
    id: 'staff-augmentation',
    slug: 'staff-augmentation',
    name: 'Staff Augmentation',
    icon: '👥',
    description: 'Augment your existing team with skilled accountants and finance professionals to handle overflow work and specialized projects.',
    services: ['Accounting Services', 'Tax Preparation', 'CFO Support Services', 'Audit Support'],
  },
  {
    id: 'dedicated-accounting-teams',
    slug: 'dedicated-accounting-teams',
    name: 'Dedicated Accounting Teams',
    icon: '👨‍💼',
    description: 'Build dedicated teams of certified CPAs and accountants exclusively for your business. Seamless integration with your existing operations.',
    services: ['Accounting Services', 'Tax Preparation', 'CFO Support Services', 'Financial Planning'],
  },
  {
    id: 'back-office-support',
    slug: 'back-office-support',
    name: 'Back Office Support',
    icon: '🏢',
    description: 'Complete back-office operations including accounting, payroll, HR, and administrative functions. End-to-end support for your business.',
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
// [Add further verified certifications here as they're achieved. Currently pursuing SOC 2 certification.]
export const trustBadges = [
  { name: 'QuickBooks Certified ProAdvisor (since 2022)', icon: '📱' },
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