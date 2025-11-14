'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { resources, resourceCategories, resourceTypes } from '@/data/resources';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    return matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Curated collection of the best books, courses, tools, and communities for AWS learning.
          </p>
        </div>
      </div>

      <Section title="Filter Resources" description="Find exactly what you need">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">By Category</h3>
          <div className="flex flex-wrap gap-2">
            {resourceCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 active:scale-95 ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-3">By Type</h3>
          <div className="flex flex-wrap gap-2">
            {resourceTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 active:scale-95 ${
                  selectedType === type
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl border-2 border-gray-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{resource.icon}</div>
                <div className="flex flex-col gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {resource.type}
                  </span>
                  {resource.free && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      Free
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                {resource.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{resource.provider}</span>
                {resource.rating && (
                  <div className="flex items-center">
                    <span className="text-amber-500 mr-1">⭐</span>
                    <span className="text-sm font-semibold text-gray-900">{resource.rating}/5</span>
                  </div>
                )}
              </div>

              <div className="mt-4 text-amber-600 font-semibold group-hover:text-amber-700 flex items-center">
                Visit Resource
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No resources found with the selected filters.
            </p>
          </div>
        )}
      </Section>
    </div>
  );
}
