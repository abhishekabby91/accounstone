// Core service offerings
export const services = [
  {
    id: 'accounting',
    slug: 'accounting',
    name: 'Accounting Services',
    icon: '📊',
    description: 'Complete accounting solutions including bookkeeping, tax preparation, financial analysis, and compliance.',
    shortDesc: 'Full accounting & compliance',
  },
  {
    id: 'bookkeeping',
    slug: 'bookkeeping',
    name: 'Bookkeeping & AP/AR',
    icon: '📖',
    description: 'Expert bookkeeping, accounts payable, accounts receivable, and financial record management.',
    shortDesc: 'Record management & processing',
  },
  {
    id: 'tax',
    slug: 'tax',
    name: 'Tax Advisory & Planning',
    icon: '🎯',
    description: 'Strategic tax planning, preparation, and advisory services to minimize tax liability.',
    shortDesc: 'Tax optimization & planning',
  },
  {
    id: 'hr-compliance',
    slug: 'hr-compliance',
    name: 'HR & Compliance',
    icon: '👥',
    description: 'Human resources management, compliance solutions, and payroll processing.',
    shortDesc: 'HR & regulatory compliance',
  },
  {
    id: 'financial-advisory',
    slug: 'financial-advisory',
    name: 'Financial Advisory',
    icon: '💼',
    description: 'Expert financial guidance, forecasting, budgeting, and strategic planning.',
    shortDesc: 'Financial strategy & planning',
  },
  {
    id: 'audit',
    slug: 'audit',
    name: 'Audit & Assurance',
    icon: '✓',
    description: 'Internal and external audit services, risk assessment, and assurance engagements.',
    shortDesc: 'Audit & risk management',
  },
];

// Solutions/service packages
export const solutions = [
  {
    id: 'back-office',
    slug: 'back-office-support',
    name: 'Back-Office Support',
    icon: '🏢',
    description: 'End-to-end back-office operations including accounting, HR, and administrative functions.',
    services: ['Accounting Services', 'Bookkeeping & AP/AR', 'HR & Compliance'],
  },
  {
    id: 'dedicated-teams',
    slug: 'dedicated-accounting-teams',
    name: 'Dedicated Accounting Teams',
    icon: '👨‍💼',
    description: 'Dedicated teams of certified accountants for your business finance and operations.',
    services: ['Accounting Services', 'Tax Advisory & Planning', 'Financial Advisory'],
  },
  {
    id: 'offshore',
    slug: 'offshore-accounting-support',
    name: 'Offshore Accounting Support',
    icon: '🌍',
    description: 'Cost-effective offshore accounting and operations support with local expertise.',
    services: ['Bookkeeping & AP/AR', 'Accounting Services', 'Financial Advisory'],
  },
];

// Industries/Markets
export const markets = [
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
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Complex accounting for manufacturing with inventory, production, and supply chain management.',
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    name: 'Professional Services',
    icon: '⚖️',
    description: 'Specialized finance for law firms, consulting firms, and other professional services.',
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate',
    icon: '🏠',
    description: 'Real estate accounting including property management, investment analysis, and tax planning.',
  },
];

// Technology & Systems
export const technologies = [
  {
    id: 'quickbooks',
    slug: 'quickbooks',
    name: 'QuickBooks Online',
    icon: '📱',
    description: 'Cloud-based accounting software integration for small to mid-size businesses.',
  },
  {
    id: 'xero',
    slug: 'xero',
    name: 'Xero Accounting',
    icon: '☁️',
    description: 'Modern cloud accounting platform with automated workflows and real-time reporting.',
  },
  {
    id: 'netsuite',
    slug: 'netsuite',
    name: 'NetSuite ERP',
    icon: '🔧',
    description: 'Enterprise resource planning for complex organizations with advanced analytics.',
  },
  {
    id: 'sage',
    slug: 'sage',
    name: 'Sage Accounting',
    icon: '📈',
    description: 'Comprehensive accounting software for various business sizes and industries.',
  },
  {
    id: 'custom-integration',
    slug: 'custom-integration',
    name: 'Custom Integration',
    icon: '🔗',
    description: 'Custom integrations with legacy systems, ERPs, and specialized business tools.',
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    name: 'Data & Analytics',
    icon: '📊',
    description: 'Advanced analytics, business intelligence, and data-driven insights for decision making.',
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
export const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CFO, TechStart Inc.',
    company: 'TechStart Inc.',
    text: 'Accounstone transformed our financial operations. Their offshore team seamlessly integrated with our systems and provided expert insights that helped us optimize cash flow.',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah',
  },
  {
    name: 'Michael Chen',
    title: 'Owner, Chen Healthcare Clinic',
    company: 'Chen Healthcare',
    text: 'As a growing medical practice, regulatory compliance was critical. Accounstone\'s healthcare expertise gave us peace of mind and freed up our time to focus on patient care.',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Michael',
  },
  {
    name: 'Emma Rodriguez',
    title: 'Managing Director, Global Logistics',
    company: 'Global Logistics Corp',
    text: 'The dedicated accounting team approach was perfect for our multi-entity structure. Their knowledge of our business made a real difference in our financial strategy.',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Emma',
  },
];

// Trust & Compliance badges
export const trustBadges = [
  { name: 'ISO 27001 Certified', icon: '🔒' },
  { name: 'SOC 2 Type II', icon: '✓' },
  { name: 'GDPR Compliant', icon: '📋' },
  { name: 'HIPAA Ready', icon: '🏥' },
];

// Company info
export const companyInfo = {
  name: 'Accounstone',
  tagline: 'Outsourced Accounting & Finance Solutions',
  description: 'Accounstone is a leading provider of outsourced accounting, finance, and HR services to growing businesses. With a team of expert accountants and CPAs, we deliver strategic financial solutions that drive business growth.',
  website: 'https://accounstone.com',
  contact: {
    email: 'hello@accounstone.com',
    phone: '+1 (555) 123-4567',
    address: '123 Finance Drive, New York, NY 10001',
  },
};
