import React from 'react';

export function PerformanceManagementApproach() {
  const tools = [
    {
      title: "OKR Platforms",
      description: "Track and manage objectives and key results with real-time visibility, ensuring alignment with strategic goals and highlighting areas for improvement."
    },
    {
      title: "360-Degree Feedback",
      description: "Comprehensive feedback from peers, subordinates, and managers provides balanced and constructive insights from multiple perspectives."
    },
    {
      title: "Scalable Solutions",
      description: "Easily scale your learning programs to meet the growing needs of your organization."
    },
    {
      title: "Behavioral Event Interviews (BEI)",
      description: "Assess competencies and identify critical success factors and development areas through in-depth interviews."
    },
    {
      title: "Competency Matrices",
      description: "Detailed mapping of skills and competencies required for each role. Competency matrices help identify skill gaps and inform targeted development plans."
    },
    {
      title: "Skill Indexes",
      description: "Track and measure individual and team skills through skills indexes, providing insights into current skill levels and guiding development efforts."
    },
    {
      title: "KPIs",
      description: "Set measurable targets for individuals and teams to track progress and align with strategic goals, providing clear benchmarks for success."
    },
    {
      title: "Balanced Scorecard",
      description: "A strategic tool providing a comprehensive view of performance across financial, customer, internal processes, and learning & growth perspectives, ensuring alignment with business strategy."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Comprehensive Tools for Enhanced Performance Management
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Our PMS incorporates a variety of tools and techniques, each designed to maximize efficiency and effectiveness:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="border-l border-gray-300 pl-6 pr-4"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">{tool.title}</h3>
              <div className="w-8 h-1 bg-[#6b19ff] mb-4"></div>
              <p className="text-gray-700 text-sm leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}