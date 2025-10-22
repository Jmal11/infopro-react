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
    <section className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <div className="flex flex-col lg:flex-row gap-8 text-left">
          {approachItems.map((item, index) => (
            <div
              key={index}
              className={`flex-1 bg-transparent ${index !== approachItems.length - 1 ? 'border-r border-gray-300' : ''} pr-8`}
            >
              {/* Using div for title to eliminate inherited h3::after */}
              <div>
                <span className="font-semibold text-gray-900 text-xl">{item.title}</span>
                <div
                  className="border-b-2 border-[#9147ff] w-16 mb-4"
                  style={{ borderBottomWidth: '3px' }}
                ></div>
              </div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
