import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { awsServices, categories } from '@/data/awsServices';

export default function Home() {
  const featuredServices = awsServices.filter(service =>
    ['lambda', 's3', 'dynamodb', 'ec2', 'api-gateway', 'iam'].includes(service.id)
  );

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <Section
        title="Why Learn AWS Coding?"
        description="Understanding AWS coding is essential for modern cloud development"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Serverless Applications</h3>
            <p className="text-gray-600">
              Build scalable applications without managing servers using Lambda, API Gateway, and more.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Career Growth</h3>
            <p className="text-gray-600">
              AWS skills are in high demand with competitive salaries for cloud engineers and developers.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure as Code</h3>
            <p className="text-gray-600">
              Automate infrastructure deployment using CloudFormation, CDK, and Terraform on AWS.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Featured AWS Services"
        description="Start with these essential services that require coding knowledge"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              href={`/services/${service.id}`}
              icon={service.icon}
              category={service.category}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl"
          >
            View All Services
          </a>
        </div>
      </Section>

      <Section
        title="Learning Path"
        description="Follow this structured path to master AWS coding"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-white border-2 border-amber-200 rounded-xl hover:border-amber-400 transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl">
                1
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AWS Fundamentals</h3>
                <p className="text-gray-600 mb-3">
                  Learn AWS basics, account setup, IAM, VPC, and core concepts
                </p>
                <a href="/basics" className="text-amber-600 font-semibold hover:text-amber-700">
                  Start Learning →
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white border-2 border-amber-200 rounded-xl hover:border-amber-400 transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl">
                2
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AWS Services Deep Dive</h3>
                <p className="text-gray-600 mb-3">
                  Explore compute, storage, database, and networking services with code examples
                </p>
                <a href="/services" className="text-amber-600 font-semibold hover:text-amber-700">
                  Explore Services →
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white border-2 border-amber-200 rounded-xl hover:border-amber-400 transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl">
                3
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interview Preparation</h3>
                <p className="text-gray-600 mb-3">
                  Practice common AWS interview questions and learn best practices
                </p>
                <a href="/interview" className="text-amber-600 font-semibold hover:text-amber-700">
                  Prepare for Interviews →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Where is AWS Coding Required?"
        description="Understand where you'll need programming skills in AWS"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Development</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Building serverless APIs with Lambda and API Gateway</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Web applications on EC2 or Elastic Beanstalk</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Containerized apps with ECS/EKS</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Mobile backends with Amplify</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Automation</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Infrastructure as Code with CloudFormation/CDK</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>CI/CD pipelines with CodePipeline</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Automation scripts with AWS CLI/SDK</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Custom CloudWatch metrics and alarms</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Processing</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>ETL pipelines with AWS Glue</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Stream processing with Kinesis</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Data analysis with Athena and SQL</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Batch jobs with AWS Batch</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Machine Learning</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Training models with SageMaker</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Real-time inference endpoints</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Computer vision with Rekognition</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>NLP applications with Comprehend</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
