'use client';

import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import CodeBlock from '@/components/CodeBlock';
import { bestPractices, practiceCategories } from '@/data/bestPractices';

export default function BestPracticesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPractices = selectedCategory === 'All'
    ? bestPractices
    : bestPractices.filter(practice => practice.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Best Practices
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Follow industry-proven best practices to build secure, scalable, and cost-effective AWS applications.
          </p>
        </div>
      </div>

      <Section
        title="Filter by Category"
        description="Choose the area you want to optimize"
      >
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {practiceCategories.map(category => (
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
          {filteredPractices.map(practice => (
            <div key={practice.id} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="p-8 bg-gradient-to-r from-amber-50 to-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-5xl">{practice.icon}</div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-2">
                      {practice.category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{practice.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">✅ Best Practices</h4>
                <div className="space-y-6 mb-8">
                  {practice.practices.map((item, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h5 className="text-xl font-bold text-green-900 mb-2">{item.title}</h5>
                      <p className="text-green-800 mb-4">{item.description}</p>
                      <div>
                        <p className="font-semibold text-green-900 mb-2">Benefits:</p>
                        <ul className="space-y-1">
                          {item.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="text-sm text-green-700 flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {practice.antiPatterns.length > 0 && (
                  <>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">❌ Anti-Patterns to Avoid</h4>
                    <div className="space-y-6 mb-8">
                      {practice.antiPatterns.map((antiPattern, index) => (
                        <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h5 className="text-xl font-bold text-red-900 mb-2">{antiPattern.title}</h5>
                          <p className="text-red-800 mb-4">{antiPattern.description}</p>
                          <div className="mb-4">
                            <p className="font-semibold text-red-900 mb-2">Consequences:</p>
                            <ul className="space-y-1">
                              {antiPattern.consequences.map((consequence, cIndex) => (
                                <li key={cIndex} className="text-sm text-red-700 flex items-start">
                                  <span className="text-red-500 mr-2">•</span>
                                  <span>{consequence}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-semibold text-gray-900 mb-1">Solution:</p>
                            <p className="text-gray-700">{antiPattern.solution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {practice.codeExamples && practice.codeExamples.length > 0 && (
                  <>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">📝 Code Examples</h4>
                    <div className="space-y-6">
                      {practice.codeExamples.map((example, index) => (
                        <div key={index}>
                          <h5 className="text-lg font-bold text-gray-900 mb-3">{example.title}</h5>
                          <CodeBlock code={example.code} language={example.language} />
                          <p className="text-gray-600 mt-3 text-sm italic">{example.explanation}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Related Resources"
        description="Deepen your AWS knowledge"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            href="/architecture"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Architecture Patterns
            </h3>
            <p className="text-gray-600">
              Learn proven architecture patterns
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
              Explore service-specific best practices
            </p>
          </Link>

          <Link
            href="/cheatsheets"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Cheat Sheets
            </h3>
            <p className="text-gray-600">
              Quick reference for AWS commands
            </p>
          </Link>
        </div>
      </Section>
    </div>
  );
}
