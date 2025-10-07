import React from 'react';

const solutions = [
  {
    title: 'Digital Learning Modules',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Digital-Learning-Modules-1.jpg',
    description: 'Transform your training with our digital learning modules, designed to meet your specific objectives. These engaging, interactive modules enhance understanding and retention, ensuring measurable success in compliance, skill development, or process training.',
  },
  {
    title: 'Instructor-Led Training (ILT) Materials',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/ILT-Materials-1.jpg',
    description: 'Enhance in-person training with our expert-led resources. Tailored materials boost engagement and learning, offering detailed guides and interactive activities for impactful, memorable sessions.',
  },
  {
    title: 'Video Content Development',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Video-Content-Development-1.jpg',
    description: 'Engage your audience with our video content development service. We create custom, visually compelling videos that simplify complex concepts, enhance retention, and make learning enjoyable and effective.',
  },
  {
    title: 'Assessment',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Assessment-1.jpg',
    description: 'Validate your team’s skills with our tailored assessment and certification programs. We create custom certification paths that measure achievement, using adaptive assessments to challenge and build confidence.',
  },
  {
    title: 'Custom Microlearning Solutions',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Custom-Microlearning-Solutions-1.jpg',
    description: 'Accelerate skill development with our custom microlearning solutions. We create focused, bite-sized modules that target specific learning needs, ensuring quick grasp, retention, and real-world application.',
  },
  {
    title: 'Virtual Simulation Development',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Virtual-Simulation-Development-1.jpg',
    description: 'Enhance learning with our virtual simulation development service, offering custom, immersive simulations that replicate real-world scenarios, helping learners build confidence and competence in a safe environment.',
  },
  {
    title: 'Custom eLearning Content',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Custom-eLearning-Content-1.jpg',
    description: 'Develop bespoke eLearning content tailored to your organization’s unique needs, ensuring alignment with business goals and learner preferences.',
  },
  {
    title: 'Mobile Learning Solutions',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Mobile-Learning-Solutions-1.jpg',
    description: 'Deliver learning anytime, anywhere with mobile-optimized content that supports on-the-go learners and enhances accessibility.',
  },
  {
    title: 'Blended Learning Programs',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Blended-Learning-Programs-1.jpg',
    description: 'Combine the best of online and face-to-face learning with our blended programs designed to maximize engagement and effectiveness.',
  },
];

export function CustomContentSolutionsGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Our Learner-Centric Custom eLearning Solutions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {solutions.map(({ title, image, description }) => (
          <div key={title} className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded" loading="lazy" />
            <h3 className="font-semibold mb-2 text-center">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
