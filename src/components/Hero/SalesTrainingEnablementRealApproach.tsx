import React from 'react';

const steps = [
  {
    key: 'R',
    title: 'esearch',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="15" cy="15" r="7" stroke="#7C3AED" strokeWidth="2" fill="none"/>
        <line x1="20" y1="20" x2="28" y2="28" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="15" cy="15" r="2.5" fill="#7C3AED" opacity="0.4"/>
      </svg>
    ),
    bullets: [
      'Prepare for a sales call.',
      'Understand the customer segment/industry.',
      'Implement best practices for preparation.'
    ]
  },
  {
    key: 'E',
    title: 'ngage',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M8 18C8 12 12 8 18 8C24 8 28 12 28 18" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13 22C13 19 15 17 18 17C21 17 23 19 23 22" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="26" r="2" fill="#7C3AED"/>
      </svg>
    ),
    bullets: [
      'Listen empathetically.',
      'Use good questioning techniques.',
      'Apply best practices for engagement.'
    ]
  },
  {
    key: 'A',
    title: 'dvocate',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M12 24V16C12 12 14 10 18 10C22 10 24 12 24 16V18" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 20L12 16L16 20" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="20" y="20" width="8" height="6" rx="1" stroke="#7C3AED" strokeWidth="2"/>
        <line x1="22" y1="23" x2="26" y2="23" stroke="#7C3AED" strokeWidth="1.5"/>
      </svg>
    ),
    bullets: [
      'Take a customer-centric approach.',
      'Align value to business and behavioral outcomes.',
      'Be the partner the customer needs.'
    ]
  },
  {
    key: 'L',
    title: 'ead to Solution',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="10" r="4" stroke="#7C3AED" strokeWidth="2"/>
        <path d="M12 28V24C12 21 14.5 18 18 18C21.5 18 24 21 24 24V28" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 24H28M28 24L25 21M28 24L25 27" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: [
      'Teach the customer as their valued partner.',
      'Tailor your conversation to their needs.',
      'Take control of the sales motion.'
    ]
  }
];

export function SalesTrainingEnablementRealApproach() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">REAL Sales Approach</h2>
          <p className="text-base text-[#555555] max-w-4xl mx-auto leading-relaxed">
            Leveraging an extensive array of sales theories, our REAL (Research, Engage, Advocate and Lead to Solution)
            Sales approach equips sales professionals and leaders to reliably hit and exceed their sales quotas by improving
            their forecasting accuracy and driving higher average order value.
          </p>
        </div>

        {/* White Container with Hexagons overlapping */}
        <div className="relative">
          {/* Purple Connecting Line - runs through hexagons */}
          <div className="hidden md:block absolute top-[35px] left-[6%] right-[6%] h-[3px] bg-[#7C3AED] z-10"></div>

          {/* Hexagon Icons Row - positioned above white container */}
          <div className="hidden md:flex justify-around absolute top-0 left-0 right-0 z-20 px-[2%]">
            {steps.map((step, index) => (
              <div key={`hex-${index}`} className="flex justify-center" style={{ width: '25%' }}>
                <div 
                  className="w-[70px] h-[70px] bg-white flex items-center justify-center shadow-sm"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  <div 
                    className="w-[62px] h-[62px] bg-[#f8f4ff] flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* White Container */}
          <div className="bg-white rounded-lg shadow-sm mt-[35px] pt-[50px] pb-8">
            {/* Four Columns with Dividers */}
            <div className="grid grid-cols-1 md:grid-cols-4">
              {steps.map((step, index) => (
                <div 
                  key={step.key} 
                  className={`flex flex-col items-center md:items-start px-6 py-4 ${
                    index !== steps.length - 1 ? 'md:border-r md:border-gray-200' : ''
                  }`}
                >
                  {/* Mobile Hexagon Icon */}
                  <div className="md:hidden mb-6 flex justify-center w-full">
                    <div 
                      className="w-[70px] h-[70px] bg-white flex items-center justify-center shadow-sm border border-gray-100"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <div 
                        className="w-[62px] h-[62px] bg-[#f8f4ff] flex items-center justify-center"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4 text-center md:text-left">
                    <span className="text-xl font-bold">{step.key}</span>
                    <span className="font-normal">{step.title}</span>
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#555555] text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#7C3AED] rounded-[1px] mt-1.5 flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesTrainingEnablementRealApproach;