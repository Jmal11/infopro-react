import React from 'react';

const PeopleLeadershipLearningExperience = () => {
  console.log("PeopleLeadershipLearningExperience component rendered");
  const learningExperiences = [
    {
      title: 'Blended Learning',
      description: 'Seamlessly integrating self-paced, online and in-person training for a flexible and impactful learning experience.',
      icon: 'path/to/icon1.svg', // Replace with actual icon path
    },
    {
      title: 'Continuous Learning Support',
      description: 'Continuous access to resources that support learning retention and skill reinforcement for lasting impact.',
      icon: 'path/to/icon2.svg', // Replace with actual icon path
    },
    {
      title: 'Onsite and/or Virtual Delivery Options',
      description: 'Flexible training formats to suit your needs, whether in-person or online.',
      icon: 'path/to/icon3.svg', // Replace with actual icon path
    },
    {
      title: 'Flexible and Customizable Suite of Programs',
      description: 'Customizing learning journeys to align with your organization\'s unique goals and challenges.',
      icon: 'path/to/icon4.svg', // Replace with actual icon path
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Learning Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningExperiences.map((experience, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-purple-600 flex items-center justify-center rounded-full">
                <img src={experience.icon} alt={experience.title} className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold mt-4">{experience.title}</h3>
              <p className="text-center text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleLeadershipLearningExperience;
