import { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/seo';
import { services, solutions, markets, technologies, industries } from '@/lib/data';

/**
 * Sitemap policy:
 * - Include only canonical, indexable content routes.
 * - Keep utility/legal pages out unless there is a clear search purpose.
 * - Do not invent lastModified dates. Add route-level dates only when the
 *   content has a reliable source of truth.
 * - Priority is retained only for framework compatibility; it is not used
 *   as a ranking strategy.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/solutions', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/technology', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/markets', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/resources', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/resources/case-studies', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/resources/guides', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/resources/insights', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/delivery-framework/onboarding', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/delivery-framework/communication', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/delivery-framework/quality-assurance', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/data-security', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/compliance', priority: 0.5, changeFrequency: 'monthly' },
  ];

  const dynamicRoutes = [
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.85, changeFrequency: 'monthly' as const })),
    ...solutions.map((s) => ({ path: `/solutions/${s.slug}`, priority: 0.85, changeFrequency: 'monthly' as const })),
    ...markets.map((m) => ({ path: `/markets/${m.slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
    ...technologies.map((t) => ({ path: `/technology/${t.slug}`, priority: 0.75, changeFrequency: 'monthly' as const })),
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.75, changeFrequency: 'monthly' as const })),
  ];

  const specializedRoutes = [
    { path: '/industries/real-estate/yardi-accounting-outsourcing-texas', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/services/bookkeeping/united-states', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/tax-preparation/united-states', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/audit-support/united-states', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/outsourced-bookkeeping-cost-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/quickbooks-vs-xero-comparison', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/staff-augmentation-tax-season-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/insights/sales-tax-nexus-ecommerce-guide', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/insights/asc-606-revenue-recognition-saas', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/markets/united-states/texas', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/markets/united-states/california', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/markets/united-states/florida', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/services/bookkeeping/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/tax-preparation/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/audit-support/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/bookkeeping/australia', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/tax-preparation/australia', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/audit-support/australia', priority: 0.8, changeFrequency: 'monthly' as const },
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
  }));
}