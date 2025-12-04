import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing - Visible Home Inspections LLC',
  description: "Transparent pricing for home inspection services in New York. View our inspection packages and what's included.",
};

export default function Pricing() {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Pricing & Packages
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Transparent pricing with no hidden fees. All inspections include a comprehensive digital report with photos, delivered within 24 hours.
        </p>

        {/* Base Inspection Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Standard Home Inspection</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">$400 - $550</span>
              <p className="text-sm text-gray-600 mt-1">For ~1,500-2,500 sq ft</p>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Complete visual inspection</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Photo-rich digital report</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">24-hour turnaround</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Follow-up call included</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Small Condo / Co-op</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">$250 - $350</span>
              <p className="text-sm text-gray-600 mt-1">≤ 1,000-1,500 sq ft</p>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Unit-specific inspection</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">All standard features</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">NYC building expertise</span>
              </li>
            </ul>
            <p className="text-xs text-blue-700 font-medium">Competitive pricing for NYC units</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pre-Listing Inspection</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">$300 - $450</span>
              <p className="text-sm text-gray-600 mt-1">House or condo</p>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Identify issues early</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Sell with confidence</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Avoid surprises</span>
              </li>
            </ul>
          </div>
        </div>

        {/* New Construction */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">New Construction / 11-Month Warranty Inspection</h2>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold text-gray-900">$350 - $500</span>
            <span className="text-gray-600">(depending on size & complexity)</span>
          </div>
          <p className="text-gray-700">
            Even new homes need inspections. We check for construction defects, code compliance, and ensure your newly built home meets quality standards. Perfect for catching issues before your warranty expires.
          </p>
        </div>

        {/* Add-On Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add-On Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">Radon Testing</h3>
                <span className="text-xl font-bold text-gray-900">$125 - $200</span>
              </div>
              <p className="text-sm text-gray-600">Add-on or standalone service</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">Mold Testing</h3>
                <span className="text-xl font-bold text-gray-900">$250 - $450</span>
              </div>
              <p className="text-sm text-gray-600">Visual & air samples (condos less, larger houses more)</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">Thermal Imaging</h3>
                <span className="text-xl font-bold text-gray-900">$200 - $400</span>
              </div>
              <p className="text-sm text-gray-600">Add-on or standalone service</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">Chimney / Fireplace Inspection</h3>
                <span className="text-xl font-bold text-gray-900">$150 - $250</span>
              </div>
              <p className="text-sm text-gray-600">Standalone or as add-on (plus cleaning if needed)</p>
            </div>
          </div>
        </div>

        {/* Inspection Packages */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Inspection Packages</h2>
          <p className="text-gray-700 mb-6">
            Bundle multiple services and save! Package discounts offer 10-15% off compared to individual service prices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Standard + Radon + Mold</h3>
              <p className="text-gray-600 mb-4">Perfect for buyers who want comprehensive testing</p>
              <p className="text-sm text-gray-700">Includes: Standard inspection + Radon testing + Mold testing</p>
              <p className="text-lg font-bold text-blue-600 mt-4">Save 10-15% when bundled</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Package</h3>
              <p className="text-gray-600 mb-4">Complete peace of mind with all services</p>
              <p className="text-sm text-gray-700">Includes: Standard inspection + Radon + Mold + Thermal Imaging + Chimney</p>
              <p className="text-lg font-bold text-blue-600 mt-4">Save 15% when bundled</p>
            </div>
          </div>
        </div>

        {/* Size-Based Pricing Note */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <p className="text-gray-900 font-semibold mb-2">Pricing Notes:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>For larger homes (greater than 3,000 sq ft) or multi-unit buildings, pricing increases by 20-40% depending on time and complexity</li>
            <li>All inspections include photo-rich reports, walk-through, 24-hour turnaround, and follow-up call</li>
            <li>Package discounts available when bundling multiple services</li>
            <li>Contact us for a customized quote tailored to your specific property</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to schedule your inspection or have questions about pricing?
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us for a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
