import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs - Visible Home Inspections LLC',
  description: 'Frequently asked questions about home inspections in New York. Get answers about the inspection process, what to expect, and more.',
};

export default function FAQ() {
  const faqs = [
    {
      question: 'What is included in a home inspection?',
      answer: 'A standard home inspection includes a visual examination of the property\'s major systems and components, including the roof, structure, plumbing, electrical, HVAC, interior, and exterior. We check for safety issues, major defects, and minor concerns, then provide a detailed report with photos and recommendations.',
    },
    {
      question: 'How long does a home inspection take?',
      answer: 'Most home inspections take 2-4 hours, depending on the size and age of the property. Larger homes or properties with multiple structures may take longer.',
    },
    {
      question: 'When will I receive my inspection report?',
      answer: 'We typically deliver inspection reports within 24 hours of the inspection. You\'ll receive your report via email as a PDF that\'s easy to share and review.',
    },
    {
      question: 'Do I need to be present during the inspection?',
      answer: 'While it\'s not required, we highly recommend being present for at least the final portion of the inspection. This allows us to walk you through our findings and answer any questions you may have.',
    },
    {
      question: 'What if the inspection reveals problems?',
      answer: 'Our goal is to help you make an informed decision. If we find issues, we\'ll explain their significance and provide recommendations. You can then discuss options with your realtor, negotiate repairs with the seller, or decide if the property is right for you.',
    },
    {
      question: 'Do you inspect condos and co-ops differently?',
      answer: 'Yes. Condo and co-op inspections focus on the individual unit and its systems, rather than the entire building. We inspect what you\'re actually purchasing, including the unit\'s electrical, plumbing, HVAC, and interior condition.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes. Visible Home Inspections LLC is a licensed New York home inspection company, fully insured and bonded. We maintain all required certifications and stay current with continuing education.',
    },
    {
      question: 'Can you do same-day or weekend inspections?',
      answer: 'We offer flexible scheduling including evenings and weekends to accommodate your timeline. Contact us to discuss availability for your preferred date and time.',
    },
    {
      question: 'What should I do to prepare for the inspection?',
      answer: 'Ensure all areas of the home are accessible, including the attic, basement, and utility areas. Clear any obstacles that might block access to electrical panels, water heaters, or HVAC systems. If you\'re the seller, make sure utilities are turned on.',
    },
    {
      question: 'Do you offer additional services like radon or mold testing?',
      answer: 'Yes, we can arrange for additional testing services including radon testing, mold testing, and thermal imaging. Contact us to discuss which additional services might be beneficial for your property.',
    },
  ];

  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Common questions about home inspections and our services.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 mb-6">
            We're here to help! Contact us and we'll be happy to answer any questions 
            about home inspections or our services.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

