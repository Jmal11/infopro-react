import React from 'react';

const stats = [
  {
    value: '79%',
    desc: 'of companies with product training see higher sales volumes.'
  },
  {
    value: '86%',
    desc: 'of buyers pay more for a great customer experience.'
  },
  {
    value: '33%',
    desc: 'of customers will leave a brand after one bad experience.'
  },
  {
    value: '73%',
    desc: 'of reps want sales associates to have better product knowledge.'
  },
  {
    value: '53%',
    desc: 'of customers seek expert guidance when making buying decisions.'
  },
];

export function ProductTrainingStatsBar() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-300">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center justify-center py-4 px-2 text-center">
            <span className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</span>
            <span className="text-gray-800 text-base leading-snug">{stat.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductTrainingStatsBar; 