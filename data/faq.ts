export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export const faqs: FAQ[] = [
  {
    id: 'what-is-aws',
    question: 'What is AWS and why should I learn it?',
    answer: 'Amazon Web Services (AWS) is a comprehensive cloud computing platform that offers over 200 services including compute, storage, databases, networking, and more. Learning AWS is valuable because: (1) Cloud skills are in high demand with competitive salaries, (2) AWS is the market leader with the largest cloud market share, (3) It enables you to build scalable applications without managing physical infrastructure, and (4) Most modern companies use cloud services for their applications.',
    category: 'Getting Started',
    tags: ['aws', 'cloud', 'career']
  },
  {
    id: 'which-language',
    question: 'Which programming language should I learn for AWS?',
    answer: 'The best language depends on your goals, but Python is highly recommended for AWS development because: (1) It has excellent AWS SDK support (Boto3), (2) It\'s widely used for Lambda functions, data processing, and automation, (3) It has a gentle learning curve. JavaScript/Node.js is also popular for serverless applications. Java, Go, and C# are great for enterprise applications. The AWS CLI uses Bash scripting.',
    category: 'Getting Started',
    tags: ['python', 'programming', 'languages']
  },
  {
    id: 'free-tier',
    question: 'How can I practice AWS without incurring costs?',
    answer: 'AWS offers a Free Tier that includes: (1) Always Free services like Lambda (1 million requests/month), DynamoDB (25GB storage), and CloudWatch, (2) 12 Months Free including 750 hours of EC2 t2.micro, 5GB of S3 storage, and RDS, (3) Free Trials for services like SageMaker. Always set up billing alerts, use AWS Budgets, and terminate resources after practice. Many services have generous free tiers perfect for learning.',
    category: 'Getting Started',
    tags: ['free-tier', 'cost', 'practice']
  },
  {
    id: 'certification-worth-it',
    question: 'Are AWS certifications worth it?',
    answer: 'Yes, AWS certifications are valuable for several reasons: (1) They validate your technical skills to employers, (2) Certified professionals earn 25% more on average, (3) They provide structured learning paths, (4) Many companies require or prefer certified candidates, (5) They help you stay updated with AWS services. Start with Cloud Practitioner (foundational), then pursue Associate level based on your role (Solutions Architect, Developer, or SysOps).',
    category: 'Certifications',
    tags: ['certification', 'career', 'salary']
  },
  {
    id: 'serverless-vs-containers',
    question: 'When should I use serverless vs containers?',
    answer: 'Choose serverless (Lambda) when: (1) You have unpredictable or sporadic traffic, (2) You want zero server management, (3) Your functions run for less than 15 minutes, (4) You want pay-per-execution pricing. Choose containers (ECS/EKS) when: (1) You have consistent traffic, (2) You need long-running processes, (3) You require specific runtime environments, (4) You have complex applications with multiple dependencies. Both can coexist in the same architecture.',
    category: 'Architecture',
    tags: ['serverless', 'containers', 'lambda', 'ecs']
  },
  {
    id: 'rds-vs-dynamodb',
    question: 'Should I use RDS or DynamoDB?',
    answer: 'Choose RDS (relational) when: (1) You need complex queries and JOINs, (2) You have structured data with relationships, (3) You require ACID transactions, (4) Your team knows SQL. Choose DynamoDB (NoSQL) when: (1) You need millisecond latency at any scale, (2) You have simple access patterns (key-value, document), (3) You want automatic scaling, (4) Your data doesn\'t require complex relationships. Consider your access patterns first.',
    category: 'Databases',
    tags: ['rds', 'dynamodb', 'database', 'nosql']
  },
  {
    id: 'cold-start',
    question: 'How can I reduce Lambda cold starts?',
    answer: 'Strategies to reduce Lambda cold starts: (1) Use Provisioned Concurrency for critical functions, (2) Minimize deployment package size, (3) Use Lambda layers for dependencies, (4) Choose faster runtimes (Python, Node.js over Java), (5) Initialize SDK clients outside the handler, (6) Use ARM64 architecture (Graviton2), (7) Keep functions warm with scheduled pings (use sparingly), (8) Consider Lambda SnapStart for Java functions.',
    category: 'Lambda',
    tags: ['lambda', 'performance', 'cold-start']
  },
  {
    id: 'security-basics',
    question: 'What are the basic security practices for AWS?',
    answer: 'Essential AWS security practices: (1) Enable MFA on root account and IAM users, (2) Follow least privilege principle for IAM permissions, (3) Never hardcode credentials - use IAM roles, (4) Enable CloudTrail for audit logging, (5) Use encryption at rest and in transit, (6) Implement VPC security groups and NACLs properly, (7) Regularly rotate credentials, (8) Use AWS Secrets Manager for sensitive data, (9) Enable GuardDuty for threat detection, (10) Regular security audits with AWS Config.',
    category: 'Security',
    tags: ['security', 'iam', 'best-practices']
  },
  {
    id: 'cost-optimization',
    question: 'How can I reduce my AWS costs?',
    answer: 'Cost optimization strategies: (1) Right-size instances using Cost Explorer recommendations, (2) Use Reserved Instances or Savings Plans for predictable workloads (up to 72% savings), (3) Implement Auto Scaling to match demand, (4) Delete unused resources (EBS volumes, Elastic IPs, snapshots), (5) Use S3 Intelligent-Tiering or lifecycle policies, (6) Stop/start development instances during off-hours, (7) Use Spot Instances for fault-tolerant workloads, (8) Enable Cost Allocation Tags, (9) Set up billing alerts.',
    category: 'Cost',
    tags: ['cost', 'optimization', 'savings']
  },
  {
    id: 'vpc-basics',
    question: 'Do I need to understand VPC for AWS development?',
    answer: 'Yes, VPC knowledge is crucial because: (1) Most AWS resources deploy into VPCs, (2) It affects security, performance, and cost, (3) You need to understand subnets, route tables, and security groups, (4) It\'s essential for production deployments, (5) VPC is heavily tested in AWS certifications. Key concepts: public vs private subnets, NAT gateways, security groups vs NACLs, VPC peering. Start with default VPC for learning, then create custom VPCs.',
    category: 'Networking',
    tags: ['vpc', 'networking', 'fundamentals']
  },
  {
    id: 'monolith-to-microservices',
    question: 'How do I migrate from monolith to microservices on AWS?',
    answer: 'Migration approach: (1) Start by identifying bounded contexts in your monolith, (2) Extract one service at a time (strangler pattern), (3) Use API Gateway for unified entry point, (4) Implement service discovery (ECS Service Discovery or App Mesh), (5) Use managed databases per service (RDS, DynamoDB), (6) Implement asynchronous communication with SQS/SNS/EventBridge, (7) Use ECS or EKS for container orchestration, (8) Implement proper monitoring with CloudWatch and X-Ray, (9) Start with the least coupled services first.',
    category: 'Architecture',
    tags: ['microservices', 'migration', 'architecture']
  },
  {
    id: 'ci-cd-setup',
    question: 'What\'s the best way to set up CI/CD on AWS?',
    answer: 'CI/CD setup options: (1) AWS-native: CodePipeline + CodeBuild + CodeDeploy (tight AWS integration), (2) GitHub Actions + AWS (popular, easy to start), (3) Jenkins on EC2 (more control, complex), (4) GitLab CI/CD. Recommended flow: Source (GitHub/CodeCommit) → Build (CodeBuild/GitHub Actions) → Test (automated tests) → Deploy (CodeDeploy to EC2/ECS/Lambda). Use Infrastructure as Code (CloudFormation/CDK) for deployment. Implement blue-green or canary deployments for zero-downtime.',
    category: 'DevOps',
    tags: ['cicd', 'devops', 'deployment']
  },
  {
    id: 'multi-region',
    question: 'When should I deploy to multiple AWS regions?',
    answer: 'Deploy multi-region when: (1) You need low latency for global users, (2) You require disaster recovery with low RTO/RPO, (3) Compliance requires data residency, (4) You want active-active or active-passive setup. Considerations: (1) Data replication strategy (S3 CRR, DynamoDB Global Tables, RDS read replicas), (2) Route 53 for traffic routing (latency-based, geolocation), (3) Increased complexity and cost, (4) Data consistency challenges. Start single-region, add regions as needed.',
    category: 'Architecture',
    tags: ['multi-region', 'disaster-recovery', 'global']
  },
  {
    id: 'monitoring',
    question: 'What monitoring tools should I use on AWS?',
    answer: 'Essential monitoring stack: (1) CloudWatch for metrics, logs, and alarms (built-in), (2) X-Ray for distributed tracing and performance, (3) CloudTrail for API audit logs, (4) VPC Flow Logs for network traffic, (5) AWS Config for configuration tracking. Also consider: GuardDuty for security threats, Cost Explorer for cost analysis, Service Health Dashboard for AWS status. Set up dashboards, alarms, and SNS notifications. Use structured logging and log aggregation.',
    category: 'DevOps',
    tags: ['monitoring', 'cloudwatch', 'observability']
  },
  {
    id: 'learning-path',
    question: 'What\'s the best learning path for AWS development?',
    answer: 'Recommended path: (1) Learn cloud computing basics and AWS fundamentals, (2) Set up AWS account and understand billing, (3) Master IAM and security basics, (4) Learn core services: EC2, S3, VPC, RDS, (5) Learn serverless: Lambda, API Gateway, DynamoDB, (6) Practice with hands-on projects, (7) Learn Infrastructure as Code (CloudFormation/CDK), (8) Understand CI/CD and DevOps practices, (9) Learn monitoring and optimization, (10) Pursue AWS certification. Focus on building projects throughout.',
    category: 'Getting Started',
    tags: ['learning', 'path', 'beginners']
  }
];

export const faqCategories = [
  'All',
  'Getting Started',
  'Certifications',
  'Architecture',
  'Databases',
  'Lambda',
  'Security',
  'Cost',
  'Networking',
  'DevOps'
];
