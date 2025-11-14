'use client';

import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import { certifications, certificationLevels } from '@/data/certifications';

export default function CertificationsPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const filteredCerts = selectedLevel === 'All'
    ? certifications
    : certifications.filter(cert => cert.level === selectedLevel);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Foundational': return 'bg-green-100 text-green-700';
      case 'Associate': return 'bg-blue-100 text-blue-700';
      case 'Professional': return 'bg-purple-100 text-purple-700';
      case 'Specialty': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Certifications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to AWS certifications. Prepare for your exams with detailed study guides,
            practice questions, and resources.
          </p>
        </div>
      </div>

      <Section
        title="Certification Levels"
        description="Choose your certification path"
      >
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {certificationLevels.map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 active:scale-95 ${
                selectedLevel === level
                  ? 'bg-amber-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredCerts.map(cert => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${getLevelColor(cert.level)}`}>
                        {cert.level}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">Exam Code: {cert.code}</p>
                      <p className="text-sm sm:text-base text-gray-600">{cert.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-bold text-gray-900">{cert.examDuration}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Questions</p>
                    <p className="font-bold text-gray-900">{cert.numberOfQuestions}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Passing Score</p>
                    <p className="font-bold text-gray-900">{cert.passingScore}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Cost</p>
                    <p className="font-bold text-gray-900">{cert.examCost}</p>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                  className="w-full px-6 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 hover:shadow-lg active:scale-95 transition-all duration-200"
                >
                  {expandedCert === cert.id ? 'Hide Details' : 'View Study Guide'}
                </button>
              </div>

              {expandedCert === cert.id && (
                <div className="border-t-2 border-gray-200 bg-gray-50 p-4 sm:p-8">
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">📋 Prerequisites</h4>
                      <ul className="space-y-2">
                        {cert.prerequisites.map((prereq, index) => (
                          <li key={index} className="text-gray-600 flex items-start">
                            <span className="text-amber-500 mr-2">✓</span>
                            <span>{prereq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">📚 Exam Domains</h4>
                      <div className="space-y-4">
                        {cert.domains.map((domain, index) => (
                          <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                              <h5 className="text-lg sm:text-xl font-bold text-gray-900">{domain.name}</h5>
                              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                                {domain.weight}
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {domain.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">📖 Study Resources</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {cert.studyResources.map((resource, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="flex justify-between items-start mb-2">
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                                {resource.type}
                              </span>
                              {resource.free && (
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                                  Free
                                </span>
                              )}
                            </div>
                            <h6 className="font-bold text-gray-900 mb-1">{resource.title}</h6>
                            <p className="text-sm text-gray-600">{resource.provider}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">💡 Exam Tips</h4>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
                        <ul className="space-y-2">
                          {cert.tips.map((tip, index) => (
                            <li key={index} className="text-blue-800 flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Certification Path Recommendations"
        description="Follow a structured learning path"
        className="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🌱 Beginner Path</h3>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold mr-3">1</span>
                <div>
                  <p className="font-semibold text-gray-900">AWS Certified Cloud Practitioner</p>
                  <p className="text-sm text-gray-600">Foundation-level understanding of AWS</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold mr-3">2</span>
                <div>
                  <p className="font-semibold text-gray-900">Choose an Associate certification</p>
                  <p className="text-sm text-gray-600">Solutions Architect, Developer, or SysOps Admin</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Advanced Path</h3>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold mr-3">1</span>
                <div>
                  <p className="font-semibold text-gray-900">Complete an Associate certification</p>
                  <p className="text-sm text-gray-600">Build strong foundational knowledge</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold mr-3">2</span>
                <div>
                  <p className="font-semibold text-gray-900">Gain hands-on experience</p>
                  <p className="text-sm text-gray-600">2+ years working with AWS in production</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold mr-3">3</span>
                <div>
                  <p className="font-semibold text-gray-900">Pursue Professional certification</p>
                  <p className="text-sm text-gray-600">Solutions Architect or DevOps Engineer</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          <Link
            href="/learning-paths"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Learning Paths
            </h3>
            <p className="text-gray-600">
              Structured curricula to prepare for certifications
            </p>
          </Link>

          <Link
            href="/interview"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💼</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Interview Prep
            </h3>
            <p className="text-gray-600">
              Practice questions and interview scenarios
            </p>
          </Link>

          <Link
            href="/tutorials"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Hands-on Tutorials
            </h3>
            <p className="text-gray-600">
              Build practical skills with step-by-step guides
            </p>
          </Link>
        </div>
      </Section>
    </div>
  );
}
