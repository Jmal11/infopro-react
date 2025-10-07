import React from 'react';

const stats = [
  {
    number: '85%',
    title: 'of organizations see a significant improvement in workforce performance with a tailored learning strategy',
  },
  {
    number: '78%',
    title: 'of companies report higher employee engagement and retention through strategic learning initiatives',
  },
  {
    number: '72%',
    title: 'of businesses achieve better alignment of learning goals with business objectives using a strategic approach',
  },
  {
    number: '80%',
    title: 'of organizations experience increased ROI on training investments with a well-defined learning strategy',
  },
  {
    number: '74%',
    title: 'of L&D leaders believe that a customized learning strategy enhances overall training effectiveness and business outcomes',
  },
];

export function LearningStrategyStats() {
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
