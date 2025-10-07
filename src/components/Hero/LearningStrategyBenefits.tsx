import React from 'react';

const benefits = [
  {
    image: '/images/benefit1.jpg',
    title: 'Ensure Optimal Human Capital Development',
    description: 'We focus on unlocking the potential of your workforce by implementing strategic measures that expand their capabilities.',
  },
  {
    image: '/images/benefit2.jpg',
    title: 'Harmonize Organizational and Employee Needs',
    description: 'Our strategic framework aligns employee development with your business vision, ensuring that workforce goals are directly linked to business demands.',
  },
  {
    image: '/images/benefit3.jpg',
    title: 'Devise Strategic Organizational Initiatives',
    description: 'We assess and improve business performance through structured collaboration and engagement, tailoring strategies to meet your specific needs.',
  },
  {
    image: '/images/benefit4.jpg',
    title: 'Optimize Existing Programs and Curriculum',
    description: 'Our experienced team identifies challenges in your current programs and suggests actionable steps to enhance their effectiveness.',
  },
];

export function LearningStrategyBenefits() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center border-b-4 border-purple-600 inline-block pb-2">
        Key Benefits of Working with Us for Learning Strategy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {benefits.map(({ image, title, description }, index) => (
          <div key={index} className="text-center">
            <img src={image} alt={title} className="mx-auto mb-4 rounded shadow-md" />
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
