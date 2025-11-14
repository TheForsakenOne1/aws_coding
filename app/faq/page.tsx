'use client';

import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import { faqs, faqCategories } from '@/data/faq';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Find answers to common questions about AWS development, architecture, and best practices.
          </p>

          <div className="max-w-2xl">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200 focus:outline-none text-lg transition-all duration-200"
            />
          </div>
        </div>
      </div>

      <Section
        title="Browse by Category"
        description="Filter questions by topic"
      >
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {faqCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 active:scale-95 ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map(faq => (
            <div
              key={faq.id}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-grow pr-4">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-2">
                    {faq.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-600 transition-transform ${
                    expandedFAQ === faq.id ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedFAQ === faq.id && (
                <div className="px-6 pb-6 border-t border-gray-200 pt-6">
                  <p className="text-gray-700 mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No questions found. Try a different search or category.
            </p>
          </div>
        )}
      </Section>

      <Section
        title="Need More Help?"
        description="Explore additional resources"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            href="/basics"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              AWS Basics
            </h3>
            <p className="text-gray-600">
              Start with fundamental AWS concepts
            </p>
          </Link>

          <Link
            href="/tutorials"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛠️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Tutorials
            </h3>
            <p className="text-gray-600">
              Follow step-by-step guided tutorials
            </p>
          </Link>

          <Link
            href="/resources"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔗</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              External Resources
            </h3>
            <p className="text-gray-600">
              Discover books, courses, and tools
            </p>
          </Link>
        </div>
      </Section>
    </div>
  );
}
