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

          <div className="hidden md:flex space-x-2 lg:space-x-3">
            <Link href="/" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              Home
            </Link>
            <Link href="/basics" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              Basics
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              Services
            </Link>
            <Link href="/compare" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              Compare
            </Link>
            <Link href="/learning-paths" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              Learning
            </Link>
            <Link href="/glossary" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              Glossary
            </Link>
            <Link href="/devops" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              DevOps
            </Link>
            <Link href="/playground" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              Playground
            </Link>
            <Link href="/cheatsheets" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              Cheat Sheets
            </Link>
            <Link href="/interview" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm">
              Interview
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
            <Link href="/compare" className="block text-gray-700 hover:text-amber-500 font-medium">
              Compare Services
            </Link>
            <Link href="/learning-paths" className="block text-gray-700 hover:text-amber-500 font-medium">
              Learning Paths
            </Link>
            <Link href="/glossary" className="block text-gray-700 hover:text-amber-500 font-medium">
              Glossary
            </Link>
            <Link href="/devops" className="block text-gray-700 hover:text-amber-500 font-medium">
              DevOps
            </Link>
            <Link href="/playground" className="block text-gray-700 hover:text-amber-500 font-medium">
              Playground
            </Link>
            <Link href="/cheatsheets" className="block text-gray-700 hover:text-amber-500 font-medium">
              Cheat Sheets
            </Link>
            <Link href="/interview" className="block text-gray-700 hover:text-amber-500 font-medium">
              Interview
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
