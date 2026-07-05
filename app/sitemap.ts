import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://accounstone.vercel.app';

  // STATIC PAGES
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/solutions',
    '/technology',
    '/markets',
    '/resources/case-studies',
    '/resources/guides',
    '/resources/insights',
  ];

  // SERVICE PAGES
  const serviceRoutes = [
    '/services/bookkeeping',
    '/services/accounting',
    '/services/tax-preparation',
    '/services/payroll',
    '/services/accounts-payable',
    '/services/accounts-receivable',
    '/services/cfo-support',
    '/services/audit-support',
  ];

  // SOLUTION PAGES
  const solutionRoutes = [
    '/solutions/offshore-accounting-support',
    '/solutions/staff-augmentation',
    '/solutions/dedicated-accounting-teams',
    '/solutions/back-office-support',
  ];

  // TECHNOLOGY PAGES
  const technologyRoutes = [
    '/technology/quickbooks',
    '/technology/xero',
    '/technology/sage',
    '/technology/netsuite',
    '/technology/drake-tax',
    '/technology/cch',
    '/technology/myob',
  ];

  // MARKET PAGES
  const marketRoutes = [
    '/markets/united-states',
    '/markets/united-kingdom',
    '/markets/australia',
  ];

  // COMBINE ALL ROUTES
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...technologyRoutes,
    ...marketRoutes,
  ];

  // GENERATE SITEMAP
  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : route.includes('/services') || route.includes('/technology') || route.includes('/solutions') || route.includes('/markets') ? ('monthly' as const) : ('weekly' as const),
    priority: route === '' ? 1 : route.includes('/services') || route.includes('/solutions') || route.includes('/markets') ? 0.9 : route.includes('/technology') ? 0.8 : 0.7,
  }));
}
