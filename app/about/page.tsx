import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Visible Home Inspections LLC',
  description: 'Learn about Visible Home Inspections LLC and our experienced New York home inspector.',
};

export default function About() {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Visible Home Inspections LLC</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Visible Home Inspections LLC is a New York–registered company dedicated to providing 
            thorough, reliable, and easy-to-understand home inspection services throughout New York 
            City and surrounding areas.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to help homebuyers, sellers, and investors make informed decisions by 
            providing clear, visual, and comprehensive inspection reports. We believe that every 
            client deserves to understand exactly what they're buying or selling.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Inspector</h2>
          <p className="text-gray-700 mb-6">
            [Your bio here - Include your background, certifications, years of experience, 
            and what makes you qualified to inspect homes in New York.]
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Credentials & Certifications</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Licensed New York Home Inspector</li>
            <li>InterNACHI Certified Inspector</li>
            <li>Fully Insured & Bonded</li>
            <li>[Add any other certifications or memberships]</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose Us</h2>
          <p className="text-gray-700 mb-4">
            We understand that buying or selling a home is one of the biggest decisions you'll make. 
            That's why we:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Provide detailed, photo-rich reports within 24 hours</li>
            <li>Use plain language—no confusing jargon</li>
            <li>Offer flexible scheduling, including evenings and weekends</li>
            <li>Take time to answer your questions and explain our findings</li>
            <li>Have extensive knowledge of New York building types and common issues</li>
          </ul>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-900 font-semibold mb-2">Ready to schedule your inspection?</p>
            <a 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 font-medium underline"
            >
              Contact us today →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

