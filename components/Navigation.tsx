'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AWS Coding Guide</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/basics" className="text-gray-700 hover:text-amber-500 transition-colors font-medium">
              AWS Basics
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-500 transition-colors font-medium">
              Services
            </Link>
            <Link href="/interview" className="text-gray-700 hover:text-amber-500 transition-colors font-medium">
              Interview Prep
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-amber-500 font-medium">
              Home
            </Link>
            <Link href="/basics" className="block text-gray-700 hover:text-amber-500 font-medium">
              AWS Basics
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-amber-500 font-medium">
              Services
            </Link>
            <Link href="/interview" className="block text-gray-700 hover:text-amber-500 font-medium">
              Interview Prep
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
