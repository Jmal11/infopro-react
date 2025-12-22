import React, { useState } from 'react';

const journeyItems = [
  {
    id: 'cloud-fundamentals',
    title: 'Cloud Fundamentals',
    content: [
      {
        heading: 'Introduction to Cloud Computing',
        description: 'This course provides a comprehensive overview of cloud computing concepts, service models, and deployment models. Learners will gain a solid understanding of the cloud ecosystem and its impact on modern IT infrastructure.',
        points: [
          'Define cloud computing and its key characteristics.',
          'Distinguish between IaaS, PaaS, and SaaS service models.',
          'Explain public, private, and hybrid cloud deployment models.',
          'Identify major cloud service providers and their offerings.',
        ],
      },
      {
        heading: 'Cloud Architecture and Design',
        description: 'Participants will learn how to design and architect cloud-based solutions, focusing on scalability, reliability, and security. The course covers best practices for creating robust cloud infrastructures.',
        points: [
          'Design scalable and fault-tolerant cloud architectures.',
          'Implement cloud design patterns for various use cases.',
          'Optimize cloud resources for cost-effectiveness and performance.',
          'Create high-availability and disaster recovery solutions.',
        ],
      },
    ],
  },
  {
    id: 'cloud-platforms',
    title: 'Cloud Platforms and Services',
    content: [
      {
        heading: 'Amazon Web Services (AWS)',
        description: 'This course provides hands-on experience with AWS, the leading cloud platform. Learners will explore core services and gain practical skills in deploying and managing AWS resources.',
        points: [
          'Navigate the AWS Management Console and CLI.',
          'Deploy and manage EC2 instances and S3 storage.',
          'Configure networking with VPC, subnets, and security groups.',
          'Implement AWS Lambda for serverless computing.',
        ],
      },
      {
        heading: 'Microsoft Azure',
        description: 'Participants will gain proficiency in Microsoft Azure, learning to leverage its comprehensive suite of cloud services for enterprise solutions.',
        points: [
          'Deploy and manage Azure Virtual Machines and App Services.',
          'Configure Azure Active Directory and identity management.',
          'Implement Azure Storage solutions and databases.',
          'Use Azure DevOps for CI/CD pipelines.',
        ],
      },
      {
        heading: 'Google Cloud Platform (GCP)',
        description: 'This course covers Google Cloud Platform essentials, focusing on its unique strengths in data analytics and machine learning services.',
        points: [
          'Deploy applications using Google Compute Engine and Kubernetes.',
          'Leverage BigQuery for large-scale data analytics.',
          'Implement Cloud Storage and Cloud SQL databases.',
          'Explore GCP\'s AI and ML service offerings.',
        ],
      },
    ],
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security and Compliance',
    content: [
      {
        heading: 'Cloud Security Fundamentals',
        description: 'This course covers essential security concepts for cloud environments, including threat models, security controls, and best practices for protecting cloud assets.',
        points: [
          'Understand cloud security threats and vulnerabilities.',
          'Implement identity and access management (IAM) policies.',
          'Configure encryption for data at rest and in transit.',
          'Apply security best practices across cloud services.',
        ],
      },
      {
        heading: 'Compliance and Governance',
        description: 'Participants will learn about regulatory compliance requirements and governance frameworks essential for enterprise cloud deployments.',
        points: [
          'Navigate compliance requirements (GDPR, HIPAA, SOC 2).',
          'Implement governance policies and controls.',
          'Conduct security audits and assessments.',
          'Establish incident response and disaster recovery plans.',
        ],
      },
    ],
  },
  {
    id: 'ai-ml-fundamentals',
    title: 'AI and Machine Learning Fundamentals',
    content: [
      {
        heading: 'Introduction to Artificial Intelligence',
        description: 'This course provides a foundation in AI concepts, exploring the history, current applications, and future potential of artificial intelligence technologies.',
        points: [
          'Define AI and distinguish between AI, ML, and deep learning.',
          'Explore real-world AI applications across industries.',
          'Understand the AI development lifecycle.',
          'Identify ethical considerations in AI development.',
        ],
      },
      {
        heading: 'Machine Learning Essentials',
        description: 'Participants will learn core machine learning concepts, algorithms, and techniques for building intelligent systems.',
        points: [
          'Understand supervised, unsupervised, and reinforcement learning.',
          'Implement common ML algorithms for classification and regression.',
          'Prepare and preprocess data for machine learning models.',
          'Evaluate model performance and optimize results.',
        ],
      },
    ],
  },
  {
    id: 'ai-cloud-integration',
    title: 'AI and Cloud Integration',
    content: [
      {
        heading: 'Cloud-Based AI Services',
        description: 'This course explores AI services offered by major cloud providers, enabling participants to leverage pre-built AI capabilities for rapid application development.',
        points: [
          'Utilize AWS AI services (Rekognition, Comprehend, SageMaker).',
          'Implement Azure Cognitive Services and Azure ML.',
          'Leverage Google Cloud AI Platform and AutoML.',
          'Compare and select appropriate AI services for use cases.',
        ],
      },
      {
        heading: 'Building AI Solutions in the Cloud',
        description: 'Participants will learn to design, develop, and deploy end-to-end AI solutions using cloud infrastructure and services.',
        points: [
          'Design scalable AI architectures in the cloud.',
          'Deploy machine learning models to production environments.',
          'Implement MLOps practices for model management.',
          'Integrate AI solutions with existing enterprise systems.',
        ],
      },
    ],
  },
  {
    id: 'advanced-topics',
    title: 'Advanced Topics and Emerging Technologies',
    content: [
      {
        heading: 'Serverless and Edge Computing',
        description: 'This course covers advanced cloud paradigms including serverless architectures and edge computing for distributed AI applications.',
        points: [
          'Design and implement serverless applications.',
          'Deploy AI models to edge devices.',
          'Optimize latency and performance for edge computing.',
          'Implement hybrid cloud-edge solutions.',
        ],
      },
      {
        heading: 'IoT and Cloud Integration',
        description: 'Participants will learn to connect IoT devices to cloud platforms and implement intelligent IoT solutions powered by AI.',
        points: [
          'Configure IoT device connectivity to cloud platforms.',
          'Process and analyze IoT data streams in real-time.',
          'Implement predictive maintenance using IoT and AI.',
          'Design secure and scalable IoT architectures.',
        ],
      },
      {
        heading: 'Future Trends and Innovation',
        description: 'This course explores emerging trends in cloud and AI technologies, preparing participants for the future of intelligent cloud computing.',
        points: [
          'Explore quantum computing and its cloud applications.',
          'Understand generative AI and large language models.',
          'Evaluate emerging cloud-native technologies.',
          'Develop strategies for continuous learning and adaptation.',
        ],
      },
    ],
  },
];

export function CloudComputingDevelopmentJourney() {
  const [activeId, setActiveId] = useState('cloud-fundamentals');

  const activeItem = journeyItems.find((item) => item.id === activeId);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Development Journey</h2>
          <p className="text-gray-800 font-medium mb-4">Cloud Computing and AI Integration Training Program Catalog</p>
          <p className="text-gray-700 leading-relaxed">
            The program provides practical knowledge on integrating cloud infrastructure with AI technologies. Participants will learn cloud architecture, machine learning applications, and secure data management. The program focuses on real-world scenarios, equipping professionals with the skills to build scalable, intelligent systems. Graduates will be prepared to implement AI-driven solutions in cloud environments across industries.
          </p>
        </div>

        {/* Content Area with Separate Containers */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Menu Container */}
          <div className="w-full lg:w-1/4 bg-white border border-gray-300 rounded-lg p-6">
            <ul className="space-y-4">
              {journeyItems.map(({ id, title }) => (
                <li key={id} className="flex items-start gap-3">
                  <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${
                    activeId === id ? 'bg-[#6b19ff]' : 'bg-gray-400'
                  }`}></span>
                  <button
                    className={`text-left text-base ${
                      activeId === id 
                        ? 'text-[#6b19ff] font-semibold' 
                        : 'text-gray-700 hover:text-[#6b19ff]'
                    }`}
                    onClick={() => setActiveId(id)}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Content Container */}
          <div className="w-full lg:w-3/4 bg-white border border-gray-300 rounded-lg p-6 flex flex-col">
            {/* Scrollable Content */}
            <div className="flex-grow max-h-[500px] overflow-y-auto pr-4">
              {activeItem?.content.map((section, idx) => (
                <div key={idx} className="mb-8 last:mb-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{section.heading}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">{section.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {section.points.map((point, pointIdx) => (
                      <div key={pointIdx} className="flex items-start gap-3">
                        <svg 
                          className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#6b19ff]" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudComputingDevelopmentJourney;