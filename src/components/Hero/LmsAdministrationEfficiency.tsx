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
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-2 text-center">Maximize Efficiency with Infopro Learning</h2>
      <p className="text-center mb-8 text-sm text-gray-700">
        Partner with us for comprehensive LMS management that drives operational excellence and empowers your team to focus on what matters most.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {efficiencyItems.map(({ title, description }, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300 ${
              index === 4 ? 'md:col-span-2' : ''
            }`}
          >
            <h3 className="font-semibold mb-2">{title}</h3>
            <div className="w-12 h-1 bg-purple-700 mb-4"></div>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
