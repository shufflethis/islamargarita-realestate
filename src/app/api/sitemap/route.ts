import { NextResponse } from 'next/server';
import { getAllProperties } from '@/lib/properties';

export async function GET() {
  const baseUrl = 'https://islamargaritaimmobilien.de';

  const staticPages = [
    { url: '', priority: 1.0, changefreq: 'daily' },
    { url: '/properties', priority: 0.9, changefreq: 'daily' },
    { url: '/guide', priority: 0.8, changefreq: 'weekly' },
    { url: '/guide/beaches', priority: 0.7, changefreq: 'weekly' },
    { url: '/guide/cities', priority: 0.7, changefreq: 'weekly' },
    { url: '/guide/living', priority: 0.7, changefreq: 'weekly' },
    { url: '/guide/travel', priority: 0.7, changefreq: 'weekly' },
    { url: '/investment', priority: 0.8, changefreq: 'weekly' },
    { url: '/investment/market', priority: 0.7, changefreq: 'weekly' },
    { url: '/investment/buying-process', priority: 0.7, changefreq: 'monthly' },
    { url: '/investment/legal', priority: 0.7, changefreq: 'monthly' },
    { url: '/contact', priority: 0.6, changefreq: 'monthly' },
  ];

  const properties = getAllProperties();
  const propertyPages = properties.map((property) => ({
    url: `/properties/${property.slug}`,
    priority: 0.6,
    changefreq: 'weekly',
    lastmod: property.scrapedAt || new Date().toISOString(),
  }));

  const allPages = [...staticPages, ...propertyPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
