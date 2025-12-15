import React from 'react';

export function AIMLLearningExperience() {
  const items = [
    {
      title: 'Interactive AI Workshops',
      description: 'Hands-on sessions to explore AI concepts and applications in real-world business scenarios.',
      position: 'top-4 left-6 text-right',
    },
    {
      title: 'Virtual and In-Person Training',
      description: 'Flexible delivery options to suit your learning preferences and schedule.',
      position: 'top-1 right-10 text-left',
    },
    {
      title: 'Customized Learning Paths',
      description: "Tailored programs to align with your organization's AI strategy and goals.",
      position: 'top-1/2 right-10 -translate-y-1/2 text-left',
    },
    {
      title: 'Expert-Led Sessions',
      description: 'Training delivered by AI industry leaders and certified professionals.',
      position: 'bottom-[-24px] left-1/2 -translate-x-1/2 max-w-xs text-center',
    },
    {
      title: 'Ongoing Support and Resources',
      description: 'Access to continuous learning materials and AI community forums.',
      position: 'top-1/2 left-6 -translate-y-1/2 text-right',
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50">
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
