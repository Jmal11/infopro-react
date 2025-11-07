import React from 'react';

const approachItems = [
  {
    title: 'Human+AI Strategy',
    description:
      'Develop a comprehensive Human+AI strategy, identifying the new competencies, skills gaps, process changes and integration points. Define a future state roadmap to integrate AI in workflows and drive change to achieve seamless Human+AI collaboration.',
  },
  {
    title: 'AI and Digital Skills Journey',
    description:
      'Foster digital and AI skills, including data and analytics, equipping employees with the ability to leverage these technologies effectively and make informed, data-driven decisions.',
  },
  {
    title: 'Vanguard Human Skills Journey',
    description:
      'Emphasize the development of critical human skills, such as critical thinking, creativity, and emotional intelligence, which will complement AI capabilities.',
  },
];

export function HumanAIApproachSection() {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Our approach empowers organizations to seamlessly integrate AI and human capabilities.
            By focusing on strategic transformation, skill development, and hands-on adoption, we help
            you achieve your Human+AI vision.
          </p>
        </div>

        {/* Three Column Section */}
        <div className="flex flex-col lg:flex-row gap-0 text-left">
          {approachItems.map((item, index) => (
            <div
              key={index}
              className={`flex-1 ${index === 0 ? 'border-l border-gray-300' : ''} ${index !== approachItems.length - 1 ? 'border-r border-gray-300' : ''} px-6`}
            >
              <h3 className="font-semibold text-gray-900 text-xl mb-2">{item.title}</h3>
              <div
                className="border-b-4 border-purple-600 w-16 mb-4"
              ></div>
              <p className="text-gray-700 text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}