import React from 'react';

const solutions = [
  {
    title: 'Ensure Optimal Human Capital Development',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Ensure-Optimal-Human-Capital-Development.webp',
    description: 'We focus on unlocking the potential of your workforce by implementing strategic measures that expand their capabilities.',
  },
  {
    title: 'Harmonize Organizational and Employee Needs',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Harmonize-Organizational-and-Employee-Needs.webp',
    description: 'Our strategic framework aligns employee development with your business vision, ensuring that workforce goals are directly linked to business demands.',
  },
  {
    title: 'Devise Strategic Organizational Initiatives',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Devise-Strategic-Organizational-Initiatives.webp',
    description: 'We assess and improve business performance through structured collaboration and engagement, tailoring strategies to meet your specific needs.',
  },
  {
    title: 'Optimize Existing Programs and Curriculum',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Optimize-Existing-Programs-and-Curriculum.webp',
    description: 'Our experienced team identifies challenges in your current programs and suggests actionable steps to enhance their effectiveness.',
  },
];

export function OurSolutionsSection() {
  return (
    <section className="bg-[#f8f8f8] w-full py-10">
      <h2 className="text-5xl font-extrabold text-center mb-8">
        Key Benefits of Working with Us for Learning Strategy
      </h2>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {solutions.map(({ title, image, description }) => (
          <div key={title} className="flex flex-col">
            <div
              className="mb-6 rounded overflow-hidden"
              style={{
                borderTop: '4px solid #6b19ff',
                width: '100%',
                height: '180px',
                background: `url('${image}') center/cover no-repeat`
              }}
            />
            <h3 className="font-bold text-2xl mb-2">{title}</h3>
            <p className="text-lg text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
