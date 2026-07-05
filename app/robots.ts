import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/internal'],
      },
    ],
    sitemap: 'https://accounstone.vercel.app/sitemap.xml',
  };
}
