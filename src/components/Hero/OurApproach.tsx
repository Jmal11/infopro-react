import React from 'react';

const steps = [
  {
    title: 'Initial Assessment and Consultation',
    description:
      "Our team engages with key stakeholders to understand your organization's current learning environment, performance objectives, and business priorities. This ensures we align our analysis with your specific needs and goals.",
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/inisial-icon.svg',
  },
  {
    title: 'Data Collection and Analysis',
    description:
      "We meticulously analyze performance metrics and conduct surveys to identify skill gaps and training needs. This data-driven approach ensures precise identification of areas requiring development.",
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/data-icon.svg',
  },
  {
    title: 'Training Needs Identification',
    description:
      "We pinpoint specific areas where training is necessary, providing clarity on the exact skills and competencies needed to enhance performance and achieve organizational objectives.",
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/training-icon.svg',
  },
  {
    title: 'Training Roadmap Creation',
    description:
      "Based on our analysis, we develop a tailored training plan that addresses the identified needs. This plan will be strategically designed to align with your organizational goals and deliver effective solutions.",
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/training-roadmap-icon.svg',
  },
];

export function OurApproach() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">Our Approach</h2>
        <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto text-base font-medium">
          Our expert team will collaborate with you to analyze your organization&apos;s current training needs, analyze skill gaps, and provide a strategic roadmap. We ensure your training investments are effectively aligned with your organizational goals and future objectives. After we develop the roadmap, we can also help you implement it.
        </p>
        <div className="relative mt-10 max-w-6xl mx-auto">
          {/* Purple line */}
          <div className="absolute left-0 right-0 top-[32px] h-2 bg-transparent z-0 flex">
            <div className="w-1/24" />
            <div className="flex-1 h-full bg-purple-200" />
            <div className="w-1/24" />
          </div>
          {/* Main cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 rounded-none z-10 bg-white relative">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`
                  relative flex flex-col items-start px-8 pt-12 pb-8 bg-white
                  border-gray-200 border-t-[3px]
                  ${i !== 0 ? 'border-l' : ''}
                `}
                style={{
                  minHeight: 360,
                  borderRight: i === steps.length - 1 ? 'none' : '1px solid #e5e7eb',
                  borderTopColor: '#d7c1ff'
                }}
              >
                {/* Hex icon overlapping card and line */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="clip-hexagon bg-white border-2 border-purple-200 flex items-center justify-center w-16 h-16">
                    <img src={step.icon} alt="" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-700 text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hexagon clip-path styling */}
      <style>{`
        .clip-hexagon {
          clip-path: polygon(
            25% 6%, 75% 6%,
            100% 50%, 75% 94%,
            25% 94%, 0% 50%
          );
        }
      `}</style>
    </section>
  );
}