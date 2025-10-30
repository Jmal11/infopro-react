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
        style: "left-2 top-4 xs:left-4 xs:top-6 sm:left-[-45px] sm:top-[45px] shadow-md"
      },
      {
        text: (
          <>
            <span className="font-bold text-green-700">Expanded</span>
            <span className="block text-xs text-gray-700">GLOBAL REACH & IMPACT</span>
          </>
        ),
        style: "right-2 bottom-4 xs:right-4 xs:bottom-6 sm:right-[-30px] sm:bottom-[30px] shadow-md"
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
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] xs:text-xs mt-1.5 opacity-90">
        <span>Alignment call</span>
        <span className="text-base">›</span>
        <span>Workshop</span>
        <span className="text-base">›</span>
        <span className="whitespace-nowrap">Future-ready Strategy</span>
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
  const [rotatingWord, setRotatingWord] = useState('Onboarding');
  const rotatingWords = ['Onboarding', 'Leadership', 'Sales'];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  // Rotate words for slide 4
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setRotatingWord(prev => {
        const currentIdx = rotatingWords.indexOf(prev);
        return rotatingWords[(currentIdx + 1) % rotatingWords.length];
      });
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(wordInterval);
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
      className="relative h-screen flex items-center justify-center bg-[#2a2a2a] overflow-hidden"
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

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-40 sm:pt-44 md:pt-48 lg:pt-52 xl:pt-56 pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-40 relative" style={{ zIndex: 2 }}>
        <div className={`flex flex-col-reverse ${slide.image ? 'md:flex-row' : 'md:flex-col'} items-center ${slide.image ? 'md:justify-between' : 'justify-center'} gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20`}>
          
          {/* Left - Text Content */}
          <div className={`w-full ${slide.image ? 'md:w-[58%] lg:w-[60%] xl:w-[58%]' : 'md:w-full'} text-white text-center md:text-left flex flex-col justify-center`}>
            {/* Title - Responsive sizing, 42px on md and above */}
            <h1 className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] font-bold mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight break-words">
              {slide.id === 4 ? (
                <>
                  Meet your <span style={{ textDecoration: 'underline', textDecorationColor: 'white', textUnderlineOffset: '4px', transition: 'opacity 0.3s ease-in-out' }}>{rotatingWord}</span> Guru!
                </>
              ) : (
                slide.title
              )}
            </h1>
            
            {/* Subtitle - Responsive text sizing */}
            <p className="mb-6 sm:mb-7 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-xl md:max-w-full mx-auto md:mx-0">
              {slide.subtitle}
            </p>
            
            {/* Button - Responsive sizing */}
            <div className="flex justify-center md:justify-start">
              <button className="border-2 border-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4 text-xs sm:text-sm md:text-base font-semibold hover:bg-white hover:text-black transition-all duration-300 bg-transparent inline-flex flex-col items-center gap-0.5">
                <span className="leading-tight">
                  {slide.buttonText || (slide.id === 2 ? 'GET YOUR MLS BUSINESS CASE' : 'READ MORE')}
                </span>
                {slide.buttonSubtext && slide.buttonSubtext}
              </button>
            </div>
          </div>

          {/* Right - Image with tags - Hidden on mobile */}
          {slide.image && (
            <div className="hidden md:flex relative w-full md:w-[42%] lg:w-[40%] xl:w-[42%] justify-center items-center md:justify-end">
              <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-none">
                <img
                  src={slide.image}
                  alt="Hero"
                  className={`block mx-auto md:mx-0 w-full ${
                    slide.imageFromBottom 
                      ? 'md:w-[110%] lg:w-[115%] xl:w-[120%] max-h-[240px] xs:max-h-[280px] sm:max-h-[320px] md:max-h-[600px] lg:max-h-[680px] xl:max-h-[750px] object-contain md:translate-y-12 lg:translate-y-16 xl:translate-y-20' 
                      : 'max-h-[260px] xs:max-h-[300px] sm:max-h-[340px] md:max-h-[450px] lg:max-h-[550px] xl:max-h-[650px] object-contain'
                  }`}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    ...(slide.imageFromBottom && {
                      objectPosition: 'bottom'
                    })
                  }}
                />
                
                {/* Slide tags/badges - Responsive positioning and sizing */}
                {slide.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className={`absolute bg-white py-1.5 px-3 xs:py-2 xs:px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-md text-[10px] xs:text-xs sm:text-sm md:text-base text-left ${tag.style}`}
                    style={{ minWidth: 80 }}
                  >
                    {tag.text}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation - Dots with Prev/Next - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center px-4 pb-2 sm:pb-3" style={{ zIndex: 3 }}>
        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="text-white hover:text-gray-300 transition-all duration-300 p-2 sm:p-2.5 md:p-3 hover:bg-white/10 rounded-full"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Dots - Responsive sizing */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full border-2 transition-all duration-300 ${
                idx === currentIndex 
                  ? 'bg-white border-white scale-110' 
                  : 'bg-transparent border-gray-400 hover:border-white hover:scale-105'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="text-white hover:text-gray-300 transition-all duration-300 p-2 sm:p-2.5 md:p-3 hover:bg-white/10 rounded-full"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}