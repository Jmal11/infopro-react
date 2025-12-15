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
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="border-l-4 border-gray-200 pl-6 py-2"
          >
            <div className="text-4xl font-bold mb-2" style={{ color: '#6b19ff' }}>
              {stat.value}
            </div>
            <div className="text-gray-700 text-sm leading-relaxed">
              {stat.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SalesTrainingEnablementStats;