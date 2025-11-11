'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { glossaryTerms, glossaryCategories } from '@/data/glossary';

export default function GlossaryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = glossaryTerms.filter(term => {
    const categoryMatch = selectedCategory === 'All' || term.category === selectedCategory;
    const searchMatch = searchQuery === '' ||
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.category.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  // Sort alphabetically
  const sortedTerms = [...filteredTerms].sort((a, b) => a.term.localeCompare(b.term));

  // Group by first letter
  const groupedTerms = sortedTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const letters = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Glossary
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive dictionary of AWS terms, acronyms, and concepts.
            Search or browse by category to understand AWS terminology.
          </p>
        </div>
      </div>

      <Section
        title="Find Terms"
        description="Search or filter to find what you need"
      >
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search terms, definitions, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-amber-500 focus:outline-none transition-colors"
            />
            <svg
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Filter by Category:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Categories
            </button>
            {glossaryCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Found <span className="font-bold text-amber-600">{sortedTerms.length}</span> term{sortedTerms.length !== 1 ? 's' : ''}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Quick Navigation */}
        {!searchQuery && sortedTerms.length > 0 && (
          <div className="mb-8 bg-amber-50 rounded-2xl border-2 border-amber-200 p-6">
            <h3 className="text-center font-semibold text-gray-900 mb-4">
              Jump to Letter:
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {letters.map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-all font-semibold text-gray-900"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* Terms List */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedTerms.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No terms found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {letters.map(letter => (
                <div key={letter} id={`letter-${letter}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-3xl font-bold text-white">{letter}</span>
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-amber-200 to-transparent"></div>
                  </div>

                  <div className="space-y-4">
                    {groupedTerms[letter].map((term) => (
                      <div
                        key={term.term}
                        className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-all"
                      >
                        <button
                          onClick={() => setExpandedTerm(expandedTerm === term.term ? null : term.term)}
                          className="w-full p-6 text-left flex items-start justify-between"
                        >
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-bold text-gray-900">
                                {term.term}
                              </h3>
                              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                                {term.category}
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {term.definition}
                            </p>
                          </div>
                          <svg
                            className={`w-6 h-6 text-gray-400 transition-transform ml-4 flex-shrink-0 ${
                              expandedTerm === term.term ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {expandedTerm === term.term && (
                          <div className="px-6 pb-6 pt-2 border-t-2 border-gray-100">
                            {term.example && (
                              <div className="mb-4">
                                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                  📌 Example:
                                </h4>
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                  <p className="text-gray-700 text-sm italic">
                                    {term.example}
                                  </p>
                                </div>
                              </div>
                            )}

                            {term.relatedTerms && term.relatedTerms.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                  🔗 Related Terms:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {term.relatedTerms.map((relatedTerm) => (
                                    <button
                                      key={relatedTerm}
                                      onClick={() => {
                                        setSearchQuery(relatedTerm);
                                        setExpandedTerm(relatedTerm);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                      }}
                                      className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-100 transition-colors border border-amber-200"
                                    >
                                      {relatedTerm}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Section
        title="Keep Learning"
        description="Explore more AWS resources"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a
            href="/basics"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              AWS Basics
            </h3>
            <p className="text-gray-600">
              Learn fundamental AWS concepts and best practices
            </p>
          </a>

          <a
            href="/cheatsheets"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Cheat Sheets
            </h3>
            <p className="text-gray-600">
              Quick command references for AWS CLI and SDKs
            </p>
          </a>

          <a
            href="/services"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Service Docs
            </h3>
            <p className="text-gray-600">
              Detailed documentation for all AWS services
            </p>
          </a>
        </div>
      </Section>
    </div>
  );
}
