import Section from '@/components/Section';
import CodeBlock from '@/components/CodeBlock';
import { awsBasics, prerequisites } from '@/data/awsBasics';

export default function BasicsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS Basics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Start your AWS journey with the fundamentals. Learn essential concepts,
            setup your environment, and understand core AWS services.
          </p>
        </div>
      </div>

      <Section
        title="Prerequisites"
        description="What you should know before diving into AWS"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prerequisites.map((prereq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-amber-400 transition-all"
            >
              <div className="text-4xl mb-4">{prereq.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {prereq.title}
              </h3>
              <p className="text-gray-600">{prereq.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-24">
            {awsBasics.map((topic, index) => (
              <div key={topic.id} id={topic.id}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{topic.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {topic.title}
                    </h2>
                    <p className="text-xl text-gray-600">{topic.description}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <div className="prose prose-lg max-w-none">
                    {topic.content.map((paragraph, i) => {
                      if (paragraph.startsWith('•')) {
                        return (
                          <div key={i} className="flex items-start mb-2">
                            <span className="text-amber-500 mr-3 mt-1">•</span>
                            <span className="text-gray-700">{paragraph.substring(2)}</span>
                          </div>
                        );
                      } else if (paragraph === '') {
                        return <div key={i} className="h-4" />;
                      } else {
                        return (
                          <p key={i} className="text-gray-700 mb-4">
                            {paragraph}
                          </p>
                        );
                      }
                    })}

                    {topic.codeExample && (
                      <CodeBlock code={topic.codeExample} language="bash" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section
        title="Next Steps"
        description="Continue your AWS learning journey"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a
            href="/services"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Explore AWS Services
            </h3>
            <p className="text-gray-600 mb-4">
              Dive deep into compute, storage, database, networking, and more AWS services with code examples.
            </p>
            <span className="text-amber-600 font-semibold">
              Learn More →
            </span>
          </a>

          <a
            href="/interview"
            className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Interview Preparation
            </h3>
            <p className="text-gray-600 mb-4">
              Practice common AWS interview questions and learn best practices for your next job interview.
            </p>
            <span className="text-amber-600 font-semibold">
              Start Practicing →
            </span>
          </a>
        </div>
      </Section>
    </div>
  );
}
