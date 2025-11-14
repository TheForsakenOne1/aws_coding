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

          <div className="hidden md:flex space-x-1 lg:space-x-2">
            <Link href="/" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Home
            </Link>
            <Link href="/basics" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Basics
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Services
            </Link>
            <Link href="/tutorials" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Tutorials
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Projects
            </Link>
            <Link href="/certifications" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Certifications
            </Link>
            <Link href="/best-practices" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Best Practices
            </Link>
            <Link href="/architecture" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Architecture
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Blog
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-amber-500 transition-colors font-medium text-xs lg:text-sm px-2 py-1">
              Resources
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
        <div className="md:hidden bg-white border-t border-gray-200 max-h-96 overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Home
            </Link>
            <Link href="/basics" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              AWS Basics
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Services
            </Link>
            <Link href="/tutorials" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Tutorials
            </Link>
            <Link href="/projects" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Projects
            </Link>
            <Link href="/certifications" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Certifications
            </Link>
            <Link href="/best-practices" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Best Practices
            </Link>
            <Link href="/architecture" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Architecture
            </Link>
            <Link href="/devops" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              DevOps
            </Link>
            <Link href="/playground" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Playground
            </Link>
            <Link href="/cheatsheets" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Cheat Sheets
            </Link>
            <Link href="/interview" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Interview
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Blog
            </Link>
            <Link href="/resources" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              Resources
            </Link>
            <Link href="/faq" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              FAQ
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-amber-500 font-medium py-1">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
