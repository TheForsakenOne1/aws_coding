export interface ComparisonAttribute {
  label: string;
  values: Record<string, string | string[]>;
}

export interface ServiceComparison {
  id: string;
  title: string;
  description: string;
  services: string[];
  attributes: ComparisonAttribute[];
}

export const serviceComparisons: ServiceComparison[] = [
  {
    id: 'compute',
    title: 'Compute Services',
    description: 'Compare different AWS compute options',
    services: ['Lambda', 'EC2', 'ECS', 'EKS', 'Elastic Beanstalk'],
    attributes: [
      {
        label: 'Use Case',
        values: {
          'Lambda': 'Event-driven, serverless functions',
          'EC2': 'Full control over virtual machines',
          'ECS': 'Container orchestration with Docker',
          'EKS': 'Kubernetes container orchestration',
          'Elastic Beanstalk': 'Platform as a Service (PaaS)'
        }
      },
      {
        label: 'Pricing Model',
        values: {
          'Lambda': 'Pay per invocation and duration',
          'EC2': 'Pay per hour/second of instance runtime',
          'ECS': 'Pay for underlying EC2/Fargate resources',
          'EKS': '$0.10/hour per cluster + worker nodes',
          'Elastic Beanstalk': 'Free (pay for underlying resources)'
        }
      },
      {
        label: 'Scaling',
        values: {
          'Lambda': 'Automatic, instant scaling',
          'EC2': 'Manual or Auto Scaling Groups',
          'ECS': 'Auto Scaling with target tracking',
          'EKS': 'Horizontal Pod Autoscaler, Cluster Autoscaler',
          'Elastic Beanstalk': 'Auto Scaling with load balancing'
        }
      },
      {
        label: 'Management Overhead',
        values: {
          'Lambda': 'Very Low - Fully managed',
          'EC2': 'High - Full infrastructure control',
          'ECS': 'Medium - Managed orchestration',
          'EKS': 'Medium-High - Managed Kubernetes',
          'Elastic Beanstalk': 'Low - Platform managed'
        }
      },
      {
        label: 'Cold Start',
        values: {
          'Lambda': 'Yes (100-1000ms)',
          'EC2': 'No (always running)',
          'ECS': 'Minimal (containers pre-warmed)',
          'EKS': 'Minimal (pods running)',
          'Elastic Beanstalk': 'No (instances running)'
        }
      },
      {
        label: 'Best For',
        values: {
          'Lambda': ['Microservices', 'Event processing', 'APIs', 'Scheduled tasks'],
          'EC2': ['Traditional apps', 'Full OS control', 'Stateful workloads', 'High performance'],
          'ECS': ['Containerized apps', 'Microservices', 'Batch processing', 'AWS integration'],
          'EKS': ['Kubernetes workloads', 'Multi-cloud strategy', 'Complex orchestration', 'Portable apps'],
          'Elastic Beanstalk': ['Quick deployments', 'Standard web apps', 'Simple architecture', 'Beginners']
        }
      }
    ]
  },
  {
    id: 'storage',
    title: 'Storage Services',
    description: 'Compare different AWS storage solutions',
    services: ['S3', 'EBS', 'EFS', 'Glacier'],
    attributes: [
      {
        label: 'Storage Type',
        values: {
          'S3': 'Object storage',
          'EBS': 'Block storage (volumes)',
          'EFS': 'File storage (NFS)',
          'Glacier': 'Archive storage'
        }
      },
      {
        label: 'Use Case',
        values: {
          'S3': 'Static files, backups, data lakes',
          'EBS': 'EC2 instance storage, databases',
          'EFS': 'Shared file systems, content management',
          'Glacier': 'Long-term archives, compliance data'
        }
      },
      {
        label: 'Access Speed',
        values: {
          'S3': 'Fast (milliseconds)',
          'EBS': 'Very Fast (sub-millisecond)',
          'EFS': 'Fast (low milliseconds)',
          'Glacier': 'Slow (minutes to hours)'
        }
      },
      {
        label: 'Durability',
        values: {
          'S3': '99.999999999% (11 nines)',
          'EBS': '99.8-99.9% (with snapshots)',
          'EFS': '99.999999999% (11 nines)',
          'Glacier': '99.999999999% (11 nines)'
        }
      },
      {
        label: 'Cost ($/GB/month)',
        values: {
          'S3': '$0.023 (Standard)',
          'EBS': '$0.10 (gp3)',
          'EFS': '$0.30 (Standard)',
          'Glacier': '$0.004 (Flexible Retrieval)'
        }
      },
      {
        label: 'Scalability',
        values: {
          'S3': 'Unlimited',
          'EBS': 'Up to 64 TiB per volume',
          'EFS': 'Petabyte scale',
          'Glacier': 'Unlimited'
        }
      },
      {
        label: 'Access Method',
        values: {
          'S3': 'HTTP/S API, SDK, CLI',
          'EBS': 'Attached to EC2 as block device',
          'EFS': 'NFS mount on EC2/Lambda',
          'Glacier': 'API, SDK, CLI (retrieval jobs)'
        }
      }
    ]
  },
  {
    id: 'database',
    title: 'Database Services',
    description: 'Compare different AWS database options',
    services: ['DynamoDB', 'RDS', 'Aurora', 'ElastiCache'],
    attributes: [
      {
        label: 'Database Type',
        values: {
          'DynamoDB': 'NoSQL (Key-Value, Document)',
          'RDS': 'Relational (MySQL, PostgreSQL, etc.)',
          'Aurora': 'Relational (MySQL/PostgreSQL compatible)',
          'ElastiCache': 'In-memory (Redis, Memcached)'
        }
      },
      {
        label: 'Use Case',
        values: {
          'DynamoDB': 'High-scale apps, gaming, IoT',
          'RDS': 'Traditional RDBMS workloads',
          'Aurora': 'Enterprise apps, high performance',
          'ElastiCache': 'Caching, session store, real-time'
        }
      },
      {
        label: 'Performance',
        values: {
          'DynamoDB': 'Single-digit millisecond latency',
          'RDS': 'Depends on instance type',
          'Aurora': '5x faster than MySQL, 3x than PostgreSQL',
          'ElastiCache': 'Sub-millisecond latency'
        }
      },
      {
        label: 'Scaling',
        values: {
          'DynamoDB': 'Automatic, on-demand or provisioned',
          'RDS': 'Vertical (instance size), read replicas',
          'Aurora': 'Auto scaling storage, up to 15 read replicas',
          'ElastiCache': 'Manual cluster scaling'
        }
      },
      {
        label: 'Pricing Model',
        values: {
          'DynamoDB': 'Pay per request or provisioned capacity',
          'RDS': 'Pay per instance hour + storage',
          'Aurora': 'Pay per instance hour + I/O requests',
          'ElastiCache': 'Pay per node hour'
        }
      },
      {
        label: 'Multi-AZ Support',
        values: {
          'DynamoDB': 'Yes (built-in)',
          'RDS': 'Yes (optional)',
          'Aurora': 'Yes (default)',
          'ElastiCache': 'Yes (cluster mode)'
        }
      },
      {
        label: 'Backup & Recovery',
        values: {
          'DynamoDB': 'On-demand and PITR backups',
          'RDS': 'Automated backups, snapshots',
          'Aurora': 'Continuous backup, fast restore',
          'ElastiCache': 'Snapshots (Redis only)'
        }
      }
    ]
  },
  {
    id: 'messaging',
    title: 'Messaging Services',
    description: 'Compare AWS messaging and queue services',
    services: ['SQS', 'SNS', 'EventBridge', 'Kinesis'],
    attributes: [
      {
        label: 'Service Type',
        values: {
          'SQS': 'Message Queue',
          'SNS': 'Pub/Sub Notification',
          'EventBridge': 'Event Bus',
          'Kinesis': 'Real-time Data Streaming'
        }
      },
      {
        label: 'Use Case',
        values: {
          'SQS': 'Decouple microservices, async processing',
          'SNS': 'Fan-out notifications, alerts',
          'EventBridge': 'Event-driven architectures, integrations',
          'Kinesis': 'Real-time analytics, log processing'
        }
      },
      {
        label: 'Message Delivery',
        values: {
          'SQS': 'Pull-based (polling)',
          'SNS': 'Push-based (subscription)',
          'EventBridge': 'Push-based (rules)',
          'Kinesis': 'Pull-based (consumers)'
        }
      },
      {
        label: 'Message Retention',
        values: {
          'SQS': 'Up to 14 days',
          'SNS': 'No retention (immediate delivery)',
          'EventBridge': 'No retention (rule-based routing)',
          'Kinesis': 'Up to 365 days'
        }
      },
      {
        label: 'Ordering',
        values: {
          'SQS': 'FIFO queues available',
          'SNS': 'No ordering guarantee',
          'EventBridge': 'No ordering guarantee',
          'Kinesis': 'Strict ordering per shard'
        }
      },
      {
        label: 'Throughput',
        values: {
          'SQS': 'Unlimited (standard), 3000 msg/s (FIFO)',
          'SNS': 'Unlimited',
          'EventBridge': 'Unlimited',
          'Kinesis': '1000 records/s per shard'
        }
      },
      {
        label: 'Pricing',
        values: {
          'SQS': '$0.40 per million requests',
          'SNS': '$0.50 per million requests',
          'EventBridge': '$1.00 per million events',
          'Kinesis': '$0.015 per shard hour + PUT charges'
        }
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment & IaC',
    description: 'Compare infrastructure as code and deployment tools',
    services: ['CloudFormation', 'CDK', 'Terraform', 'Serverless Framework'],
    attributes: [
      {
        label: 'Tool Type',
        values: {
          'CloudFormation': 'AWS Native IaC',
          'CDK': 'AWS Programmatic IaC',
          'Terraform': 'Multi-cloud IaC',
          'Serverless Framework': 'Serverless-focused deployment'
        }
      },
      {
        label: 'Language',
        values: {
          'CloudFormation': 'JSON, YAML',
          'CDK': 'TypeScript, Python, Java, C#',
          'Terraform': 'HCL (HashiCorp Configuration Language)',
          'Serverless Framework': 'YAML + JavaScript/Python/etc.'
        }
      },
      {
        label: 'Learning Curve',
        values: {
          'CloudFormation': 'Medium - Verbose syntax',
          'CDK': 'Low-Medium - Familiar programming',
          'Terraform': 'Medium - New syntax to learn',
          'Serverless Framework': 'Low - Simple YAML config'
        }
      },
      {
        label: 'Cloud Support',
        values: {
          'CloudFormation': 'AWS only',
          'CDK': 'AWS only (with Terraform CDK for multi-cloud)',
          'Terraform': 'AWS, Azure, GCP, and 100+ providers',
          'Serverless Framework': 'AWS, Azure, GCP'
        }
      },
      {
        label: 'State Management',
        values: {
          'CloudFormation': 'AWS-managed stacks',
          'CDK': 'CloudFormation stacks (AWS-managed)',
          'Terraform': 'State files (local or remote)',
          'Serverless Framework': 'AWS CloudFormation stacks'
        }
      },
      {
        label: 'Best For',
        values: {
          'CloudFormation': ['AWS-only infrastructure', 'Complex dependencies', 'Enterprise compliance'],
          'CDK': ['Developers who prefer code', 'Type safety', 'Reusable components'],
          'Terraform': ['Multi-cloud deployments', 'Existing Terraform shops', 'Provider ecosystem'],
          'Serverless Framework': ['Serverless apps', 'Quick deployments', 'Lambda functions']
        }
      }
    ]
  }
];

// Helper to get comparison by ID
export const getComparisonById = (id: string) => {
  return serviceComparisons.find(comp => comp.id === id);
};

// Get all comparison categories
export const comparisonCategories = serviceComparisons.map(comp => ({
  id: comp.id,
  title: comp.title
}));
