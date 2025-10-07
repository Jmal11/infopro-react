import React from 'react';

const stats = [
  { value: '80%', label: 'of US businesses rely on staff augmentation' },
  { value: '60%', label: 'savings on labor expenditure compared to maintaining an in-house team' },
  { value: '36%', label: 'gig workforce surge increases augmentation' },
  { value: '20-30%', label: 'saving on labor costs via staff augmentation' },
  { value: '52%', label: 'leverage staff augmentation for flexibility' },
];

export function TalentAcquisitionStats() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-between items-center border-t border-b border-gray-300">
        {stats.map(({ value, label }, index) => (
          <div
            key={index}
            className={`flex-1 text-center py-6 ${index !== stats.length - 1 ? 'border-r border-gray-300' : ''}`}
          >
            <div className="text-3xl font-bold text-purple-700 mb-2">{value}</div>
            <div className="text-sm text-gray-700">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
