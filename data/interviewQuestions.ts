export interface InterviewQuestion {
  id: string;
  category: string;
  question: string;
  answer: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

export const interviewQuestions: InterviewQuestion[] = [
  // Lambda Questions
  {
    id: 'lambda-1',
    category: 'AWS Lambda',
    question: 'What is a cold start in AWS Lambda and how can you minimize it?',
    answer: `A cold start occurs when Lambda initializes a new execution environment for your function. This happens when:
- The function is invoked for the first time
- Lambda scales up and creates new instances
- The function hasn't been invoked recently

Impact: Adds latency (100ms to several seconds) to function execution.

Ways to minimize cold starts:
1. **Provisioned Concurrency**: Pre-warm execution environments
2. **Keep functions warm**: Use scheduled CloudWatch Events
3. **Minimize deployment package size**: Smaller packages load faster
4. **Choose appropriate runtime**: Interpreted languages (Node.js, Python) have faster cold starts than compiled languages
5. **Reduce dependencies**: Only include necessary libraries
6. **Use Lambda layers**: Share common code across functions
7. **Optimize initialization code**: Move heavy initialization outside the handler
8. **Choose appropriate memory**: More memory = more CPU = faster initialization

Example of optimizing initialization:
\`\`\`python
import boto3

# Initialize outside handler (runs once per container)
s3_client = boto3.client('s3')

def lambda_handler(event, context):
    # Handler code here
    response = s3_client.get_object(Bucket='mybucket', Key='mykey')
    return response
\`\`\``,
    difficulty: 'Intermediate',
    tags: ['lambda', 'performance', 'cold-start']
  },
  {
    id: 'lambda-2',
    category: 'AWS Lambda',
    question: 'Explain Lambda execution context and how to leverage it for better performance.',
    answer: `Lambda execution context is the runtime environment that remains initialized between invocations within the same container.

Components:
- Temporary disk space in /tmp (up to 10GB)
- Background processes
- Global variables
- Database connections
- SDK clients

Benefits:
1. **Connection pooling**: Reuse database connections
2. **Caching**: Store frequently accessed data
3. **Performance**: Avoid re-initialization

Best practices:
\`\`\`python
import boto3
import os
from datetime import datetime

# Initialize outside handler (reused across invocations)
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])

# Cache data
cache = {}
cache_expiry = None

def lambda_handler(event, context):
    # Check if cache is valid
    current_time = datetime.utcnow()
    if cache_expiry and current_time < cache_expiry:
        return cache.get('data')

    # Fetch and cache data
    response = table.get_item(Key={'id': '123'})
    cache['data'] = response['Item']
    cache_expiry = current_time + timedelta(minutes=5)

    return cache['data']
\`\`\`

Important notes:
- Don't assume context will be reused
- Don't store sensitive data in /tmp
- Clean up resources properly
- Be aware of memory limits`,
    difficulty: 'Advanced',
    tags: ['lambda', 'performance', 'optimization']
  },
  {
    id: 'lambda-3',
    category: 'AWS Lambda',
    question: 'How do you handle errors and retries in Lambda functions?',
    answer: `Lambda has different retry behaviors based on invocation type:

**Synchronous invocation** (API Gateway, SDK):
- No automatic retries
- Client receives error response
- Must implement retry logic in client

**Asynchronous invocation** (S3, SNS, EventBridge):
- Automatic retries: 2 times (total 3 attempts)
- Exponential backoff between retries
- Configure destinations for success/failure
- Dead Letter Queue (DLQ) for failed events

**Stream-based** (Kinesis, DynamoDB Streams):
- Retries until data expires or succeeds
- Blocks shard processing on error
- Configure maximum retry attempts
- Can bisect batch on function error

Best practices:
\`\`\`python
import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    try:
        # Process event
        result = process_data(event)

        logger.info(f"Successfully processed: {result}")
        return {
            'statusCode': 200,
            'body': json.dumps(result)
        }

    except ValueError as e:
        # Non-retryable error (bad input)
        logger.error(f"Invalid input: {str(e)}")
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid input'})
        }

    except Exception as e:
        # Retryable error
        logger.error(f"Processing failed: {str(e)}")
        raise  # Let Lambda retry
\`\`\`

Configuration:
- Set maximum retry attempts
- Configure DLQ (SQS or SNS)
- Use destinations for async invocations
- Implement idempotency for safe retries
- Monitor with CloudWatch metrics`,
    difficulty: 'Intermediate',
    tags: ['lambda', 'error-handling', 'reliability']
  },

  // EC2 Questions
  {
    id: 'ec2-1',
    category: 'Amazon EC2',
    question: 'Explain the differences between EC2 instance types and when to use each.',
    answer: `EC2 instance types are optimized for different use cases:

**General Purpose (T, M series):**
- T3/T4g: Burstable performance for variable workloads
- M5/M6: Balanced compute, memory, networking
- Use: Web servers, development environments, small databases

**Compute Optimized (C series):**
- C5/C6: High CPU to memory ratio
- Use: Batch processing, HPC, gaming servers, ML inference

**Memory Optimized (R, X, z series):**
- R5/R6: High memory to CPU ratio
- X1/X2: Largest memory (up to 4TB)
- Use: In-memory databases, big data processing, caching

**Storage Optimized (I, D, H series):**
- I3: High IOPS NVMe SSD
- D2/D3: Dense HDD storage
- H1: High disk throughput
- Use: NoSQL databases, data warehousing, Hadoop

**Accelerated Computing (P, G, F series):**
- P3/P4: GPU for ML training
- G4: GPU for ML inference, graphics
- F1: FPGA for hardware acceleration
- Use: AI/ML, video encoding, genomics

**Burstable (T series):**
- Baseline CPU with burst credits
- Cost-effective for variable workloads
- Monitor CPU credit balance

Naming convention: c5.xlarge
- c: Instance family
- 5: Generation
- xlarge: Size (nano < micro < small < medium < large < xlarge < 2xlarge...)`,
    difficulty: 'Intermediate',
    tags: ['ec2', 'instance-types', 'architecture']
  },
  {
    id: 'ec2-2',
    category: 'Amazon EC2',
    question: 'What are the different EC2 pricing models and when should you use each?',
    answer: `**1. On-Demand Instances:**
- Pay per second/hour
- No commitment
- Use for: Short-term, unpredictable workloads, testing

**2. Reserved Instances:**
- 1 or 3-year commitment
- Up to 75% discount
- Types:
  - Standard RI: Highest discount, can't change instance family
  - Convertible RI: Lower discount, can change instance family
  - Scheduled RI: Reserved for specific time windows
- Use for: Steady-state workloads, predictable usage

**3. Spot Instances:**
- Bid for unused capacity
- Up to 90% discount
- Can be interrupted with 2-minute warning
- Use for: Fault-tolerant, flexible workloads (batch jobs, data analysis)

**4. Savings Plans:**
- Commit to consistent usage ($/hour) for 1 or 3 years
- Up to 72% discount
- More flexible than RIs
- Types:
  - Compute Savings Plans: Most flexible
  - EC2 Instance Savings Plans: Lower prices
- Use for: Consistent usage with flexibility needs

**5. Dedicated Hosts:**
- Physical server dedicated to you
- Per-host pricing
- Use for: Compliance, licensing requirements

**6. Dedicated Instances:**
- Instances on hardware dedicated to you
- Per-instance pricing
- Use for: Regulatory requirements

Cost optimization strategy:
\`\`\`
Baseline workload (24/7): Reserved Instances or Savings Plans
Variable workload: On-Demand
Batch processing: Spot Instances
Testing/Development: Spot or On-Demand
\`\`\``,
    difficulty: 'Intermediate',
    tags: ['ec2', 'pricing', 'cost-optimization']
  },

  // S3 Questions
  {
    id: 's3-1',
    category: 'Amazon S3',
    question: 'Explain S3 storage classes and their use cases.',
    answer: `**S3 Standard:**
- 99.99% availability
- 11 9's durability
- Low latency, high throughput
- Use: Frequently accessed data

**S3 Intelligent-Tiering:**
- Automatic cost optimization
- Moves data between access tiers
- No retrieval fees
- Use: Unknown or changing access patterns

**S3 Standard-IA (Infrequent Access):**
- Lower storage cost
- Retrieval fee
- 30-day minimum storage
- Use: Backups, disaster recovery, long-lived but infrequently accessed

**S3 One Zone-IA:**
- Single AZ storage
- Lower cost than Standard-IA
- Use: Secondary backups, recreatable data

**S3 Glacier Instant Retrieval:**
- Archive storage
- Millisecond retrieval
- Lower cost than Standard-IA
- 90-day minimum storage
- Use: Archive data requiring immediate access

**S3 Glacier Flexible Retrieval:**
- Lower cost archive
- Retrieval: 1-5 minutes (expedited) to 12 hours
- 90-day minimum storage
- Use: Archive with occasional access (quarterly reports)

**S3 Glacier Deep Archive:**
- Lowest cost storage
- Retrieval: 12-48 hours
- 180-day minimum storage
- Use: Long-term retention (7-10+ years)

Lifecycle policy example:
\`\`\`json
{
  "Rules": [{
    "Id": "Archive old logs",
    "Status": "Enabled",
    "Transitions": [
      {
        "Days": 30,
        "StorageClass": "STANDARD_IA"
      },
      {
        "Days": 90,
        "StorageClass": "GLACIER"
      }
    ],
    "Expiration": {
      "Days": 365
    }
  }]
}
\`\`\``,
    difficulty: 'Intermediate',
    tags: ['s3', 'storage', 'cost-optimization']
  },
  {
    id: 's3-2',
    category: 'Amazon S3',
    question: 'How do you secure data in S3?',
    answer: `**Encryption:**

1. **Server-Side Encryption (SSE):**
   - SSE-S3: AWS managed keys
   - SSE-KMS: AWS KMS keys with audit trail
   - SSE-C: Customer-provided keys

2. **Client-Side Encryption:**
   - Encrypt before uploading
   - Full control over keys

**Access Control:**

1. **IAM Policies:**
   - Control access for IAM users/roles
   - Attached to identities

2. **Bucket Policies:**
   - JSON-based resource policies
   - Attached to buckets
   - Allow cross-account access

3. **ACLs (Access Control Lists):**
   - Legacy access control
   - Bucket and object level
   - Not recommended for new applications

4. **S3 Block Public Access:**
   - Account and bucket level
   - Override other policies
   - Prevent accidental public exposure

**Example secure configuration:**
\`\`\`python
import boto3

s3 = boto3.client('s3')

# Enable encryption
s3.put_bucket_encryption(
    Bucket='my-bucket',
    ServerSideEncryptionConfiguration={
        'Rules': [{
            'ApplyServerSideEncryptionByDefault': {
                'SSEAlgorithm': 'aws:kms',
                'KMSMasterKeyID': 'arn:aws:kms:...'
            }
        }]
    }
)

# Enable versioning
s3.put_bucket_versioning(
    Bucket='my-bucket',
    VersioningConfiguration={'Status': 'Enabled'}
)

# Block public access
s3.put_public_access_block(
    Bucket='my-bucket',
    PublicAccessBlockConfiguration={
        'BlockPublicAcls': True,
        'IgnorePublicAcls': True,
        'BlockPublicPolicy': True,
        'RestrictPublicBuckets': True
    }
)
\`\`\`

**Additional security measures:**
- Enable MFA Delete for versioned buckets
- Use VPC Endpoints for private access
- Enable S3 Access Logging
- Use CloudTrail for API auditing
- Implement least privilege access
- Use pre-signed URLs for temporary access`,
    difficulty: 'Advanced',
    tags: ['s3', 'security', 'encryption']
  },

  // DynamoDB Questions
  {
    id: 'dynamodb-1',
    category: 'DynamoDB',
    question: 'Explain partition keys, sort keys, and how to design effective DynamoDB tables.',
    answer: `**Key Concepts:**

**Partition Key (PK):**
- Unique identifier for item
- Determines which partition stores data
- Must be unique if no sort key
- Hash function determines partition

**Sort Key (SK):**
- Optional secondary identifier
- Enables range queries
- PK + SK must be unique together
- Stored in sorted order within partition

**Design Patterns:**

1. **Single-table design:**
   - Store multiple entity types in one table
   - Use generic attribute names (PK, SK, GSI1PK, GSI1SK)
   - Overload attributes

2. **Composite keys:**
   - Combine values: USER#123, ORDER#456
   - Enable hierarchical data access

**Best Practices:**

1. **Choose good partition keys:**
   - High cardinality (many unique values)
   - Even distribution of access
   - Avoid hot partitions

Bad: status (limited values)
Good: userId (many unique values)

2. **Use sort keys for:**
   - Range queries
   - Sorting
   - Hierarchical data
   - Multiple item types per partition

Example schema:
\`\`\`
Table: Users
PK: USER#userId
SK: METADATA#email

PK: USER#userId
SK: ORDER#timestamp#orderId

PK: USER#userId
SK: ADDRESS#addressId

# Access patterns:
- Get user: PK = USER#123, SK = METADATA
- Get orders: PK = USER#123, SK begins_with ORDER#
- Get orders by date range: PK = USER#123, SK between ORDER#2024-01 and ORDER#2024-02
\`\`\`

3. **Secondary Indexes:**

**Global Secondary Index (GSI):**
- Different PK and/or SK
- Eventually consistent
- Own capacity units
- Use: Query by different attributes

**Local Secondary Index (LSI):**
- Same PK, different SK
- Strongly consistent option
- Shares capacity with table
- Must be created at table creation

4. **Avoid:**
   - Scans (use Query instead)
   - Hot partitions
   - Large items (> 400KB)
   - Too many GSIs (limit: 20)`,
    difficulty: 'Advanced',
    tags: ['dynamodb', 'data-modeling', 'design']
  },

  // VPC Questions
  {
    id: 'vpc-1',
    category: 'VPC',
    question: 'Explain the difference between Security Groups and Network ACLs.',
    answer: `**Security Groups (SGs):**

Characteristics:
- **Stateful**: Return traffic automatically allowed
- **Instance level**: Attached to ENI (network interface)
- **Allow rules only**: Can't explicitly deny
- **All rules evaluated**: Before allowing traffic
- **Support references**: Can reference other security groups

Example use:
\`\`\`
Inbound Rules:
- SSH (22) from MyIP
- HTTP (80) from anywhere
- HTTPS (443) from anywhere
- MySQL (3306) from WebServerSG

Outbound Rules:
- All traffic (default)
\`\`\`

**Network ACLs (NACLs):**

Characteristics:
- **Stateless**: Must explicitly allow return traffic
- **Subnet level**: Apply to all instances in subnet
- **Allow and deny rules**: Can explicitly deny
- **Numbered rules**: Evaluated in order (lowest first)
- **Default NACL**: Allows all inbound/outbound

Example use:
\`\`\`
Rule# | Type | Protocol | Port | Source | Action
100   | All  | All      | All  | 0.0.0.0/0 | ALLOW
200   | SSH  | TCP      | 22   | BadIP | DENY
*     | All  | All      | All  | 0.0.0.0/0 | DENY
\`\`\`

**Key Differences:**

| Feature | Security Group | Network ACL |
|---------|---------------|-------------|
| Level | Instance | Subnet |
| State | Stateful | Stateless |
| Rules | Allow only | Allow & Deny |
| Evaluation | All rules | Ordered |
| Application | Explicit | Automatic |

**Best Practices:**

1. **Defense in depth**: Use both
2. **Security Groups**: Primary security control
3. **NACLs**: Additional layer, deny specific IPs
4. **Security Groups**: Fine-grained rules
5. **NACLs**: Broad subnet protection

**Example Architecture:**
\`\`\`
NACL (Subnet level):
- Deny known bad IPs
- Allow common ports

Security Group (Instance level):
- Allow SSH from bastion SG
- Allow HTTP from ALB SG
- Allow database from app SG
\`\`\``,
    difficulty: 'Intermediate',
    tags: ['vpc', 'security', 'networking']
  },

  // API Gateway Questions
  {
    id: 'api-gateway-1',
    category: 'API Gateway',
    question: 'What are the different types of APIs in API Gateway and when to use each?',
    answer: `**1. REST API:**

Features:
- Full REST API support
- API keys and usage plans
- Request/response transformation
- API caching
- Custom domain names
- Multiple stages
- AWS WAF integration

Use when you need:
- Full API management features
- Request validation
- SDK generation
- Cache
- Complex integrations

Pricing: Pay per request + data transfer

**2. HTTP API:**

Features:
- Simpler, faster, cheaper
- OIDC and OAuth 2.0
- CORS support
- Automatic deployments
- Basic request routing

Use when you need:
- Simple proxy to Lambda or HTTP endpoints
- Lower cost (up to 71% cheaper)
- Lower latency
- JWT authorization

Pricing: Lower per-request cost

**3. WebSocket API:**

Features:
- Persistent connections
- Bi-directional communication
- Connection management
- Message routing

Use when you need:
- Real-time applications
- Chat applications
- Live dashboards
- Collaborative tools
- Gaming backends

Routing:
\`\`\`json
{
  "$default": "arn:aws:lambda:...",
  "sendMessage": "arn:aws:lambda:...",
  "disconnect": "arn:aws:lambda:..."
}
\`\`\`

**Comparison:**

| Feature | REST API | HTTP API | WebSocket |
|---------|----------|----------|-----------|
| Protocol | HTTP/HTTPS | HTTP/HTTPS | WSS |
| Caching | Yes | No | No |
| Usage Plans | Yes | No | No |
| Transform | Yes | Limited | No |
| Price | $$$ | $ | $$ |
| Latency | Higher | Lower | Persistent |

**Example: When to choose:**

REST API:
- Enterprise API with caching
- Need request transformation
- Require usage plans/API keys

HTTP API:
- Simple Lambda proxy
- Modern auth (JWT)
- Cost-sensitive
- Microservices

WebSocket API:
- Chat application
- Live updates
- Multiplayer games
- IoT device communication`,
    difficulty: 'Intermediate',
    tags: ['api-gateway', 'architecture', 'rest', 'websocket']
  },

  // General AWS Questions
  {
    id: 'general-1',
    category: 'General AWS',
    question: 'Explain the Shared Responsibility Model in AWS.',
    answer: `The AWS Shared Responsibility Model defines security responsibilities between AWS and customers.

**AWS Responsibility - "Security OF the Cloud":**
- Physical security of data centers
- Hardware infrastructure
- Network infrastructure
- Virtualization infrastructure
- Physical servers
- Physical networking
- Physical storage
- Regions, AZs, edge locations

**Customer Responsibility - "Security IN the Cloud":**
- Customer data
- Applications
- Identity and Access Management
- Operating systems
- Network configuration
- Firewall rules
- Encryption (data at rest and in transit)
- Server-side encryption
- Network traffic protection
- Platform, application management
- Client-side data encryption

**Service-Specific Responsibilities:**

**Infrastructure Services (EC2, EBS, VPC):**
Customer manages:
- Guest OS
- Applications
- Security groups
- Firewall rules
- Network configuration
- Account management

**Container Services (RDS, EMR, Elastic Beanstalk):**
AWS manages:
- OS
- Platform patching
Customer manages:
- Application code
- Data
- Network configuration

**Abstracted Services (S3, DynamoDB, Lambda):**
AWS manages:
- Infrastructure
- Platform
- Server-side encryption (optional)
Customer manages:
- Data
- Access policies
- Client-side encryption (optional)

**Best Practices:**
1. Understand your responsibilities for each service
2. Enable encryption at rest and in transit
3. Implement proper IAM policies
4. Regular security audits
5. Enable CloudTrail and CloudWatch
6. Use AWS security services (GuardDuty, Security Hub)
7. Keep applications and libraries updated
8. Implement principle of least privilege`,
    difficulty: 'Beginner',
    tags: ['security', 'compliance', 'general']
  },
  {
    id: 'general-2',
    category: 'General AWS',
    question: 'How do you design a highly available and fault-tolerant architecture on AWS?',
    answer: `**Key Principles:**

1. **Multi-AZ Deployment:**
   - Deploy across multiple Availability Zones
   - Protect against data center failures
   - Use at least 2 AZs (3 preferred)

2. **Loose Coupling:**
   - Use SQS for asynchronous communication
   - Use SNS for pub/sub patterns
   - Use EventBridge for event-driven architecture
   - Implement graceful degradation

3. **Horizontal Scaling:**
   - Auto Scaling groups
   - Stateless applications
   - Distribute load evenly

4. **Load Balancing:**
   - Application Load Balancer (ALB) for HTTP/HTTPS
   - Network Load Balancer (NLB) for TCP/UDP
   - Health checks
   - Cross-zone load balancing

5. **Database Strategy:**
   - RDS Multi-AZ for high availability
   - Read replicas for scaling reads
   - DynamoDB global tables for multi-region
   - Regular automated backups

**Reference Architecture:**
\`\`\`
Users
  ↓
Route 53 (DNS with health checks)
  ↓
CloudFront (CDN)
  ↓
Application Load Balancer (Multi-AZ)
  ↓
Auto Scaling Group (Multi-AZ)
  ├─ EC2 Instance (AZ-1a)
  ├─ EC2 Instance (AZ-1b)
  └─ EC2 Instance (AZ-1c)
  ↓
RDS Multi-AZ
ElastiCache (Multi-AZ)
  ↓
S3 (11 9's durability)
\`\`\`

**Disaster Recovery Strategies:**

1. **Backup and Restore** (cheapest, longest RTO/RPO)
   - Regular backups to S3
   - Restore when needed

2. **Pilot Light** (core infrastructure always running)
   - Minimal version running
   - Scale up in disaster

3. **Warm Standby** (scaled-down version running)
   - Fully functional but smaller
   - Scale up quickly

4. **Multi-Region Active-Active** (most expensive, lowest RTO/RPO)
   - Full deployment in multiple regions
   - Route 53 for failover

**Implementation Checklist:**
- ✓ Multi-AZ deployment
- ✓ Auto Scaling configured
- ✓ Health checks enabled
- ✓ Monitoring and alarms
- ✓ Automated backups
- ✓ Disaster recovery plan tested
- ✓ Use managed services when possible
- ✓ Implement retries with exponential backoff
- ✓ Circuit breaker pattern
- ✓ Regular failover testing

**AWS Services for HA:**
- Route 53: DNS failover
- CloudFront: Global edge caching
- S3: 11 9's durability
- DynamoDB: Multi-AZ by default
- Lambda: Multiple AZ execution
- ELB: Automatic Multi-AZ
- Auto Scaling: Self-healing`,
    difficulty: 'Advanced',
    tags: ['architecture', 'high-availability', 'fault-tolerance']
  }
];

export const interviewCategories = [
  'AWS Lambda',
  'Amazon EC2',
  'Amazon S3',
  'DynamoDB',
  'VPC',
  'API Gateway',
  'General AWS'
];
