import { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/internal', '/api'],
      },
    ],
    // FIXED: was pointing to accounstone.vercel.app (the staging URL).
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
