import React from 'react';

const leftColumnOutcomes = [
  {
    title: 'Leverage AI/ML for Business Transformation:',
    desc: 'Explore how AI/ML can transform business operations, enhance customer experiences, and drive revenue growth.',
  },
  {
    title: 'Lead and Implement AI/ML Initiatives:',
    desc: 'Develop leadership strategies to integrate AI/ML into operations and drive innovation.',
  },
  {
    title: 'Develop a Comprehensive Understanding of AI/ML',
    desc: 'Grasp the fundamental concepts, applications, and limitations of AI/ML.',
  },
];

const rightColumnOutcomes = [
  {
    title: 'Build a Strategic AI/ML Roadmap:',
    desc: 'Align AI/ML initiatives with organizational goals, identify key use cases, and address potential challenges.',
  },
  {
    title: 'Build a Data-driven Culture:',
    desc: 'Foster a culture of innovation and experimentation to support AI/ML adoption.',
  },
  {
    title: 'Navigate Ethical Considerations and Governance Frameworks:',
    desc: 'Understand the ethical implications of AI/ML and establish responsible governance structures.',
  },
];

export function AIMLContentSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Lead innovation with AI/ML for business transformation
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="text-gray-700 mb-8">
            This comprehensive program equips leaders with the knowledge, skills, and strategic mindset to harness the power of AI/ML for transformative business outcomes. From understanding the fundamentals to navigating ethical considerations and building a robust AI/ML strategy, participants will emerge as confident leaders capable of driving innovation, enhancing decision-making, and gaining a competitive edge in the AI-driven era.
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

export default AIMLContentSection;