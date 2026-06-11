import type { MetadataRoute } from 'next';
import { SERVICES, INDUSTRIES, CASE_STUDIES_NAV } from '@/constants/nav';

const BASE_URL = 'https://www.tvamkeysoftware.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/industries', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/career', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/resources', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/sitemap', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const detailPages = [
    ...SERVICES.map((s) => ({ path: s.href, priority: 0.7 })),
    ...INDUSTRIES.map((i) => ({ path: i.href, priority: 0.7 })),
    ...CASE_STUDIES_NAV.map((c) => ({ path: c.href, priority: 0.6 })),
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${BASE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...detailPages.map((p) => ({
      url: `${BASE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p.priority,
    })),
  ];
}
