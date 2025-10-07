import React from 'react';

const leftItems = [
  { label: 'Strategy', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
  ) },
  { label: 'Content Design', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
    </svg>
  ) },
  { label: 'Training Delivery', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.422c0 3.866-3.582 7-8 7s-8-3.134-8-7a12.083 12.083 0 01.84-4.422L12 14z" />
    </svg>
  ) },
  { label: 'Learning Administration', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.422c0 3.866-3.582 7-8 7s-8-3.134-8-7a12.083 12.083 0 01.84-4.422L12 14z" />
    </svg>
  ) },
  { label: 'Vendor Management', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-6 6h12a2 2 0 002-2v-5a2 2 0 00-2-2h-3l-3-3-3 3H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
    </svg>
  ) },
  { label: 'Reporting', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-6 6h12a2 2 0 002-2v-5a2 2 0 00-2-2h-3l-3-3-3 3H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
    </svg>
  ) },
];

const rightItems = [
  {
    title: 'Strategic Cost Management',
    description: 'Optimize spend, and gain transparent ROI metrics for strategic financial control.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v3h6v-3c0-1.657-1.343-3-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v4m0 0h3m-3 0H9" />
      </svg>
    ),
  },
  {
    title: 'Agile & Integrated Operating Model',
    description: 'Drive measurable business value through collaborative partnership.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    ),
  },
  {
    title: 'Performance-Driven Outcomes',
    description: 'Boost workforce productivity with measurable impact on performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-6 6h12a2 2 0 002-2v-5a2 2 0 00-2-2h-3l-3-3-3 3H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Scalable Global Operations',
    description: 'Ensure consistent service quality across all regions for global excellence.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-6 6h12a2 2 0 002-2v-5a2 2 0 00-2-2h-3l-3-3-3 3H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Seamless Transition & Governance',
    description: 'Mitigate risks and maintain robust operational oversight through seamless integration.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-6 6h12a2 2 0 002-2v-5a2 2 0 00-2-2h-3l-3-3-3 3H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function ManagedLearningServices() {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 bg-purple-50 rounded-md">
      {/* Left Side */}
      <div className="md:w-1/2 bg-purple-100 p-6 rounded-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Managed Learning Services
          <sup className="text-sm font-normal">AI+</sup>
        </h2>
        <p className="text-gray-700">
          Leveraging AI to Optimize and Elevate Managed Learning Services Benefits
        </p>
        <div className="grid grid-cols-3 gap-4">
          {leftItems.map(({ label, icon }) => (
            <div
              key={label}
              className="bg-white rounded-md p-4 flex flex-col items-center justify-center space-y-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              {icon}
              <span className="text-sm font-medium text-gray-900">{label}<sup className="text-xs font-normal">AI+</sup></span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 space-y-6">
        {rightItems.map(({ title, description, icon }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="flex-shrink-0">{icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
