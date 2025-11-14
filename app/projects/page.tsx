'use client';

import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import { projects, projectCategories } from '@/data/projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
            AWS Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Build real-world applications to master AWS services.
            Each project includes a complete architecture overview and feature list.
          </p>
        </div>
      </div>

      <Section
        title="Filter by Category"
        description="Choose projects that match your interests"
      >
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {projectCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 active:scale-95 ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 sm:p-8 group"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(project.difficulty)}`}>
                  {project.difficulty}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  {project.estimatedTime}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  {project.category}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">🛠️ Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">📚 Skills You'll Learn:</h4>
                <ul className="space-y-2">
                  {project.skills.slice(0, 4).map((skill, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">⚡ Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 5 && (
                    <li className="text-sm text-gray-500 italic ml-3">
                      +{project.features.length - 5} more features...
                    </li>
                  )}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">🏗️ Architecture:</h4>
                <p className="text-sm text-gray-700">{project.architecture}</p>
              </div>

              <Link
                href="/tutorials"
                className="block w-full text-center px-6 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                View Related Tutorials
              </Link>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </Section>

      <Section
        title="Ready to Start Building?"
        description="Resources to help you succeed"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            href="/tutorials"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Follow Tutorials
            </h3>
            <p className="text-gray-600">
              Step-by-step guides to build these projects
            </p>
          </Link>

          <Link
            href="/architecture"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏛️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Architecture Patterns
            </h3>
            <p className="text-gray-600">
              Learn common AWS architecture patterns
            </p>
          </Link>

          <Link
            href="/best-practices"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⭐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Best Practices
            </h3>
            <p className="text-gray-600">
              Follow AWS coding best practices
            </p>
          </Link>
        </div>
      </Section>
    </div>
  );
}
