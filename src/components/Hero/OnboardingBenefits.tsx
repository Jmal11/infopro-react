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
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">
        Benefits of Our Employee Onboarding Solutions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {benefits.map(({ title, description }) => (
          <div key={title} className="border-l border-gray-300 pl-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
              {title}
            </h3>
            <div className="w-16 h-1 bg-purple-600 mb-4"></div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}