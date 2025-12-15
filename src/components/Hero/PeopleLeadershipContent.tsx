import React from 'react';

const leftColumnOutcomes = [
  {
    title: 'Proactive Ownership:',
    desc: 'Foster proactive responsibility.',
  },
  {
    title: 'Delegation Mastery:',
    desc: 'Match tasks to skills.',
  },
  {
    title: 'Effective Feedback:',
    desc: 'Address core performance directly.',
  },
];

const rightColumnOutcomes = [
  {
    title: 'Engagement Culture:',
    desc: 'Build accountability and alignment.',
  },
  {
    title: 'Conflict Resolution:',
    desc: 'Handle issues productively.',
  },
  {
    title: 'Coaching Excellence:',
    desc: 'Develop team capabilities.',
  },
];

export function PeopleLeadershipContent() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Building Leaders<br />Who Build Others
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="text-gray-700 mb-4">
            Effective team-based leadership is the cornerstone of organizational success. Infopro Learning's people-leadership training programs equip leaders with the essential skills to inspire, engage, and drive their teams toward exceptional performance. By focusing on core team-building competencies, these programs address the critical need for dynamic leaders who can adapt to evolving challenges and foster a team-based culture.
          </p>
          <p className="text-gray-700 mb-8">
            The result? A performance-ready workforce that thrives on collaboration, strategic thinking, and resilience. Empower your leaders to meet and exceed expectations, creating a powerful impact that resonates throughout your organization.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-6">Learning Outcomes:</h3>
          
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

export default PeopleLeadershipContent;