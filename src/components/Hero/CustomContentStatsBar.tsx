import React from 'react';

const stats = [
  {
    number: '33',
    title: 'Brandon Hall Awards for excellence in custom content',
  },
  {
    number: '900+',
    title: 'custom learning programs delivered annually',
  },
  {
    number: '500+',
    title: 'expert content developers',
  },
  {
    number: '50+',
    title: 'Fortune 500 clients trust our custom content solutions',
  },
  {
    number: '2500+',
    title: 'hours of engaging interactive content produced last year',
  },
  {
    number: '140+',
    title: 'languages supported for a truly global impact',
  },
];

export function CustomContentStatsBar() {
  return (
    <section className="bg-white text-purple-700 py-8 border-t border-b border-gray-300">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {stats.map(({ number, title }, index) => (
          <div
            key={index}
            className={`flex flex-col px-4 ${
              index !== stats.length - 1 ? 'border-r border-gray-300' : ''
            } mb-4 md:mb-0 w-full md:w-auto`}
            style={{ minWidth: '150px' }}
          >
            <span className="text-3xl font-bold">{number}</span>
            <span className="text-sm mt-1">{title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
