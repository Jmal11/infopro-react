import React from 'react';

const stats = [
  {
    number: '85%',
    description: 'of organizations see a significant improvement in workforce performance with a tailored learning strategy',
  },
  {
    number: '78%',
    description: 'of companies report higher employee engagement and retention through strategic learning initiatives',
  },
  {
    number: '72%',
    description: 'of businesses achieve better alignment of learning goals with business objectives using a strategic approach',
  },
  {
    number: '80%',
    description: 'of organizations experience increased ROI on training investments with a well-defined learning strategy',
  },
  {
    number: '74%',
    description: 'of L&D leaders believe that a customized learning strategy enhances overall training effectiveness and business outcomes',
  },
];

export function LDTransformationNow() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch border-gray-200">
        {stats.map(({ number, description }, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col justify-start
              px-8 py-4
              flex-1
              ${idx !== stats.length - 1 ? 'border-r border-gray-200' : ''}
            `}
            style={{ minWidth: 0 }}
          >
            <span className="text-5xl font-semibold text-[#7c38ee] mb-2">{number}</span>
            <span className="text-base text-gray-800 mt-1">{description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
