'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { learningPaths } from '@/data/learningPaths';

export default function LearningPathsPage() {
  const [selectedPath, setSelectedPath] = useState(learningPaths[0]);
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const filteredPaths = learningPaths.filter(path =>
    selectedLevel === 'All' || path.level === selectedLevel
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learning Paths
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Structured learning paths to guide your AWS journey. From beginner to advanced,
            follow curated curricula designed to help you master AWS services and prepare for certifications.
          </p>
        </div>
      </div>

      <Section
        title="Choose Your Path"
        description="Select a learning path that matches your goals and experience level"
      >
        {/* Level Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Filter by Level:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedLevel('All')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedLevel === 'All'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Levels
            </button>
            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedLevel === level
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPaths.map((path) => (
            <button
              key={path.id}
              onClick={() => setSelectedPath(path)}
              className={`text-left p-6 rounded-2xl border-2 transition-all ${
                selectedPath.id === path.id
                  ? 'border-amber-500 bg-amber-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow'
              }`}
            >
              <div className="text-5xl mb-4">{path.icon}</div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    path.level === 'Beginner'
                      ? 'bg-green-100 text-green-700'
                      : path.level === 'Intermediate'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {path.level}
                </span>
                <span className="text-sm text-gray-600">⏱️ {path.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {path.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {path.description}
              </p>
              {path.certifications && path.certifications.length > 0 && (
                <div className="flex items-center text-xs text-amber-600 font-semibold">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certification Path
                </div>
              )}
            </button>
          ))}
        </div>
      </Section>

      {/* Selected Path Details */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-50 to-white p-8 border-b-2 border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <span className="text-6xl">{selectedPath.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedPath.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{selectedPath.description}</p>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          selectedPath.level === 'Beginner'
                            ? 'bg-green-100 text-green-700'
                            : selectedPath.level === 'Intermediate'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {selectedPath.level}
                      </span>
                      <span className="text-gray-600">⏱️ {selectedPath.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goals and Prerequisites */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-b-2 border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">🎯</span> Learning Goals
                </h3>
                <ul className="space-y-2">
                  {selectedPath.goals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📋</span> Prerequisites
                </h3>
                <ul className="space-y-2">
                  {selectedPath.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Learning Steps */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📚 Learning Journey
              </h3>
              <div className="space-y-6">
                {selectedPath.steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6 hover:border-amber-300 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3">
                            {step.description}
                          </p>
                          <div className="text-sm text-gray-500">
                            ⏱️ Duration: {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resources */}
                    {step.resources.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-300">
                        <div className="text-sm font-semibold text-gray-700 mb-2">
                          📖 Resources:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.resources.map((resource, rIndex) => (
                            <a
                              key={rIndex}
                              href={resource.url}
                              className="px-3 py-1 bg-white border-2 border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-amber-400 hover:text-amber-600 transition-all"
                            >
                              {resource.title}
                              {resource.type === 'external' && (
                                <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {selectedPath.certifications && selectedPath.certifications.length > 0 && (
              <div className="p-8 bg-gradient-to-r from-amber-50 to-white border-t-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Target Certifications
                </h3>
                <div className="space-y-2">
                  {selectedPath.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-amber-500 mr-2">★</span>
                      <span className="text-gray-900 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Section
        title="Ready to Start Learning?"
        description="Explore these resources to begin your journey"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <a
            href="/basics"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              AWS Basics
            </h3>
            <p className="text-gray-600 text-sm">
              Start with fundamentals
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
            <p className="text-gray-600 text-sm">
              Explore AWS services
            </p>
          </a>

          <a
            href="/playground"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Practice Code
            </h3>
            <p className="text-gray-600 text-sm">
              Hands-on examples
            </p>
          </a>

          <a
            href="/interview"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">💼</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Interview Prep
            </h3>
            <p className="text-gray-600 text-sm">
              Practice questions
            </p>
          </a>
        </div>
      </Section>
    </div>
  );
}
