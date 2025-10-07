import React from 'react';

const focusAreas = [
  'Skills-Based Talent Acquisition',
  'AI-Powered Screening',
  'Agile Delivery Process',
  'Performance Monitoring',
];

export function TalentAcquisitionFocusAreas() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start">
        <h2 className="text-2xl font-bold mr-8 mb-6 md:mb-0 whitespace-nowrap">Focus Areas</h2>
        <div className="flex flex-wrap space-x-6 text-sm font-semibold">
          {focusAreas.map((area, index) => (
            <React.Fragment key={area}>
              <div className="whitespace-nowrap">{area}</div>
              {index < focusAreas.length - 1 && (
                <div className="border-l border-gray-600 mx-3 h-5 self-center" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
