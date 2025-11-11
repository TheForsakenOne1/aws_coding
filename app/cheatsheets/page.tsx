'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { cheatSheets, cheatSheetCategories } from '@/data/cheatsheets';

export default function CheatSheetsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCheatSheets = cheatSheets.filter(sheet => {
    const categoryMatch = selectedCategory === 'All' || sheet.category === selectedCategory;
    const searchMatch = searchQuery === '' ||
      sheet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sheet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sheet.items.some(item =>
        item.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return categoryMatch && searchMatch;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Cheat Sheets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Quick reference guides for AWS CLI commands, SDK operations, IAM policies, and more.
            Copy commands directly to your terminal or IDE.
          </p>
        </div>
      </div>

      <Section
        title="Quick Access"
        description="Find exactly what you need"
      >
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search commands, descriptions, or examples..."
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
            {cheatSheetCategories.map(category => (
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
            Showing <span className="font-bold text-amber-600">{filteredCheatSheets.length}</span> cheat sheet{filteredCheatSheets.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>
      </Section>

      {/* Cheat Sheets */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredCheatSheets.map((sheet) => (
            <div
              key={sheet.id}
              className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-50 to-white p-6 border-b-2 border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{sheet.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{sheet.title}</h2>
                      <p className="text-gray-600 mt-1">{sheet.description}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                    {sheet.category}
                  </span>
                </div>
              </div>

              {/* Commands */}
              <div className="p-6">
                <div className="space-y-4">
                  {sheet.items.map((item, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-all bg-white"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg mb-1">
                            {item.command.split('\n')[0]}
                          </h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                        <button
                          onClick={() => handleCopy(item.example || item.command, `${sheet.id}-${index}`)}
                          className="ml-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium flex items-center space-x-2"
                        >
                          {copiedId === `${sheet.id}-${index}` ? (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      {item.example && (
                        <div className="mt-4">
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap">
                              {item.example}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filteredCheatSheets.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No cheat sheets found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>

      <Section
        title="Pro Tips"
        description="Make the most of these cheat sheets"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Customize Commands
            </h3>
            <p className="text-gray-700">
              Replace placeholders like bucket-name, function-name with your actual resource names
            </p>
          </div>

          <div className="p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Test Safely
            </h3>
            <p className="text-gray-700">
              Always test commands in a development environment before using in production
            </p>
          </div>

          <div className="p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Combine with Docs
            </h3>
            <p className="text-gray-700">
              Use these alongside our service documentation for deeper understanding
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Related Resources"
        description="Continue your learning journey"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a
            href="/playground"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Code Playground
            </h3>
            <p className="text-gray-600">
              Practice these commands in our interactive playground
            </p>
          </a>

          <a
            href="/services"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Service Documentation
            </h3>
            <p className="text-gray-600">
              Deep dive into AWS services with comprehensive guides
            </p>
          </a>

          <a
            href="/devops"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              DevOps Guide
            </h3>
            <p className="text-gray-600">
              Learn CI/CD, IaC, and deployment strategies
            </p>
          </a>
        </div>
      </Section>
    </div>
  );
}
