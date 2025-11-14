export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  icon: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-aws-lambda',
    title: 'Getting Started with AWS Lambda: A Complete Guide',
    excerpt: 'Learn how to build and deploy your first serverless function with AWS Lambda, from setup to production.',
    content: `AWS Lambda has revolutionized the way we build and deploy applications. In this comprehensive guide, we'll walk through everything you need to know to get started with Lambda.

## What is AWS Lambda?

AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you. You can use Lambda to extend other AWS services with custom logic, or create your own backend services.

## Key Benefits

1. **No Server Management**: AWS handles all the infrastructure
2. **Automatic Scaling**: Scales automatically from a few requests to thousands per second
3. **Pay-per-Use**: Only pay for the compute time you consume
4. **Built-in High Availability**: Lambda runs across multiple availability zones

## Your First Lambda Function

Let's create a simple Lambda function that processes JSON data:

\`\`\`python
import json

def lambda_handler(event, context):
    # Extract data from event
    name = event.get('name', 'World')

    # Your business logic here
    message = f'Hello, {name}!'

    # Return response
    return {
        'statusCode': 200,
        'body': json.dumps({
            'message': message
        })
    }
\`\`\`

## Best Practices

- Keep functions small and focused
- Use environment variables for configuration
- Implement proper error handling
- Monitor with CloudWatch Logs
- Use Lambda layers for shared dependencies

## Conclusion

AWS Lambda is a powerful service that can help you build scalable applications without managing servers. Start small, experiment, and gradually build more complex serverless architectures.`,
    author: 'AWS Coding Guide',
    date: '2024-03-15',
    category: 'Serverless',
    tags: ['lambda', 'serverless', 'getting-started'],
    readTime: '5 min',
    icon: '⚡'
  },
  {
    slug: 'dynamodb-design-patterns',
    title: 'DynamoDB Design Patterns for Scalable Applications',
    excerpt: 'Master DynamoDB with proven design patterns for single-table design, access patterns, and query optimization.',
    content: `DynamoDB is a powerful NoSQL database, but it requires a different mindset than traditional relational databases. Let's explore key design patterns.

## Single-Table Design

One of the most important concepts in DynamoDB is single-table design. Instead of creating multiple tables like in SQL, you store different entity types in one table.

### Why Single-Table?

- Reduces costs
- Simplifies access patterns
- Better performance
- Fewer API calls

## Access Patterns First

Before designing your table, list all your access patterns:

1. Get user by ID
2. Get all orders for a user
3. Get recent orders
4. Find orders by status

## Partition Key Strategy

Choose partition keys with high cardinality to distribute load evenly:

- ✅ Good: userId, orderId, email
- ❌ Bad: status, category (low cardinality)

## Conclusion

DynamoDB design requires upfront planning but delivers incredible performance and scale.`,
    author: 'AWS Coding Guide',
    date: '2024-03-10',
    category: 'Database',
    tags: ['dynamodb', 'nosql', 'design-patterns'],
    readTime: '8 min',
    icon: '💾'
  },
  {
    slug: 'cost-optimization-strategies',
    title: '10 AWS Cost Optimization Strategies That Work',
    excerpt: 'Practical strategies to reduce your AWS bill by 30-50% without sacrificing performance or reliability.',
    content: `AWS costs can spiral out of control if not managed properly. Here are 10 proven strategies to optimize your spending.

## 1. Right-Size Your Instances

Use AWS Cost Explorer and Compute Optimizer to identify over-provisioned resources. Most companies can reduce instance sizes by 20-40%.

## 2. Use Reserved Instances

For predictable workloads, Reserved Instances provide up to 72% savings compared to On-Demand pricing.

## 3. Implement Auto Scaling

Match capacity to demand automatically. Don't pay for idle resources during off-peak hours.

## 4. Clean Up Unused Resources

- Delete old EBS snapshots
- Remove unused Elastic IPs
- Delete old AMIs
- Clean up unused Load Balancers

## 5. Use S3 Lifecycle Policies

Automatically transition objects to cheaper storage classes:
- Standard → Intelligent-Tiering
- Intelligent-Tiering → Glacier
- Set expiration for temporary data

## 6. Spot Instances for Fault-Tolerant Workloads

Save up to 90% for batch jobs, data analysis, and CI/CD.

## 7. Monitor with AWS Budgets

Set up budget alerts to catch cost overruns early.

## 8. Use Savings Plans

More flexible than Reserved Instances, up to 72% savings.

## 9. Optimize Data Transfer

- Use CloudFront for frequently accessed content
- Keep data transfer within the same region
- Use VPC endpoints for AWS services

## 10. Regular Cost Reviews

Schedule monthly reviews of your AWS bill. Small savings add up!

## Conclusion

Cost optimization is an ongoing process. Implement these strategies systematically for significant savings.`,
    author: 'AWS Coding Guide',
    date: '2024-03-05',
    category: 'Cost Optimization',
    tags: ['cost', 'optimization', 'finops'],
    readTime: '10 min',
    icon: '💰'
  },
  {
    slug: 'building-cicd-pipeline',
    title: 'Building a Production-Ready CI/CD Pipeline on AWS',
    excerpt: 'Step-by-step guide to implementing automated deployment pipelines using AWS native services.',
    content: `A well-designed CI/CD pipeline is essential for modern application development. Let's build one using AWS services.

## Pipeline Overview

Our pipeline will include:
- Source control integration
- Automated builds
- Testing
- Staging deployment
- Production deployment with approval

## Architecture

GitHub → CodePipeline → CodeBuild → ECS/Lambda

## Step 1: Source Stage

Connect your GitHub repository to CodePipeline. Every push to main triggers the pipeline.

## Step 2: Build Stage

CodeBuild compiles your application, runs tests, and creates deployment artifacts.

Example buildspec.yml:

\`\`\`yaml
version: 0.2
phases:
  pre_build:
    commands:
      - npm install
      - npm test
  build:
    commands:
      - npm run build
  post_build:
    commands:
      - docker build -t myapp .
      - docker push myapp:latest
artifacts:
  files:
    - '**/*'
\`\`\`

## Step 3: Deploy to Staging

Automatically deploy to staging environment for testing.

## Step 4: Manual Approval

Add manual approval gate before production.

## Step 5: Deploy to Production

Blue-green or canary deployment to production.

## Best Practices

- Use Infrastructure as Code
- Implement automated rollback
- Monitor deployments
- Keep pipelines fast (< 10 minutes)

## Conclusion

A solid CI/CD pipeline improves code quality and deployment velocity.`,
    author: 'AWS Coding Guide',
    date: '2024-03-01',
    category: 'DevOps',
    tags: ['cicd', 'codepipeline', 'devops'],
    readTime: '12 min',
    icon: '🚀'
  },
  {
    slug: 'securing-aws-applications',
    title: 'Security Best Practices for AWS Applications',
    excerpt: 'Comprehensive security guide covering IAM, encryption, network security, and compliance.',
    content: `Security should be a top priority for any AWS application. This guide covers essential security practices.

## 1. IAM Best Practices

### Enable MFA
Always enable MFA for root account and privileged users.

### Least Privilege
Grant only the permissions required for a task.

### Use IAM Roles
Instead of access keys, use IAM roles for applications.

## 2. Encryption

### Data at Rest
- Enable S3 bucket encryption
- Use encrypted RDS instances
- Encrypt EBS volumes

### Data in Transit
- Use HTTPS/TLS everywhere
- Enable VPC endpoint policies

## 3. Network Security

### VPC Configuration
- Use private subnets for databases
- Implement security groups properly
- Use NACLs for additional protection

### WAF and Shield
- Deploy AWS WAF for application protection
- Use Shield for DDoS protection

## 4. Monitoring and Logging

- Enable CloudTrail for all regions
- Set up GuardDuty
- Configure Config rules
- Centralize logs in CloudWatch

## 5. Secrets Management

Never hardcode credentials. Use:
- AWS Secrets Manager
- Systems Manager Parameter Store
- Environment variables from secure sources

## 6. Regular Security Audits

- Review IAM policies quarterly
- Run AWS Security Hub
- Perform vulnerability scans
- Keep software updated

## 7. Compliance

- Enable AWS Config for compliance checking
- Use Service Control Policies (SCPs)
- Implement tagging strategy
- Document security controls

## Incident Response Plan

Have a plan for security incidents:
1. Detection
2. Containment
3. Investigation
4. Recovery
5. Post-mortem

## Conclusion

Security is not a one-time task but an ongoing process. Implement these practices systematically.`,
    author: 'AWS Coding Guide',
    date: '2024-02-25',
    category: 'Security',
    tags: ['security', 'iam', 'encryption', 'compliance'],
    readTime: '15 min',
    icon: '🔒'
  }
];

export const blogCategories = [
  'All',
  'Serverless',
  'Database',
  'Cost Optimization',
  'DevOps',
  'Security',
  'Architecture'
];
