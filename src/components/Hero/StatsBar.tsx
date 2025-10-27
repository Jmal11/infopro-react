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
    title: (
      <>
        Programs Accelerating<br />
        Skills Development
      </>
    ),
  },
  {
    number: '100+',
    title: 'Fortune 1000 Clients',
  },
];

export function StatsBar() {
  return (
    <section className="bg-[#292929] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-stretch">
          {stats.map(({ number, title }, index) => (
            <div
              key={index}
              className="flex flex-col px-6 md:px-8 py-4 border-l border-gray-600 w-full md:w-auto md:flex-1"
            >
              <span className="text-4xl font-bold mb-2 whitespace-nowrap">{number}</span>
              <span className="text-sm leading-relaxed">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}