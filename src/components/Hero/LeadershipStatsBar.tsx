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
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map(({ value, description }, index) => (
            <div key={index} className="border-l border-gray-300 pl-6">
              <div className="text-purple-600 font-normal text-4xl md:text-5xl mb-3">
                {value}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}