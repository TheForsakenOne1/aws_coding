'use client';

import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import { blogPosts, blogCategories } from '@/data/blogPosts';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Tutorials, guides, and insights on AWS development and cloud architecture.
          </p>
        </div>
      </div>

      <Section
        title="Filter by Category"
        description="Browse articles by topic"
      >
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {blogCategories.map(category => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl border-2 border-gray-200 hover:border-amber-400 transition-all overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{post.icon}</div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="Stay Updated"
        description="Never miss an article"
        className="bg-gray-50"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to get notified about new blog posts, tutorials, and AWS updates.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-full border-2 border-gray-300 focus:border-amber-500 focus:outline-none"
            />
            <button className="px-8 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
