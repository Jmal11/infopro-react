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
    <section className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-stretch justify-between">
          {stats.map(({ value, description }, index) => (
            <div key={index} className="flex flex-1">
              {/* Vertical line */}
              <div className="flex items-center pr-6">
                <div className="w-px h-32 bg-gray-300"></div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-left">
                <div className="text-purple-600 font-semibold text-5xl mb-3 leading-tight">{value}</div>
                <p className="text-gray-700 text-base leading-relaxed font-normal">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}