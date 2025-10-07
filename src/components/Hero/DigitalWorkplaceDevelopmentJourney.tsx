import React, { useState } from 'react';

const journeyItems = [
  {
    title: 'Foundation of Digital Workplace',
    content: (
      <>
        <p>This course provides an overview of the digital workplace concept, its importance in modern organizations, and the key components that make up a digital work environment.</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Define the concept of a digital workplace and its significance.</li>
          <li>Identify the key components and technologies in a digital workplace.</li>
          <li>Understand the benefits and challenges of digital transformation in the workplace.</li>
          <li>Recognize the impact of digital workplaces on productivity, collaboration, and work-life balance.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Digital Workplace Tools and Platforms',
    content: (
      <>
        <p>This course introduces participants to various tools and platforms commonly used in modern digital workplaces, providing a broad understanding of the digital ecosystem.</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Identify different categories of digital workplace tools (communication, collaboration, productivity, etc.).</li>
          <li>Understand the basic functions of popular digital workplace platforms.</li>
          <li>Recognize how different tools integrate to create a cohesive digital workspace.</li>
          <li>Evaluate the appropriateness of different tools for various work scenarios.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Adapting to the Digital Work Environment',
    content: (
      <>
        <p>This course focuses on strategies for successfully transitioning to and thriving in a digital workplace, emphasizing adaptability, communication, and continuous learning.</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Develop skills for effective remote work and virtual collaboration.</li>
          <li>Learn best practices for digital communication and etiquette.</li>
          <li>Understand cybersecurity principles and data privacy in digital work.</li>
          <li>Foster a mindset of continuous learning and digital adaptability.</li>
        </ul>
      </>
    ),
  },
];

export const DigitalWorkplaceDevelopmentJourney: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-2">Development Journey</h2>
        <p className="text-gray-700 mb-8">
          Mastering the Digital Workplace: Comprehensive Training Program
        </p>
        <p className="text-gray-700 mb-12">
          The training program equips professionals with essential skills to navigate today’s technology-driven work environments. Participants will learn to effectively use digital collaboration tools, manage remote teams, enhance productivity through automation, and ensure cybersecurity best practices. This program fosters adaptability, communication, and innovation, preparing individuals to thrive in a rapidly evolving digital workspace.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <nav className="space-y-4">
            {journeyItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`block w-full text-left px-4 py-2 rounded-md focus:outline-none ${
                  selectedIndex === index ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.title}
              </button>
            ))}
          </nav>
          <div className="md:col-span-2 bg-white p-6 rounded-md shadow-md max-h-96 overflow-y-auto border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">{journeyItems[selectedIndex].title}</h3>
            <div className="text-gray-700">{journeyItems[selectedIndex].content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
