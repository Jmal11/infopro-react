import React, { useState } from 'react';

const slides = [
  {
    title: 'Human+AI : Transforming Workflows and Value Streams',
    subtitle: 'Upskill, adapt and thrive in an AI-driven future.',
    buttonText: 'LEARN MORE',
    buttonLink: '#',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/home-page-Human-ai-slider.webp',
    backgroundColor: 'bg-[#292929]'
  },
  {
    title: 'Empower teams with leadership development programs',
    subtitle: 'Powered by AI Coach - Guru',
    buttonText: 'LEARN MORE',
    buttonLink: '#',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Epower-teams-with-leadership-development-programs.png',
    backgroundColor: 'bg-[#292929]'
  }
];

export function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full">
      <div className={`${slides[currentIndex].backgroundColor} text-white py-16 w-full`}>
        <div className="max-w-[1280px] lg:max-w-[1280px] xl:max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              {slides[currentIndex].title}
            </h2>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              {slides[currentIndex].subtitle}
            </p>
            <a
              href={slides[currentIndex].buttonLink}
              className="inline-block border border-white px-7 py-4 font-semibold text-white hover:bg-white hover:text-black transition duration-300"
            >
              {slides[currentIndex].buttonText}
            </a>
          </div>
          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="object-cover w-full max-w-md h-72 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Navigation Dots and Arrows */}
      <div className="w-full bg-white py-8 flex justify-center items-center space-x-5 px-4">
        <button
          onClick={() => goToSlide(currentIndex - 1)}
          className="p-2 rounded-full text-purple-700 hover:bg-purple-100 transition"
          aria-label="Previous"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
        </button>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-4 h-4 mx-2 rounded-full transition-all ${
              currentIndex === idx ? 'bg-purple-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <button
          onClick={() => goToSlide(currentIndex + 1)}
          className="p-2 rounded-full text-purple-700 hover:bg-purple-100 transition"
          aria-label="Next"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </div>
    </section>
  );
}