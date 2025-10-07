import React from 'react';

export function PeopleLeadershipContent() {
  const learningOutcomes = [
    {
      title: 'Proactive Ownership',
      description: 'Foster proactive responsibility.'
    },
    {
      title: 'Delegation Mastery',
      description: 'Match tasks to skills.'
    },
    {
      title: 'Effective Feedback',
      description: 'Address core performance directly.'
    },
    {
      title: 'Engagement Culture',
      description: 'Build accountability and alignment.'
    },
    {
      title: 'Conflict Resolution',
      description: 'Handle issues productively.'
    },
    {
      title: 'Coaching Excellence',
      description: 'Develop team capabilities.'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Building Leaders<br />
              Who Build Others
            </h2>
          </div>

          {/* Right: Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Effective team-based leadership is the cornerstone of organizational success. Infopro Learning's people-leadership training programs equip leaders with the essential skills to inspire, engage, and drive their teams toward exceptional performance. By focusing on core team-building competencies, these programs address the critical need for dynamic leaders who can adapt to evolving challenges and foster a team-based culture.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The result? A performance-ready workforce that thrives on collaboration, strategic thinking, and resilience. Empower your leaders to meet and exceed expectations, creating a powerful impact that resonates throughout your organization.
            </p>
          </div>
        </div>

        {/* Learning Outcomes Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Learning Outcomes:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg 
                    className="w-5 h-5 text-purple-600" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{outcome.title}</h4>
                  <p className="text-gray-600 text-sm">{outcome.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeopleLeadershipContent; 