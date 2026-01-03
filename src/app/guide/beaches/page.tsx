import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Waves, MapPin, Star, ArrowRight, Palmtree, Wind, Users, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Beaches on Isla Margarita | Complete Beach Guide',
  description: 'Discover the 50+ stunning beaches of Isla Margarita, Venezuela. From the famous Playa El Agua to hidden paradise coves. Complete guide with photos, activities, and property nearby.',
  openGraph: {
    title: 'Isla Margarita Beaches | Caribbean Paradise Guide',
    description: 'Explore the most beautiful beaches in Venezuela. Crystal-clear waters, white sand, and tropical paradise await.',
  },
};

const featuredBeaches = [
  {
    name: 'Playa El Agua',
    description: 'The most famous beach on the island, stretching over 4km of golden sand. Known for its consistent waves, beach bars, and lively atmosphere. Perfect for both swimming and water sports.',
    features: ['4km Long', 'Beach Bars', 'Water Sports', 'Restaurants'],
    rating: 5,
    type: 'Popular',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    nearbyProperties: 12,
  },
  {
    name: 'Playa El Yaque',
    description: 'World-renowned windsurfing and kitesurfing destination. Consistent trade winds and shallow waters make it perfect for beginners and pros alike. International competitions held here regularly.',
    features: ['Windsurfing', 'Kitesurfing', 'Shallow Waters', 'Equipment Rental'],
    rating: 5,
    type: 'Water Sports',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80',
    nearbyProperties: 8,
  },
  {
    name: 'Playa Parguito',
    description: 'The surfing capital of Isla Margarita with the best waves on the island. Popular with young crowds, great beach restaurants, and a bohemian vibe. Surf schools available.',
    features: ['Surfing', 'Surf Schools', 'Beach Clubs', 'Nightlife'],
    rating: 5,
    type: 'Surfing',
    image: 'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?auto=format&fit=crop&w=800&q=80',
    nearbyProperties: 6,
  },
  {
    name: 'Playa Guacuco',
    description: 'A more tranquil alternative to El Agua with similarly beautiful golden sand. Less crowded, family-friendly, with calm waters perfect for swimming with children.',
    features: ['Family-Friendly', 'Calm Waters', 'Less Crowded', 'Local Restaurants'],
    rating: 4,
    type: 'Family',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    nearbyProperties: 5,
  },
  {
    name: 'Playa Caribe',
    description: 'Crystal-clear turquoise waters and soft white sand. One of the most picturesque beaches, popular for swimming and snorkeling. Several beachfront restaurants.',
    features: ['Crystal Clear', 'Snorkeling', 'White Sand', 'Restaurants'],
    rating: 5,
    type: 'Swimming',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    nearbyProperties: 4,
  },
  {
    name: 'Playa Puerto Cruz',
    description: 'Beautiful calm bay perfect for families. Clear waters, palm trees, and a relaxed atmosphere. Great local seafood restaurants right on the beach.',
    features: ['Calm Bay', 'Palm Trees', 'Seafood', 'Relaxed'],
    rating: 4,
    type: 'Family',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    nearbyProperties: 3,
  },
  {
    name: 'Playa Manzanillo',
    description: 'A local favorite tucked away from tourist areas. Authentic Venezuelan beach experience with local fishermen, simple restaurants, and incredibly fresh seafood.',
    features: ['Authentic', 'Fresh Seafood', 'Local Vibe', 'Fishing Boats'],
    rating: 4,
    type: 'Local Gem',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    nearbyProperties: 2,
  },
  {
    name: 'Playa La Restinga',
    description: 'Located within La Restinga National Park. Take a boat through mangrove channels to reach pristine, nearly deserted beaches. Excellent for birdwatching.',
    features: ['National Park', 'Boat Access', 'Pristine', 'Birdwatching'],
    rating: 5,
    type: 'Nature',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
    nearbyProperties: 1,
  },
];

const beachCategories = [
  { name: 'All Beaches', count: 50, icon: Waves },
  { name: 'Water Sports', count: 12, icon: Wind },
  { name: 'Family-Friendly', count: 15, icon: Users },
  { name: 'Hidden Gems', count: 10, icon: Camera },
];

export default function BeachesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            alt="Isla Margarita Beach"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container-custom">
          <div className="flex items-center gap-2 text-caribbean-400 mb-4">
            <Waves className="w-5 h-5" />
            <span className="font-medium">Beach Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            50+ Pristine Beaches
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            From world-famous windsurfing spots to hidden paradise coves, discover
            the incredible beaches that make Isla Margarita a Caribbean dream.
          </p>
          <div className="flex flex-wrap gap-4">
            {beachCategories.map((cat) => (
              <div key={cat.name} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <cat.icon className="w-4 h-4 text-caribbean-400" />
                <span>{cat.name}</span>
                <span className="text-caribbean-400 font-bold">{cat.count}+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Beaches */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Featured Beaches
          </h2>
          <div className="space-y-8">
            {featuredBeaches.map((beach, index) => (
              <article key={beach.name} className={`card overflow-hidden ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className="grid lg:grid-cols-2">
                  <div className={`relative h-64 lg:h-auto ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={beach.image}
                      alt={beach.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-caribbean-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {beach.type}
                      </span>
                    </div>
                  </div>
                  <div className={`p-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{beach.name}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(beach.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{beach.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {beach.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-caribbean-50 text-caribbean-700 text-sm px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{beach.nearbyProperties} properties nearby</span>
                      </div>
                      <Link
                        href={`/properties?location=${encodeURIComponent(beach.name.replace('Playa ', ''))}`}
                        className="inline-flex items-center gap-2 text-caribbean-600 font-medium hover:gap-3 transition-all"
                      >
                        View Properties <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Tips */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
              Beach Tips for Visitors
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-caribbean-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">Best Time to Visit</h3>
                <p className="text-gray-600">
                  The beaches are enjoyable year-round. December to April offers the driest weather.
                  Early morning is best for swimming; afternoon brings the best winds for water sports.
                </p>
              </div>
              <div className="p-6 bg-caribbean-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">Safety Tips</h3>
                <p className="text-gray-600">
                  Most beaches have lifeguards during peak hours. Respect red flag warnings.
                  Use reef-safe sunscreen to protect the marine ecosystem.
                </p>
              </div>
              <div className="p-6 bg-caribbean-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">What to Bring</h3>
                <p className="text-gray-600">
                  Sunscreen, hat, and plenty of water are essentials. Many beaches have chair and
                  umbrella rentals. Cash is preferred at most beach vendors.
                </p>
              </div>
              <div className="p-6 bg-caribbean-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">Local Customs</h3>
                <p className="text-gray-600">
                  Tipping beach service staff is appreciated. Respect local fishermen&apos;s equipment.
                  Many beaches are dog-friendly during off-peak hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-caribbean-600 text-white">
        <div className="container-custom text-center">
          <Palmtree className="w-16 h-16 mx-auto mb-6 text-caribbean-200" />
          <h2 className="text-3xl font-display font-bold mb-4">
            Live Steps from the Beach
          </h2>
          <p className="text-caribbean-100 mb-8 max-w-2xl mx-auto">
            Imagine waking up to ocean views every day. Browse our selection of
            beachfront properties and make your Caribbean dream a reality.
          </p>
          <Link href="/properties?type=beachfront" className="btn-secondary bg-white text-caribbean-700 hover:bg-gray-100">
            View Beachfront Properties
          </Link>
        </div>
      </section>
    </div>
  );
}
