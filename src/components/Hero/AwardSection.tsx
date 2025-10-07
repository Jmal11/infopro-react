import React from 'react';

const awards = [
  {
    title: 'Watch List 2023',
    description: 'Recognized for outstanding innovation and user experience in learning technology.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/awards/ti-1.png ',
  },
  {
    title: 'Brandon Hall Group HCM Excellence Award',
    description: 'Awarded for excellence in human capital management solutions.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/awards/bh.png ',
  },
  {
    title: 'Fosway Group Strategic Leader',
    description: 'Recognized for strategic leadership in digital learning solutions.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/fosway-2025.webp ',
  },
  {
    title: 'Watch List 2024',
    description: 'Recognized for innovative contributions to the training industry.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/2025-Leadership-Training.webp ',
  },
  {
    title: 'Learning in Practice Awards Winner',
    description: 'Awarded for excellence in practical learning solutions.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/LIP_BRONZE_Winner_Badge_2024.png ',
  },
];

export function AwardSection() {
  return (
    <section className="bg-[#f6f6f6]">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Awards</h2>
        <div className="flex flex-row justify-center gap-6 overflow-x-auto pb-4">
          {awards.map(({ title, image }) => (
            <div
              key={title}
              className="bg-transparent rounded-md p-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex-shrink-0"
            >
              <img src={image} alt={title} className="w-40 h-24 object-contain" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-colors">
            VIEW ALL AWARDS
          </button>
        </div>
      </div>
    </section>
  );
}