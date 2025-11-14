export interface ArchitecturePattern {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  useCases: string[];
  components: string[];
  diagram: string;
  benefits: string[];
  considerations: string[];
  exampleImplementation: string;
}

export const architecturePatterns: ArchitecturePattern[] = [
  {
    id: 'three-tier-web-app',
    title: 'Three-Tier Web Application',
    description: 'Classic web application architecture with presentation, application, and database tiers',
    category: 'Web Applications',
    icon: '🏢',
    useCases: [
      'Traditional web applications',
      'E-commerce platforms',
      'Content management systems',
      'Enterprise applications'
    ],
    components: [
      'Route 53 for DNS',
      'CloudFront for CDN',
      'Application Load Balancer',
      'EC2 Auto Scaling Group',
      'RDS Multi-AZ database',
      'ElastiCache for caching'
    ],
    diagram: 'User → Route 53 → CloudFront → ALB → EC2 (App Tier) → RDS/ElastiCache (Data Tier)',
    benefits: [
      'Clear separation of concerns',
      'Scalable and highly available',
      'Easy to understand and maintain',
      'Well-established pattern'
    ],
    considerations: [
      'Can be more complex than needed for simple apps',
      'Requires careful capacity planning',
      'Database can become a bottleneck'
    ],
    exampleImplementation: 'Deploy React/Angular frontend on CloudFront, Node.js/Python backend on EC2 with ALB, PostgreSQL/MySQL on RDS Multi-AZ'
  },
  {
    id: 'serverless-api',
    title: 'Serverless API Architecture',
    description: 'Fully serverless REST API without managing servers',
    category: 'Serverless',
    icon: '⚡',
    useCases: [
      'Mobile backends',
      'Microservices',
      'Real-time data processing',
      'IoT applications'
    ],
    components: [
      'API Gateway',
      'AWS Lambda',
      'DynamoDB',
      'Cognito for authentication',
      'CloudWatch for monitoring'
    ],
    diagram: 'Client → API Gateway → Lambda → DynamoDB, with Cognito for auth',
    benefits: [
      'No server management',
      'Auto-scaling',
      'Pay per request',
      'High availability built-in'
    ],
    considerations: [
      'Cold start latency',
      'Stateless functions only',
      '15-minute Lambda timeout',
      'Vendor lock-in'
    ],
    exampleImplementation: 'Create REST API with API Gateway, Lambda functions for business logic, DynamoDB for data storage, Cognito User Pools for authentication'
  },
  {
    id: 'event-driven-architecture',
    title: 'Event-Driven Architecture',
    description: 'Loosely coupled services communicating through events',
    category: 'Microservices',
    icon: '🔄',
    useCases: [
      'Real-time data processing',
      'Order processing systems',
      'Notification systems',
      'Workflow automation'
    ],
    components: [
      'EventBridge or SNS',
      'SQS queues',
      'Lambda functions',
      'Step Functions for orchestration',
      'DynamoDB Streams'
    ],
    diagram: 'Event Source → EventBridge/SNS → SQS → Lambda consumers → downstream services',
    benefits: [
      'Loose coupling between services',
      'Easy to add new consumers',
      'Asynchronous processing',
      'Better fault isolation'
    ],
    considerations: [
      'Eventual consistency',
      'More complex debugging',
      'Message ordering challenges',
      'Potential message duplication'
    ],
    exampleImplementation: 'Use EventBridge for event routing, SQS for buffering, Lambda for processing, DynamoDB for state management'
  },
  {
    id: 'microservices',
    title: 'Microservices on ECS/EKS',
    description: 'Container-based microservices architecture',
    category: 'Microservices',
    icon: '📦',
    useCases: [
      'Complex applications',
      'Team independence',
      'Polyglot environments',
      'Service isolation'
    ],
    components: [
      'ECS or EKS for orchestration',
      'Application Load Balancer',
      'Service Discovery',
      'RDS/DynamoDB per service',
      'ElastiCache',
      'SQS/SNS for async communication'
    ],
    diagram: 'ALB → ECS/EKS Services → Service Discovery → Individual databases + message queues',
    benefits: [
      'Independent deployment',
      'Technology flexibility',
      'Better fault isolation',
      'Team autonomy'
    ],
    considerations: [
      'Operational complexity',
      'Distributed system challenges',
      'More expensive',
      'Service mesh may be needed'
    ],
    exampleImplementation: 'Deploy containers on ECS Fargate with ALB, use AWS Cloud Map for service discovery, separate RDS/DynamoDB per service'
  },
  {
    id: 'data-lake',
    title: 'Data Lake Architecture',
    description: 'Centralized repository for storing structured and unstructured data',
    category: 'Data Processing',
    icon: '💾',
    useCases: [
      'Big data analytics',
      'Machine learning',
      'Business intelligence',
      'Data warehousing'
    ],
    components: [
      'S3 for data storage',
      'AWS Glue for ETL',
      'Athena for queries',
      'QuickSight for visualization',
      'Lake Formation for governance'
    ],
    diagram: 'Data Sources → Kinesis/S3 → Glue ETL → S3 Data Lake → Athena/QuickSight',
    benefits: [
      'Store any type of data',
      'Cost-effective storage',
      'Scalable analytics',
      'Supports multiple analytics tools'
    ],
    considerations: [
      'Data governance complexity',
      'Schema-on-read challenges',
      'Query performance tuning',
      'Cost management'
    ],
    exampleImplementation: 'Use S3 with appropriate bucket structure (raw/processed/curated), Glue crawlers for schema discovery, Athena for ad-hoc queries'
  },
  {
    id: 'batch-processing',
    title: 'Batch Processing Pipeline',
    description: 'Process large volumes of data in batches',
    category: 'Data Processing',
    icon: '📊',
    useCases: [
      'ETL jobs',
      'Report generation',
      'Data validation',
      'Nightly data processing'
    ],
    components: [
      'AWS Batch or EMR',
      'S3 for data storage',
      'Step Functions for orchestration',
      'Lambda for triggers',
      'SNS for notifications'
    ],
    diagram: 'S3 trigger → Lambda → Step Functions → AWS Batch/EMR → processed data in S3',
    benefits: [
      'Cost-effective for large datasets',
      'Automated scheduling',
      'Error handling and retries',
      'Parallel processing'
    ],
    considerations: [
      'Not for real-time processing',
      'Longer processing times',
      'Resource provisioning needed',
      'Monitoring complexity'
    ],
    exampleImplementation: 'Use EventBridge to trigger Step Functions workflow, coordinate AWS Batch jobs, store results in S3, notify via SNS'
  },
  {
    id: 'static-website',
    title: 'Static Website Hosting',
    description: 'High-performance static website with global CDN',
    category: 'Web Applications',
    icon: '🌐',
    useCases: [
      'Landing pages',
      'Documentation sites',
      'Single-page applications',
      'Portfolio sites'
    ],
    components: [
      'S3 for hosting',
      'CloudFront for CDN',
      'Route 53 for DNS',
      'ACM for SSL',
      'Lambda@Edge for customization'
    ],
    diagram: 'User → Route 53 → CloudFront → S3 static content',
    benefits: [
      'Extremely cost-effective',
      'High performance',
      'Global distribution',
      'No server management'
    ],
    considerations: [
      'No server-side processing',
      'Limited dynamic content',
      'Build step required for SPAs',
      'API needed for dynamic features'
    ],
    exampleImplementation: 'Deploy React/Vue app to S3, configure CloudFront with custom domain and SSL, use Lambda@Edge for redirects'
  },
  {
    id: 'real-time-streaming',
    title: 'Real-Time Stream Processing',
    description: 'Process and analyze streaming data in real-time',
    category: 'Data Processing',
    icon: '🌊',
    useCases: [
      'Log analytics',
      'Real-time dashboards',
      'Fraud detection',
      'IoT data processing'
    ],
    components: [
      'Kinesis Data Streams',
      'Kinesis Data Analytics',
      'Lambda for processing',
      'DynamoDB for state',
      'OpenSearch for analytics'
    ],
    diagram: 'Data producers → Kinesis → Lambda/Analytics → DynamoDB/OpenSearch → dashboard',
    benefits: [
      'Real-time insights',
      'Scalable ingestion',
      'Multiple consumers',
      'Built-in buffering'
    ],
    considerations: [
      'More complex than batch',
      'Ordering guarantees needed',
      'Cost at high volume',
      'State management challenges'
    ],
    exampleImplementation: 'Ingest data via Kinesis streams, process with Lambda or Kinesis Analytics, store in DynamoDB, visualize with QuickSight'
  },
  {
    id: 'multi-region-active-active',
    title: 'Multi-Region Active-Active',
    description: 'Application running simultaneously in multiple regions',
    category: 'High Availability',
    icon: '🌍',
    useCases: [
      'Global applications',
      'Disaster recovery',
      'Low latency worldwide',
      'High availability requirements'
    ],
    components: [
      'Route 53 with health checks',
      'CloudFront',
      'Application in multiple regions',
      'DynamoDB Global Tables',
      'Aurora Global Database'
    ],
    diagram: 'Route 53 → Multiple regions (active) with DynamoDB Global Tables/Aurora Global for data sync',
    benefits: [
      'Lowest latency globally',
      'Highest availability',
      'Disaster recovery built-in',
      'Regional failover'
    ],
    considerations: [
      'Significantly more complex',
      'Higher costs',
      'Data consistency challenges',
      'Cross-region data transfer costs'
    ],
    exampleImplementation: 'Deploy application in us-east-1 and eu-west-1, use Route 53 latency routing, DynamoDB Global Tables for data replication'
  },
  {
    id: 'queue-based-load-leveling',
    title: 'Queue-Based Load Leveling',
    description: 'Use queues to handle traffic spikes and decouple components',
    category: 'Scalability',
    icon: '📬',
    useCases: [
      'Background job processing',
      'Order processing',
      'Email sending',
      'Image processing'
    ],
    components: [
      'SQS queues',
      'Lambda or EC2 workers',
      'DynamoDB for state',
      'CloudWatch for monitoring',
      'Dead Letter Queue'
    ],
    diagram: 'API → SQS → Lambda/EC2 workers → downstream processing',
    benefits: [
      'Handles traffic spikes',
      'Decouples producers/consumers',
      'Built-in retries',
      'Scales independently'
    ],
    considerations: [
      'Eventual consistency',
      'Message ordering if needed',
      'Dead letter queue monitoring',
      'Visibility timeout tuning'
    ],
    exampleImplementation: 'API Gateway puts messages in SQS, Lambda functions poll and process messages, failed messages go to DLQ'
  }
];

export const architectureCategories = [
  'All',
  'Web Applications',
  'Serverless',
  'Microservices',
  'Data Processing',
  'High Availability',
  'Scalability'
];
