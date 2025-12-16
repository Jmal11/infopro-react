import React, { useState } from 'react';

const journeyItems = [
  {
    id: 'foundation',
    title: 'Foundation of Digital Workplace',
    content: [
      {
        heading: 'Foundation of Digital Workplace',
        description: 'This course provides an overview of the digital workplace concept, its importance in modern organizations, and the key components that make up a digital work environment.',
        points: [
          'Define the concept of a digital workplace and its significance.',
          'Identify the key components and technologies in a digital workplace.',
          'Understand the benefits and challenges of digital transformation in the workplace.',
          'Recognize the impact of digital workplaces on productivity, collaboration, and work-life balance.',
        ],
      },
      {
        heading: 'Digital Workplace Tools and Platforms',
        description: 'This course introduces participants to various tools and platforms commonly used in modern digital workplaces, providing a broad understanding of the digital ecosystem.',
        points: [
          'Identify different categories of digital workplace tools (communication, collaboration, productivity, etc.).',
          'Understand the basic functions of popular digital workplace platforms.',
          'Recognize how different tools integrate to create a cohesive digital workspace.',
          'Evaluate the appropriateness of different tools for various work scenarios.',
        ],
      },
      {
        heading: 'Adapting to the Digital Work Environment',
        description: 'This course focuses on strategies for successfully transitioning to and thriving in a digital workplace, addressing common challenges and best practices.',
        points: [
          'Develop strategies for adapting to new digital tools and processes.',
          'Overcome common challenges in digital workplace transitions.',
          'Build digital literacy skills for everyday work tasks.',
          'Create a personal action plan for digital workplace success.',
        ],
      },
    ],
  },
  {
    id: 'microsoft-365',
    title: 'Microsoft 365 Suite',
    content: [
      {
        heading: 'Introduction to Microsoft 365',
        description: 'This course provides a comprehensive overview of the Microsoft 365 suite, helping participants understand its core applications and how they work together to enhance productivity.',
        points: [
          'Navigate the Microsoft 365 environment and key applications.',
          'Understand the benefits of cloud-based productivity tools.',
          'Configure personal settings and preferences across M365 apps.',
          'Access and manage files across devices using OneDrive.',
        ],
      },
      {
        heading: 'Word, Excel, and PowerPoint Essentials',
        description: 'Master the core Microsoft Office applications that form the foundation of workplace productivity, from document creation to data analysis and presentations.',
        points: [
          'Create professional documents using Microsoft Word.',
          'Build and analyze data using Excel spreadsheets and formulas.',
          'Design compelling presentations with PowerPoint.',
          'Collaborate on documents in real-time with colleagues.',
        ],
      },
    ],
  },
  {
    id: 'communication-collaboration',
    title: 'Digital Communication and Collaboration',
    content: [
      {
        heading: 'Microsoft Teams for Communication',
        description: 'Learn to leverage Microsoft Teams as your central hub for workplace communication, enabling seamless interaction with colleagues regardless of location.',
        points: [
          'Set up and customize Microsoft Teams channels and workspaces.',
          'Conduct effective video meetings and conference calls.',
          'Use chat features for quick and efficient communication.',
          'Integrate apps and tools within Teams for enhanced productivity.',
        ],
      },
      {
        heading: 'Effective Virtual Collaboration',
        description: 'Develop skills for productive collaboration in virtual and hybrid work environments, ensuring teams work together effectively across distances.',
        points: [
          'Apply best practices for virtual meeting facilitation.',
          'Collaborate on documents and projects in real-time.',
          'Manage virtual team dynamics and communication.',
          'Use collaboration tools to track project progress and deadlines.',
        ],
      },
    ],
  },
  {
    id: 'document-management',
    title: 'Document Management and Intranet',
    content: [
      {
        heading: 'SharePoint Fundamentals',
        description: 'Learn to use SharePoint as a powerful platform for document management, team sites, and organizational intranets.',
        points: [
          'Navigate and customize SharePoint sites and libraries.',
          'Organize and manage documents effectively in SharePoint.',
          'Set up document versioning and approval workflows.',
          'Configure permissions and access controls for security.',
        ],
      },
      {
        heading: 'Building Effective Intranets',
        description: 'Understand how to create and maintain organizational intranets that serve as central hubs for information, resources, and company communications.',
        points: [
          'Design user-friendly intranet pages and navigation.',
          'Publish and manage organizational news and announcements.',
          'Create resource libraries for company policies and procedures.',
          'Measure intranet engagement and effectiveness.',
        ],
      },
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI and Automation in the Workplace',
    content: [
      {
        heading: 'Introduction to Workplace AI Tools',
        description: 'Explore how artificial intelligence is transforming the modern workplace and learn to leverage AI tools for enhanced productivity and decision-making.',
        points: [
          'Understand the role of AI in modern workplace applications.',
          'Use AI-powered features in Microsoft 365 (Copilot, etc.).',
          'Apply AI tools for writing, summarization, and analysis.',
          'Identify opportunities for AI integration in daily workflows.',
        ],
      },
      {
        heading: 'Workflow Automation with Power Automate',
        description: 'Learn to automate repetitive tasks and create efficient workflows using Power Automate, saving time and reducing manual errors.',
        points: [
          'Create automated workflows for common business processes.',
          'Connect different applications and services through automation.',
          'Design approval workflows and notification systems.',
          'Monitor and optimize automated processes for efficiency.',
        ],
      },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics and Visualization',
    content: [
      {
        heading: 'Data Analysis with Excel',
        description: 'Develop advanced Excel skills for data analysis, enabling you to extract insights from data and make informed business decisions.',
        points: [
          'Use advanced formulas and functions for data analysis.',
          'Create PivotTables to summarize and analyze large datasets.',
          'Apply data validation and conditional formatting techniques.',
          'Import and transform data from various sources.',
        ],
      },
      {
        heading: 'Data Visualization with Power BI',
        description: 'Learn to create compelling data visualizations and interactive dashboards using Power BI, transforming raw data into actionable insights.',
        points: [
          'Build interactive dashboards and reports in Power BI.',
          'Connect to multiple data sources and transform data.',
          'Design effective visualizations for different data types.',
          'Share and collaborate on reports across the organization.',
        ],
      },
    ],
  },
  {
    id: 'productivity-time',
    title: 'Digital Productivity and Time Management',
    content: [
      {
        heading: 'Personal Productivity Tools',
        description: 'Master digital tools and techniques for managing your time, tasks, and priorities effectively in a digital work environment.',
        points: [
          'Use Outlook for effective email and calendar management.',
          'Organize tasks and projects using Microsoft To Do and Planner.',
          'Apply digital note-taking strategies with OneNote.',
          'Set up personal productivity systems and routines.',
        ],
      },
      {
        heading: 'Managing Digital Overload',
        description: 'Learn strategies for managing information overload, maintaining focus, and achieving work-life balance in an always-connected digital workplace.',
        points: [
          'Implement strategies to reduce digital distractions.',
          'Manage notification settings for focused work time.',
          'Create boundaries between work and personal digital life.',
          'Use analytics tools to understand and improve work patterns.',
        ],
      },
    ],
  },
  {
    id: 'security-practices',
    title: 'Digital Security and Best Practices',
    content: [
      {
        heading: 'Cybersecurity Fundamentals',
        description: 'Understand essential cybersecurity concepts and practices to protect yourself and your organization from digital threats.',
        points: [
          'Recognize common cybersecurity threats and attack vectors.',
          'Implement strong password practices and multi-factor authentication.',
          'Identify phishing attempts and social engineering tactics.',
          'Understand data privacy regulations and compliance requirements.',
        ],
      },
      {
        heading: 'Secure Digital Work Practices',
        description: 'Apply security best practices in your daily digital work to maintain data integrity and protect sensitive information.',
        points: [
          'Handle sensitive data and documents securely.',
          'Use secure file sharing and collaboration practices.',
          'Maintain security when working remotely or on public networks.',
          'Report security incidents and respond appropriately to threats.',
        ],
      },
    ],
  },
];

export function DigitalWorkplaceDevelopmentJourney() {
  const [activeId, setActiveId] = useState('foundation');

  const activeItem = journeyItems.find((item) => item.id === activeId);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Development Journey</h2>
          <p className="text-gray-800 font-medium mb-4">Mastering the Digital Workplace: Comprehensive Training Program</p>
          <p className="text-gray-700 leading-relaxed">
            The training program equips professionals with essential skills to navigate today's technology-driven work environments. Participants will learn to effectively use digital collaboration tools, manage remote teams, enhance productivity through automation, and ensure cybersecurity best practices. This program fosters adaptability, communication, and innovation, preparing individuals to thrive in a rapidly evolving digital workspace.
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

export default DigitalWorkplaceDevelopmentJourney;