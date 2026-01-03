'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

interface PropertyFiltersProps {
  currentType?: string;
  currentMinPrice?: number;
  currentMaxPrice?: number;
  currentBedrooms?: number;
  currentLocation?: string;
}

const propertyTypes = [
  { value: '', label: 'All Types' },
  { value: 'apartment', label: 'Apartments' },
  { value: 'villa', label: 'Villas' },
  { value: 'house', label: 'Houses' },
  { value: 'land', label: 'Land & Lots' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'beachfront', label: 'Beachfront' },
];

const priceRanges = [
  { min: 0, max: 50000, label: 'Under $50,000' },
  { min: 50000, max: 100000, label: '$50,000 - $100,000' },
  { min: 100000, max: 200000, label: '$100,000 - $200,000' },
  { min: 200000, max: 500000, label: '$200,000 - $500,000' },
  { min: 500000, max: 0, label: 'Over $500,000' },
];

const locations = [
  'Porlamar',
  'Pampatar',
  'Playa El Agua',
  'Juan Griego',
  'El Yaque',
  'La Asuncion',
  'Guacuco',
];

export default function PropertyFilters({
  currentType,
  currentMinPrice,
  currentMaxPrice,
  currentBedrooms,
  currentLocation,
}: PropertyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [type, setType] = useState(currentType || '');
  const [minPrice, setMinPrice] = useState(currentMinPrice?.toString() || '');
  const [maxPrice, setMaxPrice] = useState(currentMaxPrice?.toString() || '');
  const [bedrooms, setBedrooms] = useState(currentBedrooms?.toString() || '');
  const [location, setLocation] = useState(currentLocation || '');

  const createQueryString = useCallback(
    (params: Record<string, string>) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          newSearchParams.set(key, value);
        } else {
          newSearchParams.delete(key);
        }
      });

      return newSearchParams.toString();
    },
    [searchParams]
  );

  const applyFilters = () => {
    const queryString = createQueryString({
      type,
      minPrice,
      maxPrice,
      bedrooms,
      location,
    });
    router.push(`/properties${queryString ? `?${queryString}` : ''}`);
  };

  const clearFilters = () => {
    setType('');
    setMinPrice('');
    setMaxPrice('');
    setBedrooms('');
    setLocation('');
    router.push('/properties');
  };

  return (
    <div className="space-y-6">
      {/* Property Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-caribbean-500 focus:border-caribbean-500"
        >
          {propertyTypes.map((pt) => (
            <option key={pt.value} value={pt.value}>
              {pt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-caribbean-500"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-caribbean-500"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => {
                setMinPrice(range.min.toString());
                setMaxPrice(range.max ? range.max.toString() : '');
              }}
              className="text-xs bg-gray-100 hover:bg-caribbean-100 text-gray-600 hover:text-caribbean-700 px-2 py-1 rounded transition-colors"
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bedrooms
        </label>
        <div className="flex gap-2">
          {['Any', '1+', '2+', '3+', '4+'].map((option, index) => (
            <button
              key={option}
              onClick={() => setBedrooms(index === 0 ? '' : index.toString())}
              className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                (index === 0 && !bedrooms) || bedrooms === index.toString()
                  ? 'bg-caribbean-600 text-white border-caribbean-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-caribbean-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-caribbean-500 focus:border-caribbean-500"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-4">
        <button
          onClick={applyFilters}
          className="w-full btn-primary"
        >
          Apply Filters
        </button>
        <button
          onClick={clearFilters}
          className="w-full py-2.5 text-gray-600 hover:text-gray-900 text-sm font-medium"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
