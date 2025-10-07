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
    <section className="bg-white w-full py-14 px-2">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Deliver a Performance-Ready Workforce<br />
            with Our Managed Learning Service
          </h2>
          <p className="text-gray-700 text-lg">
            Make Infopro Learning your L&D strategic business partner
          </p>
        </div>
        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left: Managed Learning Card */}
          <div className="md:w-1/2 bg-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Managed Learning Services
              <sup className="text-base font-normal ml-1">AI+</sup>
            </h3>
            <p className="text-gray-700 mb-6 text-sm">
              Leveraging AI to Optimize and Elevate Managed Learning Services Benefits
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {leftItems.map(({ label, icon }) => (
                <div
                  key={label}
                  className="bg-white rounded-md p-5 flex flex-col items-center justify-center space-y-2 shadow transition hover:shadow-lg cursor-pointer"
                >
                  {icon}
                  <span className="text-sm font-medium text-gray-900">
                    {label}<sup className="text-xs font-normal">AI+</sup>
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Features List */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div className="space-y-7">
              {rightItems.map(({ title, description, icon }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-gray-700">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-end">
              <button className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-purple-700">
                LEARN MORE
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManagedLearningServices;
