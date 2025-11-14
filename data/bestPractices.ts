export interface BestPractice {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  practices: Practice[];
  antiPatterns: AntiPattern[];
  codeExamples?: CodeExample[];
}

export interface Practice {
  title: string;
  description: string;
  benefits: string[];
}

export interface AntiPattern {
  title: string;
  description: string;
  consequences: string[];
  solution: string;
}

export interface CodeExample {
  title: string;
  code: string;
  language: string;
  explanation: string;
}

export const bestPractices: BestPractice[] = [
  {
    id: 'lambda-best-practices',
    title: 'AWS Lambda Best Practices',
    category: 'Serverless',
    icon: '⚡',
    description: 'Optimize your Lambda functions for performance, cost, and reliability',
    practices: [
      {
        title: 'Minimize Deployment Package Size',
        description: 'Keep your Lambda deployment packages small to reduce cold start times',
        benefits: [
          'Faster cold starts',
          'Quicker deployments',
          'Reduced storage costs'
        ]
      },
      {
        title: 'Reuse Execution Context',
        description: 'Initialize SDK clients and database connections outside the handler function',
        benefits: [
          'Reduced latency on subsequent invocations',
          'Better resource utilization',
          'Lower costs'
        ]
      },
      {
        title: 'Use Environment Variables',
        description: 'Store configuration in environment variables instead of hardcoding',
        benefits: [
          'Easy configuration changes',
          'Better security',
          'Reusable code across environments'
        ]
      },
      {
        title: 'Implement Proper Error Handling',
        description: 'Use try-catch blocks and return appropriate error responses',
        benefits: [
          'Better debugging',
          'Graceful failure handling',
          'Improved user experience'
        ]
      },
      {
        title: 'Use Lambda Layers for Shared Code',
        description: 'Extract common dependencies and code into Lambda layers',
        benefits: [
          'Smaller deployment packages',
          'Code reuse across functions',
          'Easier dependency management'
        ]
      }
    ],
    antiPatterns: [
      {
        title: 'Calling Lambda Recursively Without Limits',
        description: 'Lambda functions that call themselves without proper termination conditions',
        consequences: [
          'Infinite loops',
          'Unexpected costs',
          'Account throttling'
        ],
        solution: 'Implement proper termination conditions and use Step Functions for orchestration'
      },
      {
        title: 'Storing Large Files in /tmp',
        description: 'Using /tmp directory for large file storage beyond 512MB limit',
        consequences: [
          'Function failures',
          'Out of space errors',
          'Performance degradation'
        ],
        solution: 'Use S3 for file storage and stream data when possible'
      }
    ],
    codeExamples: [
      {
        title: 'Reusing Execution Context',
        code: `import boto3

# Initialize outside handler (reused across invocations)
s3_client = boto3.client('s3')
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('MyTable')

def lambda_handler(event, context):
    # Use pre-initialized clients
    response = table.get_item(Key={'id': event['id']})
    return {
        'statusCode': 200,
        'body': json.dumps(response['Item'])
    }`,
        language: 'python',
        explanation: 'SDK clients and database connections are initialized once and reused across invocations'
      }
    ]
  },
  {
    id: 's3-best-practices',
    title: 'Amazon S3 Best Practices',
    category: 'Storage',
    icon: '🪣',
    description: 'Optimize S3 for performance, security, and cost-effectiveness',
    practices: [
      {
        title: 'Use Lifecycle Policies',
        description: 'Automatically transition objects to cheaper storage classes or delete them',
        benefits: [
          'Significant cost savings',
          'Automated data management',
          'Compliance with retention policies'
        ]
      },
      {
        title: 'Enable Versioning',
        description: 'Protect against accidental deletions and overwrites',
        benefits: [
          'Data protection',
          'Easy rollback',
          'Compliance requirements'
        ]
      },
      {
        title: 'Implement Encryption',
        description: 'Use server-side encryption (SSE-S3, SSE-KMS) or client-side encryption',
        benefits: [
          'Data security at rest',
          'Compliance with regulations',
          'Protection against unauthorized access'
        ]
      },
      {
        title: 'Use Intelligent-Tiering',
        description: 'Automatically move objects between access tiers based on usage patterns',
        benefits: [
          'Cost optimization without manual effort',
          'No retrieval fees',
          'Automatic performance optimization'
        ]
      },
      {
        title: 'Optimize Request Rates',
        description: 'Use random prefixes for high-throughput workloads',
        benefits: [
          'Better performance',
          'Avoid throttling',
          'Higher request rates'
        ]
      }
    ],
    antiPatterns: [
      {
        title: 'Making S3 Buckets Public',
        description: 'Opening S3 buckets to public access without proper justification',
        consequences: [
          'Data breaches',
          'Compliance violations',
          'Reputational damage'
        ],
        solution: 'Use bucket policies, IAM roles, and pre-signed URLs for controlled access'
      },
      {
        title: 'Not Using Cross-Region Replication',
        description: 'Failing to replicate critical data for disaster recovery',
        consequences: [
          'Data loss risk',
          'Poor disaster recovery',
          'Compliance issues'
        ],
        solution: 'Enable CRR for critical buckets with versioning'
      }
    ]
  },
  {
    id: 'dynamodb-best-practices',
    title: 'DynamoDB Best Practices',
    category: 'Database',
    icon: '💾',
    description: 'Design efficient and scalable DynamoDB tables',
    practices: [
      {
        title: 'Choose the Right Partition Key',
        description: 'Select a partition key with high cardinality to distribute load evenly',
        benefits: [
          'Better performance',
          'Avoid hot partitions',
          'Efficient scaling'
        ]
      },
      {
        title: 'Use Sort Keys for Query Flexibility',
        description: 'Design sort keys to support your access patterns',
        benefits: [
          'Efficient queries',
          'Range queries support',
          'Better data organization'
        ]
      },
      {
        title: 'Implement GSIs Strategically',
        description: 'Use Global Secondary Indexes for alternative access patterns',
        benefits: [
          'Query flexibility',
          'No table scans',
          'Better performance'
        ]
      },
      {
        title: 'Use On-Demand Billing for Unpredictable Workloads',
        description: 'Switch to on-demand mode when traffic patterns are unknown',
        benefits: [
          'Cost optimization',
          'No capacity planning',
          'Automatic scaling'
        ]
      }
    ],
    antiPatterns: [
      {
        title: 'Using Scans Instead of Queries',
        description: 'Scanning entire tables instead of using targeted queries',
        consequences: [
          'Poor performance',
          'High costs',
          'Wasted read capacity'
        ],
        solution: 'Design proper indexes and use Query operations'
      }
    ]
  },
  {
    id: 'security-best-practices',
    title: 'AWS Security Best Practices',
    category: 'Security',
    icon: '🔒',
    description: 'Implement robust security controls across your AWS environment',
    practices: [
      {
        title: 'Enable MFA for Root Account',
        description: 'Always enable multi-factor authentication for the root user',
        benefits: [
          'Protection against credential theft',
          'Compliance with security standards',
          'Reduced risk of account compromise'
        ]
      },
      {
        title: 'Follow Least Privilege Principle',
        description: 'Grant only the minimum permissions required',
        benefits: [
          'Reduced attack surface',
          'Better security posture',
          'Easier auditing'
        ]
      },
      {
        title: 'Rotate Credentials Regularly',
        description: 'Implement automated credential rotation',
        benefits: [
          'Reduced risk from compromised credentials',
          'Compliance requirements',
          'Better security hygiene'
        ]
      },
      {
        title: 'Enable CloudTrail Logging',
        description: 'Monitor all API calls and user activity',
        benefits: [
          'Security auditing',
          'Compliance tracking',
          'Forensic analysis'
        ]
      },
      {
        title: 'Use AWS Secrets Manager',
        description: 'Store and manage secrets securely',
        benefits: [
          'Centralized secret management',
          'Automatic rotation',
          'Better security'
        ]
      }
    ],
    antiPatterns: [
      {
        title: 'Hardcoding Credentials',
        description: 'Embedding AWS credentials directly in code',
        consequences: [
          'Security breaches',
          'Credential exposure in version control',
          'Compliance violations'
        ],
        solution: 'Use IAM roles, environment variables, or Secrets Manager'
      },
      {
        title: 'Using Root Account for Daily Operations',
        description: 'Performing routine tasks with root account credentials',
        consequences: [
          'Increased security risk',
          'No audit trail',
          'Potential for catastrophic mistakes'
        ],
        solution: 'Create IAM users/roles with appropriate permissions'
      }
    ]
  },
  {
    id: 'cost-optimization',
    title: 'AWS Cost Optimization',
    category: 'FinOps',
    icon: '💰',
    description: 'Reduce AWS costs without sacrificing performance',
    practices: [
      {
        title: 'Use Reserved Instances and Savings Plans',
        description: 'Commit to usage for predictable workloads',
        benefits: [
          'Up to 72% cost savings',
          'Better budget predictability',
          'Flexible payment options'
        ]
      },
      {
        title: 'Right-Size Resources',
        description: 'Match instance types to actual resource needs',
        benefits: [
          '20-30% cost reduction typical',
          'Better performance',
          'Improved resource utilization'
        ]
      },
      {
        title: 'Implement Auto Scaling',
        description: 'Scale resources based on demand',
        benefits: [
          'Pay only for what you use',
          'Better performance during peaks',
          'Significant cost savings'
        ]
      },
      {
        title: 'Delete Unused Resources',
        description: 'Regularly audit and remove idle resources',
        benefits: [
          'Immediate cost reduction',
          'Cleaner environment',
          'Easier management'
        ]
      }
    ],
    antiPatterns: [
      {
        title: 'Leaving Development Instances Running 24/7',
        description: 'Not shutting down dev/test environments during off-hours',
        consequences: [
          'Unnecessary costs',
          'Wasted resources',
          'Budget overruns'
        ],
        solution: 'Use Instance Scheduler or Lambda to automatically stop/start instances'
      }
    ]
  },
  {
    id: 'networking-best-practices',
    title: 'AWS Networking Best Practices',
    category: 'Networking',
    icon: '🌐',
    description: 'Design secure and performant network architectures',
    practices: [
      {
        title: 'Use Multiple Availability Zones',
        description: 'Deploy resources across multiple AZs for high availability',
        benefits: [
          'Fault tolerance',
          'High availability',
          'Better disaster recovery'
        ]
      },
      {
        title: 'Implement VPC Flow Logs',
        description: 'Monitor network traffic for security and troubleshooting',
        benefits: [
          'Security monitoring',
          'Troubleshooting support',
          'Compliance requirements'
        ]
      },
      {
        title: 'Use Private Subnets for Backend Services',
        description: 'Place databases and application servers in private subnets',
        benefits: [
          'Enhanced security',
          'Reduced attack surface',
          'Better network isolation'
        ]
      },
      {
        title: 'Implement NACLs and Security Groups',
        description: 'Use layered security with both NACLs and security groups',
        benefits: [
          'Defense in depth',
          'Granular access control',
          'Better security posture'
        ]
      }
    ],
    antiPatterns: [
      {
        title: 'Using 0.0.0.0/0 in Security Groups',
        description: 'Opening services to the entire internet unnecessarily',
        consequences: [
          'Security vulnerabilities',
          'Increased attack surface',
          'Compliance violations'
        ],
        solution: 'Use specific CIDR blocks and implement bastion hosts or VPN'
      }
    ]
  }
];

export const practiceCategories = [
  'All',
  'Serverless',
  'Storage',
  'Database',
  'Security',
  'FinOps',
  'Networking',
  'DevOps'
];
