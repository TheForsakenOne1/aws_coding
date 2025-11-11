import { notFound } from 'next/navigation';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import { awsServices } from '@/data/awsServices';

export async function generateStaticParams() {
  return awsServices.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = awsServices.find(s => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="flex items-start space-x-6">
            <div className="text-6xl">{service.icon}</div>
            <div>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-3">
                {service.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Coding Required
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {service.codingRequired ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Category
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {service.category}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Programming Languages
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.programmingLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases</h2>
              <div className="space-y-3">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                  >
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {service.codeExample && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Code Example
                </h2>
                <CodeBlock code={service.codeExample} language="python" />
              </section>
            )}

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Best Practices
              </h2>
              <div className="space-y-4">
                {service.bestPractices.map((practice, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-green-50 rounded-xl p-4 border border-green-200"
                  >
                    <span className="text-green-600 mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{practice}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Interview Topics
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Key topics to know for interviews:
                </p>
                <div className="space-y-3">
                  {service.interviewTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-start text-sm"
                    >
                      <span className="text-amber-600 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/interview"
                  className="mt-6 block w-full text-center px-4 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-all"
                >
                  Practice Interview Questions
                </Link>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Related Services
                </h3>
                <div className="space-y-3">
                  {awsServices
                    .filter(s => s.category === service.category && s.id !== service.id)
                    .slice(0, 3)
                    .map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        href={`/services/${relatedService.id}`}
                        className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-amber-400 transition-all"
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{relatedService.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">
                              {relatedService.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
