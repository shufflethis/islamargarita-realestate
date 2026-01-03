import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPropertyBySlug, getAllProperties } from '@/lib/properties';
import {
  MapPin, Bed, Bath, Square, Calendar, Car, ArrowLeft,
  CheckCircle, Share2, Heart, Printer
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = await getPropertyBySlug(params.slug);

  if (!property) {
    return {
      title: 'Property Not Found',
    };
  }

  return {
    title: `${property.title} | $${property.price.toLocaleString()}`,
    description: property.description.substring(0, 160),
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.images[0] ? [property.images[0]] : [],
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const properties = getAllProperties();
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyDetailPage({ params }: Props) {
  const property = await getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in: ${property.title} (${property.price.toLocaleString()} USD). Can you provide more information?`
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-caribbean-600">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/properties" className="text-gray-500 hover:text-caribbean-600">Properties</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium truncate">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Back Button */}
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-caribbean-600 hover:text-caribbean-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={property.images[0] || '/images/placeholder-property.jpg'}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <span className="bg-gold-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  {property.isNew && (
                    <span className="bg-caribbean-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      New Listing
                    </span>
                  )}
                </div>
              </div>

              {property.images.length > 1 && (
                <div className="p-4 grid grid-cols-4 gap-2">
                  {property.images.slice(1, 5).map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                      <Image
                        src={image}
                        alt={`${property.title} - Image ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-caribbean-600" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Printer className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl mb-8">
                {property.bedrooms !== undefined && (
                  <div className="text-center">
                    <Bed className="w-6 h-6 text-caribbean-600 mx-auto mb-1" />
                    <div className="font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-500">Bedrooms</div>
                  </div>
                )}
                {property.bathrooms !== undefined && (
                  <div className="text-center">
                    <Bath className="w-6 h-6 text-caribbean-600 mx-auto mb-1" />
                    <div className="font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-sm text-gray-500">Bathrooms</div>
                  </div>
                )}
                <div className="text-center">
                  <Square className="w-6 h-6 text-caribbean-600 mx-auto mb-1" />
                  <div className="font-bold text-gray-900">{property.area}</div>
                  <div className="text-sm text-gray-500">m² Area</div>
                </div>
                {property.yearBuilt && (
                  <div className="text-center">
                    <Calendar className="w-6 h-6 text-caribbean-600 mx-auto mb-1" />
                    <div className="font-bold text-gray-900">{property.yearBuilt}</div>
                    <div className="text-sm text-gray-500">Year Built</div>
                  </div>
                )}
                {property.parkingSpaces !== undefined && (
                  <div className="text-center">
                    <Car className="w-6 h-6 text-caribbean-600 mx-auto mb-1" />
                    <div className="font-bold text-gray-900">{property.parkingSpaces}</div>
                    <div className="text-sm text-gray-500">Parking</div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              {property.amenities.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Amenities & Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-caribbean-600 flex-shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">{property.location}</p>
                  <p className="text-sm text-gray-400">Isla Margarita, Venezuela</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Price */}
              <div className="text-center pb-6 border-b mb-6">
                <div className="text-sm text-gray-500 mb-1">
                  {property.listingType === 'sale' ? 'Sale Price' : 'Monthly Rent'}
                </div>
                <div className="text-4xl font-bold text-caribbean-600">
                  ${property.price.toLocaleString()}
                </div>
                {property.listingType === 'rent' && (
                  <div className="text-gray-500">/month</div>
                )}
              </div>

              {/* Contact Actions */}
              <div className="space-y-3 mb-6">
                <a
                  href={`https://wa.me/5548991308941?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Inquiry
                </a>
                <Link href="/contact" className="btn-secondary w-full justify-center">
                  Request Information
                </Link>
              </div>

              {/* Agent Info */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-caribbean-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    IM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Isla Margarita Immobilien</div>
                    <div className="text-sm text-gray-500">Licensed Agent</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">Available for consultations in English, Spanish, and German.</p>
                  <p className="text-caribbean-600 font-medium">Response within 24 hours</p>
                </div>
              </div>

              {/* Property ID */}
              <div className="mt-6 pt-6 border-t text-center">
                <span className="text-sm text-gray-400">Property ID: {property.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateListing',
            name: property.title,
            description: property.description,
            image: property.images,
            url: `https://islamargaritaimmobilien.de/properties/${property.slug}`,
            datePosted: new Date().toISOString(),
            offers: {
              '@type': 'Offer',
              price: property.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: property.location,
              addressRegion: 'Nueva Esparta',
              addressCountry: 'VE',
            },
            geo: property.coordinates
              ? {
                  '@type': 'GeoCoordinates',
                  latitude: property.coordinates.lat,
                  longitude: property.coordinates.lng,
                }
              : undefined,
            numberOfRooms: property.bedrooms,
            numberOfBathroomsTotal: property.bathrooms,
            floorSize: {
              '@type': 'QuantitativeValue',
              value: property.area,
              unitCode: 'MTK',
            },
          }),
        }}
      />
    </div>
  );
}
