import React from 'react';

const steps = [
  {
    key: 'R',
    title: 'Research',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#a78bfa" strokeWidth="2" fill="#fff" /><path d="M28 28l-4.2-4.2" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" /><circle cx="19" cy="19" r="6" stroke="#a78bfa" strokeWidth="2" /><circle cx="19" cy="19" r="2" fill="#a78bfa" /></svg>
    ),
    bullets: [
      'Prepare for a sales call.',
      'Understand the customer segment/industry.',
      'Implement best practices for preparation.'
    ]
  },
  {
    key: 'E',
    title: 'Engage',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#a78bfa" strokeWidth="2" fill="#fff" /><path d="M20 12v8l6 3" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" /><circle cx="20" cy="20" r="6" stroke="#a78bfa" strokeWidth="2" /></svg>
    ),
    bullets: [
      'Listen empathetically.',
      'Use good questioning techniques.',
      'Apply best practices for engagement.'
    ]
  },
  {
    key: 'A',
    title: 'Advocate',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#a78bfa" strokeWidth="2" fill="#fff" /><path d="M16 24l8-8" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" /><circle cx="20" cy="20" r="6" stroke="#a78bfa" strokeWidth="2" /></svg>
    ),
    bullets: [
      'Take a customer-centric approach.',
      'Align value to business and behavioral outcomes.',
      'Be the partner the customer needs.'
    ]
  },
  {
    key: 'L',
    title: 'Lead to Solution',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#a78bfa" strokeWidth="2" fill="#fff" /><path d="M20 12v16" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" /><path d="M16 28h8" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
    bullets: [
      'Teach the customer as their valued partner.',
      'Tailor your conversation to their needs.',
      'Take control of the sales motion.'
    ]
  }
];

export function SalesTrainingEnablementRealApproach() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">REAL Sales Approach</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Leveraging an extensive array of sales theories, our REAL (Research, Engage, Advocate and Lead to Solution)
          Sales approach equips sales professionals and leaders to reliably hit and exceed their sales quotas by improving
          their forecasting accuracy and driving higher average order value.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-0 relative">
        {/* Connecting line for icons */}
        <div className="hidden md:block absolute left-0 right-0 top-8 h-0.5 bg-purple-200 z-0" style={{marginLeft: '7.5%', marginRight: '7.5%'}} />
        {steps.map((step) => (
          <div key={step.key} className="flex-1 flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-10 relative z-10 md:border-l-0 first:md:border-l last:md:border-r">
            <div className="mb-4 relative z-10 bg-white rounded-full p-2 border-2 border-purple-200" style={{marginTop: '-48px'}}>
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-2"><span className="text-purple-600 text-2xl font-extrabold mr-1">{step.key}</span>{step.title}</h3>
            <ul className="text-left text-gray-700 space-y-2">
              {step.bullets.map((b, i) => (
                <li key={i} className="list-disc ml-5">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SalesTrainingEnablementRealApproach; 