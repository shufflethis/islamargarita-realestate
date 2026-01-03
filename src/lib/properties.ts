export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  location: string;
  propertyType: 'apartment' | 'villa' | 'house' | 'land' | 'commercial' | 'beachfront';
  listingType: 'sale' | 'rent';
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  images: string[];
  featured: boolean;
  isNew: boolean;
  amenities: string[];
  yearBuilt?: number;
  parkingSpaces?: number;
  source?: string;
  sourceUrl?: string;
  scrapedAt?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Sample properties data - will be replaced/augmented by scraped data
const sampleProperties: Property[] = [
  {
    id: '1',
    slug: 'luxury-beachfront-villa-playa-el-agua',
    title: 'Luxury Beachfront Villa at Playa El Agua',
    description: 'Stunning 4-bedroom beachfront villa with direct beach access, infinity pool, and panoramic Caribbean views. Modern architecture meets tropical living. Perfect for vacation rental investment or permanent residence. Features include marble floors, gourmet kitchen, home theater, and lush tropical gardens.',
    price: 285000,
    location: 'Playa El Agua, Isla Margarita',
    propertyType: 'villa',
    listingType: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    isNew: true,
    amenities: ['Pool', 'Beach Access', 'Garden', 'Garage', 'Air Conditioning', 'Security System'],
    yearBuilt: 2019,
    parkingSpaces: 2,
    coordinates: { lat: 11.1453, lng: -63.8547 },
  },
  {
    id: '2',
    slug: 'modern-apartment-porlamar-center',
    title: 'Modern 2BR Apartment in Porlamar Center',
    description: 'Beautifully renovated apartment in the heart of Porlamar. Walking distance to shopping, restaurants, and beaches. Ideal for vacation or rental income. Recently updated with new appliances, modern bathroom, and air conditioning throughout.',
    price: 65000,
    location: 'Porlamar, Isla Margarita',
    propertyType: 'apartment',
    listingType: 'sale',
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    isNew: false,
    amenities: ['Air Conditioning', 'Balcony', 'Security', 'Parking'],
    yearBuilt: 2015,
    parkingSpaces: 1,
    coordinates: { lat: 10.9577, lng: -63.8697 },
  },
  {
    id: '3',
    slug: 'oceanview-condo-pampatar',
    title: 'Oceanview Condo with Pool in Pampatar',
    description: 'Spectacular 3-bedroom condo with stunning ocean views from every room. Resort-style amenities including pool, gym, and 24/7 security. Located in prestigious Pampatar, close to historic sites and the famous Pampatar Bay.',
    price: 125000,
    location: 'Pampatar, Isla Margarita',
    propertyType: 'apartment',
    listingType: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    isNew: true,
    amenities: ['Pool', 'Gym', 'Ocean View', 'Security', 'Elevator', 'Balcony'],
    yearBuilt: 2020,
    parkingSpaces: 2,
    coordinates: { lat: 10.9987, lng: -63.7875 },
  },
  {
    id: '4',
    slug: 'investment-land-juangriego',
    title: 'Prime Development Land in Juan Griego',
    description: 'Exceptional 5000m² land parcel with sea views, perfect for hotel development or luxury residential project. All utilities available. Located in the charming fishing village of Juan Griego, famous for its stunning sunsets.',
    price: 180000,
    location: 'Juan Griego, Isla Margarita',
    propertyType: 'land',
    listingType: 'sale',
    area: 5000,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    isNew: false,
    amenities: ['Sea View', 'Utilities Available', 'Road Access', 'Flat Terrain'],
    coordinates: { lat: 11.0833, lng: -63.9667 },
  },
  {
    id: '5',
    slug: 'cozy-beach-house-playa-guacuco',
    title: 'Cozy Beach House near Playa Guacuco',
    description: 'Charming 3-bedroom beach house just 200m from Playa Guacuco. Perfect vacation home with tropical garden, outdoor BBQ area, and covered terrace. Fully furnished and ready to enjoy or rent.',
    price: 95000,
    location: 'Guacuco, Isla Margarita',
    propertyType: 'house',
    listingType: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    isNew: true,
    amenities: ['Garden', 'BBQ Area', 'Terrace', 'Furnished', 'Air Conditioning'],
    yearBuilt: 2010,
    parkingSpaces: 2,
    coordinates: { lat: 11.0567, lng: -63.8234 },
  },
  {
    id: '6',
    slug: 'commercial-space-sambil-porlamar',
    title: 'Prime Commercial Space near Sambil Mall',
    description: 'High-traffic commercial space perfect for retail, restaurant, or office use. Located on main avenue near Sambil shopping center. Excellent visibility and parking availability.',
    price: 150000,
    location: 'Porlamar, Isla Margarita',
    propertyType: 'commercial',
    listingType: 'sale',
    area: 200,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    ],
    featured: false,
    isNew: false,
    amenities: ['High Traffic', 'Parking', 'Street Front', 'Air Conditioning'],
    yearBuilt: 2012,
    coordinates: { lat: 10.9614, lng: -63.8583 },
  },
  {
    id: '7',
    slug: 'penthouse-marina-pampatar',
    title: 'Stunning Penthouse with Marina Views',
    description: 'Exceptional penthouse overlooking Pampatar Marina. 4 bedrooms, private rooftop terrace with jacuzzi, high-end finishes throughout. Includes 2 parking spaces and storage.',
    price: 320000,
    location: 'Pampatar Marina, Isla Margarita',
    propertyType: 'apartment',
    listingType: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    isNew: true,
    amenities: ['Marina View', 'Rooftop Terrace', 'Jacuzzi', 'Premium Finishes', 'Storage', 'Gym Access'],
    yearBuilt: 2021,
    parkingSpaces: 2,
    coordinates: { lat: 11.0023, lng: -63.7912 },
  },
  {
    id: '8',
    slug: 'vacation-rental-apartment-el-yaque',
    title: 'Income-Producing Apartment in El Yaque',
    description: 'Profitable vacation rental near famous El Yaque windsurfing beach. Fully furnished studio with kitchenette. Strong rental history with kitesurf and windsurf tourists.',
    price: 48000,
    location: 'El Yaque, Isla Margarita',
    propertyType: 'apartment',
    listingType: 'sale',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    featured: false,
    isNew: false,
    amenities: ['Furnished', 'Air Conditioning', 'Wi-Fi', 'Near Beach'],
    yearBuilt: 2008,
    coordinates: { lat: 10.9234, lng: -63.9876 },
  },
];

// In-memory storage for scraped properties
let scrapedProperties: Property[] = [];

export function addScrapedProperties(properties: Property[]) {
  scrapedProperties = [...scrapedProperties, ...properties];
}

export function clearScrapedProperties() {
  scrapedProperties = [];
}

export function getAllProperties(): Property[] {
  return [...sampleProperties, ...scrapedProperties];
}

export async function getFeaturedProperties(limit: number = 6): Promise<Property[]> {
  const allProperties = getAllProperties();
  return allProperties.filter(p => p.featured).slice(0, limit);
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  const allProperties = getAllProperties();
  return allProperties.find(p => p.slug === slug) || null;
}

export async function getPropertiesByType(type: string): Promise<Property[]> {
  const allProperties = getAllProperties();
  return allProperties.filter(p => p.propertyType === type);
}

export async function searchProperties(filters: {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  location?: string;
}): Promise<Property[]> {
  let results = getAllProperties();

  if (filters.type) {
    results = results.filter(p => p.propertyType === filters.type);
  }
  if (filters.minPrice) {
    results = results.filter(p => p.price >= filters.minPrice!);
  }
  if (filters.maxPrice) {
    results = results.filter(p => p.price <= filters.maxPrice!);
  }
  if (filters.bedrooms) {
    results = results.filter(p => p.bedrooms && p.bedrooms >= filters.bedrooms!);
  }
  if (filters.location) {
    results = results.filter(p =>
      p.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  return results;
}

export async function getLatestProperties(limit: number = 10): Promise<Property[]> {
  const allProperties = getAllProperties();
  return allProperties.filter(p => p.isNew).slice(0, limit);
}
