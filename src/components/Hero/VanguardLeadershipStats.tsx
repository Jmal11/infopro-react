import React from 'react';

const stats = [
  { value: '70%', description: 'of companies report leadership gaps at all levels' },
  { value: '68%', description: 'of employees believe their leaders are unprepared for AI disruptions' },
  { value: '20%', description: 'increase in employee retention for companies prioritizing emotional and social intelligence' },
  { value: '30%', description: 'improvement in team collaboration and efficiency with high-impact communication skills' },
  { value: '25%', description: 'boost in productivity from enhanced remote leadership capabilities' },
];

export function VanguardLeadershipStats() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-between items-center text-center text-gray-800">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex-1 min-w-[150px] px-4 ${
              index !== stats.length - 1 ? 'border-r border-gray-300' : ''
            }`}
          >
            <p className="text-3xl font-extrabold text-purple-600">{stat.value}</p>
            <p className="mt-2 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
