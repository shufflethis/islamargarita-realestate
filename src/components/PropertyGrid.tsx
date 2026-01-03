import { searchProperties } from '@/lib/properties';
import PropertyCard from './PropertyCard';
import { Building2 } from 'lucide-react';

interface PropertyGridProps {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  location?: string;
}

export default async function PropertyGrid({
  type,
  minPrice,
  maxPrice,
  bedrooms,
  location,
}: PropertyGridProps) {
  const properties = await searchProperties({
    type,
    minPrice,
    maxPrice,
    bedrooms,
    location,
  });

  if (properties.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
        <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">No Properties Found</h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your filters to see more results.
        </p>
        <a
          href="/properties"
          className="btn-primary"
        >
          Clear All Filters
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          <span className="font-bold text-gray-900">{properties.length}</span> properties found
        </p>
        <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
