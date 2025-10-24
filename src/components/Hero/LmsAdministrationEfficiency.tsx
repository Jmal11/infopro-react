import React from 'react';

const efficiencyItems = [
  {
    title: 'Focus on Strategic Initiatives',
    description: 'Free your team to drive business growth instead of handling administrative tasks.',
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduce the costs associated with frequent LMS changes and updates.',
  },
  {
    title: 'Expert Management',
    description: 'Ensure your LMS is managed by professionals who are always up-to-date with the latest features and best practices.',
  },
  {
    title: 'Large Talent Pool',
    description: 'Access the largest pool of verified LMS administrators that you cannot find on any job board.',
  },
  {
    title: 'Streamlined Operations & 24/7 Support',
    description: 'Seamless adaptation to in-person or virtual formats, with a global perspective for universal relevance.',
  },
];

export function LmsAdministrationEfficiency() {
  return (
    <section className="w-full py-16">
      <h2 className="text-4xl font-extrabold text-center mb-3">Maximize Efficiency with Infopro Learning</h2>
      <p className="text-center mb-12 text-md text-gray-800">
        Partner with us for comprehensive LMS management that drives operational excellence<br />
        and empowers your team to focus on what matters most.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {efficiencyItems.map(({ title, description }, i) => (
          <div
            key={i}
            className="flex flex-row items-start pl-0 pr-8 pt-8 pb-10"
          >
            {/* Tall vertical bar */}
            <div
              className="w-1.5 bg-gray-300 mr-6 rounded"
              style={{ height: '12.25rem' }}
            />
            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <div className="w-14 h-1 bg-[#892fff] mb-4"></div>
              <p className="text-base text-gray-800">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
