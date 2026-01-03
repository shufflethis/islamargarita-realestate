import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  properties: [
    { name: 'All Properties', href: '/properties' },
    { name: 'Beachfront Homes', href: '/properties?type=beachfront' },
    { name: 'Apartments', href: '/properties?type=apartment' },
    { name: 'Villas', href: '/properties?type=villa' },
    { name: 'Land & Lots', href: '/properties?type=land' },
    { name: 'Commercial', href: '/properties?type=commercial' },
  ],
  guide: [
    { name: 'About the Island', href: '/guide' },
    { name: 'Best Beaches', href: '/guide/beaches' },
    { name: 'Cities & Towns', href: '/guide/cities' },
    { name: 'Living Guide', href: '/guide/living' },
    { name: 'Transportation', href: '/guide/travel' },
    { name: 'Climate & Weather', href: '/guide/climate' },
  ],
  investment: [
    { name: 'Why Invest', href: '/investment' },
    { name: 'Market Analysis', href: '/investment/market' },
    { name: 'Buying Process', href: '/investment/buying-process' },
    { name: 'Legal Information', href: '/investment/legal' },
    { name: 'Financing Options', href: '/investment/financing' },
    { name: 'ROI Calculator', href: '/investment/calculator' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Blog', href: '/blog' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-caribbean-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">IM</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl">Isla Margarita</span>
                <span className="block text-sm text-caribbean-400 font-medium -mt-1">Real Estate</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your trusted partner for premium real estate on Venezuela&apos;s Caribbean paradise.
              Expert guidance for international investors and homebuyers.
            </p>
            <div className="space-y-3">
              <a href="tel:+5548991308941" className="flex items-center gap-3 text-gray-400 hover:text-caribbean-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+55 48 99130-8941</span>
              </a>
              <a href="mailto:info@islamargaritaimmobilien.de" className="flex items-center gap-3 text-gray-400 hover:text-caribbean-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@islamargaritaimmobilien.de</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Isla Margarita, Nueva Esparta, Venezuela</span>
              </div>
            </div>
          </div>

          {/* Properties Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Properties</h3>
            <ul className="space-y-2">
              {footerLinks.properties.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-caribbean-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Island Guide Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Island Guide</h3>
            <ul className="space-y-2">
              {footerLinks.guide.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-caribbean-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Investment</h3>
            <ul className="space-y-2">
              {footerLinks.investment.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-caribbean-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-caribbean-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Isla Margarita Immobilien. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-caribbean-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-caribbean-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-caribbean-400 transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5548991308941"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
