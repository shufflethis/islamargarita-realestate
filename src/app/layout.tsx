import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://islamargaritaimmobilien.de'),
  title: {
    default: 'Isla Margarita Real Estate | Premium Properties & Investment Opportunities in Venezuela',
    template: '%s | Isla Margarita Real Estate',
  },
  description: 'Discover premium real estate opportunities on Isla Margarita, Venezuela. Beachfront properties, investment opportunities, and expert guidance for international buyers. Your Caribbean paradise awaits.',
  keywords: [
    'Isla Margarita real estate',
    'Venezuela property',
    'Caribbean investment',
    'beachfront property Venezuela',
    'Margarita Island homes',
    'Venezuela real estate investment',
    'Caribbean real estate',
    'buy property Venezuela',
    'Porlamar real estate',
    'Pampatar properties',
  ],
  authors: [{ name: 'Isla Margarita Immobilien' }],
  creator: 'Isla Margarita Immobilien',
  publisher: 'Isla Margarita Immobilien',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://islamargaritaimmobilien.de',
    siteName: 'Isla Margarita Real Estate',
    title: 'Isla Margarita Real Estate | Your Caribbean Investment Partner',
    description: 'Premium real estate opportunities on Venezuela\'s most beautiful island. Expert guidance, verified listings, and investment support.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Isla Margarita Real Estate - Caribbean Paradise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isla Margarita Real Estate | Premium Caribbean Properties',
    description: 'Discover your dream property on Isla Margarita, Venezuela. Beachfront homes, investment opportunities, expert guidance.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://islamargaritaimmobilien.de',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Isla Margarita Immobilien',
              description: 'Premium real estate services on Isla Margarita, Venezuela',
              url: 'https://islamargaritaimmobilien.de',
              telephone: '+5548991308941',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Isla Margarita',
                addressRegion: 'Nueva Esparta',
                addressCountry: 'VE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 10.9577,
                longitude: -63.8697,
              },
              areaServed: {
                '@type': 'Place',
                name: 'Isla Margarita, Venezuela',
              },
              priceRange: '$$$',
              openingHours: 'Mo-Sa 09:00-18:00',
              sameAs: [
                'https://wa.me/5548991308941',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
