import React from 'react';

const steps = [
  {
    key: 'R',
    title: 'esearch',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images/Research.svg',
    bullets: [
      'Prepare for a sales call.',
      'Understand the customer segment/industry.',
      'Implement best practices for preparation.'
    ]
  },
  {
    key: 'E',
    title: 'ngage',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images/Engage.svg',
    bullets: [
      'Listen empathetically.',
      'Use good questioning techniques.',
      'Apply best practices for engagement.'
    ]
  },
  {
    key: 'A',
    title: 'dvocate',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images/Advocate.svg',
    bullets: [
      'Take a customer-centric approach.',
      'Align value to business and behavioral outcomes.',
      'Be the partner the customer needs.'
    ]
  },
  {
    key: 'L',
    title: 'ead to Solution',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images/Lead_to_solution.svg',
    bullets: [
      'Teach the customer as their valued partner.',
      'Tailor your conversation to their needs.',
      'Take control of the sales motion.'
    ]
  }
];

export function SalesTrainingEnablementRealApproach() {
  return (
    <section className="relative">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-[340px] bg-[#f5f5f5]"></div>
        <div className="flex-1 bg-white"></div>
      </div>

      {/* Content */}
      <div className="relative py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">REAL Sales Approach</h2>
            <p className="text-base text-[#555555] max-w-4xl mx-auto leading-relaxed">
              Leveraging an extensive array of sales theories, our REAL (Research, Engage, Advocate and Lead to Solution)
              Sales approach equips sales professionals and leaders to reliably hit and exceed their sales quotas by improving
              their forecasting accuracy and driving higher average order value.
            </p>
          </div>

          {/* White Container */}
          <div className="relative bg-white  shadow-[0_2px_15px_rgba(0,0,0,0.08)] pt-16 pb-8">
            
            {/* Purple Connecting Line - extended more to edges */}
            <div className="hidden md:block absolute top-[0px] left-[12%] right-[12%] h-[5px] bg-[#d7c1ff] z-10"></div>

            {/* Icons Row - extended more to edges */}
            <div className="hidden md:flex justify-between absolute top-[-34px] left-0 right-0 z-20 px-[3%]">
              {steps.map((step, index) => (
                <div key={`icon-${index}`} className="flex justify-center" style={{ width: '25%' }}>
                  <img src={step.icon} alt={`${step.key}${step.title}`} />
                </div>
              ))}
            </div>

            {/* Four Columns with Dividers */}
            <div className="grid grid-cols-1 md:grid-cols-4">
              {steps.map((step, index) => (
                <div 
                  key={step.key} 
                  className={`flex flex-col px-6 py-4 ${
                    index !== steps.length - 1 ? 'md:border-r md:border-gray-200' : ''
                  }`}
                >
                  {/* Mobile Icon */}
                  <div className="md:hidden mb-6 flex justify-center w-full">
                    <img src={step.icon} alt={`${step.key}${step.title}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4 text-center md:text-left">
                    <span className="text-2xl font-bold text-[#6b19ff]">{step.key}</span>
                    <span className="font-normal">{step.title}</span>
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#555555] text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#9ca3af] rounded-full mt-1.5 flex-shrink-0"></span>
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