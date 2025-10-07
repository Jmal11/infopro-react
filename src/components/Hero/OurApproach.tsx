import React from 'react';

export function OurApproach() {
  const steps = [
    {
      title: 'Initial Assessment and Consultation',
      description:
        "Our team engages with key stakeholders to understand your organization's current learning environment, performance objectives, and business priorities. This ensures we align our analysis with your specific needs and goals.",
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-6-8h6M5 6h14M5 18h14" />
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Data Collection and Analysis',
      description:
        'We meticulously analyze performance metrics and conduct surveys to identify skills gaps and training needs. This data-driven approach ensures precise identification of areas requiring development.',
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17l3-5 4 4 3-8" />
        </svg>
      ),
    },
    {
      title: 'Training Needs Identification',
      description:
        'We pinpoint specific areas where training is necessary, providing clarity on the exact skills and competencies needed to enhance performance and achieve organizational objectives.',
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-6-8h6" />
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Training Roadmap Creation',
      description:
        'Based on our analysis, we develop a tailored training plan that addresses the identified needs. This plan will be strategically designed to align with your organizational goals and deliver effective solutions.',
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l4 4-4 4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Approach</h2>
      <p className="text-center max-w-3xl mx-auto mb-10">
        Our expert team will collaborate with you to analyze your organization's current training needs, analyze skills gaps, and provide a strategic roadmap. We ensure your training investments are effectively aligned with your organizational goals and future objectives. After we develop the roadmap, we can also help you implement it.
      </p>
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 bg-white p-6 border border-gray-200 rounded-md shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white p-2 rounded-md border border-gray-300">{step.icon}</div>
            </div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
