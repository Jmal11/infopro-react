import React from 'react';

const stats = [
  {
    number: '82%',
    title: 'of organizations report improved learning efficiency after implementing an LMS',
  },
  {
    number: '70%',
    title: 'of companies experience increased employee engagement with effective LMS administration',
  },
  {
    number: '65%',
    title: 'of businesses achieve cost savings by outsourcing LMS administration',
  },
  {
    number: '68%',
    title: 'of organizations see better compliance management with dedicated LMS support',
  },
  {
    number: '75%',
    title: 'of L&D leaders believe that LMS administration improves overall training effectiveness',
  },
];

export function LmsAdministrationStatsBar() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-stretch border-gray-200">
        {stats.map(({ number, title }, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col justify-center
              px-10 py-4
              md:py-0
              items-start
              flex-1
              ${idx === 0 ? 'border-l border-gray-200' : ''}
              ${idx !== stats.length - 1 ? 'border-r border-gray-200' : ''}
            `}
            style={{ minWidth: 0 }}
          >
            <span className="text-5xl font-semibold" style={{ color: '#7c38ee' }}>{number}</span>
            <span className="text-base text-gray-700 mt-2">{title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}