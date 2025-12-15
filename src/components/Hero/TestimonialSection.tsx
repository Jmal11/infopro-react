import React, { useState } from 'react';

const testimonials = [
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Empowering-Future-Engineers-with-Digital-Learning-Experiences.jpg',
    industry: 'Medical Device',
    skillsFocus: 'Marketing',
    title: 'Digital Learning Program Fuels Marketing Expansion',
    stats: [
      { label: 'Earned certificates', value: '96%' },
      { label: 'Increase in skills', value: '40%' },
    ],
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Experiential-Learning-Program-Empowers-Young-Leaders.jpg',
    industry: 'Professional Services',
    skillsFocus: 'Sales',
    title: 'Driving Sales with a Gamified Learning Experience',
    stats: [
      { label: 'Score 80% or higher', value: 'Participants' },
      { label: 'Received by employees', value: 'Positively' },
    ],
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Unlocking-Operational-Efficiency-with-Engaging-Learning-Experiences.jpg',
    industry: 'Insurance',
    skillsFocus: 'Customer Education',
    title: 'Digital Learning Experience Unlocks Customer Success',
    stats: [
      { label: 'Recommend program', value: '87%' },
      { label: 'Found it valuable', value: '97%' },
    ],
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Digital-Learning-Program-Fuels-Marketing-Expansion.jpg',
    industry: 'Technology',
    skillsFocus: 'Product Training',
    title: 'Interactive Modules Boost Product Adoption',
    stats: [
      { label: 'Users completed training', value: '92%' },
      { label: 'Improved onboarding time', value: '35%' },
    ],
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Driving-Sales-with-a-Gamified-Learning-Experience.jpg',
    industry: 'Finance',
    skillsFocus: 'Compliance',
    title: 'Compliance Training Made Engaging and Measurable',
    stats: [
      { label: 'Passed assessments', value: '99%' },
      { label: 'Reported confidence increase', value: '88%' },
    ],
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Digital-Learning-Experience-Unlocks-Customer-Success.jpg',
    industry: 'Education',
    skillsFocus: 'Instructional Design',
    title: 'Enhanced Engagement Through Microlearning',
    stats: [
      { label: 'Active users', value: '91%' },
      { label: 'Satisfaction rating', value: '4.8/5' },
    ],
  },
];

export function TestimonialSection() {
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * cardsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + cardsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  };
  const goToPrev = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Success Stories
        </h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 max-w-[1280px] mx-auto">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md w-full md:w-1/3 flex flex-col overflow-hidden border-t-4 border-t-[#6b19ff]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.title}
                className="w-full h-48 object-cover block"
              />
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-purple-700 mb-1">
                  <span className="font-semibold">Industry:</span> {testimonial.industry}
                </p>
                <p className="text-sm text-purple-700 mb-3">
                  <span className="font-semibold">Skills Focus:</span> {testimonial.skillsFocus}
                </p>
                <h3 className="font-semibold text-gray-900 mb-6 text-lg">{testimonial.title}</h3>
                <div className="flex justify-between text-sm text-gray-700 font-semibold mb-6 border-t pt-4">
                  {testimonial.stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center ${
                        i !== testimonial.stats.length - 1 ? 'border-r pr-4' : ''
                      }`}
                    >
                      <span className="text-xl font-bold text-gray-900">{stat.value}</span>
                      <span className="font-normal text-gray-600 text-xs mt-1">{stat.label}</span>
                    </div>
                  ))}
                </div>
                
                  <a href="#"
                  className="text-gray-900 font-semibold hover:text-purple-700 flex items-center gap-1 mt-auto transition-colors"
                >
                  LEARN MORE <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={goToPrev}
            disabled={currentPage === 0}
            className={`p-2 transition-colors ${
              currentPage === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-purple-600 hover:text-purple-800'
            }`}
            aria-label="Previous Page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === i ? 'bg-purple-600 scale-110' : 'bg-gray-400'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            className={`p-2 transition-colors ${
              currentPage === totalPages - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-purple-600 hover:text-purple-800'
            }`}
            aria-label="Next Page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}