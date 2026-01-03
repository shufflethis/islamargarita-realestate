import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Property } from '@/lib/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="card-property group" itemScope itemType="https://schema.org/RealEstateListing">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.images[0] || '/images/placeholder-property.jpg'}
          alt={property.title}
          fill
          className="object-cover property-image"
          itemProp="image"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.featured && (
            <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </span>
          )}
          {property.isNew && (
            <span className="bg-caribbean-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              New
            </span>
          )}
          <span className="bg-gray-900/70 text-white text-xs font-medium px-3 py-1 rounded-full capitalize">
            {property.listingType}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group/fav"
          aria-label="Add to favorites"
        >
          <Heart className="w-5 h-5 text-gray-400 group-hover/fav:text-red-500 transition-colors" />
        </button>

        {/* Price Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900/90 to-transparent p-4">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-2xl font-bold text-white" itemProp="price">
                ${property.price.toLocaleString()}
              </span>
              {property.listingType === 'rent' && (
                <span className="text-gray-300 text-sm">/month</span>
              )}
            </div>
            <span className="text-caribbean-300 text-sm font-medium capitalize">
              {property.propertyType}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <Link href={`/properties/${property.slug}`}>
          <h3
            className="text-lg font-bold text-gray-900 mb-2 hover:text-caribbean-600 transition-colors line-clamp-1"
            itemProp="name"
          >
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4" itemProp="address">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {property.bedrooms !== undefined && (
            <div className="flex items-center gap-1 text-gray-600">
              <Bed className="w-4 h-4" />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms !== undefined && (
            <div className="flex items-center gap-1 text-gray-600">
              <Bath className="w-4 h-4" />
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-gray-600">
            <Square className="w-4 h-4" />
            <span className="text-sm">{property.area} m²</span>
          </div>
        </div>

        <Link
          href={`/properties/${property.slug}`}
          className="mt-4 block w-full text-center py-2.5 bg-caribbean-50 text-caribbean-700 font-medium rounded-lg hover:bg-caribbean-100 transition-colors"
        >
          View Details
        </Link>
      </div>

      {/* JSON-LD for this property */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateListing',
            name: property.title,
            description: property.description,
            image: property.images[0],
            url: `https://islamargaritaimmobilien.de/properties/${property.slug}`,
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
    </article>
  );
}
