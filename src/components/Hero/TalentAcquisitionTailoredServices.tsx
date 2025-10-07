import React from 'react';

const services = [
  {
    number: '01',
    title: 'Top Executive Placement',
    description: 'Find leaders who are aligned with your company’s values to drive sustainable business growth.',
  },
  {
    number: '02',
    title: 'Professional Talent Search',
    description: 'Strategically place emerging leaders and top talent into middle and upper management roles across a range of industries.',
  },
  {
    number: '03',
    title: 'Skilled Contractors',
    description: 'Find top-tier professionals for any role, whether short-or long-term projects, aligned with your schedule.',
  },
  {
    number: '04',
    title: 'Recruitment Process Outsourcing (RPO)',
    description: 'Streamline your hiring strategy with personalized technology and talent insights, achieving cost savings along the way.',
  },
];

export function TalentAcquisitionTailoredServices() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">
          Tailored Talent Services:<br />Perfectly Aligned with Your Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map(({ number, title, description }) => (
            <div key={number} className="border border-gray-300 p-6 rounded">
              <div className="text-purple-700 font-bold text-xl mb-2">{number}</div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
