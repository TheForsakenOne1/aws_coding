import Section from '@/components/Section';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export default function DevOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AWS DevOps Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Master DevOps practices on AWS. Learn CI/CD, Infrastructure as Code,
            monitoring, security, and automation to build and operate scalable systems.
          </p>
        </div>
      </div>

      <Section
        title="DevOps on AWS"
        description="Understanding the AWS approach to DevOps"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
            <div className="text-5xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Continuous Integration</h3>
            <p className="text-gray-700">
              Automate code building, testing, and validation with CodeBuild, CodeCommit, and third-party tools.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Continuous Deployment</h3>
            <p className="text-gray-700">
              Deploy applications automatically to multiple environments with CodeDeploy and CodePipeline.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Monitoring & Observability</h3>
            <p className="text-gray-700">
              Monitor infrastructure and applications with CloudWatch, X-Ray, and centralized logging.
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* CI/CD Pipeline */}
          <div id="cicd">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              🔄 CI/CD Pipeline with AWS
            </h2>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Pipeline Architecture</h3>
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto font-mono text-sm">
{`┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Source    │────▶│    Build    │────▶│     Test    │────▶│   Deploy    │
│ CodeCommit  │     │  CodeBuild  │     │   Testing   │     │ CodeDeploy  │
│   GitHub    │     │   Jenkins   │     │   Quality   │     │ ECS/EKS/EB  │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
      │                     │                   │                   │
      │                     ▼                   ▼                   ▼
      │              [Unit Tests]        [Integration]      [Health Checks]
      │              [Linting]           [Security Scan]    [Smoke Tests]
      │              [Build Artifact]    [Code Coverage]    [Rollback]
      └──────────────────────────────────────────────────────────────┘
                              CodePipeline`}
              </pre>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Source Stage</h3>
                <p className="text-gray-700 mb-4">
                  Code is stored in a version control system and triggers the pipeline on changes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">AWS CodeCommit (Git repositories)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">GitHub / GitLab / Bitbucket</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">S3 (for packaged code)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Build Stage</h3>
                <p className="text-gray-700 mb-4">
                  Code is compiled, tested, and packaged into deployable artifacts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">AWS CodeBuild (managed build service)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Jenkins (self-managed)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Docker image building</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Test Stage</h3>
                <p className="text-gray-700 mb-4">
                  Automated testing ensures code quality before deployment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Unit tests (Jest, pytest, JUnit)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Integration tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Security scanning (SAST/DAST)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Deploy Stage</h3>
                <p className="text-gray-700 mb-4">
                  Deployment to target environments with various strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">AWS CodeDeploy (automated deployments)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Blue/Green deployments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Rolling updates with health checks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Example: CodePipeline Configuration</h3>
              <CodeBlock
                code={`# pipeline.yaml (CloudFormation)
Resources:
  Pipeline:
    Type: AWS::CodePipeline::Pipeline
    Properties:
      Name: MyAppPipeline
      RoleArn: !GetAtt PipelineRole.Arn
      Stages:
        - Name: Source
          Actions:
            - Name: SourceAction
              ActionTypeId:
                Category: Source
                Owner: AWS
                Provider: CodeCommit
                Version: '1'
              Configuration:
                RepositoryName: my-app
                BranchName: main
              OutputArtifacts:
                - Name: SourceOutput

        - Name: Build
          Actions:
            - Name: BuildAction
              ActionTypeId:
                Category: Build
                Owner: AWS
                Provider: CodeBuild
                Version: '1'
              Configuration:
                ProjectName: MyAppBuild
              InputArtifacts:
                - Name: SourceOutput
              OutputArtifacts:
                - Name: BuildOutput

        - Name: Test
          Actions:
            - Name: TestAction
              ActionTypeId:
                Category: Test
                Owner: AWS
                Provider: CodeBuild
                Version: '1'
              Configuration:
                ProjectName: MyAppTest
              InputArtifacts:
                - Name: BuildOutput

        - Name: Deploy
          Actions:
            - Name: DeployAction
              ActionTypeId:
                Category: Deploy
                Owner: AWS
                Provider: CodeDeploy
                Version: '1'
              Configuration:
                ApplicationName: MyApp
                DeploymentGroupName: Production
              InputArtifacts:
                - Name: BuildOutput`}
                language="yaml"
              />
            </div>
          </div>

          {/* Infrastructure as Code */}
          <div id="iac">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              📋 Infrastructure as Code (IaC)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AWS CloudFormation</h3>
                <p className="text-gray-700 mb-4">
                  Native AWS IaC service using JSON/YAML templates.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Declarative templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Stack management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Change sets for previews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Drift detection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AWS CDK</h3>
                <p className="text-gray-700 mb-4">
                  Define infrastructure using programming languages (TypeScript, Python, Java).
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Use familiar programming languages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">High-level constructs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Reusable components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Generates CloudFormation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Terraform</h3>
                <p className="text-gray-700 mb-4">
                  Multi-cloud IaC tool with HCL (HashiCorp Configuration Language).
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">Multi-cloud support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">State management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">Large provider ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">Plan and apply workflow</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Serverless Framework</h3>
                <p className="text-gray-700 mb-4">
                  Specialized framework for serverless applications.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span className="text-gray-700">Simple YAML configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span className="text-gray-700">Plugin ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span className="text-gray-700">Multi-cloud deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span className="text-gray-700">Local testing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Example: AWS CDK Stack</h3>
              <CodeBlock
                code={`import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';

export class MyAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC with public and private subnets
    const vpc = new ec2.Vpc(this, 'MyVPC', {
      maxAzs: 3,
      natGateways: 1
    });

    // ECS Cluster
    const cluster = new ecs.Cluster(this, 'MyCluster', {
      vpc: vpc,
      containerInsights: true
    });

    // Fargate Task Definition
    const taskDefinition = new ecs.FargateTaskDefinition(this, 'TaskDef', {
      memoryLimitMiB: 512,
      cpu: 256
    });

    // Add container
    const container = taskDefinition.addContainer('web', {
      image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
      logging: ecs.LogDrivers.awsLogs({ streamPrefix: 'MyApp' })
    });

    container.addPortMappings({
      containerPort: 80
    });

    // Fargate Service
    const service = new ecs.FargateService(this, 'Service', {
      cluster,
      taskDefinition,
      desiredCount: 2
    });

    // Application Load Balancer
    const lb = new elbv2.ApplicationLoadBalancer(this, 'LB', {
      vpc,
      internetFacing: true
    });

    const listener = lb.addListener('Listener', {
      port: 80
    });

    listener.addTargets('ECS', {
      port: 80,
      targets: [service],
      healthCheck: {
        path: '/health',
        interval: cdk.Duration.seconds(30)
      }
    });

    // Output the load balancer URL
    new cdk.CfnOutput(this, 'LoadBalancerDNS', {
      value: lb.loadBalancerDnsName
    });
  }
}`}
                language="typescript"
              />
            </div>
          </div>

          {/* Monitoring & Observability */}
          <div id="monitoring">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              📊 Monitoring & Observability
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Metrics</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Numerical measurements collected over time
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="text-gray-700">• CloudWatch Metrics</li>
                  <li className="text-gray-700">• Custom metrics</li>
                  <li className="text-gray-700">• Dashboards</li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Logs</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Textual records of events and activities
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="text-gray-700">• CloudWatch Logs</li>
                  <li className="text-gray-700">• Log groups & streams</li>
                  <li className="text-gray-700">• Logs Insights</li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Traces</h3>
                <p className="text-gray-700 text-sm mb-3">
                  End-to-end request flow through distributed systems
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="text-gray-700">• AWS X-Ray</li>
                  <li className="text-gray-700">• Service maps</li>
                  <li className="text-gray-700">• Performance analysis</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoring Best Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">What to Monitor</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700">Application metrics (requests, errors, latency)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700">Infrastructure metrics (CPU, memory, disk)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700">Business metrics (signups, revenue, conversions)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700">Security metrics (failed logins, suspicious activity)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">How to Monitor</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700">Set meaningful alarms with appropriate thresholds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700">Create dashboards for different stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700">Use composite alarms for complex conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700">Implement anomaly detection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Deployment Strategies */}
          <div id="deployment">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              🚀 Deployment Strategies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Blue/Green Deployment</h3>
                <p className="text-gray-700 mb-4">
                  Run two identical environments (blue and green). Deploy to green, test, then switch traffic.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Zero downtime</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Easy rollback</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-700">Double infrastructure cost</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Canary Deployment</h3>
                <p className="text-gray-700 mb-4">
                  Gradually shift traffic to new version (5%, 25%, 50%, 100%) while monitoring metrics.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Reduced risk</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Real user testing</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-700">Slower rollout</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rolling Deployment</h3>
                <p className="text-gray-700 mb-4">
                  Update instances in batches, one at a time, until all are updated.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">No extra infrastructure</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Gradual rollout</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-700">Rollback takes time</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Immutable Deployment</h3>
                <p className="text-gray-700 mb-4">
                  Deploy new version to fresh instances, then terminate old instances.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Clean state</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Easy rollback</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-700">Temporary capacity increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps Tools Comparison */}
          <div id="tools">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              🛠️ DevOps Tools on AWS
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">AWS Service</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Alternative</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Source Control</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">CodeCommit</td>
                    <td className="px-6 py-4 text-sm text-gray-600">GitHub, GitLab</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Git repositories</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Build</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">CodeBuild</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Jenkins, CircleCI</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Compile & test code</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Deploy</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">CodeDeploy</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Spinnaker, ArgoCD</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Automated deployments</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Pipeline</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">CodePipeline</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Jenkins, GitLab CI</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Orchestrate CI/CD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Infrastructure as Code</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">CloudFormation, CDK</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Terraform, Pulumi</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Define infrastructure</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Monitoring</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">CloudWatch</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Datadog, Prometheus</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Metrics & logs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Tracing</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">X-Ray</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Jaeger, Zipkin</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Distributed tracing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Container Registry</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">ECR</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Docker Hub, Harbor</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Store container images</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Section
        title="Ready to Practice?"
        description="Try out these DevOps concepts in our interactive playground"
        className="bg-gradient-to-r from-amber-50 to-yellow-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/playground" className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Code Playground
            </h3>
            <p className="text-gray-600">
              Practice CI/CD pipelines and IaC with interactive examples
            </p>
          </Link>

          <Link href="/services" className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              Service Documentation
            </h3>
            <p className="text-gray-600">
              Deep dive into CodePipeline, CodeBuild, CloudFormation, and more
            </p>
          </Link>

          <Link href="/interview" className="block p-8 bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all group">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              DevOps Interviews
            </h3>
            <p className="text-gray-600">
              Practice interview questions on CI/CD, IaC, and DevOps best practices
            </p>
          </Link>
        </div>
      </Section>
    </div>
  );
}
