import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sample Report - Visible Home Inspections LLC',
  description: 'View a sample home inspection report to see what you can expect from Visible Home Inspections LLC.',
};

export default function SampleReport() {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Sample Inspection Report
        </h1>
        <p className="text-center text-gray-600 mb-12">
          See exactly what you'll receive with your home inspection. Our reports are clear, visual, and easy to understand.
        </p>

        <div className="bg-gray-100 p-8 rounded-lg mb-8">
          <div className="bg-white p-8 rounded border-2 border-gray-300 mb-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Sample Report Preview</h2>
              <p className="text-gray-600">[Placeholder for report screenshot or PDF viewer]</p>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Property Information</h3>
                <p className="text-sm text-gray-600">Address, date, inspector name, etc.</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Executive Summary</h3>
                <p className="text-sm text-gray-600">Overview of key findings</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Detailed Findings</h3>
                <p className="text-sm text-gray-600">Photos, descriptions, and recommendations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What's Included in Your Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Photo Documentation
              </h3>
              <p className="text-gray-600">
                Every finding includes clear, high-quality photos to help you understand the issue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Prioritized Issues
              </h3>
              <p className="text-gray-600">
                Issues are categorized by priority: Safety, Major, and Minor concerns.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Plain Language
              </h3>
              <p className="text-gray-600">
                No confusing jargon—we explain everything in terms you can understand.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Easy to Share
              </h3>
              <p className="text-gray-600">
                Receive your report as a PDF that's easy to share with your realtor, attorney, or contractor.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-gray-900 font-semibold mb-2">Report Delivery</p>
          <p className="text-gray-700">
            Most reports are delivered within 24 hours of the inspection. You'll receive your 
            report via email as a PDF, and we're available for follow-up questions or a call 
            to review the findings together.
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to get your own detailed inspection report?
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Inspection
          </Link>
        </div>
      </div>
    </main>
  );
}

