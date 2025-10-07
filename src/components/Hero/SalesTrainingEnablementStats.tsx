import React from 'react';

const stats = [
  { value: '49%', desc: 'higher win rates with sales enablement.' },
  { value: '84%', desc: 'quota fulfillment with robust sales training.' },
  { value: '60%', desc: 'higher customer retention with sales enablement.' },
  { value: '81%', desc: 'see productivity gains with sales training.' },
  { value: '20%', desc: 'performance boost on average with sales training.' },
];

export function SalesTrainingEnablementStats() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between divide-y md:divide-y-0 md:divide-x divide-gray-200">
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

export default SalesTrainingEnablementStats; 