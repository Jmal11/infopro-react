import React from 'react';

const focusAreas = [
  { line1: 'Skills-Based', line2: 'Talent Acquisition' },
  { line1: 'AI-Powered', line2: 'Screening' },
  { line1: 'Agile Delivery', line2: 'Process' },
  { line1: 'Performance', line2: 'Monitoring' },
];

export function TalentAcquisitionFocusAreas() {
  return (
    <section className="w-full py-10" style={{ backgroundColor: '#292929' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-20">
          {/* Left: Focus Areas Heading - NO border */}
          <h2 className="text-4xl font-bold text-white whitespace-nowrap">
            Focus<br />Areas
          </h2>
          
          {/* Right: Focus Area Items with Dividers */}
          <div className="flex items-center flex-1 justify-between">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-px h-16 bg-white" />
                <div className="text-white text-base font-semibold whitespace-nowrap leading-snug">
                  {area.line1}<br />{area.line2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}