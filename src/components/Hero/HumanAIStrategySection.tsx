import React, { useState } from 'react';

const steps = [
  {
    key: 'assess',
    title: 'ASSESS',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    description:
      "The Assess stage involves conducting a comprehensive evaluation of your organization's current state, identifying opportunities for AI integration, and understanding the resources required to support successful implementation.",
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="6" y="6" width="12" height="2" fill="currentColor"/>
        <rect x="6" y="11" width="12" height="2" fill="currentColor"/>
        <rect x="6" y="16" width="12" height="2" fill="currentColor"/>
      </svg>
    ),
    description:
      "The Align stage focuses on aligning AI strategy with business objectives, establishing governance frameworks, and ensuring stakeholder buy-in across the organization for successful AI adoption.",
    keyActivities: [
      'Stakeholder alignment meetings',
      'Governance framework development',
      'Communication planning',
      'Change management strategy',
    ],
    keyOutcomes: [
      'Aligned AI and business objectives',
      'Clear governance structures',
      'Effective communication channels',
      'Stakeholder commitment',
    ],
  },
  {
    key: 'plan',
    title: 'PLAN',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        <circle cx="10" cy="12" r="1" fill="currentColor"/>
        <circle cx="14" cy="12" r="1" fill="currentColor"/>
        <circle cx="10" cy="16" r="1" fill="currentColor"/>
        <circle cx="14" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    description:
      "The Plan stage involves detailed planning of AI implementation roadmap, resource allocation, and establishing clear milestones and success metrics to guide the transformation journey.",
    keyActivities: [
      'Project roadmap creation',
      'Resource allocation',
      'Timeline and milestone setting',
      'Success metrics definition',
    ],
    keyOutcomes: [
      'Comprehensive project plans',
      'Optimized resource use',
      'Clear milestones and deadlines',
      'Measurable success criteria',
    ],
  },
  {
    key: 'activate',
    title: 'ACTIVATE',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        <rect x="11" y="6" width="2" height="5" fill="currentColor"/>
        <rect x="8" y="11" width="8" height="2" fill="currentColor"/>
      </svg>
    ),
    description:
      "The Activate stage implements the human-AI integration through carefully sequenced phases, prioritizing initiatives based on complexity, dependencies, and organizational readiness. This staged deployment approach allows for controlled rollout, learning from early implementations, and gradual scaling of complexity. Each phase builds upon previous successes while managing risk and ensuring sustainable adoption.",
    keyActivities: [
      'Pilot deployment',
      'Core training execution',
      'Integration implementation',
      'System optimization',
    ],
    keyOutcomes: [
      'Phase-gate milestones',
      'Workforce capability',
      'Performance targets',
      'Sustainable operation',
    ],
  },
];

export function HumanAIStrategySection() {
  const [activeStep, setActiveStep] = useState(3); // Set to ACTIVATE (index 3) to match the image

  // Colors for vertical line
  const highlightColor = "#9147ff";
  const defaultColor = "#a39b92"; // beige/brownish-grey

  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Human + AI Strategy</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Unlock the potential of Human+AI collaboration with a tailored strategy that drives innovation and efficiency. We identify competencies, address skills gaps, and outline process changes for seamless AI integration.
        </p>

        <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden border border-gray-200 shadow-sm" style={{ background: 'linear-gradient(to right, #f8f6f3 0%, #f8f6f3 25%, white 25%, white 100%)', height: '500px', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Left Panel: Menu */}
          <div className="bg-white min-w-[300px] lg:w-1/4 p-0 flex flex-col justify-between relative h-full">
            {steps.map((step, idx) => (
              <div
                key={step.key}
                className={`relative flex items-center px-8 py-8 cursor-pointer transition group`}
                onClick={() => setActiveStep(idx)}
              >
                {/* Custom vertical line (colored beside active) - moved to right */}
                <div 
                  className="absolute right-0 top-0 h-full w-1 transition-all duration-300"
                  style={{
                    backgroundColor: activeStep === idx ? highlightColor : 'transparent',
                  }} 
                />
                
                <div className={`flex items-center gap-4 transition-colors duration-300 ${
                  activeStep === idx ? "text-[#9147ff]" : "text-gray-600"
                }`}>
                  {/* Logo/Icon */}
                  <div className="flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className={`font-semibold text-base tracking-wide ${
                    activeStep === idx ? "text-[#9147ff]" : "text-gray-700"
                  }`}>
                    {step.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Middle: Description + Activities */}
          <div className="bg-white lg:w-2/4 px-8 py-8 border-r border-gray-200 flex flex-col h-full overflow-y-auto">
            <p className="text-gray-700 text-base leading-relaxed mb-8">{steps[activeStep].description}</p>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Activities</h4>
            <ul className="space-y-3">
              {steps[activeStep].keyActivities.map((activity, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-[#9147ff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 text-base">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Outcomes */}
          <div className="bg-white lg:w-1/4 px-8 py-8 flex flex-col h-full overflow-y-auto">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Outcomes</h4>
            <ul className="space-y-3">
              {steps[activeStep].keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-[#9147ff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 text-base">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}