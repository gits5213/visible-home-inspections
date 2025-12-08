'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/imagePath';

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Serving New York City and surrounding areas</span>
          <div className="flex items-center gap-4">
            <a href="tel:+19175616554" className="flex items-center gap-1 hover:text-blue-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (917) 561-6554
            </a>
            <span>Call / Text for Same-Day Response</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={getImagePath("/images/visibleHomeInspectionLLCLogo.png")}
                alt="Visible Home Inspections LLC"
                width={200}
                height={60}
                className="h-10 w-auto"
                priority
              />
              <span className="text-xl md:text-2xl font-bold text-gray-900 hidden sm:block">
                Visible Home Inspections LLC
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">
                Pricing
              </Link>
              <Link href="/sample-report" className="text-gray-700 hover:text-blue-600 font-medium">
                Sample Report
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium">
                FAQs
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                Book an Inspection
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

