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
    content: `
      <p>AWS Lambda has revolutionized the way we build and deploy applications. In this comprehensive guide, we'll walk through everything you need to know to get started with Lambda.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">What is AWS Lambda?</h2>

      <p>AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you. You can use Lambda to extend other AWS services with custom logic, or create your own backend services.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Key Benefits</h2>

      <ol style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;"><strong>No Server Management</strong>: AWS handles all the infrastructure</li>
        <li style="margin-bottom: 0.5em;"><strong>Automatic Scaling</strong>: Scales automatically from a few requests to thousands per second</li>
        <li style="margin-bottom: 0.5em;"><strong>Pay-per-Use</strong>: Only pay for the compute time you consume</li>
        <li style="margin-bottom: 0.5em;"><strong>Built-in High Availability</strong>: Lambda runs across multiple availability zones</li>
      </ol>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Your First Lambda Function</h2>

      <p>Let's create a simple Lambda function that processes JSON data:</p>

      <pre style="background-color: #f5f5f5; padding: 1em; border-radius: 0.5em; overflow-x: auto; margin: 1em 0;"><code>import json

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
    }</code></pre>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Best Practices</h2>

      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Keep functions small and focused</li>
        <li style="margin-bottom: 0.5em;">Use environment variables for configuration</li>
        <li style="margin-bottom: 0.5em;">Implement proper error handling</li>
        <li style="margin-bottom: 0.5em;">Monitor with CloudWatch Logs</li>
        <li style="margin-bottom: 0.5em;">Use Lambda layers for shared dependencies</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Conclusion</h2>

      <p>AWS Lambda is a powerful service that can help you build scalable applications without managing servers. Start small, experiment, and gradually build more complex serverless architectures.</p>
    `,
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
    content: `
      <p>DynamoDB is a powerful NoSQL database, but it requires a different mindset than traditional relational databases. Let's explore key design patterns.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Single-Table Design</h2>

      <p>One of the most important concepts in DynamoDB is single-table design. Instead of creating multiple tables like in SQL, you store different entity types in one table.</p>

      <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em;">Why Single-Table?</h3>

      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Reduces costs</li>
        <li style="margin-bottom: 0.5em;">Simplifies access patterns</li>
        <li style="margin-bottom: 0.5em;">Better performance</li>
        <li style="margin-bottom: 0.5em;">Fewer API calls</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Access Patterns First</h2>

      <p>Before designing your table, list all your access patterns:</p>

      <ol style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Get user by ID</li>
        <li style="margin-bottom: 0.5em;">Get all orders for a user</li>
        <li style="margin-bottom: 0.5em;">Get recent orders</li>
        <li style="margin-bottom: 0.5em;">Find orders by status</li>
      </ol>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Partition Key Strategy</h2>

      <p>Choose partition keys with high cardinality to distribute load evenly:</p>

      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">✅ <strong>Good</strong>: userId, orderId, email</li>
        <li style="margin-bottom: 0.5em;">❌ <strong>Bad</strong>: status, category (low cardinality)</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Conclusion</h2>

      <p>DynamoDB design requires upfront planning but delivers incredible performance and scale.</p>
    `,
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
    content: `
      <p>AWS costs can spiral out of control if not managed properly. Here are 10 proven strategies to optimize your spending.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">1. Right-Size Your Instances</h2>
      <p>Use AWS Cost Explorer and Compute Optimizer to identify over-provisioned resources. Most companies can reduce instance sizes by 20-40%.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">2. Use Reserved Instances</h2>
      <p>For predictable workloads, Reserved Instances provide up to 72% savings compared to On-Demand pricing.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">3. Implement Auto Scaling</h2>
      <p>Match capacity to demand automatically. Don't pay for idle resources during off-peak hours.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">4. Clean Up Unused Resources</h2>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Delete old EBS snapshots</li>
        <li style="margin-bottom: 0.5em;">Remove unused Elastic IPs</li>
        <li style="margin-bottom: 0.5em;">Delete old AMIs</li>
        <li style="margin-bottom: 0.5em;">Clean up unused Load Balancers</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">5. Use S3 Lifecycle Policies</h2>
      <p>Automatically transition objects to cheaper storage classes:</p>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Standard → Intelligent-Tiering</li>
        <li style="margin-bottom: 0.5em;">Intelligent-Tiering → Glacier</li>
        <li style="margin-bottom: 0.5em;">Set expiration for temporary data</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">6. Spot Instances for Fault-Tolerant Workloads</h2>
      <p>Save up to 90% for batch jobs, data analysis, and CI/CD.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">7. Monitor with AWS Budgets</h2>
      <p>Set up budget alerts to catch cost overruns early.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">8. Use Savings Plans</h2>
      <p>More flexible than Reserved Instances, up to 72% savings.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">9. Optimize Data Transfer</h2>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Use CloudFront for frequently accessed content</li>
        <li style="margin-bottom: 0.5em;">Keep data transfer within the same region</li>
        <li style="margin-bottom: 0.5em;">Use VPC endpoints for AWS services</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">10. Regular Cost Reviews</h2>
      <p>Schedule monthly reviews of your AWS bill. Small savings add up!</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Conclusion</h2>
      <p>Cost optimization is an ongoing process. Implement these strategies systematically for significant savings.</p>
    `,
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
    content: `
      <p>A well-designed CI/CD pipeline is essential for modern application development. Let's build one using AWS services.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Pipeline Overview</h2>
      <p>Our pipeline will include:</p>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Source control integration</li>
        <li style="margin-bottom: 0.5em;">Automated builds</li>
        <li style="margin-bottom: 0.5em;">Testing</li>
        <li style="margin-bottom: 0.5em;">Staging deployment</li>
        <li style="margin-bottom: 0.5em;">Production deployment with approval</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Architecture</h2>
      <p><strong>GitHub → CodePipeline → CodeBuild → ECS/Lambda</strong></p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Step 1: Source Stage</h2>
      <p>Connect your GitHub repository to CodePipeline. Every push to main triggers the pipeline.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Step 2: Build Stage</h2>
      <p>CodeBuild compiles your application, runs tests, and creates deployment artifacts.</p>
      <p>Example buildspec.yml:</p>

      <pre style="background-color: #f5f5f5; padding: 1em; border-radius: 0.5em; overflow-x: auto; margin: 1em 0;"><code>version: 0.2
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
    - '**/*'</code></pre>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Step 3: Deploy to Staging</h2>
      <p>Automatically deploy to staging environment for testing.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Step 4: Manual Approval</h2>
      <p>Add manual approval gate before production.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Step 5: Deploy to Production</h2>
      <p>Blue-green or canary deployment to production.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Best Practices</h2>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Use Infrastructure as Code</li>
        <li style="margin-bottom: 0.5em;">Implement automated rollback</li>
        <li style="margin-bottom: 0.5em;">Monitor deployments</li>
        <li style="margin-bottom: 0.5em;">Keep pipelines fast (&lt; 10 minutes)</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Conclusion</h2>
      <p>A solid CI/CD pipeline improves code quality and deployment velocity.</p>
    `,
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
    content: `
      <p>Security should be a top priority for any AWS application. This guide covers essential security practices.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">1. IAM Best Practices</h2>

      <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em;">Enable MFA</h3>
      <p>Always enable MFA for root account and privileged users.</p>

      <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em;">Least Privilege</h3>
      <p>Grant only the permissions required for a task.</p>

      <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em;">Use IAM Roles</h3>
      <p>Instead of access keys, use IAM roles for applications.</p>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">2. Encryption</h2>

      <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em;">Data at Rest</h3>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Enable S3 bucket encryption</li>
        <li style="margin-bottom: 0.5em;">Use encrypted RDS instances</li>
        <li style="margin-bottom: 0.5em;">Encrypt EBS volumes</li>
      </ul>

      <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em;">Data in Transit</h3>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Use HTTPS/TLS everywhere</li>
        <li style="margin-bottom: 0.5em;">Enable VPC endpoint policies</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">3. Network Security</h2>

      <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em;">VPC Configuration</h3>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Use private subnets for databases</li>
        <li style="margin-bottom: 0.5em;">Implement security groups properly</li>
        <li style="margin-bottom: 0.5em;">Use NACLs for additional protection</li>
      </ul>

      <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em;">WAF and Shield</h3>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Deploy AWS WAF for application protection</li>
        <li style="margin-bottom: 0.5em;">Use Shield for DDoS protection</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">4. Monitoring and Logging</h2>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Enable CloudTrail for all regions</li>
        <li style="margin-bottom: 0.5em;">Set up GuardDuty</li>
        <li style="margin-bottom: 0.5em;">Configure Config rules</li>
        <li style="margin-bottom: 0.5em;">Centralize logs in CloudWatch</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">5. Secrets Management</h2>
      <p>Never hardcode credentials. Use:</p>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">AWS Secrets Manager</li>
        <li style="margin-bottom: 0.5em;">Systems Manager Parameter Store</li>
        <li style="margin-bottom: 0.5em;">Environment variables from secure sources</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">6. Regular Security Audits</h2>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Review IAM policies quarterly</li>
        <li style="margin-bottom: 0.5em;">Run AWS Security Hub</li>
        <li style="margin-bottom: 0.5em;">Perform vulnerability scans</li>
        <li style="margin-bottom: 0.5em;">Keep software updated</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">7. Compliance</h2>
      <ul style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Enable AWS Config for compliance checking</li>
        <li style="margin-bottom: 0.5em;">Use Service Control Policies (SCPs)</li>
        <li style="margin-bottom: 0.5em;">Implement tagging strategy</li>
        <li style="margin-bottom: 0.5em;">Document security controls</li>
      </ul>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Incident Response Plan</h2>
      <p>Have a plan for security incidents:</p>
      <ol style="margin-left: 1.5em; margin-bottom: 1em;">
        <li style="margin-bottom: 0.5em;">Detection</li>
        <li style="margin-bottom: 0.5em;">Containment</li>
        <li style="margin-bottom: 0.5em;">Investigation</li>
        <li style="margin-bottom: 0.5em;">Recovery</li>
        <li style="margin-bottom: 0.5em;">Post-mortem</li>
      </ol>

      <h2 style="font-size: 1.5em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em;">Conclusion</h2>
      <p>Security is not a one-time task but an ongoing process. Implement these practices systematically.</p>
    `,
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
