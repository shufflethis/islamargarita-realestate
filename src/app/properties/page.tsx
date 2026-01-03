import { Metadata } from 'next';
import { Suspense } from 'react';
import PropertyGrid from '@/components/PropertyGrid';
import PropertyFilters from '@/components/PropertyFilters';
import { Building2, MapPin, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Properties for Sale | Browse Real Estate on Isla Margarita',
  description: 'Explore our curated selection of properties on Isla Margarita, Venezuela. From beachfront villas to modern apartments, find your perfect Caribbean investment.',
  openGraph: {
    title: 'Properties for Sale on Isla Margarita | Caribbean Real Estate',
    description: 'Browse premium real estate listings on Venezuela\'s Caribbean paradise. Beachfront homes, apartments, land, and commercial properties.',
    images: ['/images/properties-og.jpg'],
  },
};

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const type = typeof searchParams.type === 'string' ? searchParams.type : undefined;
  const minPrice = typeof searchParams.minPrice === 'string' ? parseInt(searchParams.minPrice) : undefined;
  const maxPrice = typeof searchParams.maxPrice === 'string' ? parseInt(searchParams.maxPrice) : undefined;
  const bedrooms = typeof searchParams.bedrooms === 'string' ? parseInt(searchParams.bedrooms) : undefined;
  const location = typeof searchParams.location === 'string' ? searchParams.location : undefined;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-caribbean-600 to-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-caribbean-200 mb-4">
            <Building2 className="w-5 h-5" />
            <span>Real Estate Listings</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Properties on Isla Margarita
          </h1>
          <p className="text-lg text-caribbean-100 max-w-2xl">
            Discover your perfect property in the Caribbean. From luxury beachfront villas
            to affordable apartments, we have options for every budget and lifestyle.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-caribbean-600" />
                  <h2 className="font-bold text-gray-900">Filter Properties</h2>
                </div>
                <PropertyFilters
                  currentType={type}
                  currentMinPrice={minPrice}
                  currentMaxPrice={maxPrice}
                  currentBedrooms={bedrooms}
                  currentLocation={location}
                />
              </div>
            </aside>

            {/* Property Grid */}
            <div className="lg:col-span-3">
              <Suspense fallback={<PropertyGridSkeleton />}>
                <PropertyGrid
                  type={type}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  bedrooms={bedrooms}
                  location={location}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Investing in Isla Margarita Real Estate
            </h2>
            <p className="text-gray-600 mb-4">
              Isla Margarita, known as the &quot;Pearl of the Caribbean,&quot; offers exceptional
              real estate opportunities for international investors. With property prices
              at historic lows and a growing tourism sector, now is the ideal time to
              secure your piece of paradise.
            </p>
            <p className="text-gray-600 mb-4">
              Our listings include carefully vetted properties across all major areas of
              the island, from the bustling commercial center of Porlamar to the serene
              beaches of Playa El Agua and the charming fishing village of Juan Griego.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              Popular Property Types
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Beachfront Villas:</strong> Luxury homes with direct beach access</li>
              <li><strong>Apartments:</strong> Modern condos ideal for vacation rentals</li>
              <li><strong>Land:</strong> Development opportunities with sea views</li>
              <li><strong>Commercial:</strong> High-traffic retail and hospitality spaces</li>
            </ul>
          </div>
        </div>
      </section>

      {/* JSON-LD for Property Listings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Isla Margarita Real Estate Listings',
            description: 'Premium properties for sale on Isla Margarita, Venezuela',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Beachfront Properties',
                url: 'https://islamargaritaimmobilien.de/properties?type=beachfront',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Apartments',
                url: 'https://islamargaritaimmobilien.de/properties?type=apartment',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Villas',
                url: 'https://islamargaritaimmobilien.de/properties?type=villa',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Land for Sale',
                url: 'https://islamargaritaimmobilien.de/properties?type=land',
              },
            ],
          }),
        }}
      />
    </div>
  );
}

function PropertyGridSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
          <div className="h-64 bg-gray-200" />
          <div className="p-5 space-y-3">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-10 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
