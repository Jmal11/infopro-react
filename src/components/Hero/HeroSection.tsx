import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/image.jpg', // Replace with your file path or import
    title: (
      <>
        Infopro Learning Introduces<br />
        Industry-First Performance<br />
        Guarantee
      </>
    ),
    subtitle: "30% Reduction in Learning & Development Costs While Expanding Learner Reach",
    tags: [
      {
        text: (
          <>
            <span className="font-bold text-blue-700">30% less</span>
            <span className="block text-xs text-gray-700">COST PER LEARNER</span>
          </>
        ),
        style: "left-[-65px] top-[45px] shadow-md"
      },
      {
        text: (
          <>
            <span className="font-bold text-green-700">Expanded</span>
            <span className="block text-xs text-gray-700">GLOBAL REACH & IMPACT</span>
          </>
        ),
        style: "right-[-30px] bottom-[30px] shadow-md"
      }
    ]
  },
  {
    id: 2,
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/raining-delivery.webp',
    title: (
      <>
        Award-Winning Training Delivery<br />
        at Scale
      </>
    ),
    subtitle: "Expert-led blended learning journeys for international enterprises.",
    tags: [
      {
        text: (
          <>
            <span className="font-bold text-purple-700">Certified Trainers</span>
            <span className="block text-xs text-gray-700">WORLDWIDE</span>
          </>
        ),
        style: "left-[-65px] top-[50px] shadow-md"
      },
      {
        text: (
          <>
            <span className="font-bold text-green-700">Blended</span>
            <span className="block text-xs text-gray-700">LEARNING APPROACH</span>
          </>
        ),
        style: "right-[-30px] bottom-[30px] shadow-md"
      }
    ]
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    title: (
      <>
        Cutting-Edge Virtual Solutions<br />
        for Training
      </>
    ),
    subtitle: "Innovative content and modern platforms for remote workforce development.",
    tags: [
      {
        text: (
          <>
            <span className="font-bold text-blue-700">100% Remote</span>
            <span className="block text-xs text-gray-700">ACCESSIBLE</span>
          </>
        ),
        style: "left-[-65px] top-[50px] shadow-md"
      }
    ]
  },
  {
    id: 4,
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/second-image.webp',
    title: (
      <>
        Measurable Impact<br />
        in Learning & Development
      </>
    ),
    subtitle: "Data-driven strategies and reporting enhance business outcomes.",
    tags: [
      {
        text: (
          <>
            <span className="font-bold text-blue-700">Detailed Reports</span>
            <span className="block text-xs text-gray-700">PERFORMANCE MONITORING</span>
          </>
        ),
        style: "left-[-65px] top-[50px] shadow-md"
      }
    ]
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];

  return (
    <div className="relative min-h-screen flex items-center bg-[#2a2a2a]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left - Text */}
        <div className="w-full md:w-7/12 text-white mb-16 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {slide.title}
          </h1>
          <p className="mb-6 text-lg md:text-xl">{slide.subtitle}</p>
          <button className="border border-white px-8 py-4 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition-all bg-transparent">
            READ MORE
          </button>
        </div>
        {/* Right - Image with tags */}
        <div className="relative w-full md:w-5/12 flex justify-center md:justify-end">
          <div className="relative rounded-[22px] overflow-hidden shadow-lg bg-white/10 min-w-[320px] max-w-[370px]">
            <img
              src={slide.image}
              alt="Hero"
              className="object-cover w-full h-auto"
              style={{ borderRadius: '22px' }}
            />
            {/* Slide tags/badges */}
            {slide.tags.map((tag, idx) => (
              <div
                key={idx}
                className={`absolute bg-white py-2 px-6 rounded-md text-[15px] text-left ${tag.style}`}
                style={{ minWidth: 120 }}
              >
                {tag.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-5 h-5 mx-1 rounded-full border transition-all duration-150 ${
              idx === currentIndex ? 'bg-white border-white' : 'bg-transparent border-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
