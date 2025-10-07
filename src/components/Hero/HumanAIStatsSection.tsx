import React from 'react';

const stats = [
  {
    value: '21%',
    description: 'net increase on GDP of U.S by 2030, contributed by AI',
  },
  {
    value: '97 Million',
    description: 'jobs will be created by AI',
  },
  {
    value: '60%',
    description: 'of business owners believe AI will improve customer relationships',
  },
  {
    value: '65%',
    description: 'of consumers say they’ll still trust businesses who use AI',
  },
  {
    value: '83%',
    description: 'of companies claims AI as a top priority in business plans',
  },
];

export function HumanAIStatsSection() {
  return (
    <section className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between text-center text-gray-900">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                flex-1
                ${index !== stats.length - 1 ? 'border-r border-gray-300' : ''}
                px-4
              `}
            >
              <div className="text-purple-600 text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
