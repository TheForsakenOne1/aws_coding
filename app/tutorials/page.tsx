'use client';

import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import CodeBlock from '@/components/CodeBlock';
import { tutorials, tutorialCategories } from '@/data/tutorials';

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedTutorial, setExpandedTutorial] = useState<string | null>(null);

  const filteredTutorials = selectedCategory === 'All'
    ? tutorials
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-amber-100 text-amber-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Tutorials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Step-by-step hands-on tutorials to build real AWS projects.
            Follow along and learn by doing with comprehensive code examples.
          </p>
        </div>
      </div>

      <Section
        title="Filter by Category"
        description="Choose tutorials based on your learning goals"
      >
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tutorialCategories.map(category => (
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

        <div className="space-y-8">
          {filteredTutorials.map(tutorial => (
            <div
              key={tutorial.id}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{tutorial.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-600">{tutorial.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {tutorial.duration}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    {tutorial.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tutorial.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Prerequisites:</h4>
                    <ul className="space-y-1">
                      {tutorial.prerequisites.slice(0, 3).map((prereq, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span>{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedTutorial(
                    expandedTutorial === tutorial.id ? null : tutorial.id
                  )}
                  className="w-full px-6 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all"
                >
                  {expandedTutorial === tutorial.id ? 'Hide Tutorial Steps' : 'Start Tutorial'}
                </button>
              </div>

              {expandedTutorial === tutorial.id && (
                <div className="border-t-2 border-gray-200 bg-gray-50 p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Tutorial Steps</h4>

                  <div className="space-y-8">
                    {tutorial.steps.map((step, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-grow">
                            <h5 className="text-xl font-bold text-gray-900 mb-2">
                              {step.title}
                            </h5>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>

                        {step.code && (
                          <div className="mb-4">
                            <CodeBlock code={step.code} language={step.language || 'bash'} />
                          </div>
                        )}

                        {step.tips && step.tips.length > 0 && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h6 className="font-bold text-blue-900 mb-2">💡 Tips:</h6>
                            <ul className="space-y-1">
                              {step.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="text-sm text-blue-800 flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                    <h5 className="font-bold text-green-900 mb-3">🎯 Learning Outcomes</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {tutorial.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="text-green-800 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No tutorials found in this category.
            </p>
          </div>
        )}
      </Section>

      <Section
        title="Next Steps"
        description="Continue your AWS learning journey"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            href="/projects"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Build Projects
            </h3>
            <p className="text-gray-600">
              Apply what you learned in real-world projects
            </p>
          </Link>

          <Link
            href="/playground"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Code Playground
            </h3>
            <p className="text-gray-600">
              Experiment with code examples interactively
            </p>
          </Link>

          <Link
            href="/certifications"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Get Certified
            </h3>
            <p className="text-gray-600">
              Prepare for AWS certification exams
            </p>
          </Link>
        </div>
      </Section>
    </div>
  );
}
