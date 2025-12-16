import React, { useState } from 'react';

const journeyItems = [
  {
    id: 'foundations',
    title: 'Foundations of AI for Business',
    content: [
      {
        heading: 'AI/ML Fundamentals for CxOs',
        description: 'This foundational course provides a solid understanding of AI and ML concepts, applications, and limitations. By the end of this course, you\'ll be able to confidently discuss AI technologies, identify potential use cases in your industry, and understand the key considerations for AI adoption in your organization.',
        points: [
          'Develop a comprehensive understanding of AI and ML concepts',
          'Identify potential applications of AI within your organization',
          'Recognize the limitations and challenges of AI implementation',
          'Build the knowledge base needed to make informed decisions about AI adoption',
        ],
      },
      {
        heading: 'Building Leadership Strategies for AI',
        description: 'Learn how leaders can effectively integrate AI into their organization\'s operations and create a strategic vision for AI adoption. Upon completion, you\'ll be equipped to develop an AI integration roadmap, lead AI initiatives, and foster a culture of innovation that embraces AI technologies.',
        points: [
          'Develop strategies for successful AI integration into business operations',
          'Create a compelling vision for AI adoption within your organization',
          'Identify key leadership skills required for driving AI initiatives',
          'Learn to overcome common obstacles in AI implementation',
        ],
      },
    ],
  },
  {
    id: 'technical-essentials',
    title: 'Technical Essentials',
    content: [
      {
        heading: 'Data Infrastructure for AI',
        description: 'Understand the technical foundations required to support AI initiatives in your organization. Learn about data architecture, storage solutions, and the infrastructure needed to enable successful AI implementations.',
        points: [
          'Understand data requirements for AI and ML systems',
          'Learn about cloud and on-premise infrastructure options',
          'Evaluate technical readiness for AI adoption',
          'Build a foundation for scalable AI solutions',
        ],
      },
      {
        heading: 'AI Tools and Platforms',
        description: 'Explore the landscape of AI tools, platforms, and vendors available to enterprises. Gain insights into selecting the right solutions for your organization\'s specific needs and goals.',
        points: [
          'Navigate the AI vendor landscape effectively',
          'Evaluate AI platforms and tools for business use',
          'Understand integration considerations for AI solutions',
          'Make informed technology investment decisions',
        ],
      },
    ],
  },
  {
    id: 'ai-strategy',
    title: 'AI Strategy and Implementation',
    content: [
      {
        heading: 'Developing an AI Roadmap',
        description: 'Learn to create a comprehensive AI strategy that aligns with your organization\'s business objectives. This course covers prioritization frameworks, resource allocation, and timeline planning for AI initiatives.',
        points: [
          'Create a strategic AI roadmap for your organization',
          'Prioritize AI initiatives based on business impact',
          'Allocate resources effectively for AI projects',
          'Develop realistic timelines and milestones',
        ],
      },
      {
        heading: 'Change Management for AI',
        description: 'Master the art of leading organizational change during AI transformation. Learn strategies for stakeholder engagement, communication, and building buy-in across all levels of the organization.',
        points: [
          'Lead organizational change during AI adoption',
          'Engage stakeholders effectively throughout the process',
          'Build a culture that embraces AI innovation',
          'Address resistance and concerns proactively',
        ],
      },
    ],
  },
  {
    id: 'ai-applications',
    title: 'AI Applications in Business',
    content: [
      {
        heading: 'AI for Customer Experience',
        description: 'Discover how AI can transform customer interactions and enhance the overall customer experience. Learn about chatbots, personalization engines, and predictive customer service solutions.',
        points: [
          'Implement AI-powered customer service solutions',
          'Leverage AI for personalized customer experiences',
          'Use predictive analytics to anticipate customer needs',
          'Measure and optimize AI impact on customer satisfaction',
        ],
      },
      {
        heading: 'AI for Operations and Efficiency',
        description: 'Explore how AI can streamline operations, reduce costs, and improve efficiency across your organization. Learn about process automation, predictive maintenance, and supply chain optimization.',
        points: [
          'Identify opportunities for AI-driven process automation',
          'Implement predictive maintenance solutions',
          'Optimize supply chain operations with AI',
          'Measure ROI of operational AI initiatives',
        ],
      },
    ],
  },
  {
    id: 'ethical-organizational',
    title: 'Ethical and Organizational Considerations',
    content: [
      {
        heading: 'AI Ethics and Responsible AI',
        description: 'Understand the ethical implications of AI deployment and learn frameworks for responsible AI development. This course covers bias mitigation, transparency, and accountability in AI systems.',
        points: [
          'Understand ethical considerations in AI development',
          'Implement bias detection and mitigation strategies',
          'Ensure transparency and explainability in AI systems',
          'Develop governance frameworks for responsible AI',
        ],
      },
      {
        heading: 'Building AI-Ready Teams',
        description: 'Learn how to develop and structure teams for successful AI implementation. Understand the skills needed, hiring strategies, and approaches to upskilling existing workforce.',
        points: [
          'Identify skills required for AI initiatives',
          'Develop strategies for AI talent acquisition',
          'Create upskilling programs for existing employees',
          'Structure teams for effective AI delivery',
        ],
      },
    ],
  },
  {
    id: 'capstone',
    title: 'Capstone',
    content: [
      {
        heading: 'AI Strategy Capstone Project',
        description: 'Apply all learnings to develop a comprehensive AI strategy for your organization. Work on a real-world project that addresses your specific business challenges and opportunities.',
        points: [
          'Synthesize learnings into a cohesive AI strategy',
          'Develop a business case for AI investment',
          'Present your strategy to stakeholders and peers',
          'Receive feedback from AI experts and mentors',
        ],
      },
      {
        heading: 'Leading AI Transformation',
        description: 'Culminate your learning journey by developing a complete transformation plan. Learn to lead ongoing AI initiatives and sustain momentum for continuous innovation.',
        points: [
          'Create a long-term AI transformation roadmap',
          'Build mechanisms for continuous AI innovation',
          'Establish metrics for measuring AI success',
          'Lead with confidence in the age of AI',
        ],
      },
    ],
  },
];

export function AIMLDevelopmentJourney() {
  const [activeId, setActiveId] = useState('foundations');

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

export default AIMLDevelopmentJourney;