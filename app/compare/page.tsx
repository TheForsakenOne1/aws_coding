'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { serviceComparisons } from '@/data/serviceComparison';

export default function ComparePage() {
  const [selectedComparison, setSelectedComparison] = useState(serviceComparisons[0]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Service Comparison
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Compare AWS services side-by-side to choose the right tool for your needs.
            Understand the differences in features, pricing, and use cases.
          </p>
        </div>
      </div>

      <Section
        title="Select Comparison"
        description="Choose which services you'd like to compare"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {serviceComparisons.map((comparison) => (
            <button
              key={comparison.id}
              onClick={() => setSelectedComparison(comparison)}
              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                selectedComparison.id === comparison.id
                  ? 'border-amber-500 bg-amber-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow'
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {comparison.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {comparison.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {comparison.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedComparison.title} Comparison
            </h2>
            <p className="text-gray-600">{selectedComparison.description}</p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
            {/* Desktop View - Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-50 to-white border-b-2 border-gray-200">
                    <th className="text-left p-6 font-bold text-gray-900 text-lg w-1/6">
                      Feature
                    </th>
                    {selectedComparison.services.map((service) => (
                      <th
                        key={service}
                        className="text-left p-6 font-bold text-gray-900 text-lg"
                      >
                        {service}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {selectedComparison.attributes.map((attr, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="p-6 font-semibold text-gray-900 align-top">
                        {attr.label}
                      </td>
                      {selectedComparison.services.map((service) => (
                        <td key={service} className="p-6 text-gray-700 align-top">
                          {Array.isArray(attr.values[service]) ? (
                            <ul className="list-disc list-inside space-y-1">
                              {(attr.values[service] as string[]).map((item, i) => (
                                <li key={i} className="text-sm">{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-sm">{attr.values[service]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View - Cards */}
            <div className="lg:hidden">
              {selectedComparison.services.map((service, serviceIndex) => (
                <div
                  key={service}
                  className={`p-6 ${
                    serviceIndex !== selectedComparison.services.length - 1
                      ? 'border-b-2 border-gray-200'
                      : ''
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
                    {service}
                  </h3>
                  <div className="space-y-4">
                    {selectedComparison.attributes.map((attr) => (
                      <div key={attr.label}>
                        <div className="font-semibold text-gray-900 mb-2">
                          {attr.label}
                        </div>
                        {Array.isArray(attr.values[service]) ? (
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {(attr.values[service] as string[]).map((item, i) => (
                              <li key={i} className="text-sm">{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-gray-700 text-sm">
                            {attr.values[service]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mt-8 bg-amber-50 rounded-2xl border-2 border-amber-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💡 How to Choose
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="font-semibold text-gray-900 mb-2">
                  Consider Your Use Case
                </div>
                <p className="text-gray-700 text-sm">
                  Match service capabilities to your specific requirements and workload characteristics
                </p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">
                  Evaluate Costs
                </div>
                <p className="text-gray-700 text-sm">
                  Compare pricing models and calculate estimated costs for your expected usage
                </p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">
                  Think Long-term
                </div>
                <p className="text-gray-700 text-sm">
                  Consider scalability, maintenance overhead, and future requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section
        title="Need More Help?"
        description="Explore these resources to make informed decisions"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a
            href="/services"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Service Documentation
            </h3>
            <p className="text-gray-600">
              Deep dive into each service with comprehensive guides
            </p>
          </a>

          <a
            href="/playground"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Try in Playground
            </h3>
            <p className="text-gray-600">
              Test services with interactive code examples
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
              Quick reference for commands and configurations
            </p>
          </a>
        </div>
      </Section>
    </div>
  );
}
