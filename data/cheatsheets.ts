export interface CheatSheetItem {
  command: string;
  description: string;
  example?: string;
}

export interface CheatSheet {
  id: string;
  title: string;
  category: string;
  description: string;
  items: CheatSheetItem[];
  icon: string;
}

export const cheatSheetCategories = [
  'AWS CLI',
  'SDK (Python)',
  'SDK (Node.js)',
  'IAM Policies',
  'CloudFormation',
  'Docker',
  'Kubernetes',
  'Terraform',
  'Security',
  'Networking'
];

export const cheatSheets: CheatSheet[] = [
  {
    id: 's3-cli',
    title: 'S3 CLI Commands',
    category: 'AWS CLI',
    description: 'Essential S3 commands for bucket and object management',
    icon: '🪣',
    items: [
      {
        command: 'aws s3 ls',
        description: 'List all S3 buckets',
        example: 'aws s3 ls'
      },
      {
        command: 'aws s3 ls s3://bucket-name',
        description: 'List contents of a bucket',
        example: 'aws s3 ls s3://my-bucket --recursive'
      },
      {
        command: 'aws s3 mb s3://bucket-name',
        description: 'Create a new S3 bucket',
        example: 'aws s3 mb s3://my-new-bucket --region us-east-1'
      },
      {
        command: 'aws s3 rb s3://bucket-name',
        description: 'Remove an S3 bucket',
        example: 'aws s3 rb s3://my-bucket --force'
      },
      {
        command: 'aws s3 cp file.txt s3://bucket-name/',
        description: 'Copy file to S3',
        example: 'aws s3 cp document.pdf s3://my-bucket/files/'
      },
      {
        command: 'aws s3 sync ./local-dir s3://bucket-name/',
        description: 'Sync local directory to S3',
        example: 'aws s3 sync ./dist s3://my-website-bucket --delete'
      },
      {
        command: 'aws s3 presign s3://bucket/object',
        description: 'Generate presigned URL',
        example: 'aws s3 presign s3://my-bucket/file.pdf --expires-in 3600'
      }
    ]
  },
  {
    id: 'ec2-cli',
    title: 'EC2 CLI Commands',
    category: 'AWS CLI',
    description: 'Manage EC2 instances, AMIs, and security groups',
    icon: '🖥️',
    items: [
      {
        command: 'aws ec2 describe-instances',
        description: 'List all EC2 instances',
        example: 'aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,State.Name,InstanceType]"'
      },
      {
        command: 'aws ec2 start-instances --instance-ids',
        description: 'Start EC2 instance',
        example: 'aws ec2 start-instances --instance-ids i-1234567890abcdef0'
      },
      {
        command: 'aws ec2 stop-instances --instance-ids',
        description: 'Stop EC2 instance',
        example: 'aws ec2 stop-instances --instance-ids i-1234567890abcdef0'
      },
      {
        command: 'aws ec2 terminate-instances --instance-ids',
        description: 'Terminate EC2 instance',
        example: 'aws ec2 terminate-instances --instance-ids i-1234567890abcdef0'
      },
      {
        command: 'aws ec2 describe-security-groups',
        description: 'List security groups',
        example: 'aws ec2 describe-security-groups --group-ids sg-123abc'
      },
      {
        command: 'aws ec2 describe-images',
        description: 'List AMIs',
        example: 'aws ec2 describe-images --owners self --query "Images[*].[ImageId,Name]"'
      }
    ]
  },
  {
    id: 'lambda-cli',
    title: 'Lambda CLI Commands',
    category: 'AWS CLI',
    description: 'Deploy and manage Lambda functions',
    icon: 'λ',
    items: [
      {
        command: 'aws lambda list-functions',
        description: 'List all Lambda functions',
        example: 'aws lambda list-functions --max-items 10'
      },
      {
        command: 'aws lambda invoke',
        description: 'Invoke Lambda function',
        example: 'aws lambda invoke --function-name my-function --payload \'{"key":"value"}\' response.json'
      },
      {
        command: 'aws lambda create-function',
        description: 'Create new Lambda function',
        example: 'aws lambda create-function --function-name my-function --runtime python3.9 --role arn:aws:iam::123456789012:role/lambda-role --handler lambda_function.lambda_handler --zip-file fileb://function.zip'
      },
      {
        command: 'aws lambda update-function-code',
        description: 'Update function code',
        example: 'aws lambda update-function-code --function-name my-function --zip-file fileb://function.zip'
      },
      {
        command: 'aws lambda get-function',
        description: 'Get function configuration',
        example: 'aws lambda get-function --function-name my-function'
      },
      {
        command: 'aws lambda delete-function',
        description: 'Delete Lambda function',
        example: 'aws lambda delete-function --function-name my-function'
      }
    ]
  },
  {
    id: 'iam-cli',
    title: 'IAM CLI Commands',
    category: 'AWS CLI',
    description: 'Manage users, roles, and policies',
    icon: '🔐',
    items: [
      {
        command: 'aws iam list-users',
        description: 'List all IAM users',
        example: 'aws iam list-users'
      },
      {
        command: 'aws iam create-user',
        description: 'Create IAM user',
        example: 'aws iam create-user --user-name john-doe'
      },
      {
        command: 'aws iam list-roles',
        description: 'List all IAM roles',
        example: 'aws iam list-roles'
      },
      {
        command: 'aws iam create-role',
        description: 'Create IAM role',
        example: 'aws iam create-role --role-name LambdaRole --assume-role-policy-document file://trust-policy.json'
      },
      {
        command: 'aws iam attach-role-policy',
        description: 'Attach policy to role',
        example: 'aws iam attach-role-policy --role-name LambdaRole --policy-arn arn:aws:iam::aws:policy/AWSLambdaBasicExecutionRole'
      },
      {
        command: 'aws iam list-attached-role-policies',
        description: 'List attached policies',
        example: 'aws iam list-attached-role-policies --role-name LambdaRole'
      }
    ]
  },
  {
    id: 'dynamodb-cli',
    title: 'DynamoDB CLI Commands',
    category: 'AWS CLI',
    description: 'Interact with DynamoDB tables and items',
    icon: '🗄️',
    items: [
      {
        command: 'aws dynamodb list-tables',
        description: 'List all DynamoDB tables',
        example: 'aws dynamodb list-tables'
      },
      {
        command: 'aws dynamodb describe-table',
        description: 'Get table details',
        example: 'aws dynamodb describe-table --table-name Users'
      },
      {
        command: 'aws dynamodb put-item',
        description: 'Insert item into table',
        example: 'aws dynamodb put-item --table-name Users --item \'{"UserId": {"S": "user123"}, "Name": {"S": "John"}}\''
      },
      {
        command: 'aws dynamodb get-item',
        description: 'Retrieve item from table',
        example: 'aws dynamodb get-item --table-name Users --key \'{"UserId": {"S": "user123"}}\''
      },
      {
        command: 'aws dynamodb scan',
        description: 'Scan entire table',
        example: 'aws dynamodb scan --table-name Users --max-items 10'
      },
      {
        command: 'aws dynamodb query',
        description: 'Query table with key condition',
        example: 'aws dynamodb query --table-name Users --key-condition-expression "UserId = :uid" --expression-attribute-values \'{":uid":{"S":"user123"}}\''
      }
    ]
  },
  {
    id: 'boto3-s3',
    title: 'Boto3 S3 Operations',
    category: 'SDK (Python)',
    description: 'Python SDK examples for S3',
    icon: '🐍',
    items: [
      {
        command: 'import boto3\ns3 = boto3.client(\'s3\')',
        description: 'Initialize S3 client',
        example: 's3 = boto3.client(\'s3\', region_name=\'us-east-1\')'
      },
      {
        command: 's3.list_buckets()',
        description: 'List all buckets',
        example: 'response = s3.list_buckets()\nfor bucket in response[\'Buckets\']:\n    print(bucket[\'Name\'])'
      },
      {
        command: 's3.upload_file()',
        description: 'Upload file to S3',
        example: 's3.upload_file(\'local.txt\', \'my-bucket\', \'remote.txt\')'
      },
      {
        command: 's3.download_file()',
        description: 'Download file from S3',
        example: 's3.download_file(\'my-bucket\', \'remote.txt\', \'local.txt\')'
      },
      {
        command: 's3.put_object()',
        description: 'Upload object with metadata',
        example: 's3.put_object(Bucket=\'my-bucket\', Key=\'file.txt\', Body=b\'content\', ContentType=\'text/plain\')'
      },
      {
        command: 's3.generate_presigned_url()',
        description: 'Generate presigned URL',
        example: 'url = s3.generate_presigned_url(\'get_object\', Params={\'Bucket\': \'my-bucket\', \'Key\': \'file.txt\'}, ExpiresIn=3600)'
      }
    ]
  },
  {
    id: 'boto3-lambda',
    title: 'Boto3 Lambda Operations',
    category: 'SDK (Python)',
    description: 'Python SDK examples for Lambda',
    icon: '🐍',
    items: [
      {
        command: 'lambda_client = boto3.client(\'lambda\')',
        description: 'Initialize Lambda client',
        example: 'lambda_client = boto3.client(\'lambda\', region_name=\'us-east-1\')'
      },
      {
        command: 'lambda_client.invoke()',
        description: 'Invoke Lambda function',
        example: 'response = lambda_client.invoke(\n    FunctionName=\'my-function\',\n    InvocationType=\'RequestResponse\',\n    Payload=json.dumps({\'key\': \'value\'})\n)'
      },
      {
        command: 'lambda_client.list_functions()',
        description: 'List all functions',
        example: 'response = lambda_client.list_functions(MaxItems=10)'
      },
      {
        command: 'lambda_client.update_function_code()',
        description: 'Update function code',
        example: 'response = lambda_client.update_function_code(\n    FunctionName=\'my-function\',\n    ZipFile=open(\'function.zip\', \'rb\').read()\n)'
      }
    ]
  },
  {
    id: 'boto3-dynamodb',
    title: 'Boto3 DynamoDB Operations',
    category: 'SDK (Python)',
    description: 'Python SDK examples for DynamoDB',
    icon: '🐍',
    items: [
      {
        command: 'dynamodb = boto3.resource(\'dynamodb\')',
        description: 'Initialize DynamoDB resource',
        example: 'dynamodb = boto3.resource(\'dynamodb\', region_name=\'us-east-1\')\ntable = dynamodb.Table(\'Users\')'
      },
      {
        command: 'table.put_item()',
        description: 'Insert item',
        example: 'table.put_item(Item={\'UserId\': \'user123\', \'Name\': \'John Doe\', \'Age\': 30})'
      },
      {
        command: 'table.get_item()',
        description: 'Retrieve item',
        example: 'response = table.get_item(Key={\'UserId\': \'user123\'})\nitem = response.get(\'Item\')'
      },
      {
        command: 'table.query()',
        description: 'Query table',
        example: 'response = table.query(\n    KeyConditionExpression=Key(\'UserId\').eq(\'user123\')\n)'
      },
      {
        command: 'table.scan()',
        description: 'Scan table',
        example: 'response = table.scan(FilterExpression=Attr(\'Age\').gt(25))'
      },
      {
        command: 'table.update_item()',
        description: 'Update item',
        example: 'table.update_item(\n    Key={\'UserId\': \'user123\'},\n    UpdateExpression=\'SET Age = :val\',\n    ExpressionAttributeValues={\':val\': 31}\n)'
      }
    ]
  },
  {
    id: 'aws-sdk-s3',
    title: 'AWS SDK S3 (Node.js)',
    category: 'SDK (Node.js)',
    description: 'JavaScript SDK examples for S3',
    icon: '📦',
    items: [
      {
        command: 'const { S3Client } = require("@aws-sdk/client-s3")',
        description: 'Import S3 client',
        example: 'const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");\nconst client = new S3Client({ region: "us-east-1" });'
      },
      {
        command: 'new PutObjectCommand()',
        description: 'Upload object to S3',
        example: 'const command = new PutObjectCommand({\n  Bucket: "my-bucket",\n  Key: "file.txt",\n  Body: "content"\n});\nawait client.send(command);'
      },
      {
        command: 'new GetObjectCommand()',
        description: 'Download object from S3',
        example: 'const command = new GetObjectCommand({\n  Bucket: "my-bucket",\n  Key: "file.txt"\n});\nconst response = await client.send(command);'
      },
      {
        command: 'new ListObjectsV2Command()',
        description: 'List objects in bucket',
        example: 'const command = new ListObjectsV2Command({\n  Bucket: "my-bucket",\n  MaxKeys: 10\n});\nconst response = await client.send(command);'
      }
    ]
  },
  {
    id: 'aws-sdk-lambda',
    title: 'AWS SDK Lambda (Node.js)',
    category: 'SDK (Node.js)',
    description: 'JavaScript SDK examples for Lambda',
    icon: '📦',
    items: [
      {
        command: 'const { LambdaClient } = require("@aws-sdk/client-lambda")',
        description: 'Import Lambda client',
        example: 'const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");\nconst client = new LambdaClient({ region: "us-east-1" });'
      },
      {
        command: 'new InvokeCommand()',
        description: 'Invoke Lambda function',
        example: 'const command = new InvokeCommand({\n  FunctionName: "my-function",\n  Payload: JSON.stringify({ key: "value" })\n});\nconst response = await client.send(command);'
      },
      {
        command: 'new ListFunctionsCommand()',
        description: 'List Lambda functions',
        example: 'const command = new ListFunctionsCommand({ MaxItems: 10 });\nconst response = await client.send(command);'
      }
    ]
  },
  {
    id: 'iam-policies',
    title: 'Common IAM Policy Templates',
    category: 'IAM Policies',
    description: 'Ready-to-use IAM policy documents',
    icon: '📋',
    items: [
      {
        command: 'S3 Read-Only Access',
        description: 'Allow read-only access to S3 bucket',
        example: '{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": ["s3:GetObject", "s3:ListBucket"],\n    "Resource": ["arn:aws:s3:::my-bucket/*", "arn:aws:s3:::my-bucket"]\n  }]\n}'
      },
      {
        command: 'Lambda Execution Role',
        description: 'Basic Lambda execution policy',
        example: '{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": ["logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutLogEvents"],\n    "Resource": "arn:aws:logs:*:*:*"\n  }]\n}'
      },
      {
        command: 'DynamoDB Full Access',
        description: 'Full access to specific DynamoDB table',
        example: '{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": ["dynamodb:*"],\n    "Resource": "arn:aws:dynamodb:us-east-1:123456789012:table/MyTable"\n  }]\n}'
      },
      {
        command: 'EC2 Instance Profile',
        description: 'Allow EC2 to assume role',
        example: '{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Principal": {"Service": "ec2.amazonaws.com"},\n    "Action": "sts:AssumeRole"\n  }]\n}'
      }
    ]
  },
  {
    id: 'cloudformation-basics',
    title: 'CloudFormation Templates',
    category: 'CloudFormation',
    description: 'Common CloudFormation resource definitions',
    icon: '☁️',
    items: [
      {
        command: 'S3 Bucket Resource',
        description: 'Create S3 bucket with CloudFormation',
        example: 'Resources:\n  MyS3Bucket:\n    Type: AWS::S3::Bucket\n    Properties:\n      BucketName: my-bucket-name\n      VersioningConfiguration:\n        Status: Enabled\n      PublicAccessBlockConfiguration:\n        BlockPublicAcls: true\n        BlockPublicPolicy: true'
      },
      {
        command: 'Lambda Function Resource',
        description: 'Create Lambda function',
        example: 'Resources:\n  MyFunction:\n    Type: AWS::Lambda::Function\n    Properties:\n      FunctionName: my-function\n      Runtime: python3.9\n      Handler: index.handler\n      Role: !GetAtt LambdaRole.Arn\n      Code:\n        ZipFile: |\n          def handler(event, context):\n              return {\'statusCode\': 200}'
      },
      {
        command: 'DynamoDB Table Resource',
        description: 'Create DynamoDB table',
        example: 'Resources:\n  MyTable:\n    Type: AWS::DynamoDB::Table\n    Properties:\n      TableName: Users\n      BillingMode: PAY_PER_REQUEST\n      AttributeDefinitions:\n        - AttributeName: UserId\n          AttributeType: S\n      KeySchema:\n        - AttributeName: UserId\n          KeyType: HASH'
      }
    ]
  },
  {
    id: 'docker-commands',
    title: 'Docker Commands',
    category: 'Docker',
    description: 'Essential Docker commands for containerization',
    icon: '🐳',
    items: [
      {
        command: 'docker build -t image-name .',
        description: 'Build Docker image',
        example: 'docker build -t my-app:latest .'
      },
      {
        command: 'docker run -p 8080:80 image-name',
        description: 'Run container with port mapping',
        example: 'docker run -d -p 8080:80 --name my-container my-app:latest'
      },
      {
        command: 'docker ps',
        description: 'List running containers',
        example: 'docker ps -a'
      },
      {
        command: 'docker logs container-name',
        description: 'View container logs',
        example: 'docker logs -f my-container'
      },
      {
        command: 'docker push registry/image:tag',
        description: 'Push image to registry',
        example: 'docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/my-app:latest'
      },
      {
        command: 'docker exec -it container-name bash',
        description: 'Execute command in container',
        example: 'docker exec -it my-container sh'
      }
    ]
  },
  {
    id: 'kubernetes-commands',
    title: 'Kubernetes (kubectl) Commands',
    category: 'Kubernetes',
    description: 'Essential kubectl commands for K8s management',
    icon: '☸️',
    items: [
      {
        command: 'kubectl get pods',
        description: 'List all pods',
        example: 'kubectl get pods -n default'
      },
      {
        command: 'kubectl apply -f deployment.yaml',
        description: 'Apply configuration',
        example: 'kubectl apply -f k8s/deployment.yaml'
      },
      {
        command: 'kubectl describe pod pod-name',
        description: 'Get pod details',
        example: 'kubectl describe pod my-pod-12345'
      },
      {
        command: 'kubectl logs pod-name',
        description: 'View pod logs',
        example: 'kubectl logs -f my-pod-12345'
      },
      {
        command: 'kubectl exec -it pod-name -- bash',
        description: 'Execute command in pod',
        example: 'kubectl exec -it my-pod-12345 -- sh'
      },
      {
        command: 'kubectl scale deployment',
        description: 'Scale deployment',
        example: 'kubectl scale deployment my-app --replicas=3'
      }
    ]
  },
  {
    id: 'terraform-aws',
    title: 'Terraform AWS Resources',
    category: 'Terraform',
    description: 'Terraform configuration for common AWS resources',
    icon: '🏗️',
    items: [
      {
        command: 'S3 Bucket',
        description: 'Define S3 bucket in Terraform',
        example: 'resource "aws_s3_bucket" "my_bucket" {\n  bucket = "my-unique-bucket-name"\n  \n  versioning {\n    enabled = true\n  }\n  \n  tags = {\n    Environment = "production"\n  }\n}'
      },
      {
        command: 'Lambda Function',
        description: 'Define Lambda function',
        example: 'resource "aws_lambda_function" "my_function" {\n  filename      = "function.zip"\n  function_name = "my-function"\n  role          = aws_iam_role.lambda_role.arn\n  handler       = "index.handler"\n  runtime       = "python3.9"\n}'
      },
      {
        command: 'DynamoDB Table',
        description: 'Define DynamoDB table',
        example: 'resource "aws_dynamodb_table" "users" {\n  name           = "Users"\n  billing_mode   = "PAY_PER_REQUEST"\n  hash_key       = "UserId"\n  \n  attribute {\n    name = "UserId"\n    type = "S"\n  }\n}'
      },
      {
        command: 'EC2 Instance',
        description: 'Define EC2 instance',
        example: 'resource "aws_instance" "web" {\n  ami           = "ami-0c55b159cbfafe1f0"\n  instance_type = "t2.micro"\n  \n  tags = {\n    Name = "WebServer"\n  }\n}'
      }
    ]
  },
  {
    id: 'security-commands',
    title: 'Security Best Practices',
    category: 'Security',
    description: 'Security-related commands and configurations',
    icon: '🔒',
    items: [
      {
        command: 'Enable S3 Bucket Encryption',
        description: 'Enable default encryption for S3 bucket',
        example: 'aws s3api put-bucket-encryption --bucket my-bucket --server-side-encryption-configuration \'{"Rules": [{"ApplyServerSideEncryptionByDefault": {"SSEAlgorithm": "AES256"}}]}\''
      },
      {
        command: 'Enable CloudTrail Logging',
        description: 'Create CloudTrail for audit logging',
        example: 'aws cloudtrail create-trail --name my-trail --s3-bucket-name my-cloudtrail-bucket'
      },
      {
        command: 'Enable MFA for IAM User',
        description: 'Require MFA for sensitive operations',
        example: 'aws iam enable-mfa-device --user-name john-doe --serial-number arn:aws:iam::123456789012:mfa/john-doe --authentication-code-1 123456 --authentication-code-2 789012'
      },
      {
        command: 'Scan for Security Issues',
        description: 'Use AWS Config for compliance',
        example: 'aws configservice describe-compliance-by-config-rule'
      }
    ]
  },
  {
    id: 'networking-commands',
    title: 'VPC & Networking',
    category: 'Networking',
    description: 'VPC, subnet, and networking commands',
    icon: '🌐',
    items: [
      {
        command: 'aws ec2 describe-vpcs',
        description: 'List all VPCs',
        example: 'aws ec2 describe-vpcs'
      },
      {
        command: 'aws ec2 create-subnet',
        description: 'Create subnet',
        example: 'aws ec2 create-subnet --vpc-id vpc-123abc --cidr-block 10.0.1.0/24'
      },
      {
        command: 'aws ec2 describe-route-tables',
        description: 'List route tables',
        example: 'aws ec2 describe-route-tables --filters "Name=vpc-id,Values=vpc-123abc"'
      },
      {
        command: 'aws ec2 authorize-security-group-ingress',
        description: 'Add security group rule',
        example: 'aws ec2 authorize-security-group-ingress --group-id sg-123abc --protocol tcp --port 80 --cidr 0.0.0.0/0'
      },
      {
        command: 'aws elbv2 describe-load-balancers',
        description: 'List load balancers',
        example: 'aws elbv2 describe-load-balancers'
      }
    ]
  }
];
