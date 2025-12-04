import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Home Inspection Services - Visible Home Inspections LLC',
  description: 'Comprehensive home inspection services including buyer inspections, pre-listing inspections, condo/co-op inspections, and new construction inspections.',
};

export default function Services() {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Home Inspection Services
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer comprehensive inspection services for buyers, sellers, and investors throughout New York.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <ServiceCard
            title="Buyer's Home Inspection"
            description="A thorough inspection of the property before you finalize your purchase. We examine all major systems including roof, structure, plumbing, electrical, HVAC, interior, and exterior. Our detailed report helps you understand the property's condition and make informed decisions."
          />
          <ServiceCard
            title="Pre-Listing Inspection"
            description="Identify potential issues before listing your home. This proactive approach helps you address problems early, set realistic expectations, and sell with confidence. Avoid surprises during the buyer's inspection."
          />
          <ServiceCard
            title="Condo / Co-op Inspection"
            description="Specialized inspections for New York City condominiums and cooperatives. We understand the unique aspects of these property types, including common areas, building systems, and individual unit inspections."
          />
          <ServiceCard
            title="New Construction / 11-Month Warranty Inspection"
            description="Even new homes need inspections. We check for construction defects, code compliance, and ensure your newly built home meets quality standards. Perfect for catching issues before your warranty expires."
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We Inspect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Exterior</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Roof and gutters</li>
                <li>Siding and trim</li>
                <li>Foundation and structure</li>
                <li>Windows and doors</li>
                <li>Driveway and walkways</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Interior</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Walls, ceilings, and floors</li>
                <li>Windows and doors</li>
                <li>Stairs and railings</li>
                <li>Attic and insulation</li>
                <li>Basement and crawl spaces</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Systems</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Electrical system</li>
                <li>Plumbing system</li>
                <li>HVAC (heating and cooling)</li>
                <li>Water heater</li>
                <li>Appliances</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Smoke and carbon monoxide detectors</li>
                <li>Electrical safety hazards</li>
                <li>Structural concerns</li>
                <li>Fire safety</li>
                <li>Environmental concerns</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-gray-900 font-semibold mb-4">Ready to schedule your inspection?</p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

