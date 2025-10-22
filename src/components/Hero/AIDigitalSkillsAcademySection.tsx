import React from 'react';

const cards = [
  {
    title: 'Mastering the Digital Workplace: Tools for the Modern Employee',
    description: `Equipping individuals with the essential skills to navigate and leverage digital tools, platforms, and applications that drive productivity and collaboration in today’s work environments. Participants gain proficiency in utilizing productivity suites like Microsoft Office and G Suite, collaborating seamlessly through AI tools like Copilot, ChatGPT, and communication tools, and adapting to new digital workflows and processes.`,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Data Analytics and Visualization: Transform Data into Action',
    description: `This program covers foundational analytical techniques, tools for data manipulation and cleaning, and creates compelling data visualizations and reports. Participants learn to interpret data, identify patterns and trends, and communicate findings clearly, facilitating informed decision-making across the organization.`,
    image: 'https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'AI and Machine Learning: Driving Innovation and Transformation',
    description: `Unlock the transformative power of AI and machine learning with our cutting-edge program. Master fundamental concepts, applied techniques, and real-world applications across industries. Gain hands-on experience with popular AI tools like Copilot, OpenAI, algorithms, frameworks, and capstone projects under expert guidance. Emerse as a future-ready leader, driving business innovation and AI-enabled transformation within your organization.`,
    image: 'https://images.unsplash.com/photo-1517849845536-4d8e5a27a46c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export function AIDigitalSkillsAcademySection() {
  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 max-w-lg">
            AI and Digital Skills Academy
          </h2>
          <p className="text-gray-700 max-w-2xl mt-4 lg:mt-0">
            With insights from the strategy phases, we customize our digital academy programs to align with your organization's specific needs, ensuring a rapid and tailored upskilling journey. Our programs are designed to equip your workforce with the essential skills and knowledge required for seamless Human+AI collaboration and to drive digital transformation within your industry, function, and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out hover:shadow-xl group">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-sm"
              />
              {/* Normal overlay */}
              <div className="absolute inset-0 transition bg-black bg-opacity-40 duration-300 ease-in-out group-hover:bg-opacity-80"></div>
              {/* Hover overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                <h3 className="text-white font-extrabold text-2xl mb-4 text-left">
                  {card.title}
                </h3>
                <p className="text-white font-normal text-base mb-0 text-left">
                  {card.description}
                </p>
              </div>
              {/* Card Content (visible when not hovered) */}
              <div className="p-6 flex flex-col flex-grow relative z-10 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                <h3 className="text-white font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-300 flex-grow">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
