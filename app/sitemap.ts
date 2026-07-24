import { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/seo';
import { services, solutions, markets, technologies, industries } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  // FIXED: was hardcoded to "https://accounstone.vercel.app" — the
  // temporary Vercel staging URL, not the real domain. Now pulled from
  // the single shared baseUrl constant in lib/seo.ts.

  // Manually maintained pages that don't come from a lib/data.ts array.
  // NOTE: add new standalone routes here (e.g. new delivery-framework
  // sub-pages) — everything else below is generated automatically.
  const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/solutions', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/technology', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/markets', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/resources', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/resources/case-studies', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/resources/guides', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/resources/insights', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/delivery-framework/onboarding', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/delivery-framework/communication', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/delivery-framework/quality-assurance', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/compliance', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/data-security', priority: 0.4, changeFrequency: 'yearly' },
  ];

  // Generated automatically from lib/data.ts — adding a new service,
  // solution, market, technology, or industry there means it appears
  // here with zero extra work, instead of silently going missing.
  const dynamicRoutes = [
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.85, changeFrequency: 'monthly' as const })),
    ...solutions.map((s) => ({ path: `/solutions/${s.slug}`, priority: 0.85, changeFrequency: 'monthly' as const })),
    ...markets.map((m) => ({ path: `/markets/${m.slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
    ...technologies.map((t) => ({ path: `/technology/${t.slug}`, priority: 0.75, changeFrequency: 'monthly' as const })),
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.75, changeFrequency: 'monthly' as const })),
  ];

  // Deep/specialized pages that live under a dynamic route but aren't
  // themselves derived from lib/data.ts (e.g. the Yardi + Texas page).
  // Add entries here as you build more of these specific long-tail pages.
  const specializedRoutes = [
    { path: '/industries/real-estate/yardi-accounting-outsourcing-texas', priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes, ...specializedRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
