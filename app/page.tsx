import Link from 'next/link';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Home Inspection Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <ServiceCard
              title="Buyer's Home Inspection"
              description="Detailed inspection before you commit to your biggest investment."
            />
            <ServiceCard
              title="Pre-Listing Inspection"
              description="Identify issues early and sell with confidence."
            />
            <ServiceCard
              title="Condo / Co-op Inspection"
              description="Specialized inspections for NYC-style properties."
            />
            <ServiceCard
              title="New Construction / 11-Month Warranty Inspection"
              description="Ensure your newly built home is up to standard."
            />
          </div>
          <div className="text-center">
            <Link 
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Homeowners & Buyers Choose Visible Home Inspections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clear, Visual Reports</h3>
              <p className="text-gray-600">Screenshots, photos, and plain language—no confusing jargon.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local New York Expertise</h3>
              <p className="text-gray-600">Experience with NYC building types, code issues, and common defects.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround Time</h3>
              <p className="text-gray-600">Reports delivered within 24 hours in most cases.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer-Focused</h3>
              <p className="text-gray-600">We walk you through the findings and answer all your questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How Our Inspection Process Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <ProcessStep
              number={1}
              title="Schedule"
              description="You call or book online with your property address and preferred time."
            />
            <ProcessStep
              number={2}
              title="On-Site Inspection"
              description="We inspect major systems: roof, structure, plumbing, electrical, HVAC, interior & exterior."
            />
            <ProcessStep
              number={3}
              title="Report Delivery"
              description="You receive a detailed digital report with photos and clear descriptions."
            />
            <ProcessStep
              number={4}
              title="Follow-Up Call (Optional)"
              description="We review the report together so you can make confident decisions."
            />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Serving Homebuyers & Sellers Across New York
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We provide comprehensive home inspection services throughout New York City and surrounding areas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">Queens</div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">Brooklyn</div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">Manhattan</div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">Bronx</div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">Long Island</div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">Staten Island</div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">Westchester</div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">Nassau County</div>
          </div>
          <div className="text-center">
            <Link 
              href="/service-areas"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Full Service Area
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            See Exactly What You'll Get
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg mb-6">
              <p className="text-center text-gray-600 mb-4">Sample Report Preview</p>
              <div className="bg-white p-6 rounded border-2 border-dashed border-gray-300">
                <p className="text-sm text-gray-500 text-center">Report screenshot placeholder</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Photo documentation</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Prioritized issues (safety, major, minor)</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Easy-to-share PDF</span>
              </li>
            </ul>
            <div className="text-center">
              <Link 
                href="/sample-report"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Sample Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Visible Home Inspections made the entire process easy and stress-free. The report was detailed yet easy to understand."
              author="Mohammed Hossain"
              location="Queens, NY"
            />
            <TestimonialCard
              quote="Professional, thorough, and responsive. They found issues we never would have noticed. Highly recommend!"
              author="Eric Tonder"
              location="Brooklyn, NY"
            />
            <TestimonialCard
              quote="The inspector took time to explain everything and answered all our questions. Great service!"
              author="Ali Hossoain"
              location="Long Island, NY"
            />
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Book Your Home Inspection?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Call <a href="tel:+19175616554" className="font-semibold underline">(917) 561-6554</a> or request your inspection online today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+19175616554"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call Now
            </a>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Inspection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
