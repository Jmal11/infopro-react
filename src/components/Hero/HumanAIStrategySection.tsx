import React, { useState } from 'react';

const steps = [
  {
    key: 'assess',
    title: 'ASSESS',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14v2m0 0h.01M12 16a2 2 0 100-4 2 2 0 000 4z"
        />
      </svg>
    ),
    description:
      'The Assess stage involves conducting a comprehensive evaluation of the organization\'s current state and AI readiness by analyzing both business/functional capabilities and identifying skill requirements. This stage combines systematic assessment of existing processes, competencies, and resources with data-driven gap analysis to establish a clear baseline and identify transformation requirements.',
    keyActivities: [
      'Stakeholder interviews',
      'Value system mapping',
      'Capability assessment',
      'Resource inventory',
    ],
    keyOutcomes: [
      'Current state insights',
      'Opportunity identification',
      'Resource requirements',
      'Risk assessment',
    ],
  },
  {
    key: 'align',
    title: 'ALIGN',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
    description:
      'The Align stage focuses on aligning AI strategy with business goals, ensuring stakeholder buy-in, and establishing governance frameworks to support AI initiatives.',
    keyActivities: [
      'Stakeholder alignment meetings',
      'Governance framework development',
      'Communication planning',
    ],
    keyOutcomes: [
      'Aligned AI and business objectives',
      'Clear governance structures',
      'Effective communication channels',
    ],
  },
  {
    key: 'plan',
    title: 'PLAN',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-6h6v6m-6 0v4h6v-4m-6 0H5v-4h14v4h-4"
        />
      </svg>
    ),
    description:
      'The Plan stage involves detailed planning of AI projects, resource allocation, and timeline development to ensure successful implementation.',
    keyActivities: [
      'Project roadmap creation',
      'Resource allocation',
      'Timeline and milestone setting',
    ],
    keyOutcomes: [
      'Comprehensive project plans',
      'Optimized resource use',
      'Clear milestones and deadlines',
    ],
  },
  {
    key: 'activate',
    title: 'ACTIVATE',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
    description:
      'The Activate stage is about executing AI initiatives, monitoring progress, and iterating based on feedback and results.',
    keyActivities: [
      'Implementation of AI solutions',
      'Performance monitoring',
      'Continuous improvement',
    ],
    keyOutcomes: [
      'Deployed AI capabilities',
      'Measured impact and ROI',
      'Ongoing optimization',
    ],
  },
];

export function HumanAIStrategySection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">Human + AI Strategy</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Unlock the potential of Human+AI collaboration with a tailored strategy that drives innovation and efficiency. We identify competencies, address skills gaps, and outline process changes for seamless AI integration.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Timeline */}
          <div className="lg:w-1/4 relative">
            <div className="sticky top-24 space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.key}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center cursor-pointer group transition-all duration-300 ${
                    activeStep === index ? 'text-purple-700' : 'text-gray-600 hover:text-purple-500'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 transition-all duration-300 ${
                      activeStep === index
                        ? 'border-purple-600 bg-purple-100 shadow-md'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {React.cloneElement(step.icon, {
                      className: `h-5 w-5 ${activeStep === index ? 'text-purple-600' : 'text-gray-500'}`,
                    })}
                  </div>
                  <span className="ml-3 font-medium group-hover:translate-x-1 transition-transform">
                    {step.title}
                  </span>
                </div>
              ))}
              {/* Vertical Line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300">
            <p className="text-gray-700 leading-relaxed">{steps[activeStep].description}</p>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Key Activities</h4>
              <ul className="space-y-2">
                {steps[activeStep].keyActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-600 mt-0.5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcomes */}
          <div className="lg:w-1/4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300">
            <h4 className="font-semibold text-gray-800 mb-4">Key Outcomes</h4>
            <ul className="space-y-2">
              {steps[activeStep].keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-600 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}