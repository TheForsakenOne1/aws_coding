export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  category: string;
  icon: string;
  technologies: string[];
  skills: string[];
  features: string[];
  architecture: string;
  repository?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: 'serverless-todo-api',
    title: 'Serverless Todo List API',
    description: 'Build a fully serverless REST API for a todo list application with user authentication',
    difficulty: 'Beginner',
    estimatedTime: '4-6 hours',
    category: 'Serverless',
    icon: '✅',
    technologies: ['Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'Python'],
    skills: [
      'Serverless architecture',
      'REST API design',
      'Authentication with Cognito',
      'NoSQL database operations',
      'API Gateway configuration'
    ],
    features: [
      'User registration and authentication',
      'Create, read, update, delete todos',
      'Mark todos as complete/incomplete',
      'Filter todos by status',
      'Serverless deployment with SAM or CDK',
      'Input validation and error handling'
    ],
    architecture: 'API Gateway → Lambda → DynamoDB, Cognito for authentication'
  },
  {
    id: 'photo-sharing-app',
    title: 'Photo Sharing Application',
    description: 'Create a full-stack photo sharing platform with image processing and storage',
    difficulty: 'Intermediate',
    estimatedTime: '12-16 hours',
    category: 'Full Stack',
    icon: '📸',
    technologies: ['S3', 'Lambda', 'Rekognition', 'DynamoDB', 'CloudFront', 'React'],
    skills: [
      'S3 bucket configuration and policies',
      'Image processing with Lambda',
      'AI-powered image tagging',
      'CDN configuration',
      'Frontend integration with AWS SDK'
    ],
    features: [
      'Upload photos to S3',
      'Automatic image resizing and optimization',
      'AI-generated tags using Rekognition',
      'Image metadata storage in DynamoDB',
      'Fast content delivery via CloudFront',
      'User albums and collections',
      'Search photos by tags'
    ],
    architecture: 'React → API Gateway → Lambda → S3/DynamoDB/Rekognition → CloudFront'
  },
  {
    id: 'realtime-chat',
    title: 'Real-time Chat Application',
    description: 'Build a scalable real-time chat app with WebSocket support',
    difficulty: 'Intermediate',
    estimatedTime: '10-14 hours',
    category: 'Real-time',
    icon: '💬',
    technologies: ['API Gateway WebSocket', 'Lambda', 'DynamoDB', 'S3', 'React'],
    skills: [
      'WebSocket API setup',
      'Real-time message handling',
      'Connection management',
      'Serverless WebSocket architecture',
      'Message persistence'
    ],
    features: [
      'Real-time messaging',
      'Multiple chat rooms',
      'User presence indicators',
      'Message history',
      'File sharing',
      'User authentication',
      'Typing indicators'
    ],
    architecture: 'WebSocket API Gateway → Lambda → DynamoDB (connections + messages)'
  },
  {
    id: 'video-processing-pipeline',
    title: 'Video Processing Pipeline',
    description: 'Automated video transcoding and thumbnail generation system',
    difficulty: 'Advanced',
    estimatedTime: '16-20 hours',
    category: 'Media Processing',
    icon: '🎬',
    technologies: ['S3', 'Lambda', 'MediaConvert', 'Step Functions', 'SNS', 'CloudFront'],
    skills: [
      'Event-driven architecture',
      'Video transcoding',
      'Workflow orchestration',
      'S3 event notifications',
      'Distributed systems'
    ],
    features: [
      'Upload videos to S3',
      'Automatic video transcoding to multiple formats',
      'Thumbnail generation',
      'Progress notifications via SNS',
      'Workflow orchestration with Step Functions',
      'CDN delivery',
      'Processing status tracking'
    ],
    architecture: 'S3 → EventBridge → Step Functions → Lambda/MediaConvert → S3 → CloudFront'
  },
  {
    id: 'ecommerce-microservices',
    title: 'E-commerce Microservices Platform',
    description: 'Build a scalable e-commerce platform using microservices architecture',
    difficulty: 'Advanced',
    estimatedTime: '30-40 hours',
    category: 'Microservices',
    icon: '🛒',
    technologies: ['ECS', 'RDS', 'ElastiCache', 'SQS', 'SNS', 'API Gateway', 'Cognito'],
    skills: [
      'Microservices architecture',
      'Container orchestration',
      'Service-to-service communication',
      'Distributed transactions',
      'Caching strategies',
      'Message queues'
    ],
    features: [
      'Product catalog service',
      'Shopping cart service',
      'Order processing service',
      'Payment integration',
      'Inventory management',
      'User authentication',
      'Email notifications',
      'Order tracking',
      'Admin dashboard'
    ],
    architecture: 'API Gateway → Multiple ECS services → RDS/DynamoDB → SQS/SNS for async communication'
  },
  {
    id: 'log-analytics-platform',
    title: 'Log Analytics Platform',
    description: 'Real-time log aggregation and analysis system',
    difficulty: 'Advanced',
    estimatedTime: '20-24 hours',
    category: 'Data Analytics',
    icon: '📊',
    technologies: ['Kinesis', 'Lambda', 'Elasticsearch', 'S3', 'Athena', 'QuickSight'],
    skills: [
      'Stream processing',
      'Log parsing and transformation',
      'Full-text search',
      'Data visualization',
      'Real-time analytics'
    ],
    features: [
      'Ingest logs from multiple sources',
      'Real-time log processing',
      'Full-text search capabilities',
      'Log aggregation and filtering',
      'Alerting on patterns',
      'Historical log storage in S3',
      'Visual dashboards',
      'Query logs with SQL'
    ],
    architecture: 'CloudWatch Logs → Kinesis → Lambda → Elasticsearch + S3 → Athena → QuickSight'
  },
  {
    id: 'iot-dashboard',
    title: 'IoT Device Dashboard',
    description: 'Monitor and control IoT devices in real-time',
    difficulty: 'Intermediate',
    estimatedTime: '14-18 hours',
    category: 'IoT',
    icon: '📡',
    technologies: ['IoT Core', 'Lambda', 'DynamoDB', 'Timestream', 'API Gateway', 'React'],
    skills: [
      'MQTT protocol',
      'Device shadow management',
      'Time-series data storage',
      'Real-time device monitoring',
      'IoT security'
    ],
    features: [
      'Device registration and management',
      'Real-time telemetry data',
      'Device control commands',
      'Historical data visualization',
      'Alerts and notifications',
      'Device status monitoring',
      'Data export capabilities'
    ],
    architecture: 'IoT Devices → IoT Core → Lambda → DynamoDB/Timestream → API Gateway → React Dashboard'
  },
  {
    id: 'ml-image-classifier',
    title: 'Machine Learning Image Classifier',
    description: 'Train and deploy a custom image classification model',
    difficulty: 'Advanced',
    estimatedTime: '24-30 hours',
    category: 'Machine Learning',
    icon: '🤖',
    technologies: ['SageMaker', 'S3', 'Lambda', 'API Gateway', 'ECR'],
    skills: [
      'Model training with SageMaker',
      'Hyperparameter tuning',
      'Model deployment',
      'Inference endpoints',
      'MLOps practices'
    ],
    features: [
      'Dataset preparation and labeling',
      'Model training with SageMaker',
      'Hyperparameter optimization',
      'Model versioning',
      'Real-time inference API',
      'Batch predictions',
      'Model monitoring',
      'A/B testing for models'
    ],
    architecture: 'S3 (data) → SageMaker (training) → Model Registry → Lambda/API Gateway (inference)'
  },
  {
    id: 'disaster-recovery',
    title: 'Multi-Region Disaster Recovery System',
    description: 'Implement cross-region backup and failover solution',
    difficulty: 'Advanced',
    estimatedTime: '20-25 hours',
    category: 'Infrastructure',
    icon: '🔄',
    technologies: ['Route 53', 'RDS', 'S3', 'Lambda', 'CloudFormation', 'CloudWatch'],
    skills: [
      'Multi-region architecture',
      'Database replication',
      'Automated failover',
      'Infrastructure as Code',
      'Health monitoring'
    ],
    features: [
      'Cross-region data replication',
      'Automated failover with Route 53',
      'RDS read replicas',
      'S3 cross-region replication',
      'Health checks and monitoring',
      'Automated backups',
      'Disaster recovery testing',
      'RPO/RTO metrics'
    ],
    architecture: 'Multi-region deployment with Route 53 health checks, RDS replicas, S3 CRR'
  },
  {
    id: 'ci-cd-pipeline',
    title: 'Complete CI/CD Pipeline',
    description: 'End-to-end automated deployment pipeline with testing',
    difficulty: 'Intermediate',
    estimatedTime: '12-16 hours',
    category: 'DevOps',
    icon: '🚀',
    technologies: ['CodePipeline', 'CodeBuild', 'CodeDeploy', 'ECR', 'ECS', 'CloudFormation'],
    skills: [
      'Pipeline automation',
      'Containerization',
      'Blue-green deployments',
      'Automated testing',
      'Infrastructure as Code'
    ],
    features: [
      'Source code integration (GitHub)',
      'Automated build and test',
      'Docker image creation',
      'Security scanning',
      'Staging environment deployment',
      'Manual approval gate',
      'Production deployment',
      'Rollback capabilities',
      'Notifications'
    ],
    architecture: 'GitHub → CodePipeline → CodeBuild → ECR → CodeDeploy → ECS'
  },
  {
    id: 'content-moderation',
    title: 'AI-Powered Content Moderation System',
    description: 'Automatically moderate user-generated content using AI',
    difficulty: 'Intermediate',
    estimatedTime: '10-14 hours',
    category: 'AI/ML',
    icon: '🛡️',
    technologies: ['Rekognition', 'Comprehend', 'Lambda', 'S3', 'DynamoDB', 'SNS'],
    skills: [
      'AI service integration',
      'Content analysis',
      'Automated workflows',
      'Notification systems',
      'Content filtering'
    ],
    features: [
      'Image moderation with Rekognition',
      'Text sentiment analysis',
      'Profanity detection',
      'Automatic content flagging',
      'Moderation queue',
      'Admin review interface',
      'User notifications',
      'Analytics dashboard'
    ],
    architecture: 'S3/API Gateway → Lambda → Rekognition/Comprehend → DynamoDB → SNS'
  },
  {
    id: 'cost-optimization-tool',
    title: 'AWS Cost Optimization Dashboard',
    description: 'Monitor and optimize AWS spending across services',
    difficulty: 'Intermediate',
    estimatedTime: '16-20 hours',
    category: 'FinOps',
    icon: '💰',
    technologies: ['Cost Explorer API', 'Lambda', 'DynamoDB', 'QuickSight', 'SNS'],
    skills: [
      'Cost analysis',
      'Data aggregation',
      'Visualization',
      'Alert configuration',
      'Resource tagging'
    ],
    features: [
      'Daily cost tracking',
      'Service-wise breakdown',
      'Cost anomaly detection',
      'Budget alerts',
      'Unused resource identification',
      'Savings recommendations',
      'Historical trend analysis',
      'Cost forecasting'
    ],
    architecture: 'Cost Explorer API → Lambda → DynamoDB → QuickSight, SNS for alerts'
  }
];

export const projectCategories = [
  'All',
  'Serverless',
  'Full Stack',
  'Real-time',
  'Media Processing',
  'Microservices',
  'Data Analytics',
  'IoT',
  'Machine Learning',
  'Infrastructure',
  'DevOps',
  'AI/ML',
  'FinOps'
];
