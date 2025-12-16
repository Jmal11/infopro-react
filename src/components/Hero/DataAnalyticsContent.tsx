import React from 'react';

const leftColumnOutcomes = [
  {
    title: 'Develop a data-driven mindset:',
    desc: 'Understand the importance of data-driven decision making and how to leverage data analytics for strategic advantage.',
  },
  {
    title: 'Establish data governance and ethics:',
    desc: 'Implement effective data governance frameworks and ensure ethical data practices.',
  },
  {
    title: 'Optimize business operations:',
    desc: 'Use data analytics to optimize supply chain, marketing, HR, finance, and other critical business functions.',
  },
];

const rightColumnOutcomes = [
  {
    title: 'Drive data-driven innovation:',
    desc: 'Create a data-driven culture, identify opportunities for innovation, and leverage data analytics for business transformation.',
  },
  {
    title: 'Master data analytics techniques:',
    desc: 'Gain proficiency in data analysis, visualization, and modelling techniques.',
  },
  {
    title: 'Enhance customer experience:',
    desc: 'Leverage data analytics to personalize customer experiences, improve satisfaction, and drive loyalty.',
  },
];

export function DataAnalyticsContent() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Driving Business<br />Success Through Data-Driven Leadership
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="text-gray-700 mb-8">
            This comprehensive program equips leaders with the knowledge, skills, and strategic mindset to harness the power of data analytics for transformative business outcomes. From understanding the fundamentals of data analytics to leveraging advanced techniques like AI and IoT, participants will emerge as confident leaders capable of driving data-driven decision making, innovation, and competitive advantage.
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

export default DataAnalyticsContent;