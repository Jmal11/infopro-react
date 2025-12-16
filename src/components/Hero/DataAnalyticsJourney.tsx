import React, { useState } from 'react';

const journeyItems = [
  {
    id: 'foundations',
    title: 'Foundations of Data-Driven Leadership',
    content: [
      {
        heading: 'Data-Driven Decision Making',
        description: 'This foundational course introduces business leaders to the power of data analytics in strategic decision-making. Participants will learn how to identify key insights from data and use them to drive business growth.',
        points: [
          'Understand the importance of data in modern business decision-making',
          'Develop skills to interpret and analyze data for strategic insights',
          'Learn to communicate data-driven decisions effectively',
        ],
      },
      {
        heading: 'Data Governance and Ethics',
        description: 'This course focuses on the critical aspects of managing data responsibly within an organization. Participants will learn about establishing robust data governance frameworks and ensuring ethical data practices.',
        points: [
          'Understand the principles of data governance',
          'Learn strategies for protecting sensitive data',
          'Explore ethical considerations in data collection and usage',
        ],
      },
      {
        heading: 'Data-Driven Innovation',
        description: 'This course explores how leaders can foster a data-driven culture within their organizations and use data analytics to drive business transformation and innovation.',
        points: [
          'Learn techniques for creating a data-driven culture',
          'Identify opportunities for innovation using data',
        ],
      },
    ],
  },
  {
    id: 'strategic-applications',
    title: 'Strategic Applications of Data Analytics',
    content: [
      {
        heading: 'Strategic Data Planning',
        description: 'Learn how to develop and implement data strategies that align with organizational goals and drive competitive advantage.',
        points: [
          'Align data initiatives with business objectives',
          'Develop data roadmaps for long-term success',
          'Measure and optimize data strategy effectiveness',
        ],
      },
      {
        heading: 'Competitive Intelligence',
        description: 'Discover how to leverage data analytics to gain insights into market trends, competitor activities, and customer behavior.',
        points: [
          'Use data to identify market opportunities',
          'Analyze competitor strategies using data',
          'Transform insights into actionable strategies',
        ],
      },
    ],
  },
  {
    id: 'data-monetization',
    title: 'Data Monetization and Value Creation',
    content: [
      {
        heading: 'Data as a Strategic Asset',
        description: 'Explore how organizations can treat data as a valuable asset and create new revenue streams through data monetization strategies.',
        points: [
          'Identify monetizable data assets',
          'Develop data product strategies',
          'Create value through data partnerships',
        ],
      },
      {
        heading: 'ROI of Data Initiatives',
        description: 'Learn how to measure and communicate the return on investment of data analytics projects to stakeholders.',
        points: [
          'Calculate the business value of data projects',
          'Build business cases for data investments',
          'Track and report on data initiative success',
        ],
      },
    ],
  },
  {
    id: 'functional-applications',
    title: 'Functional Applications of Data Analytics',
    content: [
      {
        heading: 'Marketing Analytics',
        description: 'Apply data analytics to optimize marketing campaigns, understand customer journeys, and improve marketing ROI.',
        points: [
          'Analyze customer behavior and preferences',
          'Optimize marketing spend with data insights',
          'Personalize customer experiences using data',
        ],
      },
      {
        heading: 'Operations Analytics',
        description: 'Use data to streamline operations, improve efficiency, and reduce costs across the organization.',
        points: [
          'Optimize supply chain with predictive analytics',
          'Improve process efficiency through data analysis',
          'Reduce operational costs using data insights',
        ],
      },
    ],
  },
  {
    id: 'emerging-technologies',
    title: 'Emerging Technologies and Data Analytics',
    content: [
      {
        heading: 'AI and Machine Learning',
        description: 'Understand how AI and machine learning are transforming data analytics and how leaders can leverage these technologies.',
        points: [
          'Understand AI/ML fundamentals for business leaders',
          'Identify AI use cases in your organization',
          'Lead AI implementation initiatives',
        ],
      },
      {
        heading: 'IoT and Big Data',
        description: 'Explore how Internet of Things devices generate valuable data and how to harness big data for business insights.',
        points: [
          'Leverage IoT data for business intelligence',
          'Manage and analyze large-scale data sets',
          'Build infrastructure for big data analytics',
        ],
      },
    ],
  },
  {
    id: 'capstone',
    title: 'Capstone: Integrated Data Analytics Strategy',
    content: [
      {
        heading: 'Developing Your Data Strategy',
        description: 'Apply all learnings to develop a comprehensive data analytics strategy tailored to your organization\'s unique needs and goals.',
        points: [
          'Synthesize learnings into actionable strategy',
          'Present data strategy to stakeholders',
          'Create implementation roadmap',
        ],
      },
      {
        heading: 'Leading Data Transformation',
        description: 'Learn how to lead organizational change and drive adoption of data-driven practices across all levels.',
        points: [
          'Build cross-functional data teams',
          'Overcome resistance to data-driven change',
          'Sustain data culture long-term',
        ],
      },
    ],
  },
];

export function DataAnalyticsJourney() {
  const [activeId, setActiveId] = useState('foundations');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    alert(`Form submitted with email: ${email}`);
  };

  const activeItem = journeyItems.find((item) => item.id === activeId);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Development Journey</h2>
          <p className="text-gray-800 font-medium mb-4">AI Mastery for Business Leaders: Comprehensive Course Catalog</p>
          <p className="text-gray-700 leading-relaxed">
            Welcome to our comprehensive AI Mastery for Business Leaders training program. This carefully curated sequence of courses is designed to equip business leaders with the knowledge, skills, and strategies needed to effectively leverage AI and machine learning in their organizations. The program is structured into six key areas, each building upon the last to provide a complete understanding of AI in business.
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

          {/* Right Side - Content & Form Container */}
          <div className="w-full lg:w-3/4 bg-white border border-gray-300 rounded-lg p-6 flex flex-col">
            {/* Scrollable Content */}
            <div className="flex-grow mb-6 max-h-[500px] overflow-y-auto pr-4">
              {activeItem?.content.map((section, idx) => (
                <div key={idx} className="mb-8 last:mb-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{section.heading}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">{section.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {section.points.map((point, pointIdx) => (
                      <div key={pointIdx} className="flex items-start gap-3">
                        <img 
                          src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                          alt="check" 
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataAnalyticsJourney;