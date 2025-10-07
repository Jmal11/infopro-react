import React from 'react';

const stats = [
  { value: '47%', description: 'of companies struggle with onboarding due to infrastructure access challenges' },
  { value: '41%', description: 'of employers see the absence of a structured onboarding process as harmful' },
  { value: '35%', description: 'of employees find excellent training and development appealing in an organization' },
  { value: '50%', description: 'increase in productivity with effective onboarding process' },
  { value: '83%', description: 'of employees believe an onboarding program would be useful' },
];

export function OnboardingStatsBar() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center text-center text-gray-700">
          {stats.map(({ value, description }, index) => (
            <div key={index} className="flex-1 min-w-[150px] px-4 border-r last:border-r-0">
              <div className="text-purple-600 font-bold text-3xl mb-2">{value}</div>
              <div className="text-sm">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
