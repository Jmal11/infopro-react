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
    <section className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {stats.map(({ value, label }, idx) => (
            <div
              key={idx}
              className="py-6 px-6 border-l border-gray-300"
            >
              <div className="text-5xl font-normal text-[#6b19ff] mb-3">{value}</div>
              <div className="text-sm text-gray-800 leading-relaxed">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}