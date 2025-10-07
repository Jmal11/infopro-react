import React from 'react';

const benefits = [
  {
    title: 'Decreased Time-to-Proficiency',
    description: 'Accelerate new hires\' productivity with our onboarding solutions, decreasing time-to-proficiency by 70%.',
  },
  {
    title: 'Improved Employee Experience',
    description: 'Set the tone of entire employee experience with our onboarding solutions that focus on engaging, practical training and personal learning paths.',
  },
  {
    title: 'Talent Retention',
    description: 'Enable employees to perform better and feel more confident and satisfied with their job roles with performance enhancement.',
  },
  {
    title: 'Enhanced Company Culture',
    description: 'Expertly designed onboarding solutions to enhance culture by delivering learning journeys that articulate job roles and values.',
  },
];

export function OnboardingBenefits() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-10 text-center">Benefits of Our Employee Onboarding Solutions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map(({ title, description }) => (
          <div key={title} className="border-l-4 border-transparent pl-4">
            <h3 className="text-lg font-semibold mb-2 relative inline-block">
              {title}
              <span className="block w-12 h-1 bg-purple-600 mt-1"></span>
            </h3>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
