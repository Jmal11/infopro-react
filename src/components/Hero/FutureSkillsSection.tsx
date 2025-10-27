import React from 'react';

const bulletPoints = [
  'Aligning talent strategies with evolving skill requirements across the employee lifecycle.',
  'Seamlessly integrating talent acquisition, development, and deployment to ensure sustainable competitive advantage.',
  'Unlocking unprecedented organizational agility and performance.',
];

export function FutureSkillsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            The Future is Skills-Based
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            End-to-End Workforce Transformation
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl">
            We enable organizations to thrive in the skills economy by reimagining workforce ecosystems, integrating skills, strategy, and systems to foster agile, high-impact organizations.
          </p>
          <ul className="space-y-4 max-w-xl">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <img 
                  src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/tick.svg"
                  alt="Check mark"
                  className="w-6 h-6 flex-shrink-0 mt-1"
                />
                <span className="text-gray-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img 
            src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/coaching-blueprint.svg"
            alt="Coaching Blueprint"
            className="w-full h-auto max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
}