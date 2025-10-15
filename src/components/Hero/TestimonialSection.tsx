import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1581093588401-1a1a1a1a1a1a?auto=format&fit=crop&w=600&q=80',
    industry: 'Medical Device',
    skillsFocus: 'Marketing',
    title: 'Digital Learning Program Fuels Marketing Expansion',
    stats: [
      { label: 'Earned certificates', value: '96%' },
      { label: 'Increase in skills', value: '40%' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    industry: 'Professional Services',
    skillsFocus: 'Sales',
    title: 'Driving Sales with a Gamified Learning Experience',
    stats: [
      { label: 'Score 80% or higher', value: 'Participants' },
      { label: 'Received by employees', value: 'Positively' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    industry: 'Insurance',
    skillsFocus: 'Customer Education',
    title: 'Digital Learning Experience Unlocks Customer Success',
    stats: [
      { label: 'Recommend program', value: '87%' },
      { label: 'Found it valuable', value: '97%' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1550559652-4ebfa2c6bca4?auto=format&fit=crop&w=600&q=80',
    industry: 'Technology',
    skillsFocus: 'Product Training',
    title: 'Interactive Modules Boost Product Adoption',
    stats: [
      { label: 'Users completed training', value: '92%' },
      { label: 'Improved onboarding time', value: '35%' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359220-8f4e5f27c164?auto=format&fit=crop&w=600&q=80',
    industry: 'Finance',
    skillsFocus: 'Compliance',
    title: 'Compliance Training Made Engaging and Measurable',
    stats: [
      { label: 'Passed assessments', value: '99%' },
      { label: 'Reported confidence increase', value: '88%' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1581092160612-3ccbc7c368bb?auto=format&fit=crop&w=600&q=80',
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
  // Responsive cards-per-page
  const getCardsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => setCardsPerPage(getCardsPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  };
  const goToPrev = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  const startIndex = currentPage * cardsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="bg-[#f6f6f6] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>

        {/* Cards container */}
        <div className="flex flex-wrap justify-center gap-6 transition-opacity duration-500">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md w-full sm:w-[48%] lg:w-[32%] flex flex-col"
            >
              <img
                src={testimonial.image}
                alt={testimonial.title}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <div className="p-4 flex-grow flex flex-col">
                <p className="text-sm text-purple-700 mb-1">
                  <span className="font-semibold">Industry:</span> {testimonial.industry}
                </p>
                <p className="text-sm text-purple-700 mb-2">
                  <span className="font-semibold">Skills Focus:</span> {testimonial.skillsFocus}
                </p>
                <h3 className="font-semibold text-gray-900 mb-4">{testimonial.title}</h3>
                <div className="flex justify-between text-sm text-gray-700 font-semibold mb-4">
                  {testimonial.stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center ${
                        i !== testimonial.stats.length - 1 ? 'border-r pr-4' : ''
                      }`}
                    >
                      <span className="text-lg">{stat.value}</span>
                      <span className="font-normal">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-purple-600 font-semibold hover:underline flex items-center gap-1 mt-auto"
                >
                  LEARN MORE <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={goToPrev}
            disabled={currentPage === 0}
            className={`p-2 rounded-full ${
              currentPage === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-purple-600 hover:bg-purple-100'
            } transition-colors`}
            aria-label="Previous Page"
          >
            &#8592;
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === i ? 'bg-purple-600 scale-110' : 'bg-purple-300'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            className={`p-2 rounded-full ${
              currentPage === totalPages - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-purple-600 hover:bg-purple-100'
            } transition-colors`}
            aria-label="Next Page"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
