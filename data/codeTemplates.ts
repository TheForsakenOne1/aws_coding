export interface CodeTemplate {
  id: string;
  title: string;
  description: string;
  service: string;
  language: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  code: string;
  expectedOutput?: string;
  learningPoints: string[];
}

export const codeTemplates: CodeTemplate[] = [
  // Lambda Templates
  {
    id: 'lambda-basic',
    title: 'Basic Lambda Function',
    description: 'A simple Lambda function that processes JSON events',
    service: 'AWS Lambda',
    language: 'python',
    difficulty: 'Beginner',
    code: `import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    """
    Basic Lambda function handler
    Processes incoming events and returns a response
    """
    try:
        # Log the incoming event
        logger.info(f"Received event: {json.dumps(event)}")

        # Extract data from event
        name = event.get('name', 'World')

        # Process your business logic here
        message = f"Hello, {name}!"

        # Return successful response
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'message': message,
                'timestamp': context.request_id
            })
        }

    except Exception as e:
        logger.error(f"Error processing event: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({
                'error': 'Internal server error'
            })
        }`,
    expectedOutput: `✓ Lambda function executed successfully!

Response:
{
  "statusCode": 200,
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "message": "Hello, World!",
    "timestamp": "abc123-def456"
  }
}`,
    learningPoints: [
      'Lambda function structure with handler',
      'Event and context parameters',
      'Proper error handling with try-catch',
      'Logging for debugging',
      'Returning properly formatted responses'
    ]
  },
  {
    id: 'lambda-s3-trigger',
    title: 'Lambda with S3 Trigger',
    description: 'Process files uploaded to S3 bucket',
    service: 'AWS Lambda',
    language: 'python',
    difficulty: 'Intermediate',
    code: `import json
import boto3
from urllib.parse import unquote_plus

s3_client = boto3.client('s3')

def lambda_handler(event, context):
    """
    Triggered when a file is uploaded to S3
    Processes the file and performs actions
    """
    try:
        # Get S3 event details
        for record in event['Records']:
            bucket = record['s3']['bucket']['name']
            key = unquote_plus(record['s3']['object']['key'])

            print(f"Processing file: {key} from bucket: {bucket}")

            # Get the file from S3
            response = s3_client.get_object(Bucket=bucket, Key=key)
            content = response['Body'].read().decode('utf-8')

            # Process the content
            lines = content.split('\\n')
            line_count = len(lines)

            # Store results in another S3 location
            result_key = f"processed/{key}.json"
            result = {
                'original_file': key,
                'line_count': line_count,
                'size_bytes': response['ContentLength'],
                'processed_at': context.invoked_function_arn
            }

            s3_client.put_object(
                Bucket=bucket,
                Key=result_key,
                Body=json.dumps(result),
                ContentType='application/json'
            )

            print(f"Processed {line_count} lines, saved to {result_key}")

        return {
            'statusCode': 200,
            'body': json.dumps('Processing complete')
        }

    except Exception as e:
        print(f"Error: {str(e)}")
        raise`,
    expectedOutput: `✓ S3 trigger processed successfully!

Processing file: data/sample.txt from bucket: my-bucket
Processed 150 lines, saved to processed/data/sample.txt.json

File processed and results stored in S3.`,
    learningPoints: [
      'Processing S3 event notifications',
      'Reading files from S3',
      'Writing results back to S3',
      'URL decoding for S3 keys',
      'Context reuse for S3 client'
    ]
  },
  {
    id: 'lambda-dynamodb-stream',
    title: 'Lambda with DynamoDB Streams',
    description: 'React to DynamoDB table changes in real-time',
    service: 'AWS Lambda',
    language: 'python',
    difficulty: 'Advanced',
    code: `import json
import boto3

sns_client = boto3.client('sns')
SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:123456789:notifications'

def lambda_handler(event, context):
    """
    Process DynamoDB Stream events
    Sends notifications for specific changes
    """
    for record in event['Records']:
        event_name = record['eventName']  # INSERT, MODIFY, REMOVE

        if event_name == 'INSERT':
            # New item added
            new_item = record['dynamodb']['NewImage']
            print(f"New item created: {new_item}")

            # Send notification for new users
            if 'email' in new_item:
                send_welcome_email(new_item)

        elif event_name == 'MODIFY':
            # Item updated
            old_item = record['dynamodb']['OldImage']
            new_item = record['dynamodb']['NewImage']

            # Check if important field changed
            if old_item.get('status') != new_item.get('status'):
                print(f"Status changed: {old_item['status']} -> {new_item['status']}")
                send_status_notification(new_item)

        elif event_name == 'REMOVE':
            # Item deleted
            old_item = record['dynamodb']['OldImage']
            print(f"Item deleted: {old_item}")

    return {
        'statusCode': 200,
        'body': json.dumps('Stream processed')
    }

def send_welcome_email(item):
    """Send welcome notification via SNS"""
    email = item['email']['S']
    message = f"Welcome! Your account has been created."

    sns_client.publish(
        TopicArn=SNS_TOPIC_ARN,
        Subject='Welcome!',
        Message=message
    )
    print(f"Welcome email sent to {email}")

def send_status_notification(item):
    """Send status change notification"""
    status = item['status']['S']
    message = f"Status updated to: {status}"

    sns_client.publish(
        TopicArn=SNS_TOPIC_ARN,
        Message=message
    )`,
    expectedOutput: `✓ DynamoDB Stream processed successfully!

Processing 3 records:
- New item created: user@example.com
- Welcome email sent to user@example.com
- Status changed: pending -> active
- Status notification sent

All stream events processed.`,
    learningPoints: [
      'Processing DynamoDB Streams',
      'Differentiating INSERT, MODIFY, REMOVE events',
      'Accessing old and new item images',
      'Integrating with SNS for notifications',
      'Real-time data processing patterns'
    ]
  },

  // S3 Templates
  {
    id: 's3-upload-download',
    title: 'S3 Upload and Download',
    description: 'Basic file operations with S3',
    service: 'Amazon S3',
    language: 'python',
    difficulty: 'Beginner',
    code: `import boto3
from botocore.exceptions import ClientError

# Initialize S3 client
s3 = boto3.client('s3')
BUCKET_NAME = 'my-app-bucket'

def upload_file(file_path, object_name=None):
    """
    Upload a file to S3 bucket
    """
    if object_name is None:
        object_name = file_path

    try:
        s3.upload_file(
            file_path,
            BUCKET_NAME,
            object_name,
            ExtraArgs={
                'ServerSideEncryption': 'AES256',
                'ContentType': 'text/plain'
            }
        )
        print(f"✓ File uploaded: {object_name}")
        return True
    except ClientError as e:
        print(f"✗ Upload failed: {e}")
        return False

def download_file(object_name, file_path):
    """
    Download a file from S3 bucket
    """
    try:
        s3.download_file(BUCKET_NAME, object_name, file_path)
        print(f"✓ File downloaded: {file_path}")
        return True
    except ClientError as e:
        print(f"✗ Download failed: {e}")
        return False

def list_files(prefix=''):
    """
    List all files in bucket with optional prefix
    """
    try:
        response = s3.list_objects_v2(
            Bucket=BUCKET_NAME,
            Prefix=prefix
        )

        if 'Contents' in response:
            files = [obj['Key'] for obj in response['Contents']]
            print(f"Found {len(files)} files:")
            for file in files:
                print(f"  - {file}")
            return files
        else:
            print("No files found")
            return []
    except ClientError as e:
        print(f"✗ List failed: {e}")
        return []

# Example usage
if __name__ == '__main__':
    # Upload a file
    upload_file('data.txt', 'uploads/data.txt')

    # List files
    list_files('uploads/')

    # Download a file
    download_file('uploads/data.txt', 'downloaded_data.txt')`,
    expectedOutput: `✓ File uploaded: uploads/data.txt
Found 3 files:
  - uploads/data.txt
  - uploads/report.pdf
  - uploads/image.jpg
✓ File downloaded: downloaded_data.txt

All S3 operations completed successfully!`,
    learningPoints: [
      'Uploading files to S3',
      'Downloading files from S3',
      'Listing objects in a bucket',
      'Using ExtraArgs for encryption',
      'Error handling with ClientError'
    ]
  },
  {
    id: 's3-presigned-url',
    title: 'S3 Presigned URLs',
    description: 'Generate temporary URLs for secure file sharing',
    service: 'Amazon S3',
    language: 'python',
    difficulty: 'Intermediate',
    code: `import boto3
from botocore.exceptions import ClientError
from datetime import datetime, timedelta

s3_client = boto3.client('s3')

def generate_presigned_url(bucket, key, expiration=3600, operation='get_object'):
    """
    Generate a presigned URL for S3 object access

    Args:
        bucket: S3 bucket name
        key: Object key
        expiration: URL expiration time in seconds
        operation: 'get_object' or 'put_object'
    """
    try:
        url = s3_client.generate_presigned_url(
            operation,
            Params={'Bucket': bucket, 'Key': key},
            ExpiresIn=expiration
        )
        print(f"✓ Presigned URL generated (expires in {expiration}s)")
        return url
    except ClientError as e:
        print(f"✗ Failed to generate URL: {e}")
        return None

def generate_upload_url(bucket, key, expiration=300):
    """
    Generate presigned URL for uploading files
    Useful for allowing users to upload directly to S3
    """
    try:
        url = s3_client.generate_presigned_post(
            Bucket=bucket,
            Key=key,
            ExpiresIn=expiration
        )
        print(f"✓ Upload URL generated (expires in {expiration}s)")
        return url
    except ClientError as e:
        print(f"✗ Failed to generate upload URL: {e}")
        return None

def share_file_temporarily(bucket, key, hours=24):
    """
    Share a file with temporary access
    """
    expiration = hours * 3600
    url = generate_presigned_url(bucket, key, expiration)

    if url:
        expires_at = datetime.now() + timedelta(hours=hours)
        print(f"\\nShare this URL (valid until {expires_at}):")
        print(url)

    return url

# Example usage
if __name__ == '__main__':
    BUCKET = 'my-secure-bucket'

    # Generate download URL (1 hour)
    download_url = generate_presigned_url(
        BUCKET,
        'documents/report.pdf',
        expiration=3600
    )

    # Generate upload URL (5 minutes)
    upload_data = generate_upload_url(
        BUCKET,
        'uploads/user-file.jpg',
        expiration=300
    )

    # Share file for 24 hours
    share_file_temporarily(BUCKET, 'shared/presentation.pptx', hours=24)`,
    expectedOutput: `✓ Presigned URL generated (expires in 3600s)
✓ Upload URL generated (expires in 300s)
✓ Presigned URL generated (expires in 86400s)

Share this URL (valid until 2024-11-12 10:30:00):
https://my-secure-bucket.s3.amazonaws.com/shared/presentation.pptx?AWSAccessKeyId=...

Presigned URLs generated successfully!`,
    learningPoints: [
      'Generating presigned URLs for downloads',
      'Generating presigned POST for uploads',
      'Setting URL expiration times',
      'Secure file sharing without credentials',
      'Use cases for temporary access'
    ]
  },

  // DynamoDB Templates
  {
    id: 'dynamodb-crud',
    title: 'DynamoDB CRUD Operations',
    description: 'Create, read, update, and delete items in DynamoDB',
    service: 'Amazon DynamoDB',
    language: 'python',
    difficulty: 'Beginner',
    code: `import boto3
from boto3.dynamodb.conditions import Key, Attr
from datetime import datetime

# Initialize DynamoDB
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')

def create_user(user_id, name, email):
    """Create a new user"""
    try:
        table.put_item(
            Item={
                'userId': user_id,
                'name': name,
                'email': email,
                'createdAt': datetime.now().isoformat(),
                'status': 'active'
            }
        )
        print(f"✓ User created: {name}")
        return True
    except Exception as e:
        print(f"✗ Failed to create user: {e}")
        return False

def get_user(user_id):
    """Get user by ID"""
    try:
        response = table.get_item(Key={'userId': user_id})
        if 'Item' in response:
            user = response['Item']
            print(f"✓ User found: {user['name']}")
            return user
        else:
            print("✗ User not found")
            return None
    except Exception as e:
        print(f"✗ Failed to get user: {e}")
        return None

def update_user(user_id, updates):
    """Update user attributes"""
    try:
        # Build update expression
        update_expr = "SET "
        expr_values = {}

        for key, value in updates.items():
            update_expr += f"{key} = :{key}, "
            expr_values[f":{key}"] = value

        update_expr = update_expr.rstrip(", ")

        table.update_item(
            Key={'userId': user_id},
            UpdateExpression=update_expr,
            ExpressionAttributeValues=expr_values
        )
        print(f"✓ User updated: {user_id}")
        return True
    except Exception as e:
        print(f"✗ Failed to update user: {e}")
        return False

def delete_user(user_id):
    """Delete a user"""
    try:
        table.delete_item(Key={'userId': user_id})
        print(f"✓ User deleted: {user_id}")
        return True
    except Exception as e:
        print(f"✗ Failed to delete user: {e}")
        return False

def query_active_users():
    """Query all active users"""
    try:
        response = table.scan(
            FilterExpression=Attr('status').eq('active')
        )
        users = response['Items']
        print(f"✓ Found {len(users)} active users")
        return users
    except Exception as e:
        print(f"✗ Query failed: {e}")
        return []

# Example usage
if __name__ == '__main__':
    # Create
    create_user('user-123', 'John Doe', 'john@example.com')

    # Read
    user = get_user('user-123')

    # Update
    update_user('user-123', {'status': 'premium', 'lastLogin': datetime.now().isoformat()})

    # Query
    active_users = query_active_users()

    # Delete
    # delete_user('user-123')`,
    expectedOutput: `✓ User created: John Doe
✓ User found: John Doe
✓ User updated: user-123
✓ Found 5 active users

All CRUD operations completed successfully!`,
    learningPoints: [
      'Creating items with put_item',
      'Reading items with get_item',
      'Updating items with update_item',
      'Deleting items with delete_item',
      'Querying with FilterExpression'
    ]
  },

  // API Gateway + Lambda
  {
    id: 'api-gateway-lambda',
    title: 'REST API with API Gateway',
    description: 'Build a serverless REST API endpoint',
    service: 'API Gateway + Lambda',
    language: 'python',
    difficulty: 'Intermediate',
    code: `import json
import boto3
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Items')

def lambda_handler(event, context):
    """
    Handle API Gateway requests
    Supports GET, POST, PUT, DELETE methods
    """
    http_method = event['httpMethod']
    path = event['path']

    try:
        # Route based on HTTP method
        if http_method == 'GET':
            if 'pathParameters' in event and event['pathParameters']:
                # GET /items/{id}
                item_id = event['pathParameters']['id']
                return get_item(item_id)
            else:
                # GET /items
                return list_items()

        elif http_method == 'POST':
            # POST /items
            body = json.loads(event['body'])
            return create_item(body)

        elif http_method == 'PUT':
            # PUT /items/{id}
            item_id = event['pathParameters']['id']
            body = json.loads(event['body'])
            return update_item(item_id, body)

        elif http_method == 'DELETE':
            # DELETE /items/{id}
            item_id = event['pathParameters']['id']
            return delete_item(item_id)

        else:
            return response(405, {'error': 'Method not allowed'})

    except Exception as e:
        return response(500, {'error': str(e)})

def get_item(item_id):
    """Get single item"""
    result = table.get_item(Key={'id': item_id})
    if 'Item' in result:
        return response(200, result['Item'])
    return response(404, {'error': 'Item not found'})

def list_items():
    """List all items"""
    result = table.scan()
    return response(200, {'items': result['Items']})

def create_item(data):
    """Create new item"""
    item = {
        'id': data['id'],
        'name': data['name'],
        'createdAt': datetime.now().isoformat()
    }
    table.put_item(Item=item)
    return response(201, item)

def update_item(item_id, data):
    """Update existing item"""
    table.update_item(
        Key={'id': item_id},
        UpdateExpression='SET #n = :name',
        ExpressionAttributeNames={'#n': 'name'},
        ExpressionAttributeValues={':name': data['name']}
    )
    return response(200, {'message': 'Item updated'})

def delete_item(item_id):
    """Delete item"""
    table.delete_item(Key={'id': item_id})
    return response(200, {'message': 'Item deleted'})

def response(status_code, body):
    """Format API Gateway response"""
    return {
        'statusCode': status_code,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(body)
    }`,
    expectedOutput: `API Gateway Lambda Handler

✓ Handling GET /items
  Response: 200 OK
  Body: {"items": [...]}

✓ Handling POST /items
  Response: 201 Created
  Body: {"id": "123", "name": "New Item", "createdAt": "2024-11-11T10:30:00"}

✓ Handling PUT /items/123
  Response: 200 OK
  Body: {"message": "Item updated"}

✓ Handling DELETE /items/123
  Response: 200 OK
  Body: {"message": "Item deleted"}

REST API implemented successfully!`,
    learningPoints: [
      'API Gateway Lambda proxy integration',
      'HTTP method routing',
      'Path parameters extraction',
      'Request body parsing',
      'CORS headers configuration',
      'Proper REST API response formatting'
    ]
  },

  // EC2 Management
  {
    id: 'ec2-management',
    title: 'EC2 Instance Management',
    description: 'Launch, manage, and monitor EC2 instances',
    service: 'Amazon EC2',
    language: 'python',
    difficulty: 'Intermediate',
    code: `import boto3
from botocore.exceptions import ClientError

ec2 = boto3.client('ec2')
ec2_resource = boto3.resource('ec2')

def launch_instance(ami_id, instance_type='t2.micro'):
    """
    Launch a new EC2 instance
    """
    try:
        instances = ec2_resource.create_instances(
            ImageId=ami_id,
            InstanceType=instance_type,
            MinCount=1,
            MaxCount=1,
            KeyName='my-key-pair',
            SecurityGroupIds=['sg-12345678'],
            TagSpecifications=[{
                'ResourceType': 'instance',
                'Tags': [
                    {'Key': 'Name', 'Value': 'MyWebServer'},
                    {'Key': 'Environment', 'Value': 'Development'}
                ]
            }],
            UserData='''#!/bin/bash
                yum update -y
                yum install -y httpd
                systemctl start httpd
                systemctl enable httpd
                echo "<h1>Hello from EC2!</h1>" > /var/www/html/index.html
            '''
        )

        instance = instances[0]
        print(f"✓ Instance launched: {instance.id}")

        # Wait for instance to be running
        instance.wait_until_running()
        instance.reload()

        print(f"✓ Instance running at: {instance.public_ip_address}")
        return instance.id

    except ClientError as e:
        print(f"✗ Failed to launch instance: {e}")
        return None

def stop_instance(instance_id):
    """Stop an EC2 instance"""
    try:
        ec2.stop_instances(InstanceIds=[instance_id])
        print(f"✓ Instance stopping: {instance_id}")
        return True
    except ClientError as e:
        print(f"✗ Failed to stop instance: {e}")
        return False

def start_instance(instance_id):
    """Start an EC2 instance"""
    try:
        ec2.start_instances(InstanceIds=[instance_id])
        print(f"✓ Instance starting: {instance_id}")
        return True
    except ClientError as e:
        print(f"✗ Failed to start instance: {e}")
        return False

def terminate_instance(instance_id):
    """Terminate an EC2 instance"""
    try:
        ec2.terminate_instances(InstanceIds=[instance_id])
        print(f"✓ Instance terminating: {instance_id}")
        return True
    except ClientError as e:
        print(f"✗ Failed to terminate instance: {e}")
        return False

def list_instances():
    """List all EC2 instances"""
    try:
        response = ec2.describe_instances()

        for reservation in response['Reservations']:
            for instance in reservation['Instances']:
                name = 'N/A'
                if 'Tags' in instance:
                    for tag in instance['Tags']:
                        if tag['Key'] == 'Name':
                            name = tag['Value']

                print(f"Instance: {instance['InstanceId']}")
                print(f"  Name: {name}")
                print(f"  Type: {instance['InstanceType']}")
                print(f"  State: {instance['State']['Name']}")
                print(f"  IP: {instance.get('PublicIpAddress', 'N/A')}")
                print()

        return True
    except ClientError as e:
        print(f"✗ Failed to list instances: {e}")
        return False

# Example usage
if __name__ == '__main__':
    AMI_ID = 'ami-0c55b159cbfafe1f0'  # Amazon Linux 2

    # Launch instance
    instance_id = launch_instance(AMI_ID, 't2.micro')

    # List all instances
    list_instances()

    # Manage instance
    # stop_instance(instance_id)
    # start_instance(instance_id)
    # terminate_instance(instance_id)`,
    expectedOutput: `✓ Instance launched: i-1234567890abcdef0
✓ Instance running at: 54.123.45.67

Instance: i-1234567890abcdef0
  Name: MyWebServer
  Type: t2.micro
  State: running
  IP: 54.123.45.67

EC2 instance management completed successfully!`,
    learningPoints: [
      'Launching EC2 instances',
      'Using user data for bootstrapping',
      'Tagging resources',
      'Managing instance state',
      'Listing and describing instances'
    ]
  }
];

export const templateCategories = [
  'AWS Lambda',
  'Amazon S3',
  'Amazon DynamoDB',
  'Amazon EC2',
  'API Gateway + Lambda'
];
