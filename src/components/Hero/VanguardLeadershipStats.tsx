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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border-l-2 border-gray-300 pl-6 pr-4"
          >
            <p className="text-4xl font-bold text-[#6b19ff] mb-2">{stat.value}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}