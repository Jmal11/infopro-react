import React from 'react';

const leftColumnOutcomes = [
  {
    title: 'Strategic Alignment:',
    desc: 'Align values, culture, and strategy.',
  },
  {
    title: 'Judgment Improvement:',
    desc: 'Strengthen decision-making processes.',
  },
  {
    title: 'Scenario Planning:',
    desc: 'Prepare for sub-optimal outcomes.',
  },
];

const rightColumnOutcomes = [
  {
    title: 'Contingency Thinking:',
    desc: 'Prepare for diverse outcomes.',
  },
  {
    title: 'Objective Planning:',
    desc: 'Base decisions on thorough discovery.',
  },
  {
    title: 'Customer-Centric Decisions:',
    desc: 'Factor in employee and customer perspectives.',
  },
];

export function BusinessLeadershipContent() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Master Business<br />Leadership
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="text-gray-700 mb-4">
            Today's business landscape is a complex maze full of uncertainty and disruption. Leaders have a tough job: Making critical business decisions and leading different teams across multiple functions while maintaining a long-term strategic vision – this can be overwhelming, often leading to burnout and missed opportunities.
          </p>
          <p className="text-gray-700 mb-4">
            Our business leadership development training programs are designed to address these challenges head-on. By focusing on strategic thinking, emotional intelligence, and adaptive leadership, these programs empower leaders to lead in a complex ever-evolving world.
          </p>
          <p className="text-gray-700 mb-8">
            The result? Leaders who are not only prepared to meet today's demands but are also poised to drive future success, ensuring their organizations remain competitive and resilient.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-6">Development Outcomes:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left Column */}
            <div className="space-y-6">
              {leftColumnOutcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                    alt="check" 
                    className="w-5 h-5 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    <span className="block text-gray-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              {rightColumnOutcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                    alt="check" 
                    className="w-5 h-5 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    <span className="block text-gray-600">{item.desc}</span>
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

export default BusinessLeadershipContent;