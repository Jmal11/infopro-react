import React from 'react';

const benefits = [
  {
    title: "Performance-Ready Workforce:",
    description: "Develop a team equipped to meet current and future business challenges."
  },
  {
    title: "Tailored Learning Solutions:",
    description: "Receive a personalized strategy aligned with your unique organizational needs and goals."
  },
  {
    title: "Rapid Strategy Development:",
    description: "Obtain a comprehensive learning strategy within weeks, allowing for quick implementation."
  },
  {
    title: "Role-Specific Learning Journeys:",
    description: "Create targeted development paths that enhance individual and team performance."
  },
  {
    title: "Measurable Success Metrics:",
    description: "Define clear indicators for success, focusing on behavior change and business results."
  },
  {
    title: "Future-Proofed Learning:",
    description: "Gain strategic insights and curriculum paths that support long-term organizational growth."
  }
];

export function IntelligentLearningAdvantage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="md:col-span-1">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
            Transforming Your <br />
            Workforce with <br />
            Strategic Learning <br />
            Solutions
          </h2>
        </div>
        {/* Right columns */}
        <div className="md:col-span-2 flex flex-col">
          <p className="mb-2 text-gray-800 text-base">
            At Infopro Learning, our mission is to help you build a performance-ready workforce, ensuring you maximize your investment in them. Our learning strategy practice assesses your current state, envisions your ideal state, and benchmarks best-in-class solutions tailored to your unique needs.
          </p>
          <p className="mb-6 text-gray-800 text-base">
            Through discussions with your team and a comprehensive review of your existing training, we deliver a personalized learning strategy within a few weeks. This strategy includes role-specific learning journeys, high-level curriculum paths, and strategic insights for future growth. We start with the end in mind, creating a success plan that defines metrics for success, particularly in behavior change and business results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {benefits.map(({ title, description }, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                {/* Icon */}
                <img 
                  src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                  alt="Check icon"
                  className="h-6 w-6 mt-1 flex-shrink-0"
                />
                {/* Text */}
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-700 text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
