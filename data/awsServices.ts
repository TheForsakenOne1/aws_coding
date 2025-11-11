export interface AWSService {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  codingRequired: boolean;
  programmingLanguages: string[];
  useCases: string[];
  keyFeatures: string[];
  codeExample?: string;
  interviewTopics: string[];
  bestPractices: string[];
}

export const awsServices: AWSService[] = [
  // Compute Services
  {
    id: 'lambda',
    title: 'AWS Lambda',
    description: 'Serverless compute service that runs your code in response to events',
    icon: '⚡',
    category: 'Compute',
    codingRequired: true,
    programmingLanguages: ['Python', 'Node.js', 'Java', 'Go', 'C#', 'Ruby', 'PowerShell'],
    useCases: [
      'Event-driven applications',
      'Real-time file processing',
      'API backends',
      'Data transformation',
      'Scheduled tasks',
      'Stream processing'
    ],
    keyFeatures: [
      'Auto-scaling',
      'Pay-per-execution',
      'Integrated with 200+ AWS services',
      'Built-in fault tolerance',
      'Stateless execution',
      'Maximum 15-minute execution time'
    ],
    codeExample: `import json
import boto3

def lambda_handler(event, context):
    # Your Lambda function code
    s3 = boto3.client('s3')

    # Process event
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']

    # Your business logic here
    print(f"Processing file: {key} from bucket: {bucket}")

    return {
        'statusCode': 200,
        'body': json.dumps('Processing complete!')
    }`,
    interviewTopics: [
      'Cold starts and warm starts',
      'Lambda layers and deployment packages',
      'Execution context reuse',
      'Environment variables and secrets management',
      'Lambda@Edge for CloudFront',
      'Concurrency limits and throttling',
      'Integration with API Gateway, S3, DynamoDB',
      'Lambda pricing model'
    ],
    bestPractices: [
      'Keep functions small and focused',
      'Minimize deployment package size',
      'Use environment variables for configuration',
      'Implement proper error handling',
      'Leverage Lambda layers for shared code',
      'Use provisioned concurrency for critical workloads'
    ]
  },
  {
    id: 'ec2',
    title: 'Amazon EC2',
    description: 'Virtual servers in the cloud with complete control over computing resources',
    icon: '🖥️',
    category: 'Compute',
    codingRequired: true,
    programmingLanguages: ['Python', 'Bash', 'Any language'],
    useCases: [
      'Web application hosting',
      'High-performance computing',
      'Machine learning training',
      'Development and test environments',
      'Disaster recovery',
      'Enterprise applications'
    ],
    keyFeatures: [
      'Multiple instance types',
      'Auto Scaling groups',
      'Elastic Load Balancing',
      'EC2 Instance Store',
      'Elastic IP addresses',
      'Spot Instances for cost savings'
    ],
    codeExample: `import boto3

# Create EC2 client
ec2 = boto3.client('ec2', region_name='us-east-1')

# Launch an EC2 instance
response = ec2.run_instances(
    ImageId='ami-0c55b159cbfafe1f0',
    InstanceType='t2.micro',
    MinCount=1,
    MaxCount=1,
    KeyName='my-key-pair',
    SecurityGroupIds=['sg-123456'],
    SubnetId='subnet-123456',
    TagSpecifications=[
        {
            'ResourceType': 'instance',
            'Tags': [{'Key': 'Name', 'Value': 'MyWebServer'}]
        }
    ]
)

instance_id = response['Instances'][0]['InstanceId']
print(f"Launched instance: {instance_id}")`,
    interviewTopics: [
      'Instance types and families',
      'EC2 pricing models (On-Demand, Reserved, Spot)',
      'AMI creation and management',
      'Security groups vs NACLs',
      'User data scripts for bootstrapping',
      'Placement groups',
      'EC2 metadata service',
      'Auto Scaling strategies'
    ],
    bestPractices: [
      'Use IAM roles instead of access keys',
      'Enable detailed monitoring',
      'Regular AMI backups',
      'Use Auto Scaling for high availability',
      'Implement proper security group rules',
      'Tag resources for better management'
    ]
  },
  {
    id: 'ecs',
    title: 'Amazon ECS',
    description: 'Fully managed container orchestration service for Docker containers',
    icon: '🐳',
    category: 'Compute',
    codingRequired: true,
    programmingLanguages: ['Any language', 'Docker'],
    useCases: [
      'Microservices architecture',
      'Batch processing',
      'CI/CD pipelines',
      'Web applications',
      'Machine learning inference'
    ],
    keyFeatures: [
      'Fargate for serverless containers',
      'EC2 launch type for more control',
      'Service discovery',
      'Load balancing integration',
      'Auto scaling',
      'Blue/green deployments'
    ],
    codeExample: `{
  "family": "my-app",
  "containerDefinitions": [{
    "name": "web",
    "image": "nginx:latest",
    "memory": 512,
    "cpu": 256,
    "portMappings": [{
      "containerPort": 80,
      "protocol": "tcp"
    }],
    "environment": [{
      "name": "ENV",
      "value": "production"
    }]
  }],
  "requiresCompatibilities": ["FARGATE"],
  "networkMode": "awsvpc",
  "cpu": "256",
  "memory": "512"
}`,
    interviewTopics: [
      'ECS vs EKS vs Fargate',
      'Task definitions and services',
      'Cluster capacity providers',
      'Service auto scaling',
      'Container instance draining',
      'Task placement strategies',
      'Integration with ALB/NLB',
      'ECS Anywhere'
    ],
    bestPractices: [
      'Use Fargate for simplified operations',
      'Implement health checks',
      'Use service discovery for microservices',
      'Leverage task IAM roles',
      'Monitor with CloudWatch Container Insights',
      'Use ECR for container images'
    ]
  },

  // Storage Services
  {
    id: 's3',
    title: 'Amazon S3',
    description: 'Object storage service with industry-leading scalability and durability',
    icon: '🪣',
    category: 'Storage',
    codingRequired: true,
    programmingLanguages: ['Python', 'Node.js', 'Java', 'Go', 'Any with SDK'],
    useCases: [
      'Static website hosting',
      'Data lakes',
      'Backup and restore',
      'Content distribution',
      'Big data analytics',
      'Application data storage'
    ],
    keyFeatures: [
      '99.999999999% durability',
      'Storage classes for cost optimization',
      'Versioning',
      'Lifecycle policies',
      'Server-side encryption',
      'Event notifications'
    ],
    codeExample: `import boto3

# Create S3 client
s3 = boto3.client('s3')

# Upload file
s3.upload_file(
    'local-file.txt',
    'my-bucket',
    'remote-file.txt',
    ExtraArgs={'ServerSideEncryption': 'AES256'}
)

# Download file
s3.download_file('my-bucket', 'remote-file.txt', 'downloaded.txt')

# List objects
response = s3.list_objects_v2(Bucket='my-bucket', Prefix='folder/')
for obj in response.get('Contents', []):
    print(obj['Key'])

# Generate presigned URL
url = s3.generate_presigned_url(
    'get_object',
    Params={'Bucket': 'my-bucket', 'Key': 'file.txt'},
    ExpiresIn=3600
)`,
    interviewTopics: [
      'S3 storage classes (Standard, IA, Glacier)',
      'S3 consistency model',
      'Cross-region replication',
      'S3 security (bucket policies, ACLs, encryption)',
      'S3 event notifications',
      'Multipart upload',
      'S3 Transfer Acceleration',
      'S3 Select for querying'
    ],
    bestPractices: [
      'Enable versioning for critical data',
      'Use lifecycle policies for cost optimization',
      'Implement least privilege access',
      'Enable server-side encryption',
      'Use CloudFront for content delivery',
      'Monitor with S3 Storage Lens'
    ]
  },
  {
    id: 'ebs',
    title: 'Amazon EBS',
    description: 'Block storage volumes for EC2 instances with high performance',
    icon: '💾',
    category: 'Storage',
    codingRequired: true,
    programmingLanguages: ['Python', 'Bash', 'Any with SDK'],
    useCases: [
      'Database storage',
      'Enterprise applications',
      'Boot volumes',
      'Data warehousing',
      'High-performance computing'
    ],
    keyFeatures: [
      'Multiple volume types (gp3, io2, st1, sc1)',
      'Snapshots for backup',
      'Encryption at rest',
      'Volume modification',
      'Multi-Attach for io2',
      'Fast snapshot restore'
    ],
    codeExample: `import boto3

ec2 = boto3.client('ec2')

# Create EBS volume
volume = ec2.create_volume(
    AvailabilityZone='us-east-1a',
    Size=100,
    VolumeType='gp3',
    Encrypted=True,
    TagSpecifications=[{
        'ResourceType': 'volume',
        'Tags': [{'Key': 'Name', 'Value': 'MyDataVolume'}]
    }]
)

# Create snapshot
snapshot = ec2.create_snapshot(
    VolumeId=volume['VolumeId'],
    Description='Daily backup'
)

# Attach volume to instance
ec2.attach_volume(
    Device='/dev/sdf',
    InstanceId='i-1234567890abcdef0',
    VolumeId=volume['VolumeId']
)`,
    interviewTopics: [
      'EBS volume types and use cases',
      'IOPS and throughput',
      'EBS snapshots and backup strategies',
      'EBS encryption',
      'Volume modification and resizing',
      'EBS optimization',
      'RAID configurations',
      'Data lifecycle management'
    ],
    bestPractices: [
      'Choose appropriate volume type',
      'Enable encryption by default',
      'Regular snapshot backups',
      'Use gp3 for cost-effective performance',
      'Monitor with CloudWatch metrics',
      'Implement snapshot lifecycle policies'
    ]
  },

  // Database Services
  {
    id: 'dynamodb',
    title: 'Amazon DynamoDB',
    description: 'Fully managed NoSQL database service with single-digit millisecond latency',
    icon: '🗄️',
    category: 'Database',
    codingRequired: true,
    programmingLanguages: ['Python', 'Node.js', 'Java', 'Go', 'Any with SDK'],
    useCases: [
      'Gaming leaderboards',
      'IoT data storage',
      'Session management',
      'Shopping carts',
      'Real-time bidding',
      'Mobile backends'
    ],
    keyFeatures: [
      'Single-digit millisecond latency',
      'Auto scaling',
      'Global tables for multi-region',
      'DynamoDB Streams',
      'Point-in-time recovery',
      'On-demand and provisioned capacity'
    ],
    codeExample: `import boto3
from boto3.dynamodb.conditions import Key

# Create DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')

# Put item
table.put_item(
    Item={
        'userId': '123',
        'name': 'John Doe',
        'email': 'john@example.com',
        'createdAt': '2024-01-01'
    }
)

# Get item
response = table.get_item(Key={'userId': '123'})
item = response['Item']

# Query
response = table.query(
    KeyConditionExpression=Key('userId').eq('123')
)

# Scan with filter
response = table.scan(
    FilterExpression='attribute_exists(email)'
)

# Update item
table.update_item(
    Key={'userId': '123'},
    UpdateExpression='SET #n = :name',
    ExpressionAttributeNames={'#n': 'name'},
    ExpressionAttributeValues={':name': 'Jane Doe'}
)`,
    interviewTopics: [
      'Partition keys and sort keys',
      'Global vs Local secondary indexes',
      'Read/write capacity modes',
      'DynamoDB Streams and Lambda triggers',
      'Query vs Scan operations',
      'Conditional writes',
      'Transactions',
      'DynamoDB Accelerator (DAX)'
    ],
    bestPractices: [
      'Design efficient partition keys',
      'Use sparse indexes',
      'Implement caching with DAX',
      'Enable point-in-time recovery',
      'Use on-demand for unpredictable workloads',
      'Leverage DynamoDB Streams for event-driven architectures'
    ]
  },
  {
    id: 'rds',
    title: 'Amazon RDS',
    description: 'Managed relational database service supporting multiple database engines',
    icon: '🗃️',
    category: 'Database',
    codingRequired: true,
    programmingLanguages: ['SQL', 'Python', 'Any with database drivers'],
    useCases: [
      'Web applications',
      'E-commerce platforms',
      'Enterprise applications',
      'SaaS applications',
      'Mobile and gaming'
    ],
    keyFeatures: [
      'Multiple engines (MySQL, PostgreSQL, Oracle, SQL Server)',
      'Automated backups',
      'Multi-AZ deployments',
      'Read replicas',
      'Automatic failover',
      'Performance Insights'
    ],
    codeExample: `import boto3
import pymysql

# Create RDS client
rds = boto3.client('rds')

# Create database instance
response = rds.create_db_instance(
    DBInstanceIdentifier='mydb',
    DBInstanceClass='db.t3.micro',
    Engine='mysql',
    MasterUsername='admin',
    MasterUserPassword='password123',
    AllocatedStorage=20,
    MultiAZ=True,
    PubliclyAccessible=False,
    VpcSecurityGroupIds=['sg-123456']
)

# Connect to database
connection = pymysql.connect(
    host='mydb.abc123.us-east-1.rds.amazonaws.com',
    user='admin',
    password='password123',
    database='myapp'
)

with connection.cursor() as cursor:
    cursor.execute('SELECT * FROM users')
    results = cursor.fetchall()`,
    interviewTopics: [
      'RDS vs Aurora',
      'Multi-AZ vs Read Replicas',
      'Backup and restore strategies',
      'Parameter groups and option groups',
      'Security best practices',
      'Performance tuning',
      'RDS Proxy',
      'Blue/green deployments'
    ],
    bestPractices: [
      'Enable automated backups',
      'Use Multi-AZ for high availability',
      'Implement read replicas for read scaling',
      'Use IAM database authentication',
      'Enable encryption at rest',
      'Monitor with Performance Insights'
    ]
  },

  // Networking Services
  {
    id: 'api-gateway',
    title: 'Amazon API Gateway',
    description: 'Fully managed service to create, publish, and manage APIs at any scale',
    icon: '🔌',
    category: 'Networking',
    codingRequired: true,
    programmingLanguages: ['OpenAPI/Swagger', 'Any for backend'],
    useCases: [
      'RESTful APIs',
      'WebSocket APIs',
      'Microservices',
      'Mobile backends',
      'Serverless applications',
      'API proxying'
    ],
    keyFeatures: [
      'Request/response transformation',
      'API versioning',
      'Throttling and rate limiting',
      'API keys and usage plans',
      'Custom domain names',
      'CORS support'
    ],
    codeExample: `# API Gateway with Lambda integration (Terraform)
resource "aws_api_gateway_rest_api" "api" {
  name = "my-api"
}

resource "aws_api_gateway_resource" "resource" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  parent_id   = aws_api_gateway_rest_api.api.root_resource_id
  path_part   = "users"
}

resource "aws_api_gateway_method" "method" {
  rest_api_id   = aws_api_gateway_rest_api.api.id
  resource_id   = aws_api_gateway_resource.resource.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "integration" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  resource_id = aws_api_gateway_resource.resource.id
  http_method = aws_api_gateway_method.method.http_method
  type        = "AWS_PROXY"
  uri         = aws_lambda_function.lambda.invoke_arn
}`,
    interviewTopics: [
      'REST vs HTTP vs WebSocket APIs',
      'Integration types (Lambda, HTTP, AWS services)',
      'Request/response mapping',
      'API Gateway caching',
      'Throttling and quotas',
      'API Gateway stages',
      'Custom authorizers',
      'API Gateway pricing'
    ],
    bestPractices: [
      'Enable caching for better performance',
      'Implement proper throttling',
      'Use custom domains',
      'Enable CloudWatch logging',
      'Implement request validation',
      'Use API keys for partner APIs'
    ]
  },
  {
    id: 'cloudfront',
    title: 'Amazon CloudFront',
    description: 'Fast content delivery network (CDN) service with global edge locations',
    icon: '🌐',
    category: 'Networking',
    codingRequired: true,
    programmingLanguages: ['JavaScript (Lambda@Edge)', 'Any for origin'],
    useCases: [
      'Static website hosting',
      'Video streaming',
      'API acceleration',
      'Software distribution',
      'Dynamic content delivery'
    ],
    keyFeatures: [
      '400+ edge locations worldwide',
      'HTTPS support',
      'Lambda@Edge',
      'Origin shield',
      'Field-level encryption',
      'Real-time metrics'
    ],
    codeExample: `import boto3

cloudfront = boto3.client('cloudfront')

# Create distribution
response = cloudfront.create_distribution(
    DistributionConfig={
        'CallerReference': 'unique-ref-123',
        'Origins': {
            'Quantity': 1,
            'Items': [{
                'Id': 's3-origin',
                'DomainName': 'mybucket.s3.amazonaws.com',
                'S3OriginConfig': {
                    'OriginAccessIdentity': ''
                }
            }]
        },
        'DefaultCacheBehavior': {
            'TargetOriginId': 's3-origin',
            'ViewerProtocolPolicy': 'redirect-to-https',
            'AllowedMethods': {
                'Quantity': 2,
                'Items': ['GET', 'HEAD']
            },
            'ForwardedValues': {
                'QueryString': False,
                'Cookies': {'Forward': 'none'}
            },
            'TrustedSigners': {
                'Enabled': False,
                'Quantity': 0
            }
        },
        'Enabled': True,
        'Comment': 'My CDN distribution'
    }
)`,
    interviewTopics: [
      'Edge locations vs Regional edge caches',
      'Cache behavior and TTL',
      'Lambda@Edge use cases',
      'Origin access identity',
      'CloudFront Functions vs Lambda@Edge',
      'Signed URLs and cookies',
      'Cache invalidation',
      'CloudFront pricing'
    ],
    bestPractices: [
      'Use appropriate cache TTLs',
      'Enable compression',
      'Implement origin shield for popular content',
      'Use CloudFront Functions for lightweight transformations',
      'Enable access logs',
      'Use custom SSL certificates'
    ]
  },

  // Security Services
  {
    id: 'iam',
    title: 'AWS IAM',
    description: 'Identity and Access Management for secure access control',
    icon: '🔐',
    category: 'Security',
    codingRequired: true,
    programmingLanguages: ['JSON (policies)', 'Any with SDK'],
    useCases: [
      'User access management',
      'Service-to-service authentication',
      'Federated access',
      'Cross-account access',
      'Temporary credentials'
    ],
    keyFeatures: [
      'Fine-grained access control',
      'MFA support',
      'Identity federation',
      'IAM roles',
      'Policy simulator',
      'Access Analyzer'
    ],
    codeExample: `{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:PutObject"
    ],
    "Resource": "arn:aws:s3:::my-bucket/*",
    "Condition": {
      "StringLike": {
        "s3:prefix": ["documents/*"]
      }
    }
  }]
}

# Using IAM with boto3
import boto3

sts = boto3.client('sts')

# Assume role
response = sts.assume_role(
    RoleArn='arn:aws:iam::123456789012:role/MyRole',
    RoleSessionName='my-session'
)

credentials = response['Credentials']`,
    interviewTopics: [
      'IAM users vs roles vs groups',
      'Policy types (managed, inline, resource-based)',
      'Principal of least privilege',
      'IAM policy evaluation logic',
      'Cross-account access',
      'Service control policies (SCPs)',
      'IAM Access Analyzer',
      'Temporary security credentials'
    ],
    bestPractices: [
      'Use roles instead of users for applications',
      'Enable MFA for privileged users',
      'Implement least privilege access',
      'Rotate credentials regularly',
      'Use managed policies when possible',
      'Audit with IAM Access Analyzer'
    ]
  },
  {
    id: 'secrets-manager',
    title: 'AWS Secrets Manager',
    description: 'Securely store and manage secrets like API keys and database credentials',
    icon: '🔑',
    category: 'Security',
    codingRequired: true,
    programmingLanguages: ['Python', 'Node.js', 'Any with SDK'],
    useCases: [
      'Database credential rotation',
      'API key management',
      'OAuth tokens',
      'SSH keys',
      'Application secrets'
    ],
    keyFeatures: [
      'Automatic rotation',
      'Integration with RDS',
      'Encryption with KMS',
      'Fine-grained access control',
      'Audit with CloudTrail',
      'Cross-region replication'
    ],
    codeExample: `import boto3
import json

# Create Secrets Manager client
client = boto3.client('secretsmanager')

# Create secret
client.create_secret(
    Name='prod/myapp/db',
    SecretString=json.dumps({
        'username': 'admin',
        'password': 'super-secret-password'
    })
)

# Retrieve secret
response = client.get_secret_value(SecretId='prod/myapp/db')
secret = json.loads(response['SecretString'])

# Use in your application
db_username = secret['username']
db_password = secret['password']

# Rotate secret
client.rotate_secret(
    SecretId='prod/myapp/db',
    RotationLambdaARN='arn:aws:lambda:...'
)`,
    interviewTopics: [
      'Secrets Manager vs Parameter Store',
      'Automatic rotation strategies',
      'Encryption and KMS integration',
      'Secret versioning',
      'Cross-account access',
      'Caching strategies',
      'Cost optimization',
      'Integration patterns'
    ],
    bestPractices: [
      'Enable automatic rotation',
      'Use resource-based policies',
      'Implement secret caching',
      'Tag secrets for organization',
      'Monitor access with CloudTrail',
      'Use least privilege IAM policies'
    ]
  },

  // Developer Tools
  {
    id: 'codepipeline',
    title: 'AWS CodePipeline',
    description: 'Fully managed continuous delivery service for automated release pipelines',
    icon: '🚀',
    category: 'Developer Tools',
    codingRequired: true,
    programmingLanguages: ['YAML', 'JSON', 'Any for applications'],
    useCases: [
      'CI/CD automation',
      'Multi-stage deployments',
      'Infrastructure as code',
      'Container deployments',
      'Lambda deployments'
    ],
    keyFeatures: [
      'Source integration (GitHub, CodeCommit)',
      'Build with CodeBuild',
      'Deploy to multiple targets',
      'Manual approval gates',
      'Parallel execution',
      'Integration with third-party tools'
    ],
    codeExample: `# buildspec.yml for CodeBuild
version: 0.2

phases:
  install:
    runtime-versions:
      nodejs: 18
    commands:
      - npm install

  pre_build:
    commands:
      - npm run test
      - npm run lint

  build:
    commands:
      - npm run build
      - echo "Build completed"

  post_build:
    commands:
      - aws s3 sync ./dist s3://my-bucket/

artifacts:
  files:
    - '**/*'
  base-directory: dist`,
    interviewTopics: [
      'Pipeline stages and actions',
      'Source providers',
      'CodeBuild integration',
      'Deployment strategies',
      'Manual approval actions',
      'Cross-region deployments',
      'Pipeline execution modes',
      'Integration with CloudFormation'
    ],
    bestPractices: [
      'Implement automated testing',
      'Use manual approvals for production',
      'Version your buildspec files',
      'Implement rollback strategies',
      'Monitor pipeline metrics',
      'Use artifacts efficiently'
    ]
  },
  {
    id: 'cloudformation',
    title: 'AWS CloudFormation',
    description: 'Infrastructure as Code service to model and provision AWS resources',
    icon: '📋',
    category: 'Developer Tools',
    codingRequired: true,
    programmingLanguages: ['YAML', 'JSON', 'CDK (TypeScript, Python, etc.)'],
    useCases: [
      'Infrastructure automation',
      'Environment replication',
      'Disaster recovery',
      'Multi-region deployments',
      'Resource governance'
    ],
    keyFeatures: [
      'Declarative templates',
      'Stack management',
      'Change sets',
      'Drift detection',
      'Nested stacks',
      'StackSets for multi-account'
    ],
    codeExample: `AWSTemplateFormatVersion: '2010-09-09'
Description: 'Web application infrastructure'

Parameters:
  InstanceType:
    Type: String
    Default: t2.micro
    AllowedValues: [t2.micro, t2.small, t2.medium]

Resources:
  WebServerInstance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: !Ref LatestAmiId
      InstanceType: !Ref InstanceType
      SecurityGroupIds:
        - !Ref WebServerSecurityGroup
      Tags:
        - Key: Name
          Value: WebServer

  WebServerSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Allow HTTP traffic
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0

Outputs:
  InstanceId:
    Description: Instance ID
    Value: !Ref WebServerInstance`,
    interviewTopics: [
      'CloudFormation vs Terraform',
      'Intrinsic functions',
      'Stack parameters and outputs',
      'Change sets and stack updates',
      'Drift detection',
      'Custom resources',
      'StackSets for multi-account',
      'CloudFormation Registry'
    ],
    bestPractices: [
      'Use parameters for flexibility',
      'Implement change sets before updates',
      'Use nested stacks for modularity',
      'Enable termination protection',
      'Tag all resources',
      'Version control templates'
    ]
  },

  // Analytics Services
  {
    id: 'kinesis',
    title: 'Amazon Kinesis',
    description: 'Real-time streaming data platform for collecting and processing data',
    icon: '🌊',
    category: 'Analytics',
    codingRequired: true,
    programmingLanguages: ['Python', 'Java', 'Node.js', 'Go'],
    useCases: [
      'Log and event data processing',
      'Real-time analytics',
      'IoT data streaming',
      'Clickstream analysis',
      'Video streaming'
    ],
    keyFeatures: [
      'Real-time processing',
      'Kinesis Data Streams',
      'Kinesis Firehose',
      'Kinesis Analytics',
      'Kinesis Video Streams',
      'Auto scaling'
    ],
    codeExample: `import boto3
import json

kinesis = boto3.client('kinesis')

# Put record
kinesis.put_record(
    StreamName='my-stream',
    Data=json.dumps({
        'event': 'page_view',
        'user_id': '123',
        'timestamp': '2024-01-01T12:00:00Z'
    }),
    PartitionKey='user-123'
)

# Get records
response = kinesis.get_records(
    ShardIterator='...'
)

for record in response['Records']:
    data = json.loads(record['Data'])
    print(f"Processing: {data}")`,
    interviewTopics: [
      'Kinesis Data Streams vs Firehose',
      'Shards and partition keys',
      'Stream processing patterns',
      'Integration with Lambda',
      'Kinesis Consumer Library (KCL)',
      'Data retention',
      'Enhanced fan-out',
      'Kinesis vs SQS vs SNS'
    ],
    bestPractices: [
      'Choose appropriate shard count',
      'Use partition keys effectively',
      'Implement error handling',
      'Monitor with CloudWatch',
      'Use enhanced fan-out for multiple consumers',
      'Consider Firehose for simple use cases'
    ]
  },
  {
    id: 'athena',
    title: 'Amazon Athena',
    description: 'Interactive query service to analyze data in S3 using standard SQL',
    icon: '🔍',
    category: 'Analytics',
    codingRequired: true,
    programmingLanguages: ['SQL'],
    useCases: [
      'Log analysis',
      'Ad-hoc queries',
      'Data lake analytics',
      'Business intelligence',
      'Cost analysis'
    ],
    keyFeatures: [
      'Serverless',
      'Standard SQL',
      'Integration with AWS Glue',
      'Supports multiple formats (JSON, Parquet, ORC)',
      'Federated queries',
      'Pay per query'
    ],
    codeExample: `-- Create external table
CREATE EXTERNAL TABLE IF NOT EXISTS logs (
  timestamp STRING,
  request_id STRING,
  ip_address STRING,
  user_agent STRING,
  status_code INT
)
ROW FORMAT SERDE 'org.openx.data.jsonserde.JsonSerDe'
LOCATION 's3://my-bucket/logs/';

-- Query data
SELECT
  DATE(timestamp) as date,
  COUNT(*) as request_count,
  AVG(status_code) as avg_status
FROM logs
WHERE status_code >= 400
GROUP BY DATE(timestamp)
ORDER BY date DESC;

-- Using Python SDK
import boto3

athena = boto3.client('athena')

response = athena.start_query_execution(
    QueryString='SELECT * FROM logs LIMIT 10',
    Database='mydb',
    ResultConfiguration={
        'OutputLocation': 's3://results-bucket/'
    }
)`,
    interviewTopics: [
      'Athena vs Redshift',
      'Data partitioning strategies',
      'File formats and performance',
      'Query optimization',
      'Integration with AWS Glue',
      'Federated queries',
      'Cost optimization',
      'Views and named queries'
    ],
    bestPractices: [
      'Partition data for better performance',
      'Use columnar formats (Parquet, ORC)',
      'Compress data',
      'Avoid SELECT *',
      'Use workgroups for cost control',
      'Leverage AWS Glue for metadata'
    ]
  },

  // Machine Learning
  {
    id: 'sagemaker',
    title: 'Amazon SageMaker',
    description: 'Fully managed machine learning service to build, train, and deploy ML models',
    icon: '🤖',
    category: 'Machine Learning',
    codingRequired: true,
    programmingLanguages: ['Python', 'R'],
    useCases: [
      'Custom ML model training',
      'Real-time inference',
      'Batch predictions',
      'AutoML',
      'Computer vision',
      'NLP applications'
    ],
    keyFeatures: [
      'Built-in algorithms',
      'Bring your own model',
      'SageMaker Studio',
      'Automatic model tuning',
      'Model monitoring',
      'Multi-model endpoints'
    ],
    codeExample: `import sagemaker
from sagemaker import get_execution_role
from sagemaker.estimator import Estimator

# Define training job
role = get_execution_role()

estimator = Estimator(
    image_uri='...',
    role=role,
    instance_count=1,
    instance_type='ml.p3.2xlarge',
    volume_size=50,
    max_run=360000,
    output_path='s3://my-bucket/output'
)

# Train model
estimator.fit({'training': 's3://my-bucket/data'})

# Deploy model
predictor = estimator.deploy(
    initial_instance_count=1,
    instance_type='ml.m5.xlarge'
)

# Make predictions
result = predictor.predict(data)`,
    interviewTopics: [
      'SageMaker components (Studio, Training, Inference)',
      'Built-in algorithms vs custom',
      'Distributed training',
      'Model deployment patterns',
      'Inference optimization',
      'SageMaker Pipelines',
      'Feature Store',
      'Model monitoring and drift'
    ],
    bestPractices: [
      'Use managed spot training for cost savings',
      'Implement model versioning',
      'Monitor model performance',
      'Use automatic scaling for endpoints',
      'Leverage SageMaker Pipelines for MLOps',
      'Implement A/B testing'
    ]
  }
];

export const categories = [
  'Compute',
  'Storage',
  'Database',
  'Networking',
  'Security',
  'Developer Tools',
  'Analytics',
  'Machine Learning'
];
