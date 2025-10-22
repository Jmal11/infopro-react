import React from 'react';

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Holistic Readiness Assessment',
    description:
      'Analyze organizational readiness to embrace Human+AI transformation, identifying potential barriers and enablers for smooth adoption.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Leadership Alignment',
    description:
      'Ensure leadership buy-in and alignment to drive the vision, equipping leaders to champion change effectively across the organization.',
  },
  {
    image: 'https://images.unsplash.com/photo-1517849845536-4d8e5a27a46c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Tailored Communication Strategy',
    description:
      'Develop a targeted communication plan that addresses diverse stakeholder needs, fostering transparency and building trust throughout the transformation journey.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    title: 'Employee Empowerment and Training',
    description:
      'Provide comprehensive training and resources to upskill employees, enabling them to adapt to new AI-driven workflows confidently.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    title: 'Continuous Feedback Mechanism',
    description:
      'Implement feedback loops to monitor adoption progress, allowing for agile adjustments and ongoing support to sustain change momentum.',
  },
  {
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Success Metrics and Evaluation',
    description:
      'Establish clear success criteria and continuously evaluate progress to ensure the transformation delivers measurable business outcomes.',
  },
];

export function AdoptionChangeManagementSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Adoption and Change Management
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          To fully realize the potential of Human+AI and achieve the strategic goals of the Human+AI transformation program, it is essential to implement a comprehensive change management and adoption approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden bg-white shadow border-t-4 flex flex-col"
              style={{
                minHeight: '400px',
                maxHeight: '400px',
                borderTopColor: '#6b19ff',
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-48"
                style={{ minHeight: '12rem' }}
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
