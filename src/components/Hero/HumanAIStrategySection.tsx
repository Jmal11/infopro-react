import { useState } from 'react';

const steps = [
  {
    key: 'assess',
    title: 'ASSESS',
    icon: (
  <img 
    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/tab-Assess.svg" 
    alt="Assess"
    className="h-8 w-8"
  />
),
    description:
      "The Assess stage involves conducting a comprehensive evaluation of the organization's current state and AI readiness by analyzing both business/functional capabilities and identifying skill requirements. This stage combines systematic assessment of existing processes, competencies, and resources with data-driven gap analysis to establish a clear baseline and identify transformation requirements.",
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
  <img 
    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/tab-Align.svg" 
    alt="Assess"
    className="h-8 w-8"
  />
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
  <img 
    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/tab-Plan.svg" 
    alt="Assess"
    className="h-8 w-8"
  />
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
  <img 
    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/tab-Activate.svg" 
    alt="Assess"
    className="h-8 w-8"
  />
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
  const [activeStep, setActiveStep] = useState(0); // Start with ASSESS (index 0)

  return (
    <section className="bg-gray-50 py-12 sm:py-16 border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Human + AI Strategy</h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-10 sm:mb-12 text-base sm:text-lg leading-relaxed">
          Unlock the potential of Human+AI collaboration with a tailored strategy that drives innovation and efficiency. We identify competencies, address skills gaps, and outline process changes for seamless AI integration.
        </p>

        <div className="flex flex-col lg:flex-row bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden min-h-[500px]">
          {/* Left Panel: Vertical Timeline */}
          <div className="w-full lg:w-[28%] p-8 sm:p-10 bg-white border-r border-gray-200 flex items-center">
            <div className="relative w-full py-4">
              {steps.map((step, idx) => (
                <div
                  key={step.key}
                  className="relative flex items-center gap-4 mb-12 last:mb-0 cursor-pointer group"
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 transition-colors duration-200 ${
                    activeStep === idx ? 'text-[#9147ff]' : 'text-gray-600'
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <span className={`font-semibold text-base transition-colors duration-200 flex-grow ${
                    activeStep === idx ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </span>
                  
                  {/* Radio button indicator with connecting line */}
                  <div className="flex-shrink-0 relative">
                    {/* Line above current step */}
                    {idx > 0 && (
                      <div 
                        className={`absolute left-1/2 -translate-x-1/2 bottom-1/2 w-1 h-[9.5rem] z-0 transition-colors duration-200 ${
                          activeStep === idx || activeStep === idx - 1 ? 'bg-[#9147ff]' : 'bg-gray-300'
                        }`}
                      />
                    )}
                    
                    {/* Line below current step */}
                    {idx < steps.length - 1 && (
                      <div 
                        className={`absolute left-1/2 -translate-x-1/2 top-1/2 w-1 h-[9.5rem] z-0 transition-colors duration-200 ${
                          activeStep === idx || activeStep === idx + 1 ? 'bg-[#9147ff]' : 'bg-gray-300'
                        }`}
                      />
                    )}
                    
                    <img 
                      src={activeStep === idx 
                        ? "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Radio-btn_hover.svg"
                        : "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Radio-btn_normal.svg"
                      }
                      alt=""
                      className="w-5 h-5 relative z-10"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Description + Key Activities */}
          <div className="w-full lg:w-[44%] p-8 sm:p-10 border-r border-gray-200 flex flex-col min-h-[500px]">
            <div className="flex-1 overflow-y-auto">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>
              
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Activities</h4>
              <ul className="space-y-3">
                {steps[activeStep].keyActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-[#9147ff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-base">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Key Outcomes */}
          <div className="w-full lg:w-[28%] p-8 sm:p-10 flex flex-col min-h-[500px]">
            <div className="flex-1 overflow-y-auto">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Outcomes</h4>
              <ul className="space-y-3">
                {steps[activeStep].keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-[#9147ff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-base">{outcome}</span>
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