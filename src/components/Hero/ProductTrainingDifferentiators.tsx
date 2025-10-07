import React from 'react';

const differentiators = [
  {
    number: '01',
    title: 'Consumer Profiling',
    description:
      'Understanding the persona of target consumers, their challenges, their expectations from the product, and how the product will impact them helps us develop meaningful and impactful product training.',
  },
  {
    number: '02',
    title: 'Research Based Design',
    description:
      'Starting from the product roadmap, we research on the USP, features, benefits, differentiators that resonate with different consumer profiles and accordingly structure the product training content.',
  },
  {
    number: '03',
    title: 'Learning Journey Approach',
    description:
      'Beginning with the end, we curate a journey that starts with clear definition of outcomes and ways we would measure them. The components of the journey are an apt mix of product knowledge, real-world scenarios/examples, hands-on experience, peer learning, continuous assessment, and most importantly point-of-need support all integrated with technology.',
  },
];

export function ProductTrainingDifferentiators() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-10">What Differentiates Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-200">
          {differentiators.map(({ number, title, description }, index) => (
            <div
              key={number}
              className={`pt-8 ${index !== differentiators.length - 1 ? 'border-r border-gray-200' : ''} px-4`}
            >
              <div className="text-purple-600 font-semibold text-lg mb-2">{number}</div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductTrainingDifferentiators;
