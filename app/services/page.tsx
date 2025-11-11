'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { awsServices, categories } from '@/data/awsServices';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredServices = selectedCategory === 'All'
    ? awsServices
    : awsServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to AWS services that require coding knowledge.
            Learn how to use each service with hands-on code examples.
          </p>
        </div>
      </div>

      <Section
        title="Filter by Category"
        description="Browse services by their category"
      >
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Services
          </button>
          {categories.map(category => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              href={`/services/${service.id}`}
              icon={service.icon}
              category={service.category}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No services found in this category.
            </p>
          </div>
        )}
      </Section>

      <Section
        title="Why These Services?"
        description="Understanding where coding is essential in AWS"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Programming Languages
            </h3>
            <p className="text-gray-600 mb-4">
              AWS services support multiple programming languages:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">Python (Boto3)</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">JavaScript/Node.js</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">Java</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">Go</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">C# (.NET)</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">Ruby, PHP, and more</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Development Skills
            </h3>
            <p className="text-gray-600 mb-4">
              Essential skills for AWS development:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">API integration</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">Asynchronous programming</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">Error handling</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">Security best practices</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">Testing and debugging</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                <span className="text-gray-700">Infrastructure as Code</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
