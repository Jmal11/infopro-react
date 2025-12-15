import React from 'react';

export function SalesTrainingEnablementLearningExperience() {
  const items = [
    {
      title: 'Blended Learning',
      description: 'Seamlessly integrating self-paced, online and in-person training for a flexible and impactful sales learning experience.',
      position: 'top-4 left-6 text-right',
    },
    {
      title: 'Onsite and/or Virtual (Facilitated) Delivery Options',
      description: 'Flexible training formats to suit your sales team needs, whether in-person or online, providing seamless, facilitator-led learning experiences.',
      position: 'top-1 right-10 text-left',
    },
    {
      title: 'Flexible and Customizable Suite of Programs',
      description: "Customizing sales training journeys to align with your organization's unique sales goals and challenges.",
      position: 'top-1/2 right-10 -translate-y-1/2 text-left',
    },
    {
      title: 'Global Pool of Certified Sales Master Facilitators',
      description: 'Ensuring expert-led sales training with certified professionals in your preferred language (27+ languages), ensuring global reach and understanding.',
      position: 'bottom-[-24px] left-1/2 -translate-x-1/2 max-w-xs text-center',
    },
    {
      title: 'Continuous Sales Support',
      description: 'Continuous access to resources that support sales learning retention and skill reinforcement for lasting impact.',
      position: 'top-1/2 left-6 -translate-y-1/2 text-right',
    },
  ];

  return (
    <section className="relative py-20">
      <div className="container mx-auto text-center max-w-[1280px] relative">
        <h2 className="text-3xl font-bold mb-10">Learning Experience</h2>

        <div className="relative mx-auto" style={{ height: 350 }}>
          {/* Central Hexagon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="https://stg.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Learning-experience-model%202.svg"
              alt="Learning Experience"
              className="max-w-xs"
            />
          </div>

          {/* Learning Items */}
          {items.map(({ title, description, position }) => (
            <div
              key={title}
              className={`absolute max-w-xs p-2 ${position}`}
            >
              <h6 className="font-semibold text-base mb-2">{title}</h6>
              <p className="text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalesTrainingEnablementLearningExperience;
