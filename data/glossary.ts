export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
  example?: string;
}

export const glossaryCategories = [
  'General',
  'Compute',
  'Storage',
  'Database',
  'Networking',
  'Security',
  'DevOps',
  'Serverless',
  'Containers',
  'Monitoring'
];

export const glossaryTerms: GlossaryTerm[] = [
  // General AWS Terms
  {
    term: 'AWS (Amazon Web Services)',
    definition: 'A comprehensive cloud computing platform provided by Amazon that offers over 200 services including compute, storage, database, networking, and more.',
    category: 'General',
    example: 'AWS provides infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS) offerings.'
  },
  {
    term: 'Region',
    definition: 'A physical geographical location where AWS has multiple data centers. Each region is completely independent and isolated from other regions to provide fault tolerance and stability.',
    category: 'General',
    relatedTerms: ['Availability Zone', 'Edge Location'],
    example: 'us-east-1 (N. Virginia), eu-west-1 (Ireland), ap-southeast-1 (Singapore)'
  },
  {
    term: 'Availability Zone (AZ)',
    definition: 'One or more discrete data centers with redundant power, networking, and connectivity within an AWS Region. AZs are isolated from each other but connected through low-latency links.',
    category: 'General',
    relatedTerms: ['Region', 'Multi-AZ'],
    example: 'us-east-1a, us-east-1b, us-east-1c are three AZs in the us-east-1 region'
  },
  {
    term: 'Edge Location',
    definition: 'A data center used by AWS services like CloudFront to cache content closer to end users for faster delivery. There are more edge locations than regions.',
    category: 'General',
    relatedTerms: ['CloudFront', 'CDN'],
    example: 'Over 400 edge locations worldwide for content delivery'
  },
  {
    term: 'ARN (Amazon Resource Name)',
    definition: 'A unique identifier for AWS resources that follows a standard format. Used to specify resources in IAM policies, API calls, and other AWS services.',
    category: 'General',
    example: 'arn:aws:s3:::my-bucket/object.txt or arn:aws:lambda:us-east-1:123456789012:function:my-function'
  },
  {
    term: 'Tags',
    definition: 'Key-value pairs assigned to AWS resources for organization, cost tracking, access control, and automation. Maximum 50 tags per resource.',
    category: 'General',
    example: 'Environment=Production, Project=WebApp, Owner=TeamA'
  },

  // Compute Terms
  {
    term: 'EC2 (Elastic Compute Cloud)',
    definition: 'Virtual servers in the cloud that provide scalable computing capacity. Users have complete control over the operating system and configurations.',
    category: 'Compute',
    relatedTerms: ['AMI', 'Instance Type', 'EBS'],
    example: 'Launch a t2.micro instance running Amazon Linux for a web server'
  },
  {
    term: 'AMI (Amazon Machine Image)',
    definition: 'A pre-configured template containing the operating system, application server, and applications needed to launch an EC2 instance.',
    category: 'Compute',
    relatedTerms: ['EC2', 'Snapshot'],
    example: 'Amazon Linux 2 AMI, Ubuntu 22.04 AMI, custom AMIs with pre-installed software'
  },
  {
    term: 'Instance Type',
    definition: 'Configurations of CPU, memory, storage, and networking capacity for EC2 instances. Organized into families optimized for different use cases.',
    category: 'Compute',
    relatedTerms: ['EC2'],
    example: 't3.medium (general purpose), c5.large (compute optimized), r5.xlarge (memory optimized)'
  },
  {
    term: 'Lambda',
    definition: 'Serverless compute service that runs code in response to events without requiring server management. Pay only for compute time consumed.',
    category: 'Serverless',
    relatedTerms: ['Serverless', 'Event-Driven'],
    example: 'Process S3 uploads, handle API requests, run scheduled tasks'
  },
  {
    term: 'Cold Start',
    definition: 'The initial latency when a Lambda function is invoked for the first time or after being idle. Occurs when AWS must provision a new execution environment.',
    category: 'Serverless',
    relatedTerms: ['Lambda', 'Warm Start'],
    example: 'First invocation takes 500ms (cold start), subsequent calls take 50ms (warm)'
  },
  {
    term: 'ECS (Elastic Container Service)',
    definition: 'Fully managed container orchestration service that supports Docker containers. Can run on EC2 instances or Fargate.',
    category: 'Containers',
    relatedTerms: ['Docker', 'Fargate', 'Task Definition'],
    example: 'Deploy a microservices application with multiple Docker containers'
  },
  {
    term: 'EKS (Elastic Kubernetes Service)',
    definition: 'Managed Kubernetes service that makes it easy to run Kubernetes on AWS without maintaining the control plane.',
    category: 'Containers',
    relatedTerms: ['Kubernetes', 'Pods', 'Nodes'],
    example: 'Run Kubernetes workloads with automatic updates and high availability'
  },
  {
    term: 'Fargate',
    definition: 'Serverless compute engine for containers that works with ECS and EKS. Removes the need to manage servers or clusters.',
    category: 'Containers',
    relatedTerms: ['ECS', 'EKS', 'Serverless'],
    example: 'Run containers without managing EC2 instances'
  },

  // Storage Terms
  {
    term: 'S3 (Simple Storage Service)',
    definition: 'Object storage service offering industry-leading scalability, data availability, security, and performance. Stores data as objects within buckets.',
    category: 'Storage',
    relatedTerms: ['Bucket', 'Object', 'Storage Class'],
    example: 'Store images, videos, backups, static website content'
  },
  {
    term: 'Bucket',
    definition: 'A container for objects stored in S3. Bucket names must be globally unique across all AWS accounts.',
    category: 'Storage',
    relatedTerms: ['S3', 'Object'],
    example: 'my-company-assets, user-uploads-prod, backup-bucket-2024'
  },
  {
    term: 'Storage Class',
    definition: 'Different tiers of S3 storage optimized for various access patterns and cost requirements.',
    category: 'Storage',
    relatedTerms: ['S3', 'Lifecycle Policy'],
    example: 'S3 Standard, S3 Intelligent-Tiering, S3 Glacier, S3 Glacier Deep Archive'
  },
  {
    term: 'EBS (Elastic Block Store)',
    definition: 'Block-level storage volumes for use with EC2 instances. Provides persistent storage that exists independently of EC2 instance life.',
    category: 'Storage',
    relatedTerms: ['EC2', 'Volume', 'Snapshot'],
    example: 'Attach a 100GB gp3 volume to an EC2 instance for database storage'
  },
  {
    term: 'EFS (Elastic File System)',
    definition: 'Fully managed NFS file system that can be mounted on multiple EC2 instances simultaneously. Automatically scales storage capacity.',
    category: 'Storage',
    relatedTerms: ['NFS', 'File System'],
    example: 'Share files across multiple web servers or use with Lambda'
  },
  {
    term: 'Snapshot',
    definition: 'Point-in-time backup of an EBS volume stored in S3. Incremental backups that only save changed blocks.',
    category: 'Storage',
    relatedTerms: ['EBS', 'Backup'],
    example: 'Create daily snapshots of production database volumes'
  },

  // Database Terms
  {
    term: 'RDS (Relational Database Service)',
    definition: 'Managed relational database service supporting multiple engines including MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB.',
    category: 'Database',
    relatedTerms: ['Database', 'Multi-AZ', 'Read Replica'],
    example: 'Host a MySQL database with automated backups and Multi-AZ deployment'
  },
  {
    term: 'DynamoDB',
    definition: 'Fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.',
    category: 'Database',
    relatedTerms: ['NoSQL', 'Partition Key', 'Sort Key'],
    example: 'Store user profiles, gaming leaderboards, IoT data'
  },
  {
    term: 'Partition Key',
    definition: 'The primary key attribute in DynamoDB that determines the partition where an item is stored. Also called hash key.',
    category: 'Database',
    relatedTerms: ['DynamoDB', 'Sort Key'],
    example: 'UserId as partition key in a Users table'
  },
  {
    term: 'Sort Key',
    definition: 'Optional secondary key in DynamoDB used with partition key to create a composite primary key. Enables range queries.',
    category: 'Database',
    relatedTerms: ['DynamoDB', 'Partition Key'],
    example: 'Timestamp as sort key to order items chronologically'
  },
  {
    term: 'Aurora',
    definition: 'MySQL and PostgreSQL-compatible relational database built for the cloud. Provides up to 5x performance improvement over standard MySQL.',
    category: 'Database',
    relatedTerms: ['RDS', 'Database'],
    example: 'Enterprise applications requiring high performance and availability'
  },
  {
    term: 'ElastiCache',
    definition: 'Fully managed in-memory caching service supporting Redis and Memcached. Improves application performance by caching frequently accessed data.',
    category: 'Database',
    relatedTerms: ['Redis', 'Memcached', 'Caching'],
    example: 'Cache database query results, session data, API responses'
  },

  // Networking Terms
  {
    term: 'VPC (Virtual Private Cloud)',
    definition: 'Logically isolated virtual network in AWS where you can launch resources. Provides complete control over network configuration.',
    category: 'Networking',
    relatedTerms: ['Subnet', 'Security Group', 'NACL'],
    example: 'Create a private network with public and private subnets'
  },
  {
    term: 'Subnet',
    definition: 'A range of IP addresses in your VPC. Can be public (internet accessible) or private (internal only).',
    category: 'Networking',
    relatedTerms: ['VPC', 'CIDR', 'Route Table'],
    example: 'Public subnet: 10.0.1.0/24, Private subnet: 10.0.2.0/24'
  },
  {
    term: 'Security Group',
    definition: 'Virtual firewall that controls inbound and outbound traffic for AWS resources. Stateful - return traffic is automatically allowed.',
    category: 'Security',
    relatedTerms: ['VPC', 'NACL', 'Firewall'],
    example: 'Allow HTTP (port 80) and HTTPS (port 443) from anywhere, SSH (port 22) from specific IP'
  },
  {
    term: 'NACL (Network Access Control List)',
    definition: 'Stateless firewall at the subnet level. Controls traffic in and out of subnets with numbered rules.',
    category: 'Networking',
    relatedTerms: ['VPC', 'Subnet', 'Security Group'],
    example: 'Block specific IP ranges or allow only certain protocols at subnet level'
  },
  {
    term: 'Internet Gateway',
    definition: 'Horizontally scaled, redundant, and highly available VPC component that allows communication between VPC and internet.',
    category: 'Networking',
    relatedTerms: ['VPC', 'NAT Gateway'],
    example: 'Attach to VPC to enable public subnet instances to access internet'
  },
  {
    term: 'NAT Gateway',
    definition: 'Managed Network Address Translation service that enables instances in private subnets to access internet while remaining private.',
    category: 'Networking',
    relatedTerms: ['VPC', 'Private Subnet'],
    example: 'Allow private subnet instances to download updates without exposing them'
  },
  {
    term: 'Route 53',
    definition: 'Highly available and scalable DNS web service. Routes users to applications using domain names.',
    category: 'Networking',
    relatedTerms: ['DNS', 'Hosted Zone'],
    example: 'Route example.com to load balancer, create health checks, traffic routing'
  },
  {
    term: 'CloudFront',
    definition: 'Content Delivery Network (CDN) service that securely delivers data, videos, applications, and APIs globally with low latency.',
    category: 'Networking',
    relatedTerms: ['CDN', 'Edge Location', 'Distribution'],
    example: 'Distribute website content globally for faster loading times'
  },
  {
    term: 'Load Balancer',
    definition: 'Distributes incoming traffic across multiple targets (EC2, containers, IP addresses) in multiple AZs. Types: ALB, NLB, CLB.',
    category: 'Networking',
    relatedTerms: ['ALB', 'NLB', 'Target Group'],
    example: 'Distribute web traffic across 5 EC2 instances in different AZs'
  },

  // Security Terms
  {
    term: 'IAM (Identity and Access Management)',
    definition: 'Service for securely controlling access to AWS resources. Manage users, groups, roles, and their permissions.',
    category: 'Security',
    relatedTerms: ['Role', 'Policy', 'User'],
    example: 'Create roles for EC2 instances, policies for S3 access, users for developers'
  },
  {
    term: 'IAM Role',
    definition: 'AWS identity with permission policies that determine what the identity can do. Can be assumed by AWS services or users.',
    category: 'Security',
    relatedTerms: ['IAM', 'Policy', 'Assume Role'],
    example: 'Lambda execution role with permission to access DynamoDB'
  },
  {
    term: 'IAM Policy',
    definition: 'JSON document that defines permissions. Specifies what actions are allowed or denied on which resources.',
    category: 'Security',
    relatedTerms: ['IAM', 'Permission'],
    example: '{"Effect": "Allow", "Action": "s3:GetObject", "Resource": "arn:aws:s3:::bucket/*"}'
  },
  {
    term: 'MFA (Multi-Factor Authentication)',
    definition: 'Additional layer of security requiring users to provide two or more verification factors to access AWS.',
    category: 'Security',
    relatedTerms: ['IAM', 'Authentication'],
    example: 'Password + authenticator app code for AWS console login'
  },
  {
    term: 'KMS (Key Management Service)',
    definition: 'Managed service for creating and controlling encryption keys used to encrypt data across AWS services.',
    category: 'Security',
    relatedTerms: ['Encryption', 'CMK'],
    example: 'Encrypt S3 objects, EBS volumes, RDS databases with KMS keys'
  },
  {
    term: 'Secrets Manager',
    definition: 'Service to securely store, retrieve, and rotate database credentials, API keys, and other secrets.',
    category: 'Security',
    relatedTerms: ['KMS', 'Credentials'],
    example: 'Store database passwords and automatically rotate them every 30 days'
  },

  // DevOps Terms
  {
    term: 'CloudFormation',
    definition: 'Infrastructure as Code service that allows you to model and provision AWS resources using JSON or YAML templates.',
    category: 'DevOps',
    relatedTerms: ['IaC', 'Stack', 'Template'],
    example: 'Define entire application stack (VPC, EC2, RDS) in a template'
  },
  {
    term: 'CDK (Cloud Development Kit)',
    definition: 'Software development framework for defining cloud infrastructure using familiar programming languages like TypeScript, Python, Java.',
    category: 'DevOps',
    relatedTerms: ['CloudFormation', 'IaC'],
    example: 'Define infrastructure using Python or TypeScript instead of YAML'
  },
  {
    term: 'CodePipeline',
    definition: 'Continuous integration and continuous delivery (CI/CD) service that automates build, test, and deploy phases.',
    category: 'DevOps',
    relatedTerms: ['CI/CD', 'CodeBuild', 'CodeDeploy'],
    example: 'Automatically deploy code from GitHub to production on every commit'
  },
  {
    term: 'Elastic Beanstalk',
    definition: 'Platform as a Service (PaaS) for deploying and scaling web applications. Handles infrastructure provisioning automatically.',
    category: 'DevOps',
    relatedTerms: ['PaaS', 'Deployment'],
    example: 'Deploy a Node.js app by uploading code - AWS handles servers, load balancing'
  },

  // Monitoring Terms
  {
    term: 'CloudWatch',
    definition: 'Monitoring and observability service that collects metrics, logs, and events from AWS resources and applications.',
    category: 'Monitoring',
    relatedTerms: ['Metrics', 'Logs', 'Alarms'],
    example: 'Monitor EC2 CPU usage, set alarms, view Lambda logs'
  },
  {
    term: 'CloudWatch Logs',
    definition: 'Service for monitoring, storing, and accessing log files from EC2, Lambda, CloudTrail, and other sources.',
    category: 'Monitoring',
    relatedTerms: ['CloudWatch', 'Log Group'],
    example: 'Centralize application logs from multiple servers for analysis'
  },
  {
    term: 'CloudWatch Alarm',
    definition: 'Watches a metric and triggers actions when threshold is breached. Can send notifications or perform auto-scaling.',
    category: 'Monitoring',
    relatedTerms: ['CloudWatch', 'SNS', 'Metric'],
    example: 'Alert when CPU usage exceeds 80% for 5 minutes'
  },
  {
    term: 'X-Ray',
    definition: 'Distributed tracing system that helps analyze and debug distributed applications in production.',
    category: 'Monitoring',
    relatedTerms: ['Tracing', 'Debugging'],
    example: 'Trace request flow through Lambda, API Gateway, DynamoDB to find bottlenecks'
  },
  {
    term: 'CloudTrail',
    definition: 'Service that logs all API calls made in AWS account for auditing, compliance, and security analysis.',
    category: 'Monitoring',
    relatedTerms: ['Audit', 'Logging'],
    example: 'Track who deleted an S3 bucket or modified a security group'
  }
];

// Helper functions
export const getTermsByCategory = (category: string) => {
  return glossaryTerms.filter(term => term.category === category);
};

export const searchTerms = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(lowerQuery) ||
    term.definition.toLowerCase().includes(lowerQuery)
  );
};
