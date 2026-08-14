// Core service offerings
export const services = [
  {
    id: 'bookkeeping', slug: 'bookkeeping', name: 'Bookkeeping', icon: '📖',
    description: 'Reliable bookkeeping support for small to mid-size businesses. We handle transaction recording, bank reconciliations, account maintenance, and clean monthly records.', shortDesc: 'Accurate records & reconciliations',
  },
  {
    id: 'accounting', slug: 'accounting', name: 'Accounting Services', icon: '📊',
    description: 'Practical accounting support including month-end close, account reconciliations, management reporting, and day-to-day accounting operations.', shortDesc: 'Month-end close & accounting operations',
  },
  {
    id: 'tax-preparation', slug: 'tax-preparation', name: 'Tax Preparation', icon: '📝',
    description: 'Professional tax return preparation and filing support for businesses and individuals, with a focus on accuracy, documentation, and timely compliance.', shortDesc: 'Tax returns & filing support',
  },
  {
    id: 'payroll', slug: 'payroll', name: 'Payroll Processing', icon: '💰',
    description: 'Accurate payroll processing support including payroll calculations, employee records, reporting, and coordination of payroll-related requirements.', shortDesc: 'Accurate payroll processing',
  },
  {
    id: 'accounts-payable', slug: 'accounts-payable', name: 'Accounts Payable', icon: '💳',
    description: 'End-to-end accounts payable support covering invoice processing, vendor records, approvals, payment preparation, and account reconciliation.', shortDesc: 'Invoice & vendor management',
  },
  {
    id: 'accounts-receivable', slug: 'accounts-receivable', name: 'Accounts Receivable', icon: '📥',
    description: 'Accounts receivable support covering customer invoicing, payment tracking, account reconciliation, aging review, and collection follow-up.', shortDesc: 'Invoicing & receivables support',
  },
  {
    id: 'audit-support', slug: 'audit-support', name: 'Audit Support', icon: '✓',
    description: 'Organized audit support including documentation, schedules, reconciliations, evidence gathering, and coordination with your audit team.', shortDesc: 'Audit preparation & support',
  },
];

export const solutions = [
  {
    id: 'offshore-accounting-support', slug: 'offshore-accounting-support', name: 'Offshore Accounting Support', icon: '🌍',
    description: 'Extend your accounting capacity with experienced offshore professionals who can support recurring accounting workflows, close activities, and back-office tasks.',
    services: ['Bookkeeping', 'Accounting Services', 'Payroll Processing', 'Accounts Payable', 'Accounts Receivable'],
  },
  {
    id: 'staff-augmentation', slug: 'staff-augmentation', name: 'Staff Augmentation', icon: '👥',
    description: 'Add experienced accounting professionals to your existing team for seasonal demand, overflow work, recurring processes, or specialized projects.',
    services: ['Accounting Services', 'Tax Preparation', 'Audit Support'],
  },
  {
    id: 'dedicated-accounting-teams', slug: 'dedicated-accounting-teams', name: 'Dedicated Accounting Teams', icon: '👨‍💼',
    description: 'Build a dedicated accounting team around your workflows, systems, review process, and reporting requirements without the complexity of local hiring.',
    services: ['Accounting Services', 'Tax Preparation', 'Audit Support'],
  },
  {
    id: 'back-office-support', slug: 'back-office-support', name: 'Back Office Support', icon: '🏢',
    description: 'Reliable support for recurring back-office accounting workflows including bookkeeping, payables, receivables, payroll processing, and account maintenance.',
    services: ['Bookkeeping', 'Payroll Processing', 'Accounts Payable', 'Accounts Receivable', 'Accounting Services'],
  },
];

export const markets = [
  { id: 'united-states', slug: 'united-states', name: 'United States', icon: '🇺🇸', description: 'Supporting U.S. businesses and accounting practices with bookkeeping, accounting operations, tax preparation, payroll, and audit support.' },
  { id: 'united-kingdom', slug: 'united-kingdom', name: 'United Kingdom', icon: '🇬🇧', description: 'Supporting UK businesses and accounting practices with bookkeeping, accounting operations, tax preparation, payroll, and audit support.' },
  { id: 'australia', slug: 'australia', name: 'Australia', icon: '🇦🇺', description: 'Supporting Australian businesses and accounting practices with bookkeeping, accounting operations, tax preparation, payroll, and audit support.' },
];

export const industries = [
  { id: 'cpa-firms', slug: 'cpa-firms', name: 'CPA Firms', icon: '📊', description: 'Support for accounting firms handling overflow work, recurring client deliverables, bookkeeping, tax preparation, and audit support.' },
  { id: 'technology', slug: 'technology', name: 'Technology', icon: '💻', description: 'Accounting operations support for SaaS, software, and technology businesses with recurring transaction and reporting needs.' },
  { id: 'healthcare', slug: 'healthcare', name: 'Healthcare', icon: '🏥', description: 'Organized accounting and back-office support for medical practices, clinics, and healthcare providers.' },
  { id: 'ecommerce', slug: 'ecommerce', name: 'E-Commerce', icon: '🛒', description: 'Accounting operations support for online retailers and marketplaces across sales, payables, receivables, and reconciliations.' },
  { id: 'real-estate', slug: 'real-estate', name: 'Real Estate', icon: '🏠', description: 'Real estate accounting support including property-level bookkeeping, reconciliations, payables, receivables, and reporting workflows.' },
  { id: 'professional-services', slug: 'professional-services', name: 'Professional Services', icon: '⚖️', description: 'Accounting and back-office support for consulting, legal, agency, and other professional service businesses.' },
];

export const technologies = [
  { id: 'quickbooks', slug: 'quickbooks', name: 'QuickBooks', icon: '📱', description: 'QuickBooks Online support covering setup, cleanup, transaction workflows, reconciliations, automation, and reporting.' },
  { id: 'xero', slug: 'xero', name: 'Xero', icon: '☁️', description: 'Xero support covering setup, automation, integrations, reconciliations, and recurring accounting workflows.' },
  { id: 'sage', slug: 'sage', name: 'Sage', icon: '📈', description: 'Sage accounting software support including configuration, recurring workflows, reconciliations, and reporting.' },
  { id: 'netsuite', slug: 'netsuite', name: 'NetSuite', icon: '🔧', description: 'NetSuite support for complex accounting workflows, multi-entity operations, reconciliations, and reporting processes.' },
  { id: 'drake-tax', slug: 'drake-tax', name: 'Drake Tax', icon: '📝', description: 'Drake Tax software support for organized tax preparation workflows, return processing, and compliance documentation.' },
  { id: 'cch', slug: 'cch', name: 'CCH Axcess', icon: '🎯', description: 'CCH Axcess support for tax and accounting workflows, documentation, and recurring practice operations.' },
  { id: 'myob', slug: 'myob', name: 'MYOB', icon: '💼', description: 'MYOB accounting platform support for Australian and New Zealand businesses and accounting practices.' },
];

export const expertise = [
  { title: 'Accounting Standards', items: ['GAAP', 'IFRS', 'SOX Compliance', 'ASC 606 Revenue Recognition'] },
  { title: 'Industry Knowledge', items: ['SaaS & Technology', 'E-Commerce & Retail', 'Healthcare', 'Real Estate & Hospitality'] },
  { title: 'Practice Support', items: ['Bookkeeping Operations', 'Tax Preparation Support', 'Audit Support', 'Workflow Management'] },
];

// These are illustrative engagement themes, not client testimonials or endorsements.
export const testimonials = [
  {
    name: 'Seasonal capacity',
    title: 'Common engagement theme',
    company: 'CPA firm workflows',
    text: 'A firm may have strong internal reviewers but need additional capacity for transaction-level bookkeeping, cleanup, or recurring work during a busy period.',
  },
  {
    name: 'Recurring workflow support',
    title: 'Common engagement theme',
    company: 'Accounting operations',
    text: 'Outside support can take ownership of defined AP, AR, bookkeeping, reconciliation, or close tasks while the client team retains review and approval control.',
  },
  {
    name: 'Growing workload',
    title: 'Common engagement theme',
    company: 'Business and practice operations',
    text: 'A business or accounting practice may need more capacity without immediately changing its existing systems, processes, or management structure.',
  },
];

// Trust statements that describe practices rather than unverified credentials.
export const trustBadges = [
  { name: 'NDA-Backed Engagements', icon: '🔒' },
  { name: 'Security-First Data Handling', icon: '✓' },
  { name: 'Documented Workflows & Review', icon: '▣' },
];

export const companyInfo = {
  name: 'Accounstone',
  tagline: 'Outsourced Accounting & Bookkeeping Solutions',
  description: 'Accounstone provides outsourced accounting, bookkeeping, tax preparation, payroll, audit support, and back-office services to businesses and accounting practices across the US, UK, and Australia. Our delivery model is built around experienced professionals, documented workflows, quality review, and clear communication.',
  website: 'https://www.accounstone.com',
  contact: {
    email: 'partner@accounstone.com',
    phone: '+919990597192',
    address: 'Global Delivery Center, New Delhi, India',
  },
};