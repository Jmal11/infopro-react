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
    <section className="bg-white py-8">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-stretch border-gray-200">
        {stats.map(({ number, title }, index) => (
          <div
            key={index}
            className={`
              flex flex-col flex-1 items-start px-6 py-2
              ${index === 0 ? 'border-l border-gray-200' : ''}
              ${index !== stats.length - 1 ? 'border-r border-gray-200' : ''}
              `}
          >
            <span className="text-4xl text-purple-700 font-semibold mb-2">{number}</span>
            <span className="text-base text-gray-700">{title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}