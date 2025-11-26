import React from 'react';

export function PerformanceManagementDetails() {
  const features = [
    {
      title: "Aligned Goal Setting:",
      description: "Ensure individual and team objectives directly support organizational strategies and vision."
    },
    {
      title: "Continuous Feedback Loop:",
      description: "Foster a culture of ongoing dialogue and real-time performance insights."
    },
    {
      title: "Data-Driven Decision Making:",
      description: "Leverage analytics to identify top performers, skill gaps, and areas for improvement."
    },
    {
      title: "Tailored Development Plans:",
      description: "Create personalized growth paths that align with both employee aspirations and business needs."
    },
    {
      title: "Fair and Transparent Evaluations:",
      description: "Implement objective assessment criteria to boost employee trust and engagement."
    },
    {
      title: "Agile Performance Tracking:",
      description: "Adapt performance metrics and goals to rapidly changing business environments and priorities."
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left - Heading Only */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Empowering Your Talent, Driving Your Success
            </h2>
          </div>

          {/* Right - Content */}
          <div className="lg:w-2/3">
            <p className="mb-6 text-gray-700 leading-relaxed">
              Our Performance Management System (PMS) is designed to align employee activities and performance with the organizational goals and objectives. As an award-winning talent transformation consultancy, we specialize in developing frameworks that enhance productivity, foster growth, and ensure consistent performance across all levels of the organization.
            </p>
            <p className="mb-10 text-gray-700 leading-relaxed">
              Effective performance management is more than just annual reviews; it's a continuous process that involves setting clear expectations, providing regular feedback, and fostering an environment of accountability and development. By implementing our PMS, you can ensure that every employee understands their role in the organization's success and has the support they need to excel.
            </p>

            {/* Features Grid - 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-[#6b19ff] flex-shrink-0 mt-1" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold text-gray-900">{feature.title}</span>
                    <span className="text-gray-700"> {feature.description}</span>
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