import React, { useState } from 'react';

const steps = [
  {
    id: 'assess',
    title: 'ASSESS',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8v-4m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    id: 'align',
    title: 'ALIGN',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    id: 'plan',
    title: 'PLAN',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h7" />
      </svg>
    ),
  },
  {
    id: 'activate',
    title: 'ACTIVATE',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
];

const content = {
  assess: {
    description: `A comprehensive evaluation of your current L&D landscape, identifying strengths, gaps, and opportunities. Through data-driven analysis and industry benchmarking, we establish your baseline maturity, technology needs, and organizational readiness, creating a clear foundation for transformation planning.`,
    keyActivities: [
      'Conduct L&D maturity assessment',
      'Analyze technology landscape',
      'Review learning metrics and impact',
      'Benchmark against industry leaders',
      'Identify skill gaps and needs',
      'Assess organizational readiness',
    ],
    keyOutcomes: [
      'Current state baseline established',
      'Gap analysis completed',
      'Improvement opportunities identified',
      'Technology needs mapped',
      'Benchmark insights gathered',
      'Readiness assessment completed',
    ],
  },
  align: {
    description: `Align your L&D strategy with organizational goals and stakeholder expectations. Develop a shared vision and roadmap to ensure cohesive efforts across teams and departments.`,
    keyActivities: [
      'Engage stakeholders for input and buy-in',
      'Define strategic learning objectives',
      'Map learning initiatives to business goals',
      'Establish governance and accountability',
      'Develop communication plans',
      'Coordinate cross-functional collaboration',
    ],
    keyOutcomes: [
      'Clear alignment with organizational priorities',
      'Stakeholder engagement and support',
      'Defined learning strategy roadmap',
      'Improved collaboration across teams',
      'Effective communication channels established',
      'Governance structures in place',
    ],
  },
  plan: {
    description: `Create detailed plans for learning programs, resources, and technology investments. Prioritize initiatives based on impact, feasibility, and resource availability.`,
    keyActivities: [
      'Develop program timelines and milestones',
      'Allocate budgets and resources',
      'Select appropriate learning technologies',
      'Design content and delivery methods',
      'Identify metrics for success',
      'Plan for risk management and contingencies',
    ],
    keyOutcomes: [
      'Comprehensive learning program plans',
      'Optimized resource allocation',
      'Technology selection aligned with needs',
      'Effective content and delivery strategies',
      'Clear success metrics defined',
      'Risk mitigation plans established',
    ],
  },
  activate: {
    description: `Implement learning initiatives and monitor progress. Adjust strategies based on feedback and performance data to ensure continuous improvement.`,
    keyActivities: [
      'Launch learning programs',
      'Monitor learner engagement and outcomes',
      'Collect and analyze feedback',
      'Adjust initiatives as needed',
      'Report progress to stakeholders',
      'Foster a culture of continuous learning',
    ],
    keyOutcomes: [
      'Successful program launches',
      'Improved learner engagement',
      'Data-driven decision making',
      'Responsive strategy adjustments',
      'Transparent reporting',
      'Sustained learning culture',
    ],
  },
};

export function TransformLDVision() {
  const [activeStep, setActiveStep] = useState<'assess' | 'align' | 'plan' | 'activate'>('assess');

  return (
    <section className="container mx-auto px-4 py-16 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-2 text-center">Transform Your L&amp;D Vision into Reality</h2>
      <p className="text-center mb-8 text-gray-700">Organizations that delay risk falling behind in the race for talent and innovation</p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side tabs as accordion */}
        <div className="md:w-1/4 border-r border-gray-300">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 text-left focus:outline-none ${
                activeStep === step.id ? 'bg-purple-700 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-expanded={activeStep === step.id}
              aria-controls={`${step.id}-content`}
              id={`${step.id}-tab`}
              type="button"
            >
              <span className="w-6 h-6">{step.icon}</span>
              <span className="uppercase font-semibold">{step.title}</span>
              {activeStep === step.id && (
                <span className="ml-auto w-4 h-4 rounded-full border-2 border-white bg-purple-700"></span>
              )}
            </button>
          ))}
        </div>

        {/* Right side content */}
        <div className="md:w-3/4 p-6" role="tabpanel" id={`${activeStep}-content`} aria-labelledby={`${activeStep}-tab`}>
          <p className="mb-4">{content[activeStep].description}</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h5 className="font-semibold mb-2">Key Activities</h5>
              <ul className="list-disc list-inside space-y-2">
                {content[activeStep].keyActivities.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Key Outcomes</h5>
              <ul className="list-disc list-inside space-y-2">
                {content[activeStep].keyOutcomes.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
