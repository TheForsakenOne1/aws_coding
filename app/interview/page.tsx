'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { interviewQuestions, interviewCategories } from '@/data/interviewQuestions';

export default function InterviewPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const filteredQuestions = interviewQuestions.filter(q => {
    const categoryMatch = selectedCategory === 'All' || q.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const toggleQuestion = (id: string) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Interview Preparation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Practice common AWS interview questions and master the concepts you need
            to ace your next cloud engineering interview.
          </p>
        </div>
      </div>

      <Section
        title="Interview Tips"
        description="Strategies to succeed in AWS interviews"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Know the Fundamentals
            </h3>
            <p className="text-gray-600">
              Master core services like EC2, S3, Lambda, and VPC. Understand when and
              why to use each service.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Real-World Experience
            </h3>
            <p className="text-gray-600">
              Share specific examples from your projects. Discuss challenges you faced
              and how you solved them.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Understand Trade-offs
            </h3>
            <p className="text-gray-600">
              Be prepared to discuss cost vs performance, availability vs consistency,
              and other architectural trade-offs.
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Filter Questions
          </h2>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">By Category:</h3>
            <div className="flex flex-wrap gap-3">
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
              {interviewCategories.map(category => (
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

          <div className="mb-12">
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

          <div className="space-y-4">
            {filteredQuestions.map((question) => (
              <div
                key={question.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-amber-300 transition-all"
              >
                <button
                  onClick={() => toggleQuestion(question.id)}
                  className="w-full p-6 text-left flex justify-between items-start"
                >
                  <div className="flex-grow pr-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          question.difficulty === 'Beginner'
                            ? 'bg-green-100 text-green-700'
                            : question.difficulty === 'Intermediate'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {question.difficulty}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                        {question.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {question.question}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedQuestion === question.id ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedQuestion === question.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                        Answer:
                      </h4>
                      <div className="prose prose-lg max-w-none">
                        {question.answer.split('\n').map((paragraph, i) => {
                          if (paragraph.startsWith('```')) {
                            return null;
                          }
                          if (paragraph.trim() === '') {
                            return <div key={i} className="h-4" />;
                          }
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return (
                              <h5 key={i} className="text-lg font-bold text-gray-900 mt-4 mb-2">
                                {paragraph.replace(/\*\*/g, '')}
                              </h5>
                            );
                          }
                          if (paragraph.startsWith('- ')) {
                            return (
                              <div key={i} className="flex items-start mb-2">
                                <span className="text-amber-500 mr-3 mt-1">•</span>
                                <span className="text-gray-700">{paragraph.substring(2)}</span>
                              </div>
                            );
                          }
                          if (paragraph.match(/^\d+\./)) {
                            return (
                              <div key={i} className="text-gray-700 mb-2">
                                {paragraph}
                              </div>
                            );
                          }
                          return (
                            <p key={i} className="text-gray-700 mb-3">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {question.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-600 text-lg">
                No questions found with the selected filters.
              </p>
            </div>
          )}
        </div>
      </div>

      <Section
        title="Additional Resources"
        description="Enhance your AWS interview preparation"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a
            href="/services"
            className="block p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Study Services
            </h3>
            <p className="text-gray-600">
              Deep dive into each AWS service with detailed explanations and code examples.
            </p>
          </a>

          <a
            href="/basics"
            className="block p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Review Basics
            </h3>
            <p className="text-gray-600">
              Refresh your knowledge of AWS fundamentals and core concepts.
            </p>
          </a>
        </div>
      </Section>
    </div>
  );
}
