import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/banner-pr-home.png',
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
        style: "left-4 top-8 sm:left-[-45px] sm:top-[45px] shadow-md"
      },
      {
        text: (
          <>
            <span className="font-bold text-green-700">Expanded</span>
            <span className="block text-xs text-gray-700">GLOBAL REACH & IMPACT</span>
          </>
        ),
        style: "right-4 bottom-6 sm:right-[-30px] sm:bottom-[30px] shadow-md"
      }
    ]
  },
  {
    id: 2,
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/MLS-banner-Image.webp',
    backgroundImage: 'https://infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/MLS-Hero-bg.webp',
    title: (
      <>
        Transform your L&D with<br />
        Managed Learning Services
      </>
    ),
    subtitle: "Strategic outsourcing saves organizations over 30% of cost, while expanding learner reach. Get your free personalized ROI case in under 48 hours.",
    tags: [],
    imageFromBottom: true
  },
  {
    id: 3,
    backgroundVideo: 'https://2854653.fs1.hubspotusercontent-na1.net/hubfs/2854653/ipl-website-video-2024/home-video-2024%20(1).mp4',
    title: "Shape the Future of Learning",
    subtitle: "Navigate disruption, harness AI, and transform your L&D strategy",
    buttonText: "BOOK A STRATEGIC VISION WORKSHOP",
    buttonSubtext: (
      <div className="flex items-center gap-2 text-xs mt-1">
        <span>Alignment call</span>
        <span>›</span>
        <span>Workshop</span>
        <span>›</span>
        <span>Future-ready Strategy</span>
      </div>
    ),
    tags: []
  },
  {
    id: 4,
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Leadership-mockup.png',
    title: (
      <>
        Meet your <span style={{ textDecoration: 'underline', textDecorationColor: 'white', textUnderlineOffset: '4px' }}>Onboarding</span> Guru!
      </>
    ),
    subtitle: (
      <>
        <span className="font-bold">Guru is your AI coach,</span> guiding you in the flow of work with real-time support when you need it most
      </>
    ),
    buttonText: "LEARN MORE",
    tags: []
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

  const goToNext = () => {
    setCurrentIndex((i) => (i + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative min-h-screen flex items-center lg:pt-12 bg-[#2a2a2a]"
      style={slide.backgroundImage ? {
        backgroundImage: `url(${slide.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      {/* Background Video for slide 3 */}
      {slide.backgroundVideo && (
        <video
          key={slide.id}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src={slide.backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay for video slide to ensure text readability */}
      {slide.backgroundVideo && (
        <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>
      )}

      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 md:px-8 lg:px-12 py-24 md:py-0 relative" style={{ zIndex: 2 }}>
       {/* Left - Text */}
        <div className={`w-full ${slide.image ? 'md:w-7/12' : 'md:w-full'} text-white text-center md:text-left`}>
          <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold mb-4 leading-tight">
            {slide.title}
          </h1>
          <p className="mb-6 text-base sm:text-lg md:text-xl">{slide.subtitle}</p>
          <div>
            <button className="border border-white px-6 py-3 sm:px-8 sm:py-4 rounded-md text-base sm:text-sm font-semibold hover:bg-white hover:text-black transition-all bg-transparent inline-flex flex-col items-center">
              <span>{slide.buttonText || (slide.id === 2 ? 'GET YOUR MLS BUSINESS CASE' : 'READ MORE')}</span>
              {slide.buttonSubtext && slide.buttonSubtext}
            </button>
          </div>
        </div>
        {/* Right - Image with tags */}
        {slide.image && (
          <div className="relative w-full md:w-5/12 flex justify-center items-center md:items-end md:justify-end">
            <div className="relative">
              <img
                src={slide.image}
                alt="Hero"
                className={`block mx-auto ${
                  slide.imageFromBottom 
                    ? 'md:w-[90%] md:max-w-none md:h-auto object-contain' 
                    : 'md:w-full md:h-screen md:object-contain'
                }`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderStyle: 'none',
                  ...(slide.imageFromBottom && {
                    objectPosition: 'bottom'
                  })
                }}
              />
              {/* Slide tags/badges */}
              {slide.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className={`absolute bg-white py-2 px-4 sm:px-6 rounded-md text-sm text-left ${tag.style}`}
                  style={{ minWidth: 100 }}
                >
                  {tag.text}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Navigation - Dots with Prev/Next */}
      <div className="absolute bottom-12 md:bottom-20 left-0 right-0 flex justify-center items-center gap-4" style={{ zIndex: 3 }}>
        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 mx-1 rounded-full border transition-all duration-150 ${
                idx === currentIndex ? 'bg-white border-white' : 'bg-transparent border-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
