import React, { useState } from 'react';

const tabs = [
  {
    id: 'ai-tech-integration',
    title: 'AI and Technology Integration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    id: 'skills-capability-evolution',
    title: 'Skills & Capability Evolution',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
      </svg>
    ),
  },
  {
    id: 'personalized-learning',
    title: 'Personalized Learning',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
      </svg>
    ),
  },
  {
    id: 'measurement-impact',
    title: 'Measurement & Impact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: 'strategic-business-partnership',
    title: 'Strategic Business Partnership',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 12l9-5-9-5-9 5 9 5z" />
        <path d="M12 12v9" />
        <path d="M12 21l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
  },
  {
    id: 'process-governance',
    title: 'Process and Governance',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const tabContent = {
  'ai-tech-integration': {
    heading: 'AI and Technology Integration',
    description:
      'AI and technology integration is no longer optional but fundamental to scaling learning impact. It enables personalization at scale while reducing operational overhead.',
    fromTo: {
      from: 'Overwhelming tech choices and implementation fears',
      to: 'Clear AI adoption roadmap and measurable efficiency gains',
    },
    designPrinciples:
      'Focus on identifying high-impact use cases where AI can solve specific business challenges rather than implementing technology for its own sake. Start with pilot programs that can demonstrate clear ROI before scaling.',
    keyElements: [
      'Structured approach to AI implementation',
      'Risk-managed innovation',
      'Scalable technology solutions',
    ],
  },
  // Additional tab content can be added here for other tabs if needed
};

export function AIAndTechnologyIntegration() {
  const [activeTab, setActiveTab] = useState<'ai-tech-integration' | 'skills-capability-evolution' | 'personalized-learning' | 'measurement-impact' | 'strategic-business-partnership' | 'process-governance'>('ai-tech-integration');

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left accordion */}
        <div className="md:w-1/4 bg-white rounded shadow">
          {tabs.map((tab) => (
            <div key={tab.id} className="border-b last:border-b-0">
              <button
                className={`flex items-center gap-3 w-full px-4 py-3 text-left focus:outline-none ${
                  activeTab === tab.id ? 'bg-purple-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab.id)}
                aria-expanded={activeTab === tab.id}
                aria-controls={`${tab.id}-content`}
                id={`${tab.id}-tab`}
              >
                <span className="w-6 h-6">{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Right content */}
        <div className="md:w-3/4 bg-gray-100 p-6 rounded shadow" role="tabpanel" id={`${activeTab}-content`} aria-labelledby={`${activeTab}-tab`}>
          <p className="mb-4">{tabContent[activeTab].description}</p>
          <div className="bg-black text-white p-4 rounded mb-4 flex justify-between items-center">
            <div>
              <h4 className="font-semibold">From</h4>
              <p>{tabContent[activeTab].fromTo.from}</p>
            </div>
            <div className="text-2xl">→</div>
            <div>
              <h4 className="font-semibold">To</h4>
              <p>{tabContent[activeTab].fromTo.to}</p>
            </div>
          </div>
          <h5 className="font-semibold mb-2">Design Principles</h5>
          <p className="mb-4">{tabContent[activeTab].designPrinciples}</p>
          <h5 className="font-semibold mb-2">Key Elements</h5>
          <ul className="list-disc list-inside space-y-2">
            {tabContent[activeTab].keyElements.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
