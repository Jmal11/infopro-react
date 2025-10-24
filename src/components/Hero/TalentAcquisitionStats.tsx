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
    <section className="w-full bg-white pt-8 pb-2">
      <div className="max-w-[1400px] mx-auto flex border-gray-300">
        {stats.map(({ value, label }, idx) => (
          <div
            key={idx}
            className={`
              flex-1 text-left pl-12 py-6
              ${idx === 0 ? 'border-l border-gray-300' : ''}
              ${idx !== stats.length - 1 ? 'border-r border-gray-300' : ''}
            `}
            style={{
              minWidth: 0,
              paddingRight: idx !== stats.length - 1 ? '1.5rem' : 0,
            }}
          >
            <div className="text-4xl font-semibold text-purple-600 mb-2">{value}</div>
            <div className="text-base text-gray-800">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
