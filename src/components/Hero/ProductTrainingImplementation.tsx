import React from 'react';
import { ClipboardDocumentListIcon, Cog6ToothIcon, PresentationChartBarIcon, ChatBubbleLeftRightIcon, ChartBarIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Assess Needs',
    desc: 'Identify organizational goals and pain points.',
    icon: <ClipboardDocumentListIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: 'Develop Plan',
    desc: 'Create a customized training plan for different user roles.',
    icon: <Cog6ToothIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: 'Deliver Training',
    desc: 'Use a mix of live sessions, hands-on labs, and online modules.',
    icon: <PresentationChartBarIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: 'Provide Support',
    desc: 'Offer ongoing help through Q&A and support channels.',
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: 'Track Progress',
    desc: 'Monitor training effectiveness and adoption rates.',
    icon: <ChartBarIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: 'Gather Feedback',
    desc: 'Collect user feedback to improve and refine the training program.',
    icon: <PencilSquareIcon className="w-8 h-8 text-purple-600" />,
  },
];

export function ProductTrainingImplementation() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Large-scale Enterprise Implementation</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-purple-200 z-0" style={{transform: 'translateY(-50%)'}} />
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center w-full md:w-auto">
              {/* Hexagon icon */}
              <div className="bg-white border-2 border-purple-100 shadow-md rounded-lg p-4 flex items-center justify-center mb-3" style={{clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'}}>
                {step.icon}
              </div>
              <span className="block font-bold text-gray-900 text-center mb-1">{step.title}</span>
              <span className="block text-gray-600 text-center text-sm max-w-xs">{step.desc}</span>
              {/* Dot below icon */}
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mb-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductTrainingImplementation; 