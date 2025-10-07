import React from 'react';

const points = [
  {
    title: 'Customized to Align',
    description:
      'Our existing off-the-shelf training on real selling or customer service or any custom product training is tailored to map to your organization’s specific needs and objectives.',
  },
  {
    title: 'Blended Learning Journey',
    description:
      'Integrating multiple modalities to ensure the right mix of knowledge, application, and on-the-job support for the learner.',
  },
  {
    title: 'Role-Based Personalization',
    description:
      'Providing role and job-specific personalization to ensure relevance, retention, and confidence on the job.',
  },
  {
    title: 'Demos and Simulations',
    description:
      'Practicing in a fail-safe environment is critical to proficiency and our demos and simulations provide that opportunity.',
  },
  {
    title: 'Integration with Technology',
    description:
      'Integrating learning with technology for adaptability, real-time access to data and dashboards for improved collaboration and decision making.',
  },
  {
    title: 'Certified Consultants and Facilitators',
    description:
      'Our 10k+ diverse global pool of consultants and facilitators helps us provide thought leadership, consultancy across different product industries with high quality and high impact training delivery and coaching, as needed.',
  },
];

export function ProductTrainingImmersiveExperience() {
  return (
    <section className="py-12 px-6 bg-white max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-10">Tailored and Immersive Learning Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {points.map(({ title, description }, index) => (
          <div key={title} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductTrainingImmersiveExperience;
