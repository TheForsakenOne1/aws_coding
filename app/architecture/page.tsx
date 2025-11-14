'use client';

import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import { architecturePatterns, architectureCategories } from '@/data/architecturePatterns';

export default function ArchitecturePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPatterns = selectedCategory === 'All'
    ? architecturePatterns
    : architecturePatterns.filter(pattern => pattern.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Architecture Patterns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Learn proven architecture patterns for building scalable, reliable, and secure applications on AWS.
          </p>
        </div>
      </div>

      <Section
        title="Filter by Category"
        description="Explore patterns by use case"
      >
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {architectureCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {filteredPatterns.map(pattern => (
            <div key={pattern.id} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="p-8 bg-gradient-to-r from-blue-50 to-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-5xl">{pattern.icon}</div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
                      {pattern.category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {pattern.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{pattern.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">🏗️ Architecture Diagram</h4>
                  <p className="text-gray-700 font-mono text-sm">{pattern.diagram}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🎯 Use Cases</h4>
                    <ul className="space-y-2">
                      {pattern.useCases.map((useCase, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🔧 Key Components</h4>
                    <ul className="space-y-2">
                      {pattern.components.map((component, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-green-900 mb-3">✅ Benefits</h4>
                    <ul className="space-y-2">
                      {pattern.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-green-800 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-amber-900 mb-3">⚠️ Considerations</h4>
                    <ul className="space-y-2">
                      {pattern.considerations.map((consideration, index) => (
                        <li key={index} className="text-sm text-amber-800 flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">💡 Example Implementation</h4>
                  <p className="text-blue-800">{pattern.exampleImplementation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Related Resources"
        description="Learn more about AWS architecture"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            href="/best-practices"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Best Practices
            </h3>
            <p className="text-gray-600">
              Learn best practices for each AWS service
            </p>
          </Link>

          <Link
            href="/projects"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Example Projects
            </h3>
            <p className="text-gray-600">
              Build projects using these patterns
            </p>
          </Link>

          <Link
            href="/services"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              AWS Services
            </h3>
            <p className="text-gray-600">
              Deep dive into individual services
            </p>
          </Link>
        </div>
      </Section>
    </div>
  );
}
