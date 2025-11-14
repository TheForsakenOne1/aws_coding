export interface Certification {
  id: string;
  title: string;
  level: 'Foundational' | 'Associate' | 'Professional' | 'Specialty';
  code: string;
  icon: string;
  description: string;
  examDuration: string;
  numberOfQuestions: string;
  passingScore: string;
  examCost: string;
  prerequisites: string[];
  domains: Domain[];
  studyResources: StudyResource[];
  sampleQuestions: SampleQuestion[];
  tips: string[];
}

export interface Domain {
  name: string;
  weight: string;
  topics: string[];
}

export interface StudyResource {
  type: 'Official' | 'Book' | 'Course' | 'Practice' | 'Community';
  title: string;
  provider: string;
  url?: string;
  free: boolean;
}

export interface SampleQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const certifications: Certification[] = [
  {
    id: 'cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    level: 'Foundational',
    code: 'CLF-C02',
    icon: '🌟',
    description: 'Validates overall understanding of the AWS Cloud, independent of specific technical roles',
    examDuration: '90 minutes',
    numberOfQuestions: '65',
    passingScore: '700/1000',
    examCost: '$100',
    prerequisites: [
      '6 months of AWS Cloud exposure',
      'Basic understanding of IT services',
      'Knowledge of AWS Cloud and services'
    ],
    domains: [
      {
        name: 'Cloud Concepts',
        weight: '24%',
        topics: [
          'Define the AWS Cloud and its value proposition',
          'Identify AWS Cloud economics',
          'Describe cloud architecture design principles'
        ]
      },
      {
        name: 'Security and Compliance',
        weight: '30%',
        topics: [
          'Define AWS shared responsibility model',
          'Define AWS Cloud security and compliance concepts',
          'Identify AWS access management capabilities',
          'Identify security support resources'
        ]
      },
      {
        name: 'Cloud Technology and Services',
        weight: '34%',
        topics: [
          'Define methods of deploying on AWS',
          'Define the AWS global infrastructure',
          'Identify AWS compute, storage, database, and networking services',
          'Identify AWS AI/ML and analytics services'
        ]
      },
      {
        name: 'Billing, Pricing, and Support',
        weight: '12%',
        topics: [
          'Compare AWS pricing models',
          'Understand AWS billing and pricing',
          'Identify AWS technical support options'
        ]
      }
    ],
    studyResources: [
      {
        type: 'Official',
        title: 'AWS Cloud Practitioner Essentials',
        provider: 'AWS Training',
        url: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/',
        free: true
      },
      {
        type: 'Official',
        title: 'Exam Guide',
        provider: 'AWS',
        url: 'https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf',
        free: true
      },
      {
        type: 'Course',
        title: 'Ultimate AWS Certified Cloud Practitioner',
        provider: 'Udemy - Stephane Maarek',
        free: false
      },
      {
        type: 'Practice',
        title: 'Official Practice Exam',
        provider: 'AWS',
        free: false
      }
    ],
    sampleQuestions: [
      {
        question: 'Which AWS service can be used to host a static website?',
        options: [
          'Amazon EC2',
          'Amazon S3',
          'Amazon RDS',
          'AWS Lambda'
        ],
        correctAnswer: 1,
        explanation: 'Amazon S3 can host static websites directly without needing to manage servers. You can configure an S3 bucket for static website hosting.'
      }
    ],
    tips: [
      'Understand the AWS Well-Architected Framework',
      'Know the difference between AWS services',
      'Focus on use cases rather than deep technical details',
      'Understand AWS pricing models',
      'Review the AWS whitepap ers',
      'Take practice exams to familiarize with question format'
    ]
  },
  {
    id: 'solutions-architect-associate',
    title: 'AWS Certified Solutions Architect – Associate',
    level: 'Associate',
    code: 'SAA-C03',
    icon: '🏗️',
    description: 'Validates ability to design and implement distributed systems on AWS',
    examDuration: '130 minutes',
    numberOfQuestions: '65',
    passingScore: '720/1000',
    examCost: '$150',
    prerequisites: [
      '1 year of hands-on experience with AWS',
      'Experience designing distributed applications',
      'Understanding of core AWS services',
      'Basic architectural best practices'
    ],
    domains: [
      {
        name: 'Design Secure Architectures',
        weight: '30%',
        topics: [
          'Design secure access to AWS resources',
          'Design secure workloads and applications',
          'Determine appropriate data security controls'
        ]
      },
      {
        name: 'Design Resilient Architectures',
        weight: '26%',
        topics: [
          'Design scalable and loosely coupled architectures',
          'Design highly available and fault-tolerant architectures'
        ]
      },
      {
        name: 'Design High-Performing Architectures',
        weight: '24%',
        topics: [
          'Determine high-performing and elastic compute solutions',
          'Determine high-performing database solutions',
          'Determine high-performing and scalable storage solutions',
          'Determine high-performing networking solutions'
        ]
      },
      {
        name: 'Design Cost-Optimized Architectures',
        weight: '20%',
        topics: [
          'Design cost-optimized storage solutions',
          'Design cost-optimized compute solutions',
          'Design cost-optimized database solutions',
          'Design cost-optimized network architectures'
        ]
      }
    ],
    studyResources: [
      {
        type: 'Official',
        title: 'Architecting on AWS',
        provider: 'AWS Training',
        free: false
      },
      {
        type: 'Course',
        title: 'Ultimate AWS Certified Solutions Architect Associate',
        provider: 'Udemy - Stephane Maarek',
        free: false
      },
      {
        type: 'Course',
        title: 'AWS Certified Solutions Architect Associate',
        provider: 'A Cloud Guru',
        free: false
      },
      {
        type: 'Book',
        title: 'AWS Certified Solutions Architect Study Guide',
        provider: 'Sybex',
        free: false
      }
    ],
    sampleQuestions: [
      {
        question: 'A company needs to store petabytes of data with infrequent access. Which storage solution is MOST cost-effective?',
        options: [
          'Amazon S3 Standard',
          'Amazon S3 Glacier Deep Archive',
          'Amazon EBS',
          'Amazon EFS'
        ],
        correctAnswer: 1,
        explanation: 'S3 Glacier Deep Archive is the most cost-effective storage class for long-term retention of data that is accessed once or twice per year.'
      }
    ],
    tips: [
      'Focus on the Well-Architected Framework pillars',
      'Understand when to use each AWS service',
      'Know the differences between similar services',
      'Practice designing architectures for given scenarios',
      'Understand cost optimization strategies',
      'Review case studies and reference architectures'
    ]
  },
  {
    id: 'developer-associate',
    title: 'AWS Certified Developer – Associate',
    level: 'Associate',
    code: 'DVA-C02',
    icon: '💻',
    description: 'Validates ability to develop and maintain AWS-based applications',
    examDuration: '130 minutes',
    numberOfQuestions: '65',
    passingScore: '720/1000',
    examCost: '$150',
    prerequisites: [
      '1+ years of hands-on experience developing on AWS',
      'Proficiency in at least one high-level programming language',
      'Understanding of core AWS services and APIs',
      'Knowledge of AWS SDKs'
    ],
    domains: [
      {
        name: 'Development with AWS Services',
        weight: '32%',
        topics: [
          'Develop code for applications hosted on AWS',
          'Develop code for AWS Lambda',
          'Use data stores in application development'
        ]
      },
      {
        name: 'Security',
        weight: '26%',
        topics: [
          'Implement authentication and authorization',
          'Implement encryption using AWS services',
          'Manage sensitive data in application code'
        ]
      },
      {
        name: 'Deployment',
        weight: '24%',
        topics: [
          'Prepare application artifacts for deployment',
          'Test applications in development environments',
          'Automate deployment testing'
        ]
      },
      {
        name: 'Troubleshooting and Optimization',
        weight: '18%',
        topics: [
          'Assist in root cause analysis',
          'Instrument code for observability',
          'Optimize applications'
        ]
      }
    ],
    studyResources: [
      {
        type: 'Official',
        title: 'Developing on AWS',
        provider: 'AWS Training',
        free: false
      },
      {
        type: 'Course',
        title: 'AWS Certified Developer Associate',
        provider: 'Udemy - Stephane Maarek',
        free: false
      },
      {
        type: 'Practice',
        title: 'AWS Developer Associate Practice Exams',
        provider: 'Tutorials Dojo',
        free: false
      }
    ],
    sampleQuestions: [],
    tips: [
      'Know the AWS SDKs and CLI thoroughly',
      'Understand Lambda function configuration and optimization',
      'Practice with DynamoDB queries and indexing',
      'Know CI/CD services like CodePipeline, CodeBuild, CodeDeploy',
      'Understand CloudFormation and SAM',
      'Practice debugging with CloudWatch Logs and X-Ray'
    ]
  },
  {
    id: 'sysops-administrator-associate',
    title: 'AWS Certified SysOps Administrator – Associate',
    level: 'Associate',
    code: 'SOA-C02',
    icon: '⚙️',
    description: 'Validates ability to deploy, manage, and operate workloads on AWS',
    examDuration: '130 minutes',
    numberOfQuestions: '65',
    passingScore: '720/1000',
    examCost: '$150',
    prerequisites: [
      '1+ years of hands-on experience operating AWS workloads',
      'Experience deploying and managing production systems',
      'Understanding of networking and security on AWS',
      'Experience with automation and scripting'
    ],
    domains: [
      {
        name: 'Monitoring, Logging, and Remediation',
        weight: '20%',
        topics: [
          'Implement metrics, alarms, and logs',
          'Remediate issues based on monitoring and availability metrics',
          'Maintain logs and metrics'
        ]
      },
      {
        name: 'Reliability and Business Continuity',
        weight: '16%',
        topics: [
          'Implement scalability and elasticity',
          'Implement high availability and resilient environments',
          'Implement backup and restore strategies'
        ]
      },
      {
        name: 'Deployment, Provisioning, and Automation',
        weight: '18%',
        topics: [
          'Provision and maintain cloud resources',
          'Automate manual or repeatable processes'
        ]
      },
      {
        name: 'Security and Compliance',
        weight: '16%',
        topics: [
          'Implement and manage security and compliance policies',
          'Implement data and infrastructure protection strategies'
        ]
      },
      {
        name: 'Networking and Content Delivery',
        weight: '18%',
        topics: [
          'Implement and maintain network features',
          'Configure domains, DNS, and content delivery',
          'Troubleshoot network connectivity issues'
        ]
      },
      {
        name: 'Cost and Performance Optimization',
        weight: '12%',
        topics: [
          'Implement cost optimization strategies',
          'Implement performance optimization strategies'
        ]
      }
    ],
    studyResources: [
      {
        type: 'Official',
        title: 'Systems Operations on AWS',
        provider: 'AWS Training',
        free: false
      },
      {
        type: 'Course',
        title: 'AWS Certified SysOps Administrator Associate',
        provider: 'A Cloud Guru',
        free: false
      }
    ],
    sampleQuestions: [],
    tips: [
      'Focus on CloudWatch for monitoring and alerting',
      'Understand Auto Scaling policies and strategies',
      'Know backup and disaster recovery options',
      'Practice with Systems Manager and automation',
      'Understand cost optimization techniques',
      'Know networking concepts like VPC, subnets, route tables'
    ]
  },
  {
    id: 'solutions-architect-professional',
    title: 'AWS Certified Solutions Architect – Professional',
    level: 'Professional',
    code: 'SAP-C02',
    icon: '🎯',
    description: 'Validates advanced technical skills and experience in designing distributed applications on AWS',
    examDuration: '180 minutes',
    numberOfQuestions: '75',
    passingScore: '750/1000',
    examCost: '$300',
    prerequisites: [
      '2+ years of hands-on experience designing and deploying cloud architecture',
      'Solutions Architect Associate certification recommended',
      'Deep understanding of multiple AWS services',
      'Experience with enterprise-scale migrations'
    ],
    domains: [
      {
        name: 'Design Solutions for Organizational Complexity',
        weight: '26%',
        topics: [
          'Architect network connectivity strategies',
          'Prescribe security controls',
          'Design reliable and resilient architectures',
          'Design multi-account AWS environments'
        ]
      },
      {
        name: 'Design for New Solutions',
        weight: '29%',
        topics: [
          'Design deployment strategies',
          'Design a solution to meet business requirements',
          'Determine security controls',
          'Determine cost optimization strategies'
        ]
      },
      {
        name: 'Continuous Improvement for Existing Solutions',
        weight: '25%',
        topics: [
          'Determine strategy to improve overall operational excellence',
          'Determine strategy to improve security',
          'Determine strategy to improve performance',
          'Determine strategy to improve reliability',
          'Determine strategy to improve cost optimization'
        ]
      },
      {
        name: 'Accelerate Workload Migration and Modernization',
        weight: '20%',
        topics: [
          'Select migration or modernization strategies',
          'Determine approach to achieve migration or modernization'
        ]
      }
    ],
    studyResources: [
      {
        type: 'Official',
        title: 'Advanced Architecting on AWS',
        provider: 'AWS Training',
        free: false
      },
      {
        type: 'Course',
        title: 'AWS Certified Solutions Architect Professional',
        provider: 'A Cloud Guru',
        free: false
      }
    ],
    sampleQuestions: [],
    tips: [
      'This is a scenario-heavy exam',
      'Understand hybrid architectures and migrations',
      'Know Organizations, Control Tower, and multi-account strategies',
      'Deep dive into networking (Transit Gateway, Direct Connect)',
      'Understand disaster recovery strategies (RTO, RPO)',
      'Know cost optimization at scale'
    ]
  },
  {
    id: 'devops-engineer-professional',
    title: 'AWS Certified DevOps Engineer – Professional',
    level: 'Professional',
    code: 'DOP-C02',
    icon: '🚀',
    description: 'Validates technical expertise in provisioning, operating, and managing distributed systems on AWS',
    examDuration: '180 minutes',
    numberOfQuestions: '75',
    passingScore: '750/1000',
    examCost: '$300',
    prerequisites: [
      '2+ years of experience operating AWS environments',
      'Developer or SysOps Associate certification recommended',
      'Experience with CI/CD pipelines',
      'Experience with infrastructure as code'
    ],
    domains: [
      {
        name: 'SDLC Automation',
        weight: '22%',
        topics: [
          'Implement CI/CD pipelines',
          'Implement configuration management',
          'Implement infrastructure as code'
        ]
      },
      {
        name: 'Configuration Management and IaC',
        weight: '17%',
        topics: [
          'Determine deployment services based on requirements',
          'Automate configuration management'
        ]
      },
      {
        name: 'Resilient Cloud Solutions',
        weight: '15%',
        topics: [
          'Implement strategies for monitoring and logging',
          'Implement strategies for high availability',
          'Implement strategies for self-healing systems'
        ]
      },
      {
        name: 'Monitoring and Logging',
        weight: '15%',
        topics: [
          'Implement application and infrastructure monitoring',
          'Design and implement log aggregation',
          'Analyze monitoring and logging data'
        ]
      },
      {
        name: 'Incident and Event Response',
        weight: '14%',
        topics: [
          'Manage event sources',
          'Implement automated remediation',
          'Implement incident response'
        ]
      },
      {
        name: 'Security and Compliance',
        weight: '17%',
        topics: [
          'Implement governance strategies',
          'Implement security controls',
          'Validate adherence to standards'
        ]
      }
    ],
    studyResources: [
      {
        type: 'Official',
        title: 'DevOps Engineering on AWS',
        provider: 'AWS Training',
        free: false
      },
      {
        type: 'Course',
        title: 'AWS Certified DevOps Engineer Professional',
        provider: 'A Cloud Guru',
        free: false
      }
    ],
    sampleQuestions: [],
    tips: [
      'Master CloudFormation and CDK',
      'Know CodePipeline, CodeBuild, CodeDeploy inside out',
      'Understand blue-green and canary deployments',
      'Know Systems Manager Parameter Store and Secrets Manager',
      'Understand monitoring with CloudWatch and X-Ray',
      'Practice with Lambda for automation'
    ]
  }
];

export const certificationLevels = ['All', 'Foundational', 'Associate', 'Professional', 'Specialty'];
