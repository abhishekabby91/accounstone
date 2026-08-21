import { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/seo';
import { services, solutions, markets, technologies, industries } from '@/lib/data';

/**
 * Sitemap policy:
 * - Include only canonical, indexable content routes.
 * - Keep utility/legal pages out unless there is a clear search purpose.
 * - lastModified uses the date of the most recent content pass that
 *   touched that route. Defaults to 2026-08-14 (the date of the
 *   sitewide content/crawlability/accuracy audit).
 * - Priority is retained only for framework compatibility; it is not
 *   used as a ranking strategy.
 */

const LAST_AUDIT = '2026-08-14';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    lastModified?: string;
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly', lastModified: LAST_AUDIT },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly', lastModified: LAST_AUDIT },
    { path: '/solutions', priority: 0.9, changeFrequency: 'weekly', lastModified: LAST_AUDIT },
    { path: '/technology', priority: 0.8, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/markets', priority: 0.8, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/resources', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/resources/case-studies', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/resources/guides', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/resources/insights', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/delivery-framework/onboarding', priority: 0.5, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/delivery-framework/communication', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/delivery-framework/quality-assurance', priority: 0.5, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/data-security', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/compliance', priority: 0.5, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
  ];

  const dynamicRoutes = [
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.85, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT })),
    ...solutions.map((s) => ({ path: `/solutions/${s.slug}`, priority: 0.85, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT })),
    ...markets.map((m) => ({ path: `/markets/${m.slug}`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT })),
    ...technologies.map((t) => ({ path: `/technology/${t.slug}`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT })),
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT })),
  ];

  const specializedRoutes = [
    { path: '/industries/real-estate/yardi-accounting-outsourcing-texas', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/services/bookkeeping/united-states', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/tax-preparation/united-states', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/audit-support/united-states', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/payroll/united-states', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-payable/united-states', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-receivable/united-states', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounting/united-states', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/payroll/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/payroll/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-payable/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-payable/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-receivable/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-receivable/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/resources/guides/outsourced-bookkeeping-cost-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/quickbooks-vs-xero-comparison', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/staff-augmentation-tax-season-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/insights/sales-tax-nexus-ecommerce-guide', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/insights/asc-606-revenue-recognition-saas', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/resources/guides/how-to-choose-accounting-outsourcing-partner', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/resources/guides/client-accounting-services-cas-guide', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/markets/united-states/texas', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/markets/united-states/california', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/markets/united-states/florida', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/services/bookkeeping/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/tax-preparation/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/audit-support/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/bookkeeping/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/tax-preparation/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/audit-support/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    // Blog articles
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/outsourced-bookkeeping-guide', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/accounts-payable-outsourcing', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/accounts-receivable-management', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/outsourced-payroll-services', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/outsourced-accounting-services', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/tax-preparation-outsourcing', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/audit-support-services', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
  ];

  const seen = new Set<string>();
  const allRoutes = [...staticRoutes, ...dynamicRoutes, ...specializedRoutes].filter((route) => {
    if (seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.lastModified ? { lastModified: route.lastModified } : {}),
  }));
}
