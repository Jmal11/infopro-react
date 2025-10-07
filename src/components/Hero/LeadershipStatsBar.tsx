import React from 'react';

const stats = [
  { value: '50%', description: 'of organizations are prioritizing leadership training programs in 2025' },
  { value: '43%', description: 'are incorporating generative AI into their leadership development programs' },
  { value: '40%', description: 'of organizations leverage leadership development to strengthen corporate culture' },
  { value: '38%', description: 'of organizations leverage leadership development to increase employee engagement and reduce unplanned turnover' },
  { value: '84%', description: 'believe adaptability and growth mindset are crucial leadership skills for the future of work' },
];

export function LeadershipStatsBar() {
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
