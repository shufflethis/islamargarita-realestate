import { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Isla Margarita Real Estate Experts',
  description: 'Get in touch with our real estate experts on Isla Margarita. Free consultations, property tours, and investment advice. Contact us via WhatsApp for immediate response.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-caribbean-600 to-primary-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-caribbean-100 max-w-2xl">
            Ready to find your Caribbean paradise? Our team is here to help you every step of the way.
            Reach out for property inquiries, investment advice, or island information.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* WhatsApp - Primary */}
                <a
                  href="https://wa.me/5548991308941?text=Hello!%20I'm%20interested%20in%20Isla%20Margarita%20properties."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">WhatsApp (Fastest Response)</div>
                      <div className="text-green-600 font-medium">+55 48 99130-8941</div>
                      <div className="text-sm text-gray-500">Usually responds within minutes</div>
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-caribbean-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-caribbean-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Phone</div>
                    <a href="tel:+5548991308941" className="text-caribbean-600 hover:underline">
                      +55 48 99130-8941
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-caribbean-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-caribbean-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email</div>
                    <a href="mailto:info@islamargaritaimmobilien.de" className="text-caribbean-600 hover:underline">
                      info@islamargaritaimmobilien.de
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-caribbean-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-caribbean-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Location</div>
                    <div className="text-gray-600">
                      Isla Margarita, Nueva Esparta<br />
                      Venezuela
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-caribbean-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-caribbean-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Business Hours</div>
                    <div className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: By appointment only
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Venezuela Time (VET / UTC-4)
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-8 p-6 bg-caribbean-50 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-5 h-5 text-caribbean-600" />
                  <span className="font-bold text-gray-900">We Speak Your Language</span>
                </div>
                <p className="text-gray-600">
                  Our team provides consultations in <strong>English</strong>, <strong>Spanish</strong>,
                  and <strong>German</strong>. Don&apos;t hesitate to reach out in your preferred language.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-caribbean-500 focus:border-caribbean-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-caribbean-500 focus:border-caribbean-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-caribbean-500 focus:border-caribbean-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-caribbean-500 focus:border-caribbean-500"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I&apos;m Interested In
                    </label>
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-caribbean-500 focus:border-caribbean-500">
                      <option>Buying a Property</option>
                      <option>Investment Consultation</option>
                      <option>Property Management</option>
                      <option>General Information</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-caribbean-500 focus:border-caribbean-500">
                      <option>Under $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000 - $200,000</option>
                      <option>$200,000 - $500,000</option>
                      <option>Over $500,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-caribbean-500 focus:border-caribbean-500"
                      placeholder="Tell us about what you're looking for..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    For faster response, contact us on{' '}
                    <a
                      href="https://wa.me/5548991308941"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-medium hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Find Us on Isla Margarita
          </h2>
          <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-caribbean-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Isla Margarita, Venezuela</p>
              <p className="text-gray-500">The Pearl of the Caribbean</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
