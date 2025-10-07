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
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 text-center border-t border-gray-300 pt-6">
        {stats.map((stat) => (
          <div key={stat.value} className="border-r last:border-r-0 pr-4">
            <p className="text-4xl font-bold text-purple-600">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
