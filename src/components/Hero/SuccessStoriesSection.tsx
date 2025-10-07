import React from 'react';

const stories = [
  {
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    industry: 'Energy',
    skillsFocus: 'Digital Literacy',
    title: 'Empowering Future Engineers with Digital Learning Experiences',
    stats: [
      { value: '100%+', label: 'Projected ROI' },
      { value: '750+', label: 'Engineers Certified' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    industry: 'Non-Profit',
    skillsFocus: 'Design Thinking',
    title: 'Empowering Youth with Gamified Learning Experiences',
    stats: [
      { value: '50%', label: 'Increase in Club Participation' },
      { value: '75%', label: 'Satisfaction Rating' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1517849845536-4d8e5a27a46c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    industry: 'BFSI',
    skillsFocus: 'Upskilling',
    title: 'Adopting an Agile Culture Through A Multi-Year Transformation Program',
    stats: [
      { value: '25%', label: 'Reduction in Onboarding Duration' },
      { value: '$1.3M+', label: 'Cost Savings' },
    ],
  },
];

export function SuccessStoriesSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 border-b-2 border-purple-600 inline-block pb-2">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="border-t-2 border-purple-600 pt-4">
              <img src={story.image} alt={story.title} className="rounded-lg object-cover w-full h-48 mb-4" />
              <p className="text-purple-600 text-sm mb-1">
                <span className="font-semibold">Industry:</span> {story.industry}
              </p>
              <p className="text-purple-600 text-sm mb-2">
                <span className="font-semibold">Skills Focus:</span> {story.skillsFocus}
              </p>
              <h3 className="font-semibold text-gray-900 mb-4">{story.title}</h3>
              <div className="flex justify-between text-gray-900 font-bold mb-4">
                {story.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl">{stat.value}</div>
                    <div className="text-sm font-normal">{stat.label}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="text-purple-600 font-semibold inline-flex items-center hover:underline">
                LEARN MORE
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
