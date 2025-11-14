export interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  category: string;
  icon: string;
  prerequisites: string[];
  steps: TutorialStep[];
  technologies: string[];
  learningOutcomes: string[];
}

export interface TutorialStep {
  title: string;
  description: string;
  code?: string;
  language?: string;
  tips?: string[];
}

export const tutorials: Tutorial[] = [
  {
    id: 'serverless-api-lambda',
    title: 'Build a Serverless REST API with Lambda and API Gateway',
    description: 'Create a complete serverless REST API using AWS Lambda, API Gateway, and DynamoDB',
    difficulty: 'Beginner',
    duration: '45 minutes',
    category: 'Serverless',
    icon: '⚡',
    prerequisites: [
      'Basic Python knowledge',
      'AWS account setup',
      'Understanding of REST APIs'
    ],
    technologies: ['Lambda', 'API Gateway', 'DynamoDB', 'Python'],
    learningOutcomes: [
      'Deploy Lambda functions',
      'Configure API Gateway endpoints',
      'Integrate with DynamoDB',
      'Test serverless APIs'
    ],
    steps: [
      {
        title: 'Create a DynamoDB Table',
        description: 'First, create a DynamoDB table to store our data',
        code: `import boto3

dynamodb = boto3.resource('dynamodb')

table = dynamodb.create_table(
    TableName='Users',
    KeySchema=[
        {'AttributeName': 'userId', 'KeyType': 'HASH'}
    ],
    AttributeDefinitions=[
        {'AttributeName': 'userId', 'AttributeType': 'S'}
    ],
    BillingMode='PAY_PER_REQUEST'
)

table.wait_until_exists()
print('Table created successfully!')`,
        language: 'python',
        tips: [
          'Use PAY_PER_REQUEST for unpredictable workloads',
          'Consider adding a sort key for complex queries'
        ]
      },
      {
        title: 'Create Lambda Function',
        description: 'Create a Lambda function to handle CRUD operations',
        code: `import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')

def lambda_handler(event, context):
    http_method = event['httpMethod']

    if http_method == 'GET':
        return get_user(event)
    elif http_method == 'POST':
        return create_user(event)
    elif http_method == 'PUT':
        return update_user(event)
    elif http_method == 'DELETE':
        return delete_user(event)

    return {
        'statusCode': 400,
        'body': json.dumps('Unsupported method')
    }

def get_user(event):
    user_id = event['pathParameters']['userId']
    response = table.get_item(Key={'userId': user_id})

    return {
        'statusCode': 200,
        'body': json.dumps(response.get('Item', {}))
    }

def create_user(event):
    body = json.loads(event['body'])
    table.put_item(Item=body)

    return {
        'statusCode': 201,
        'body': json.dumps('User created successfully')
    }`,
        language: 'python',
        tips: [
          'Always validate input data',
          'Implement proper error handling',
          'Use environment variables for table names'
        ]
      },
      {
        title: 'Configure API Gateway',
        description: 'Set up API Gateway to expose your Lambda function',
        code: `# Using AWS CLI to create REST API
aws apigateway create-rest-api \\
    --name "UserAPI" \\
    --description "User management API"

# Create a resource
aws apigateway create-resource \\
    --rest-api-id <api-id> \\
    --parent-id <root-id> \\
    --path-part "users"

# Create a method
aws apigateway put-method \\
    --rest-api-id <api-id> \\
    --resource-id <resource-id> \\
    --http-method GET \\
    --authorization-type "NONE"`,
        language: 'bash',
        tips: [
          'Enable CORS for browser-based clients',
          'Use API keys for rate limiting',
          'Consider using Lambda proxy integration'
        ]
      },
      {
        title: 'Test Your API',
        description: 'Test the deployed API using curl or Postman',
        code: `# Create a user
curl -X POST https://your-api-id.execute-api.region.amazonaws.com/prod/users \\
  -H "Content-Type: application/json" \\
  -d '{"userId": "123", "name": "John Doe", "email": "john@example.com"}'

# Get a user
curl https://your-api-id.execute-api.region.amazonaws.com/prod/users/123

# Update a user
curl -X PUT https://your-api-id.execute-api.region.amazonaws.com/prod/users/123 \\
  -H "Content-Type: application/json" \\
  -d '{"userId": "123", "name": "John Smith", "email": "john.smith@example.com"}'`,
        language: 'bash'
      }
    ]
  },
  {
    id: 's3-static-website',
    title: 'Host a Static Website on S3 with CloudFront',
    description: 'Deploy and serve a static website using S3 and CloudFront CDN',
    difficulty: 'Beginner',
    duration: '30 minutes',
    category: 'Storage',
    icon: '🪣',
    prerequisites: [
      'Basic HTML/CSS knowledge',
      'AWS account',
      'Domain name (optional)'
    ],
    technologies: ['S3', 'CloudFront', 'Route 53'],
    learningOutcomes: [
      'Configure S3 for static hosting',
      'Set up CloudFront distribution',
      'Configure custom domain',
      'Enable HTTPS'
    ],
    steps: [
      {
        title: 'Create and Configure S3 Bucket',
        description: 'Create an S3 bucket and enable static website hosting',
        code: `import boto3

s3 = boto3.client('s3')

bucket_name = 'my-website-bucket'

# Create bucket
s3.create_bucket(Bucket=bucket_name)

# Enable static website hosting
s3.put_bucket_website(
    Bucket=bucket_name,
    WebsiteConfiguration={
        'IndexDocument': {'Suffix': 'index.html'},
        'ErrorDocument': {'Key': 'error.html'}
    }
)

# Set bucket policy for public read
policy = {
    "Version": "2012-10-17",
    "Statement": [{
        "Sid": "PublicReadGetObject",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": f"arn:aws:s3:::{bucket_name}/*"
    }]
}

s3.put_bucket_policy(
    Bucket=bucket_name,
    Policy=json.dumps(policy)
)`,
        language: 'python',
        tips: [
          'Use a unique bucket name',
          'Consider using CloudFront instead of direct S3 access'
        ]
      },
      {
        title: 'Upload Website Files',
        description: 'Upload your HTML, CSS, and JavaScript files to S3',
        code: `import boto3
import os

s3 = boto3.client('s3')
bucket_name = 'my-website-bucket'

def upload_directory(path, bucket):
    for root, dirs, files in os.walk(path):
        for file in files:
            local_path = os.path.join(root, file)
            s3_path = os.path.relpath(local_path, path)

            # Set content type
            content_type = 'text/html'
            if file.endswith('.css'):
                content_type = 'text/css'
            elif file.endswith('.js'):
                content_type = 'application/javascript'

            s3.upload_file(
                local_path,
                bucket,
                s3_path,
                ExtraArgs={'ContentType': content_type}
            )

upload_directory('./website', bucket_name)
print('Website uploaded successfully!')`,
        language: 'python'
      },
      {
        title: 'Create CloudFront Distribution',
        description: 'Set up CloudFront for global content delivery',
        code: `import boto3

cloudfront = boto3.client('cloudfront')

distribution_config = {
    'CallerReference': 'my-website-distribution',
    'Comment': 'My Static Website',
    'Enabled': True,
    'Origins': {
        'Quantity': 1,
        'Items': [{
            'Id': 'S3-my-website-bucket',
            'DomainName': 'my-website-bucket.s3.amazonaws.com',
            'S3OriginConfig': {
                'OriginAccessIdentity': ''
            }
        }]
    },
    'DefaultRootObject': 'index.html',
    'DefaultCacheBehavior': {
        'TargetOriginId': 'S3-my-website-bucket',
        'ViewerProtocolPolicy': 'redirect-to-https',
        'AllowedMethods': {
            'Quantity': 2,
            'Items': ['GET', 'HEAD']
        },
        'ForwardedValues': {
            'QueryString': False,
            'Cookies': {'Forward': 'none'}
        },
        'MinTTL': 0
    }
}

response = cloudfront.create_distribution(
    DistributionConfig=distribution_config
)

print(f"Distribution created: {response['Distribution']['DomainName']}")`,
        language: 'python',
        tips: [
          'Use Origin Access Identity for better security',
          'Configure custom error pages',
          'Set appropriate cache TTL values'
        ]
      }
    ]
  },
  {
    id: 'ec2-auto-scaling',
    title: 'Set Up Auto Scaling for EC2 Instances',
    description: 'Configure auto scaling groups and policies for high availability',
    difficulty: 'Intermediate',
    duration: '60 minutes',
    category: 'Compute',
    icon: '🖥️',
    prerequisites: [
      'Understanding of EC2',
      'Knowledge of load balancing',
      'Familiarity with CloudWatch'
    ],
    technologies: ['EC2', 'Auto Scaling', 'ELB', 'CloudWatch'],
    learningOutcomes: [
      'Create launch templates',
      'Configure auto scaling groups',
      'Set up scaling policies',
      'Monitor scaling activities'
    ],
    steps: [
      {
        title: 'Create Launch Template',
        description: 'Define the configuration for EC2 instances',
        code: `import boto3

ec2 = boto3.client('ec2')

response = ec2.create_launch_template(
    LaunchTemplateName='WebServerTemplate',
    LaunchTemplateData={
        'ImageId': 'ami-0c55b159cbfafe1f0',
        'InstanceType': 't2.micro',
        'KeyName': 'my-key-pair',
        'SecurityGroupIds': ['sg-1234567890abcdef0'],
        'UserData': '''#!/bin/bash
            yum update -y
            yum install -y httpd
            systemctl start httpd
            systemctl enable httpd
            echo "<h1>Hello from $(hostname -f)</h1>" > /var/www/html/index.html
        ''',
        'TagSpecifications': [{
            'ResourceType': 'instance',
            'Tags': [
                {'Key': 'Name', 'Value': 'WebServer'},
                {'Key': 'Environment', 'Value': 'Production'}
            ]
        }]
    }
)

print(f"Launch template created: {response['LaunchTemplate']['LaunchTemplateId']}")`,
        language: 'python'
      },
      {
        title: 'Create Auto Scaling Group',
        description: 'Set up auto scaling group with desired capacity',
        code: `import boto3

autoscaling = boto3.client('autoscaling')

response = autoscaling.create_auto_scaling_group(
    AutoScalingGroupName='WebServerASG',
    LaunchTemplate={
        'LaunchTemplateName': 'WebServerTemplate',
        'Version': '$Latest'
    },
    MinSize=2,
    MaxSize=10,
    DesiredCapacity=2,
    VPCZoneIdentifier='subnet-12345,subnet-67890',
    HealthCheckType='ELB',
    HealthCheckGracePeriod=300,
    TargetGroupARNs=[
        'arn:aws:elasticloadbalancing:region:account:targetgroup/my-targets/1234567890'
    ],
    Tags=[
        {
            'Key': 'Name',
            'Value': 'WebServer',
            'PropagateAtLaunch': True
        }
    ]
)

print('Auto Scaling Group created successfully!')`,
        language: 'python',
        tips: [
          'Set appropriate health check grace period',
          'Use multiple availability zones',
          'Configure termination policies'
        ]
      },
      {
        title: 'Configure Scaling Policies',
        description: 'Create target tracking scaling policies',
        code: `import boto3

autoscaling = boto3.client('autoscaling')

# CPU-based scaling policy
cpu_policy = autoscaling.put_scaling_policy(
    AutoScalingGroupName='WebServerASG',
    PolicyName='CPUTargetTracking',
    PolicyType='TargetTrackingScaling',
    TargetTrackingConfiguration={
        'PredefinedMetricSpecification': {
            'PredefinedMetricType': 'ASGAverageCPUUtilization'
        },
        'TargetValue': 70.0
    }
)

# Request count scaling policy
request_policy = autoscaling.put_scaling_policy(
    AutoScalingGroupName='WebServerASG',
    PolicyName='RequestCountTracking',
    PolicyType='TargetTrackingScaling',
    TargetTrackingConfiguration={
        'PredefinedMetricSpecification': {
            'PredefinedMetricType': 'ALBRequestCountPerTarget',
            'ResourceLabel': 'app/my-alb/1234567890/targetgroup/my-targets/1234567890'
        },
        'TargetValue': 1000.0
    }
)

print('Scaling policies created!')`,
        language: 'python',
        tips: [
          'Start with target tracking policies',
          'Monitor scaling activities',
          'Set cooldown periods appropriately'
        ]
      }
    ]
  },
  {
    id: 'data-pipeline-glue',
    title: 'Build an ETL Pipeline with AWS Glue',
    description: 'Create a data transformation pipeline using AWS Glue and S3',
    difficulty: 'Advanced',
    duration: '90 minutes',
    category: 'Data Processing',
    icon: '🔄',
    prerequisites: [
      'Python and PySpark knowledge',
      'Understanding of ETL concepts',
      'Familiarity with data formats (CSV, JSON, Parquet)'
    ],
    technologies: ['Glue', 'S3', 'Athena', 'PySpark'],
    learningOutcomes: [
      'Create Glue crawlers and databases',
      'Write Glue ETL jobs',
      'Transform data with PySpark',
      'Query data with Athena'
    ],
    steps: [
      {
        title: 'Create Glue Database and Crawler',
        description: 'Set up Glue catalog to discover your data schema',
        code: `import boto3

glue = boto3.client('glue')

# Create database
glue.create_database(
    DatabaseInput={
        'Name': 'my_data_lake',
        'Description': 'Data lake database'
    }
)

# Create crawler
glue.create_crawler(
    Name='s3-data-crawler',
    Role='arn:aws:iam::account-id:role/AWSGlueServiceRole',
    DatabaseName='my_data_lake',
    Targets={
        'S3Targets': [{
            'Path': 's3://my-raw-data-bucket/'
        }]
    },
    SchemaChangePolicy={
        'UpdateBehavior': 'UPDATE_IN_DATABASE',
        'DeleteBehavior': 'LOG'
    }
)

# Start crawler
glue.start_crawler(Name='s3-data-crawler')
print('Crawler started!')`,
        language: 'python'
      },
      {
        title: 'Create Glue ETL Job',
        description: 'Write a PySpark script to transform your data',
        code: `import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job
from awsglue.dynamicframe import DynamicFrame

args = getResolvedOptions(sys.argv, ['JOB_NAME'])

sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args['JOB_NAME'], args)

# Read data from Glue catalog
datasource = glueContext.create_dynamic_frame.from_catalog(
    database = "my_data_lake",
    table_name = "raw_data"
)

# Transform data
# Drop null fields
datasource = DropNullFields.apply(frame = datasource)

# Apply mapping to change schema
applymapping = ApplyMapping.apply(
    frame = datasource,
    mappings = [
        ("user_id", "string", "user_id", "string"),
        ("timestamp", "string", "event_time", "timestamp"),
        ("event_type", "string", "event_type", "string"),
        ("amount", "double", "amount", "decimal(10,2)")
    ]
)

# Convert to Spark DataFrame for custom transformations
df = applymapping.toDF()

# Custom transformation: calculate revenue by user
from pyspark.sql.functions import sum, col
revenue_df = df.filter(col("event_type") == "purchase") \\
               .groupBy("user_id") \\
               .agg(sum("amount").alias("total_revenue"))

# Convert back to DynamicFrame
result = DynamicFrame.fromDF(revenue_df, glueContext, "result")

# Write to S3 in Parquet format
glueContext.write_dynamic_frame.from_options(
    frame = result,
    connection_type = "s3",
    connection_options = {
        "path": "s3://my-processed-data-bucket/revenue/"
    },
    format = "parquet",
    transformation_ctx = "datasink"
)

job.commit()`,
        language: 'python',
        tips: [
          'Use partitioning for better query performance',
          'Convert to Parquet for storage efficiency',
          'Test transformations locally with small datasets'
        ]
      }
    ]
  },
  {
    id: 'cicd-codepipeline',
    title: 'Implement CI/CD with CodePipeline',
    description: 'Set up automated deployment pipeline for your application',
    difficulty: 'Intermediate',
    duration: '75 minutes',
    category: 'DevOps',
    icon: '🚀',
    prerequisites: [
      'Git and GitHub knowledge',
      'Understanding of CI/CD concepts',
      'Application containerization basics'
    ],
    technologies: ['CodePipeline', 'CodeBuild', 'CodeDeploy', 'ECR', 'ECS'],
    learningOutcomes: [
      'Create CodePipeline',
      'Configure build and test stages',
      'Deploy to ECS',
      'Implement approval gates'
    ],
    steps: [
      {
        title: 'Create CodeBuild Project',
        description: 'Set up build project to compile and test your code',
        code: `import boto3

codebuild = boto3.client('codebuild')

response = codebuild.create_project(
    name='my-app-build',
    source={
        'type': 'CODEPIPELINE',
        'buildspec': '''version: 0.2
phases:
  pre_build:
    commands:
      - echo Logging in to Amazon ECR...
      - aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
  build:
    commands:
      - echo Build started on \`date\`
      - docker build -t $IMAGE_REPO_NAME:$IMAGE_TAG .
      - docker tag $IMAGE_REPO_NAME:$IMAGE_TAG $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG
  post_build:
    commands:
      - echo Pushing Docker image...
      - docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG
      - echo Writing image definitions file...
      - printf '[{"name":"my-app","imageUri":"%s"}]' $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG > imagedefinitions.json
artifacts:
  files: imagedefinitions.json
'''
    },
    artifacts={'type': 'CODEPIPELINE'},
    environment={
        'type': 'LINUX_CONTAINER',
        'image': 'aws/codebuild/standard:5.0',
        'computeType': 'BUILD_GENERAL1_SMALL',
        'privilegedMode': True
    },
    serviceRole='arn:aws:iam::account-id:role/CodeBuildServiceRole'
)`,
        language: 'python'
      }
    ]
  }
];

export const tutorialCategories = [
  'All',
  'Serverless',
  'Storage',
  'Compute',
  'Data Processing',
  'DevOps',
  'Security',
  'Networking'
];
