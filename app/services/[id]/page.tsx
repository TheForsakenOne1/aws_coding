import { notFound } from 'next/navigation';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import { awsServices } from '@/data/awsServices';
import { serviceDocumentation } from '@/data/serviceDocumentation';

export async function generateStaticParams() {
  return awsServices.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = awsServices.find(s => s.id === params.id);
  const documentation = serviceDocumentation.find(d => d.serviceId === params.id);

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

            {/* Architecture Patterns */}
            {documentation?.architecturePatterns && documentation.architecturePatterns.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🏗️ Architecture Patterns
                </h2>
                <div className="space-y-6">
                  {documentation.architecturePatterns.map((pattern, index) => (
                    <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {pattern.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{pattern.description}</p>
                      <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
                        <pre className="text-sm text-gray-800 font-mono whitespace-pre">
                          {pattern.diagram}
                        </pre>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 font-semibold mr-2">Use Case:</span>
                        <span className="text-gray-700">{pattern.useCase}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Anti-Patterns */}
            {documentation?.antiPatterns && documentation.antiPatterns.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ⚠️ Anti-Patterns to Avoid
                </h2>
                <div className="space-y-6">
                  {documentation.antiPatterns.map((antiPattern, index) => (
                    <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {antiPattern.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{antiPattern.description}</p>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-red-700">Problem:</span>
                          <p className="text-gray-700 mt-1">{antiPattern.problem}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-green-700">Solution:</span>
                          <p className="text-gray-700 mt-1">{antiPattern.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Troubleshooting */}
            {documentation?.troubleshooting && documentation.troubleshooting.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🔧 Troubleshooting Guide
                </h2>
                <div className="space-y-6">
                  {documentation.troubleshooting.map((guide, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {guide.issue}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Symptoms:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {guide.symptoms.map((symptom, i) => (
                              <li key={i} className="text-gray-600">{symptom}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Common Causes:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {guide.causes.map((cause, i) => (
                              <li key={i} className="text-gray-600">{cause}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Solutions:</h4>
                          <ul className="space-y-2">
                            {guide.solutions.map((solution, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span className="text-gray-700">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Security */}
            {documentation?.security && documentation.security.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🔒 Security Guidelines
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documentation.security.map((guideline, index) => (
                    <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        {guideline.category}
                      </h3>
                      <ul className="space-y-2">
                        {guideline.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-purple-500 mr-2 mt-0.5">✓</span>
                            <span className="text-gray-700 text-sm">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Monitoring */}
            {documentation?.monitoring && documentation.monitoring.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  📊 Monitoring & Metrics
                </h2>
                <div className="space-y-4">
                  {documentation.monitoring.map((metric, index) => (
                    <div key={index} className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900">
                          {metric.metric}
                        </h3>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                          Metric
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{metric.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-indigo-700">Threshold:</span>
                          <p className="text-gray-600">{metric.threshold}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">Action:</span>
                          <p className="text-gray-600">{metric.action}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Cost Optimization */}
            {documentation?.costOptimization && documentation.costOptimization.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  💰 Cost Optimization Tips
                </h2>
                <div className="space-y-4">
                  {documentation.costOptimization.map((tip, index) => (
                    <div key={index} className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900">
                          {tip.tip}
                        </h3>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold whitespace-nowrap ml-3">
                          {tip.savings}
                        </span>
                      </div>
                      <p className="text-gray-700">{tip.implementation}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Practice in Playground */}
            <section className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200">
              <div className="text-center">
                <div className="text-5xl mb-4">💻</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Practice with {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  Try out code examples in our interactive playground with hands-on templates
                </p>
                <Link
                  href="/playground"
                  className="inline-block px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all shadow-lg"
                >
                  Go to Playground
                </Link>
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
