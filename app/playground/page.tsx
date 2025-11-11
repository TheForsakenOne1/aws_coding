'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import CodePlayground from '@/components/CodePlayground';
import { codeTemplates, templateCategories } from '@/data/codeTemplates';

export default function PlaygroundPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(codeTemplates[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const filteredTemplates = codeTemplates.filter(template => {
    const categoryMatch = selectedCategory === 'All' || template.service === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || template.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Code Playground
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Practice AWS coding with interactive examples. Select a template, modify the
            code, and see how it works. Perfect for learning and experimentation!
          </p>
        </div>
      </div>

      <Section
        title="How to Use"
        description="Get the most out of your practice sessions"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div className="text-4xl mb-3">1️⃣</div>
            <h3 className="font-bold text-gray-900 mb-2">Choose Template</h3>
            <p className="text-sm text-gray-600">
              Select a code template from the library below
            </p>
          </div>
          <div className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div className="text-4xl mb-3">2️⃣</div>
            <h3 className="font-bold text-gray-900 mb-2">Edit Code</h3>
            <p className="text-sm text-gray-600">
              Modify the code to experiment with different approaches
            </p>
          </div>
          <div className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div className="text-4xl mb-3">3️⃣</div>
            <h3 className="font-bold text-gray-900 mb-2">Run & Test</h3>
            <p className="text-sm text-gray-600">
              Click Run to see the simulated output
            </p>
          </div>
          <div className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div className="text-4xl mb-3">4️⃣</div>
            <h3 className="font-bold text-gray-900 mb-2">Learn</h3>
            <p className="text-sm text-gray-600">
              Review learning points and best practices
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Current Template: {selectedTemplate.title}
            </h2>

            <CodePlayground
              initialCode={selectedTemplate.code}
              language={selectedTemplate.language}
              title={selectedTemplate.title}
              description={selectedTemplate.description}
              expectedOutput={selectedTemplate.expectedOutput}
            />

            {/* Learning Points */}
            <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎓 Learning Points
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTemplate.learningPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section
        title="Template Library"
        description="Choose from our collection of AWS code templates"
      >
        {/* Filters */}
        <div className="mb-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">By Service:</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All Services
              </button>
              {templateCategories.map(category => (
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

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">By Difficulty:</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedDifficulty('All')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedDifficulty === 'All'
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All Levels
              </button>
              {['Beginner', 'Intermediate', 'Advanced'].map(difficulty => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedDifficulty === difficulty
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template)}
              className={`text-left p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
                selectedTemplate.id === template.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 bg-white hover:border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    template.difficulty === 'Beginner'
                      ? 'bg-green-100 text-green-700'
                      : template.difficulty === 'Intermediate'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {template.difficulty}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                  {template.language}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {template.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {template.description}
              </p>
              <div className="text-xs text-amber-600 font-semibold">
                {template.service}
              </div>
            </button>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No templates found with the selected filters.
            </p>
          </div>
        )}
      </Section>

      <Section
        title="Next Steps"
        description="Continue your learning journey"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a
            href="/services"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Service Docs
            </h3>
            <p className="text-gray-600">
              Deep dive into AWS services with comprehensive documentation
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
            <p className="text-gray-600">
              Practice interview questions to ace your AWS interview
            </p>
          </a>

          <a
            href="/basics"
            className="block p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              AWS Basics
            </h3>
            <p className="text-gray-600">
              Review fundamental concepts and AWS best practices
            </p>
          </a>
        </div>
      </Section>
    </div>
  );
}
