export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'Book' | 'Course' | 'Video' | 'Tool' | 'Website' | 'Blog' | 'Podcast' | 'Community';
  category: string;
  url: string;
  provider: string;
  free: boolean;
  rating?: number;
  icon: string;
}

export const resources: Resource[] = [
  {
    id: 'aws-docs',
    title: 'AWS Official Documentation',
    description: 'Comprehensive documentation for all AWS services',
    type: 'Website',
    category: 'Documentation',
    url: 'https://docs.aws.amazon.com',
    provider: 'AWS',
    free: true,
    rating: 5,
    icon: '📚'
  },
  {
    id: 'aws-whitepapers',
    title: 'AWS Whitepapers',
    description: 'Technical content authored by AWS and the AWS community',
    type: 'Website',
    category: 'Documentation',
    url: 'https://aws.amazon.com/whitepapers',
    provider: 'AWS',
    free: true,
    icon: '📄'
  },
  {
    id: 'stephane-maarek-course',
    title: 'Ultimate AWS Certified Solutions Architect Associate',
    description: 'Comprehensive course for Solutions Architect Associate certification',
    type: 'Course',
    category: 'Certification',
    url: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03',
    provider: 'Udemy - Stephane Maarek',
    free: false,
    rating: 5,
    icon: '🎓'
  },
  {
    id: 'acloudguru',
    title: 'A Cloud Guru',
    description: 'Cloud learning platform with AWS courses and hands-on labs',
    type: 'Course',
    category: 'Learning Platform',
    url: 'https://acloudguru.com',
    provider: 'A Cloud Guru',
    free: false,
    rating: 5,
    icon: '☁️'
  },
  {
    id: 'aws-skill-builder',
    title: 'AWS Skill Builder',
    description: 'AWS official training with free and paid courses',
    type: 'Course',
    category: 'Learning Platform',
    url: 'https://skillbuilder.aws',
    provider: 'AWS Training',
    free: true,
    rating: 5,
    icon: '🎯'
  },
  {
    id: 'aws-podcast',
    title: 'AWS Podcast',
    description: 'Official AWS podcast covering cloud computing topics',
    type: 'Podcast',
    category: 'Podcast',
    url: 'https://aws.amazon.com/podcasts/aws-podcast',
    provider: 'AWS',
    free: true,
    icon: '🎙️'
  },
  {
    id: 'cloudcraft',
    title: 'Cloudcraft',
    description: 'Visual designer for AWS cloud architecture diagrams',
    type: 'Tool',
    category: 'Architecture',
    url: 'https://www.cloudcraft.co',
    provider: 'Cloudcraft',
    free: false,
    icon: '🎨'
  },
  {
    id: 'aws-cli',
    title: 'AWS Command Line Interface',
    description: 'Unified tool to manage AWS services from command line',
    type: 'Tool',
    category: 'Development',
    url: 'https://aws.amazon.com/cli',
    provider: 'AWS',
    free: true,
    icon: '⌨️'
  },
  {
    id: 'aws-cdk',
    title: 'AWS Cloud Development Kit',
    description: 'Define cloud infrastructure using programming languages',
    type: 'Tool',
    category: 'Infrastructure as Code',
    url: 'https://aws.amazon.com/cdk',
    provider: 'AWS',
    free: true,
    icon: '🔧'
  },
  {
    id: 'serverless-framework',
    title: 'Serverless Framework',
    description: 'Build and deploy serverless applications easily',
    type: 'Tool',
    category: 'Serverless',
    url: 'https://www.serverless.com',
    provider: 'Serverless Inc',
    free: true,
    icon: '⚡'
  },
  {
    id: 'boto3-docs',
    title: 'Boto3 Documentation',
    description: 'AWS SDK for Python - comprehensive reference',
    type: 'Website',
    category: 'SDK',
    url: 'https://boto3.amazonaws.com/v1/documentation/api/latest/index.html',
    provider: 'AWS',
    free: true,
    icon: '🐍'
  },
  {
    id: 'aws-samples',
    title: 'AWS Samples on GitHub',
    description: 'Official AWS code samples and examples',
    type: 'Website',
    category: 'Code Samples',
    url: 'https://github.com/aws-samples',
    provider: 'AWS',
    free: true,
    icon: '💻'
  },
  {
    id: 'aws-reddit',
    title: 'r/aws on Reddit',
    description: 'Active AWS community for discussions and questions',
    type: 'Community',
    category: 'Community',
    url: 'https://reddit.com/r/aws',
    provider: 'Reddit',
    free: true,
    icon: '👥'
  },
  {
    id: 'aws-re-invent',
    title: 'AWS re:Invent Videos',
    description: 'Technical sessions from AWS annual conference',
    type: 'Video',
    category: 'Conference',
    url: 'https://www.youtube.com/c/AWSEventsChannel',
    provider: 'AWS',
    free: true,
    icon: '🎥'
  },
  {
    id: 'aws-builder-library',
    title: 'Amazon Builder Library',
    description: 'How Amazon builds and operates software',
    type: 'Website',
    category: 'Best Practices',
    url: 'https://aws.amazon.com/builders-library',
    provider: 'AWS',
    free: true,
    icon: '🏗️'
  },
  {
    id: 'aws-architecture-center',
    title: 'AWS Architecture Center',
    description: 'Reference architectures and best practices',
    type: 'Website',
    category: 'Architecture',
    url: 'https://aws.amazon.com/architecture',
    provider: 'AWS',
    free: true,
    icon: '🏛️'
  },
  {
    id: 'terraform',
    title: 'Terraform',
    description: 'Infrastructure as Code tool supporting AWS',
    type: 'Tool',
    category: 'Infrastructure as Code',
    url: 'https://www.terraform.io',
    provider: 'HashiCorp',
    free: true,
    icon: '🔨'
  },
  {
    id: 'aws-cost-explorer',
    title: 'AWS Cost Explorer',
    description: 'Visualize and manage AWS costs',
    type: 'Tool',
    category: 'Cost Management',
    url: 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer',
    provider: 'AWS',
    free: true,
    icon: '💰'
  },
  {
    id: 'last-week-in-aws',
    title: 'Last Week in AWS',
    description: 'Irreverent newsletter about AWS news',
    type: 'Blog',
    category: 'News',
    url: 'https://www.lastweekinaws.com',
    provider: 'Corey Quinn',
    free: true,
    icon: '📰'
  },
  {
    id: 'aws-this-week',
    title: 'AWS This Week',
    description: 'Weekly AWS news and announcements',
    type: 'Blog',
    category: 'News',
    url: 'https://aws.amazon.com/blogs/aws',
    provider: 'AWS',
    free: true,
    icon: '📢'
  }
];

export const resourceCategories = [
  'All',
  'Documentation',
  'Certification',
  'Learning Platform',
  'Podcast',
  'Architecture',
  'Development',
  'Infrastructure as Code',
  'Serverless',
  'SDK',
  'Code Samples',
  'Community',
  'Conference',
  'Best Practices',
  'Cost Management',
  'News'
];

export const resourceTypes = [
  'All',
  'Book',
  'Course',
  'Video',
  'Tool',
  'Website',
  'Blog',
  'Podcast',
  'Community'
];
