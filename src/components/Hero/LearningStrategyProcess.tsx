import React, { useState } from 'react';

const tabs = [
  {
    id: 'assess',
    label: 'Assess the Current State',
    contents: [
      {
        number: '01',
        title: 'Strategic Insights',
        description: 'We analyze your current state, uncovering key insights to shape your future learning strategy.',
      },
      {
        number: '02',
        title: 'High-Level Curriculum Design',
        description: 'Our Learning Experience Architects design a high-level curriculum, recommending topics, modalities, and timing.',
      },
      {
        number: '03',
        title: 'Role-Based Learning Paths',
        description: 'We create visual learning paths for each role, including recommendations for badges and certifications.',
      },
      {
        number: '04',
        title: 'Design and Development Recommendations',
        description: 'We provide specific design and development recommendations to guide your next steps.',
      },
    ],
    images: [
      '/images/assess1.jpg',
      '/images/assess2.jpg',
      '/images/assess3.jpg',
    ],
  },
  {
    id: 'align',
    label: 'Align Our Findings',
    contents: [
      {
        number: '01',
        title: 'The Success Plan',
        description: 'We establish success metrics from the outset, focusing on business results and behavior change.',
      },
      {
        number: '02',
        title: 'Learner Personas',
        description: 'We develop learner personas to identify key similarities and differences among targeted roles.',
      },
      {
        number: '03',
        title: 'Asset Control and Maintenance',
        description: 'We evaluate your current content lifecycle and maintenance plans, suggesting enhancements for better communication and asset management.',
      },
      {
        number: '04',
        title: 'Demand Planning & Intake Process',
        description: 'We assess your existing processes affected by organizational changes and propose methods to streamline them, ensuring a more efficient and measurable approach.',
      },
    ],
    images: [
      '/images/align1.jpg',
      '/images/align2.jpg',
      '/images/align3.jpg',
    ],
  },
  {
    id: 'plan',
    label: 'Plan for the Future',
    contents: [
      {
        number: '01',
        title: 'Strategic Insights',
        description: 'We present an overview of findings and future insights to guide your strategy.',
      },
      {
        number: '02',
        title: 'High-level Curriculum Design',
        description: 'Our architects refine the curriculum design based on strategic insights.',
      },
      {
        number: '03',
        title: 'Role-based Learning Paths',
        description: 'We finalize learning paths, ensuring alignment with business goals.',
      },
      {
        number: '04',
        title: 'Design and Development Recommendations',
        description: 'We provide comprehensive recommendations for design and development, supporting a flexible "start anywhere and go everywhere" approach.',
      },
    ],
    images: [
      '/images/plan1.jpg',
      '/images/plan2.jpg',
      '/images/plan3.jpg',
    ],
  },
];

export function LearningStrategyProcess() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find(tab => tab.id === activeTab)!;

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-2 text-center">Our Learning Strategy Process</h2>
      <p className="text-center mb-8">
        We streamline your learning initiatives through a structured, three-step process to maximize your workforce&apos;s potential.
      </p>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 border-b border-gray-300 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-2 font-semibold ${
              activeTab === tab.id ? 'text-purple-600 border-b-4 border-purple-600' : 'text-gray-700'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-purple-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 p-6 rounded">
          {currentTab.contents.map(({ number, title, description }) => (
            <div key={number} className="border-r last:border-r-0 pr-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-purple-600 border border-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  {number}
                </div>
                <h3 className="font-bold">{title}</h3>
              </div>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="flex flex-col space-y-4">
          {currentTab.images.map((src, idx) => (
            <img key={idx} src={src} alt={`${currentTab.label} image ${idx + 1}`} className="rounded shadow-md" />
          ))}
        </div>
      </div>
    </section>
  );
}
