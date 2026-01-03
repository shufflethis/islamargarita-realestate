import Link from 'next/link';
import Image from 'next/image';
import {
  Sun, Waves, Shield, TrendingUp, Home, Users, MapPin,
  CheckCircle, ArrowRight, Star, Building2, DollarSign,
  Palmtree, Compass, Heart
} from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { getFeaturedProperties } from '@/lib/properties';

const features = [
  {
    icon: Sun,
    title: 'Caribbean Paradise',
    description: 'Year-round tropical climate with 300+ days of sunshine. Perfect for vacation homes or permanent relocation.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Opportunity',
    description: 'Property prices significantly below pre-crisis levels. Early investors are seeing exceptional returns.',
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'We guide you through every step of the buying process with legal expertise and local knowledge.',
  },
  {
    icon: Waves,
    title: 'Pristine Beaches',
    description: 'Over 50 beaches to choose from. Crystal-clear waters and white sand just steps from your property.',
  },
];

const stats = [
  { value: '50+', label: 'Pristine Beaches' },
  { value: '$50K', label: 'Starting Prices' },
  { value: '300+', label: 'Sunny Days/Year' },
  { value: '24/7', label: 'Support Available' },
];

const propertyTypes = [
  { name: 'Beachfront Villas', count: 45, icon: Palmtree, href: '/properties?type=villa' },
  { name: 'Modern Apartments', count: 120, icon: Building2, href: '/properties?type=apartment' },
  { name: 'Land & Lots', count: 80, icon: Compass, href: '/properties?type=land' },
  { name: 'Commercial', count: 35, icon: DollarSign, href: '/properties?type=commercial' },
];

const testimonials = [
  {
    name: 'Michael Thompson',
    location: 'Miami, Florida',
    text: 'Incredible investment opportunity. We purchased a beachfront apartment for a fraction of what it would cost in Florida. The team made the process seamless.',
    rating: 5,
  },
  {
    name: 'Sarah & James Miller',
    location: 'Toronto, Canada',
    text: 'Our dream retirement home became a reality. The island is paradise and the buying process was surprisingly straightforward with their guidance.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    location: 'Los Angeles, CA',
    text: 'Best real estate decision I ever made. The ROI potential here is unmatched. Already looking at my second property.',
    rating: 5,
  },
];

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties(6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            alt="Isla Margarita Beach"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900" />
        </div>

        <div className="relative z-10 container-custom text-center text-white py-20">
          <div className="inline-flex items-center gap-2 bg-caribbean-600/20 border border-caribbean-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-caribbean-400 rounded-full animate-pulse" />
            <span className="text-caribbean-300 text-sm font-medium">Now is the Perfect Time to Invest</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow-lg">
            Your Caribbean Dream
            <span className="block gradient-text">Starts Here</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Discover premium real estate opportunities on Isla Margarita, Venezuela.
            Beachfront properties, exceptional value, and expert guidance for international buyers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/properties" className="btn-primary text-lg px-8 py-4">
              <Building2 className="w-5 h-5 mr-2" />
              Browse Properties
            </Link>
            <a
              href="https://wa.me/5548991308941?text=Hello!%20I'm%20interested%20in%20Isla%20Margarita%20properties"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Talk to an Expert
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl md:text-4xl font-bold text-caribbean-400">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Isla Margarita?</h2>
            <p className="section-subtitle">
              The Caribbean&apos;s best-kept secret for real estate investment and paradise living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card p-6 text-center group">
                <div className="w-16 h-16 bg-caribbean-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-caribbean-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-caribbean-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Explore Property Types</h2>
            <p className="section-subtitle">
              From luxury beachfront villas to investment land, find your perfect property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type) => (
              <Link key={type.name} href={type.href} className="card group overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-caribbean-500 to-primary-600">
                  <type.icon className="absolute bottom-4 right-4 w-24 h-24 text-white/20" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-1">{type.name}</h3>
                    <p className="text-caribbean-200">{type.count} Properties</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-caribbean-600 font-medium">View All</span>
                  <ArrowRight className="w-5 h-5 text-caribbean-600 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="section-title mb-2">Featured Properties</h2>
              <p className="text-gray-600">Hand-picked opportunities for discerning buyers</p>
            </div>
            <Link href="/properties" className="btn-secondary">
              View All Properties
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Island Guide CTA */}
      <section className="py-20 bg-gradient-to-r from-caribbean-600 to-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Discover Isla Margarita
              </h2>
              <p className="text-lg text-caribbean-100 mb-8">
                Learn everything about life on Venezuela&apos;s Pearl of the Caribbean.
                From pristine beaches to vibrant culture, our comprehensive guide covers it all.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Complete Beach Guide with 50+ Beaches',
                  'Cities & Neighborhoods Overview',
                  'Cost of Living Calculator',
                  'Healthcare & Services Information',
                  'Transportation & Getting Around',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-caribbean-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/guide" className="btn-secondary bg-white text-caribbean-700 hover:bg-gray-100">
                Explore the Island Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
                  alt="Isla Margarita Beach Paradise"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-caribbean-600" />
                  <span className="font-bold">Nueva Esparta State</span>
                </div>
                <p className="text-sm text-gray-600">
                  920 km² of Caribbean paradise with duty-free shopping and year-round sunshine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                    alt="Real Estate Investment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-caribbean-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">15-25%</div>
                  <div className="text-caribbean-200">Avg. Annual ROI</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Smart Investment,{' '}
                <span className="text-caribbean-400">Exceptional Returns</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Property prices in Venezuela are at historic lows, creating unprecedented
                investment opportunities. Early movers are already seeing substantial returns
                as the market recovers.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-caribbean-400">70%</div>
                  <div className="text-gray-400 text-sm">Below 2014 Peak Prices</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-caribbean-400">$50K</div>
                  <div className="text-gray-400 text-sm">Entry-Level Properties</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-caribbean-400">8%</div>
                  <div className="text-gray-400 text-sm">Rental Yield Potential</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-caribbean-400">0%</div>
                  <div className="text-gray-400 text-sm">Foreign Ownership Tax</div>
                </div>
              </div>
              <Link href="/investment" className="btn-primary">
                Investment Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">What Our Clients Say</h2>
            <p className="section-subtitle">
              Join hundreds of satisfied international buyers who found their Caribbean dream.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-caribbean-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-caribbean-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 text-caribbean-600 mx-auto mb-6" />
            <h2 className="section-title mb-4">Ready to Find Your Paradise?</h2>
            <p className="section-subtitle mb-8">
              Let our expert team guide you to the perfect property on Isla Margarita.
              Free consultation, no obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5548991308941?text=Hello!%20I'm%20interested%20in%20Isla%20Margarita%20properties.%20Can%20we%20schedule%20a%20consultation?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg px-8 py-4"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Schedule Free Consultation
              </a>
              <Link href="/properties" className="btn-secondary text-lg px-8 py-4">
                Browse All Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
