export interface ServiceDocumentation {
  serviceId: string;
  architecturePatterns: ArchitecturePattern[];
  antiPatterns: AntiPattern[];
  troubleshooting: TroubleshootingGuide[];
  security: SecurityGuideline[];
  monitoring: MonitoringGuide[];
  costOptimization: CostTip[];
}

export interface ArchitecturePattern {
  title: string;
  description: string;
  diagram: string;
  useCase: string;
}

export interface AntiPattern {
  title: string;
  description: string;
  problem: string;
  solution: string;
}

export interface TroubleshootingGuide {
  issue: string;
  symptoms: string[];
  causes: string[];
  solutions: string[];
}

export interface SecurityGuideline {
  category: string;
  recommendations: string[];
}

export interface MonitoringGuide {
  metric: string;
  description: string;
  threshold: string;
  action: string;
}

export interface CostTip {
  tip: string;
  savings: string;
  implementation: string;
}

export const serviceDocumentation: ServiceDocumentation[] = [
  // Lambda Documentation
  {
    serviceId: 'lambda',
    architecturePatterns: [
      {
        title: 'Event-Driven Processing',
        description: 'Lambda functions triggered by events from various AWS services',
        diagram: `S3 → Lambda → DynamoDB
SNS → Lambda → SQS
EventBridge → Lambda → External API`,
        useCase: 'Process files uploaded to S3, handle notifications, or respond to scheduled events'
      },
      {
        title: 'API Backend Pattern',
        description: 'Serverless API using API Gateway and Lambda',
        diagram: `Client → API Gateway → Lambda → DynamoDB
                              ↓
                          CloudWatch Logs`,
        useCase: 'Build RESTful APIs without managing servers, automatic scaling'
      },
      {
        title: 'Stream Processing',
        description: 'Real-time data processing with Kinesis or DynamoDB Streams',
        diagram: `Kinesis Stream → Lambda → Elasticsearch
DynamoDB Stream → Lambda → Data Warehouse`,
        useCase: 'Real-time analytics, ETL pipelines, log processing'
      },
      {
        title: 'Fan-Out Pattern',
        description: 'Single event triggers multiple Lambda functions via SNS',
        diagram: `S3 Upload → SNS Topic → Lambda (Thumbnail)
                     ↓
                 Lambda (Metadata)
                     ↓
                 Lambda (Backup)`,
        useCase: 'Parallel processing of the same event for different purposes'
      }
    ],
    antiPatterns: [
      {
        title: 'Monolithic Lambda Functions',
        description: 'Single Lambda function handling multiple unrelated operations',
        problem: 'Difficult to maintain, debug, and scale. Increases cold start times and deployment complexity.',
        solution: 'Break into multiple focused Lambda functions. Each function should have a single responsibility. Use Step Functions for orchestration.'
      },
      {
        title: 'Synchronous Processing in Async Context',
        description: 'Waiting for long-running operations in Lambda instead of using async patterns',
        problem: 'Wastes Lambda execution time and costs. Risk of hitting 15-minute timeout.',
        solution: 'Use SQS for job queues, Step Functions for workflows, or event-driven architecture with SNS/EventBridge.'
      },
      {
        title: 'Not Using Layers',
        description: 'Packaging dependencies in every function deployment',
        problem: 'Large deployment packages, slow deployments, duplicated code across functions.',
        solution: 'Use Lambda Layers for shared dependencies and common code. Update layers independently of function code.'
      },
      {
        title: 'Storing State in /tmp',
        description: 'Relying on /tmp for persistent storage across invocations',
        problem: '/tmp is not guaranteed to persist. Data can be lost when container is destroyed.',
        solution: 'Use DynamoDB, S3, or ElastiCache for state management. Treat Lambda as stateless.'
      }
    ],
    troubleshooting: [
      {
        issue: 'Lambda Function Timeout',
        symptoms: ['Task timed out after X seconds', 'Function exceeds timeout', 'Incomplete executions'],
        causes: [
          'Long-running operations',
          'Slow database queries',
          'External API calls hanging',
          'Insufficient memory causing slow execution',
          'Cold start overhead'
        ],
        solutions: [
          'Increase function timeout (max 15 minutes)',
          'Optimize code and queries',
          'Implement connection pooling',
          'Use async patterns for long operations',
          'Increase memory allocation for more CPU',
          'Break into smaller functions',
          'Use Step Functions for long workflows'
        ]
      },
      {
        issue: 'High Cold Start Latency',
        symptoms: ['First request slow', 'Intermittent high latency', 'P99 latency spikes'],
        causes: [
          'Large deployment package',
          'Many dependencies',
          'VPC configuration overhead',
          'Language runtime (Java slower than Python/Node)',
          'Function not invoked frequently'
        ],
        solutions: [
          'Enable Provisioned Concurrency',
          'Reduce deployment package size',
          'Use Lambda Layers',
          'Optimize VPC configuration with NAT Gateway',
          'Keep functions warm with CloudWatch Events',
          'Choose faster runtimes for latency-critical functions',
          'Move initialization code outside handler'
        ]
      },
      {
        issue: 'Out of Memory Errors',
        symptoms: ['Process exited before completing', 'Memory limit exceeded', 'Function crashes'],
        causes: [
          'Memory leak in code',
          'Processing large files',
          'Insufficient memory allocation',
          'Memory-intensive operations',
          'Not releasing resources'
        ],
        solutions: [
          'Increase memory allocation',
          'Process data in chunks',
          'Use streaming for large files',
          'Fix memory leaks',
          'Monitor memory usage with CloudWatch',
          'Use S3 Select for large S3 objects',
          'Implement proper resource cleanup'
        ]
      },
      {
        issue: 'Throttling Errors',
        symptoms: ['Rate exceeded errors', '429 errors', 'Invocations rejected'],
        causes: [
          'Exceeded concurrent execution limit',
          'Burst concurrency limit reached',
          'Account-level limits',
          'Reserved concurrency too low'
        ],
        solutions: [
          'Request limit increase from AWS',
          'Implement exponential backoff retry',
          'Use SQS to buffer requests',
          'Distribute load over time',
          'Configure reserved concurrency',
          'Monitor concurrent executions metric'
        ]
      }
    ],
    security: [
      {
        category: 'IAM Permissions',
        recommendations: [
          'Use least privilege IAM roles',
          'Grant only required permissions',
          'Use resource-based policies when possible',
          'Avoid using * in IAM policies',
          'Regularly audit Lambda IAM roles',
          'Use different roles for different functions'
        ]
      },
      {
        category: 'Environment Variables',
        recommendations: [
          'Encrypt sensitive data with KMS',
          'Use AWS Secrets Manager for credentials',
          'Never hardcode secrets in code',
          'Rotate secrets regularly',
          'Use Systems Manager Parameter Store',
          'Implement secret caching'
        ]
      },
      {
        category: 'Network Security',
        recommendations: [
          'Use VPC for database connections',
          'Implement security groups properly',
          'Use VPC endpoints for AWS services',
          'Enable VPC Flow Logs',
          'Restrict outbound internet access',
          'Use PrivateLink when possible'
        ]
      },
      {
        category: 'Code Security',
        recommendations: [
          'Scan dependencies for vulnerabilities',
          'Keep runtime versions updated',
          'Validate all input data',
          'Implement proper error handling',
          'Use AWS X-Ray for tracing',
          'Enable CloudTrail logging'
        ]
      }
    ],
    monitoring: [
      {
        metric: 'Invocations',
        description: 'Number of times Lambda function is invoked',
        threshold: 'Set based on expected load',
        action: 'Alert if anomalous spikes or drops'
      },
      {
        metric: 'Duration',
        description: 'Execution time of Lambda function',
        threshold: 'Alert if approaching timeout',
        action: 'Investigate performance issues, optimize code'
      },
      {
        metric: 'Errors',
        description: 'Number of failed invocations',
        threshold: 'Alert on any errors or >1% error rate',
        action: 'Review CloudWatch Logs, fix bugs'
      },
      {
        metric: 'Throttles',
        description: 'Invocations rejected due to concurrency limits',
        threshold: 'Alert on any throttles',
        action: 'Increase concurrency limit or implement queuing'
      },
      {
        metric: 'ConcurrentExecutions',
        description: 'Number of function instances running',
        threshold: 'Alert if approaching account limit',
        action: 'Optimize function or request limit increase'
      },
      {
        metric: 'DeadLetterErrors',
        description: 'Failed attempts to send to DLQ',
        threshold: 'Alert on any DLQ errors',
        action: 'Check DLQ configuration and permissions'
      }
    ],
    costOptimization: [
      {
        tip: 'Right-size Memory Allocation',
        savings: '20-40% cost reduction',
        implementation: 'Use AWS Lambda Power Tuning tool to find optimal memory. More memory = more CPU, potentially faster execution and lower cost.'
      },
      {
        tip: 'Reduce Package Size',
        savings: '10-30% faster cold starts',
        implementation: 'Remove unused dependencies, use Lambda Layers, compress deployment packages, use tree-shaking for JavaScript.'
      },
      {
        tip: 'Use ARM64 (Graviton2)',
        savings: '20% lower cost, up to 34% better performance',
        implementation: 'Switch to ARM64 architecture if your code is compatible. Update runtime to arm64 version.'
      },
      {
        tip: 'Implement Connection Pooling',
        savings: '50-70% faster database access',
        implementation: 'Reuse database connections across invocations. Use RDS Proxy for managed connection pooling.'
      },
      {
        tip: 'Use Provisioned Concurrency Wisely',
        savings: 'Eliminate cold starts but costs more',
        implementation: 'Only use for latency-critical functions. Use Application Auto Scaling to adjust based on schedule.'
      },
      {
        tip: 'Set Appropriate Timeout',
        savings: 'Prevent unnecessary long-running executions',
        implementation: 'Set timeout just above P99 duration. Avoid default 3-second or maximum 15-minute settings.'
      }
    ]
  },

  // S3 Documentation
  {
    serviceId: 's3',
    architecturePatterns: [
      {
        title: 'Static Website Hosting',
        description: 'Host static websites directly from S3',
        diagram: `Route 53 → CloudFront → S3 Bucket (static files)
                           ↓
                      Edge Locations (cache)`,
        useCase: 'Host React/Vue/Angular apps, landing pages, documentation sites'
      },
      {
        title: 'Data Lake Architecture',
        description: 'Centralized repository for structured and unstructured data',
        diagram: `Data Sources → S3 (Raw) → Glue ETL → S3 (Processed)
                                                ↓
                                            Athena/Redshift`,
        useCase: 'Big data analytics, machine learning datasets, data warehousing'
      },
      {
        title: 'Backup and Disaster Recovery',
        description: 'Cross-region replication for disaster recovery',
        diagram: `Primary Region (S3) → Cross-Region Replication → DR Region (S3)
                     ↓
                 Lifecycle Policy → Glacier`,
        useCase: 'Business continuity, compliance, data protection'
      }
    ],
    antiPatterns: [
      {
        title: 'Using S3 as a Database',
        description: 'Treating S3 as a transactional database',
        problem: 'S3 is not designed for frequent updates, no ACID transactions, eventual consistency for overwrites.',
        solution: 'Use DynamoDB or RDS for transactional data. Use S3 for immutable data, logs, archives, and large files.'
      },
      {
        title: 'Not Using Lifecycle Policies',
        description: 'Keeping all data in Standard storage forever',
        problem: 'Paying for expensive storage when data is rarely accessed. Wasted costs on old data.',
        solution: 'Implement lifecycle policies to transition to IA, Glacier after 30/90 days. Delete old data automatically.'
      },
      {
        title: 'Public Buckets by Default',
        description: 'Making buckets public without proper justification',
        problem: 'Security risk, data leaks, compliance violations.',
        solution: 'Enable S3 Block Public Access by default. Use CloudFront with OAI for public content. Use presigned URLs for temporary access.'
      }
    ],
    troubleshooting: [
      {
        issue: 'Slow Upload/Download Performance',
        symptoms: ['Long transfer times', 'Timeout errors', 'Intermittent failures'],
        causes: ['Network latency', 'Single-part upload for large files', 'Not using Transfer Acceleration'],
        solutions: [
          'Use multipart upload for files >100MB',
          'Enable S3 Transfer Acceleration',
          'Use CloudFront for downloads',
          'Upload from EC2 in same region',
          'Use S3 VPC endpoints'
        ]
      },
      {
        issue: 'Access Denied Errors',
        symptoms: ['403 Forbidden', 'Access Denied', 'Insufficient permissions'],
        causes: ['Bucket policy restrictions', 'IAM permissions missing', 'S3 Block Public Access enabled', 'ACL conflicts'],
        solutions: [
          'Check IAM policy has s3:GetObject',
          'Review bucket policy',
          'Verify Block Public Access settings',
          'Check ACLs (though deprecated)',
          'Ensure correct bucket region',
          'Verify encryption key permissions'
        ]
      }
    ],
    security: [
      {
        category: 'Access Control',
        recommendations: [
          'Enable S3 Block Public Access',
          'Use bucket policies for access control',
          'Implement least privilege IAM policies',
          'Enable MFA Delete for versioned buckets',
          'Use VPC endpoints for private access',
          'Regularly audit with Access Analyzer'
        ]
      },
      {
        category: 'Encryption',
        recommendations: [
          'Enable default bucket encryption',
          'Use SSE-KMS for audit trail',
          'Enforce encryption in transit (HTTPS)',
          'Use bucket policies to deny unencrypted uploads',
          'Rotate KMS keys regularly',
          'Enable bucket key for cost savings'
        ]
      }
    ],
    monitoring: [
      {
        metric: 'BucketSizeBytes',
        description: 'Total size of objects in bucket',
        threshold: 'Monitor growth trends',
        action: 'Review lifecycle policies, archive old data'
      },
      {
        metric: '4xxErrors',
        description: 'Client-side errors (403, 404)',
        threshold: 'Alert on sudden increase',
        action: 'Check permissions, verify object exists'
      },
      {
        metric: '5xxErrors',
        description: 'Server-side errors',
        threshold: 'Alert on any 5xx errors',
        action: 'Contact AWS Support, implement retries'
      }
    ],
    costOptimization: [
      {
        tip: 'Use Intelligent-Tiering',
        savings: 'Automatic cost optimization up to 70%',
        implementation: 'Enable S3 Intelligent-Tiering for unknown access patterns. Automatically moves data between tiers.'
      },
      {
        tip: 'Implement Lifecycle Policies',
        savings: '50-90% cost reduction on old data',
        implementation: 'Transition to IA after 30 days, Glacier after 90 days, delete after retention period.'
      },
      {
        tip: 'Use S3 Select',
        savings: 'Retrieve only needed data, reduce transfer costs',
        implementation: 'Query data with SQL in S3 Select instead of downloading entire files.'
      },
      {
        tip: 'Enable Requester Pays',
        savings: 'Transfer costs paid by requester',
        implementation: 'For shared datasets, enable Requester Pays so data users pay transfer costs.'
      }
    ]
  },

  // DynamoDB Documentation
  {
    serviceId: 'dynamodb',
    architecturePatterns: [
      {
        title: 'Single Table Design',
        description: 'Store multiple entity types in one table',
        diagram: `Table: AppData
PK: USER#123    SK: PROFILE
PK: USER#123    SK: ORDER#2024-01-01
PK: PRODUCT#456 SK: DETAILS`,
        useCase: 'Reduce costs, simplify queries, better performance for related data'
      },
      {
        title: 'Write-Heavy Workload',
        description: 'High throughput writes with DynamoDB Streams',
        diagram: `Application → DynamoDB → DynamoDB Streams → Lambda → Analytics`,
        useCase: 'IoT data ingestion, real-time analytics, event sourcing'
      },
      {
        title: 'Global Application',
        description: 'Multi-region replication with Global Tables',
        diagram: `Users (US) → DynamoDB (us-east-1) ⟷ DynamoDB (eu-west-1) ← Users (EU)
                           ↓                        ↓
                    Users (Asia) → DynamoDB (ap-southeast-1)`,
        useCase: 'Global applications, disaster recovery, low-latency worldwide access'
      }
    ],
    antiPatterns: [
      {
        title: 'Using Scan for Everything',
        description: 'Using Scan instead of Query operations',
        problem: 'Scans read entire table, very expensive and slow. Consumes all capacity.',
        solution: 'Design proper partition keys and sort keys. Use Query operations. Create GSI for alternate access patterns.'
      },
      {
        title: 'Uneven Data Distribution',
        description: 'Hot partitions with most requests going to few keys',
        problem: 'Throttling, poor performance, wasted capacity on idle partitions.',
        solution: 'Choose high-cardinality partition keys. Use composite keys. Add randomness to keys if needed.'
      },
      {
        title: 'Storing Large Items',
        description: 'Items close to or at 400KB limit',
        problem: 'Higher costs, slower reads/writes, hit size limits quickly.',
        solution: 'Store large data in S3, keep references in DynamoDB. Split large items across multiple records.'
      }
    ],
    troubleshooting: [
      {
        issue: 'ProvisionedThroughputExceededException',
        symptoms: ['Throttling errors', 'Failed read/write requests', 'High latency'],
        causes: ['Exceeded provisioned capacity', 'Hot partitions', 'Burst capacity exhausted'],
        solutions: [
          'Enable Auto Scaling',
          'Switch to On-Demand mode',
          'Improve partition key distribution',
          'Implement exponential backoff',
          'Use DAX for read-heavy workloads',
          'Request capacity increase'
        ]
      },
      {
        issue: 'High Costs',
        symptoms: ['Unexpected billing', 'Capacity charges', 'Storage costs'],
        causes: ['Over-provisioned capacity', 'Unnecessary GSI', 'Standard class for archived data'],
        solutions: [
          'Use On-Demand for unpredictable workloads',
          'Remove unused GSI',
          'Use DynamoDB Standard-IA for infrequent access',
          'Enable Auto Scaling',
          'Implement TTL for old data',
          'Review and optimize item sizes'
        ]
      }
    ],
    security: [
      {
        category: 'Access Control',
        recommendations: [
          'Use IAM policies for access control',
          'Implement fine-grained access with IAM conditions',
          'Enable VPC endpoints',
          'Use temporary credentials',
          'Audit access with CloudTrail',
          'Implement attribute-based access control'
        ]
      },
      {
        category: 'Encryption',
        recommendations: [
          'Enable encryption at rest (default)',
          'Use AWS managed or customer managed KMS keys',
          'Enable encryption in transit',
          'Rotate encryption keys',
          'Use VPC endpoints for private access'
        ]
      }
    ],
    monitoring: [
      {
        metric: 'ConsumedReadCapacityUnits',
        description: 'Read capacity consumed',
        threshold: 'Alert if approaching provisioned capacity',
        action: 'Enable Auto Scaling or increase capacity'
      },
      {
        metric: 'ConsumedWriteCapacityUnits',
        description: 'Write capacity consumed',
        threshold: 'Alert if approaching provisioned capacity',
        action: 'Enable Auto Scaling or increase capacity'
      },
      {
        metric: 'UserErrors',
        description: 'Client-side errors (throttling, validation)',
        threshold: 'Alert on high error rate',
        action: 'Implement retries, optimize access patterns'
      },
      {
        metric: 'SystemErrors',
        description: 'Server-side errors',
        threshold: 'Alert on any system errors',
        action: 'Contact AWS Support'
      }
    ],
    costOptimization: [
      {
        tip: 'Use On-Demand for Variable Workloads',
        savings: 'Pay only for what you use',
        implementation: 'Switch to On-Demand billing mode for unpredictable traffic. No capacity planning needed.'
      },
      {
        tip: 'Implement DynamoDB TTL',
        savings: 'Automatic deletion of expired data',
        implementation: 'Add TTL attribute to items. DynamoDB deletes expired items automatically at no cost.'
      },
      {
        tip: 'Use Standard-IA Class',
        savings: 'Up to 60% cost reduction',
        implementation: 'For tables with infrequent access, use Standard-IA class. Suitable for archival data.'
      },
      {
        tip: 'Optimize GSI Usage',
        savings: 'Reduce costs by removing unused indexes',
        implementation: 'Review GSI usage. Delete unused indexes. Project only required attributes.'
      },
      {
        tip: 'Use DAX for Read-Heavy Workloads',
        savings: 'Reduce read capacity and costs',
        implementation: 'Deploy DAX cluster for frequently read data. Microsecond response times, reduced DynamoDB reads.'
      }
    ]
  }
];
