import React from 'react';

const differentiators = [
  {
    number: '01',
    title: ['Consumer', 'Profiling'],
    description:
      'Understanding the persona of target consumers, their challenges, their expectations from the product, and how the product will impact them helps us develop meaningful and impactful product training.',
  },
  {
    number: '02',
    title: ['Research', 'Based Design'],
    description:
      'Starting from the product roadmap, we research on the USP, features, benefits, differentiators that resonate with different consumer profiles and accordingly structure the product training content.',
  },
  {
    number: '03',
    title: ['Learning Journey', 'Approach'],
    description:
      'Beginning with the end, we curate a journey that starts with clear definition of outcomes and ways we would measure them. The components of the journey are an apt mix of product knowledge, real-world scenarios/examples, hands-on experience, peer learning, continuous assessment, and most importantly point-of-need support all integrated with technology.',
  },
];

export function ProductTrainingDifferentiators() {
  return (
    <section className="relative">
      {/* Gray/Beige background - top half */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#f9fafb]"></div>
      
      {/* White background - bottom half */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
      
      {/* Content container */}
      <div className="relative z-10 py-12">
        {/* Title on beige background */}
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">What Differentiates Us</h2>
        
        {/* Overlapping cards */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white grid grid-cols-1 md:grid-cols-3 shadow-sm">
            {differentiators.map(({ number, title, description }, index) => (
              <div
                key={number}
                className={`p-8 ${index !== 0 ? 'md:border-l border-gray-200' : ''}`}
              >
                {/* Numbered circle */}
                <div className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center mb-6">
                  <span className="text-purple-500 font-medium text-sm">{number}</span>
                </div>
                
                {/* Two-line title */}
                <h3 className="font-bold text-xl text-gray-900 mb-4 leading-tight">
                  {title[0]}<br />{title[1]}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductTrainingDifferentiators;