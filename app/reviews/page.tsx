import type { Metadata } from 'next';
import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials - Visible Home Inspections LLC',
  description: 'Read what our clients say about Visible Home Inspections LLC. Real testimonials from satisfied customers throughout New York.',
};

export default function Reviews() {
  const testimonials = [
    {
      quote: 'Visible Home Inspections made the entire process easy and stress-free. The report was detailed yet easy to understand. I felt confident making my decision thanks to their thorough work.',
      author: 'Mohammed Hossain',
      location: 'Queens, NY',
    },
    {
      quote: 'Professional, thorough, and responsive. They found issues we never would have noticed. The inspector took time to explain everything and answered all our questions. Highly recommend!',
      author: 'Eric Tonder',
      location: 'Brooklyn, NY',
    },
    {
      quote: 'The inspector was knowledgeable about NYC building types and caught several important issues. The report came quickly and was very clear. Great service!',
      author: 'Ali Hossoain',
      location: 'Manhattan, NY',
    },
    {
      quote: 'We needed a weekend inspection and they accommodated us. The report was comprehensive and helped us negotiate repairs. Very satisfied!',
      author: 'David K.',
      location: 'Long Island, NY',
    },
    {
      quote: 'As a first-time homebuyer, I had lots of questions. The inspector was patient and explained everything clearly. The follow-up call was especially helpful.',
      author: 'Emily T.',
      location: 'Bronx, NY',
    },
    {
      quote: 'Fast turnaround, clear communication, and a detailed report. Exactly what we needed. Would definitely use their services again.',
      author: 'Robert P.',
      location: 'Staten Island, NY',
    },
  ];

  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Client Reviews & Testimonials
        </h1>
        <p className="text-center text-gray-600 mb-12">
          See what our clients have to say about their experience with Visible Home Inspections LLC.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
            />
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Share Your Experience
          </h2>
          <p className="text-gray-700 mb-6">
            If you've worked with us, we'd love to hear about your experience! 
            Your feedback helps us improve and helps other homeowners make informed decisions.
          </p>
          <p className="text-gray-700 mb-6">
            You can also leave us a review on Google or other platforms.
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to experience our service for yourself?
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

