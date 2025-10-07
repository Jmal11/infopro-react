import React, { useState } from 'react';

const slides = [
  {
    title: 'AI-Powered Learning: A Cross-Sector Dialogue on Future Possibilities',
    subtitle: 'Podcast | Spotify',
    buttonText: 'LISTEN NOW ON SPOTIFY',
    buttonLink: '#',
    speakers: [
      {
        name: 'Dr. Sarit J. Levy',
        role: 'Chief Learning and Revenue Officer, Zschool',
        image: 'https://randomuser.me/api/portraits/women/44.jpg', 
      },
      {
        name: 'Nolan Hout',
        role: 'Senior Vice President, Growth Infopro Learning',
        image: 'https://randomuser.me/api/portraits/men/46.jpg', 
      },
    ],
    backgroundColor: 'bg-gray-900',
  },
  {
    title: 'Empower teams with leadership development programs',
    subtitle: 'Powered by AI Coach - Guru',
    buttonText: 'LEARN MORE',
    buttonLink: '#',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    backgroundColor: 'bg-gray-900',
  },
  {
    title: 'Human+AI : Transforming Workflows and Value Streams',
    subtitle: 'Upskill, adapt and thrive in an AI-driven future.',
    buttonText: 'LEARN MORE',
    buttonLink: '#', 
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    backgroundColor: 'bg-gray-900',
  },
];

export function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;
    setCurrentIndex(index);
  };

  return (
    <section className="relative">
      <div className={`${slides[currentIndex].backgroundColor} text-white py-12 px-6`}>
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-sm uppercase tracking-widest text-gray-400">{slides[currentIndex]?.subtitle}</p>
            <h2 className="text-3xl font-extrabold">{slides[currentIndex]?.title}</h2>

            <a
              href={slides[currentIndex]?.buttonLink}
              className="inline-block border border-white px-6 py-2 font-semibold text-white hover:bg-gray-200 hover:text-gray-900 focus:outline-none transition duration-300"
            >
              {slides[currentIndex]?.buttonText}
            </a>

            {/* Speakers for first slide */}
            {currentIndex === 0 && (
              <div className="space-y-4 mt-8">
                {slides[0].speakers.map((speaker, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <img src={speaker.image} alt={speaker.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-blue-400">{speaker.name}</p>
                      <p className="text-sm">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            {currentIndex !== 0 && (
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="rounded-lg object-cover w-full h-64"
              />
            )}
          </div>
        </div>
      </div>

      {/* Navigation Dots and Arrows */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={() => goToSlide(currentIndex - 1)}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full focus:outline-none ${
            currentIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-white hover:bg-gray-600'
          }`}
          aria-label="Previous"
        >
          &#8592; 
        </button>

        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              currentIndex === idx ? 'bg-white' : 'bg-gray-600'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}

        <button
          onClick={() => goToSlide(currentIndex + 1)}
          disabled={currentIndex === slides.length - 1}
          className={`p-2 rounded-full focus:outline-none ${
            currentIndex === slides.length - 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-white hover:bg-gray-600'
          }`}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}