export interface LearningStep {
  title: string;
  description: string;
  duration: string;
  resources: {
    type: 'internal' | 'external';
    title: string;
    url: string;
  }[];
  completed?: boolean;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon: string;
  goals: string[];
  prerequisites: string[];
  steps: LearningStep[];
  certifications?: string[];
}

export const learningPaths: LearningPath[] = [
  {
    id: 'cloud-practitioner',
    title: 'AWS Cloud Practitioner',
    description: 'Start your AWS journey with fundamental cloud concepts and AWS services overview',
    level: 'Beginner',
    duration: '4-6 weeks',
    icon: '🌱',
    goals: [
      'Understand cloud computing fundamentals',
      'Learn basic AWS services and their use cases',
      'Prepare for AWS Certified Cloud Practitioner exam',
      'Make informed decisions about AWS service selection'
    ],
    prerequisites: [
      'Basic understanding of IT concepts',
      'No prior cloud experience required'
    ],
    steps: [
      {
        title: 'Cloud Computing Fundamentals',
        description: 'Learn the basics of cloud computing, deployment models, and service models (IaaS, PaaS, SaaS)',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'AWS Basics', url: '/basics' },
          { type: 'internal', title: 'AWS Glossary', url: '/glossary' }
        ]
      },
      {
        title: 'Core AWS Services',
        description: 'Explore compute (EC2), storage (S3), and database (RDS, DynamoDB) services',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'EC2 Documentation', url: '/services/ec2' },
          { type: 'internal', title: 'S3 Documentation', url: '/services/s3' },
          { type: 'internal', title: 'DynamoDB Documentation', url: '/services/dynamodb' }
        ]
      },
      {
        title: 'Security and Compliance',
        description: 'Understand IAM, security best practices, and AWS compliance programs',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'IAM Documentation', url: '/services/iam' },
          { type: 'internal', title: 'Cheat Sheets', url: '/cheatsheets' }
        ]
      },
      {
        title: 'Pricing and Support',
        description: 'Learn AWS pricing models, cost management, and support plans',
        duration: '3 days',
        resources: [
          { type: 'internal', title: 'Service Comparison', url: '/compare' }
        ]
      },
      {
        title: 'Practice and Exam Prep',
        description: 'Take practice tests and review key concepts',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'Interview Questions', url: '/interview' },
          { type: 'internal', title: 'Code Playground', url: '/playground' }
        ]
      }
    ],
    certifications: ['AWS Certified Cloud Practitioner']
  },
  {
    id: 'solutions-architect',
    title: 'Solutions Architect Associate',
    description: 'Design and deploy scalable, highly available systems on AWS',
    level: 'Intermediate',
    duration: '8-12 weeks',
    icon: '🏗️',
    goals: [
      'Design resilient and scalable architectures',
      'Implement secure applications and architectures',
      'Define solutions based on customer requirements',
      'Prepare for AWS Solutions Architect Associate exam'
    ],
    prerequisites: [
      'One year of hands-on experience with AWS',
      'Understanding of core AWS services',
      'Basic networking knowledge'
    ],
    steps: [
      {
        title: 'Advanced Compute Services',
        description: 'Deep dive into EC2, Lambda, ECS, EKS, and container services',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'Lambda Documentation', url: '/services/lambda' },
          { type: 'internal', title: 'ECS Documentation', url: '/services/ecs' },
          { type: 'internal', title: 'EKS Documentation', url: '/services/eks' }
        ]
      },
      {
        title: 'Storage and Databases',
        description: 'Master S3, EBS, EFS, RDS, Aurora, DynamoDB, and ElastiCache',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'S3 Documentation', url: '/services/s3' },
          { type: 'internal', title: 'RDS Documentation', url: '/services/rds' },
          { type: 'internal', title: 'Storage Comparison', url: '/compare' }
        ]
      },
      {
        title: 'Networking and Content Delivery',
        description: 'Learn VPC, Route 53, CloudFront, and networking best practices',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'CloudFront Documentation', url: '/services/cloudfront' },
          { type: 'internal', title: 'Route 53 Documentation', url: '/services/route53' }
        ]
      },
      {
        title: 'Security and Identity',
        description: 'Implement IAM, KMS, Secrets Manager, and security best practices',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'IAM Documentation', url: '/services/iam' },
          { type: 'internal', title: 'Secrets Manager Documentation', url: '/services/secrets-manager' }
        ]
      },
      {
        title: 'High Availability and Scalability',
        description: 'Design fault-tolerant systems with load balancers, auto-scaling, and multi-AZ deployments',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'DevOps Guide', url: '/devops' }
        ]
      },
      {
        title: 'Practice Architecture Design',
        description: 'Work on real-world scenarios and practice exam questions',
        duration: '3 weeks',
        resources: [
          { type: 'internal', title: 'Code Playground', url: '/playground' },
          { type: 'internal', title: 'Interview Prep', url: '/interview' }
        ]
      }
    ],
    certifications: ['AWS Certified Solutions Architect – Associate']
  },
  {
    id: 'developer-associate',
    title: 'Developer Associate',
    description: 'Develop and maintain AWS-based applications with best practices',
    level: 'Intermediate',
    duration: '8-10 weeks',
    icon: '💻',
    goals: [
      'Develop applications using AWS services',
      'Use AWS SDKs to interact with AWS services',
      'Implement CI/CD pipelines',
      'Prepare for AWS Certified Developer Associate exam'
    ],
    prerequisites: [
      'Proficiency in at least one programming language',
      'Understanding of core AWS services',
      'Basic understanding of application lifecycle'
    ],
    steps: [
      {
        title: 'AWS SDK and CLI',
        description: 'Master AWS SDKs (Python/Boto3, Node.js, Java) and CLI for programmatic access',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'Cheat Sheets', url: '/cheatsheets' },
          { type: 'internal', title: 'Code Playground', url: '/playground' }
        ]
      },
      {
        title: 'Serverless Development',
        description: 'Build serverless applications with Lambda, API Gateway, and DynamoDB',
        duration: '3 weeks',
        resources: [
          { type: 'internal', title: 'Lambda Documentation', url: '/services/lambda' },
          { type: 'internal', title: 'API Gateway Documentation', url: '/services/api-gateway' },
          { type: 'internal', title: 'DynamoDB Documentation', url: '/services/dynamodb' }
        ]
      },
      {
        title: 'Container Development',
        description: 'Deploy containerized applications with ECS and EKS',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'ECS Documentation', url: '/services/ecs' },
          { type: 'internal', title: 'EKS Documentation', url: '/services/eks' }
        ]
      },
      {
        title: 'CI/CD Pipelines',
        description: 'Implement automated deployment pipelines with CodePipeline, CodeBuild, and CodeDeploy',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'CodePipeline Documentation', url: '/services/codepipeline' },
          { type: 'internal', title: 'DevOps Guide', url: '/devops' }
        ]
      },
      {
        title: 'Monitoring and Debugging',
        description: 'Use CloudWatch, X-Ray, and CloudTrail for application monitoring',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'DevOps Guide', url: '/devops' }
        ]
      },
      {
        title: 'Hands-on Projects',
        description: 'Build complete applications and practice coding scenarios',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'Code Playground', url: '/playground' },
          { type: 'internal', title: 'Interview Prep', url: '/interview' }
        ]
      }
    ],
    certifications: ['AWS Certified Developer – Associate']
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer Professional',
    description: 'Master AWS DevOps practices for provisioning, operating, and managing systems',
    level: 'Advanced',
    duration: '12-16 weeks',
    icon: '🚀',
    goals: [
      'Implement and manage continuous delivery systems',
      'Automate security controls and governance processes',
      'Define and deploy monitoring, metrics, and logging systems',
      'Prepare for AWS Certified DevOps Engineer Professional exam'
    ],
    prerequisites: [
      'AWS Certified Developer or SysOps Administrator Associate',
      'Experience with infrastructure as code',
      'Strong understanding of Linux/Unix administration'
    ],
    steps: [
      {
        title: 'Infrastructure as Code',
        description: 'Master CloudFormation, CDK, and Terraform for infrastructure automation',
        duration: '3 weeks',
        resources: [
          { type: 'internal', title: 'CloudFormation Documentation', url: '/services/cloudformation' },
          { type: 'internal', title: 'DevOps Guide', url: '/devops' },
          { type: 'internal', title: 'Cheat Sheets', url: '/cheatsheets' }
        ]
      },
      {
        title: 'Advanced CI/CD',
        description: 'Implement complex deployment strategies: blue/green, canary, rolling deployments',
        duration: '3 weeks',
        resources: [
          { type: 'internal', title: 'DevOps Guide', url: '/devops' },
          { type: 'internal', title: 'CodePipeline Documentation', url: '/services/codepipeline' }
        ]
      },
      {
        title: 'Monitoring and Observability',
        description: 'Set up comprehensive monitoring with CloudWatch, X-Ray, and third-party tools',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'DevOps Guide', url: '/devops' }
        ]
      },
      {
        title: 'Configuration Management',
        description: 'Use Systems Manager, OpsWorks, and configuration management tools',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'DevOps Guide', url: '/devops' }
        ]
      },
      {
        title: 'High Availability and Disaster Recovery',
        description: 'Design and implement fault-tolerant systems and disaster recovery strategies',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'Service Comparison', url: '/compare' }
        ]
      },
      {
        title: 'Security and Compliance',
        description: 'Implement automated security controls, compliance scanning, and governance',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'IAM Documentation', url: '/services/iam' }
        ]
      },
      {
        title: 'Practice Scenarios',
        description: 'Work through complex real-world DevOps scenarios',
        duration: '2-4 weeks',
        resources: [
          { type: 'internal', title: 'Interview Prep', url: '/interview' },
          { type: 'internal', title: 'Code Playground', url: '/playground' }
        ]
      }
    ],
    certifications: ['AWS Certified DevOps Engineer – Professional']
  },
  {
    id: 'serverless-specialist',
    title: 'Serverless Application Specialist',
    description: 'Build scalable serverless applications using AWS managed services',
    level: 'Intermediate',
    duration: '6-8 weeks',
    icon: 'λ',
    goals: [
      'Design event-driven serverless architectures',
      'Optimize Lambda functions for cost and performance',
      'Implement serverless CI/CD pipelines',
      'Build production-ready serverless applications'
    ],
    prerequisites: [
      'Experience with at least one programming language (Python, Node.js, or Java)',
      'Basic understanding of AWS core services',
      'Familiarity with REST APIs'
    ],
    steps: [
      {
        title: 'Lambda Deep Dive',
        description: 'Master Lambda functions, execution models, and optimization techniques',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'Lambda Documentation', url: '/services/lambda' },
          { type: 'internal', title: 'Code Playground', url: '/playground' }
        ]
      },
      {
        title: 'API Gateway and HTTP APIs',
        description: 'Build RESTful and HTTP APIs with API Gateway',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'API Gateway Documentation', url: '/services/api-gateway' }
        ]
      },
      {
        title: 'Event-Driven Architectures',
        description: 'Use EventBridge, SNS, SQS, and Kinesis for event processing',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'SNS Documentation', url: '/services/sns' },
          { type: 'internal', title: 'SQS Documentation', url: '/services/sqs' },
          { type: 'internal', title: 'Kinesis Documentation', url: '/services/kinesis' }
        ]
      },
      {
        title: 'Serverless Data Storage',
        description: 'Work with DynamoDB, S3, and Aurora Serverless',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'DynamoDB Documentation', url: '/services/dynamodb' },
          { type: 'internal', title: 'S3 Documentation', url: '/services/s3' }
        ]
      },
      {
        title: 'Serverless Framework and SAM',
        description: 'Use infrastructure as code tools for serverless deployment',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'CloudFormation Documentation', url: '/services/cloudformation' },
          { type: 'internal', title: 'DevOps Guide', url: '/devops' }
        ]
      },
      {
        title: 'Build Complete Applications',
        description: 'Create real-world serverless applications end-to-end',
        duration: '1-2 weeks',
        resources: [
          { type: 'internal', title: 'Code Playground', url: '/playground' },
          { type: 'internal', title: 'Interview Prep', url: '/interview' }
        ]
      }
    ]
  },
  {
    id: 'data-engineer',
    title: 'AWS Data Engineer',
    description: 'Design and build data pipelines and analytics solutions on AWS',
    level: 'Intermediate',
    duration: '10-12 weeks',
    icon: '📊',
    goals: [
      'Design and implement data ingestion pipelines',
      'Build data lakes and warehouses',
      'Perform data transformations and analytics',
      'Implement real-time data processing solutions'
    ],
    prerequisites: [
      'SQL and data modeling experience',
      'Understanding of ETL concepts',
      'Basic Python or Java programming knowledge'
    ],
    steps: [
      {
        title: 'Data Storage Solutions',
        description: 'Learn S3, RDS, Redshift, and data lake architecture',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'S3 Documentation', url: '/services/s3' },
          { type: 'internal', title: 'RDS Documentation', url: '/services/rds' }
        ]
      },
      {
        title: 'Data Ingestion',
        description: 'Use Kinesis, Data Pipeline, and Glue for data ingestion',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'Kinesis Documentation', url: '/services/kinesis' }
        ]
      },
      {
        title: 'ETL and Data Processing',
        description: 'Transform data with Glue, Lambda, and EMR',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'Lambda Documentation', url: '/services/lambda' }
        ]
      },
      {
        title: 'Analytics and Querying',
        description: 'Query data with Athena, Redshift Spectrum, and QuickSight',
        duration: '2 weeks',
        resources: [
          { type: 'internal', title: 'Athena Documentation', url: '/services/athena' }
        ]
      },
      {
        title: 'Machine Learning Integration',
        description: 'Integrate SageMaker and ML services into data pipelines',
        duration: '1 week',
        resources: [
          { type: 'internal', title: 'SageMaker Documentation', url: '/services/sagemaker' }
        ]
      },
      {
        title: 'End-to-End Projects',
        description: 'Build complete data pipelines and analytics solutions',
        duration: '1-3 weeks',
        resources: [
          { type: 'internal', title: 'Code Playground', url: '/playground' }
        ]
      }
    ]
  }
];

// Helper functions
export const getPathsByLevel = (level: 'Beginner' | 'Intermediate' | 'Advanced') => {
  return learningPaths.filter(path => path.level === level);
};

export const getPathById = (id: string) => {
  return learningPaths.find(path => path.id === id);
};
