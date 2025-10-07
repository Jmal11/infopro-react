import React from 'react';

const stats = [
  {
    number: '30+',
    title: 'Years of Innovation',
  },
  {
    number: '350+',
    title: 'Awards',
  },
  {
    number: 'Millions+',
    title: (
      <>
        People Transformed.<br />
        Unlocking Potential,<br />
        Driving Performance
      </>
    ),
  },
  {
    number: '1500+',
    title: 'Programs Accelerating Skills Development',
  },
  {
    number: '100+',
    title: 'Fortune 1000 Clients',
  },
];

export function StatsBar() {
  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {stats.map(({ number, title }, index) => (
          <div
            key={index}
            className={`flex flex-col px-4 ${
              index !== stats.length - 1 ? 'border-r border-gray-700' : ''
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
