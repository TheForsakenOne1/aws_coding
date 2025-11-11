export interface BasicTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: string[];
  codeExample?: string;
  prerequisites?: string[];
}

export const awsBasics: BasicTopic[] = [
  {
    id: 'what-is-aws',
    title: 'What is AWS?',
    description: 'Understanding Amazon Web Services and cloud computing',
    icon: '☁️',
    content: [
      'AWS (Amazon Web Services) is a comprehensive cloud computing platform provided by Amazon that offers over 200 fully featured services from data centers globally.',
      'Key benefits of AWS:',
      '• Pay-as-you-go pricing: Only pay for what you use',
      '• Scalability: Scale up or down based on demand',
      '• Global infrastructure: Deploy applications worldwide in minutes',
      '• Security: Industry-leading security and compliance',
      '• Reliability: 99.99% uptime SLA for many services',
      '• Innovation: Access to cutting-edge technologies (AI/ML, IoT, etc.)',
      '',
      'AWS is used by millions of customers including startups, enterprises, and government agencies to lower costs, become more agile, and innovate faster.'
    ]
  },
  {
    id: 'aws-account-setup',
    title: 'AWS Account Setup',
    description: 'Creating and configuring your AWS account',
    icon: '👤',
    content: [
      'Setting up an AWS account is the first step to start using AWS services.',
      '',
      'Steps to create an AWS account:',
      '1. Go to aws.amazon.com and click "Create an AWS Account"',
      '2. Provide your email address and choose an AWS account name',
      '3. Enter your contact information',
      '4. Provide payment information (credit card required)',
      '5. Verify your identity via phone or SMS',
      '6. Choose a support plan (Basic is free)',
      '',
      'Important: Enable MFA (Multi-Factor Authentication) immediately for security!',
      '',
      'Free Tier: New AWS accounts get 12 months of free tier access to many services with usage limits.'
    ]
  },
  {
    id: 'aws-cli',
    title: 'AWS CLI Setup',
    description: 'Installing and configuring the AWS Command Line Interface',
    icon: '💻',
    content: [
      'The AWS CLI is a unified tool to manage AWS services from the command line.',
      '',
      'Installation:',
      '• macOS/Linux: curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"',
      '• Windows: Download MSI installer from AWS website',
      '• pip: pip install awscli',
      '',
      'Configuration:',
      '1. Create IAM user with programmatic access',
      '2. Download access keys',
      '3. Run: aws configure',
      '4. Enter Access Key ID, Secret Access Key, default region, and output format',
      '',
      'Best practices:',
      '• Never commit access keys to version control',
      '• Use IAM roles instead of access keys when possible',
      '• Rotate access keys regularly',
      '• Use AWS CLI profiles for multiple accounts'
    ],
    codeExample: `# Install AWS CLI (Linux/macOS)
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Configure AWS CLI
aws configure
# AWS Access Key ID: YOUR_ACCESS_KEY
# AWS Secret Access Key: YOUR_SECRET_KEY
# Default region name: us-east-1
# Default output format: json

# Test configuration
aws sts get-caller-identity

# Use named profiles
aws configure --profile dev
aws s3 ls --profile dev`
  },
  {
    id: 'aws-sdks',
    title: 'AWS SDKs',
    description: 'Using AWS SDKs in your programming language',
    icon: '📦',
    content: [
      'AWS provides SDKs for popular programming languages to interact with AWS services programmatically.',
      '',
      'Available SDKs:',
      '• Python (Boto3)',
      '• JavaScript/Node.js',
      '• Java',
      '• .NET',
      '• Go',
      '• Ruby',
      '• PHP',
      '• C++',
      '',
      'Key benefits:',
      '• Type-safe API calls',
      '• Automatic retries and error handling',
      '• Pagination support',
      '• Waiters for resource state changes',
      '• Built-in authentication',
      '',
      'All SDKs follow similar patterns: create a client, call methods, handle responses.'
    ],
    codeExample: `# Python (Boto3)
import boto3

s3 = boto3.client('s3')
response = s3.list_buckets()

// JavaScript (AWS SDK v3)
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const client = new S3Client({ region: "us-east-1" });
const command = new ListBucketsCommand({});
const response = await client.send(command);

# Go
import "github.com/aws/aws-sdk-go/aws/session"
import "github.com/aws/aws-sdk-go/service/s3"

sess := session.Must(session.NewSession())
svc := s3.New(sess)
result, err := svc.ListBuckets(nil)`
  },
  {
    id: 'iam-basics',
    title: 'IAM Fundamentals',
    description: 'Understanding AWS Identity and Access Management',
    icon: '🔒',
    content: [
      'IAM is the foundation of AWS security, controlling who can access what in your AWS account.',
      '',
      'Core concepts:',
      '• Users: Individual people or applications',
      '• Groups: Collections of users with shared permissions',
      '• Roles: Temporary identities for services or federated users',
      '• Policies: JSON documents defining permissions',
      '',
      'Policy structure:',
      '• Effect: Allow or Deny',
      '• Action: What operations are allowed (e.g., s3:GetObject)',
      '• Resource: Which resources the policy applies to',
      '• Condition: Optional conditions for when policy applies',
      '',
      'Best practices:',
      '• Apply least privilege principle',
      '• Use roles for applications running on AWS',
      '• Enable MFA for privileged users',
      '• Regularly audit permissions',
      '• Never share credentials'
    ],
    codeExample: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "192.0.2.0/24"
        }
      }
    }
  ]
}`
  },
  {
    id: 'vpc-basics',
    title: 'VPC Fundamentals',
    description: 'Understanding Virtual Private Cloud networking',
    icon: '🌐',
    content: [
      'Amazon VPC lets you provision a logically isolated section of the AWS cloud where you can launch resources.',
      '',
      'Key components:',
      '• Subnets: Segments of VPC IP address range',
      '• Route tables: Rules for routing network traffic',
      '• Internet Gateway: Connects VPC to the internet',
      '• NAT Gateway: Allows private subnets to access internet',
      '• Security Groups: Virtual firewalls for instances',
      '• Network ACLs: Stateless firewalls for subnets',
      '',
      'Subnet types:',
      '• Public subnet: Has route to Internet Gateway',
      '• Private subnet: No direct internet access',
      '',
      'CIDR blocks:',
      '• VPC: Typically /16 (e.g., 10.0.0.0/16)',
      '• Subnets: Typically /24 (e.g., 10.0.1.0/24)',
      '',
      'Best practices:',
      '• Use multiple Availability Zones',
      '• Separate public and private subnets',
      '• Use VPC Flow Logs for monitoring',
      '• Implement defense in depth with security groups and NACLs'
    ]
  },
  {
    id: 'regions-azs',
    title: 'Regions and Availability Zones',
    description: 'Understanding AWS global infrastructure',
    icon: '🗺️',
    content: [
      'AWS infrastructure is built around Regions and Availability Zones.',
      '',
      'Regions:',
      '• Geographic areas (e.g., us-east-1, eu-west-1)',
      '• Completely independent and isolated',
      '• Choose based on latency, compliance, and service availability',
      '• Currently 30+ regions worldwide',
      '',
      'Availability Zones (AZs):',
      '• Multiple isolated locations within each region',
      '• Connected with high-bandwidth, low-latency networking',
      '• Physically separate for fault tolerance',
      '• Each region has 2-6 AZs',
      '',
      'Edge Locations:',
      '• 400+ locations for CloudFront CDN',
      '• Closer to end users for low latency',
      '',
      'Design considerations:',
      '• Deploy across multiple AZs for high availability',
      '• Consider data residency requirements',
      '• Be aware of cross-region data transfer costs',
      '• Some services are regional, others are global'
    ]
  },
  {
    id: 'pricing-model',
    title: 'AWS Pricing Model',
    description: 'Understanding how AWS pricing works',
    icon: '💰',
    content: [
      'AWS uses a pay-as-you-go pricing model with no upfront costs or long-term commitments.',
      '',
      'Pricing models:',
      '• On-Demand: Pay for what you use, no commitment',
      '• Reserved Instances: 1 or 3-year commitment for significant discounts (up to 75%)',
      '• Spot Instances: Bid for unused capacity (up to 90% discount)',
      '• Savings Plans: Flexible pricing for consistent usage',
      '',
      'Cost components:',
      '• Compute: EC2 instances, Lambda invocations',
      '• Storage: S3, EBS, data transfer',
      '• Data transfer: Between regions, out to internet',
      '• Requests: API calls, database operations',
      '',
      'Cost optimization tools:',
      '• AWS Cost Explorer',
      '• AWS Budgets',
      '• AWS Trusted Advisor',
      '• Cost and Usage Reports',
      '',
      'Best practices:',
      '• Tag resources for cost allocation',
      '• Use Reserved Instances for predictable workloads',
      '• Right-size instances',
      '• Delete unused resources',
      '• Use S3 lifecycle policies',
      '• Monitor with CloudWatch and billing alarms'
    ]
  },
  {
    id: 'well-architected',
    title: 'AWS Well-Architected Framework',
    description: 'Design principles for cloud applications',
    icon: '🏛️',
    content: [
      'The AWS Well-Architected Framework helps you understand pros and cons of decisions while building on AWS.',
      '',
      'Six Pillars:',
      '',
      '1. Operational Excellence',
      '   • Perform operations as code',
      '   • Make frequent, small, reversible changes',
      '   • Anticipate failure',
      '   • Learn from operational failures',
      '',
      '2. Security',
      '   • Implement strong identity foundation',
      '   • Enable traceability',
      '   • Apply security at all layers',
      '   • Automate security best practices',
      '   • Protect data in transit and at rest',
      '',
      '3. Reliability',
      '   • Test recovery procedures',
      '   • Automatically recover from failure',
      '   • Scale horizontally',
      '   • Stop guessing capacity',
      '   • Manage change through automation',
      '',
      '4. Performance Efficiency',
      '   • Democratize advanced technologies',
      '   • Go global in minutes',
      '   • Use serverless architectures',
      '   • Experiment more often',
      '',
      '5. Cost Optimization',
      '   • Adopt consumption model',
      '   • Measure overall efficiency',
      '   • Analyze and attribute expenditure',
      '',
      '6. Sustainability',
      '   • Understand your impact',
      '   • Establish sustainability goals',
      '   • Maximize utilization',
      '   • Use managed services'
    ]
  },
  {
    id: 'cloudwatch',
    title: 'CloudWatch Monitoring',
    description: 'Monitoring and observability with CloudWatch',
    icon: '📊',
    content: [
      'Amazon CloudWatch provides monitoring and observability for AWS resources and applications.',
      '',
      'Key features:',
      '• Metrics: Collect and track metrics from AWS services',
      '• Logs: Centralized log management',
      '• Alarms: Automated actions based on thresholds',
      '• Dashboards: Visualize metrics and logs',
      '• Events/EventBridge: Respond to state changes',
      '• ServiceLens: End-to-end tracing',
      '',
      'Common metrics:',
      '• EC2: CPU, Network, Disk',
      '• Lambda: Invocations, Duration, Errors',
      '• DynamoDB: ReadCapacity, WriteCapacity',
      '• API Gateway: Count, Latency, 4XXError, 5XXError',
      '',
      'Best practices:',
      '• Set up alarms for critical metrics',
      '• Use CloudWatch Logs Insights for log analysis',
      '• Create custom dashboards',
      '• Enable detailed monitoring when needed',
      '• Use X-Ray for distributed tracing',
      '• Set up billing alarms'
    ],
    codeExample: `import boto3

cloudwatch = boto3.client('cloudwatch')

# Put custom metric
cloudwatch.put_metric_data(
    Namespace='MyApp',
    MetricData=[{
        'MetricName': 'PageViews',
        'Value': 100,
        'Unit': 'Count',
        'Timestamp': datetime.utcnow()
    }]
)

# Create alarm
cloudwatch.put_metric_alarm(
    AlarmName='HighCPU',
    ComparisonOperator='GreaterThanThreshold',
    EvaluationPeriods=2,
    MetricName='CPUUtilization',
    Namespace='AWS/EC2',
    Period=300,
    Statistic='Average',
    Threshold=80.0,
    ActionsEnabled=True,
    AlarmActions=['arn:aws:sns:region:account:topic']
)`
  },
  {
    id: 'cloudtrail',
    title: 'CloudTrail Auditing',
    description: 'Governance, compliance, and auditing with CloudTrail',
    icon: '🔍',
    content: [
      'AWS CloudTrail records AWS API calls and delivers log files for auditing and compliance.',
      '',
      'What CloudTrail logs:',
      '• Who made the API call',
      '• When the call was made',
      '• Source IP address',
      '• Request parameters',
      '• Response elements',
      '',
      'Use cases:',
      '• Security analysis',
      '• Resource change tracking',
      '• Compliance auditing',
      '• Troubleshooting',
      '• Detecting unusual activity',
      '',
      'Types of trails:',
      '• Management events: Control plane operations',
      '• Data events: Resource operations (S3 objects, Lambda invocations)',
      '• Insights events: Unusual API activity',
      '',
      'Best practices:',
      '• Enable CloudTrail in all regions',
      '• Encrypt log files with KMS',
      '• Enable log file validation',
      '• Integrate with CloudWatch Logs',
      '• Set up alerts for suspicious activity',
      '• Store logs in separate AWS account for security'
    ]
  }
];

export const prerequisites = [
  {
    title: 'Programming Knowledge',
    description: 'Familiarity with at least one programming language (Python, JavaScript, Java, etc.)',
    icon: '💻'
  },
  {
    title: 'Basic Networking',
    description: 'Understanding of IP addresses, DNS, HTTP/HTTPS, and basic networking concepts',
    icon: '🌐'
  },
  {
    title: 'Linux/Unix Basics',
    description: 'Command line experience and understanding of file systems',
    icon: '🐧'
  },
  {
    title: 'API Concepts',
    description: 'Knowledge of REST APIs, JSON, and HTTP methods',
    icon: '🔌'
  },
  {
    title: 'Version Control',
    description: 'Experience with Git for managing code',
    icon: '📚'
  }
];
