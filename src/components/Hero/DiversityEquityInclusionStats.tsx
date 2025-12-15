import React from 'react';

const stats = [
  { value: '87%', desc: 'of employees feel more engaged in inclusive workplaces.' },
  { value: '43%', desc: 'higher revenue in diverse companies.' },
  { value: '70%', desc: 'of job seekers consider diversity important.' },
  { value: '25%', desc: 'improvement in team performance with inclusive leadership.' },
  { value: '35%', desc: 'higher likelihood of outperforming competitors.' },
];

export function DiversityEquityInclusionStats() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-stretch justify-between divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center justify-center py-6 md:py-0 md:px-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
            <div className="text-gray-700 text-base">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DiversityEquityInclusionStats;
