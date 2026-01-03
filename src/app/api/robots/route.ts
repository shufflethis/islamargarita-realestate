import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `# Robots.txt for islamargaritaimmobilien.de
# https://islamargaritaimmobilien.de

User-agent: *
Allow: /

# Sitemaps
Sitemap: https://islamargaritaimmobilien.de/sitemap.xml

# Disallow admin/api paths
Disallow: /api/
Disallow: /_next/

# Allow important paths
Allow: /properties
Allow: /guide
Allow: /investment
Allow: /contact

# Crawl-delay for politeness
Crawl-delay: 1
`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
