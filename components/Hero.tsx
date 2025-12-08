'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/imagePath';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reliable Home Inspections in New York You Can See & Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Licensed, insured, and detail-oriented inspections for buyers, sellers, and investors across New York City and surrounding areas.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Digital photo reports within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Licensed & insured New York home inspector</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">Evening & weekend appointments available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors text-center"
              >
                Schedule Your Inspection
              </Link>
              <Link 
                href="/sample-report"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors text-center"
              >
                View Sample Report
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center items-center order-first lg:order-last">
            <Image
              src={getImagePath("/images/visible-Home-Inspection-Image.png")}
              alt="Home Inspection Professional"
              width={600}
              height={600}
              className="object-contain rounded-lg w-full h-auto max-w-md lg:max-w-lg"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

