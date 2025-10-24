import React from 'react';

const stats = [
  { value: '85%', label: 'of businesses report a skills gap in their workforce.' },
  { value: '68%', label: 'of employees prefer learning on the job.' },
  { value: '24%', label: 'increase in profit margins on ROI.' },
  { value: '93%', label: 'of employees want simple, accessible training.' },
  { value: '89%', label: 'of employees seek flexible training options.' },
];

export function TrainingNeedsAnalysisStatsBar() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:justify-center border-gray-300">
        {stats.map((stat, idx) => (
          <div
            key={stat.value}
            className={`
              flex-1 py-8 px-2
              text-center
              ${idx !== stats.length - 1 ? 'sm:border-r sm:border-gray-300' : ''}
            `}
          >
            <p className="text-5xl font-semibold text-purple-600 mb-2">{stat.value}</p>
            <p className="text-base text-gray-700 max-w-xs mx-auto leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
