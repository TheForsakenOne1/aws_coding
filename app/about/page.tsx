import Link from 'next/link';
import Section from '@/components/Section';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About AWS Coding Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Your comprehensive resource for mastering AWS development, from fundamentals to advanced coding patterns.
          </p>
        </div>
      </div>

      <Section title="Our Mission" description="Empowering developers to build on AWS">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              AWS Coding Guide was created to bridge the gap between AWS documentation and practical, hands-on development.
              We believe that learning cloud development should be accessible, practical, and engaging.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to provide developers with the knowledge, tools, and resources they need to build
              scalable, secure, and cost-effective applications on AWS.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're just starting your cloud journey or looking to master advanced AWS services,
              we're here to help you every step of the way.
            </p>
          </div>
        </div>
      </Section>

      <Section title="What We Offer" description="Comprehensive AWS learning resources" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Service Guides</h3>
            <p className="text-gray-600">
              Detailed documentation for all major AWS services with practical code examples
              and real-world use cases.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Hands-on Tutorials</h3>
            <p className="text-gray-600">
              Step-by-step tutorials that guide you through building real applications
              on AWS from start to finish.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Ideas</h3>
            <p className="text-gray-600">
              Curated collection of projects to build your portfolio and gain
              practical AWS development experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Certification Prep</h3>
            <p className="text-gray-600">
              Complete preparation guides for AWS certifications with study resources
              and practice questions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Best Practices</h3>
            <p className="text-gray-600">
              Industry-proven best practices for security, performance, reliability,
              and cost optimization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Code Playground</h3>
            <p className="text-gray-600">
              Interactive code examples and templates for quick experimentation
              and learning.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Why Choose Us" description="What makes AWS Coding Guide different">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 Focused on Coding</h3>
            <p className="text-gray-700">
              Unlike general AWS resources, we focus specifically on development and coding aspects,
              with practical code examples in multiple programming languages.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">📖 Beginner-Friendly</h3>
            <p className="text-gray-700">
              Our content is structured to accommodate developers of all skill levels,
              from absolute beginners to experienced cloud architects.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🔄 Always Updated</h3>
            <p className="text-gray-700">
              AWS is constantly evolving, and so are we. Our content is regularly updated
              to reflect the latest AWS features and best practices.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🚀 Project-Based Learning</h3>
            <p className="text-gray-700">
              We believe in learning by doing. Our tutorials and projects help you build
              real-world applications that you can showcase in your portfolio.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Get Started" description="Begin your AWS journey today" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            href="/basics"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Start with Basics
            </h3>
            <p className="text-gray-600">
              Learn AWS fundamentals and set up your development environment
            </p>
          </Link>

          <Link
            href="/tutorials"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Follow Tutorials
            </h3>
            <p className="text-gray-600">
              Build your first AWS application with step-by-step guidance
            </p>
          </Link>

          <Link
            href="/projects"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏗️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Build Projects
            </h3>
            <p className="text-gray-600">
              Apply your skills to real-world projects and build your portfolio
            </p>
          </Link>
        </div>
      </Section>
    </div>
  );
}
