import React from 'react';

const solutions = [
  {
    title: 'Managed Learning Services',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Managed-Learning-Services-1.jpg',
    description: 'Maximize your L&D performance with our comprehensive MLS services that cover every aspect of your L&D function, from strategy and curriculum design to global training delivery, administration to vendor management and learning technology optimization.',
  },
  {
    title: 'Custom Content Development',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Custom-Content-Development-1.jpg',
    description: 'Transform your team’s growth with our custom content development. We craft personalized blended learning journeys, seamlessly integrating diverse modalities—from interactive eLearning modules, video, simulations to instructor and workshop. Maximize engagement and all application across your organization with tailored, multi-format experiences.',
  },
  {
    title: 'Training Delivery',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Training-Delivery-1.jpg',
    description: 'Bring your learning vision to life with our global pool of master facilitators. We adapt to your team’s needs, delivering engaging sessions virtually in person, or through blended approaches. Experience dynamic, culturally nuanced learning that drives real results across your organization.',
  },
  {
    title: 'LMS Administration',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/LMS-Administration-1.jpg',
    description: 'Maximize the impact of your learning initiatives with our comprehensive learning administration services. We streamline training coordination, LMS management, and learner support to ensure efficient global delivery, positive ROI, and seamless access to learning for your workforce.',
  },
  {
    title: 'Learning Strategy',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Learning-Strategy-1.jpg',
    description: 'Our learning strategy services creates tailored roadmaps that align learning initiatives with your organization’s goals and industry trends. We help organizations become more agile by identifying shifts and evolving strategies through experience, evidence, and insights, with a focus on effective blended learning approaches.',
  },
  {
    title: 'Training Needs Analysis',
    image: 'https://www.infoprolearning.com/wp-content/uploads/2023/01/Training-Needs-Analysis-1.jpg',
    description: 'Instead of choosing training based on what you think you might need, our training needs analysis service helps you pinpoint exact gaps, find appropriate training solutions, and ensure your training objectives are achieved.',
  },
];

export function OurSolutionsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Solutions</h2>
      <p className="max-w-4xl mx-auto mb-12 text-center text-gray-700">
        We offer a range of solutions that empower organizations to achieve sustainable growth and success. From optimizing every aspect of your L&D function through managed learning services, to crafting custom content that meets diverse learner needs, our approach aligns initiatives with industry trends and drives impactful results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {solutions.map(({ title, image, description }) => (
          <div key={title} className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded" loading="lazy" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
            <a href="#" className="mt-2 inline-block text-blue-600 hover:underline font-semibold">LEARN MORE &rarr;</a>
          </div>
        ))}
      </div>
    </section>
  );
}
