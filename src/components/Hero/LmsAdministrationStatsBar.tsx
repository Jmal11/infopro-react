import React from 'react';

const stats = [
  {
    number: '82%',
    title: 'of organizations report improved learning efficiency after implementing a LMS',
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
