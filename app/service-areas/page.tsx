import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Areas - Visible Home Inspections LLC',
  description: 'We provide home inspection services throughout New York City, including Queens, Brooklyn, Manhattan, Bronx, Long Island, and surrounding areas.',
};

export default function ServiceAreas() {
  const areas = [
    { name: 'Queens', description: 'All neighborhoods including Astoria, Flushing, Jamaica, Forest Hills, and more' },
    { name: 'Brooklyn', description: 'Serving all Brooklyn neighborhoods from Williamsburg to Coney Island' },
    { name: 'Manhattan', description: 'Complete coverage of Manhattan from Upper East Side to Financial District' },
    { name: 'Bronx', description: 'All Bronx neighborhoods including Riverdale, Parkchester, and more' },
    { name: 'Staten Island', description: 'Full Staten Island coverage' },
    { name: 'Long Island', description: 'Nassau and Suffolk Counties' },
    { name: 'Westchester County', description: 'Westchester County communities' },
    { name: 'Nassau County', description: 'All Nassau County areas' },
  ];

  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Service Areas
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We proudly serve homebuyers and sellers throughout New York City and surrounding areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {areas.map((area) => (
            <div key={area.name} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h2>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Don't See Your Area Listed?
          </h2>
          <p className="text-gray-700 mb-4">
            We may still be able to help! We regularly expand our service areas and can often 
            accommodate inspections in nearby locations. Contact us to check availability for your area.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to schedule your home inspection?
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Your Inspection
          </Link>
        </div>
      </div>
    </main>
  );
}

