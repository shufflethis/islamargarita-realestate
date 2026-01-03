import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, Sun, Waves, Palmtree, Ship, Plane, Car,
  Heart, Users, DollarSign, Shield, ArrowRight, CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Guide to Isla Margarita | Everything You Need to Know',
  description: 'Comprehensive guide to Isla Margarita, Venezuela. Learn about beaches, cities, cost of living, climate, transportation, and everything you need to know about life on the Pearl of the Caribbean.',
  openGraph: {
    title: 'Isla Margarita Guide | The Pearl of the Caribbean',
    description: 'Your complete resource for understanding life on Venezuela\'s most beautiful island. Beaches, culture, lifestyle, and more.',
    images: ['/images/guide-og.jpg'],
  },
};

const guideCategories = [
  {
    title: 'Beaches',
    description: 'Explore 50+ pristine beaches from world-famous Playa El Agua to hidden gems.',
    href: '/guide/beaches',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Cities & Towns',
    description: 'Discover Porlamar, Pampatar, Juan Griego, and other charming communities.',
    href: '/guide/cities',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Living on the Island',
    description: 'Cost of living, healthcare, education, and daily life essentials.',
    href: '/guide/living',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Getting Here',
    description: 'Flights, ferries, and everything about traveling to Isla Margarita.',
    href: '/guide/travel',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
  },
];

const quickFacts = [
  { label: 'Population', value: '491,610', icon: Users },
  { label: 'Area', value: '1,071 km²', icon: MapPin },
  { label: 'Avg. Temperature', value: '27°C / 81°F', icon: Sun },
  { label: 'Beaches', value: '50+', icon: Waves },
  { label: 'Free Trade Zone', value: 'Yes', icon: DollarSign },
  { label: 'Safety Rating', value: 'Good', icon: Shield },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=80"
            alt="Isla Margarita Aerial View"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-caribbean-400 mb-4">
              <Palmtree className="w-5 h-5" />
              <span className="font-medium">Island Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Discover Isla Margarita
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your complete guide to Venezuela&apos;s Pearl of the Caribbean. From pristine beaches
              and vibrant culture to practical living information, everything you need to know
              about this tropical paradise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/guide/beaches" className="btn-primary">
                Explore Beaches
              </Link>
              <Link href="/guide/living" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                Living Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Isla Margarita at a Glance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key facts about Venezuela&apos;s largest and most popular Caribbean island.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="text-center p-6 bg-gray-50 rounded-xl">
                <fact.icon className="w-8 h-8 text-caribbean-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">{fact.value}</div>
                <div className="text-sm text-gray-500">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Explore Our Guides
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              In-depth information to help you understand and plan your life on Isla Margarita.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {guideCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="card group overflow-hidden flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-2 text-caribbean-600 mb-2">
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.title}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="inline-flex items-center gap-2 text-caribbean-600 font-medium group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Isla Margarita Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                About Isla Margarita
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Isla Margarita, known as <strong>&quot;La Perla del Caribe&quot;</strong> (The Pearl of the Caribbean),
                  is the largest island in the Venezuelan state of Nueva Esparta. Located in the
                  Caribbean Sea, just 40 kilometers north of the Venezuelan mainland, this stunning
                  island has been a premier tourist destination for decades.
                </p>
                <p>
                  The island is divided into two parts: the larger eastern section, home to most
                  of the population and tourist infrastructure, and the smaller, more arid western
                  peninsula called Macanao. These two sections are connected by the La Restinga
                  National Park, a spectacular mangrove lagoon.
                </p>
                <p>
                  Thanks to its <strong>Free Trade Zone</strong> status, Isla Margarita offers
                  duty-free shopping that attracts visitors from across South America. Combined
                  with over 50 beautiful beaches, rich colonial history, and warm Caribbean climate,
                  it&apos;s easy to see why so many are choosing to invest and live here.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80"
                  alt="Isla Margarita Paradise"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-caribbean-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="text-3xl font-bold mb-1">300+</div>
                <div className="text-caribbean-200">Days of Sunshine per Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <Sun className="w-8 h-8 text-gold-400 mb-3" />
                  <div className="text-2xl font-bold">27°C</div>
                  <div className="text-gray-400">Average Temperature</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <Waves className="w-8 h-8 text-caribbean-400 mb-3" />
                  <div className="text-2xl font-bold">26°C</div>
                  <div className="text-gray-400">Ocean Temperature</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">Low</div>
                  <div className="text-gray-400">Humidity Levels</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">Minimal</div>
                  <div className="text-gray-400">Rainy Season Impact</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-display font-bold mb-6">
                Perfect Climate Year-Round
              </h2>
              <p className="text-gray-300 mb-6">
                Isla Margarita enjoys one of the most pleasant climates in the Caribbean.
                The island sits outside the hurricane belt, meaning it rarely experiences
                tropical storms. The trade winds keep temperatures comfortable even during
                the hottest months.
              </p>
              <ul className="space-y-3">
                {[
                  'Year-round tropical climate (24-32°C)',
                  'Outside the hurricane belt',
                  'Constant trade wind breeze',
                  'Low humidity compared to other Caribbean islands',
                  'Minimal rainfall, mostly brief afternoon showers',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-caribbean-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 text-center">
              Rich History & Culture
            </h2>
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p>
                Isla Margarita has a fascinating history dating back to pre-Columbian times.
                The island was home to the Guaiquerí indigenous people, skilled fishermen who
                traded pearls with neighboring tribes. Christopher Columbus spotted the island
                during his third voyage in 1498, and the Spanish soon established settlements.
              </p>
              <p>
                The island became famous for its pearl fisheries, earning it the nickname
                &quot;Pearl of the Caribbean.&quot; The colonial towns of La Asunción and Pampatar
                still showcase beautiful Spanish colonial architecture, including impressive
                fortresses built to defend against pirates.
              </p>
              <p>
                Isla Margarita played a significant role in Venezuelan independence, and today
                it honors this heritage through monuments and preserved historical sites. The
                island&apos;s culture blends indigenous, Spanish, and African influences, visible in
                its music, cuisine, and festivals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-caribbean-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Make Isla Margarita Your Home?
          </h2>
          <p className="text-caribbean-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking for a vacation property, investment opportunity,
            or permanent residence, we can help you find your perfect place in paradise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties" className="btn-secondary bg-white text-caribbean-700 hover:bg-gray-100">
              Browse Properties
            </Link>
            <a
              href="https://wa.me/5548991308941?text=Hello!%20I%20read%20your%20island%20guide%20and%20I'm%20interested%20in%20learning%20more%20about%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Complete Guide to Isla Margarita, Venezuela',
            description: 'Comprehensive guide covering beaches, cities, lifestyle, and everything you need to know about Isla Margarita.',
            image: 'https://islamargaritaimmobilien.de/images/guide-og.jpg',
            author: {
              '@type': 'Organization',
              name: 'Isla Margarita Immobilien',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Isla Margarita Immobilien',
              logo: {
                '@type': 'ImageObject',
                url: 'https://islamargaritaimmobilien.de/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://islamargaritaimmobilien.de/guide',
            },
          }),
        }}
      />
    </div>
  );
}
