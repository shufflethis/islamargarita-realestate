import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp, DollarSign, Shield, Building2, Calculator,
  FileText, ArrowRight, CheckCircle, BarChart3, Globe, Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investment Guide | Real Estate Opportunities on Isla Margarita',
  description: 'Discover exceptional real estate investment opportunities on Isla Margarita, Venezuela. Property prices at historic lows with strong growth potential. Complete guide for international investors.',
  openGraph: {
    title: 'Invest in Isla Margarita Real Estate | High ROI Caribbean Properties',
    description: 'Property prices 70% below peak. Learn about the investment opportunity of a lifetime in Venezuela\'s Caribbean paradise.',
  },
};

const investmentReasons = [
  {
    icon: TrendingUp,
    title: 'Historic Low Prices',
    description: 'Property prices are currently 70% below their 2014 peak, creating unprecedented buying opportunities for savvy investors.',
  },
  {
    icon: DollarSign,
    title: 'Strong USD Advantage',
    description: 'As a dollar-based investor, your purchasing power is maximized. Properties that once cost $300K now sell for under $100K.',
  },
  {
    icon: BarChart3,
    title: 'Growing Tourism',
    description: 'Tourism is recovering strongly, with international arrivals increasing yearly. Vacation rentals see high demand.',
  },
  {
    icon: Lock,
    title: 'No Foreign Ownership Restrictions',
    description: 'International buyers can own property with the same rights as Venezuelan citizens. No special permits required.',
  },
  {
    icon: Globe,
    title: 'Free Trade Zone Benefits',
    description: 'Isla Margarita\'s duty-free status attracts shoppers from across South America, boosting commercial property values.',
  },
  {
    icon: Shield,
    title: 'Secure Title System',
    description: 'Clear property titles and established legal framework. We handle all due diligence to ensure secure transactions.',
  },
];

const investmentTypes = [
  {
    title: 'Vacation Rentals',
    roi: '8-15%',
    description: 'High-demand tourist area with consistent rental income potential. Platforms like Airbnb and VRBO operate on the island.',
    minInvestment: '$45,000',
  },
  {
    title: 'Buy & Hold',
    roi: '15-25%',
    description: 'Purchase at current lows and benefit from appreciation as the market recovers. Long-term wealth building strategy.',
    minInvestment: '$35,000',
  },
  {
    title: 'Commercial Property',
    roi: '10-20%',
    description: 'Retail and hospitality spaces in high-traffic areas. Benefit from the duty-free shopping tourism.',
    minInvestment: '$80,000',
  },
  {
    title: 'Land Development',
    roi: '20-40%',
    description: 'Purchase land at today\'s prices and develop or hold for future appreciation. Multiple zoning options available.',
    minInvestment: '$25,000',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'Free consultation to understand your investment goals, budget, and preferences. We provide market insights and property recommendations.',
  },
  {
    step: '02',
    title: 'Property Selection',
    description: 'Virtual or in-person property tours. We present vetted options matching your criteria with complete financial analysis.',
  },
  {
    step: '03',
    title: 'Due Diligence',
    description: 'Comprehensive title search, property inspection, and legal review. We ensure every property is clear and properly documented.',
  },
  {
    step: '04',
    title: 'Transaction',
    description: 'Secure escrow service, contract preparation, and notarization. We guide you through every step of the purchase process.',
  },
  {
    step: '05',
    title: 'Post-Purchase Support',
    description: 'Property management services, rental setup assistance, and ongoing support for your investment.',
  },
];

export default function InvestmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80"
            alt="Real Estate Investment"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-caribbean-400 mb-4">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Investment Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                The Investment Opportunity of a Decade
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Property prices on Isla Margarita are at historic lows. Smart investors
                are positioning themselves for significant returns as the market recovers.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5548991308941?text=Hello!%20I'm%20interested%20in%20investment%20opportunities%20on%20Isla%20Margarita.%20Can%20we%20schedule%20a%20consultation?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  Free Investment Consultation
                </a>
                <Link href="/properties" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Browse Properties
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-caribbean-400">70%</div>
                <div className="text-gray-300">Below 2014 Prices</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-caribbean-400">$35K</div>
                <div className="text-gray-300">Entry Level</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-caribbean-400">15-25%</div>
                <div className="text-gray-300">Avg. Annual ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-caribbean-400">0%</div>
                <div className="text-gray-300">Foreign Owner Tax</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Why Invest in Isla Margarita Now?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A unique combination of factors makes this the ideal time for international investors
              to enter the Venezuelan real estate market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentReasons.map((reason) => (
              <div key={reason.title} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <reason.icon className="w-12 h-12 text-caribbean-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Investment Strategies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different approaches to match your investment goals and timeline.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {investmentTypes.map((type) => (
              <div key={type.title} className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                  <div className="bg-caribbean-100 text-caribbean-700 font-bold px-4 py-2 rounded-full">
                    {type.roi} ROI
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-500">Minimum Investment</span>
                    <div className="text-xl font-bold text-gray-900">{type.minInvestment}</div>
                  </div>
                  <Link
                    href="/properties"
                    className="inline-flex items-center gap-2 text-caribbean-600 font-medium"
                  >
                    View Options <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our streamlined process makes investing in Isla Margarita simple and secure.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-caribbean-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-caribbean-600/30 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Investment Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deep dive into specific aspects of investing in Isla Margarita real estate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/investment/market" className="card p-6 group">
              <BarChart3 className="w-12 h-12 text-caribbean-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Market Analysis</h3>
              <p className="text-gray-600 mb-4">
                Detailed market data, price trends, and growth projections for different areas.
              </p>
              <span className="inline-flex items-center gap-2 text-caribbean-600 font-medium group-hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/investment/buying-process" className="card p-6 group">
              <FileText className="w-12 h-12 text-caribbean-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buying Process</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guide to purchasing property as an international buyer.
              </p>
              <span className="inline-flex items-center gap-2 text-caribbean-600 font-medium group-hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/investment/legal" className="card p-6 group">
              <Shield className="w-12 h-12 text-caribbean-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Guide</h3>
              <p className="text-gray-600 mb-4">
                Everything you need to know about property laws, taxes, and regulations.
              </p>
              <span className="inline-flex items-center gap-2 text-caribbean-600 font-medium group-hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-caribbean-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-caribbean-100 mb-6">
                Schedule a free consultation with our investment team. We&apos;ll discuss your goals,
                answer your questions, and show you properties that match your criteria.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'No obligation consultation',
                  'Personalized property recommendations',
                  'Complete market analysis',
                  'Due diligence support',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-caribbean-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5548991308941?text=Hello!%20I'm%20interested%20in%20scheduling%20an%20investment%20consultation%20for%20Isla%20Margarita%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Schedule Free Consultation
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick ROI Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-caribbean-200 mb-1">Property Price (USD)</label>
                  <input
                    type="text"
                    defaultValue="$100,000"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm text-caribbean-200 mb-1">Expected Annual Rental Income</label>
                  <input
                    type="text"
                    defaultValue="$12,000"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm text-caribbean-200 mb-1">Expected 5-Year Appreciation</label>
                  <input
                    type="text"
                    defaultValue="50-100%"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50"
                    disabled
                  />
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-caribbean-200">Gross Rental Yield</span>
                    <span className="text-2xl font-bold">12%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-caribbean-200 mt-4">
                * For personalized calculations, contact us for a detailed investment analysis.
              </p>
            </div>
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
            headline: 'Investment Guide: Real Estate Opportunities on Isla Margarita',
            description: 'Complete guide to investing in Isla Margarita real estate. Property prices at historic lows with strong growth potential.',
            author: {
              '@type': 'Organization',
              name: 'Isla Margarita Immobilien',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Isla Margarita Immobilien',
            },
          }),
        }}
      />
    </div>
  );
}
