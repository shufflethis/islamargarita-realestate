/**
 * Venezuela Real Estate Scraper
 * Scrapes property listings from multiple Venezuelan real estate websites
 * Focuses on Isla Margarita / Nueva Esparta region
 */

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
  outputDir: path.join(__dirname, '../src/data'),
  outputFile: 'scraped-properties.json',
  maxPropertiesPerSource: 50,
  requestDelay: 2000, // 2 seconds between requests to be respectful
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
};

// Property sources configuration
const SOURCES = [
  {
    name: 'TuInmueble',
    baseUrl: 'https://tuinmueble.com.ve',
    searchUrl: 'https://tuinmueble.com.ve/inmuebles/venta/nueva-esparta',
    enabled: true,
    parser: parseTuInmueble,
  },
  {
    name: 'MercadoLibre',
    baseUrl: 'https://inmuebles.mercadolibre.com.ve',
    searchUrl: 'https://inmuebles.mercadolibre.com.ve/casas/venta/nueva-esparta/',
    enabled: true,
    parser: parseMercadoLibre,
  },
  {
    name: 'Remax Venezuela',
    baseUrl: 'https://www.remax.com.ve',
    searchUrl: 'https://www.remax.com.ve/publiclistinglist.aspx?SearchType=1&State=nueva-esparta',
    enabled: true,
    parser: parseRemax,
  },
];

/**
 * Main scraping function
 */
async function scrapeAll() {
  console.log('🏠 Starting Venezuela Real Estate Scraper...\n');
  console.log(`📅 Date: ${new Date().toISOString()}\n`);

  const allProperties = [];
  let browser;

  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
      ],
    });

    const page = await browser.newPage();
    await page.setUserAgent(CONFIG.userAgent);
    await page.setViewport({ width: 1920, height: 1080 });

    // Scrape each source
    for (const source of SOURCES) {
      if (!source.enabled) {
        console.log(`⏭️  Skipping ${source.name} (disabled)\n`);
        continue;
      }

      console.log(`\n📍 Scraping ${source.name}...`);
      console.log(`   URL: ${source.searchUrl}`);

      try {
        const properties = await scrapeSource(page, source);
        console.log(`   ✅ Found ${properties.length} properties`);
        allProperties.push(...properties);
      } catch (error) {
        console.error(`   ❌ Error scraping ${source.name}:`, error.message);
      }

      // Delay between sources
      await delay(CONFIG.requestDelay);
    }

    // Save results
    await saveResults(allProperties);

    console.log('\n🎉 Scraping completed!');
    console.log(`   Total properties: ${allProperties.length}`);

  } catch (error) {
    console.error('Fatal error:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  return allProperties;
}

/**
 * Scrape a single source
 */
async function scrapeSource(page, source) {
  const properties = [];

  try {
    await page.goto(source.searchUrl, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Get page content
    const content = await page.content();
    const $ = cheerio.load(content);

    // Parse using source-specific parser
    const parsed = await source.parser($, source);
    properties.push(...parsed.slice(0, CONFIG.maxPropertiesPerSource));

  } catch (error) {
    console.error(`Error loading ${source.name}:`, error.message);
  }

  return properties;
}

/**
 * Parser for TuInmueble.com.ve
 */
async function parseTuInmueble($, source) {
  const properties = [];

  $('.property-card, .listing-item, .inmueble-item').each((index, element) => {
    try {
      const $el = $(element);

      const title = $el.find('.title, .property-title, h2, h3').first().text().trim();
      const priceText = $el.find('.price, .precio').first().text().trim();
      const location = $el.find('.location, .ubicacion, .address').first().text().trim();
      const image = $el.find('img').first().attr('src') || $el.find('img').first().attr('data-src');
      const link = $el.find('a').first().attr('href');
      const area = extractNumber($el.find('.area, .metros, .m2').first().text());
      const bedrooms = extractNumber($el.find('.bedrooms, .habitaciones, .cuartos').first().text());
      const bathrooms = extractNumber($el.find('.bathrooms, .banos').first().text());

      if (title && priceText) {
        properties.push({
          id: `tuinmueble-${index}-${Date.now()}`,
          slug: generateSlug(title),
          title: title || 'Property in Nueva Esparta',
          description: `Property listing from TuInmueble. ${location}`,
          price: extractPrice(priceText),
          location: location || 'Isla Margarita, Venezuela',
          propertyType: detectPropertyType(title),
          listingType: 'sale',
          bedrooms: bedrooms || undefined,
          bathrooms: bathrooms || undefined,
          area: area || 100,
          images: image ? [normalizeImageUrl(image, source.baseUrl)] : [],
          featured: false,
          isNew: true,
          amenities: [],
          source: 'TuInmueble',
          sourceUrl: link ? normalizeUrl(link, source.baseUrl) : source.searchUrl,
          scrapedAt: new Date().toISOString(),
        });
      }
    } catch (e) {
      // Skip problematic entries
    }
  });

  return properties;
}

/**
 * Parser for MercadoLibre Inmuebles
 */
async function parseMercadoLibre($, source) {
  const properties = [];

  $('.ui-search-result, .ui-search-layout__item').each((index, element) => {
    try {
      const $el = $(element);

      const title = $el.find('.ui-search-item__title, .ui-search-result__title').first().text().trim();
      const priceText = $el.find('.price-tag-fraction, .ui-search-price__second-line').first().text().trim();
      const location = $el.find('.ui-search-item__location, .ui-search-item__group__element').first().text().trim();
      const image = $el.find('img').first().attr('src') || $el.find('img').first().attr('data-src');
      const link = $el.find('a.ui-search-link, a.ui-search-result__link').first().attr('href');

      // Extract attributes
      const attributes = [];
      $el.find('.ui-search-card-attributes__attribute, .ui-search-item__attributes li').each((i, attr) => {
        attributes.push($(attr).text().trim());
      });

      const bedrooms = extractFromAttributes(attributes, ['dormitorio', 'habitacion', 'cuarto']);
      const bathrooms = extractFromAttributes(attributes, ['bano', 'baño']);
      const area = extractFromAttributes(attributes, ['m²', 'metros']);

      if (title) {
        properties.push({
          id: `mercadolibre-${index}-${Date.now()}`,
          slug: generateSlug(title),
          title: title,
          description: `Property listing from MercadoLibre. ${attributes.join(', ')}`,
          price: extractPrice(priceText),
          location: location || 'Nueva Esparta, Venezuela',
          propertyType: detectPropertyType(title),
          listingType: 'sale',
          bedrooms: bedrooms || undefined,
          bathrooms: bathrooms || undefined,
          area: area || 100,
          images: image ? [image] : [],
          featured: false,
          isNew: true,
          amenities: [],
          source: 'MercadoLibre',
          sourceUrl: link || source.searchUrl,
          scrapedAt: new Date().toISOString(),
        });
      }
    } catch (e) {
      // Skip problematic entries
    }
  });

  return properties;
}

/**
 * Parser for Remax Venezuela
 */
async function parseRemax($, source) {
  const properties = [];

  $('.gallery-item, .property-item, .listing-item').each((index, element) => {
    try {
      const $el = $(element);

      const title = $el.find('.property-title, .listing-title, h3, h4').first().text().trim();
      const priceText = $el.find('.property-price, .price').first().text().trim();
      const location = $el.find('.property-location, .location').first().text().trim();
      const image = $el.find('img').first().attr('src');
      const link = $el.find('a').first().attr('href');
      const description = $el.find('.property-description, .description').first().text().trim();

      if (title) {
        properties.push({
          id: `remax-${index}-${Date.now()}`,
          slug: generateSlug(title),
          title: title,
          description: description || `Remax listing in Nueva Esparta`,
          price: extractPrice(priceText),
          location: location || 'Isla Margarita, Venezuela',
          propertyType: detectPropertyType(title),
          listingType: 'sale',
          area: 100,
          images: image ? [normalizeImageUrl(image, source.baseUrl)] : [],
          featured: false,
          isNew: true,
          amenities: [],
          source: 'Remax',
          sourceUrl: link ? normalizeUrl(link, source.baseUrl) : source.searchUrl,
          scrapedAt: new Date().toISOString(),
        });
      }
    } catch (e) {
      // Skip problematic entries
    }
  });

  return properties;
}

// Utility functions

function extractPrice(text) {
  if (!text) return 50000; // Default price
  const cleaned = text.replace(/[^\d.,]/g, '').replace(',', '.');
  const number = parseFloat(cleaned);
  if (isNaN(number)) return 50000;
  // If price is very low, it's probably in thousands
  if (number < 1000) return number * 1000;
  return Math.round(number);
}

function extractNumber(text) {
  if (!text) return null;
  const match = text.match(/\d+/);
  return match ? parseInt(match[0]) : null;
}

function extractFromAttributes(attributes, keywords) {
  for (const attr of attributes) {
    const lower = attr.toLowerCase();
    for (const keyword of keywords) {
      if (lower.includes(keyword)) {
        const num = extractNumber(attr);
        if (num) return num;
      }
    }
  }
  return null;
}

function detectPropertyType(title) {
  const lower = title.toLowerCase();
  if (lower.includes('apartamento') || lower.includes('apto')) return 'apartment';
  if (lower.includes('villa')) return 'villa';
  if (lower.includes('casa')) return 'house';
  if (lower.includes('terreno') || lower.includes('lote')) return 'land';
  if (lower.includes('local') || lower.includes('comercial')) return 'commercial';
  if (lower.includes('playa') || lower.includes('beach')) return 'beachfront';
  return 'house';
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 60);
}

function normalizeUrl(url, baseUrl) {
  if (!url) return baseUrl;
  if (url.startsWith('http')) return url;
  if (url.startsWith('//')) return 'https:' + url;
  if (url.startsWith('/')) return baseUrl + url;
  return baseUrl + '/' + url;
}

function normalizeImageUrl(url, baseUrl) {
  if (!url) return null;
  if (url.startsWith('data:')) return null;
  return normalizeUrl(url, baseUrl);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function saveResults(properties) {
  try {
    // Ensure output directory exists
    await fs.mkdir(CONFIG.outputDir, { recursive: true });

    const outputPath = path.join(CONFIG.outputDir, CONFIG.outputFile);

    // Add metadata
    const output = {
      lastUpdated: new Date().toISOString(),
      totalProperties: properties.length,
      sources: [...new Set(properties.map(p => p.source))],
      properties: properties,
    };

    await fs.writeFile(outputPath, JSON.stringify(output, null, 2));
    console.log(`\n💾 Results saved to: ${outputPath}`);
  } catch (error) {
    console.error('Error saving results:', error);
  }
}

// Export for use in other modules
module.exports = { scrapeAll, SOURCES };

// Run if called directly
if (require.main === module) {
  scrapeAll().catch(console.error);
}
